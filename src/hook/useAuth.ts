/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { useContext } from "react"
import { authContext } from "../context/authContext"

export const useAuth = () => {
   const { signup, login } = useContext(authContext)
   if (!signup) throw new Error('No hay un auth provider')
   return { signup, login }
}