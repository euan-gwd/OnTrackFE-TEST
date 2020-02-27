import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className="app-spinner-container">
      <div className="app-spinner">
        <Spinner role="border" animation="border" variant="primary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default Loader;
