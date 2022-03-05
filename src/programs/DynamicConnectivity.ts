import { BaseAlgorithm } from './BaseAlgorithm'

export class DynamicConnectivity1 implements BaseAlgorithm {
  name = '動態連結 connect: O(n^2), check: O(1)'
  inputPlaceholder = 
`第一行是最大數
前幾組是 union
最後一組是判斷是否相連
數組是 0~N 的自然數
ex:
9
4,3
3,8
6,5
9,4
2,1
0,7
意思為總共有十個數字（0~9），4 跟 3 相連，3 跟 8 相連，6 跟 5 相連，9 跟 4 相連，2 跟 1 相連，判斷 0 跟 7 有沒有相連，回傳 true or false
以上述例子，回傳 false
`
  exec(input: string): string {
    const lines = input.split('\n')
    const max = Number(lines[0]) + 1
    const check = lines.pop()
    const connects = lines.slice(1)
    
    let array = (new Array(max)).fill(1).map((_, index) => index)
    connects.forEach((item) => {
      const [a,b] = item.split(',')
      array = array.map((num) => {
        if (num === array[Number(b)]) {
          return array[Number(a)]
        }
        return num
      })
    })

    const [a, b] = check!.split(',')
    return `${array[Number(a)] === array[Number(b)]}`
  }
}

export class DynamicConnectivity2 implements BaseAlgorithm {
  name = '動態連結 connect: O(n), check: O(n)'
  inputPlaceholder = 
`第一行是最大數
前幾組是 union
最後一組是判斷是否相連
數組是 0~N 的自然數
ex:
9
4,3
3,8
6,5
9,4
2,1
0,7
意思為總共有十個數字（0~9），4 跟 3 相連，3 跟 8 相連，6 跟 5 相連，9 跟 4 相連，2 跟 1 相連，判斷 0 跟 7 有沒有相連，回傳 true or false
以上述例子，回傳 false
`
  exec(input: string): string {
    const lines = input.split('\n')
    const max = Number(lines[0]) + 1
    const check = lines.pop()
    const connects = lines.slice(1)

    const [checkA, checkB] = check!.split(',')
    const bag: number[] = []
    
    connects.forEach((item) => {
      const [a,b] = item.split(',')
      if (Number(checkA) === Number(a)
        || Number(checkB) === Number(a)
        || Number(checkA) === Number(b)
        || Number(checkB) === Number(b)) {
        bag.push(Number(a))
        bag.push(Number(b))
      }
    })

    return `${bag.includes(Number(checkA)) && bag.includes(Number(checkB))}`
  }
}