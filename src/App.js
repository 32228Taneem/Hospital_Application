import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Doctor from './Doctor';
import Patient from './Patient';
import Home from './Home';
import Navigation from './Navigation';
//import './App.css';
import './Style.css';
import PatientDetails from './PatientDetails';

function App(){
  
   return(
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctor/>} />
        <Route path="/patients" element={<Patient/>} />
        <Route path="/patientDetails" element={<PatientDetails/>} />
      </Routes>
    </BrowserRouter>
   )
  }

export default App

// import './App.css'; // Adjust the path based on your file structure

// function App() {
//   return (
//     <div>
//       <div className="navbar">
//         <a href="#home">Home</a>
//         <a href="#patients">Patients</a>
//         <a href="#doctors">Doctors</a>
//       </div>

//       <div className="container">
//         <h1>Hospital Dashboard</h1>

//         <div className="card">
//           <h2>Patient Details</h2>
//           <p>Patient Name: John Doe</p>
//           <p>Age: 35</p>
//           <p>Condition: Stable</p>
//         </div>

//         <div className="card">
//           <h2>Doctor Details</h2>
//           <p>Doctor Name: Dr. Sarah Smith</p>
//           <p>Specialization: Cardiology</p>
//           <p>Contact: sarah@example.com</p>
//         </div>
//       </div>

//       <div className="footer">
//         <p>&copy; 2024 Hospital Dashboard. All rights reserved.</p>
//       </div>
//     </div>
//   );
// }

// export default App;
