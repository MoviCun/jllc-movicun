import React from 'react'
import './Main.css'
import { Outlet } from 'react-router-dom';
import Maps from '../Maps/Maps'


const Main = () => {
  return (
    <main className='main'>
      <div className='container__main'>
        <div className='banner__main'>
            <div className='container__banner-main'>
                
            </div>
        </div>
        <div className='information'>
          <Maps />
        </div>
      </div>

    </main>
  )
}

export default Main
