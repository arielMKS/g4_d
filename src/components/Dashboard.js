import React from "react";
import { Col, Row, Button, Table, Container } from "reactstrap";
import Profile from "./Profile";
import "../Dashboard.css";
import data from "../customers.json";

class Dashboard extends React.Component {
  state = {
    showOrderForm: false,
    flag: false,
    customerItem: "",
    customers: data
  };

  itemClicked = item => {
    this.setState({ customerItem: item, flag: !this.state.flag });
  };

  // this function receives a customer item, and passes it to the Order Form thru routing
  viewOrdersClicked = item => {
    // this.props.history.push("./order", { item });
    this.props.history.push({
      pathname: "/order",
      state: { customer: item }
    });
  };

  // this function renders customers data on a table using map function
  renderTable = () => {
    return (
      <Table bordered responsive={true} striped={true}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>{""}</th>
          </tr>
        </thead>
        <tbody>
          {this.state.customers.map((item, i) => {
            return (
              <tr key={i}>
                <th
                  style={{ cursor: "pointer" }}
                  onClick={() => this.itemClicked(item)}
                  scope="row"
                >
                  {i + 1}
                </th>
                <th
                  style={{ cursor: "pointer" }}
                  onClick={() => this.itemClicked(item)}
                >
                  {item.name}
                </th>
                <th
                  style={{ cursor: "pointer" }}
                  onClick={() => this.itemClicked(item)}
                >
                  {item.email}
                </th>
                <th>{item.phone}</th>
                <th style={{ textAlign: "center" }}>
                  <Button
                    onClick={() => this.viewOrdersClicked(item)}
                    color="primary"
                    size="sm"
                  >
                    View orders
                  </Button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  toggleFlag = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    // console.log("JSON DATA", data);
    const renderTable = this.renderTable();
    return (
      <Container className="Dashboard">
        {!this.state.flag ? (
          <div>
            <Row>
              <Col>
                <h1>Customers Dashboard</h1>
              </Col>
            </Row>
            <Row>
              <Col>{renderTable}</Col>
            </Row>
          </div>
        ) : (
          <Row>
            <Profile
              toggleFlag={this.toggleFlag}
              customerItem={this.state.customerItem}
            />
          </Row>
        )}
      </Container>
    );
  }
}

export default Dashboard;
