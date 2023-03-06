import { render, screen } from "@testing-library/react";
import Findby from "./Findby";

describe('later rendering components' , () => {
    test('first render' , () => {
        render(<Findby />);
        const paraEl = screen.getByText('Promise not recieved');
        expect(paraEl).toBeInTheDocument();
    });

    test('later render' , async () => {
        render(<Findby />);
        const paraEl = await screen.findByText(/Promise received/i ,undefined,{
            timeout:2000
        });
        expect(paraEl).toBeInTheDocument();
    })
} )