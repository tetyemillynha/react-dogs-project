import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginForgotPassword from './LoginForgotPassword.js'
import LoginResetPassword from './LoginResetPassword'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginForgotPassword />} />
        <Route path="resetar" element={<LoginResetPassword />} />
      </Routes>
    </div>
  )
}

export default Login
