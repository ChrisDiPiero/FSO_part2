import React, {useState} from 'react'
import PersonForm  from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [ searchTerm, setSearchTerm ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleEvent = (e) => {
    e.preventDefault()
    console.log(newName, persons.filter(i => i[newName]))
    if(persons.some(i => i.name === newName)) {
      alert(`${newName} is already added to this phonebook.`)
    } else {
      const addPerson = { name: newName, number: newNumber}
      setPersons(persons => [...persons, addPerson])
    }
  }

  const searchTermHandler = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
  }
  const nameUpdateHandler = (event) => {
    setNewName(event.target.value)
  }
  const numberUpdateHandler = (event) => {
    setNewNumber(event.target.value)
  }



  const populateNameList = (e) => <li key={e.name}>{e.name}: {e.number}</li>

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        value={searchTerm}
        searchTermHandler={searchTermHandler}
      />

      <h2>Add new number</h2>
      <PersonForm
        submit={handleEvent}
        name={newName}
        updateName={nameUpdateHandler}
        number={newNumber}
        updateNumber={numberUpdateHandler}
      />

      <h2>Numbers</h2>
      <ul>
        {
          persons.map( (e) =>  ( 
            !searchTerm ? populateNameList(e) : 
            e.name.toLowerCase().includes(searchTerm) ? populateNameList(e) :
            null
          ))
        //   persons.map( (e) = (
        //     { e.name.includes(searchTerm) ? (<li key={e.name}>{e.name}: {e.number}</li>) : 
        //   ))
          // persons.map( (e) => (
          //   <li key={e.name}>{e.name}: {e.number}</li>
          // ))
        }
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


