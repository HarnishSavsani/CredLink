import React, { useState, useEffect } from 'react';
import { getLoan, updateLoan } from '../services/loan';

const EditLoan = ({ loanId }) => {
  const [loan, setLoan] = useState(null);
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const fetchLoan = async () => {
      try {
        const fetchedLoan = await getLoan(loanId);
        setLoan(fetchedLoan);
        setAmount(fetchedLoan.amount);
        setDuration(fetchedLoan.duration);
      } catch (error) {
        console.error('Error fetching loan', error);
      }
    };

    fetchLoan();
  }, [loanId]);

  const handleUpdateLoan = async (e) => {
    e.preventDefault();
    try {
      await updateLoan(loanId, amount, duration);
      // Perform success action or show notification
    } catch (error) {
      console.error('Loan update failed', error);
    }
  };

  if (!loan) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit Loan</h1>
      <form onSubmit={handleUpdateLoan}>
        <input type="number" placeholder="Loan Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="number" placeholder="Loan Duration (in months)" value={duration} onChange={(e) => setDuration(e.target.value)} />
        <button type="submit">Update Loan</button>
      </form>
    </div>
  );
};

export default EditLoan;
