import { render, screen } from "@testing-library/react";
import Album from "./Album";
import axios from 'axios'
// const {fetchAlbum } = require('./Album.js')
describe('Album component', () => {
    //Need to write correct test case here 
    // jest.mock("axios");

test("mock axios get function", async () => {
    /* expect.assertions(1);
    const album = {
      userId: 1,
      id: 2,
      title: "sunt qui excepturi placeat culpa",
    };
    const payload = { data: album };
    // Now mock axios get method
    axios.get = jest.fn().mockResolvedValue(payload);
    await expect(fetchAlbum()).resolves.toEqual(album); */

    window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{userId: 1,
                id: 2,
                title: "sunt qui excepturi placeat culpa",}]
        })

        render(<Album/>);
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
  });
})