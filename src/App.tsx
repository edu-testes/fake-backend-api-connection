import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AuthPage from './pages/AuthPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import UserPage from './pages/UserPage.tsx'

const authRoutes = [
  { path: '/login', element: <AuthPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/user', element: <UserPage /> },
]

const mainRoutes = [
  // { path: '/user', element: <UserPage /> },
];

const api = 'http://localhost:3000/';

function App() {
  const [count, setCount] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
