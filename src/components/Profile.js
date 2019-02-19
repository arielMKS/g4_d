import React from "react";
import { Row, Col, Card, CardImg, CardBody, Button } from "reactstrap";
import moment from "moment";

class Profile extends React.Component {
  componentDidMount = () => {
    console.log("componentDidMount firing");
  };

  renderCustomerHobbies = () => {
    var st = "";
    this.props.customerItem.interest.forEach(element => {
      st += element + ", ";
    });
    return st.substring(0, st.length - 2); // remove comma at end of string
  };

  render() {
    console.log("PROPS IN PROFILE", this.props);
    var interest = this.renderCustomerHobbies();
    return (
      <Col style={{ margin: "1em auto" }} lg="4">
        <Card
          style={{
            border: "1px solid #00b8e6"
          }}
        >
          <h2 style={{ textAlign: "center" }}>Customer Profile</h2>
          <Card style={{ margin: "0.5em" }}>
            <CardImg
              top
              src={this.props.customerItem.image}
              alt="Card image cap"
            />
            <CardBody>
              <Row style={{ color: "#00b8e6", textAlign: "center" }}>
                <Col>
                  <h4>{this.props.customerItem.name}</h4>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col />
              </Row>
              <strong>Member since: </strong>{" "}
              {moment(this.props.customerItem.member_since).format(
                "MMM DD, YYYY"
              )}
              {/* {this.props.customerItem.member_since} */}
              <Row>
                <Col>
                  <strong>Interest: </strong> {interest}{" "}
                </Col>
              </Row>
              <br />
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <Button onClick={this.props.toggleFlag} color="primary">
                    Back to dashboard
                  </Button>{" "}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Card>
      </Col>
    );
  }
}

export default Profile;
