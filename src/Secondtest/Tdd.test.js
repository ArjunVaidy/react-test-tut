import { render, screen } from "@testing-library/react"
import Tdd from "./Tdd"

test('test driven devlopment', () => {
    render(<Tdd />);
    const textEl = screen.getByText(/Hello/i);
    expect(textEl).toBeInTheDocument();
})


test.only('test driven devlopment props', () => {
    render(<Tdd name='Arjun'/>);
    const textEl = screen.getByText(/Hello Arjun/i);
    expect(textEl).toBeInTheDocument();
})