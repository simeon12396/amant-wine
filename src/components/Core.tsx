import React from "react";
import { Col, Container, Nav, ProgressBar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PortfolioWork from "./PortfolioWork";
import useActiveLink from "../hooks/useActiveLink";

export const Core = () => {
  const { handleLinkClick } = useActiveLink(".navbar-nav li.active");

  return (
    <>
      <section className="section agency-home" id="home">
        <div className="bg-overlay"></div>
        <div className="home-center">
          <div className="home-desc-center">
            <Container>
              <Row className="justify-content-center">
                <Col lg={12}>
                  <div className="agency-home-content text-center text-white">
                    <h4 className="text-uppercase mt-4 letter-spacing_6 amant-logo-text">
                      Amant Wines
                    </h4>
                    <div className="mt-5">
                      <Nav.Link
                        href="#contact"
                        className="btn btn-custom d-inline"
                        onClick={() => handleLinkClick("/contact")}
                      >
                        Свържете се с нас
                      </Nav.Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section about" id="about">
        <Container>
          <Row className="mt-5 pt-3 align-items-center">
            <Col lg={6}>
              <div className="agency-about-content mt-4">
                <h4 className="line-height_1_8 text-uppercase f-22 letter-spacing_4">
                  Подбрана селекция от Екслузивни вина от цял свят
                </h4>
                <div className="mt-4 pt-2">
                  <Nav.Link
                    href="#work"
                    className="btn btn-custom d-inline"
                    onClick={() => handleLinkClick("/work")}
                  >
                    Научете повече
                  </Nav.Link>
                </div>
              </div>
            </Col>
            <Col lg={5} className="offset-lg-1 mt-5 mt-lg-0">
              <div className="agency-about-skill">
                <div>
                  <p className="text-uppercase fw-bold f-9 mb-2">
                    vin de france rouge le petit velo gold
                    <span
                      className="fw-bold fs-12"
                      style={{ marginLeft: "65%" }}
                    >
                      80%
                    </span>
                  </p>
                  <ProgressBar now={80} />
                </div>
                <div className="mt-4">
                  <p className="text-uppercase fw-bold f-13 mb-2">
                    chateau roc bonniere
                    <span
                      className="fw-bold fs-12"
                      style={{ marginLeft: "33%" }}
                    >
                      60%
                    </span>
                  </p>
                  <ProgressBar now={60} />
                </div>
                <div className="mt-4">
                  <p className="text-uppercase fw-bold f-13 mb-2">
                    var blanc mystere
                    <span
                      className="fw-bold fs-12"
                      style={{ marginLeft: "22%" }}
                    >
                      40%
                    </span>
                  </p>
                  <ProgressBar now={40} />
                </div>
                <div className="mt-4">
                  <p className="text-uppercase fw-bold f-13 mb-2">
                    touraine rose claire laroche
                    <span
                      className="fw-bold fs-12"
                      style={{ marginLeft: "65%" }}
                    >
                      75%
                    </span>
                  </p>
                  <ProgressBar now={75} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <hr />

      <PortfolioWork />
    </>
  );
};
