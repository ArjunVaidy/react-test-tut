import { render, screen } from "@testing-library/react";
import InputField from "./InputField";
import userEvent from '@testing-library/user-event';


describe('getting a input and display correctly' , () => {
    test('type 10 testing' , () => {
        render(<InputField />);
        const inputEl = screen.getByRole('spinbutton');
        userEvent.type(inputEl,'100');
        expect(inputEl).toHaveValue(100);

        const setButton = screen.getByRole('button');
        userEvent.click(setButton);
        const headEl = screen.getByRole('heading');
        expect(headEl).toHaveTextContent('Rs.100')
    })
})