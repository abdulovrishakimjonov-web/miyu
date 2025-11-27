import React, { useState } from 'react'

const VerifyPages = () => {
  const [code, setCode] = useState('')
  const [showCode, setShowCode] = useState(false)

  const handleVerify = (e) => {
    e.preventDefault()
    console.log('Verify clicked', code)
  }

  const handleResend = () => {
    console.log('Resend code')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-fadeIn">
        
        {/* Left Section - Verify Code Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <div className="animate-slideDown">
            <div className="flex items-center gap-2 mb-12">
              <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
              </svg>
              <span className="text-2xl font-bold text-gray-800">Your Logo</span>
            </div>
          </div>

          <div className="animate-slideUp max-w-md">
            {/* Back to Login Link */}
            <button className="flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors group">
              <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Back to login</span>
            </button>

            <h1 className="text-4xl font-bold text-gray-800 mb-3">Verify code</h1>
            <p className="text-gray-500 mb-8">An authentication code has been sent to your email.</p>

            <div className="space-y-6">
              {/* Code Input Field */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Enter Code</label>
                <div className="relative">
                  <input
                    type={showCode ? "text" : "password"}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="7788BMGX"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-300 outline-none group-hover:border-indigo-400 font-semibold tracking-wider"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCode(!showCode)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    {showCode ? (
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

              {/* Resend Link */}
              <div className="text-sm">
                <span className="text-gray-600">Didn't receive a code? </span>
                <button 
                  onClick={handleResend}
                  className="text-red-500 font-semibold hover:text-red-600 transition-colors"
                >
                  Resend
                </button>
              </div>

              {/* Verify Button */}
              <button
                onClick={handleVerify}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Verify
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12 flex items-center justify-center animate-fadeIn">
          <div className="relative w-full max-w-md animate-float">
            <img 
              src="https://i.postimg.cc/BnckrQzH/image.png" 
              alt="Verify Code Illustration" 
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default VerifyPages