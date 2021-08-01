import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

const App = ({ name }) => (
  <BrowserRouter>
    <header>
      <h1>{name}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/single">Single</Link>
          </li>
          <li>
            <Link to="/many">Many</Link>
          </li>
          <li>
            <Link to="/route">Route</Link>
          </li>
        </ul>
      </nav>
    </header>
  </BrowserRouter>
)

export default App