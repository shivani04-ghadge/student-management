import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px", flex: 1 }}>
          <h1>Dashboard</h1>

         

          <h3>Total Students: 120</h3>

          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <div
              style={{
                padding: "20px",
                border: "1px solid #ddd",
              }}
            >
              Present: 100
            </div>

            <div
              style={{
                padding: "20px",
                border: "1px solid #ddd",
              }}
            >
              Absent: 20
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;