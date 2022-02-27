import { useState } from 'react'
import { list } from './list'

function App() {
  const [choice, setChoice] = useState<string>('')
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>('')
  const options = [{ key: '', name: '請選擇' }].concat(
    Object.keys(list)
      .map((key) => {
        return { key, name: list[key].name }
      })
  )
  return (
    <div>
      <p>這是一個把寫過的演算法題目，放過來的小工具網站</p>
      <div>
        <select value={choice} onChange={(e) => setChoice(e.target.value)}>
          {options.map((item) => (<option value={item.key} key={item.key}>{item.name}</option>))}
        </select>
      </div>
      <div>
        <textarea placeholder='input' value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <button
        disabled={choice === ''}
        onClick={() => {
          try {
            const output = list[choice].exec(input)
            setOutput(output)
          } catch (error) {
            setOutput(`${error}`)
          }
        }}
      >
        執行
      </button>
      <div>
        <textarea placeholder='output' value={output} readOnly />
      </div>
    </div>
  )
}

export default App
