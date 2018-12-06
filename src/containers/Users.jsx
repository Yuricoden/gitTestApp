import React from "react";
import { connect } from "react-redux";
import { getUsersData } from "../actions";
import Loader from "react-loader-spinner";
import { Link, withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    ...state.usersList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersData: (...properties) => dispatch(getUsersData(...properties))
  };
};

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: props.pageNumber
    };
  }

  componentDidMount() {
    this.getApiData();
  }

  async componentWillReceiveProps(nextProps) {
    if (this.state.pageNumber != nextProps.pageNumber) {
      await this.setState({ pageNumber: nextProps.pageNumber });

      await this.getApiData();
    }
  }

  getApiData = () => {
    return this.props.getUsersData(
      `https://api.github.com/users?since=${
        this.props.pageNumber
      }&per_page=100`,
      "users"
    );
  };

  renderUserBox = () => {
    return Object.values(this.props.data.users).map(user => {
      return (
        <div className="user-box">
          <img class="avatar" src={user.avatar_url} />

          <div class="name">{user.login}</div>
          <a className="profile__link" target='_blank' href={user.html_url}>
            profile link
          </a>

          <Link to={`/users/${user.login}`}>More</Link>
        </div>
      );
    });
  };

  render() {
    const loader = (
      <Loader type="Puff" color="#00BFFF" height="100" width="100" />
    );
    return (
      <React.Fragment>
        {this.props.isLoading
          ? loader
          : typeof this.props.data.users != "undefined"
          ? this.renderUserBox()
          : loader}
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Users)
);
