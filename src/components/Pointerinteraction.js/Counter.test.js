import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Counter from "./Counter";

describe('pointer', () => {
    test('renders counter', () => {
        render(<Counter />);
        const butEl = screen.getByRole('button');
        expect(butEl).toBeInTheDocument();
    });

    test('renders 0' , () => {
        render(<Counter />);
        const textEl = screen.getByRole('heading');
        expect(textEl).toHaveTextContent('0');
    })

    test('increment by one after clicking' , () => {
       render(<Counter />);
       const incrementButton = screen.getByRole('button', {
            name:'Increment'
       });
       userEvent.click(incrementButton);
       const textEl = screen.getByRole('heading');
       expect(textEl).toHaveTextContent('1')
    })

    test('increment by two after two click' , () => {
        render(<Counter />);
        const incrementButton = screen.getByRole('button', {
             name:'Increment'
        });
        userEvent.click(incrementButton);
        userEvent.click(incrementButton);
        const textEl = screen.getByRole('heading');
        expect(textEl).toHaveTextContent('2')
     })
})