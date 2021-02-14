import React from 'react';
import './message.css';
const Messages = (props) => {
  const isUser = props.userName === props.message.user;
  console.log(isUser);
  return (
    <div>
      <div className={isUser ? 'wrap-r' : 'wrap-m'}>
        <div className="wrap-content">
          <div className="wrap-usre">{props.message.user}:</div>
        </div>
        <div className="wrap-messages">{props.message.message}</div>
      </div>
    </div>
  );
};

export default Messages;
