const TurmaA = [
  {
    _StudentName: 'Emerson',
    note: 4
  },
  {
    _StudentName: 'Wagner',
    note: 8
  },
  {
    _StudentName: 'Kevin',
    note: 7
  }
]
const TurmaB = [
  {
    _StudentName: 'Karlos',
    note: 1
  },
  {
    _StudentName: 'Diego',
    note: 7
  },
  {
    _StudentName: 'Jubinsvaldo',
    note: 1
  }
]
function _CalcMedia_(Students) {
  let soma = 0;
  for (let i = 0 ; i < Students.length; i++){
    soma = soma + Students[i].note;
  }
  return soma / Students.length;
}
function condMedia(Media, Turma) {
  if(Media > 5){
    console.log(`Muito bem, parabens para turma-${Turma} com media ${Media}.`)
  } else {
    console.log(`Pessoal da turma-${Turma} Precisam estudar mais com media ${Media} muito abaixo.`)
  }
}
function _MarcarComoReprovado(aluno) {
  aluno.reprovado = false;
  if(aluno.note < 5){
    aluno.reprovado = true;
  }
}
function EnviarMensagemReprovado(aluno) {
  if(aluno.reprovado){
    console.log(`O Aluno ${aluno._StudentName} foi reprovado com ${aluno.note} pontos`)
  }
}
function AlunoReprovado(Students) {
  for( let aluno of Students){
    _MarcarComoReprovado(aluno)
    EnviarMensagemReprovado(aluno)
  }
}
AlunoReprovado(TurmaA)
AlunoReprovado(TurmaB)

