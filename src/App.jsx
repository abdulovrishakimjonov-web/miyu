import { Button, Flex } from 'antd'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPages from './pages/LoginPages'
import SignupPages from './pages/SignupPages'
import ForgotPages from './pages/ForgotPages'
import VerifyPages from './pages/VerifyPages'
import PasswordPages from './pages/PasswordPages'

const App = () => { 
  return (
    <Routes>
      <Route path='/' element={<LoginPages/>}/>
      <Route path='/sign' element={<SignupPages/>}/>
      <Route path='/forgot' element={<ForgotPages/>}/>
      <Route path='/verif' element={<VerifyPages/>}/>
      <Route path='/password' element={<PasswordPages/>}/>
    </Routes>
  )
}

export default App