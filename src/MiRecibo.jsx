import React, { useState } from 'react';

export default function MiRecibo({ onAbrirChat }) {
  // Contrato de datos oficial según el documento
  const datosRecibo = {
    recibo_actual: {
      monto: 138.90,
      fecha_emision: "2026-08-01",
      fecha_vencimiento: "2026-08-15",
      plan: "Postpago 40GB"
    },
    recibo_anterior: {
      monto: 116.90,
      fecha_emision: "2026-07-01"
    },
    diferencia: {
      monto: 22.00,
      porcentaje: 18.8
    },
    conceptos: [
      {
        nombre: "Fin de promoción",
        monto: 22.00,
        descripcion_corta: "Tu promo de 3 meses terminó el 28 de julio"
      }
    ],
    estado_pago: "pendiente"
  };

  return (
    <div style={{ maxWidth: '420px', margin: '20px auto', fontFamily: 'Segoe UI, sans-serif', border: '1px solid #e0e0e0', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', backgroundColor: '#ffffff', color: '#333' }}>
      
      {/* Encabezado Movistar */}
      <div style={{ backgroundColor: '#019DF4', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold' }}>Movistar</h2>
        <p style={{ margin: '4px 0 0', fontSize: '14px', opacity: 0.9 }}>{datosRecibo.recibo_actual.plan}</p>
      </div>

      {/* Contenido Principal */}
      <div style={{ padding: '24px' }}>
        
        {/* Sección de Monto Principal */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span style={{ fontSize: '13px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total a Pagar</span>
          <h1 style={{ margin: '6px 0', fontSize: '40px', color: '#019DF4', fontWeight: 'bold' }}>S/ {datosRecibo.recibo_actual.monto.toFixed(2)}</h1>
          
          <span style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', textTransform: 'capitalize',
            backgroundColor: datosRecibo.estado_pago === 'pendiente' ? '#FFF3CD' : '#D4EDDA',
            color: datosRecibo.estado_pago === 'pendiente' ? '#856404' : '#155724'
          }}>
            {datosRecibo.estado_pago}
          </span>
        </div>

        {/* Comparativa con Mes Anterior */}
        <div style={{ backgroundColor: '#F4F7F9', padding: '14px', borderRadius: '12px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', marginBottom: '8px' }}>
            <span style={{ color: '#555' }}>Mes Anterior ({datosRecibo.recibo_anterior.fecha_emision}):</span>
            <span style={{ color: '#777', textDecoration: 'line-through' }}>S/ {datosRecibo.recibo_anterior.monto.toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', fontWeight: 'bold', color: '#D32F2F' }}>
            <span>Variación (+{datosRecibo.diferencia.porcentaje}%):</span>
            <span>+ S/ {datosRecibo.diferencia.monto.toFixed(2)}</span>
          </div>
        </div>

        {/* Explicación de Conceptos */}
        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#019DF4' }}>¿Por qué cambió mi recibo?</h4>
          {datosRecibo.conceptos.map((c, i) => (
            <div key={i} style={{ borderLeft: '3px solid #019DF4', paddingLeft: '10px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 'bold' }}>
                <span>{c.nombre}</span>
                <span>+ S/ {c.monto.toFixed(2)}</span>
              </div>
              <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#666' }}>{c.descripcion_corta}</p>
            </div>
          ))}
        </div>

        {/* Botón de Ayuda Asistente */}
        <button 
          onClick={onAbrirChat}
          style={{
            width: '100%', padding: '12px', marginBottom: '10px', backgroundColor: '#E1F5FE', color: '#019DF4',
            border: '1px solid #019DF4', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
          }}
        >
          💬 Consultar al Asistente Virtual
        </button>

        {/* Botón Pagar */}
        <button style={{
          width: '100%', padding: '14px', backgroundColor: '#5CB85C', color: '#fff',
          border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer'
        }}>
          Pagar Ahora (Vence {datosRecibo.recibo_actual.fecha_vencimiento})
        </button>

      </div>
    </div>
  );
}