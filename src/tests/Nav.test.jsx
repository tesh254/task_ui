import React from "react"
import enzyme, { shallow } from "enzyme"
import toJSON from "enzyme-to-json"
import adapter from "enzyme-adapter-react-16"
import Nav from "../components/commons/Nav"

enzyme.configure({ adapter: new adapter() })

describe("Test Navbar component", () => {
    it("should contain certain tags to show it rendered navbar properly", () => {
        const wrapper = shallow(<Nav />)

        expect(wrapper.find("nav").hasClass("navbar")).toBe(true)
    })

    it("should render correctly", () => {
        const wrapper = shallow(<Nav />)

        expect(wrapper).toMatchSnapshot()
    })
})