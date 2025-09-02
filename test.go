package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	var message string
	input_messsage(&message)
	send_message(&message)
}

func input_messsage(message *string) {
	fmt.Println("Введите своё сообщение:")
	reader := bufio.NewReader(os.Stdin)
	*message, _ = reader.ReadString('\n')
}

func send_message(message *string) {
	fmt.Println(*message)
}
