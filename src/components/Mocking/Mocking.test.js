import { Mocking } from "./Mocking";
import { render, screen } from "@testing-library/react"
import { server } from "../../mocks/server";


describe('Mocking API test' , () => {
    // Start the mock server before running the tests.
    beforeAll(() => server.listen())

    // Stop the mock server after running the tests.
    afterAll(() => server.close())
    // async - await is used because we give asynchronous-api-call
    test('renders alist of users' , async () => {
        render(<Mocking />);
        // async --> use findBy queries
        const users = await screen.findAllByRole('listitem');
        // mocked server response length is 3
        expect(users).toHaveLength(3);
    })
})