let usersDB = [{ID: "971081011204950515253"}, // login: "alex", password: "12345"
               {ID: "98111116113119101114116121"}]; // login: "bot", password: "qwerty"
let messagesList = [{ messageID: "202061821527", text: "Здравствуйте, я демонстрационный бот, который будет повторять за вами сообщения", sender: "bot"},
                    { messageID: "202061821533", text: "Демонстрационное сообщение", sender: "alex"}];

function getMessageID() { // генерирует уникальный ID для сообщения
    let currentDate = new Date();
    return currentDate.getUTCFullYear().toString() + currentDate.getUTCMonth().toString() + currentDate.getUTCDate().toString() +
    currentDate.getUTCHours().toString() + currentDate.getUTCMinutes().toString() + currentDate.getUTCSeconds().toString();
}
function addMessage(author, text) {
    messagesList.push({
        messageID: getMessageID(),
        text: text,
        sender: author
    });
}
export function sendMessage(author, text) {
    addMessage(author, text);
    addMessage("bot", text);
}
function getUserID(name, password) {
    return Array.from(name + password, currentLetter => currentLetter.charCodeAt()).join("");
}
export function getToken(name, password) {
    let userID = getUserID(name, password);
    if(usersDB.some((item)=>{return userID === item.ID})) {
        let currentDate = new Date();
        return currentDate.getUTCHours().toString() + currentDate.getUTCMinutes().toString() + currentDate.getUTCSeconds().toString();
    }
    else {
        return "";
    }
}
export function getMessages() {
    return messagesList;
}