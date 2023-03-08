import { Mocking } from "./Mocking";
import { render, screen } from "@testing-library/react"
import { server } from "../../mocks/server";
import { rest } from "msw";

// Start the mock server before running the tests.
beforeAll(() => server.listen())

// Stop the mock server after running the tests.
afterAll(() => server.close())
test('renders error text' ,async () => {
    server.use(
        rest.get(
            "https://jsonplaceholder.typicode.com/users",
            (req,res,ctx) => {
                return res(ctx.status(500))
            }
        )
    );
    render(<Mocking />);
    const error = await screen.findByText('Error fetching users');
    expect(error).toBeInTheDocument();
})