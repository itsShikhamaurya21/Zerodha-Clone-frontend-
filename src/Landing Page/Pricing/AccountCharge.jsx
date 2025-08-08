import React from "react";
import "../../index.css";
function AccountCharges() {
  return (
    <div className="container my-5">
      {/* Charges for account opening */}
      <h3 className="mb-5 mt-5">Charges for account opening</h3>
      <table className="custom-table"> 
        <thead className="table-light">
          <tr className="border-bottom">
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Online account</td>
            <td ><button className="btn bg-success text-light">FREE</button></td>
          </tr>
          <tr>
            <td>Offline account</td>
            <td ><button className="btn bg-success text-light">FREE</button></td>
          </tr>
          <tr>
            <td>NRI account (offline only)</td>
            <td>₹ 500</td>
          </tr>
          <tr>
            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
            <td>₹ 500</td>
          </tr>
        </tbody>
      </table>

      {/* Charges for optional value added services */}
      <h3 className="mt-5 ">Charges for optional value added services</h3>
      <table className="custom-table mt-5">
        <thead className="table-light">
          <tr className="border-bottom">
            <th>Service</th>
            <th>Billing Frequency</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tickertape</td>
            <td>Monthly / Annual</td>
            <td>Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <td>Smallcase</td>
            <td>Per transaction</td>
            <td>Buy &amp; Invest More: 100 | SIP: 10</td>
          </tr>
          <tr>
            <td>Kite Connect</td>
            <td>Monthly</td>
            <td>Connect: 500 | Historical: 500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AccountCharges;
