import React from "react";
import moment from "moment";
import { Button, Row, Col, Container } from "reactstrap";
import ListGroupCollapse from "./ListGroupCollapse";

import "../Order.css";

class Order extends React.Component {
  state = {
    collapse: false
  };

  viewOrderClicked = () => {
    // console.log("viewOrderClicked firing");
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    console.log("Order from data", this.props.location.state.customer);
    const { name, orders } = this.props.location.state.customer;
    console.log("order", orders);
    return (
      <Container className="Order">
        <Row>
          <h2>{name}</h2>
        </Row>
        <hr />
        {orders.map((item, i) => (
          <Row key={i}>
            <Col>
              <span>
                <strong> {i + 1}. </strong>
              </span>
              <span>
                <strong> Order Number: </strong>
                {item.number}
              </span>
              <span>
                <strong> Date: </strong>
                {moment(item.date).format("MMM DD, YYYY")}
              </span>
              <span>
                <strong> Status: </strong>
                {item.status}{" "}
              </span>
              <span>
                <ListGroupCollapse items={item.items} />
              </span>
              <hr />
            </Col>
          </Row>
        ))}
        <Row>
          <Col>
            <Button
              color="primary"
              onClick={() => this.props.history.push("./")}
            >
              Back to dashboard
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Order;
