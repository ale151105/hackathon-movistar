import React, { useState } from 'react';
import MiRecibo from './MiRecibo';
import ChatBot from './ChatBot';
import NotificacionPush from './NotificacionPush';
function App() {
  const [verChat, setVerChat] = useState(false);

 return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px 10px' }}>
      {/* 1. Muestra la Notificación Push arriba */}
      <NotificacionPush onAbrirChat={() => setChatAbierto(true)} />

      {/* 2. Muestra la pantalla del Recibo de Diana */}
      <MiRecibo onAbrirChat={() => setChatAbierto(true)} />

      {/* 3. Muestra el ChatBot si el usuario hace clic en la notificación o en preguntar */}
      {chatAbierto && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          left: '20px',
          zIndex: 1000
        }}>
          <ChatBot 
            onCerrar={() => setChatAbierto(false)} 
            onVerEstadisticas={() => alert('Abriendo estadísticas de consumo...')}
          />
        </div>
      )}
    </div>
  );
}

export default App;