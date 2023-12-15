import {createContext} from "react";


/**
 * Global App State / Context to manage renderings and progress etc.
 * set only once... this is a Workaround... redux will be used later.
 * Due to problems with "batching" and asynchronous execution, it's a single state / context used.
 * Used only for MnemoMax App Component, not globally on the whole site.
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
