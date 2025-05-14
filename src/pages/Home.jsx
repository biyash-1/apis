import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen items-center justify-center dark:bg-black">
      <div className="">
        <h1 className="mb-4 text-xl font-semibold">Hi! I’m the Home page…</h1>
        <button
          onClick={() => navigate('/dashboard')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go to Dashboard
        </button>
         <p className="text-muted-foreground">
        This text will change with theme
      </p>

          <button
          onClick={() => navigate('/login')}
          className="px-5 py-2 ml-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
        Login
        </button>
      </div>
    </div>
  )
}

export default Home
