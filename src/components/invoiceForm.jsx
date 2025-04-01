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
    <div className="container-fluid py-3 mt-5">
      <form className="container mx-auto p-3 bg-light shadow rounded">
        <h2 className="mb-4">Create Invoice</h2>
        <div className="mb-3">
          <label className="form-label">From: </label>
          <input className="form-control" type="text" name="from" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">To: </label>
          <input className="form-control" type="text" name="to" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Date: </label>
          <input className="form-control" type="date" name="date" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Description: </label>
          <input className="form-control" type="text" name="description" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Hourly Rate ($): </label>
          <input className="form-control" type="number" name="hourly" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Total ($): </label>
          <input className="form-control" type="number" name="total" onChange={handleChange} />
        </div>
      </form>
    </div>
  );
};

export default InvoiceForm;