import React, { useState } from 'react';
import MiRecibo from './MiRecibo';
import ChatBot from './ChatBot';
import PushNotificacion from './PushNotificacion';
import CierreEfervescente from './CierreEfervescente';

function App() {
  const [pantalla, setPantalla] = useState('recibo');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#eef2f5', padding: '20px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      {pantalla === 'recibo' && (
        <MiRecibo onAbrirChat={() => setPantalla('chat')} />
      )}

      {pantalla === 'chat' && (
        <ChatBot onCerrar={() => setPantalla('recibo')} />
      )}

      {pantalla === 'push' && (
        <PushNotificacion onCerrar={() => setPantalla('recibo')} />
      )}

      {pantalla === 'cierre' && (
        <CierreEfervescente onCerrar={() => setPantalla('recibo')} />
      )}

      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <button onClick={() => setPantalla('push')} style={{ fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid #ccc', background: '#fff', cursor: 'pointer' }}>
          Ver notificación
        </button>
        <button onClick={() => setPantalla('cierre')} style={{ fontSize: '12px', padding: '6px 12px', borderRadius: '8px', border: '1px solid #ccc', background: '#fff', cursor: 'pointer' }}>
          Ver cierre
        </button>
      </div>

    </div>
  );
}

export default App;