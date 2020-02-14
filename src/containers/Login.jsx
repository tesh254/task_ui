import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

// Actions
import loginUser from "../redux/actions/auth/login";

// Component
import LoginForm from "../views/LoginView/Form";


class LoginContainer extends React.Component {
  state = {
    phonenumber: "",
    password: ""
  };

  onChange = e => {
    console.log([e.target.name], e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { password, phonenumber } = this.state;

    const data = {
      phonenumber,
      password
    };

    const { loginUser } = this.props;

    loginUser(data);
  };

  render() {
    const { isLoading } = this.props;
    return (
      <section
        className="has-text-centered"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <LoginForm
          handleSubmit={this.onSubmit}
          onChange={this.onChange}
          loading={isLoading}
        />
      </section>
    );
  }
}

LoginContainer.propTypes = {
  isLoading: PropTypes.bool
};

LoginContainer.defaultProps = {
  isLoading: false
};

const mapStateToProps = state => ({
  isLoading: true
});

export default withRouter(connect(mapStateToProps, { loginUser })(LoginContainer));
