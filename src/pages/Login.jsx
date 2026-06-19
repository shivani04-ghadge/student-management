import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "50px",
      }}
    >
     
      <div>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Username"
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
        />

        <br />
        <br />

        <button onClick={() => navigate("/dashboard")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;