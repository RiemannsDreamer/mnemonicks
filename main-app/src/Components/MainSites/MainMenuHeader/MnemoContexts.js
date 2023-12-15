import {createContext} from "react";


/**
 * Global App State / Context to manage renderings and progress etc.
 * set only once... this is a Workaround... redux will be used later.
 * Due to problems with "batching" and asynchronous execution, it's a single state / context used.
 * Used only for MnemoMax App Component, not globally on the whole site.
 *
 *
 * States:
 * trainingType: Type of the training, e.g. Numbers, Cards, Faces and so on. Used for rendering
 * trainingStatus: State (Finite State Machine) which describes the progress of a training session. Used for dynamic Rendering
 *      list: DefaultMessage; Settings; Train; Pause; Test; Result etc.
 * clockCountSeconds: records the time of the clock in seconds.
 * batchSize: Size of the batch to be trained. e.g. Number of Items in the training batch (example: amount of numbers to train).
 * chunkSize: Batches are divided into chunks. One Chunk is displayed at the time. Size of such a chunk.
 * actualChunkIndex: Index of the actual chunk in the batch which is displayed at the moment.
 * actualBatch: Batch of Items (example: Numbers) which are trained by the user. Is divided ito chunks. 2D array
 * resultBatch: Used to store the input from the user when he does the test section. used to check the solution and compute accuracy.
 *
 *
 *
 * @type {React.Context<{actualStartTime: number, chunkSize: number, actualChunkIndex: number, resultBatch: *[], trainingStatus: string, clockCountSeconds: number, batchSize: number, actualBatch: *[]}>}
 */
export const AppState = createContext({
    trainingType: "Numbers",

    trainingStatus: "DefaultMessage",

    clockCountSeconds: 0,

    batchSize: 0,
    chunkSize: 0,
    actualChunkIndex: 0,

    actualBatch: [],
    resultBatch: [],
})
