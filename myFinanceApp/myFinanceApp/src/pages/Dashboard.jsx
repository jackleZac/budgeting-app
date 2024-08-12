import React from 'react'
import  Wallet  from '../components/Wallet'


export default function Dashboard() {
    return (
        <div className='flex flex-col'>
            <div className='p-4 '>
                <h1 className='font-sans text-slate-800 font-bold text-2xl'>Welcome back, User!</h1>
            </div>
            <div className='w-full px-4 flex flex-row'>
                <Wallet />
            </div>
            <div>
                
            </div>
        </div>
    )
}