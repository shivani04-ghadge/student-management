import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function AddStudent() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px" }}>
          <h1>Add Student</h1>

          <form
            style={{
              width: "350px",
            }}
          >
            <input
              type="text"
              placeholder="Student Name"
              style={{ width: "100%", padding: "10px" }}
            />

            <br />
            <br />

            <input
              type="number"
              placeholder="Age"
              style={{ width: "100%", padding: "10px" }}
            />

            <br />
            <br />

            <input
              type="text"
              placeholder="Course"
              style={{ width: "100%", padding: "10px" }}
            />

            <br />
            <br />

            <button
              style={{
                width: "100%",
                padding: "10px",
              }}
            >
              Save Student
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddStudent;