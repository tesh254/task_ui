import jwt_decode from "jwt-decode";

export default () => {
  if (localStorage.getItem("jwt_token")) {
    try {
      const decoded = jwt_decode(localStorage.getItem("jwt_token"));

      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        localStorage.clear();
      }
    } catch (e) {
      localStorage.clear();
    }
  } else {
    localStorage.clear();
  }
};
