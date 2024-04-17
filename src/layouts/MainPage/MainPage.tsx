import React from "react";
import classes from "./mainPage.module.css";
import { Col, Container, Row } from "react-bootstrap";

interface IMainPageProps {
  filter: React.ReactNode;
  ticketList: React.ReactNode;
}

export const MainPage = ({ filter, ticketList }: IMainPageProps) => {
  return (
    <Container className={classes.container}>
      <Row  className="d-flex justify-content-between g-4">
        <Col xs={12} md={12} lg={3}>{filter}</Col>
        <Col xs={12} md={12} lg={7}>{ticketList}</Col>
      </Row>
    </Container>
  );
};
