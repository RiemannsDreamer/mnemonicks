//import Big from "big.js"
const Decimal = require('decimal.js');

// Functions for number training

/*export*/ function getRandomNumbersForTraining(amountOfNumbers, chunkSize) {
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

function calculatePi(precision) {
    Decimal.set({ precision: precision + 5}); // Setze die Dezimalstellen auf precision + 2 (für zusätzliche Genauigkeit)

    const pi = calculatePiDigitBBP(precision);

    return pi.toString();
}

// Beispiel: Pi mit 50 Dezimalstellen
const precision = 50;
const piValue = calculatePi(precision);

console.log(piValue.substring(0,1000));



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

function calculateE(precision) {
    Decimal.set({ precision: precision + 10 });

    const e = calculateEDigitBBP(precision);

    return e.toString();
}

// Example: Calculate e with 50 decimal places
const ePrecision = 100;
const eValue = calculateE(ePrecision);

console.log(eValue.substring(0,102));



// TODO: BUg in phi
/* Computation of Phi (golden ratio)*/


function calculatePhiDigitBBP(n) {
    let phi = new Decimal(0);

    for (let k = 0; k <= n; ++k) {
        const term = Decimal.div(1, calculateFactorial(new Decimal(2 * k + 1)));

        phi = phi.plus(term);
    }

    return phi;
}

function calculatePhi(precision) {
    Decimal.set({ precision: precision + 2 });

    const phi = calculatePhiDigitBBP(precision);

    return phi.toString();
}

// Example: Calculate the golden ratio (\phi) with 50 decimal places
const phiPrecision = 100;
const phiValue = calculatePhi(phiPrecision);

console.log(phiValue);

2.7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274
2.7182818284590452353602874713526624977572470936999595749669676277240766303535475945713821785251664274

