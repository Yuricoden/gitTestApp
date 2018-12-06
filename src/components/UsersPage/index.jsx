import React, { Component } from "react";
import Users from "../../containers/Users";
import "./index.css";

export default class UsersList extends Component {
  constructor() {
    super();

    this.state = {
      incButton: 1
    };
  }

  previousPage = () => {
    this.setState({ incButton: this.state.incButton - 1 });
  };

  nextPage = () => {
    this.setState({ incButton: this.state.incButton + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div className="main__pagination">
          <div className="container__pagination">
            <div className="arrow__wrapper">
              {this.state.incButton != 1 ? (
                <div className="button__previous">
                  <button
                    className="paginate_button"
                    onClick={this.previousPage}
                  >
                    Previous
                  </button>
                </div>
              ) : null}

              <div className="button__next">
                <button className="paginate_button" onClick={this.nextPage}>
                  Next{" "}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="users__container">
          <Users pageNumber={this.state.incButton} />
        </div>
      </React.Fragment>
    );
  }
}
