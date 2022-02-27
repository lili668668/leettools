import { Base64Encode } from './programs/Base64Encode'
import { BaseAlgorithm } from './programs/BaseAlgorithm'

export const list: Record<string, BaseAlgorithm> = {
  ['base64Encode']: new Base64Encode
}