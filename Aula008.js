const TurmaA = [
  {
    nomeAluno: 'Emerson',
    nota: 4
  },
  {
    nomeAluno: 'Wagner',
    nota: 8
  },
  {
    nomeAluno: 'Kevin',
    nota: 7
  }
]
const TurmaB = [
  {
    nomeAluno: 'Karlos',
    nota: 1
  },
  {
    nomeAluno: 'Diego',
    nota: 7
  },
  {
    nomeAluno: 'Jubinsvaldo',
    nota: 1
  }
]

function _CalcMedia_(Alunos) {
  let soma = 0;
  for (let i = 0 ; i < Alunos.length; i++){
    soma = soma + Alunos[i].nota;
    

  }
  return soma / Alunos.length;
}



// const media1 = _CalcMedia_(TurmaA)
// const media2 = _CalcMedia_(TurmaB)


function condMedia(Media, Turma) {
  if(Media > 5){
    console.log(`Muito bem, parabens para turma-${Turma} com media ${Media}.`)
  } else {
    console.log(`Pessoal da turma-${Turma} Precisam estudar mais com media ${Media} muito abaixo.`)
  }
}


// condMedia(media1, 'A')
// condMedia(media2, 'B')

function _MarcarComoReprovado(aluno) {
  aluno.reprovado = false;
  if(aluno.nota < 5){
    aluno.reprovado = true;
  }
}
function EnviarMensagemReprovado(aluno) {
  if(aluno.reprovado){
    console.log(`O Aluno ${aluno.nomeAluno} foi reprovado com ${aluno.nota} pontos`)
  }
}
function AlunoReprovado(alunos) {
  for( let aluno of alunos){
    _MarcarComoReprovado(aluno)
    EnviarMensagemReprovado(aluno)
  }
}

AlunoReprovado(TurmaA)
AlunoReprovado(TurmaB)

