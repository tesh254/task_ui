import reducer from "../redux/reducers";
import { initialState } from "../redux/reducers/index";

describe("reducers", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it("should handle LOADING", () => {
    expect(reducer(initialState, { type: "LOADING" })).toMatchSnapshot();
  });

  it("should handle ERROR", () => {
    expect(reducer(initialState, { type: "ERROR" })).toMatchSnapshot();
  });

  it("should handle LOGIN success", () => {
    expect(
      reducer(initialState, {
        type: "LOGIN_SUCCESS",
        payload: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjM3OTU5OTI2NDcyLCJkYXRhIjoiMDcwNTE4MTcwNyIsImlhdCI6MTU4MTY2MDAwM30.lUNx_3MCdDxzLvXNyPBjZ9nxe09J62F5M8byF7wvPMg"
        }
      })
    ).toMatchSnapshot();
  });

  it("should handle AUTH type", () => {
      expect(reducer(initialState, {
          type: "AUTH",
          payload: {
              isAuthenticated: true
          }
      })).toMatchSnapshot()
  })
});
