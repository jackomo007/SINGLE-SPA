import React, { useState } from 'react'
import Parcel from 'single-spa-react/parcel'
import { v4 as uuid } from 'uuid'
import { emitEvent } from '@angel47/utils'

const App = ({ name }) => {
  const [task, updateTask] = useState('')

  const handleChange = event => {
    updateTask(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('saving...');
    // dispatchEvent(new CustomEvent('@angel47/react-route/todo/add-task', 
    // {
    //     detail: {
    //         id: uuid(),
    //         describe: task
    //     }
    // }
    // ))
    emitEvent('@angel47/react-route/todo/add-task', {
      id: uuid(),
      describe: task,
    })
    updateTask('')
  }

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task}/>
        <button>Add</button>
      </form>
      <Parcel
        config={() => System.import('@angel47/react-parcel')}
      />
    </>
  )
}

export default App