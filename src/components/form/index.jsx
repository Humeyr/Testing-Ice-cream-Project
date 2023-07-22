import React, { useState } from 'react';

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="my-4 d-flex justify-content-center align-items-center gap-3">
      <input
        className="form-check-input"
        id="terms"
        type="checkbox"
        onChange={(e) => setIsChecked(e.target.checked)}
      />

      <div className="terms text-nowrap">
        <p
          style={{ visibility: isVisible ? 'visible' : 'hidden' }}
          className="bg-light rounded p-2 shadow"
          data-testid="popup"
        >
          Size gerçekten bir şey teslim etmiyeceğiz
        </p>

        <label htmlFor="terms">
          Kosulları okudum ve kabul ediyorum
        </label>
      </div>

      <button
        className="btn btn-warning"
        disabled={!isChecked}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        Siparişi Onayla
      </button>
    </div>
  );
};

export default Form;