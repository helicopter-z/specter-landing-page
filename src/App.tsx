import React from 'react'
import './App.css'
import LandingLayout from './components/LandingLayout'
import Logo from './Logo'

function App() {
  return (
    <>
      <div className='p-8'>
        <div className='bg-light rounded-3xl'>
          <header className='relative z-50 w-full flex-none text-sm/6 font-semibold text-slate-900'>
            <nav className='max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-3'>
              <div className='relative flex items-center rounded-3xl border border-grey py-3 px-5'>
                <div className='hidden lg:flex lg:items-center'>
                  <Logo></Logo>
                  <a className='ml-8 text-black'>Home</a>
                  <a className='ml-8 text-blacklight'>How it Works</a>
                </div>
                <div className='ml-auto'>
                <button className="bg-black text-white border w-36 rounded-2xl py-2 px-3">Get Started</button>
                  {/* <button className='text-slate-500 -my-1 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300'>Get Started</button> */}
                </div>
              </div>
            </nav>
          </header>
          <LandingLayout></LandingLayout>
        </div>
      </div>
    </>
    
  )
}

export default App
