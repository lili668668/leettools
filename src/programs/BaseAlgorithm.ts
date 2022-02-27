export interface BaseAlgorithm {
  name: string
  exec(input: string): string
}