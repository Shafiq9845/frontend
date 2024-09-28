import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
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
import {useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Modal from "../Model";
import Footer from "../User/Footer";
import ic_2 from "../../images/cause-2.jpg";
import ic_3 from "../../images/cause-3.jpg";
import ic_4 from "../../images/cause-4.jpg";
import ic_5 from "../../images/cause-5.jpg";
import ic_6 from "../../images/cause-6.jpg";
import i_1 from "../../images/image_1.jpg";
import i_2 from "../../images/image_2.jpg";
import i_3 from "../../images/image_3.jpg";
import ie_2 from "../../images/event-2.jpg";
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../../context/authContext";
const Home = () => {
  const { login }=useAuth();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      login();
      navigate("/login");
    }
  }, [navigate]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage("");
  };


  return (
    <>
      <Nav />
      <div
        class="hero-wrap"
        style={{ backgroundImage: `url(${ie_2})` }}
        data-stellar-background-ratio="0.5"
      >
        <div class="overlay"></div>
        <div class="container">
          <div
            class="row no-gutters slider-text align-items-center justify-content-center"
            data-scrollax-parent="true"
          >
            <div
              class="col-md-7 ftco-animate text-center"
              data-scrollax=" properties: { translateY: '70%' }"
            >
              <h1
                class="mb-4 title"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                Doing Nothing is Not An Option of Our Life
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section class="ftco-section">
        <div class="container">
          <div class="row">
            <div class="col-md-4 d-flex align-self-stretch ftco-animate">
              <div class="media block-6 d-flex services p-3 py-4 d-block">
                <div class="icon d-flex mb-3">
                  <span class="flaticon-donation-1"></span>
                </div>
                <div class="media-body pl-4">
                  <h3 class="heading">Make Donation</h3>
                  <p>
                  Even the all-powerful Pointing has no control about the
                  blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex align-self-stretch ftco-animate">
              <div class="media block-6 d-flex services p-3 py-4 d-block">
                <div class="icon d-flex mb-3">
                  <span class="flaticon-charity"></span>
                </div>
                <div class="media-body pl-4">
                  <h3 class="heading">Become A Volunteer</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex align-self-stretch ftco-animate">
              <div class="media block-6 d-flex services p-3 py-4 d-block">
                <div class="icon d-flex mb-3">
                  <span class="flaticon-donation"></span>
                </div>
                <div class="media-body pl-4">
                  <h3 class="heading">Sponsorship</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-gallery" id="glr">
        <div className="d-md-flex">
          <a
            href="#glr"
            className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
            style={{ backgroundImage: `url(${ic_2})` }}
            onClick={() => openModal(ic_2)}
          >
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="icon-search"></span>
            </div>
          </a>
          <a
            href="#glr"
            className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
            style={{ backgroundImage: `url(${ic_3})` }}
            onClick={() => openModal(ic_3)}
          >
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="icon-search"></span>
            </div>
          </a>
          <a
            href="#glr"
            className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
            style={{ backgroundImage: `url(${ic_4})` }}
            onClick={() => openModal(ic_4)}
          >
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="icon-search"></span>
            </div>
          </a>
          <a
            href="#glr"
            className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
            style={{ backgroundImage: `url(${ic_5})` }}
            onClick={() => openModal(ic_5)}
          >
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="icon-search"></span>
            </div>
          </a>
        </div>
        <div className="d-md-flex">
          <a
            href="#glr"
            className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
            style={{ backgroundImage: `url(${ic_6})` }}
            onClick={() => openModal(ic_6)}
          >
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="icon-search"></span>
            </div>
          </a>
          <a
            href="#glr"
            className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
            style={{ backgroundImage: `url(${i_1})` }}
            onClick={() => openModal(i_1)}
          >
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="icon-search"></span>
            </div>
          </a>
          <a
            href="#glr"
            className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
            style={{ backgroundImage: `url(${i_2})` }}
            onClick={() => openModal(i_2)}
          >
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="icon-search"></span>
            </div>
          </a>
          <a
            href="#glr"
            className="gallery image-popup d-flex justify-content-center align-items-center img ftco-animate"
            style={{ backgroundImage: `url(${i_3})` }}
            onClick={() => openModal(i_3)}
          >
            <div className="icon d-flex justify-content-center align-items-center">
              <span className="icon-search"></span>
            </div>
          </a>
        </div>
      </section>
      <Footer />
      <Modal
        isOpen={modalIsOpen}
        imageUrl={currentImage}
        onClose={closeModal}
      />
    </>
  );
};

export default Home;
