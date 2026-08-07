import React, { useState } from 'react';

export default function ChatBot({ onCerrar }) {
  const [mensajes, setMensajes] = useState([
    { id: "msg_001", emisor: "bot", texto: "Hola, detecté un cambio en tu recibo de este mes. ¿Quieres que te explique?", timestamp: "10:14" },
    { id: "msg_002", emisor: "cliente", texto: "Sí, ¿por qué subió?", timestamp: "10:14" },
    { id: "msg_003", emisor: "bot", texto: "Tu recibo subió S/ 22 porque tu promoción de 3 meses terminó el 28 de julio. Ahora pagas el precio regular del plan.", timestamp: "10:15" }
  ]);

  const [inputTexto, setInputTexto] = useState('');

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!inputTexto.trim()) return;

    const nuevoMsg = {
      id: `msg_${Date.now()}`,
      emisor: 'cliente',
      texto: inputTexto,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMensajes((prev) => [...prev, nuevoMsg]);
    setInputTexto('');
  };

  return (
    <div style={{ maxWidth: '420px', margin: '20px auto', height: '520px', border: '1px solid #e0e0e0', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', backgroundColor: '#fff' }}>
      
      {/* Cabecera del Chat */}
      <div style={{ backgroundColor: '#019DF4', color: '#fff', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '20px' }}>🤖</span>
          <div>
            <h4 style={{ margin: 0, fontSize: '15px' }}>Asistente Movistar</h4>
            <span style={{ fontSize: '11px', opacity: 0.8 }}>En línea</span>
          </div>
        </div>
        <button onClick={onCerrar} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '18px', cursor: 'pointer' }}>✖</button>
      </div>

      {/* Lista de Mensajes */}
      <div style={{ flex: 1, padding: '16px', overflowY: 'auto', backgroundColor: '#F8F9FA', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {mensajes.map((msg) => (
          <div
            key={msg.id}
            style={{
              alignSelf: msg.emisor === 'cliente' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.emisor === 'cliente' ? '#019DF4' : '#E9ECEF',
              color: msg.emisor === 'cliente' ? '#fff' : '#212529',
              padding: '10px 14px',
              borderRadius: '14px',
              maxWidth: '75%',
              fontSize: '13px',
              boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
            }}
          >
            <div>{msg.texto}</div>
            <div style={{ fontSize: '10px', textAlign: 'right', marginTop: '4px', opacity: 0.7 }}>{msg.timestamp}</div>
          </div>
        ))}
      </div>
      {/* Efecto Efervescente: Beneficio del plan al cerrar (Componente 6) */}
        <div style={{
          backgroundColor: '#E6F5FD',
          border: '1px dashed #019DF4',
          borderRadius: '12px',
          padding: '10px 14px',
          marginTop: '10px',
          textAlign: 'center'
        }}>
          <span style={{ fontSize: '16px' }}>🎁</span>
          <p style={{ margin: '2px 0 0 0', fontSize: '11px', color: '#0B2739', fontWeight: '600' }}>
            ¡Recuerda que tu plan incluye redes sociales ilimitadas sin consumo de datos!
          </p>
        </div>
      </div>
      {/* Formulario de envío */}
      <form onSubmit={enviarMensaje} style={{ display: 'flex', padding: '10px', borderTop: '1px solid #eee', backgroundColor: '#fff' }}>
        <input
          type="text"
          placeholder="Escribe tu consulta..."
          value={inputTexto}
          onChange={(e) => setInputTexto(e.target.value)}
          style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '20px', outline: 'none', paddingLeft: '14px', fontSize: '13px' }}
        />
        <button type="submit" style={{ marginLeft: '8px', padding: '10px 16px', backgroundColor: '#019DF4', color: '#fff', border: 'none', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>
          Enviar
        </button>
      </form>

    </div>
  );
}