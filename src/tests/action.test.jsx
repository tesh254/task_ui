import fetchMock from "fetch-mock";
import { apiMiddleware, ApiError } from "redux-api-middleware";
import configureMockStore from "redux-mock-store";
import loginUser from "../redux/actions/auth/login";
import { setCurrentUser, logoutUser } from "../redux/actions/auth/setCurrentUser"
import { initialState } from "../redux/reducers/login";

const createStore = configureMockStore([apiMiddleware]);
const store = createStore(initialState);

// describe("login actions", () => {
//   afterEach(() => {
//     fetchMock.reset();
//     fetchMock.restore();
//   });

//   it("dispatched user login success", () => {
//     const response = {
//       reset_password: 0,
//       accessToken:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjM3OTU5OTI2NDcyLCJkYXRhIjoiMDcwNTE4MTcwNyIsImlhdCI6MTU4MTY2MDAwM30.lUNx_3MCdDxzLvXNyPBjZ9nxe09J62F5M8byF7wvPMg",
//       expires_in: "24h"
//     };

//     fetchMock.postOnce("https://the-task-api.herokuapp.com/auth/login", {
//       body: {
//         response
//       }
//     });

//     const expectedActions = [
//       {
//         type: "LOADING"
//       },
//       {
//         type: "LOGIN_SUCESS",
//         payload: response
//       }
//     ];

//     store
//       .dispatch(
//         loginUser({
//           phonenumber: "0705181707",
//           password: "test254"
//         })
//       )
//       .then(() => {
//         expect(store.getActions()).toEqual(expectedActions);
//       });
//   });
// });

describe("setcurrentuser actions", () => {
    it("should test setCurrentUser action function", () => {
        const dispatch = setCurrentUser(true)

        expect(typeof dispatch).toBe("function")
        expect(dispatch).toMatchSnapshot()
    })

    it("should test setCurrentUser action function", () => {
        const dispatch = setCurrentUser(false)

        expect(typeof dispatch).toBe("function")
        expect(dispatch).toMatchSnapshot()
    })

    it("should test setCurrentUser action function", () => {
        const dispatch = logoutUser()

        expect(typeof dispatch).toBe("function")
        expect(dispatch).toMatchSnapshot()
    })
})
