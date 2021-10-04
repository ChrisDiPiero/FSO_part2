import React from 'react'

const Filter = (props) => {


  return(
    <div>
      Search:
      <input type='text'
      value={props.value}
      onChange={props.searchTermHandler}/>
    </div>
  )
}

export default Filter