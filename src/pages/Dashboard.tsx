function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-hero">
        <h1>Dashboard Overview</h1>
        <p>Scroll down to view payments</p>
      </div>

      <div style={{ height: "50vh" }}></div>

      <div className="payments-section">
        <h2>Payments This Month</h2>
        <table className="payments-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {/* You can map real data later. For now leave it empty or add dummy rows */}
            <tr>
              <td>--</td>
              <td>--</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
