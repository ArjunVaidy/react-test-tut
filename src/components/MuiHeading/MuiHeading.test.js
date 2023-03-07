import {screen,render} from "../../test-utils";
import MuiHeading from "./MuiHeading";

describe('provider testing for MUI theme mode' , () => {
    test('dark mode render' , () => {
        render(<MuiHeading />);
        const headEl = screen.getByRole('heading');
        expect(headEl).toHaveTextContent('dark');
    })
})