const biblioteca = [];
let livro = {};
let opcao = 0;
var pesquisa = "";

console.log("Digite:");
console.log("************************************");
console.log("1 para inserir um novo livro");
console.log("************************************");
console.log("2 para remover algum dos seus livros");
console.log("************************************");
console.log("3 para vizualizar todos os seus livros");
console.log("************************************");
console.log("4 para pesquisar algum livro");

process.stdin.on("data", function (data) {
  let entrada_usuario = data.toString().trim().;
  if (!opcao) {
    opcao = Number(entrada_usuario);
    if (opcao == 1) {
      console.log("\nInsira o nome do livro:");
    } else if (opcao == 4) {
      console.log("Digite o nome do livro:");
    }
  } else {
    switch (opcao) {
      case 1:
        if (!livro.nome) {
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

          console.log("Livro cadastrado com sucesso!!\n");
          console.log("Digite:");
          console.log("************************************");
          console.log("1 para inserir um novo livro");
          console.log("************************************");
          console.log("2 para remover algum dos seus livros");
          console.log("************************************");
          console.log("3 para vizualizar todos os seus livros");
          console.log("************************************");
          console.log("4 para pesquisar algum livro");
        }
        break;

      case 2:
        biblioteca.pop(livro);
        console.log("Livro removido com sucesso!!");
        opcao = 0;
        console.log(
          "\nO que deseja fazer agora?\n Opção 1 (adicionar) // 2 (remover)// 3 (vizualizar)// 4(pesquisar)"
        );
        break;

      case 3:
        biblioteca.forEach((livro) => {
          console.log(livro);
        });
        console.log(
          "\nO que deseja fazer agora?\n Opção 1 (adicionar) // 2 (remover)// 3 (vizualizar)// 4(pesquisar)"
        );
        opcao = 0;
        break;

      case 4:
        if (!livro.nome == !pesquisa) {
          pesquisa = entrada_usuario;
          console.log("Sim, esse livro está na sua biblioteca!!");
        } else {
          console.log("Não identificamos esse livro em sua biblioteca!");
        }
        console.log(
          "\nO que deseja fazer agora?\n Opção 1 (adicionar) // 2 (remover)// 3 (vizualizar)// 4(pesquisar)"
        );
        break;

      default:
        console.log("Opção inválida");
        opcao = 0;
        break;
    }
  }
});
