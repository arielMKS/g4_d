import React from "react";
import { Row, Table, NavLink, Collapse, Card } from "reactstrap";

import "../ListGroupCollapse.css";

class ListGroupCollapse extends React.Component {
  state = { collapse: false };

  toggle = () => {
    // console.log("viewOrderClicked firing");
    this.setState({ collapse: !this.state.collapse });
  };

  render() {
    // console.log("PROPS", this.props);
    const { items } = this.props;
    // console.log("ITEMS", items);
    return (
      <Row className="ListGroupCollapse">
        <NavLink className="navLinkStyle" onClick={this.toggle}>
          {!this.state.collapse ? (
            <span>View order</span>
          ) : (
            <span>Close order</span>
          )}
        </NavLink>
        {/* render ordered collapsible items here */}
        <Collapse isOpen={this.state.collapse}>
          <Card className="myCard">
            <Table
              className="ordersTable"
              bordered
              responsive={true}
              striped={true}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Qty</th>
                  <th>Desc</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {items.map((list, i) => {
                  return (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <th>{list.qty}</th>
                      <th>{list.desc}</th>
                      <th>{list.price}</th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </Collapse>
      </Row>
    );
  }
}

export default ListGroupCollapse;
