const { default: Async } = require("./Async")
const { render, screen } = require("@testing-library/react")

describe('Async Component', () => {
    test.skip('renders posts if request succeeds', async () => { 
        render(<Async/>);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
     })

     test('should first', async () => { 
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}]
        })

        render(<Async/>);
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
      })
})