import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { portfolioData } from "../helpers/constants";
import { PortfolioDataType } from "../helpers/types";

const PortfolioWork = () => {
  const [filter, setFilter] = useState<string>("All");

  const handleFilter = (group: any) => {
    setFilter(group);
  };

  const filteredData =
    filter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.groups.includes(filter));

  return (
    <section className="section portfolio" id="work">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="text-center">
              <h2 className="heading-title-title letter-spacing_4 text-uppercase">
                Нашите вина
              </h2>
            </div>
          </Col>
          <Col lg={8}>
            <div className="filters-group-wrap mt-5 pt-3">
              <div className="filters-group">
                <ul className="nav filter-options list-unstyled list-inline justify-content-center">
                  <li
                    onClick={() => handleFilter("All")}
                    className={` nav-link list-inline-item mt-2  ${
                      filter === "All" ? "active" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    Всички вина
                  </li>
                  <li
                    data-group="RedWine"
                    className={` nav-link list-inline-item mt-2  ${
                      filter === "RedWine" ? "active" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleFilter("RedWine")}
                  >
                    Червени вина
                  </li>
                  <li
                    data-group="WhiteWine"
                    className={` nav-link list-inline-item mt-2  ${
                      filter === "WhiteWine" ? "active" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleFilter("WhiteWine")}
                  >
                    Бели вина
                  </li>
                  <li
                    data-group="RoseWine"
                    className={` nav-link list-inline-item mt-2  ${
                      filter === "RoseWine" ? "active" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleFilter("RoseWine")}
                  >
                    Розе
                  </li>
                  <li
                    data-group="SparklingWine"
                    className={` nav-link list-inline-item mt-2  ${
                      filter === "SparklingWine" ? "active" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleFilter("SparklingWine")}
                  >
                    Пенливи вина
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="container mt-5">
        <Row id="grid">
          {(filteredData || [])?.map(
            (item: PortfolioDataType, index: number) => {
              console.log(item, "item");
              return (
                <Col lg={4} md={6} xs={12} className="picture-item" key={index}>
                  <div className="position-relative portfolio-box portfolio overflow-hidden border-0">
                    <LazyLoadImage
                      src={item.image}
                      className="img-fluid"
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="portfolio-content">
                      <div className="gallary-title bg-light p-4">
                        <h6 className="text-uppercase">{item.title}</h6>
                        <p className="text-muted text-uppercase f-12 mb-2 mt-2">
                          {item.category}
                        </p>
                        <div>
                          <span className="fw-bold mr-2">Сорт:</span>
                          <span className="f-12 m-1">{item.type}</span>
                        </div>
                        <div>
                          <span className="fw-bold mr-2">Вкус:</span>
                          <span className="f-12 m-1">{item.flavor}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            }
          )}
        </Row>
      </div>
    </section>
  );
};

export default PortfolioWork;
