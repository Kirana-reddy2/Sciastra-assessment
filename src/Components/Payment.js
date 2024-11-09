import React, { useState } from 'react';
import './Payment.css';

function Payment() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    upiId: '',
    netBankingBank: '',
  });
  const [paymentStatus, setPaymentStatus] = useState(null);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  // Handle payment method selection
  const handlePaymentMethodSelect = (method) => {
    setSelectedMethod(method);
    setPaymentDetails({}); // Reset details on method change
  };

  // Handle form submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setPaymentStatus('Processing your payment...');
    setTimeout(() => setPaymentStatus('Payment Successful!'), 1000);
  };

  return (
    <div className="payment-container">
      <h2>Choose a Payment Method</h2>

      {/* Payment Method Selection */}
      <div className="payment-methods">
        <button onClick={() => handlePaymentMethodSelect('card')}>Credit/Debit Card</button>
        <button onClick={() => handlePaymentMethodSelect('upi')}>UPI</button>
        <button onClick={() => handlePaymentMethodSelect('netbanking')}>Net Banking</button>
        <button onClick={() => handlePaymentMethodSelect('wallet')}>Google Pay</button>
      </div>

      {/* Conditional Payment Details Form */}
      <form className="payment-form" onSubmit={handlePaymentSubmit}>
        {selectedMethod === 'card' && (
          <>
            <h4>Enter Card Details</h4>
            <input
              type="text"
              name="nameOnCard"
              placeholder="Name on Card"
              value={paymentDetails.nameOnCard}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              maxLength="16"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              maxLength="5"
              value={paymentDetails.expiryDate}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              maxLength="3"
              value={paymentDetails.cvv}
              onChange={handleInputChange}
              required
            />
          </>
        )}

        {selectedMethod === 'upi' && (
          <>
            <h4>Enter UPI ID</h4>
            <input
              type="text"
              name="upiId"
              placeholder="Your UPI ID (e.g., user@upi)"
              value={paymentDetails.upiId}
              onChange={handleInputChange}
              required
            />
          </>
        )}

        {selectedMethod === 'netbanking' && (
          <>
            <h4>Select Bank</h4>
            <select
              name="netBankingBank"
              value={paymentDetails.netBankingBank}
              onChange={handleInputChange}
              required
            >
              <option value="">--Select Your Bank--</option>
              <option value="HDFC">HDFC Bank</option>
              <option value="SBI">State Bank of India</option>
              <option value="ICICI">ICICI Bank</option>
              <option value="Axis">Axis Bank</option>
            </select>
          </>
        )}

        {selectedMethod === 'wallet' && (
          <>
            <h4>Google Pay</h4>
            <p>Click "Pay Now" to proceed with Google Pay.</p>
          </>
        )}

        <button type="submit" className="pay-now-button">Pay Now</button>
      </form>

      {/* Display payment status */}
      {paymentStatus && (
        <div className={`payment-status ${paymentStatus === 'Payment Successful!' ? 'success' : 'processing'}`}>
          {paymentStatus}
        </div>
      )}
    </div>
  );
}

export default Payment;
