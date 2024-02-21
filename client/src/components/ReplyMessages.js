// ReplyMessages.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReplyMessages() {
  const [conversations, setConversations] = useState([]);
  const SAMPLE_MESSAGE = 'Hello, this is a sample message!';

  useEffect(() => {
    // Fetch user conversations from the server
    axios.get('/api/message/conversations')
      .then(response => setConversations(response.data))
      .catch(error => console.error('Error fetching conversations:', error));
  }, []);

  const handleSendMessage = (userId) => {
    // Implement your logic to send a message to the user
    // You may use Axios or fetch to make a POST request to the server
    axios.post(`/api/message/send-message/${userId}`, { message: SAMPLE_MESSAGE })
      .then(response => console.log('Message sent successfully:', response.data))
      .catch(error => console.error('Error sending message:', error));
  };

  return (
    <div>
      <h2>Reply to Messages</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation.userId}>
            {conversation.userName}
            <button onClick={() => handleSendMessage(conversation.userId)}>
              Send Sample Message
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReplyMessages;
