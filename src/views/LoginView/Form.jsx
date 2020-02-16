import React from "react";

const LoginForm = ({ handleSubmit, onChange, loading }) => (
  <form onSubmit={handleSubmit}>
    <h1 className="title is-3">Log In</h1>
    <span>
      Use phonenumber: 0705181707
          password: test254
    </span>
    <div className="field">
      <p className="control">
        <input
          className="input"
          name="phonenumber"
          type="text"
          placeholder="Phone Number"
          onChange={onChange}
        />
      </p>
    </div>
    <div className="field">
      <p className="control">
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
      </p>
    </div>
    <div className="field">
      <p className="control">
        <button type="submit" className="button is-success is-fullwidth">
          Login
        </button>
      </p>
    </div>
  </form>
);

export default LoginForm;
