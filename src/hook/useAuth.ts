import { useContext } from "react"
import { authContext } from "../context/authContext"

export const useAuth = () => {
   const { user } = useContext(authContext)
   if (!user) throw new Error('No hay un auth provider')
   return { user }
}