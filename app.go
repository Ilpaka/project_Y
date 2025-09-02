package main

import (
	"fmt"
	"net/http"
	"time"

	"github.com/shirou/gopsutil/v3/cpu"
)

func handlerCpu(w http.ResponseWriter, r *http.Request) {
	// Процентная загрузка CPU
	cpuPercent, err := cpu.Percent(time.Second, false)
	if err == nil {
		fmt.Fprintf(w, "CPU загрузка: %.2f%%\n", cpuPercent[0])
	}
}

func main() {
	fmt.Println("Управление ПК с телефона")

	http.HandleFunc("/cpu", handlerCpu)
	http.ListenAndServe("localhost:8080", nil)
}
