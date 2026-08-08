import React, { useState } from 'react';

export default function PushNotificacion({ onCerrar }) {
  const [notificaciones] = useState([
    {
      id: "push_001",
      titulo: "Tu consumo subió 18% esta semana",
      texto: "Está por encima de tu promedio. Toca para ver qué lo está impulsando.",
      timestamp: "ahora",
      icono: "⚡",
      destacada: true
    },
    {
      id: "push_002",
      titulo: "Tu recibo ya está disponible",
      texto: "Revísalo antes del 15 para evitar cargos por mora.",
      timestamp: "hace 2 h",
      icono: "🧾",
      destacada: false
    }
  ]);

  return (
    <div style={{ maxWidth: '420px', margin: '20px auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', backgroundColor: '#0B1A2B', padding: '28px 18px 20px' }}>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', color: '#fff' }}>
        <span style={{ fontSize: '13px', opacity: 0.7 }}>Vista previa de notificación</span>
        <button onClick={onCerrar} style={{ background: 'none', border: 'none', color: '#fff', fontSize: '16px', cursor: 'pointer', opacity: 0.7 }}>✖</button>
      </div>

      <div style={{ textAlign: 'center', color: '#fff', marginBottom: '24px' }}>
        <div style={{ fontSize: '38px', fontWeight: 'bold', letterSpacing: '1px' }}>9:41</div>
        <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '2px' }}>Viernes, 7 de agosto</div>
      </div>

      {notificaciones.map((n) => (
        <div
          key={n.id}
          style={{
            display: 'flex',
            gap: '12px',
            backgroundColor: n.destacada ? 'rgba(1,157,244,0.18)' : 'rgba(255,255,255,0.06)',
            border: n.destacada ? '1px solid #019DF4' : '1px solid rgba(255,255,255,0.08)',
            borderRadius: '14px',
            padding: '12px 14px',
            marginBottom: '10px'
          }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            backgroundColor: '#019DF4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            flexShrink: 0
          }}>
            {n.icono}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#fff', opacity: 0.85, letterSpacing: '0.5px' }}>MOVISTAR</span>
              <span style={{ fontSize: '11px', color: '#fff', opacity: 0.5 }}>{n.timestamp}</span>
            </div>
            <div style={{ fontSize: '13.5px', fontWeight: 'bold', color: '#fff', margin: '3px 0 2px' }}>{n.titulo}</div>
            <div style={{ fontSize: '12.5px', color: '#fff', opacity: 0.75, lineHeight: 1.4 }}>{n.texto}</div>
          </div>
        </div>
      ))}
    </div>
  );
}