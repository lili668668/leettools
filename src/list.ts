import { Base64Encode } from './programs/Base64Encode'
import { BaseAlgorithm } from './programs/BaseAlgorithm'
import { DynamicConnectivity } from './programs/DynamicConnectivity'

export const list: Record<string, BaseAlgorithm> = {
  ['base64Encode']: new Base64Encode,
  ['dynamiceConnectivity']: new DynamicConnectivity
}