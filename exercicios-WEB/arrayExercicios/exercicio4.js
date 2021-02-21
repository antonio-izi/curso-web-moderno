const nomeDoMes = mes => {
    const meses = [
        'Janeiro',
        'Fevereiro',
        'Marco',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ]

    if(meses[mes - 1] === undefined)
        return 'O numero do mes esta incorreto'

    return meses[mes - 1]
}

console.log(nomeDoMes(11))