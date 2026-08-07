import React, { useState } from 'react';
import MiRecibo from './MiRecibo';
import ChatBot from './ChatBot';
import NotificacionPush from './NotificacionPush';
function App() {
  const [verChat, setVerChat] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#eef2f5', padding: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {!verChat ? (
        <>
          {/* Muestra la notificación push arriba del recibo */}
          <NotificacionPush onAbrirChat={() => setVerChat(true)} />
          
          {/* Pantalla de Mi Recibo */}
          <MiRecibo onAbrirChat={() => setVerChat(true)} />
        </>
      ) : (
        /* Pantalla del ChatBot con la explicación */
        <ChatBot 
          onCerrar={() => setVerChat(false)} 
          onVerEstadisticas={() => alert('Mostrando estadísticas de consumo...')}
        />
      )}

    </div>
  );
}

export default App;