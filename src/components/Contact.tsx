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
                За поръчки и съвместна работа обърнете се към нас на посочените
                координати
              </p>
            </div>
          </Col>
        </Row>

        <Footer />
      </Container>
    </section>
  );
};
