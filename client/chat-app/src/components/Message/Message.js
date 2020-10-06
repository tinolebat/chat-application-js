import React from 'react';
import ReactEmoji from 'react-emoji';


import './Message.css';


const Messages = ({message: {user, text}, name}) => {
    let isSentbyCurrentUser = false;

    const trimmedname = name.trim().toLowerCase();

    if(user === trimmedname){
        isSentbyCurrentUser = true;
    }

    return (
        // If else statement
        isSentbyCurrentUser 
        ? (
            <div className="messageContainerUser justifiedEnd">
                <p className="sentText pr-5">{trimmedname}</p>
                <div className="messageBox backgroundBlue">
                  <p className="messageText colorWhite">{ ReactEmoji.emojify(text)}</p>
                </div>
            </div>

        ) : (
            <div className="messageContainer justifiedStart">
                <div className="messageBox backgroundLight">
                  <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
    )
}

export default Messages;