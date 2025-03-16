// Code your solutions in this file
function writeCards(namesArray, eventName) {
    let messagesArray = [];
    for (let i = 0; i < namesArray.length; i++) {
        messagesArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return messagesArray

}

let msgArray = writeCards(['Mary', 'Jane'], 'wedding');
console.log(msgArray);

function countDown(n) {
    let i = n
    
    while (i >= 0) {
        console.log(i);
        i--;
    }
}

countDown(10);