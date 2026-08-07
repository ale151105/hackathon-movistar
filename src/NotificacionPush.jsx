import React from 'react';

export default function NotificacionPush({ onAbrirChat }) {
  return (
    <div style={{
      maxWidth: '420px',
      margin: '15px auto',
      fontFamily: 'Segoe UI, sans-serif'
    }}>
      {/* Notificación Push de Alerta (Gravedad Roja) */}
      <div 
        onClick={onAbrirChat}
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '14px 16px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
          borderLeft: '5px solid #E63780',
          cursor: 'pointer'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '20px',
              height: '20px',
              backgroundColor: '#019DF4',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 'bold'
            }}>M</div>
            <span style={{ fontSize: '13px', color: '#555', fontWeight: '600' }}>Mi Movistar</span>
          </div>
          <span style={{ fontSize: '11px', color: '#999' }}>Ahora</span>
        </div>

        <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#0b2739' }}>
          Variación en tu recibo de este mes
        </h4>
        <p style={{ margin: 0, fontSize: '12px', color: '#555', lineHeight: '1.4' }}>
          Detectamos un incremento (+S/ 22.00) por fin de promoción. Toca para ver la explicación.
        </p>
      </div>
    </div>
  );
}