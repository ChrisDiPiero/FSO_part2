import React, {useState} from 'react'
import People from './components/People'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
      number: '123-456-7890'}
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleEvent = (e) => {
    e.preventDefault()
    if(persons.filter(i => i.name === newName)) {
      alert(`${newName} is already added to this phonebook.`)
    } else {
      const addPerson = { name: newName, number: newNumber}
      setPersons(persons => [...persons, addPerson])
    }
  }

  const nameUpdateHandler = (event) => {
    setNewName(event.target.value)
  }
  const numberUpdateHandler = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleEvent}>
        <div>
          name: <input type="text" value={newName} onChange={nameUpdateHandler}/>
        </div>
        <div>
          number: <input type="text" value={newNumber} onChange={numberUpdateHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map( (e) => (
            <li key={e.name}>{e.name}: {e.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;

// const App = () => {
//   const courses = [
//     {
//       name: 'Half Stack application development',
//       id: 1,
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id: 1
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id: 2
//         },
//         {
//           name: 'State of a component',
//           exercises: 14,
//           id: 3
//         },
//         {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//         }
//       ]
//     },
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2
//         }
//       ]
//     }
//   ]

//   return (
//     <div>
//       <h1>Web development curriculum</h1>
//       <ul>
//         {courses.map( (e) =>
//            <li key={e.id}>
//             <Course course={e} />
//            </li>
//         )}
//       </ul>
//     </div>
//     )
    
// }


