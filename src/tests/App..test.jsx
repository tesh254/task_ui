import React from "react"
import enzyme, { mount } from "enzyme"
import toJSON from "enzyme-to-json"
import adapter from "enzyme-adapter-react-16"
import App from "../App";

enzyme.configure({ adapter: new adapter() })

describe("test app component", () => {
    it("should render properly", () => {
        const wrapper = mount(
            <App />
        )
        expect(toJSON(wrapper)).toMatchSnapshot()
    })
})