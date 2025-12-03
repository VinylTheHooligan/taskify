import { Outlet } from "react-router-dom";

import Nav from './components/layout/Nav.tsx'
import Footer from './components/layout/Footer.tsx'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App
