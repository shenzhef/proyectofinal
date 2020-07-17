import React, { Component, useState, useEffect } from 'react';
import './index.css';
import { FaPowerOff } from 'react-icons/fa';
import Arrow from 'react-arrow';
import socketIOClient from 'socket.io-client';
import fire from './config/Fire';
const ENDPOINT = 'http://localhost:3001';

const Home = () => {
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on('test', (data) => {
      console.log('dasdas');
    });
  }, []);

  return (
    <div
      className="main"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        height: '100vh',
        backgroundColor: '#111',
        color: '#fff',
      }}
    >
      {/* <div
        style={{
          marginBottom: '30px',
          marginTop: '45px',
          display: 'flex',
          // width: '200px',
          flexDirection: 'row',
        }}
      >
        <FaPowerOff size={35} />
        <div
          style={{ marginLeft: '5px', marginTop: '4px' }}
          onKeyPress={() => fire.auth.signOut()}
        >
          <h4>Apagar</h4>
        </div>
      </div> */}
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <p>Probar conexion</p>
      </div>
      <div style={{ position: 'absolute', top: 25, left: 15 }}>
        <p style={{ fontFamily: 'MessinaSansWeb-Bold', fontSize: 30 }}>
          Hola, Martin
        </p>
      </div>

      <div style={{ flexDirection: 'row', marginTop: '90px' }}>
        <Arrow
          direction="up"
          shaftWidth={45}
          shaftLength={45}
          headWidth={80}
          headLength={55}
          fill="#adff19"
          fill="#adff19"
          stroke="#adff19"
          strokeWidth={2}
        />
      </div>

      <div
        style={{
          justifyContent: 'space-evenly',
          display: 'flex',
          width: '100%',
        }}
      >
        {/* <div> */}
        <Arrow
          direction="left"
          shaftWidth={45}
          shaftLength={45}
          headWidth={80}
          headLength={55}
          fill="#adff19"
          fill="#adff19"
          stroke="#adff19"
          strokeWidth={2}
          onClick={() => alert('You clicked the arrow!')}
        />
        <div
          style={{
            padding: '15px 25px 15px 25px',
            background: '#adff19',
            borderRadius: '5px',
            margin: '10px',
            color: '#111',
          }}
        >
          <p
            style={{
              fontFamily: 'MessinaSansWeb-Bold',
              fontSize: 22,
              margin: 0,
            }}
          >
            Frenar
          </p>
        </div>
        <Arrow
          direction="right"
          shaftWidth={45}
          shaftLength={45}
          headWidth={80}
          headLength={55}
          fill="#adff19"
          fill="#adff19"
          stroke="#adff19"
          strokeWidth={2}
          onClick={() => alert('You clicked the arrow!')}
        />
      </div>

      <div style={{ flexDirection: 'row' }}>
        <Arrow
          direction="down"
          shaftWidth={45}
          shaftLength={45}
          headWidth={80}
          headLength={55}
          fill="#adff19"
          stroke="#adff19"
          strokeWidth={2}
          onClick={() => alert('You clicked the arrow!')}
        />
      </div>

      <div
        style={{
          padding: '30px',
          backgroundColor: '#222',
          borderRadius: '12px',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '15px',
        }}
      >
        <p>Vel. Promedio: 5km/h</p>
        <p>No se encuentran objetos cercanos</p>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
        }}
        onClick={() => fire.auth().signOut()}
      >
        <p>Cerrar Sesion</p>
      </div>
    </div>
  );
};

export default Home;
