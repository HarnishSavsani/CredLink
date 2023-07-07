import React from 'react';
import LoanDetail from './LoanDetail';

const LoanList = ({ loans }) => {
  return (
    <div>
      <h2>Loan List</h2>
      {loans.map((loan) => (
        <LoanDetail key={loan.id} loan={loan} />
      ))}
    </div>
  );
};

export default LoanList;
