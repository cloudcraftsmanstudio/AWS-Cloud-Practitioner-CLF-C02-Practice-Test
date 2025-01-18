"use client"

import { useState } from "react"
import { ChevronRight, Folder, File } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"

type Node = {
  name: string
  nodes?: Node[]
}

interface FilesystemItemProps {
  node: Node
  animated?: boolean
  onSelect?: (name: string) => void
}

export function FilesystemItem({
  node,
  animated = false,
  onSelect,
}: FilesystemItemProps) {
  let [isOpen, setIsOpen] = useState(false)

  const ChevronIcon = () =>
    animated ? (
      <motion.span
        animate={{ rotate: isOpen ? 90 : 0 }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="flex"
      >
        <ChevronRight className="size-4 text-blue-400" />
      </motion.span>
    ) : (
      <ChevronRight
        className={`size-4 text-blue-400 ${isOpen ? "rotate-90" : ""}`}
      />
    )

  const ChildrenList = () => {
    const children = node.nodes?.map((node) => (
      <FilesystemItem 
        node={node} 
        key={node.name} 
        animated={animated}
        onSelect={onSelect}
      />
    ))

    if (animated) {
      return (
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="pl-6 overflow-hidden flex flex-col justify-end"
            >
              {children}
            </motion.ul>
          )}
        </AnimatePresence>
      )
    }

    return isOpen && <ul className="pl-6">{children}</ul>
  }

  const isQuestion = !node.nodes
  const questionNumber = isQuestion ? node.name.split('-')[1] : null

  return (
    <li key={node.name}>
      {isQuestion ? (
        <Link 
          to={`/question/${questionNumber}`}
          className="flex items-center gap-1.5 py-1 text-white/80 hover:text-blue-400 transition-colors duration-200"
          onClick={() => onSelect?.(node.name)}
        >
          <File className="ml-[22px] size-6 text-yellow-400" />
          {node.name}
        </Link>
      ) : (
        <span 
          className="flex items-center gap-1.5 py-1 text-white/80"
        >
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-1 -m-1"
          >
            <ChevronIcon />
          </button>
          <Folder className="size-6 text-blue-400" />
          {node.name}
        </span>
      )}

      <ChildrenList />
    </li>
  )
} 