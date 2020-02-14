import React from "react";
import enzyme, { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import LoginForm from "../views/LoginView/Form";
import LoginContainer from "../containers/Login";
import LoginView from "../views/LoginView";
import { Provider } from "react-redux";
import loginUser from "../redux/actions/auth/login";

enzyme.configure({ adapter: new adapter() });

const mockStore = configureStore([]);

function shallowSetup() {
  const props = {
    handleSubmit: jest.fn(),
    onChange: jest.fn(),
    loading: false
  };

  const enzymeWrapper = shallow(<LoginForm {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe("Shallow to render login form", () => {
  it("should render a login form", () => {
    const { enzymeWrapper } = shallowSetup();

    expect(enzymeWrapper.find("h1").hasClass("title is-3")).toBe(true);
    expect(
      enzymeWrapper.find("button").hasClass("button is-success is-fullwidth")
    ).toBe(true);
  });

  it("renders correctly", () => {
    const { enzymeWrapper } = shallowSetup();

    expect(toJSON(enzymeWrapper)).toMatchSnapshot();
  });
});

describe("Test Login Container", () => {
  let store;
  let component;
  let viewcomponent

  beforeEach(() => {
    store = mockStore({});

    const props = {
      loginUser: jest.fn(),
      isLoading: false
    };

    // sinon.spy(LoginContainer.prototype, "onSubmit")

    component = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LoginContainer {...props} />
        </MemoryRouter>
      </Provider>
    );

    viewcomponent = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LoginView {...props} />
        </MemoryRouter>
      </Provider>
    )
  });
  it("should render login container correctly", () => {
    expect(toJSON(component)).toMatchSnapshot();
  });

  it("should render login view correctly", () => {
    expect(toJSON(viewcomponent)).toMatchSnapshot();
  });
});
