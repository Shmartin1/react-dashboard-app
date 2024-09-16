import React, { useState, useCallback} from 'react';
import { TrashIcon } from '@heroicons/react/solid';

function RecentMessageWidget({ className }) {
  const initialMessages = [
    { id: 1, text: "New update available for the dashboard.", timestamp: "2 hours ago" },
    { id: 2, text: "Meeting scheduled at 3 PM today.", timestamp: "5 hours ago" },
    { id: 3, text: "New user signup: John Doe", timestamp: "1 day ago" }
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [removingMessageIds, setRemovingMessageIds] = useState([]);
  const [reenteringMessageIds, setReenteringMessageIds] = useState([]);

  const removeAndReenterMessage = useCallback((id) => {
    setRemovingMessageIds((prev) => [...prev, id]);
    
    setTimeout(() => {
      setMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
      setRemovingMessageIds((prev) => prev.filter((msgId) => msgId !== id));
      
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, initialMessages.find(msg => msg.id === id)]);
        setReenteringMessageIds((prev) => [...prev, id]);
        
        setTimeout(() => {
          setReenteringMessageIds((prev) => prev.filter((msgId) => msgId !== id));
        }, 800); // Duration of fade-in animation
      }, 300); // Short delay before re-entering
    }, 500); // Duration of swipe-out animation
  }, []);

  const handleTrashClick = useCallback(() => {
    const animateMessagesSequentially = (index = 0) => {
      if (index < messages.length) {
        removeAndReenterMessage(messages[index].id);
        setTimeout(() => animateMessagesSequentially(index + 1), 500);
      }
    };
    animateMessagesSequentially();
  }, [messages, removeAndReenterMessage]);

  return (
    <div className={`widget-card ${className}`}>
      <div className="flex-justify-center">
        <h2 className="widget-title select-none">Recent Messages</h2>
        <TrashIcon
          className="trash-icon-hover"
          onClick={handleTrashClick}
        />
      </div>
      <ul className="space-y-2">
        {messages.map((message) => (
          <li 
            key={message.id} 
            className={`recent-message transition-all duration-500 ease-in-out ${
              removingMessageIds.includes(message.id) ? 'translate-x-full opacity-0' : ''
            } ${
              reenteringMessageIds.includes(message.id) ? 'opacity-0 translate-x-0' : ''
            }`}
          >
            <p className="message-text">{message.text}</p>
            <span className="timestamp-label">{message.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentMessageWidget;