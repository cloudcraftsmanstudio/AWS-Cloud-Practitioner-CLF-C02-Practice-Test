"use client"

import { FilesystemItem } from './ui/filesystem-item'

interface QuestionNavigationProps {
  onQuestionSelect?: () => void
}

export function QuestionNavigation({ onQuestionSelect }: QuestionNavigationProps) {
  const questionNodes = {
    name: "AWS Quiz Questions",
    nodes: Array.from({ length: 65 }, (_, i) => ({
      name: `Question-${i + 1}`,
    }))
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-white/90 mb-4">AWS Quiz</h1>
      <div className="space-y-1">
        <FilesystemItem
          node={questionNodes}
          animated={true}
          onSelect={() => onQuestionSelect?.()}
        />
      </div>
    </div>
  )
} 