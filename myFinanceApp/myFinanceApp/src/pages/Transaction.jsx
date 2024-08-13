import React, { useState, useEffect } from 'react';
import Expense from '../components/Expense'
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
        <div>
            <Expense />
        </div>
    )
}