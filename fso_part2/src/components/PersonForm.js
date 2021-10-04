import React from 'react'

const PersonForm = (props) => {
  return(
    <form onSubmit={props.submit}>
      <div>
        name:
        <input type='text'
          value={props.name}
          onChange={props.updateName}
        />
      </div>
      <div>
        number:
        <input type='text'
          value={props.number}
          onChange={props.updateNumber}
        />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default PersonForm