import { render, screen } from "@testing-library/react";
import Getby from "./Getby";

describe('Get By Role' , () => {
    test('renders component',() => {
        render(<Getby />);
        const firstNameEl = screen.getByRole('textbox', {
            name:'First Name'
        });
        expect(firstNameEl).toBeInTheDocument();

        const lastNameEl = screen.getByRole('textbox', {
            name:'Last Name'
        });
        expect(lastNameEl).toBeInTheDocument();

        const selectEl = screen.getByRole('combobox');
        expect(selectEl).toBeInTheDocument();

        const checkEl = screen.getByRole('checkbox');
        expect(checkEl).toBeInTheDocument();

        const butEl = screen.getByRole('button',{name:'Submit'});
        expect(butEl).toBeInTheDocument();

        const paraEl = screen.getByText(/React Testing/i);
        expect(paraEl).toBeInTheDocument();

        const valEl = screen.getByDisplayValue('Arjun');
        expect(valEl).toBeInTheDocument();
    });
})