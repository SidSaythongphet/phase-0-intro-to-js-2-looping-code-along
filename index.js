// Code your solutions in this file

const friend = ["Guadalupe", "Ollie", "Aki"]

function writeCards(friend, event) {
    let messages = [];
    for (let i = 0; i < friend.length; i++) {
        messages.push(`Thank you, ${friend[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}
writeCards(friend);

function countDown(number) {
    while(number >= 0) {
        console.log(number);
        number--;
    }
}