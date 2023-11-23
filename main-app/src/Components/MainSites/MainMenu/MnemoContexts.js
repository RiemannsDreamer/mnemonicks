import {createContext} from "react";

// TODO: Do i need some state for the clock itself? -> counting and resetting?
/**
 * This context serves the running boolean for the Content of the app.
 * If true, the training / learning is running and the clock counts the time.
 * If you press, "start", this is set to true.
 * If you press "pause", this is set to false, and if "resume" is pressed, it is set to true again.
 * -> Simple state management for the training.
 * If "start" is pressed, when this context already is set to true, nothing happens.
 *
 *
 * @type {React.Context<boolean>}
 */
export const LearningIsRunningContext = createContext(false)


/**
 * Counter for seconds in the Clock (corner)
 * -> Later impl.
 * @type {React.Context<number>}
 */
export const ClockCountSeconds = createContext(0)

// TODO: save delete this, you dont use it.
export const ActualStartTime = createContext(0)


/**
 * Defines the actual Training which is used / learned in the app.
 * Example: actualTraining = "numbers" => you're learning numbers
 * @type {React.Context<string>}
 */
export const ActualTraining = createContext("Numbers")

/**
 * Index of the actual chunk which is displayd in content component.
 * @type {React.Context<number>}
 */
export const ActualChunkIndex = createContext(0)

/**
 * Total size of the data to lean in training.
 * @type {React.Context<number>}
 */
export const BatchSize = createContext(13)

/**
 * Size of one single chunk. Only one chunk is displayed in content actually
 * @type {React.Context<number>}
 */
export const ChunkSize = createContext(4)

/**
 * Holds the actual batch of information. Is an Array of Chunks. (2D)
 * @type {React.Context<string[]>}
 */
export const ActualBatch = createContext(["Press to Start"])

export const TrainingStatus = createContext("DefaultMessage")