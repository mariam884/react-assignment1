import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { FaBookmark } from "react-icons/fa";

const PropertyCategories = () => {
  const categories = [
    { name: "Houses", offers: "6.4K offers" },
    { name: "Apartments", offers: "12.8K offers" },
    { name: "Commercial", offers: "9.3K offers" },
    { name: "Daily rental", offers: "42.4K offers" },
    { name: "New buildings", offers: "22.5K offers" },
  ];

  return (
    <Container className="py-4">
      <Row className="justify-content-center align-items-center border rounded p-3">
        {categories.map((category, index) => (
          <Col
            key={index}
            xs={6}
            md={2}
            className="text-center d-flex flex-column align-items-center"
          >
            <strong>{category.name}</strong>
            <div className="text-muted">
              <FaBookmark className="me-1" /> {category.offers}
            </div>
          </Col>
        ))}
        <Col xs={6} md={2} className="text-center">
          <Dropdown>
            <Dropdown.Toggle variant="light" className="border-0">
              More
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Land</Dropdown.Item>
              <Dropdown.Item>Parking</Dropdown.Item>
              <Dropdown.Item>Other</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};
export default PropertyCategories;