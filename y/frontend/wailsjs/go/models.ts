export namespace main {
	
	export class Chat {
	    id: number;
	    name: string;
	    avatar: string;
	    lastMessage: string;
	    lastTime: string;
	    unreadCount: number;
	    isOnline: boolean;
	
	    static createFrom(source: any = {}) {
	        return new Chat(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.avatar = source["avatar"];
	        this.lastMessage = source["lastMessage"];
	        this.lastTime = source["lastTime"];
	        this.unreadCount = source["unreadCount"];
	        this.isOnline = source["isOnline"];
	    }
	}
	export class Message {
	    id: number;
	    text: string;
	    sender: string;
	    avatar: string;
	    time: string;
	    isOwn: boolean;
	    status: string;
	
	    static createFrom(source: any = {}) {
	        return new Message(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.text = source["text"];
	        this.sender = source["sender"];
	        this.avatar = source["avatar"];
	        this.time = source["time"];
	        this.isOwn = source["isOwn"];
	        this.status = source["status"];
	    }
	}

}

