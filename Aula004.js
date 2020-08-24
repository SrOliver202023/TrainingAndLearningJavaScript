// 001-2 calcular a media de 3 alunos

const aluno01 = {
  nome: 'Emerson',
  nota: 4
}
const aluno02 = {
  nome: 'Wagner',
  nota: 8
}
const aluno03 = {
  nome: 'Kevin',
  nota: 7
}

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3;

console.log(aluno01, aluno02, aluno03)
console.log(`A media das notas foi ${media}`)

