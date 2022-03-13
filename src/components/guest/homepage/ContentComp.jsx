import React from "react";
import { Card } from "react-bootstrap";
import img1 from "../../../assets/images/yodha-wewa.jpg";
import img2 from "../../../assets/images/wehera.jpg";
import img3 from "../../../assets/images/tissawewa.jpg";
import room1 from "../../../assets/images/room.png";
import room2 from "../../../assets/images/room1.png";
import room3 from "../../../assets/images/room2.png";
import food1 from "../../../assets/images/food.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination,Navigation } from "swiper";

const ContentComp = () => {
  return (
    <div className="container contentComp">
      <div className="row overflow-hidden">
        <div className="col-sm-12 col-md-12 col-lg-6 ">
          <h6 style={{ color: "#707070" }}>A little about us</h6>
          <h1 className="main-title mb-5">Recreation and recovery in healing waters</h1>
          <img className="mb-5  d-sm-block d-md-block d-lg-none" src={img1} alt="yodha wewa, yodha resort" style={{ width: "100%" }} />
          <p>
            Yodha resort is a piece of paradise among the desert areas of Sri Lanka. Locals often call this territory an Oasis and dream of
            swimming in a luxurious pool. What can we say about the local mineral water, which has already cured more than one thousand
            satisfied guests.
          </p>
          <p>
            Due to the presence of unique natural healing factors and developed infrastructure, the qualified staff of the sanatorium will
            always find for you the optimal combination of effective treatment and a pleasant stay. Healthy balanced nutrition, comfortable
            living conditions, a wide range of SPA services and services will allow you to get an inexhaustible charge of vivacity, restore
            strength and prolong youth.
          </p>
        </div>
        <div className="d-none d-lg-block col-sm-0 col-md-0 col-lg-6 overflow-hidden ">
          <img
            className="ms-5 ps-3 mt-5 pt-3 d-sm-none d-md-none d-lg-block"
            src={img1}
            alt="yodha wewa, yodha resort"
            style={{ width: "90%" }}
          />
        </div>
      </div>

      <div className="row mt-3 overflow-hidden">
        <h1 className="main-title mt-xs-3 mt-sm-3 mt-md-5 mb-5">What do we offer</h1>
        <div className="d-flex justify-content-between">
          <div className="row mb-2">
            <div className="col-sm-12 col-md-4">
              <Card className="m-3">
                <Card.Img variant="top" src={room1} />
                <Card.Body>
                  <Card.Title className="main-title2">Comfortable rooms</Card.Title>
                  <Card.Text>
                    Your comfort is our concern <br />
                    Fresh renovation <br />
                    Helpful staff
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-12 col-md-4">
              <Card className="m-3">
                <Card.Img variant="top" src={food1} />
                <Card.Body>
                  <Card.Title className="main-title2">Lankan cuisine</Card.Title>
                  <Card.Text>
                    Circular shower <br />
                    Fresh drinking water <br />
                    Health for the whole family
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-12 col-md-4">
              <Card className="m-3">
                <Card.Img variant="top" src={room1} />
                <Card.Body>
                  <Card.Title className="main-title2">Comfortable rooms</Card.Title>
                  <Card.Text>
                    Your comfort is our concern <br />
                    Fresh renovation <br />
                    Helpful staff
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 col-lg-7">
            <h1 className="main-title">Entertainment and attractions</h1>
            <div className="row mt-5 mt-md-5">
              <div className="col-sm-12 col-md-6 ">
                <img src={img3} alt="" style={{ width: "100%" }} />
              </div>
              <div className="col-sm-12 col-md-6">
                <p className="mt-1 mt-sm-3">
                  You can use excursion services. Visit places that have already become historical - the tissa wewa, the temple, the stupa.
                  The combination of active recreation and relaxation will help restore strength. The new work week will start from scratch.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 overflow-hidden mt-1 mt-md-4">
            <img src={img2} alt="" style={{ width: "60%" }} />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="d-flex" style={{ alignItems: "baseline" }}>
          <h1 className="main-title me-3">Rooms</h1>
          <hr className="flex-grow" style={{ color: "#E1963C", padding: "2px", flex: "1" }} />
        </div>
        <div className="row mt-3 mt-md-5">
          <div className="col-sm-12 col-md-4 overflow-hidden">
            <img src={room1} alt="" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
          </div>
          <div className="col-sm-12 col-md-4 ms-0 ms-md-5">
            <h1 className="main-title3 mb-4">Standard</h1>
            <h6 className="mb-4">
              From <b style={{ fontSize: "25px" }}>18 000</b> /day.
            </h6>
            <p>
              The area of ​​the room is 20 sq.m. <br /> Balcony 3 sq.m <br /> Shower and all accessories 2 twin beds
            </p>
            <h6 className="mb-5 mb-md-0">LEARN MORE &#10142;</h6>
          </div>
        </div>
        <div className="row mt-3 mt-md-5">
          <div className="col-sm-12 col-md-4 overflow-hidden">
            <img src={room2} alt="" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
          </div>
          <div className="col-sm-12 col-md-4 ms-0 ms-md-5">
            <h1 className="main-title3 mb-4">The luxury</h1>
            <h6 className="mb-4">
              From <b style={{ fontSize: "25px" }}>18 000</b> /day.
            </h6>
            <p>
              The square of the room is 20 sq.m. <br /> Balcony 3 sq.m. <br /> Shower and all accessories for 2 persons (double bed)
            </p>
            <h6 className="mb-5 mb-md-0">LEARN MORE &#10142;</h6>
          </div>
        </div>
        <div className="row mt-3 mt-md-5">
          <div className="col-sm-12 col-md-4 overflow-hidden">
            <img src={room3} alt="" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
          </div>
          <div className="col-sm-12 col-md-4 ms-0 ms-md-5">
            <h1 className="main-title3 mb-4">Suite</h1>
            <h6 className="mb-4">
              From <b style={{ fontSize: "25px" }}>18 000</b> /day.
            </h6>
            <p>
              The area of ​​the room is 20 sq.m. <br /> Balcony 3 sq.m <br /> Shower and all accessories 2 twin beds
            </p>
            <h6 className="mb-5 mb-md-0">LEARN MORE &#10142;</h6>
          </div>
        </div>
      </div>
      <div className="container mt-3 mt-md-5">
        <div className="d-flex" style={{ alignItems: "center" }}>
          <hr className="flex-grow" style={{ color: "#E1963C", padding: "2px", flex: "0.2" }} />
          <h1 className="main-title ms-3">Gallery</h1>
        </div>
        <div className="mt-4">
        <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="overflow-hidden"><img src={food1} alt="" style={{height:"350px",width:"100%",objectFit:"cover"}}/></div></SwiperSlide>
        <SwiperSlide><div className="overflow-hidden"><img src={room1} alt="" style={{height:"350px",width:"100%",objectFit:"cover"}}/></div></SwiperSlide>
        <SwiperSlide><div className="overflow-hidden"><img src={room2} alt="" style={{height:"350px",width:"100%",objectFit:"cover"}}/></div></SwiperSlide>
        <SwiperSlide><div className="overflow-hidden"><img src={room3} alt="" style={{height:"350px",width:"100%",objectFit:"cover"}}/></div></SwiperSlide>
        <SwiperSlide><div className="overflow-hidden"><img src={img1} alt="" style={{height:"350px",width:"100%",objectFit:"cover"}}/></div></SwiperSlide>
        <SwiperSlide><div className="overflow-hidden"><img src={img2} alt="" style={{height:"350px",width:"100%",objectFit:"cover"}}/></div></SwiperSlide>
        <SwiperSlide><div className="overflow-hidden"><img src={img3} alt="" style={{height:"350px",width:"100%",objectFit:"cover"}}/></div></SwiperSlide>
        
      </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ContentComp;
