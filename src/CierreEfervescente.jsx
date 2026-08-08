import React from 'react';

export default function CierreEfervescente({ onCerrar, mensaje }) {
  const burbujas = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.round(Math.random() * 100),
    size: 4 + Math.round(Math.random() * 8),
    delay: (Math.random() * 3).toFixed(2),
    duracion: (2.4 + Math.random() * 2.2).toFixed(2)
  }));

  return (
    <div style={{ maxWidth: '420px', margin: '20px auto', height: '480px', borderRadius: '16px', overflow: 'hidden', position: 'relative', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', background: 'linear-gradient(180deg, #019DF4 0%, #0170B0 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 32px' }}>

      <style>{`
        @keyframes subirBurbuja {
          0% { transform: translateY(0) scale(1); opacity: 0.9; }
          100% { transform: translateY(-500px) scale(0.6); opacity: 0; }
        }
      `}</style>

      {burbujas.map((b) => (
        <span
          key={b.id}
          style={{
            position: 'absolute',
            left: `${b.left}%`,
            bottom: '-20px',
            width: `${b.size}px`,
            height: `${b.size}px`,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.55)',
            animation: `subirBurbuja ${b.duracion}s ${b.delay}s infinite ease-in`
          }}
        />
      ))}

      <div style={{
        width: '72px',
        height: '72px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.18)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20px',
        zIndex: 2
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#019DF4',
          fontSize: '22px',
          fontWeight: 'bold'
        }}>
          ✓
        </div>
      </div>

      <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', textAlign: 'center', marginBottom: '8px', zIndex: 2 }}>
        Acción aplicada
      </div>
      <div style={{ fontSize: '13.5px', color: '#E6F4FF', textAlign: 'center', lineHeight: 1.5, marginBottom: '28px', zIndex: 2 }}>
        {mensaje || 'Activamos tu recomendación de ahorro. La verás reflejada en tu próximo recibo.'}
      </div>

      <button
        onClick={onCerrar}
        style={{
          zIndex: 2,
          backgroundColor: '#fff',
          color: '#019DF4',
          border: 'none',
          borderRadius: '20px',
          padding: '12px 32px',
          fontSize: '14px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Listo
      </button>
    </div>
  );
}
