import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./influencer.css";
import avatarImg from "../../../../src/images/khaby.png";
import Galaxy from "../../Galaxy/Galaxy";

export default function Influencer() {
  return (
    <>
      <section className="wrapper">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              {/* <div className="title-1">
                <h3>
                  {" "}
                  but that’s not all. there’s so much{" "}
                  <span
                    style={{
                      fontWeight: "600",
                      background:
                        "-webkit-linear-gradient(20deg, #0171ed 40%, #d001ff 50%)",
                      webkitBackgroundClip: "text",
                      webkitTextFillColor: "transparent",
                    }}
                  >
                    more
                  </span>{" "}
                  you get.
                </h3>
              </div> */}
              <div className="avatar ">
                <img src={avatarImg} className="img-fluid" width="800px" alt="" />
              </div>
              {/* <div className="inf-content">
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text .Lorem Ipsum is simply dummy
                  text{" "}
                </p>
              </div> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
