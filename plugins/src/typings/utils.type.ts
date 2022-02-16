export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
export type Overwrite<T, K> = Omit<T, keyof K> & K
