import './App.css'
import { RoutesList } from './routes/RoutesList'
import { NavigateBar } from './components/NavigateBar'
import styled from 'styled-components'

function App() {

  const Footer = styled.div`
    height: 20vh;
    background-color: #161F26;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
  `

  return (
    
    <div className="App">
      <header>
        <h1>Popular Movies</h1>
      </header>
      
      <div>
        <NavigateBar />
      </div>
      <div>
        <RoutesList/>
      </div>
      <Footer>{`Made with <3 by Pedro Lopes`}</Footer>
    </div>
    
    
  )
}

export default App
