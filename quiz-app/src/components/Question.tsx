import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { questions } from '../data/questions'
import { Button } from './ui/moving-border'
import { motion, AnimatePresence } from 'framer-motion'
import { Tilt } from './ui/tilt'

export function Question() {
  const { id } = useParams()
  const navigate = useNavigate()
  const questionIndex = parseInt(id || '1') - 1
  const question = questions[questionIndex]
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([])
  const [showFeedback, setShowFeedback] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    // Reset state when question changes
    setSelectedAnswers([])
    setShowFeedback(false)
    setAttempts(0)
    setShowImage(false)
  }, [questionIndex])

  useEffect(() => {
    // Auto-dismiss image after 2 seconds
    if (showImage) {
      const timer = setTimeout(() => {
        setShowImage(false)
        if (!attemptsExhausted && !isCorrect) {
          setShowFeedback(false)
          setSelectedAnswers([])
        }
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [showImage])

  if (!question) {
    return <div className="text-white/90">Question not found</div>
  }

  const handleOptionClick = (option: string) => {
    if (showFeedback || attemptsExhausted) return

    if (question.type === 'multiple-choice') {
      setSelectedAnswers([option])
    } else {
      setSelectedAnswers(prev => {
        const isSelected = prev.includes(option)
        if (isSelected) {
          return prev.filter(a => a !== option)
        } else {
          return [...prev, option]
        }
      })
    }
  }

  const handleSubmit = () => {
    if (selectedAnswers.length > 0) {
      setShowFeedback(true)
      setShowImage(true)
      setAttempts(prev => prev + 1)
    }
  }

  const handleNextAttempt = () => {
    if (attempts < 2) {
      setShowFeedback(false)
      setSelectedAnswers([])
    }
  }

  const isCorrect = question.type === 'multiple-choice'
    ? selectedAnswers.length === 1 && question.correctAnswers.includes(selectedAnswers[0])
    : selectedAnswers.length === question.correctAnswers.length && 
      selectedAnswers.every(answer => question.correctAnswers.includes(answer)) &&
      question.correctAnswers.every(answer => selectedAnswers.includes(answer))

  const isFirstAttempt = attempts === 1
  const canTryAgain = !isCorrect && attempts === 1
  const attemptsExhausted = attempts >= 2

  const handleNavigation = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' ? questionIndex + 2 : questionIndex
    navigate(`/question/${newIndex}`)
  }

  const getOptionClass = (option: string) => {
    const isSelected = selectedAnswers.includes(option)

    if (!showFeedback) {
      return isSelected
        ? 'bg-white/5 border-[#ff1cf7] text-white'
        : 'group border-white/30 hover:border-transparent text-white/90'
    }

    // Only show green/red highlighting after final attempt or when correct
    if (isCorrect || attemptsExhausted) {
      if (question.correctAnswers.includes(option)) {
        return 'bg-green-500/10 border-green-500/50 text-green-300'
      }
      return 'bg-red-500/10 border-red-500/50 text-red-300'
    }

    // For first incorrect attempt, just highlight the selected answer
    return isSelected
      ? 'bg-white/5 border-[#ff1cf7] text-white'
      : 'border-white/30 text-white/90'
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-6xl">
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <Button
            borderRadius="1rem"
            className="p-4 sm:p-6 md:p-8 relative"
            containerClassName="w-full"
            duration={46000}
            borderClassName="opacity-100 bg-[radial-gradient(var(--blue-500)_40%,transparent_60%)]"
          >
            <div className="relative z-10">
              <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white/90">
                Question {questionIndex + 1}
                <span className="text-sm font-normal ml-2 text-white/50">
                  ({question.type === 'multiple-choice' ? 'Select one answer' : 'Select all that apply'})
                </span>
              </h1>
              <p className="text-base sm:text-lg mb-6 sm:mb-8">{question.question}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {question.options.map((option) => (
                  <div key={option} className="relative group">
                    <motion.button
                      onClick={() => handleOptionClick(option)}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      className={`relative w-full text-left p-3 sm:p-4 rounded-lg transition-all duration-200 text-sm sm:text-base
                        ${getOptionClass(option)}
                        border
                        bg-gradient-to-r from-transparent via-transparent to-transparent
                        group-hover:bg-gradient-to-r group-hover:from-[#ff1cf7] group-hover:via-[#00b8ff] group-hover:to-[#73ff00]
                        group-hover:animate-gradient-xy
                        [background-size:400%_400%]
                        overflow-hidden
                        h-full
                      `}
                      disabled={showFeedback || attemptsExhausted}
                    >
                      <div className="absolute inset-[1px] rounded-lg bg-black group-hover:bg-black/95" />
                      <span className="relative z-10">
                        {option}
                      </span>
                    </motion.button>
                  </div>
                ))}
              </div>

              <AnimatePresence>
                {showImage && selectedAnswers.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-0"
                  >
                    <Tilt className="relative" rotationFactor={8} isRevese>
                      <img 
                        src={
                          isCorrect && isFirstAttempt
                            ? "./Source/images/correct-first-attempt.jpg"
                            : !isCorrect && attempts === 1
                            ? "./Source/images/incorrect-second-attempt.jpg"
                            : !isCorrect && attempts === 2
                            ? "./Source/images/correct-answer-after-all-incorrct.jpg"
                            : isCorrect && attempts === 2
                            ? "./Source/images/correct-first-attempt.jpg"
                            : ""
                        }
                        alt="Feedback"
                        className="w-72 h-56 sm:w-96 sm:h-72 object-cover rounded-lg border-2 border-white/10"
                      />
                    </Tilt>
                  </motion.div>
                )}
              </AnimatePresence>

              {!showFeedback && !attemptsExhausted && (
                <button
                  onClick={handleSubmit}
                  disabled={selectedAnswers.length === 0}
                  className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 sm:py-3 bg-white/10 text-white text-sm sm:text-base rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  Submit Answer{question.type === 'multiple-answers' ? 's' : ''}
                </button>
              )}

              {showFeedback && (
                <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-lg border border-white/10 bg-white/5">
                  <p className={`text-base sm:text-lg font-semibold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                    {isCorrect ? 'Correct!' : attempts >= 2 ? 'Incorrect - Here\'s the explanation' : 'Incorrect - Try again'}
                  </p>
                  
                  {(isCorrect || attemptsExhausted) && (
                    <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="font-semibold text-green-400 text-sm sm:text-base">
                          Correct Answer{question.correctAnswers.length > 1 ? 's' : ''}:
                        </h3>
                        {question.options
                          .filter(option => question.correctAnswers.includes(option))
                          .map((option) => (
                            <div key={option} className="space-y-2">
                              <p className="font-medium text-green-400 text-sm sm:text-base">{option}</p>
                              <p className="text-white/80 text-sm sm:text-base">{question.explanation}</p>
                            </div>
                          ))}
                      </div>
                      
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="font-semibold text-red-400 text-sm sm:text-base">
                          Incorrect Answer{question.options.length - question.correctAnswers.length > 1 ? 's' : ''}:
                        </h3>
                        {question.options
                          .filter(option => !question.correctAnswers.includes(option))
                          .map((option) => (
                            <div key={option} className="space-y-2">
                              <p className="font-medium text-red-400 text-sm sm:text-base">{option}</p>
                              <p className="text-white/80 text-sm sm:text-base">{question.wrongOptionsExplanation[option]}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {canTryAgain && (
                    <button
                      onClick={handleNextAttempt}
                      className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 bg-white/10 text-white text-sm sm:text-base rounded-lg hover:bg-white/20 transition-colors duration-200"
                    >
                      Try Again
                    </button>
                  )}
                </div>
              )}

              <div className="flex justify-between mt-6 sm:mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation('prev')}
                  className="px-4 sm:px-6 py-2 bg-white/10 text-white text-sm sm:text-base rounded-lg hover:bg-white/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={questionIndex === 0}
                >
                  Previous
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation('next')}
                  className="px-4 sm:px-6 py-2 bg-white/10 text-white text-sm sm:text-base rounded-lg hover:bg-white/20 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={questionIndex === questions.length - 1}
                >
                  Next
                </motion.button>
              </div>
            </div>
          </Button>
        </motion.div>
      </div>
    </div>
  )
} 