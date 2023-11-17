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

export const ActualStartTime = createContext(0)