let messagesList = [{ messageID: "202061821527", text: "message1", sender: "bot"},
                    { messageID: "202061821533", text: "message2", sender: "alex"},
                    /*{ messageID: "202061821544", text: "message3", sender: "alex"},
                    { messageID: "202061821546", text: "message4", sender: "bot"},
                    { messageID: "202061821550", text: "message55", sender: "bot"}*/];

let usersDB = [{login: "alex", password: "12345"},
               {login: "bot", password: "qwerty"}]

function getMessageID() { // генерирует уникальный ID для сообщения
    let currentDate = new Date();
    return currentDate.getUTCFullYear().toString() + currentDate.getUTCMonth().toString() + currentDate.getUTCDate().toString() +
    currentDate.getUTCHours().toString() + currentDate.getUTCMinutes().toString() + currentDate.getUTCSeconds().toString();
}

export function addMessage(author, text, dialogID) { // dialogID пока что не используется
    /*messagesList = messagesList. + [{
        messageID: getMessageID(),
        text: text,
        sender: author
    }];*/
    messagesList.push({
        messageID: getMessageID(),
        text: text,
        sender: author
    });
    alert(messagesList);
}

let test = 10;

export function func() {
    test++;
    return test;
}

/*
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}*/


export function getMessages(currentDialogID) { // не доделано, пока что токен тут даже не используется
    console.log(messagesList.toString);
    /*alert(messagesList);*/
    return messagesList;
}
/*
export function addMessage(author, text, dialogID) {


    messagesList.push(newMessage);
}*/
/*
export function getToken(name, password) {
    if (usersDB.includes({login: name,  password: password})){
        return(name+password);
    }
    return null;
}

class Dialog {
    constructor(firstUserName, secondUserName){
        this.dialogID = (firstUserName < secondUserName)
    }
}
/*
class User {
    constructor(login, password) {

    }
}*/