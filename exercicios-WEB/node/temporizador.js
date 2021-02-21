const schedule = require('node-schedule')

// */5 significa que o processo vai rodar a cada 5 segundos, se colocasse somente o 5 iria rodar todo segundo 5 de qualquer minuto as 23h. depois o minuto, o 23 significa a hora, o mes, depois o dia do mes e depois o dia da semana
// 0 = domingo/ 1 = segunda e assim vai
const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 1', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 23
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})