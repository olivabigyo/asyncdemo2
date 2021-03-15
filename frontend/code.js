'use strict';

// ------------------------------------------------------------------
// Logging
// -------


const logBox = document.getElementById('logs');

function log(entry) {

    console.log(entry);

    // create p for new entry
    const newEntry = document.createElement('p');
    // populate with entry content
    newEntry.innerText = entry;
    // place it in the DOM
    logBox.appendChild(newEntry);
    // We want to see the last logs, scroll down
    // logBox.scrollTop = logBox.scrollHeight;
}

log('Hello');


const exampleResponseToGetMessages = {
    "ok": true,
    "messages": [
        { "id": "1", "name": "Kata", "content": "Hallo" },
        { "id": "2", "name": "Kata", "content": "Ist jemand da?" },
        { "id": "3", "name": "Anonym", "content": "Nope" },
        { "id": "4", "name": "Kata", "content": "Oh, schade." },
        { "id": "5", "name": "Anonym", "content": "Haha, war nur ein Scherz." },
        { "id": "6", "name": "Anonym", "content": "Ich werde jetzt eine lange message schreiben damit es mehrere Zeilen braucht" },
        { "id": "7", "name": "Kata", "content": "<b>Thanks</b>" },
        { "id": "8", "name": "Kata", "content": "<script>alert('I am annoying!')</script>" },
        { "id": "9", "name": "Kata", "content": "<img src='x' onerror='alert(\"You are attacked!\")'>" },
    ]
};

function showMessages(messages) {
    const messageBox = document.getElementById('messages');
    messageBox.innerHTML = '';
    for (const message of messages) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerText = message.name + ': ' + message.content;
        messageBox.appendChild(messageDiv);
    }
}

// showMessages(exampleResponseToGetMessages.messages);

const apiEndpoint = 'http://localhost/asyncdemo2/backend/server.php';

async function getMessages() {
    log('Sending getMessages request...');
    try {
        const response = await fetch(apiEndpoint);

        if (!response.ok) {
            log(`Fetch returned with: ${response.status} (${response.statusText})`);
            return;
        }

        const data = await response.json();

        if (!data.messages) {
            log('Response contains no messages field');
            return;
        }

        showMessages(data.messages);
        log('Success: getMessages.');

    } catch (exception) {
        log('Error: ' + exception);
    }
}

getMessages();

// What we expect here?
// What went wrong?
