let messagesList = [{ messageID: "1", text: "message1", sender: "bot"},
                    { messageID: "2", text: "message2", sender: "alex"},
                    { messageID: "3", text: "message3", sender: "alex"},
                    { messageID: "4", text: "message4", sender: "bot"},
                    { messageID: "55", text: "message55", sender: "bot"}];
let usersDB = [{login: "alex", password: "12345"},
               {login: "bot", password: "qwerty"}]

export function getMessages(currentDialogID){ // не доделано, пока что токен тут даже не используется
    return messagesList;
}

export function addMessage(newMessage){
    messagesList.push(newMessage);
}

export function getToken(name, password) {
    if (usersDB.includes({login: name,  password: password})){
        return(name+password);
    }
    return null;
}
/*
class User {
    constructor(login, password) {

    }
}*/