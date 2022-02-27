export interface BaseAlgorithm {
  name: string
  inputPlaceholder?: string
  exec(input: string): string
}