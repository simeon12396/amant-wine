import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";

export const Contact = () => {
  return (
    <section className="section" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center">
              <h2 className="heading-title-title letter-spacing_4 text-uppercase">
                Свържете се с нас
              </h2>
              <p className="heading-title-desc text-muted mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Labore, commodi deleniti odio magni, facilis inventore nam quo
                laboriosam ducimus numquam suscipit libero provident modi, eius
                mollitia totam! Quae, fugiat quibusdam?
              </p>
            </div>
          </Col>
        </Row>

        <Footer />
      </Container>
    </section>
  );
};
