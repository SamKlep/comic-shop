import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
        <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <h1>Comic Shop</h1>
    </Router>
  )
}

export default App
