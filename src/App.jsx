import React from 'react';
import { useState } from 'react';
import styles from './style.module.css'


const App = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState('');

  const calcularIMC = () => {
    const alturaMetros = altura / 100; 
    const calculoIMC = peso / (alturaMetros * alturaMetros); 
    setIMC(calculoIMC.toFixed(2));
  };

  return (
    <div className={styles.container}>
      <h1>Calculadora de IMC</h1>
      <div>
        <label className={styles.tagLabel}>Altura (cm):</label>
        <input className={styles.tagInput}
          type="number"
          value={altura}
          onChange={(e) => setAltura(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label className={styles.tagLabel} >Peso (kg):</label>
        <input className={styles.tagInput}
          type="number"
          value={peso}
          onChange={(e) => setPeso(parseFloat(e.target.value))}
        />
      </div>
      <button  className={styles.button} onClick={calcularIMC}>Calcular</button>
      <div>
        {imc > 0 && (
          <p className={styles.response}>
            Seu IMC é:  <b> {imc} </b>
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
