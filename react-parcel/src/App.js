import React, { useState, useEffect } from 'react'
import { listenEvent } from '@angel47/utils'

const App = () => {
  const [tasks, updateTasks] = useState([])

  // useEffect(() => {
  //   window.addEventListener('@angel47/react-route/todo/add-task', event => {
  //     updateTasks(oldTasks => [
  //       ...oldTasks,
  //       event.detail,
  //     ])
  //   })
  // }, [])

  useEffect(() => {
    listenEvent('@angel47/react-route/todo/add-task', event => {
      updateTasks(oldTasks => [
        ...oldTasks,
        event.detail,
      ])
    })
  }, [])

  return (
    <>
      <h1>@angel47/react-parcel</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App