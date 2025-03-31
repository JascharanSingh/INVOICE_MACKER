import React from "react";

const InvoiceForm = ({ setInvoiceData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={{ margin: "1rem" }}>
      <form className="container w-50 mt-5 mb-5 p-3 bg-light">
      <h2>Create Invoice</h2>
      <div>
        <label>From: </label>
        <input className="form-control mb-3" type="text" name="from" onChange={handleChange} />
      </div>
      <div>
        <label>To: </label>
        <input className="form-control mb-3" type="text" name="to" onChange={handleChange} />
      </div>
      <div>
        <label>Date: </label>
        <input className="form-control mb-3" type="date" name="date" onChange={handleChange} />
      </div>
      <div>
        <label>Description: </label>
        <input className="form-control mb-3" type="text" name="description" onChange={handleChange} />
      </div>
      <div>
        <label>Hourly Rate ($): </label>
        <input className="form-control mb-3" type="number" name="hourly" onChange={handleChange} />
      </div>
      <div>
        <label>Total ($): </label>
        <input className="form-control mb-3" type="number" name="total" onChange={handleChange} />
      </div>
      </form>
    </div>
  );
};

export default InvoiceForm;