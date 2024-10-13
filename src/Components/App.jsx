import { Analytics } from "@vercel/analytics/react"
import LoginScreen from "./LoginScreen"

export default function App(){
  return(
    <>
    <Analytics/>
    <LoginScreen/>
    </>
  )
}