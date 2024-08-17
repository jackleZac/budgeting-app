import React, { useState, useEffect } from 'react';
import ExpensesList from '../components/ExpensesList'
import axios from 'axios';

export default function News() {
    const [expenses, setExpenses] = useState([]);
    

    // Get a list of expenses
    useEffect(() => {
        axios.get('')
          .then(res => setExpenses(res))
          .catch(err => console.log(err))
    }, [])
    return (
        <div className='grid grid-cols-1 gap-y-8'>
            <ExpensesList />
        </div>
    )
}