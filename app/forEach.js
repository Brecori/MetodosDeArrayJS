const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis')


function exibirOsLivrosNaTela(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = '';
    elementoValorTotal.innerHTML = '';
    listaDeLivros.forEach(livro => {
      // let disponibilidade = verificaDisponibilidade(livro);
      let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel';
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    })
  }

  // function verificaDisponibilidade(livro) {
  //   if  (livro.quantidade > 0) {
  //     return 'livro_imagens'
  //   }
  //   else {
  //     return 'livros_imagens indisponivel'
  //   }
  // }
