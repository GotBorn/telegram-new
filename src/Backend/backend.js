let messagesList = [{ text: "message1", sender: "bot"},
                    { text: "message2", sender: "alex"},
                    { text: "message3", sender: "alex"},
                    { text: "message4", sender: "bot"}];
let usersDB = [{login: "alex", password: "12345"},
               {login: "bot", password: "qwerty"}]

export function getMessages(token){ // не доделано, пока что токен тут даже не используется
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