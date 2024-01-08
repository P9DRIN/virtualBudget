import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Home } from "./Pages/Home"
import { ProjectProvider } from "./context/ProjectContext"

export function App() {
 

  return (
    <>
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyle/>
    <ProjectProvider>
      <Home/>
    </ProjectProvider>
    </ThemeProvider>
    </>
  )
}


