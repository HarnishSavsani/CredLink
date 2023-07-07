import { useState, useEffect } from 'react';
import { createLoan, editLoan, fetchLoans } from '../services/loan';

const useLoan = () => {
  const [loans, setLoans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const loanData = await fetchLoans();
        setLoans(loanData);
        setIsLoading(false);
      } catch (error) {
        // Handle error
        console.error('Error fetching loans:', error);
        setIsLoading(false);
      }
    };

    fetchLoanData();
  }, []);

  const handleCreateLoan = async (loanInfo) => {
    try {
      const newLoan = await createLoan(loanInfo);
      setLoans((prevLoans) => [...prevLoans, newLoan]);
    } catch (error) {
      // Handle error
      console.error('Error creating loan:', error);
    }
  };

  const handleEditLoan = async (loanId, updatedLoanInfo) => {
    try {
      await editLoan(loanId, updatedLoanInfo);
      setLoans((prevLoans) =>
        prevLoans.map((loan) => (loan.id === loanId ? { ...loan, ...updatedLoanInfo } : loan))
      );
    } catch (error) {
      // Handle error
      console.error('Error editing loan:', error);
    }
  };

  return {
    loans,
    isLoading,
    handleCreateLoan,
    handleEditLoan,
  };
};

export default useLoan;
