import {screen,render} from "@testing-library/react";
import MuiProviders from "../MuiProvider/MuiProviders";
import MuiHeading from "./MuiHeading";

describe('provider testing for MUI theme mode' , () => {
    test('dark mode render' , () => {
        render(<MuiHeading /> , {
            wrapper: MuiProviders
        });
        const headEl = screen.getByRole('heading');
        expect(headEl).toHaveTextContent('dark');
    })
})