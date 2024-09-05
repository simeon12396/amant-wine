import React from "react";
import { Col, Container, Row } from "react-bootstrap";

// Image
import work1 from "../assets/images/works/work-1.png";
import work2 from "../assets/images/works/work-2.png";
import work3 from "../assets/images/works/work-3.png";
import work6 from "../assets/images/works/work-6.png";
import work7 from "../assets/images/works/work-7.png";
import work8 from "../assets/images/works/work-8.png";
import work9 from "../assets/images/works/work-9.png";
import work10 from "../assets/images/works/work-10.png";
import work11 from "../assets/images/works/work-11.png";
import work12 from "../assets/images/works/work-12.png";
import work18 from "../assets/images/works/work-18.png";
import work19 from "../assets/images/works/work-19.png";
import work30 from "../assets/images/works/work-30.png";
import work31 from "../assets/images/works/work-31.png";
import work32 from "../assets/images/works/work-32.png";
import work33 from "../assets/images/works/work-33.png";
import work34 from "../assets/images/works/work-34.png";
import work35 from "../assets/images/works/work-35.png";
import work36 from "../assets/images/works/work-36.png";
import work40 from "../assets/images/works/work-40.png";
import work41 from "../assets/images/works/work-41.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

interface PortfolioData {
  id: number;
  image: string;
  groups: string[];
  title: string;
  category: string;
  type: string;
  flavor: string;
  food: string;
}

export const portfolioData: PortfolioData[] = [
  {
    id: 1,
    image: work1,
    groups: ["RedWine"],
    title: "BORDEAUX ROUGE CHATEAU GRAND JEAN GOLD MEDAL",
    category: "Червени вина",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 2,
    image: work2,
    groups: ["RedWine"],
    title: "BORDEAUX ROUGE CHATEUA LES TUILERIES",
    category: "Червени вина",
    type: "70% мерло, 30% Сувиньон",
    flavor:
      "Изтънчен вкус на сливи, череши и боровинки. Остатъчен послевкус на земна нотка и плодов завършек.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 3,
    image: work3,
    groups: ["RedWine"],
    title: "VIN DE FRANCE ROUGE LE PETIT VELO GOLD",
    category: "Червени вина",
    type: "70% мерло, 30% Сувиньон",
    flavor:
      "Изтънчен вкус на сливи, череши и боровинки. Остатъчен послевкус на земна нотка и плодов завършек.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 4,
    image: work40,
    groups: ["RedWine"],
    title: "PAYS D'OC ROUGE MERLOT LA GRANDE ALLEE",
    category: "Червени вина",
    type: "Мерло",
    flavor:
      "Великолепен и балансиран бленд от зрели червени плодове, съчетани с фини елегантни танини.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 5,
    image: work41,
    groups: ["RedWine"],
    title: "CHATEAU ROC BONNIERE",
    category: "Червени вина",
    type: "50% Мерло, 30% Каберне сувиньон, 20% Каберне",
    flavor:
      "Брилянтна селекция от червени и тъмни плодове като череша, касис и къпина, с присъстващи фини нотки на ванилия и дъб, оставящо след себе си послевкус на ванилия и шоколад.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 6,
    image: work6,
    groups: ["WhiteWine"],
    title: "VIN DE FRANCE BLANC LE PETIT VELO",
    category: "Бели вина",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 7,
    image: work7,
    groups: ["WhiteWine"],
    title: "VAR BLANC MYSTERE",
    category: "Бели вина",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 8,
    image: work30,
    groups: ["WhiteWine"],
    title: "BORDEAUX BLANC PORTAIL DE SAINT PIERRE",
    category: "Бели вина",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 9,
    image: work8,
    groups: ["WhiteWine"],
    title: "COTES DU RHONE BLANC LES COMBELLES",
    category: "Бели вина",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 10,
    image: work9,
    groups: ["WhiteWine"],
    title: "MEDITERRANEE BLANC COEUS DE RAISIN",
    category: "Бели вина",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 11,
    image: work10,
    groups: ["WhiteWine"],
    title: "PAYS D'OC BLANC CHARONNAY PHILIPPE ARDISSON",
    category: "Бели вина",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 12,
    image: work11,
    groups: ["WhiteWine"],
    title: "COTES DE GASCOGNE BLANC BUROSSE",
    category: "Бели вина",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 13,
    image: work12,
    groups: ["RoseWine"],
    title: "TOURAINE ROSE CLAIRE LAROCHE",
    category: "Розе",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 14,
    image: work36,
    groups: ["RoseWine"],
    title: "SAINT CHINIAN ROSE CHATEAU FONTANCHE",
    category: "Розе",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 15,
    image: work34,
    groups: ["RoseWine"],
    title: "COLLINES RHODANIENNNES LE BONHEUR",
    category: "Розе",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 16,
    image: work31,
    groups: ["RoseWine"],
    title: "BORDEAU ROSE CHATEAU BORDIEU DE L'HERMITAGE",
    category: "Розе",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 17,
    image: work35,
    groups: ["RoseWine"],
    title: "ALPILLES DOMAINE DE LAGOY GOLD MEDAL BIO",
    category: "Розе",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 18,
    image: work32,
    groups: ["RoseWine"],
    title: "LE GOUT DE L’ALSACE",
    category: "Розе",
    type: "Пино ноар",
    flavor:
      "Перфектно балансиран и свеж аромат с нотки нaманго, портокалова кора и праскови, повишаващ апетита",
    food: "",
  },
  {
    id: 19,
    image: work33,
    groups: ["RoseWine"],
    title: "L’Or Des Lys",
    category: "Розе",
    type: "Каберне фран, Мерло, Каберне Сувиньон",
    flavor: "Приятен цитрусово- флорален вкус с аромат на горски плодове",
    food: "",
  },
  {
    id: 20,
    image: work18,
    groups: ["SparklingWine"],
    title: "MOUSSEUX BLANC BRUT CAFE DE PARIS",
    category: "Пенливи вина",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
  {
    id: 21,
    image: work19,
    groups: ["SparklingWine"],
    title: "PROSECCO ROSE VAL D'OCA",
    category: "Пенливи вина",
    type: "50% Каберне сувиньон, 45% Мерло, 5% Малбек",
    flavor:
      "Аромати на касис, череши, зелени чушки и лек намек на шоколад. Фин и продължителен послевкус на подправки.",
    food: "Идеално съчетание с готвени/печени меса, гъби и сирена.",
  },
];

const PortfolioWork = () => {
  const [filter, setFilter] = React.useState<string>("All");

  const handleFilter = (group: any) => {
    setFilter(group);
  };

  const filteredData =
    filter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.groups.includes(filter));

  return (
    <React.Fragment>
      <section className="section portfolio" id="work">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center">
                <h2 className="heading-title-title letter-spacing_4 text-uppercase">
                  Lorem ipsum
                </h2>
                <p className="heading-title-desc text-muted mt-4 mb-0">
                  Pellentesque habitant morbi tristique senectus malesuada fames
                  turpis egestas duis dignissim finibus commodo nibh malesuada
                  sollis diam.
                </p>
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
            {(filteredData || [])?.map((item: PortfolioData, index: number) => (
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
            ))}
          </Row>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PortfolioWork;
