import Header from './Header/header'
import Footer from './Footer/footer'
import RoutesApp from './routes'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <RoutesApp />
      <Footer />
    </div>
  )
}

export default App
