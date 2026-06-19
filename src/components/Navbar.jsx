function Navbar() {
  return (
    <nav
      style={{
        background: "#1e40af",
        color: "#fff",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>🎓 Student Management</h2>

      <div>
        <span>Admin</span>
      </div>
    </nav>
  );
}

export default Navbar;