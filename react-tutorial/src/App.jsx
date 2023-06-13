import Hero from './components/Hero/Hero'
import Header from './components/Header/Header'
import Companies from './components/Companies/Companies'
import './App.scss'


function App() {

  return (
    <div className='App'>
      <div>
        <div className='white-gradient' />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Recidencies />
    </div>
  )
}

export default App
