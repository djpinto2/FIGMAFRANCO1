'use client'

import { useRegister } from '@/contexts/RegisterContext'
import RegisterModal from './RegisterModal'

export default function RegisterModalWrapper() {
  const { isOpen, closeModal } = useRegister()
  return <RegisterModal isOpen={isOpen} onClose={closeModal} />
}

