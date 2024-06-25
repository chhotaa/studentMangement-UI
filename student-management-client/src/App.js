import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Home from "./Home";
import StudentView from "./component/student/StudentView";
import NavBar from "./component/common/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStrudent from "./component/student/AddStrudent";
import EditStudent from "./component/student/EditStudent";
import StrudentProfile from "./component/student/StrudentProfile";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/view-students" element={<StudentView />}></Route>
          <Route exact path="/add-student" element={<AddStrudent />}></Route>
          <Route
            exact
            path="/edit-student/:id"
            element={<EditStudent />}></Route>
          <Route
            exact
            path="/student-profile/:id"
            element={<StrudentProfile />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
