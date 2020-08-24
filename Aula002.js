// 001-2 calcular a media de 3 alunos

console.log('_________________________________')
const aluno01 = 'Emerson';
const notaAluno01 = 3.5;
console.log(`A nota de ${aluno01} foi ${notaAluno01}`)

const aluno02 = 'Wagner';
const notaAluno02 = 8;
console.log(`A nota de ${aluno02} foi ${notaAluno01}`)


const aluno03 = 'Kevin';
const notaAluno03 = 7;
console.log(`A nota de ${aluno03} foi ${notaAluno03}`)

console.log('_________________________________')

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3;
console.log(`A media entre esses alunos foi de ${media}`)
console.log('_________________________________')

if(media > 5){
  console.log('Parabens turma!!!!')
} else {
  console.log('Tem que estudar mais!!!')
}
console.log('_________________________________')

