//Passo 1 - pegar os personagens no JS para poder verificar quando o usuario passar o mouse em cima de um deles.
const personagens = document.querySelectorAll('.personagem');

//Passo 2 - adicionar a classe selecionado no persoagem que o usuario passar cursor do mouse.
personagens.forEach(personagem => {
	personagem.addEventListener('mouseenter', () => {

		if(window.innerWidth < 450) {
			window.scrollTo({top: 0, behavior: 'smooth'});
		}

	//Passo 3 - verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção.
	
		removerSelecaoDoPersonagem();

		personagem.classList.add('selecionado');

		//Objetivo 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande.

		//Passo 1 - pegar o elemento do persdonagem grande para adicionar as informações nele.
		const imagemPersonagemGrande = document.querySelector('.personagem-grande');

		// Passo 2 - alterar a imagem do personagem grande
		const idPersonagem = personagem.attributes.id.value;
		imagemPersonagemGrande.src = `./imagens/card-${idPersonagem}.png`;

		//Passo 3 - alterar o nome do personagem grande
		const nomePersonagem = document.getElementById('nome-personagem');
		nomePersonagem.innerText = personagem.getAttribute('data-name');

		//Passo 4 - alterar a descrição do personagem grande
		const descricaoPersonagem = document.getElementById('descricao-personagem');
		descricaoPersonagem.innerText = personagem.getAttribute('data-description');

	})
})
function removerSelecaoDoPersonagem(){
	const personagemSelecionado = document.querySelector('.selecionado')
	personagemSelecionado.classList.remove('selecionado');
}