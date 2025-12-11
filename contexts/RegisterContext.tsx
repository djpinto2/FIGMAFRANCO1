'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface RegisterContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const RegisterContext = createContext<RegisterContextType | undefined>(undefined)

export function RegisterProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <RegisterContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </RegisterContext.Provider>
  )
}

export function useRegister() {
  const context = useContext(RegisterContext)
  if (context === undefined) {
    throw new Error('useRegister must be used within a RegisterProvider')
  }
  return context
}

