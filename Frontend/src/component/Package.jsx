import React from "react";

import { CheckIcon } from "@heroicons/react/20/solid";
import Footer from "./Footer";
import { Card, Button, Carousel, Container, Navbar } from "react-bootstrap";
import package1 from "../assets/package1.jpeg";
import package2 from "../assets/package2.jpeg";
import package3 from "../assets/package3.jpeg";
import package4 from "../assets/package4.jpeg";
import package5 from "../assets/package5.jpeg";
import package6 from "../assets/package6.jpeg";

import Dubai from "../assets/Dubai.jpg";

import Andaman from "../assets/Andaman.jpg";

import Turkey from "../assets/Turkey.jpg";
import "../index.css"

import { Router } from "../Route/Route.js";


import { Link } from "react-router-dom";
const posts = [
  {
    id: 1,
    title: "4 days Kerla package",
    href: "#",
    description: (
      <ul>
        <li>4 day 3 night</li>
        <li>Dubai package</li>
      </ul>
    ),
    package: package1,
    place:"Dubai",
    price : "$1000"
  },
  {
    id: 2,
    title: "4 days Kerla package",
    href: "#",
    description: (
      <ul>
        <li>6 day 5 night</li>
        <li>America package</li>
      </ul>
    ),
    package: package2,
    place:"America",
     price : "$1200"
  },
  {
    id: 3,
    title: "4 days Kerla package",
    href: "#",
    description: (
      <ul>
        <li>8 day 7 night</li>
        <li>Canada package</li>
      </ul>
    ),
    package: package3,
    place:"Canada",
     price : "$1600"
  },
  {
    id: 4,
    title: "4 days Kerla package",
    href: "#",
    description: (
      <ul>
        <li>6 day 5 night</li>
        <li>Kerla package</li>
      </ul>
    ),
    package: package4,
    place:"Goa",
     price : "$800"
  },
  {
    id: 5,
    title: "4 days Kerla package",
    href: "#",
    description: (
      <ul>
        <li>4 day 3 night</li>
        <li>Newyork package</li>
      </ul>
    ),
    package: package5,
    place:"Newyork",
     price : "$1800"
  },
  {
    id: 6,
    title: "4 days Kerla package",
    href: "#",
    description: (
      <ul>
        <li>8 day 7 night</li>
        <li>Australia package</li>
      </ul>
    ),
    package: package6,
    place:"Australia",
     price : "$2800"
  },
  // More posts...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$29",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    featured: true,
  },
];

import { data } from "../data/data.js";
import { NavBar } from "./NavBar.jsx";
import { Navbarpackage } from "./Navbarpackage.jsx";

const Package = () => {
  return (
    <div className=" w-[100vw] ">
      <Navbarpackage/>
      

      <div className="price mt-8">
        <div className="package flex w-[80vw] flex-wrap ml-[15vw] mb-8">
          {posts &&
            posts.map((element) => (
              <div className=" ml-8 mb-8" key={element.id}>
                <Card style={{ width: "18rem" ,}}>
                  <Card.Body className="mb-8">
                    <Card.Img
                      variant="top"
                      src={element.package}
                      style={{ height: "228px" , marginBottom:"28px" }}
                    />
                    <Card.Title className="ml-8">
                      Place : {element.place}
                    </Card.Title>
                    <h1 className="text-[18px] ml-8 mb-[-10px]">stay we offers : </h1>
                    <Card.Text className="mt-6 mb-8">{element.description}</Card.Text>
                    <h1 className="text-[18px] ml-8 mt-[-8px]">Price : {element.price}</h1>
                    <Link to = {Router.DETAIL}>
                    <Button variant="primary" style={{ marginLeft: "30px" , marginTop:"10px"}}>
                    Know More
                    </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
      </div>
      <h1 className="ml-[30vw] ">Place visited by Many explorers</h1>
      <Container className="my-5">
        <Carousel variant="dark" className="shadow-lg rounded ">
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={Dubai}
              alt="Scenic view of mountains"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3 className=" text-[white]">DUBAI</h3>
              <p className="text-[white] text-[21px]">
                Dubai is a unique combination of luxury, culture, innovation,
                and adventure.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Andaman}
              alt="Tropical beach with trees"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3 className="text-[white] text-[28px]">Andaman</h3>
              <p className="text-[white]">
                The Andaman Islands are a paradise for nature lovers, history
                enthusiasts, and adventure seekers.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Turkey}
              alt="Sunset view"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3 className="text-[white] text-[28px]">Turkey</h3>
              <p className="text-[white]">
                Turkey is famous for ancient history, modern luxury, stunning
                landscapes, and rich culture.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container> 
      <Footer />     
    </div>
  );
};

export default Package;
