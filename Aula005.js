// Criar um Array/Vetor de Alunos com os atributos de nome e nota

const Alunos = [
  {
    nome: 'Emerson',
    nota: 4
  },
  {
    nome: 'Wagner',
    nota: 8

  },
  {
    nome: 'Kevin',
    nota: 7
  }

]

const media = (Alunos[0].nota + Alunos[1].nota + Alunos[2].nota) /3;
console.log(`A media entre as notas foi de ${media}`)
