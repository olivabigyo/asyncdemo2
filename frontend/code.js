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
