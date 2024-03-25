import card_1 from '../images/1.png';
import card_2 from '../images/2.png';
import card_3 from '../images/3.png';
import card_4 from '../images/4.png';
import card_5 from '../images/5.png';
import card_6 from '../images/6.png';
import card_7 from '../images/7.png';
import card_8 from '../images/8.png';
import card_9 from '../images/9.png';
import card_10 from '../images/10.png';
import card_11 from '../images/11.png';
import card_12 from '../images/12.png';
import card_13 from '../images/13.png';
import card_14 from '../images/14.png';
import card_15 from '../images/15.png';
import card_16 from '../images/16.png';

export const generateCards = () => {
  const elements = [
    {
      url: card_1,
      id: 1
    },
    {
      url: card_2,
      id: 2
    },
    {
      url: card_3,
      id: 3
    },
    {
      url: card_4,
      id: 4
    },
    {
      url: card_5,
      id: 5
    },
    {
      url: card_6,
      id: 6
    },
    {
      url: card_7,
      id: 7
    },
    {
      url: card_8,
      id: 8
    },
    {
      url: card_9,
      id: 9
    },
    {
      url: card_10,
      id: 10
    },
    {
      url: card_11,
      id: 11
    },
    {
      url: card_12,
      id: 12
    },
    {
      url: card_13,
      id: 13
    },
    {
      url: card_14,
      id: 14
    },
    {
      url: card_15,
      id: 15
    },
    {
      url: card_16,
      id: 16
    }
  ];
  const allCards = elements.slice();
  return shuffleArray(allCards);
};

const shuffleArray = array => {
  const shuffledArray = array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

export const winCombination = [
  {
    url: card_1,
    id: 1
  },
  {
    url: card_2,
    id: 2
  },
  {
    url: card_3,
    id: 3
  },
  {
    url: card_4,
    id: 4
  },
  {
    url: card_5,
    id: 5
  },
  {
    url: card_6,
    id: 6
  },
  {
    url: card_7,
    id: 7
  },
  {
    url: card_8,
    id: 8
  },
  {
    url: card_9,
    id: 9
  },
  {
    url: card_10,
    id: 10
  },
  {
    url: card_11,
    id: 11
  },
  {
    url: card_12,
    id: 12
  },
  {
    url: card_13,
    id: 13
  },
  {
    url: card_14,
    id: 14
  },
  {
    url: card_16,
    id: 16
  },
  {
    url: card_15,
    id: 15
  }
];
