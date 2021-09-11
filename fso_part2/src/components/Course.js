import React from 'react'

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map( (e) => 
          <li key={e.id}>{`${e.name}: ${e.exercises}`}</li>
        )}
      </ul>
    </div>
  )
}

export default Course