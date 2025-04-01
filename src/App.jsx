import React, { useState } from "react";
import Nav from './components/Nav.jsx';
import InvoiceForm from "./components/invoiceForm";
import InvoicePreview from "./components/invoicePreview.jsx";

function App() {
  const [invoiceData, setInvoiceData] = useState({
    from: "",
    to: "",
    date: "",
    description: "",
    hourly: "",
    total: "",
  });

  return (
    <div>
      <Nav />
      <InvoiceForm setInvoiceData={setInvoiceData} />
      <InvoicePreview invoice={invoiceData} />
    </div>
  );
}

export default App;