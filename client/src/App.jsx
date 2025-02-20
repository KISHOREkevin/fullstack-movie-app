import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Movies from './components/Movies'
import CreateMovie from './components/CreateMovie'
import UpdateMovie from './components/UpdateMovie'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Movies/>} />
        <Route path={"/create-movie"} element={<CreateMovie />} />
        <Route path={"/update-movie/:movieid"} element={<UpdateMovie/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
