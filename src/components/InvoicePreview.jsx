// InvoicePreview.js
import React from "react";
import jsPDF from "jspdf";


const InvoicePreview = ({ invoice }) => {
  const generatePDF = () => {
    const doc = new jsPDF("p", "pt", "a4");

    // **Header Section**
    doc.setFontSize(24);
    doc.text("INVOICE", 300, 50, { align: "center" });

    // **Sender & Receiver Details**
    doc.setFontSize(14);
    doc.text(`From: ${invoice.from}`, 50, 100);
    doc.text(`To: ${invoice.to}`, 400, 100);

    // **Invoice Date**
    doc.setFontSize(12);
    doc.text(`Invoice Date: ${invoice.date}`, 50, 130);

    // **Table Header**
    // Draw a filled rectangle as the header background
    doc.setFillColor(211, 211, 211); // Light grey color
    doc.rect(50, 160, 500, 30, "F");

    doc.setFontSize(14);
    doc.text("Description", 60, 180);
    doc.text("Hourly Rate ($)", 350, 180);
    doc.text("Total ($)", 480, 180);

    // **Invoice Details**
    doc.setFontSize(12);
    doc.text(invoice.description, 60, 210);
    doc.text(`$${invoice.hourly}`, 350, 210);
    doc.text(`$${invoice.total}`, 480, 210);

    // **Total Amount Section**
    doc.setFontSize(14);
    doc.text("Total Amount:", 350, 250);
    doc.text(`$${invoice.total}`, 480, 250);

    // Save the generated PDF
    doc.save("invoice.pdf");
  };

  return (
    <div>
      
      <button className="form-control mb-3 btn btn-primary mt-3 w-50 mx-auto d-block" onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default InvoicePreview;