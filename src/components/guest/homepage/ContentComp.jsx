import React from "react";
import { Card } from "react-bootstrap";
import img1 from "../../../assets/images/yodha-wewa.jpg";
import room1 from "../../../assets/images/room.png";
import food1 from "../../../assets/images/food.png";


const ContentComp = () => {
  return (
    <div className="container contentComp">
      <div className="row overflow-hidden">
        <div className="col-6">
          <h6>A little about us</h6>
          <h1 className="main-title mb-5">Recreation and recovery in healing waters</h1>
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
        <div className="col-6 overflow-hidden">
          <img className="ms-5 ps-3 mt-5 pt-3" src={img1} alt="yodha wewa, yodha resort" style={{width:"90%"}} />
        </div>
      </div>

      <div className="row mt-3 overflow-hidden">
        <h1 className="main-title mt-5 mb-5">What do we offer</h1>
        <div className="d-flex justify-content-between">
        <Card style={{ width: "23rem" }} >
          <Card.Img variant="top" src={room1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "23rem" }}>
          <Card.Img variant="top" src={food1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "23rem" }}>
          <Card.Img variant="top" src={room1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default ContentComp;
