import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { QuestionNavigation } from './components/QuestionNavigation'
import { Question } from './components/Question'
import { Particles } from './components/ui/particles'

function App() {
  return (
    <Router>
      <div className="flex relative min-h-screen bg-black overflow-hidden">
        <Particles
          className="absolute inset-0"
          quantity={150}
          staticity={30}
          ease={30}
          color="#60a5fa"
          size={1}
        />
        <div className="flex w-full">
          <div className="w-96 fixed top-0 left-0 h-screen overflow-auto">
            <QuestionNavigation />
          </div>
          <main className="flex-1 ml-96">
            <div className="flex items-center justify-center min-h-screen">
              <Routes>
                <Route path="/question/:id" element={<Question />} />
                <Route path="/" element={<Navigate to="/question/1" replace />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App 