import { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchStr, setSearchStr] = useState('')

  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data)
      })
  }, [])


  const handleSubmit = (event) => {
    event.preventDefault()
    // 去除首尾空格
    const trimmedName = newName.trim()
    const trimmedNumber = newNumber.trim()
    // 禁止空名字
    if (!trimmedName) return
    if (!trimmedNumber) return
    // 查找重复姓名或手机号
    const existPerson = persons.find(p => p.name === trimmedName || p.number === trimmedNumber)

    if (existPerson) {
      alert(`${trimmedName} is already added to phonebook`)
      return // 重复直接终止，不新增
    }

    const newNameObject = { name: trimmedName, number: trimmedNumber }
    setPersons(persons.concat(newNameObject))
    setNewName('')
    setNewNumber('')
  }

  // 新增：过滤逻辑
  const filteredPersons = persons.filter(person => {
    // 统一转小写，匹配不区分大小写
    const lowerName = person.name.toLowerCase()
    const lowerSearch = searchStr.toLowerCase()
    return lowerName.includes(lowerSearch)
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with <input value={searchStr} onChange={e => setSearchStr(e.target.value)}></input>
        </div>
      </form>
      <h2>add a new</h2>
      <div>debug {newName}</div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={e => setNewNumber(e.target.value)}></input>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {/* 遍历过滤后的数组 filteredPersons */}
        {filteredPersons.map(person => (
          <li key={person.name}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App