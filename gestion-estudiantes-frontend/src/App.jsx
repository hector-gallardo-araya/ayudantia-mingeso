import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateStudent from './components/CreateStudent.jsx'
import StudentList from './components/StudentList.jsx'
import StudentView from './components/StudentView.jsx'
import StateExample from './components/StateExample.jsx'
import Button from './components/Button.jsx'
import Contador from './components/Contador.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes> 
        <Route path="/estudiantes" element={<StudentList/>}/>
        <Route path="/estudiantes/:rutEstudiante" element={<StudentView/>}/>
        <Route path="/estudiantes/crear" element={<CreateStudent />}/>        
      </Routes>
    </BrowserRouter>
  )
}

export default App
