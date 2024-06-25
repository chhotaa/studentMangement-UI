import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StrudentProfile = () => {
  const { id } = useParams();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const { firstName, lastName, email, department } = student;

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const respose = await axios.get(
      `http://localhost:9192/students/student/${id}`,
    );
    setStudent(respose.data);
  };

  return (
    <div className="col-lg-9">
      <div className="card mb-4">
        <div className="card-body">
          <hr />

          <div className="row">
            <div className="col-sm-3">
              <h5 className="mb-0">First Name</h5>
            </div>

            <div className="col-sm-9">
              <p className="text-muted mb-0">{student.firstName}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <h5 className="mb-0">Last Name</h5>
            </div>

            <div className="col-sm-9">
              <p className="text-muted mb-0">{student.lastName}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <h5 className="mb-0">Email Id</h5>
            </div>

            <div className="col-sm-9">
              <p className="text-muted mb-0">{student.email}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3">
              <h5 className="mb-0">Department</h5>
            </div>

            <div className="col-sm-9">
              <p className="text-muted mb-0">{student.department}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrudentProfile;
