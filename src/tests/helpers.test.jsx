import setAuthToken from "../helpers/setAuthToken";
import tokenChecker from "../helpers/tokenChecker";

describe("test helpers", () => {
  it("should test set auth token function", () => {
    const result = setAuthToken(false);
    expect(result).toMatchSnapshot();
  });

  it("should test set auth token with token present", () => {
    const result = setAuthToken("TOkne");

    expect(result).toMatchSnapshot();
  });

  it("test tokenChecker method with token in localstorage", () => {
    const result = tokenChecker();

    expect(result).toMatchSnapshot();
  });
});
