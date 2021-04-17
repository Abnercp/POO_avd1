const { response } = require('express');
const express = require('express');
const server = express();

server.use(express.json());

const provas = [
  {
    id: 8,
    diaSemana: 'Segunda-feira',
    dataProva: '20/08/2020',
    disciplina: 'Portugues',
    horario: '20:00',
    professor: 'Filipe' 
  },
  {
    id: 9,
    diaSemana: 'Quarta-feira',
    dataProva: '13/05/2020',
    disciplina: 'Ingles',
    horario: '20:00',
    professor: 'Abner' 
  }
]

//Letra B
// server.get('/provas', (request, response) => {
//   response.send(provas)
// })

// Letra C
// const listId = (req, res, next) => {
//   const { id } = req.params
//   if (provas[id]) {
//    return res.status(400).json({ Error: 'Não existe prova com este id' })
//   }
//   return next()
// }
// server.get('/provas/:id', listId, (req, res) => {
//   const { id } = req.params
//   const test = provas.find(test => test.id == id)
//   res.json(test)
// })


//Letra D
// server.post('/provas', (req, res) => {
//   const novaData = (request, response, next)=> {
//     if(!request.body.id || !request.body.dia || !request.body.data || !request.body.materia|| !request.body.hora|| !request.body.professor){
//         return response.status(400).json({ error: 'O campo dia da semana ou data da avd ou disciplina ou horário ou professor não existe no corpo da requisição.' })
//     }
//         return next()
//     }
//   const { id,diaSemana,dataProva,disciplina,horario,professor } = request.body 
//   const novaProva = {id,diaSemana,dataProva,disciplina,horario,professor}
//   provas.push(novaProva)
//   return response.json(provas)
// })


//Letra E
// server.put('/provas', (req,res) => {
//   const {index} = req.params
//   const {datas} = req.body
//   datas[index] = datas 
//   return res.json(datas)
// })


//Letra F

//Letra G

//Letra H

server.listen(5000, () => {
  console.log('Servidor rodando');
})

