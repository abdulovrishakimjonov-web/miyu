import React, { useState } from 'react'
import logim from '../img/logim.png'
import logo from '../img/logo.png'
import facebok from '../img/facebok.png'
import google from '../img/google.png'
import iphone from '../img/iphone.png'
import { NavLink } from 'react-router-dom'

const LoginPages = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login clicked')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-fadeIn">
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="mb-8 animate-slideDown">
            <div className="flex items-center gap-2 mb-8">
             <img src={logo} alt="" />
            </div>
          </div>

          <div className="animate-slideUp">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Login</h1>
            <p className="text-gray-500 mb-8">Login to access your travelwise account</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@gmail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-300 outline-none group-hover:border-indigo-400"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-300 outline-none group-hover:border-indigo-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900">Remember me</span>
                </label>
                <NavLink to={'/forgot'} className="text-sm text-red-500 hover:text-red-600 transition-colors">
                  Forgot Password?
                </NavLink>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <NavLink to={'/forgot'}>Login</NavLink>
              </button>

              <p className="text-center text-sm text-gray-600">
                Don't have an account? <NavLink to="/sign" className="text-red-500 font-semibold hover:text-red-600 transition-colors">Sign up</NavLink>
              </p>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or login with</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 hover:shadow-md">
                  <img src={facebok} alt="" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 hover:shadow-md">
                    <NavLink to={'/forgot'}><img src={google} alt="" /></NavLink>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 hover:shadow-md">
                <img src={iphone} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12 flex items-center justify-center animate-fadeIn">
          <div className="relative w-full max-w-md animate-float">
            <img 
              src={logim} 
              alt="Security Illustration" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default LoginPages