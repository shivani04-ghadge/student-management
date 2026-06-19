import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "20px",
        borderRight: "1px solid #ddd",
      }}
    >
      <h3>Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/dashboard">🏠 Dashboard</Link>
        </li>

        <br />

        <li>
          <Link to="/students">👨‍🎓 Students</Link>
        </li>

        <br />

        <li>
          <Link to="/add-student">➕ Add Student</Link>
        </li>
        <li>
          <Link to="/contact">📩 Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;