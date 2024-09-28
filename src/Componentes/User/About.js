import React from "react";
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
import "../../Css/style/home.css";
import Nav from "./Nav";
import Footer from "./Footer";
import ibg_3 from "../../images/bg_3.jpg";
import ibg_2 from "../../images/bg_2.jpg";
import ip1 from "../../images/person_1.jpg";
import ip2 from "../../images/person_2.jpg";
import ip3 from "../../images/person_3.jpg";

const About = () => {
  return (
    <>
      <Nav />
      <div
        class="hero-wrap"
        style={{ backgroundImage: `url(${ibg_2})` }}
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
                class="mb-3 bread title"
                data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
              >
                About Us
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section class="ftco-section w-10">
        <div class="container">
          <div class="row d-flex">
            <div
              class="col-md-6 d-flex ftco-animate"
              style={{
                backgroundImage: `url(${ibg_3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height:"330px",
                left:"15px",
              }}
            >
              <div class="img img-about align-self-stretch"></div>
            </div>
            <div class="col-md-6 pl-md-5 ftco-animate">
              <h2 class="mb-4">Welcome to NGO Since 1898</h2>
              <p>
                It was all during one fine day that when we where crossing over the streets   
                
              </p>
              <p>
                
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="ftco-counter ftco-intro ftco-intro-2"
        id="section-counter"
      >
        <div class="container">
          <div class="row no-gutters">
            <div class="col-md-5 d-flex justify-content-center counter-wrap ftco-animate">
              <div class="block-18 color-1 align-items-stretch">
                <div class="text">
                  <span>Served Over</span>
                  <strong class="number" data-number="1432805">
                    0
                  </strong>
                  <span>Children in 190 countries in the world</span>
                </div>
              </div>
            </div>
            <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div class="block-18 color-2 align-items-stretch">
                <div class="text">
                  <h3 class="mb-4">Donate Money</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                  <p>
                    <a href="/Donate" class="btn btn-white px-3 py-2 mt-2">
                      Donate Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section bg-light">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section ftco-animate text-center">
              <h2 class="mb-4">Latest Donations</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 d-flex mb-sm-4 ftco-animate">
              <div class="staff">
                <div class="d-flex mb-4">
                  <div
                    class="img"
                    style={{ backgroundImage: `url(${ip1})` }}
                  ></div>
                  <div class="info ml-4">
                    <h3>
                      <a href="teacher-single.html">Ivan Jacobson</a>
                    </h3>
                    <span class="position">Donated:30/05/2024</span>
                    <div class="text">
                      <p>
                        Donated <span>30000 rs</span> for{" "}
                      </p>
                      <a>Children Needs Food</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex mb-sm-4 ftco-animate">
              <div class="staff">
                <div class="d-flex mb-4">
                  <div
                    class="img"
                    style={{ backgroundImage: `url(${ip2})` }}
                  ></div>
                  <div class="info ml-4">
                    <h3>
                      <a href="teacher-single.html">Ivan Jacobson</a>
                    </h3>
                    <span class="position">Donated:01/04/2024</span>
                    <div class="text">
                      <p>
                        Donated <span>15000 rs</span> for{" "}
                      </p>
                      <a>Children Needs Food</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 d-flex mb-sm-4 ftco-animate">
              <div class="staff">
                <div class="d-flex mb-4">
                  <div
                    class="img"
                    style={{ backgroundImage: `url(${ip3})` }}
                  ></div>
                  <div class="info ml-4">
                    <h3>
                      <a href="teacher-single.html">Ivan Jacobson</a>
                    </h3>
                    <span class="position">Donated:11/06/2024</span>
                    <div class="text">
                      <p>
                        Donated <span>25000 rs</span> for{" "}
                      </p>
                      <a>Children Needs Food</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
