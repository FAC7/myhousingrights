const store = require('../../../../data.json')

module.exports = [
  {
    method: 'GET',
    path: '/api/answers',
    handler: (req, reply) => {
      reply(store.answers['1'])
    }
  },
  {
    method: 'POST',
    path: '/api/answers',
    handler: (req, reply) => {
      const sections = Object.keys(req.payload.answers)

      store.answers['1'] = sections.reduce((acc, section) => {
        acc[section] = req.payload.answers[section].map((answer) => {
          return {
            answer: answer.value,
            notes: answer.notes,
            evidence: '',
          }
        })
        return acc
      }, {})

      reply({ success: true, data: store.answers['1'] })
    }
  }
]
