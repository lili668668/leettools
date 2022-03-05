import { Base64Encode } from './programs/Base64Encode'
import { BaseAlgorithm } from './programs/BaseAlgorithm'
import { DynamicConnectivity1, DynamicConnectivity2, DynamicConnectivity3 } from './programs/DynamicConnectivity'

export const list: Record<string, BaseAlgorithm> = {
  ['base64Encode']: new Base64Encode,
  ['dynamicConnectivity1']: new DynamicConnectivity1,
  ['dynamicConnectivity2']: new DynamicConnectivity2,
  ['dynamicConnectivity3']: new DynamicConnectivity3,
}