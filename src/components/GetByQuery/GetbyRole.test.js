import { render, screen } from "@testing-library/react";
import GetbyRole from "./getByRole";

describe('Get By Role' , () => {
    test('renders component',() => {
        render(<GetbyRole />);
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
    });
})