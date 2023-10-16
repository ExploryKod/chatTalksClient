import { useContext } from 'react'
import { LoginContext } from '../Context/createLoginContext'

export const useLoginContext = () => {
  return useContext(LoginContext)
}