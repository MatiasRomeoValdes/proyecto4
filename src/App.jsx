
import { db } from './firebase';
import { useState, useEffect } from 'react';
import './App.css'
import { collection,  getDocs } from 'firebase/firestore';

const App = () => {

  useEffect (async () => { 
    const listado_peliculas = obtenerListadoDePeliculas();
    console.log(listado_peliculas)

  }, [] );

  const obtenerListadoDePeliculas = async () => {
  const snapshot = await getDocs(collection(db, 'Peliculas'));
  };

return (
  <div>
    <h1>Listado de Peliculas</h1>
  </div>
)
}
export default App
