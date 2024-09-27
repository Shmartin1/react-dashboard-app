import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  removeMessage, 
  setRemovingMessageId,
  clearRemovingMessageId,
  setReenteringMessageId,
  clearReenteringMessageId,
  reenterMessage
} from '../../store/slices/widgetSlices/recentMessagesWidgetSlice';
import { RootState, AppDispatch } from '../../store';
import { TrashIcon } from '@heroicons/react/solid';

interface RecentMessageWidgetProps {
  className?: string;
}

function RecentMessageWidget({ className }: RecentMessageWidgetProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { messages, removingMessageIds, reenteringMessageIds } = useSelector((state: RootState) => state.recentMessages);

  const removeAndReenterMessage = useCallback((id: number) => {
    dispatch(setRemovingMessageId(id));
    
    setTimeout(() => {
      dispatch(removeMessage(id));
      dispatch(clearRemovingMessageId(id));
      
      setTimeout(() => {
        dispatch(reenterMessage(id));
        dispatch(setReenteringMessageId(id));
        
        setTimeout(() => {
          dispatch(clearReenteringMessageId(id));
        }, 800); // Duration of fade-in animation
      }, 300); // Short delay before re-entering
    }, 500); // Duration of swipe-out animation
  }, [dispatch]);

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