import React from 'react'

const expenses = [
  {
      '_id': '1',
      'amount': 50.00,
      'date': '2024-08-01',
      'category': 'Groceries',
      'description': 'Weekly grocery shopping at Walmart',
      'wallet_id': 'wallet_1'
  },
  {
      '_id': '2',
      'amount': 30.00,
      'date': '2024-08-03',
      'category': 'Transportation',
      'description': 'Gas for the car',
      'wallet_id': 'wallet_1'
  },
  {
      '_id': '3',
      'amount': 100.00,
      'date': '2024-08-05',
      'category': 'Dining',
      'description': 'Dinner at Olive Garden',
      'wallet_id': 'wallet_2'
  },
  {
      '_id': '4',
      'amount': 25.00,
      'date': '2024-08-07',
      'category': 'Entertainment',
      'description': 'Movie ticket and snacks',
      'wallet_id': 'wallet_2'
  },
  {
      '_id': '5',
      'amount': 60.00,
      'date': '2024-08-10',
      'category': 'Utilities',
      'description': 'Electricity bill payment',
      'wallet_id': 'wallet_3'
  }
]

export default function ExpensesList() {
  return (
    <div>
      <div className='py-6 flex flex-row bg-[#f3f4f6]'>
        <h2 className='mx-4'>Transaction</h2><p className='mx-2'>in July 2024</p>
        <button>Search ..</button>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Date</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Category</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Amount</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Description</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Wallet ID</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {expenses.map((expense) => (
              <tr key={expense._id}>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{expense.date}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{expense.category}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{expense.amount} MYR</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{expense.description}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{expense.wallet_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

