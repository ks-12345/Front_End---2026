import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #1e1e2f, #2c2c54)',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#fff'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '10px'
      }}>
        Olá, React! 🚀
      </h1>

      <p style={{
        textAlign: 'center',
        marginBottom: '30px',
        opacity: 0.8
      }}>
        Estou alterando meu primeiro componente.
      </p>

      <Saudacao/>
      <Perfil nome="Brenda" cargo="T.I"/>
      <Painel/>
      <Produto item="Ventilador" quantidade="2" valor="R$300,00"/>
      <NovoPainel/>
      <Placarfutebol/>
    </div>
  )
}

export default App

function Saudacao() {
  return(
    <div style={{
      background: '#ffffff10',
      padding: '20px',
      borderRadius: '16px',
      marginBottom: '20px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
      transition: '0.3s'
    }}>
      <h2 style={{ color: '#4da6ff', marginBottom: '10px' }}>
        Olá, Mundo! 👋
      </h2>
      <p>Este componente foi criado separadamente.</p>
    </div>
  )
}

function Perfil({nome, cargo}){
  return(
    <div style={{
      border: '2px solid #2e7d32',
      borderRadius: '12px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#f1f8e9',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{margin: '0 0 5px 0', color: '#1b5e20'}}>
        Nome: {nome}
      </h3>

      <p style={{margin: 0, color: '#444'}}>
        Cargo: <strong>{cargo}</strong>
      </p>
    </div>
  )
  }
function Painel() {
  return(
    <div style={{
      background: 'linear-gradient(135deg, #38bdf8, #6366f1)',
      padding: '30px',
      borderRadius: '16px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
      textAlign: 'center'
    }}>
      <h2>Painel Administrativo</h2>
      <p style={{
        fontSize:'60px',
        marginTop: '10px'
      }}>
        <br/>
        📊📈
      </p>
    </div>
  )
}

function Produto({item, quantidade, valor}){
  return(
    <div style={{
      border: '2px solid #ff0077',
      borderRadius: '12px',
      padding: '15px',
      margin: '10px 0',
      backgroundColor: '#f3a1d1',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{margin: '0 0 5px 0', color: '#a200ff'}}>
        Item: {item}
      </h3>

            <h3 style={{margin: '0 0 5px 0', color: '#a200ff'}}>
        Quantidade: {quantidade}
      </h3>

      <p style={{margin: '0 0 5px 0', color: '#88ff00'}}>
        Valor: <strong>{valor}</strong>
      </p>
    </div>
  )
  }

function NovoPainel() {
const[texto, setTexto] = useState('');
return (
  <div style={{
      background: '#f9f9f9',
      padding: '15px',
      borderRadius: '12px',
      border:"1px dasher #000000",
      margin: '20px',
      color: '#ae00ff',
    }}>
      <h4>Escreva uma mensagem: </h4>
      <input 
      type='text'
      placeholder='Digite algo...'
      onChange={(e) => setTexto(e.target.value)}
      style={{padding:'8px', width:'80%'}}
      />
      <p>O que você digitou: <span style={{color:'red'}}>{texto}</span></p>
    </div>
)
}
function PlacarFutebol({ nomeTimeA, nomeTimeB }) {
  // Criamos duas "caixinhas de memória" (States)
  const [golsA, setGolsA] = useState(0);
  const [golsB, setGolsB] = useState(0);

  return (
    <div style={{
      border: '3px solid #2e7d32',
      borderRadius: '15px',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#f1f8e9',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h2 style={{ color: '#1b5e20' }}>⚽ Placar do Jogo</h2>

      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

        {/* Lado do Time A */}
        <div>
          <h3>{nomeTimeA}</h3>
          <h1 style={{ fontSize: '48px', margin: '10px 0' }}>{golsA}</h1>
          <button onClick={() => setGolsA(golsA + 1)} style={botaoEstilo}>
            GOL!
          </button>
        </div>

        <h1 style={{ margin: '0 20px' }}>X</h1>

        {/* Lado do Time B */}
        <div>
          <h3>{nomeTimeB}</h3>
          <h1 style={{ fontSize: '48px', margin: '10px 0' }}>{golsB}</h1>
          <button onClick={() => setGolsB(golsB + 1)} style={botaoEstilo}>
            GOL!
          </button>
        </div>

      </div>

      <hr style={{ margin: '20px 0' }} />

      <button
        onClick={() => { setGolsA(0); setGolsB(0); }}
        style={{ backgroundColor: '#f44336', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}
      >
        Reiniciar Partida 🔄
      </button>
    </div>
  );
}

// Estilo simples para os botões de GOL
const botaoEstilo = {
  backgroundColor: '#2e7d32',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  fontWeight: 'bold'
};