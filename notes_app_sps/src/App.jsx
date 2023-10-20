import './App.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import NotePage from './pages/NotePage'
import NoteFormPage from './pages/NoteFormPage'
import UserPage from './pages/UserPage'
import Navbar from './components/Navbar'
import { UserProvider } from './context/UserContext'
import { NoteProvider } from './context/NoteContext'

function App() {

  return (
    <>
    <UserProvider>
      <NoteProvider>
      <BrowserRouter>       
        <Navbar/>
        <Routes>
              <Route path='/' element={<NotePage/>}></Route>
              <Route path='/notes' element={<NoteFormPage/>}></Route>
              <Route path='/users' element={<UserPage/>}></Route>
        </Routes>
        </BrowserRouter>
      </NoteProvider>
    </UserProvider>
    </>
  )
}

export default App
