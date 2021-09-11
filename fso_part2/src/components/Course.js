import React from 'react'

const Course = ({ course }) => {
  const parts = course.parts
  const courseSum = parts.reduce(
    (a, b) => {
      return a + b.exercises
    }, 0
  )

  return (
    <div>
      <h2>{course.name}</h2>
      <ul>
        {parts.map((e) =>
          <li key={e.id}>{`${e.name}: ${e.exercises}`}</li>
        )}
      </ul>
      <p>total of {courseSum} exercises</p>
    </div>
  )
}

export default Course