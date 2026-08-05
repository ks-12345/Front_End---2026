import React, { useState, useEffect } from 'react';

// --- DEFINIÇÃO DOS COMPONENTES (USANDO FUNCTION) ---

export function Header({ titulo }) {
return (
<header style={{ background: '#646cff', padding: '20px', color: 'white',
textAlign: 'center' }}>
<h1>{titulo}</h1>
</header>
);
}

export function InputUsuario({ nome, setNome }) {
return (
<div style={{ margin: '20px 0' }}>
<label>Digite seu nome: </label>
<input
type="text"
value={nome}
onChange={(e) => setNome(e.target.value)}
placeholder="Seu nome aqui..."
style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
/>

</div>
);
}

export function CardSaudacao({ nome, temaEscuro }) {
const estilo = {
padding: '15px',
borderRadius: '8px',
backgroundColor: temaEscuro ? '#333' : '#f9f9f9',
color: temaEscuro ? '#fff' : '#000',
marginTop: '10px',
border: '1px solid #ddd'
};

return (
<div style={estilo}>
<h3>Olá, {nome || 'Visitante'}!</h3>
<p>Bem-vindo ao exercício de componentes com Vite e Functions.</p>
</div>
);
}

export function ContadorCliques({ cliques, setCliques }) {
return (

<div style={{ padding: '15px', border: '1px solid #646cff', marginTop:
'10px', borderRadius: '8px' }}>
<p>Botão clicado <strong>{cliques}</strong> vezes</p>
<button onClick={function() { setCliques(cliques + 1) }}>
Incrementar
</button>
</div>
);
}

export function ThemeToggle({ dark, setDark }) {
return (
<button onClick={function() { setDark(!dark) }} style={{ marginTop: '10px'
}}>
Mudar para modo {dark ? 'Claro' : 'Escuro'}
</button>
);
}

export function ListaRecursos({ itens }) {
return (
<ul style={{ textAlign: 'left', display: 'inline-block' }}>
{itens.map(function(item, index) {
return <li key={index} style={{ marginBottom: '5px' }}>{item}</li>;
})}
</ul>

);
}

// --- COMPONENTE PRINCIPAL ---

export default function App() {
const [nome, setNome] = useState('');
const [cliques, setCliques] = useState(0);
const [temaEscuro, setTemaEscuro] = useState(false);

const recursosReact = ['Vite', 'Function Components', 'Named Exports',
'useState', 'useEffect', 'Props'];

useEffect(function() {
document.title = "Cliques: " + cliques;
}, [cliques]);

const containerStyle = {
fontFamily: 'Inter, system-ui, Arial, sans-serif',
textAlign: 'center',
minHeight: '100vh',
backgroundColor: temaEscuro ? '#242424' : '#ffffff',
color: temaEscuro ? '#ffffff' : '#213547',
transition: '0.25s'
};

return (
<div style={containerStyle}>
<Header titulo="Exercício React com Functions" />

<main style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
<InputUsuario nome={nome} setNome={setNome} />

<CardSaudacao nome={nome} temaEscuro={temaEscuro} />

<div style={{ display: 'flex', justifyContent: 'center', gap: '20px',
alignItems: 'center', flexWrap: 'wrap' }}>
<ContadorCliques cliques={cliques} setCliques={setCliques} />
<ThemeToggle dark={temaEscuro} setDark={setTemaEscuro} />
</div>

<div style={{ marginTop: '30px' }}>
<h4>Conceitos chave identificados:</h4>
<ListaRecursos itens={recursosReact} />
</div>
</main>
</div>
);
}