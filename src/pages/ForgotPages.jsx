import React, { useState } from 'react'
import logo from '../img/logo.png'
import facebok from '../img/facebok.png'
import google from '../img/google.png'
import iphone from '../img/iphone.png'
import qulf from '../img/qulf.png'
import { NavLink } from 'react-router-dom'

const ForgotPages = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submit clicked', email)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-fadeIn">
        
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="animate-slideDown">
            <div className="flex items-center gap-2 mb-12">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="animate-slideUp max-w-md">
            <button className="flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors group">
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium"><NavLink to={"/"}>Back to login</NavLink></span>
            </button>

            <h1 className="text-4xl font-bold text-gray-800 mb-3">Forgot your password?</h1>
            <p className="text-gray-500 mb-8">Don't worry, happens to all of us. Enter your email below to recover your password</p>

            <div className="space-y-6">
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

               <button
                onClick={handleSubmit}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <NavLink to={'/verif'}>Submit</NavLink>
              </button>

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
                  <img src={google} alt="" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300 hover:shadow-md">
                 <img src={iphone} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12 flex items-center justify-center animate-fadeIn">
          <div className="relative w-full max-w-md">
            <div className="animate-float">
              <img 
                src={qulf} 
                alt="Forgot Password Illustration" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            <div className="absolute top-10 left-10 animate-bounce-slow">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg shadow-lg transform rotate-12 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
            </div>

            <div className="absolute top-20 right-10 animate-spin-slow">
              <div className="w-14 h-14 bg-indigo-200 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>

            <div className="absolute bottom-20 left-16 animate-bounce">
              <div className="w-12 h-12 bg-gray-400 rounded-md shadow-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.65 10C11.7 7.31 8.9 5.5 5.77 6.12c-2.29.46-4.15 2.29-4.63 4.58C.32 14.57 3.26 18 7 18c2.61 0 4.83-1.67 5.65-4H17v2c0 1.1.9 2 2 2s2-.9 2-2v-2c1.1 0 2-.9 2-2s-.9-2-2-2h-8.35zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
            </div>

            <div className="absolute bottom-16 right-12 animate-pulse">
              <div className="w-16 h-16 bg-yellow-300 rounded-xl shadow-lg transform -rotate-12 flex items-center justify-center border-4 border-yellow-400">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ForgotPages  