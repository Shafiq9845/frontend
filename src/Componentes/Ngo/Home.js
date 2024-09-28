import Nav from './Nav'
import Footer from '../User/Footer'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Css/open-iconic-bootstrap.min.css";
import "../../Css/animate.css";
import "../../Css/owl.carousel.min.css";
import "../../Css/owl.theme.default.min.css";
import "../../Css/magnific-popup.css";
import "../../Css/aos.css";
import "../../Css/ionicons.min.css";
import "../../Css/bootstrap-datepicker.css";
import "../../Css/jquery.timepicker.css";
import "../../Css/flaticon.css";
import "../../Css/icomoon.css";
import "../../Css/style.css";
import "../../Css/style/loginsignup.css";
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
  
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [ngoName, setNgoName] = useState('');
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedNgoName = localStorage.getItem('ngoName');
  
    if (storedUserId && storedNgoName) {
      setUserId(storedUserId);
      setNgoName(storedNgoName);

      
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <>
    <Nav/>
    <Footer/>
    </>
  )
}

export default Home