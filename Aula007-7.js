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

function calcMedia(Aluno) {
  return (Aluno[0].nota + Aluno[1].nota + Aluno[2].nota) / 3

}



// const media1 = calcMedia(TurmaA)
// const media2 = calcMedia(TurmaB)


// Mensagem
function condMedia(Media, Turma) {
  if(Media > 5){
    console.log(`Muito bem, parabens para turma-${Turma} com media ${Media}.`)
  } else {
    console.log(`Pessoal da turma-${Turma} Precisam estudar mais com media ${Media} muito abaixo.`)
  }
}


//condMedia(media1, 'A')
//condMedia(media2, 'B')


const _Dias_ = [
  'Domingo',
  'Segunda-Feira',
  'Terca-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sabado'
]
const _NDias_ = [
  3, 6, 0, 2
]

// const result = pract(_NDias_, _Dias_)
function _Teste_(_NDias_){
  for(_NDia_ in _NDias_){
    console.log(_Dias_[NDia])
  }
}
_Teste_(_NDias_)