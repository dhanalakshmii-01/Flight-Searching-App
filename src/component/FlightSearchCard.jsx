import React from "react";
import Card from "react-bootstrap/Card";
// import GoogleFlight from "../assets/GoogleFlight.gif"
// import airplanetravel from "./assets/airplanetravel"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const FlightSearchCard = () => {
  return (
    <div>
      <Card className="card-design my-4 shadow">  
        <Card.Body>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <Card.Subtitle className="mb-3 ">
                Where would you want to go ?
              </Card.Subtitle>
              {/* <Card.Title className="fs-1"> Book a flight</Card.Title> */}
              {/* <img src={airplanetravel} className="img.fluid"/> */}
              <img
                src="https://www.shutterstock.com/image-vector/airplane-cloud-blue-passport-luggage-260nw-2305845281.jpg"
                className="flight-image" alt="Aeroplane in flight over blue sky"
              />
              {/* <img src={airplanetravel} className="img.fluid"/> */}
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>From</Form.Label>
                  <Form.Control type="text" placeholder="eg., Chennai" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>To</Form.Label>
                  <Form.Control type="text" placeholder="eg., Mumbai" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date"/>
                </Form.Group>

                <Button variant="success" className=" btn-color w-100 my-4" type="submit">
                  Search
                </Button>
              </Form>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

