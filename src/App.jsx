import { useState } from 'react'
import Payment from './components/Payment'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-web-gray-900">
      {/* Header */}
      <header className="bg-web-green-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Payment Gateway</h1>
          <p className="text-web-green-100 mt-1">Secure checkout system</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Payment />
      </main>

      {/* Footer */}
      <footer className="bg-web-gray-800 text-web-gray-400 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Payment Gateway. All rights reserved.</p>
          <p className="text-xs mt-2">Secured by SSL encryption</p>
        </div>
      </footer>
    </div>
  )
}

export default App
