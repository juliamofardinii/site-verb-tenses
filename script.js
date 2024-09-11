function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Imprime a seção no console para fins de depuração (pode ser removido em produção
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um tempo verbal.</p>"
        return //encerra o codigo se estiver vazio
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        // Converte o título e a descrição para minúsculas
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Verifica se o título ou descrição contém o texto de pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria o HTML para o resultado da pesquisa
            resultados += `
          <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank" rel="noopener noreferrer">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <div class="btn-pesquisa">
                        <a href="${dado.link}" target="_blank" rel="noopener noreferrer">
                            <button>Saber Mais</button>
                        </a>
                    </div>
                </div>
            `;
        }
    }

    if(!resultados){
        resultados = "<p> Nada foi encontrado.</p>"
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}


