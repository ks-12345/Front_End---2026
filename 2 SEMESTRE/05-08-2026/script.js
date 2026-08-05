const sensoresIniciais = [

{
id:1,
nome:"Sensor Galpão A",
tipo:"Temperatura",
valor:24.5,
unidade:"°C",
status:"normal"
},

{
id:2,
nome:"Sensor Estufa",
tipo:"Umidade",
valor:88,
unidade:"%",
status:"critico"
},

{
id:3,
nome:"Sensor Compressor",
tipo:"Pressão",
valor:6.2,
unidade:"bar",
status:"normal"
},

{
id:4,
nome:"Sensor Câmara Fria",
tipo:"Temperatura",
valor:-2,
unidade:"°C",
status:"normal"
},

{
id:5,
nome:"Sensor Almoxarifado",
tipo:"Umidade",
valor:45,
unidade:"%",
status:"normal"
},

{
id:6,
nome:"Sensor Caldeira",
tipo:"Temperatura",
valor:98,
unidade:"°C",
status:"critico"
}

];

const container = document.getElementById("containerSensores");
const filtro = document.getElementById("sensor");
const botao = document.getElementById("btnAtualizar");
const hora = document.getElementById("horaAtualizacao");

function atualizarHora(){

const agora = new Date();

hora.innerHTML =
"Última atualização: " +
agora.toLocaleTimeString("pt-BR");

}

function renderizarDashboard(lista){

container.innerHTML="";

lista.forEach(sensor=>{

const card=document.createElement("div");

card.className="card";

if(sensor.status=="critico"){

card.classList.add("card-alerta");

}

card.innerHTML=`

<h3>${sensor.nome}</h3>

<p><strong>Tipo:</strong> ${sensor.tipo}</p>

<p><strong>Valor:</strong> ${sensor.valor.toFixed(1)} ${sensor.unidade}</p>

<p><strong>Status:</strong> ${sensor.status}</p>

`;

container.appendChild(card);

});

atualizarHora();

}

function atualizarSensores(){

sensoresIniciais.forEach(sensor=>{

sensor.valor += (Math.random()*4)-2;

if(sensor.tipo=="Temperatura"){

sensor.status = sensor.valor>35 ? "critico":"normal";

}

});

filtrar();

}

function filtrar(){

const tipo=filtro.value;

if(tipo=="todos"){

renderizarDashboard(sensoresIniciais);

return;

}

const lista=sensoresIniciais.filter(sensor=>sensor.tipo.toLowerCase()==tipo);

renderizarDashboard(lista);

}

filtro.addEventListener("change",filtrar);

botao.addEventListener("click",atualizarSensores);

setInterval(atualizarSensores,30000);

renderizarDashboard(sensoresIniciais);