import {createContext} from "react";


/**
 * Global App State to manage renderings and progress etc.
 * set only once... this is a Workaround...
 *
 *
 * @type {React.Context<{actualStartTime: number, chunkSize: number, actualChunkIndex: number, resultBatch: *[], trainingStatus: string, clockCountSeconds: number, batchSize: number, actualBatch: *[]}>}
 */
export const AppState = createContext({
    trainingType: "Numbers",

    trainingStatus: "DefaultMessage",

    clockCountSeconds: 0,
    actualStartTime: 0,

    batchSize: 0,
    chunkSize: 0,
    actualChunkIndex: 0,

    actualBatch: [],
    resultBatch: [],

})
