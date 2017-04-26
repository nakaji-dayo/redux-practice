/* @flow */

export type Action
  = {type: "COUNT_UP", value: number}
  | {type: "COUNT_DOWN", value: number}
  | {type: "HELLO", world: string}

export type Dispatch = Action => Action
