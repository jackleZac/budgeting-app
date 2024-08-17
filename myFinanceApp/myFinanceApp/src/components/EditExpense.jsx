import React, { useState, useEffect } from 'react'

export default function EditExpense({...selectedExpense}) {
  const [expenseDetails, setExpenseDetails] = useState(selectedExpense)
  console.log(expenseDetails)
  const handleSave = () => {
    // Sending a PUT request to update the expense
    console.log('Saving expense:', expenseDetails);
  };

  useEffect(() => {
    setExpenseDetails(expenseDetails);
  }, [expenseDetails]);

  return (
    <div className=''>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            handleSave();
        }}
        className='grid grid-cols-1'
        >
        <label>
            Date:
            <input
            type="date"
            value={expenseDetails?.date || ''}
            onChange={(e) => setExpenseDetails({...expenseDetails, date: e.target.value})}
            />
        </label>
        <label>
            Category:
            <input
            type="text"
            value={expenseDetails?.category || ''}
            onChange={(e) => setExpenseDetails({...expenseDetails, category: e.target.value})}
            />
        </label>
        <label>
            Amount:
            <input
            type="number"
            value={expenseDetails?.amount || ''}
            onChange={(e) => setExpenseDetails({...expenseDetails, amount: e.target.value})}
            />
        </label>
        <label>
            Description:
            <input
            type="text"
            value={expenseDetails?.description || ''}
            onChange={(e) => setExpenseDetails({...expenseDetails, description: e.target.value})}
            />
        </label>
        <label>
            Wallet ID:
            <input
            type="text"
            value={expenseDetails?.wallet_id || ''}
            onChange={(e) => setExpenseDetails({...expenseDetails, wallet_id: e.target.value})}
            />
        </label>
        <button 
            type="submit" 
            className="mt-2 bg-blue-500 text-white p-2 rounded"
          >Save
        </button>
        </form>
    </div>
  )
}

