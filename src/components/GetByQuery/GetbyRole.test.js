import { render, screen } from "@testing-library/react";
import GetbyRole from "./getByRole";

describe('Get By Role' , () => {
    test('renders component',() => {
        render(<GetbyRole />);
        const nameEl = screen.getByRole('textbox');
        expect(nameEl).toBeInTheDocument();

        const selectEl = screen.getByRole('combobox');
        expect(selectEl).toBeInTheDocument();

        const checkEl = screen.getByRole('checkbox');
        expect(checkEl).toBeInTheDocument();

        const butEl = screen.getByRole('button');
        expect(butEl).toBeInTheDocument();
    });
})