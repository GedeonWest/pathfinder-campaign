"use client"

import ReactModal from "react-modal"
import { cn } from "@/lib/utils"

// Устанавливаем корневой элемент для React Modal
// Убираем setAppElement, так как он может вызывать проблемы в Next.js
// ReactModal будет работать без него, но с ariaHideApp={false}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={cn(
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl max-h-[90vh] mx-4 outline-none",
        className
      )}
      overlayClassName="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center cursor-pointer overflow-x-hidden"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      closeTimeoutMS={300}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  )
}

interface ModalContentProps {
  children: React.ReactNode
  className?: string
}

export function ModalContent({ children, className }: ModalContentProps) {
  return (
    <div
      className={cn(
        "bg-card/95 backdrop-blur-sm border border-primary/30 rounded-xl shadow-2xl overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  )
}

interface ModalHeaderProps {
  children: React.ReactNode
  onClose: () => void
  className?: string
}

export function ModalHeader({ children, onClose, className }: ModalHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 border-b border-primary/20 bg-primary/5",
        className
      )}
    >
      <h3 className="font-serif text-lg font-bold text-primary">{children}</h3>
      <button
        onClick={onClose}
        className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200 text-primary hover:text-primary/80"
        aria-label="Закрыть"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  )
}

interface ModalBodyProps {
  children: React.ReactNode
  className?: string
}

export function ModalBody({ children, className }: ModalBodyProps) {
  return (
    <div className={cn("p-4 overflow-y-auto max-h-[calc(90vh-64px)]", className)}>
      {children}
    </div>
  )
}
