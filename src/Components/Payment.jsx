import React from "react";
import qr from "../assets/payment-qr.jpeg";

const PaymentPage = () => {

  const copyUPI = () => {
    navigator.clipboard.writeText("bright.ra@validkpay");
    alert("UPI ID Copied!");
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center bg-light"
      style={{
        minHeight: "80vh",
        paddingTop: "120px",   // header overlap fix
        paddingBottom: "60px"  // footer overlap fix
      }}
    >

      <div
        className="card shadow-lg p-4 text-center my-5"
        style={{ maxWidth: "380px", width: "100%" }}
      >
        <h3 className="mb-3">Secure Payment</h3>

        <img
          src={qr}
          alt="QR"
          className="img-fluid mb-3"
        />

        <h5>UPI ID</h5>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control text-center fw-bold"
            value="bright.ra@validkpay"
            readOnly
          />

          <button
            className="btn btn-primary"
            onClick={copyUPI}
          >
            Copy
          </button>
        </div>

        <p className="small text-muted">
          Kindly make payments only to our SEBI-verified UPI ID
        </p>

        <p className="text-danger fw-bold small">
          ⚠️ We are not responsible for payments made to any other account
        </p>

        <ul className="text-start small">
          <li>Open GPay / PhonePe / Paytm</li>
          <li>Scan QR or paste UPI ID</li>
          <li>Complete payment</li>
          <li>Share screenshot with support</li>
        </ul>

      </div>
    </div>
  );
};

export default PaymentPage;
