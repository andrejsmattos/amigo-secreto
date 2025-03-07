let listaDeParticipantes = [];

function adicionarParticipante(){
  let participante = document.querySelector('input').value;
  if (participante == null || participante == ""){
    alert("Adicione um nome válido")
  } else if (listaDeParticipantes.includes(participante)) {
    alert(`${participante} já está na lista`)    
  } else {listaDeParticipantes.push(participante);
    document.querySelector('input').value = '';
    atualizaListaDeParticipantes();
    console.log(listaDeParticipantes);
  }
}

function atualizaListaDeParticipantes() {
  let numeracaoParticipantes = document.createElement('ol');

  listaDeParticipantes.forEach(participante => {
    const item = document.createElement('li');
    item.textContent = participante;
    numeracaoParticipantes.appendChild(item);
  })

  let listaContainer = document.querySelector('h3');
  listaContainer.innerHTML = 'Lista de participantes';
  listaContainer.appendChild(numeracaoParticipantes);
}

function validarLista() {
}

let listaDeSorteados = [];

function sortearAmigoSecreto() {
  if (listaDeParticipantes.length === 0) {
    alert('A lista de participantes está vazia')
  }

  if (listaDeParticipantes.length === listaDeSorteados.length) {
    alert('Todos os participantes já foram sorteados')
  }

  let numeroDeParticipantes = listaDeParticipantes.length;
  let participanteSorteado;

  do {
    let indiceDaLista = parseInt(Math.random() * numeroDeParticipantes);
    participanteSorteado = listaDeParticipantes[indiceDaLista];
  } while (listaDeSorteados.includes(participanteSorteado));

  listaDeSorteados.push(participanteSorteado);
  console.log(participanteSorteado);

  let mensagem = document.createElement('p');
  mensagem.className = 'draw-message';
  mensagem.innerHTML = `O seu amigo secreto é ${participanteSorteado}`;

  document.body.appendChild(mensagem);
}

function limparLista() {
  listaDeParticipantes = [];
  listaDeSorteados = [];

  let listaContainer = document.querySelector('.name-list');
  listaContainer.innerHTML = '';

  let mensagens = document.querySelectorAll('.draw-message');
  mensagens.forEach(mensagem => mensagem.remove());
}