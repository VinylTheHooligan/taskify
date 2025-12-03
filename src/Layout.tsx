import { Outlet } from "react-router-dom";

import Nav from './components/layout/Nav.tsx'
import Footer from './components/layout/Footer.tsx'

function App() {

  return (
    <>
      <Nav />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App
