import { render, screen } from '@testing-library/react'
import Queryby from './Queryby'

describe('Not rendered check' , () => {
    test('renders login' , () => {
        render(<Queryby />);
        const butEl = screen.queryByRole('button', {
            name:'Login'
        });
        expect(butEl).toBeInTheDocument();
    });

    test('not rendering hello user' , () => {
        render(<Queryby />);
        const butEl = screen.queryByRole('button', {
            name:'Hello User'
        });
        expect(butEl).not.toBeInTheDocument();
    })
} )