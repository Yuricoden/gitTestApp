import React from "react";
import { withRouter } from "react-router-dom";
import { getUserData } from "../actions/index";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    ...state.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserData: (...properties) => dispatch(getUserData(...properties))
  };
};

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  async componentDidMount() {
    await this.props.getUserData(
      `https://api.github.com/users/${this.props.match.params.username}`,
      "user"
    );
    await this.setState({
      user: this.props.data.user
    });
  }

  renderingDataUser = () => {
    return [
      "name",
      "followers",
      "company",
      "email",
      "location",
      "blog",
      "bio"
    ].map(item => {
      return (
        <div className={`about__user git-user__${item}`}>
          <span className={"title__prop"}>{item}:</span>
          {this.state.user[item] == null ? "none" : this.state.user[item]}
        </div>
      );
    });
  };

  render() {
    console.log(this.state.user);
    return (
      <React.Fragment>
        {typeof this.state.user != "undefined" ? (
          <div>
            <div className="github-user__cover">
              <div className="github__user-container">
                <div className="img-user__wrapper">
                  <img src={this.state.user.avatar_url} alt="" />
                </div>
                <h3 className="git-user__title">About Me</h3>
                <div className="about__yourself-container">
                  {this.renderingDataUser()}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(User)
);
