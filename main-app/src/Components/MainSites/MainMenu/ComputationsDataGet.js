//import Big from "big.js"
import Decimal from "decimal.js";

// Functions for number training

export function getRandomNumbersForTraining(amountOfNumbers, chunkSize) {
    let batch = getBatchOfRandomNumbers(amountOfNumbers)

    let chunkedBatch = chunkingBatch(batch, chunkSize)
    chunkedBatch.push(["END"])

    return chunkedBatch


}

export function unChunkingBatch(batch) {

    batch = Object.values(batch)

    return batch.flat();
}

function chunkingBatch(batch, chunkSize) {
    let chunkedBatch = []

    let amountOfFullChunks = Math.floor(batch.length / chunkSize)
    let amountForRestChunk = batch.length - amountOfFullChunks * chunkSize


    for (let i = 0; i < amountOfFullChunks; i++) {
        let actualChunk = []

        for (let j = 0; j < chunkSize; j++) {
            actualChunk.push(batch[i * chunkSize + j])
        }

        chunkedBatch.push(actualChunk)
    }

    if (amountForRestChunk !== 0) {
        let restChunk = []

        for (let k = 0; k < amountForRestChunk; k++) {
            restChunk.push(batch[-k + 1])
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





/* Special Numbers computations */

// Pi


function calculatePiDigitBBP(n) {
    let pi = new Decimal(0);

    for (let k = 0; k <= n; ++k) {
        const term = new Decimal(1)
            .div(new Decimal(16).pow(k))
            .times(
                new Decimal(4)
                    .div(new Decimal(8 * k + 1))
                    .minus(new Decimal(2).div(new Decimal(8 * k + 4)))
                    .minus(new Decimal(1).div(new Decimal(8 * k + 5)))
                    .minus(new Decimal(1).div(new Decimal(8 * k + 6)))
            );

        pi = pi.plus(term);
    }

    return pi;
}

export function calculatePi(precision) {
    Decimal.set({precision: precision + 5}); // Setze die Dezimalstellen auf precision + 2 (für zusätzliche Genauigkeit)

    const pi = calculatePiDigitBBP(precision);

    return pi.toString();
}


/* computation of e*/

function calculateFactorial(n) {
    let k = new Decimal(n)
    if (k.equals(0)) {
        return new Decimal(1);
    } else {
        return Decimal.mul(k, calculateFactorial(k.minus(1)));
    }
}

function calculateEDigitBBP(n) {
    let e = new Decimal(0);

    for (let k = 0; k <= n; ++k) {
        const term = Decimal.div(1, calculateFactorial(k));

        e = e.plus(term);
    }

    return e;
}

export function calculateE(precision) {
    Decimal.set({precision: precision + 10});

    const e = calculateEDigitBBP(precision);

    return e.toString();
}

// TODO: Bug in phi
/* Computation of Phi (golden ratio)*/


function calculatePhiDigitBBP(n) {
    let phi = new Decimal(0);

    for (let k = 0; k <= n; ++k) {
        const term = Decimal.div(1, calculateFactorial(new Decimal(2 * k + 1)));

        phi = phi.plus(term);
    }

    return phi;
}

export function calculatePhi(precision) {
    Decimal.set({precision: precision + 2});

    const phi = calculatePhiDigitBBP(precision);

    return phi.toString();
}
