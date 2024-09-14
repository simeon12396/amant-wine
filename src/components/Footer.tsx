import { Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="row mt-5 pt-4">
      <Col lg={8} className="order-2 order-lg-1">
        <div className="startup-map mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.562530799862!2d23.350187876507533!3d42.67062507116572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85cbe10462cb%3A0x44a42623a8fbf8d9!2sg.k.%20Iztok%2C%20ul.%20%22Nikolay%20Haytov%22%206%2C%201113%20Sofia!5e0!3m2!1sen!2sbg!4v1720172665397!5m2!1sen!2sbg"
            height="350"
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            title="Google Map"
          ></iframe>
        </div>
      </Col>
      <Col lg={4} className="order-1 order-lg-2">
        <div className="mt-4">
          <div
            style={{
              backgroundImage: `url${"dada"}`,
              backgroundRepeat: "no-repeat",
            }}
            className="pb-3"
          >
            <div className="mt-4">
              <div className="agency-contact-icon float-start">
                <i className="mdi mdi-map-marker f-22 me-4"></i>
              </div>
              <div className="agency-contact-info ps-4">
                <p className="text-muted">
                  ж.к Изток, ул. Николай Хайтов 6,
                  <br />
                  <b>Amant Wines</b>
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="agency-contact-icon float-start">
                <i className="mdi mdi-phone f-22 me-4"></i>
              </div>
              <div className="agency-contact-info ps-4">
                <p className="text-muted">Телефон: 0887808879</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="agency-contact-icon float-start">
                <i className="mdi mdi-calendar-clock f-22 me-4"></i>
              </div>
              <div className="agency-contact-info ps-4">
                <p className="text-muted">Понеделник-Неделя: 12:00/22:00</p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default Footer;
