import { BaseAlgorithm } from './BaseAlgorithm'

const BASE_CODES = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '+',
  '/'
]

export class Base64Encode implements BaseAlgorithm {
  name = 'Base 64 Encode'
  exec(input: string): string {
    let repairNum = input.length % 3
    let bits = ''
    for (let index = 0; index < input.length; index++) {
      const ascii = input.charCodeAt(index)
      bits += this.toBits(ascii)
    }
    let codes = ''
    for (let index = 0; index < bits.length; index += 6) {
      let block = bits.slice(index, index + 6)
      block += '0'.repeat(6 - block.length)
      codes += this.toCode(block)
    }
    if (repairNum !== 0) {
      codes += '='.repeat(3 - repairNum)
    }
    return codes
  }

  toBits(ascii: number): string {
    let bits = ''
    let result = ascii
    do {
      const remainder = result % 2
      bits = `${remainder}` + bits
      result = (result - remainder) / 2
    } while (result !== 0)
    bits = '0'.repeat(8 - bits.length) + bits
    return bits
  }

  toCode(bits: string): string {
    let number = 0
    for (let index = 0; index < bits.length; index++) {
      const power = bits.length - index - 1
      number += Number(bits[index]) * Math.pow(2, power)
    }
    return BASE_CODES[number]
  }
}