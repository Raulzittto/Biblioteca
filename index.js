const biblioteca = [];
let livro = {};
let opcao = 0;

console.log("Digite:");
console.log("1 para inserir um novo livro");
console.log("2 para remover algum dos seus livros");
console.log("3 para vizualizar todos os seus livros");
process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim();
  if (!opcao) {
    opcao = Number(entrada_usuario);
  } else {
    switch (opcao) {
      case 1:
          if (!livro.nome) {
            console.log("Insira o nome do livro:");
          livro.nome = entrada_usuario;
          console.log("Insira o tamanho do livro:");
        } else if (!livro.tamanho) {
          livro.tamanho = entrada_usuario;
          console.log("Insira o autor do livro:");
        } else if (!livro.autor) {
          livro.autor = entrada_usuario;
          console.log("Insira o gênero do livro:");
        } else {
          livro.genero = entrada_usuario;

          biblioteca.push(livro);
          livro = {};
          opcao = 0;

          console.log("Livro cadastrado com sucesso!!");
        }
        break;

      case 2:
        break;

      case 3:
        biblioteca.forEach((livro) => {
          console.log(livro);
        });
        opcao = 0;
        break;

      default:
        console.log("Opção inválida");
        opcao = 0;
        break;
    }
  }
});
