import React, { createContext, useState } from 'react'
import headerImg from './assets/bg-sidebar-mobile.svg'
import Header from './Header.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Plan from './Plan.jsx'
import Addon from './Addon.jsx'
import Info from './Info.jsx'
import Summary from './Summary.jsx'
import Footer from './Footer.jsx'
import {useContext} from 'react'


export const AppContext = createContext()

const App = ({children}) => {
  const [name, setName] = useState("negoiop")
  const [email, setEmail] = useState("negio@gmail.com")
  const [phone, setPhone] = useState("090338140")

  


  
  return (
    <AppContext.Provider value={{name, email, phone, setName, setEmail, setPhone}}>
      <div className="container">
      <Router>
        <Header />

        <main>
          <Routes>
            <Route path='/info' element={<Info />} />
            <Route path='/plan' element={<Plan />} />
            <Route path='/addon' element={<Addon />} />
            <Route path='/summ' element={<Summary />} />
          </Routes>
        </main>
      </Router>

      <Footer />
    </div>
    </AppContext.Provider>
  )
}

export default App;


export const useApp = () => {
  return useContext(AppContext)
}
