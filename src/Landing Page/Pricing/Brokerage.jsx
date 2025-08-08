import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
function App() {
  const [activeTab, setActiveTab] = useState("equity");

  const renderContent = () => {
    switch (activeTab) {
      case "equity":
        return (
          <div>
            <h4 className="mb-3">Equity Charges</h4>
            <table className="custom-table">
              <thead>
                <tr>
                  <th></th>
                  <th className="mb-4">Equity delivery</th>
                  <th>Equity intraday</th>
                  <th>F&O - Futures</th>
                  <th>F&O - Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>Zero Brokerage</td>
                  <td>0.03% or ₹20/executed order whichever is lower</td>
                  <td>0.03% or ₹20/executed order whichever is lower</td>
                  <td>Flat ₹20 per executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>0.1% on buy & sell</td>
                  <td>0.025% on the sell side</td>
                  <td>0.02% on the sell side</td>
                  <td>
                    <ul>
                      <li>0.125% of intrinsic value on exercised options</li>
                      <li>0.1% on sell side (premium)</li>
                    </ul>
                 
                    
                  </td>
                </tr>
                <tr>
                  <td>Transaction charges</td>
                  <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
                  <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
                  <td>NSE: 0.00173%<br />BSE: 0%</td>
                  <td>NSE: 0.03503%<br />BSE: 0.0325% (on premium)</td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td >18% on (brokerage + SEBI + transaction charges)</td>        <td >18% on (brokerage + SEBI + transaction charges)</td>
                  <td >18% on (brokerage + SEBI + transaction charges)</td>
                  <td >18% on (brokerage + SEBI + transaction charges)</td>
                </tr>
                <tr>
                  <td>SEBI charges</td>
                  <td >₹10 / crore</td>
                  <td >₹10 / crore</td>
                  <td >₹10 / crore</td>
                  <td >₹10 / crore</td>
                </tr>
                  <tr>
                  <td>Stamp charges</td>
                  <td >.015% or ₹1500 / crore on buy side</td>
                  <td >0.003% or ₹300 / crore on buy side</td>
                  <td >0.002% or ₹200 / crore on buy side</td>
                  <td >0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "currency":
        return (
          <div>
            <h4 className="mb-3">Currency Charges</h4>
            <table className="custom-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Currency futures</th>
                  <th>Currency options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>0.03% or ₹20/executed order whichever is lower</td>
                  <td>₹20/executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>No STT</td>
                  <td>No STT</td>
                </tr>
                <tr>
                  <td>Transaction charges</td>
                  <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
                  <td>NSE: 0.0311%<br />BSE: 0.001%</td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>18% on (brokerage + SEBI + transaction charges)</td>
                  <td>18% on (brokerage + SEBI + transaction charges)</td>
                </tr>
                <tr>
                  <td>SEBI charges</td>
                  <td >₹10 / crore</td>
                  <td >₹10 / crore</td>
                </tr>
                <tr>
                  <td>Stamp charges</td>
                  <td >0.0001% or ₹10 / crore on buy side</td>
                  <td >0.0001% or ₹10 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "commodity":
        return (
          <div>
            <h4 className="mb-3">Commodity Charges</h4>
            <table className="custom-table">
              <thead>
                <tr className="border-bottom">
                  <th></th>
                  <th scope="col">Commodity futures</th>
                  <th scope="col">Commodity options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>0.03% or ₹20/executed order whichever is lower</td>
                  <td>₹20/executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>0.01% on sell side (Non-Agri)</td>
                  <td>0.05% on sell side</td>
                </tr>
                <tr>
                  <td>Transaction charges</td>
                  <td>MCX: 0.0021%<br />NSE: 0.0001%</td>
                  <td>MCX: 0.0418%<br />NSE: 0.001%</td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td >18% on (brokerage + SEBI + transaction charges)</td>
                   <td >18% on (brokerage + SEBI + transaction charges)</td>
                </tr>
                <tr>
                  <td>SEBI charges</td>
                  <td>Agri: ₹1 / crore<br />Non-Agri: ₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>
                <tr>
                  <td>Stamp charges</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mt-5">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>

      <div className="mt-4">{renderContent()}</div>
      <div className="text-center mt-5">
          <h1>Calculate your costs upfront using our brokerage calculator</h1>
      </div>
    </div>
  );
}

export default App;
