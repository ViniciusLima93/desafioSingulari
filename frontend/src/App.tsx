import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Login from './pages/Login'
import Home from './pages/Home'


function App() {
  return (
    <Router >
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/news'element={<Home />}></Route>
      </Routes>
    </Router>
  )
}

export default App
