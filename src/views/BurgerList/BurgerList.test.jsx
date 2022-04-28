import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import BurgerList from './BurgerList';
import App from '../../App';
import { act } from 'react-dom/test-utils';

describe('BurgerList', () => {
  it('renders a burger card', async () => {
    const dude = [{
      firstEpisode: "\"Roamin' Bob-iday\"",
      gender: "Male",
      hairColor: "Brown",
      id: 459,
      image: "https://bobsburgers-api.herokuapp.com/images/characters/459.jpg",
      name: "Steve",
      url: "https://bobsburgers-api.herokuapp.com/characters/459",
      voicedBy: "Steve Berg",
      wikiUrl: "https://bobs-burgers.fandom.com/wiki/Steve_(Roamin%27_Bob-iday)",
      }]

      const bigDude = [{
        firstEpisode: "\"Roamin' Bob-iday\"",
        gender: "Male",
        hairColor: "Brown",
        id: 459,
        image: "https://bobsburgers-api.herokuapp.com/images/characters/459.jpg",
        name: "Steve",
        url: "https://bobsburgers-api.herokuapp.com/characters/459",
        voicedBy: "Steve Berg",
        wikiUrl: "https://bobs-burgers.fandom.com/wiki/Steve_(Roamin%27_Bob-iday)",
        },
        {
        firstEpisode: "\"Mutiny on the Windbreaker\"",
        gender: "Male",
        hairColor: "Brown",
        id: 201,
        image: "https://bobsburgers-api.herokuapp.com/images/characters/201.jpg",
        name: "Herman",
        occupation: "Ventriloquist Performer",
        url: "https://bobsburgers-api.herokuapp.com/characters/201",
        voicedBy: "Paul F. Tompkins",
        wikiUrl: "https://bobs-burgers.fandom.com/wiki/Herman"
        }]

        const loading = true;
      render(<MemoryRouter>
        <BurgerList burgers={dude} bigArr={bigDude} loading={loading}/>
      </MemoryRouter>)

    screen.getByText(/burgerlist/i);

    const link = await screen.findByAltText(/steve/i);
    userEvent.click(link);

    await screen.findByText(/steve/i);

    const search = screen.getByPlaceholderText(/search for a character/i);
    userEvent.type(search, 'Herman');

    return waitFor(() => {
      screen.getAllByText(/herman/i);
    })
    
  });


});