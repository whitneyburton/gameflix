import React from 'react';
import { shallow } from 'enzyme';
import PopUp from '../Components/PopUp';

describe('PopUp', () => {
  let wrapper;

  const game = {
    "game": "Don't Be A Loser",
    "description": "Don't Be a Loser is a fun party game where you don't have to win but you just don't want to be the BIG LOSER! This game is easy to play and designed with social situations in mind, allowing players to freely leave and come back without interrupting the game!",
    "min_age": 13,
    "min_players": 4,
    "max_players": 10,
    "number_of_minutes": "30",
    "genre_ID": [6, 11, 13],
    "expansion_pack": false ,
    "challenge_level": "average",
    "publisher": "All Over The Board",
    "youtube": "ZYvvhOzYx_4",
    "img": "https://cdn.shopify.com/s/files/1/1911/5793/products/DBAL-main-photo-box_350x.jpg?v=1512623523"
  }

  beforeEach(() => {
    wrapper = shallow(
      <PopUp  game={game} />
    )
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  }) 

})