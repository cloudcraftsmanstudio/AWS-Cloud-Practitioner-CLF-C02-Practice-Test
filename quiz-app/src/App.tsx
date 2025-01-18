import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QuestionNavigation } from './components/QuestionNavigation'
import { Question } from './components/Question'
import { Particles } from './components/ui/particles'
import { useState } from 'react'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="flex relative min-h-screen bg-black">
        <Particles
          className="absolute inset-0"
          quantity={150}
          staticity={30}
          ease={30}
          color="#60a5fa"
          size={1}
        />
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Sidebar */}
        <div 
          className={`
            fixed md:static inset-y-0 left-0 z-40
            w-72 md:w-96 
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            bg-black/95 md:bg-transparent
            overflow-auto
            flex-shrink-0
            md:h-screen
          `}
        >
          <div className="pt-16 md:pt-0 h-full">
            <QuestionNavigation onQuestionSelect={() => setIsSidebarOpen(false)} />
          </div>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-h-screen md:h-screen overflow-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <div className="w-full max-w-4xl mx-auto">
              <Routes>
                <Route path="/question/:id" element={<Question />} />
                <Route path="/" element={<Navigate to="/question/1" replace />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App 