import React, { useState } from 'react';
import MiRecibo from './MiRecibo';
import ChatBot from './ChatBot';

function App() {
  const [verChat, setVerChat] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#eef2f5', padding: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {!verChat ? (
        <MiRecibo onAbrirChat={() => setVerChat(true)} />
      ) : (
        <ChatBot onCerrar={() => setVerChat(false)} />
      )}

    </div>
  );
}

export default App;