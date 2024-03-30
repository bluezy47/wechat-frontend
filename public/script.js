
const connectWBButton = document.querySelector('#websocket-conn');
const sendMessageButton = document.querySelector('#send-message');
let messageInput = document.querySelector('#user-message');
//
let websocket = null;
let userID = "12uES_17";
let senderID = "12uES_18";
//
if (connectWBButton) {
    connectWBButton.addEventListener("click", () => {
        // check if a websocket connection already exists...
        if (websocket) {
            console.log('WebSocket connection already established');
            return;
        }
        // create a new websocket connection...
        websocket = new WebSocket(`ws://localhost:5050/ws?userID=${userID}`);
        websocket.onopen = function(event) {
            console.log('WebSocket connection established');
        };
        //
        websocket.onmessage = function(event) {
            console.log('Message received from server:', event.data);
        };
        //
        websocket.onerror = function(event) {
            console.error('WebSocket error:', event);
        };
        //
        websocket.onclose = function(event) {
            console.log('WebSocket connection closed');
            websocket = null;
        };
    });
}

// send message to the server...
if (sendMessageButton) {
    sendMessageButton.addEventListener("click", () => {
        if (!websocket) {
            console.error('WebSocket connection not established');
            return;
        }
        let message = messageInput.value;
        if (!message) {
            console.error('Message cannot be empty');
            return;
        }
        websocket.send(JSON.stringify({content: message, to: senderID}));
        messageInput.value = '';
    });
}
