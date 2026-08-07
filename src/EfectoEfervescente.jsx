import React from 'react';

export default function EfectoEfervescente({ beneficio = "10 GB adicionales en tu plan Postpago" }) {
  return (
    <div style={{
      backgroundColor: '#E6F5FD',
      border: '1px solid #019DF4',
      borderRadius: '12px',
      padding: '12px 16px',
      marginTop: '12px',
      textAlign: 'center'
    }}>
      <span style={{ fontSize: '18px' }}>🎉</span>
      <h5 style={{ margin: '4px 0', color: '#0B2739', fontSize: '13px' }}>
        ¡Gracias por consultar!
      </h5>
      <p style={{ margin: 0, fontSize: '11px', color: '#555' }}>
        Recuerda que tu plan incluye: <strong>{beneficio}</strong>.
      </p>
    </div>
  );
}