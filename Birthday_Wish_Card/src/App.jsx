import { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState("")

  const messages = [
    "Wishing you a very happy birthday! 🎉",
    "May you live long and prosper! 🌟",
    "Hope you have a wonderful day! 🎂",
    "Celebrating you today! 🎈",
    "May all your wishes come true! ✨"
  ]

  const handleSubmit = () => {
    if (name.trim()) {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]
      setMessage(randomMessage)
      setSubmitted(true)
    }
  }

  const handleReset = () => {
    setSubmitted(false)
    setName("")
    setMessage("")
  }

  return (
    <div
  className="min-h-screen bg-blue-50 flex items-center justify-center "
  style={{
    backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/001/971/264/non_2x/beautiful-cherry-blossom-with-bokeh-lights-background-concept-free-vector.jpg")`
  }}
>

      <div className="w-full max-w-md">
        {!submitted ? (
          <div className="bg-white rounded-lg shadow-md p-6 border">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-semibold font-handlee text-gray-800 mb-2">🎂 Birthday Wishes</h1>
              <p className="text-gray-600 text-sm font-handlee">Enter your name below</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium font-handlee text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Type your name here..."
                  className="w-full font-handlee px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-pink-300"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && name.trim()) {
                      handleSubmit()
                    }
                  }}
                />
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={!name.trim()}
                className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-gray-600 text-white font-medium font-handlee  py-2 px-4 rounded-md transition-colors duration-200 disabled:cursor-not-allowed"
              >
                Get Birthday Wish
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 border text-center">
            <div className="mb-4">
              <div className="text-4xl mb-3">🎉</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Happy Birthday, {name}!
              </h2>
              <div className="bg-gray-50 rounded-md p-4 mb-4">
                <p className="text-gray-700">
                  {message}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 text-2xl mb-4">
              <span>🎂</span>
              <span>🎈</span>
              <span>🎊</span>
            </div>
            
            <button
              onClick={handleReset}
              className="bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App