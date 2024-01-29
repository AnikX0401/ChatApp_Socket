import React from 'react';
import styles from './styles.module.css';
import RoomAndUsersColumn from './RoomsAndUsers';
import SendMessage from './SendMessage';
import MessagesReceived from './Messages';

interface ChatProps {
  username: string;
  room: string;
  socket: any; // Replace 'any' with the actual type of 'socket' if possible
}

const Chat: React.FC<ChatProps> = ({ username, room, socket }) => {
  return (
    <div className={styles.chatContainer}>
      <RoomAndUsersColumn socket={socket} username={username} room={room} />

      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;
