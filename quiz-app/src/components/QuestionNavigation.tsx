"use client"

import { FilesystemItem } from './ui/filesystem-item'
import { useNavigate } from 'react-router-dom'
import { questions } from '../data/questions'

const questionNodes = {
  name: "AWS Quiz Questions",
  nodes: questions.map((_, index) => ({
    name: `Question-${index + 1}`
  }))
}

export function QuestionNavigation() {
  const navigate = useNavigate()

  const handleQuestionSelect = (name: string) => {
    const questionNumber = name.split('-')[1]
    navigate(`/question/${questionNumber}`)
  }

  return (
    <div className="p-6 w-full border-r border-white/10 bg-black/50">
      <h1 className="text-xl font-bold mb-4 text-white/90">AWS Quiz</h1>
      <ul>
        <FilesystemItem 
          node={questionNodes} 
          animated={true}
          onSelect={handleQuestionSelect}
        />
      </ul>
    </div>
  )
} 