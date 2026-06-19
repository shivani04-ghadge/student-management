import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StudentCard from "../components/StudentCard";

function StudentList() {
  const students = [
    { id: 1, name: "Rahul", age: 20, course: "BCA" },
    { id: 2, name: "Priya", age: 21, course: "BSc" },
    { id: 3, name: "Amit", age: 22, course: "MCA" },
    { id: 4, name: "Neha", age: 19, course: "BCom" },
  ];

  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px" }}>
          <h1>Students</h1>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {students.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentList;