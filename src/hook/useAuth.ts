/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { useContext } from "react"
import { authContext } from "../context/authContext"
import { User } from "../types"

export const useAuth = () => {
   const context: User = useContext(authContext)
   if (!context) throw new Error('No hay un auth provider')
   return context
}