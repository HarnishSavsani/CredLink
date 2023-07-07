import React from 'react';

const LenderProfile = ({ lender }) => {
  return (
    <div>
      <h2>Lender Profile</h2>
      <p>Name: {lender.name}</p>
      <p>Email: {lender.email}</p>
      <p>Address: {lender.address}</p>
      {/* Additional lender profile details */}
    </div>
  );
};

export default LenderProfile;
