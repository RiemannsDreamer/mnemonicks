// Functions for number training

export function getRandomNumbersForTraining(amountOfNumbers, chunkSize) {
    let batch = getBatchOfRandomNumbers(amountOfNumbers)

    let chunkedBatch = chunkingBatch(batch, chunkSize)
    chunkedBatch.push(["END"])

    return chunkedBatch


}


function chunkingBatch(batch, chunkSize) {
    let chunkedBatch = []

    let amountOfFullChunks = Math.floor(batch.length / chunkSize)
    let amountForRestChunk = batch.length - amountOfFullChunks*chunkSize


    for (let i = 0; i < amountOfFullChunks; i++) {
        let actualChunk = []

        for (let j = 0; j < chunkSize; j++) {
            actualChunk.push(batch[i * chunkSize + j])
        }

        chunkedBatch.push(actualChunk)
    }

    if(amountForRestChunk !== 0)
    {
        let restChunk = []

        for (let k = 0; k < amountForRestChunk; k++) {
            restChunk.push(batch[-k+1])
        }

        chunkedBatch.push(restChunk)
    }



    return chunkedBatch
}

function getBatchOfRandomNumbers(n) {
    let batch = []

    for (let i = 0; i < n; i++) {
        batch.push(getRandomInt(0, 10))
    }

    return batch
}

function getRandomInt(x, y) {
    return Math.floor(Math.random() * (y - x)) + x;
}


