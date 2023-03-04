import { render, screen } from "@testing-library/react"
import Firsttest from "./Firsttest"


test('first test', () => {
    // create a virtual dom
    render(<Firsttest />);
    // query the vDom
    const textEl = screen.getByText(/Hello/i);
    // expectation 
    expect(textEl).toBeInTheDocument();
})