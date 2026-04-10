import React, { useState } from 'react';
import './styles.css';


// Estilos rápidos via constantes
const styles = {
  container: { padding: '20px', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' },
  card: { border: '1px solid #ddd', borderRadius: '8px', padding: '15px', marginBottom: '20px', backgroundColor: '#f9f9f9'},

  button: { padding: '10px 20px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' },
  activeText: { color: '#2e7d32', fontWeight: 'bold', marginTop: '10px' }
};

const App = () => {
  const [etapa, setEtapa] = useState(0);

  const aulas = [
    { title: "Luz Solar", desc: "A planta absorve energia através da clorofila." },
    { title: "Água e CO2", desc: "A planta retira água do solo e dióxido de carbono do ar." },
    { title: "Glicose e Oxigênio", desc: "A energia é convertida em alimento (açúcar) e libera oxigênio." }
  ];

  return (
    <div style={styles.container}>
      <header className='elemento' >
        <h1>🌿 Aula Interativa: Fotossíntese</h1>
        <p>Clique nos botões abaixo para entender como as plantas produzem seu próprio alimento.</p>
      </header>

      <hr />

      {/* Seção Interativa */}
      <section style={styles.card}>
        <h2 style={{color:'red'}}>Etapa Atual: {aulas[etapa].title}</h2>
        <p>{aulas[etapa].desc}</p>
        
        <div  style={{ display: 'flex', gap: '10px', justifySelf: 'center'}}>
          <button style={styles.button} onClick={() => setEtapa(0)}>1. Luz</button>
          <button style={styles.button} onClick={() => setEtapa(1)}>2. Absorção</button>
          <button style={styles.button} onClick={() => setEtapa(2)}>3. Resultado</button>
        </div>
      </section>

      {/* Componente de Quiz */}
      <Quiz />
    </div>
  );
};

const Quiz = () => {
  const [respondido, setRespondido] = useState(false);

  return (
    <section style={{ ...styles.card, backgroundColor: '#e3f2fd' }}>
      <h3>🧠 Desafio Rápido</h3>
      <p>O que as plantas liberam para os seres humanos durante a fotossíntese?</p>
      <button  className='botao-pulsando' onClick={() => setRespondido(!respondido)} style={styles.button}>
       {respondido ? "Ocultar" : "Resposta"}
      </button>
      {respondido && (
        <p style={styles.activeText}>✅ Resposta: Oxigênio (O₂)!</p>
      )}
    </section>
  );
};

export default App;


//centralizar os botoes
//fechar reposta