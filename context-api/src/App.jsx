// import Profile from './components/Profile'
// import Login from './components/Login'
// import UserContextProvider from './components/context/UserContextProvider'

import { useEffect, useState } from "react"
import Card from "./components/Card"
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/UserContext'
function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("Dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode])

  return (
    // <UserContextProvider>
    //   <h1>React and Context-api</h1>
    //   <Login />
    //   <Profile />
    // </UserContextProvider>

    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
