const images = require.context('../../../assets/images/activity', true);

export const activityData = [
  {
    id: 0,
    activity: 'Poland',
    title: 'titlePl',
    img: [
      {
        id: 0,
        imgSrc: images('./poland/poland-photo1.webp'),
        alt: 'A mother holds a book donated by volunteers for children',
        isSliderImg: false,
      },
      {
        id: 1,
        imgSrc: images('./poland/poland-photo9.webp'),
        alt: 'Volunteers donate books in Ukrainian',
        isSliderImg: true,
      },
      {
        id: 2,
        imgSrc: images('./poland/poland-photo8.webp'),
        alt: 'A little boy is reading a book',
        isSliderImg: false,
      },
      {
        id: 3,
        imgSrc: images('./poland/poland-photo4.webp'),
        alt: 'A little girl with a book',
        isSliderImg: true,
      },
      {
        id: 4,
        imgSrc: images('./poland/poland-photo5.webp'),
        alt: 'A little girl is reading a book',
        isSliderImg: false,
      },
      {
        id: 5,
        imgSrc: images('./poland/poland-photo6.webp'),
        alt: 'A little girl looks at books',
        isSliderImg: false,
      },
      {
        id: 6,
        imgSrc: images('./poland/poland-photo3.webp'),
        alt: 'A mother holds a book donated by volunteers for children',
        isSliderImg: false,
      },
      {
        id: 7,
        imgSrc: images('./poland/poland-photo2.webp'),
        alt: 'A mother holds a book donated by volunteers for children',
        isSliderImg: false,
      },
      {
        id: 8,
        imgSrc: images('./poland/poland-photo10.webp'),
        alt: 'Volunteers donate books in Ukrainian',
        isSliderImg: false,
      },
    ],
  },
  {
    id: 1,
    activity: 'Slovakia',
    title: 'titleSk',
    img: [
      {
        id: 0,
        imgSrc: images('./slovakia/slovakia-photo9.webp'),
        alt: 'A little girl with a book of fairy tales',
        isSliderImg: false,
      },
      {
        id: 1,
        imgSrc: images('./slovakia/slovakia-photo4.webp'),
        alt: 'Volunteers give books to boys',
        isSliderImg: false,
      },
      {
        id: 2,
        imgSrc: images('./slovakia/slovakia-photo7.webp'),
        alt: 'Little boys are holding books in their hands',
        isSliderImg: false,
      },
      {
        id: 3,
        imgSrc: images('./slovakia/slovakia-photo6.webp'),
        alt: 'A little girl with a book',
        isSliderImg: true,
      },
      {
        id: 4,
        imgSrc: images('./slovakia/slovakia-photo8.webp'),
        alt: 'Volunteers donate books to children',
        isSliderImg: true,
      },
      {
        id: 5,
        imgSrc: images('./slovakia/slovakia-photo3.webp'),
        alt: 'The director of the kindergarten thanks the volunteers for the books in a letter',
        isSliderImg: false,
      },
      {
        id: 6,
        imgSrc: images('./slovakia/slovakia-photo2.webp'),
        alt: 'Volunteers donate books to the kindergarten',
        isSliderImg: false,
      },
    ],
  },
  {
    id: 2,
    activity: 'Turkey',
    title: 'titleTurkey',
    img: [
      {
        id: 0,
        imgSrc: images('./turkey/Turkey_1.webp'),
        alt: 'Роздача книг в Туреччині',
        isSliderImg: true,
      },
      {
        id: 1,
        imgSrc: images('./turkey/Turkey_2.webp'),
        alt: 'Роздача книг в Туреччині',
        isSliderImg: true,
      },
      {
        id: 2,
        imgSrc: images('./turkey/Turkey_3.webp'),
        alt: 'Роздача книг в Туреччині',
        isSliderImg: false,
      },
    ],
  },
  {
    id: 3,
    activity: 'Bucha 2023',
    title: 'titleBucha',
    img: [
      {
        id: 0,
        imgSrc: images('./bucha2023/bucha-01.webp'),
        alt: 'Truck with food is coming',
        isSliderImg: false,
      },
      {
        id: 1,
        imgSrc: images('./bucha2023/bucha-02.webp'),
        alt: 'Food',
        isSliderImg: false,
      },
      {
        id: 2,
        imgSrc: images('./bucha2023/bucha-03.webp'),
        alt: 'Food',
        isSliderImg: true,
      },
      {
        id: 3,
        imgSrc: images('./bucha2023/bucha-04.webp'),
        alt: 'Flour',
        isSliderImg: true,
      },
      {
        id: 4,
        imgSrc: images('./bucha2023/bucha-05.webp'),
        alt: 'Food',
        isSliderImg: false,
      },
      {
        id: 5,
        imgSrc: images('./bucha2023/bucha-06.webp'),
        alt: 'Pasta and canned food',
        isSliderImg: false,
      },
      {
        id: 6,
        imgSrc: images('./bucha2023/bucha-07.webp'),
        alt: 'Food in truck',
        isSliderImg: false,
      },
    ],
  },
  {
    id:4,
    activity: 'Svichado',
    title: 'titleSvichado',
    img: [
      {
        id: 0,
        imgSrc: images('./svichado/svichado-01.webp'),
        alt: 'New terminal in Svichado',
        isSliderImg: true,
      },
      {
        id: 1,
        imgSrc: images('./svichado/svichado-03.webp'),
        alt: 'Svichado logo on the box for books',
        isSliderImg: false,
      },
      {
        id: 2,
        imgSrc: images('./svichado/svichado-04.webp'),
        alt: 'Our volunteers in Svichado',
        isSliderImg: true,
      },
      {
        id: 3,
        imgSrc: images('./svichado/svichado-05.webp'),
        alt: 'Information stand in Svichado',
        isSliderImg: false,
      },
    ]
  }
];
