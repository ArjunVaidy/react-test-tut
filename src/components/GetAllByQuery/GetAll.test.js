import { render, screen } from "@testing-library/react";
import GetAll from "./GetAll";


describe('Get All query', () => {
    test('renders getAll', () => {
        render(<GetAll />);
        const listAll = screen.getAllByRole('listitem');
        expect(listAll).toHaveLength(5);
    })
})