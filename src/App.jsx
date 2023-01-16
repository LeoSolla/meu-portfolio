import { About, Contact, Navbar, Portfolio, Welcome, Footer } from './containers';
import "./styles/globals.css";

const App = () => {

  return (
    <>
      <Navbar />
      <Welcome />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
