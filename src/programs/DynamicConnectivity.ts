import { BaseAlgorithm } from './BaseAlgorithm'

export class DynamicConnectivity implements BaseAlgorithm {
  name = '動態連結'
  inputPlaceholder = 
`第一行是最大數
前幾組是 union
最後一組是判斷是否相連
ex:
9
4,3
3,8
6,5
9,4
2,1
0,7
意思為總共有九個數字（0~9），4 跟 3 相連，3 跟 8 相連，6 跟 5 相連，9 跟 4 相連，2 跟 1 相連，判斷 0 跟 7 有沒有相連，回傳 true or false
以上述例子，回傳 false
`
  exec(input: string): string {
    throw new Error('Method not implemented.')
  }
}