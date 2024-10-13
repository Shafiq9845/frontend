import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import Nav from "./Nav";
import Footer from "../User/Footer";

const Rej_apl = () => {
  const [rejectedApplications, setRejectedApplications] = useState([]);


  useEffect(() => {
    const fetchRejectedApplications = async () => {
      try {

        const response = await axios.get("http://localhost:8081/api/ngo/rejected");
        setRejectedApplications(response.data);
      } catch (error) {
        console.error("Error fetching rejected applications:", error);
        toast.error(`Failed to fetch rejected applications: ${error.message}`);
      }
    };

    fetchRejectedApplications();
  }, []);


  const handleAccept = async (id) => {
    try {

      const url = `http://localhost:8081/api/ngo/rej/accept/${id}`;
      await axios.post(url);
      

      const response = await axios.get("http://localhost:8081/api/ngo/rejected");
      setRejectedApplications(response.data); 
      
      toast.success('Application accepted successfully.');
    } catch (error) {
      console.error("Error accepting application:", error);
      toast.error(`Failed to accept application: ${error.message}`);
    }
  };

  return (
    <>
      <Nav />
      <ToastContainer />
      <div className="container mt-4 rejected-container position-relative " style={{ marginBottom: "900px", top:"100px"}}>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Sl.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Registration Number</th>
                <th>Address</th>
                <th>Date Rejected</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rejectedApplications.length > 0 ? (
                rejectedApplications.map((application, index) => (
                  <tr key={application.id}>
                    <td>{index + 1}</td>
                    <td>{application.Name}</td>
                    <td>{application.email}</td>
                    <td>{application.ngo_reg_no}</td>
                    <td>{application.address}</td>
                    <td>{new Date(application.date).toLocaleDateString()}</td>
                    <td>{application.status}</td>
                    <td>
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleAccept(application.id)}
                      >
                        Accept
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">No rejected applications yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rej_apl;
