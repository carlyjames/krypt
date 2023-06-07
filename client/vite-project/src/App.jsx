import { Navbar, Loader, Footer, Service, Welcome, Transactions, Service2, Service3, Service4, Community } from './components'


const App = () => {
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Service />
      <Service2 />
      <Service3 />
      <Service4 />
      <Community />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App

