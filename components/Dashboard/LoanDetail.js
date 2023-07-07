import React from 'react';

const LoanDetail = ({ loan }) => {
  return (
    <div>
      <h3>Loan ID: {loan.id}</h3>
      <p>Amount: {loan.amount}</p>
      <p>Interest Rate: {loan.interestRate}</p>
      <p>Status: {loan.status}</p>
      {/* Additional loan details */}
    </div>
  );
};

export default LoanDetail;
