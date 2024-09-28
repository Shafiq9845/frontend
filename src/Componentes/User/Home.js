import React, { useState } from 'react';
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
import "../../Css/style/home.css";
import Nav from "./Nav";
import Modal from '../Model';
import Footer from "./Footer";
import ibg_3 from '../../images/bg_3.jpg'
import ibg_4 from '../../images/bg_4.jpg'
import ibg_7 from '../../images/bg_7.jpg'
import ic_2 from '../../images/cause-2.jpg'
import ic_3 from '../../images/cause-3.jpg'
import ic_4 from '../../images/cause-4.jpg'
import ic_5 from '../../images/cause-5.jpg'
import ic_6 from '../../images/cause-6.jpg'
import i_1 from '../../images/image_1.jpg'
import i_2 from '../../images/image_2.jpg'
import i_3 from '../../images/image_3.jpg'
import ie_1 from '../../images/event-1.jpg'
import ie_2 from '../../images/event-2.jpg'
import ie_3 from '../../images/event-3.jpg'
const Home = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (imageUrl) => {
    setCurrentImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentImage('');
  };


  const [values, setValues] = useState({
    name:'',
    email:'',
    message:'',
  });
  
const handleInput=(event)=>{
  setValues({
    ...values,
    [event.target.name]:event.target.value
  });
};
const handleSubmit=(event)=>{
  axios.post('http://localhost:8081/volunteer',values)
  .then((res)=>{
    if(res.data.status==='Success'){
      toast('Done');

    }
  })
}
  return (
    <>
      <ToastContainer />
      <Nav />
      <div
        class="hero-wrap"
        style={{ backgroundImage: `url(${ibg_7})` }}
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

      <section class="ftco-counter ftco-intro" id="section-counter">
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
                   Be a giving hand who steadfast for helping the needy and the poor. 
                  </p>
                  <p>
                    <a href="/Donate" class="btn btn-white px-3 py-2 mt-8">
                      Donate Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
              <div class="block-18 color-3 align-items-stretch">
                <div class="text">
                  <h3 class="mb-4">Be a Volunteer</h3>
                  <p>
                    volunteering for the cause which is actually not noticed by many but the deeper question is that it actually benefits many for unknown reasons.
                  </p>
                  <p>
                    <a href="#volunteer" class="btn btn-white px-3 py-2 mt-2">
                      Be A Volunteer
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      
     <section className="ftco-gallery" id='glr'>
        <div className="d-md-flex" >
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

      {/* <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section ftco-animate text-center">
              <h2 class="mb-4">Recent from blog</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div class="row d-flex">
            <div class="col-md-4 d-flex ftco-animate">
              <div class="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  class="block-20"
                  style={{ backgroundImage: `url(${i_1})` }}
                ></a>
                <div class="text p-4 d-block">
                  <div class="meta mb-3">
                    <div>
                      <a href="#">Sept 10, 2018</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" class="meta-chat">
                        <span class="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 class="heading mt-3">
                    <a href="#">Hurricane Irma has devastated Florida</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ftco-animate">
              <div class="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  class="block-20"
                  style={{ backgroundImage: `url(${i_2})` }}
                ></a>
                <div class="text p-4 d-block">
                  <div class="meta mb-3">
                    <div>
                      <a href="#">Sept 10, 2018</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" class="meta-chat">
                        <span class="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 class="heading mt-3">
                    <a href="#">Hurricane Irma has devastated Florida</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ftco-animate">
              <div class="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  class="block-20"
                  style={{ backgroundImage: `url(${i_3})` }}
                ></a>
                <div class="text p-4 d-block">
                  <div class="meta mb-3">
                    <div>
                      <a href="#">Sept 10, 2018</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" class="meta-chat">
                        <span class="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 class="heading mt-3">
                    <a href="#">Hurricane Irma has devastated Florida</a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
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
              <h2 class="mb-4">Our Latest Events</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 d-flex ftco-animate">
              <div class="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  class="block-20"
                  style={{ backgroundImage: `url(${ie_1})` }}
                ></a>
                <div class="text p-4 d-block">
                  <div class="meta mb-3">
                    <div>
                      <a href="#">Sep. 10, 2018</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" class="meta-chat">
                        <span class="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 class="heading mb-4">
                    <a href="#">World Wide Donation</a>
                  </h3>
                  <p class="time-loc">
                    <span class="mr-2">
                      <i class="icon-clock-o"></i> 10:30AM-03:30PM
                    </span>{" "}
                    <span>
                      <i class="icon-map-o"></i> Venue Main Campus
                    </span>
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <p>
                    <a href="event.html">
                      Join Event <i class="ion-ios-arrow-forward"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ftco-animate">
              <div class="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  class="block-20"
                  style={{ backgroundImage: `url(${ie_2})` }}
                ></a>
                <div class="text p-4 d-block">
                  <div class="meta mb-3">
                    <div>
                      <a href="#">Sep. 10, 2018</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" class="meta-chat">
                        <span class="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 class="heading mb-4">
                    <a href="#">World Wide Donation</a>
                  </h3>
                  <p class="time-loc">
                    <span class="mr-2">
                      <i class="icon-clock-o"></i> 10:30AM-03:30PM
                    </span>{" "}
                    <span>
                      <i class="icon-map-o"></i> Venue Main Campus
                    </span>
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <p>
                    <a href="event.html">
                      Join Event <i class="ion-ios-arrow-forward"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex ftco-animate" >
              <div class="blog-entry align-self-stretch">
                <a
                  href="blog-single.html"
                  class="block-20"
                  style={{ backgroundImage: `url(${ie_3})` }}
                ></a>
                <div class="text p-4 d-block">
                  <div class="meta mb-3">
                    <div>
                      <a href="#">Sep. 10, 2018</a>
                    </div>
                    <div>
                      <a href="#">Admin</a>
                    </div>
                    <div>
                      <a href="#" class="meta-chat">
                        <span class="icon-chat"></span> 3
                      </a>
                    </div>
                  </div>
                  <h3 class="heading mb-4">
                    <a href="#">World Wide Donation</a>
                  </h3>
                  <p class="time-loc">
                    <span class="mr-2">
                      <i class="icon-clock-o"></i> 10:30AM-03:30PM
                    </span>{" "}
                    <span>
                      <i class="icon-map-o"></i> Venue Main Campus
                    </span>
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <p>
                    <a href="event.html">
                      Join Event <i class="ion-ios-arrow-forward"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section
        class="ftco-section-3 img"
        style={{ backgroundImage: `url(${ibg_3})` }}
        id='volunteer'
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row d-md-flex">
            <div class="col-md-6 d-flex ftco-animate">
              <div
                class="img img-2 align-self-stretch"
                style={{ backgroundImage: `url(${ibg_4})` }}

              ></div>
            </div>
            <div class="col-md-6 volunteer pl-md-5 ftco-animate">
              <h3 class="mb-3">Be a volunteer</h3>
              <form action="" class="volunter-form" onSubmit={handleSubmit}>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                    name="name"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your Email"
                    name="email"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    cols="30"
                    rows="3"
                    class="form-control"
                    placeholder="Message"
                    onChange={handleInput}
                    required
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    class="btn btn-white py-3 px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Modal isOpen={modalIsOpen} imageUrl={currentImage} onClose={closeModal} />
    </>
  );
};

export default Home;
