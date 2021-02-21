const recordPoints = [55, 48, 68, 50, 52, 70]
let lowHighScore = {
    lowestScore : 0,
    highestScore : 0
}

function addNewScore(value) {
    recordPoints.push(value)
}

function compareScores () {
    let worstGame
    let numberOfRecords = 0
    lowHighScore.lowestScore = recordPoints[0]
    lowHighScore.highestScore = recordPoints[0]

    for(let i = 0; i < recordPoints.length; i ++) {
        if(recordPoints[i] > lowHighScore.highestScore) {
            lowHighScore.highestScore = recordPoints[i]
            numberOfRecords++
        }
        if(recordPoints[i] < lowHighScore.lowestScore) {
            lowHighScore.lowestScore = recordPoints[i]
            worstGame = i + 1
        }
    }

    return [numberOfRecords, worstGame]
}

console.log(compareScores())
console.log(`Maior pontuacao: ${lowHighScore.highestScore} \nMenor pontuacao: ${lowHighScore.lowestScore}`)