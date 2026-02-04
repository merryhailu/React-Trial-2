import React from 'react';
import { useState, useEffect } from 'react';
import useMessageStore from '../store/useMessageStore';

function Snackbar() {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    const unsubscribe = useMessageStore.subscribe(
      ({ message, messageType }) => {
        setMessage(message);
        setMessageType(messageType);

        const timer = setTimeout(() => {
          setMessage('');
          setMessageType('');
        }, 3000);

        return () => clearTimeout(timer);
      },

      (state) => [state.message, state.messageType]
    );

    return () => unsubscribe();
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 transform 
    ${
      messageType === 'success' ? 'bg-green-700' : 'bg-red-700'
    } rounded bg-opacity-70 p-4 text-white`}
    >
      {message && <p>{message}</p>}
    </div>
  );
}

export default Snackbar;
