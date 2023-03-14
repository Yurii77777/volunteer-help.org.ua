const images = require.context('../../../assets/images/activity', true);

export const activityData = [
  {
    id: 0,
    activity: 'Poland',
    alt: 'img_alt_Poland',
    img: [
      {
        id: 0,
        imgSrc: images('./poland/poland_photo1.jpg'),
        isSliderImg: false,
      },
      {
        id: 1,
        imgSrc: images('./poland/poland_photo2.jpg'),
        isSliderImg: false,
      },
      {
        id: 2,
        imgSrc: images('./poland/poland_photo3.jpg'),
        isSliderImg: false,
      },
      {
        id: 3,
        imgSrc: images('./poland/poland_photo4.jpg'),
        isSliderImg: true,
      },
      {
        id: 4,
        imgSrc: images('./poland/poland_photo5.jpg'),
        isSliderImg: false,
      },
      {
        id: 5,
        imgSrc: images('./poland/poland_photo6.jpg'),
        isSliderImg: false,
      },
      {
        id: 6,
        imgSrc: images('./poland/poland_photo7.jpg'),
        isSliderImg: false,
      },
      {
        id: 7,
        imgSrc: images('./poland/poland_photo8.jpg'),
        isSliderImg: false,
      },
      {
        id: 8,
        imgSrc: images('./poland/poland_photo9.jpg'),
        isSliderImg: true,
      },
      {
        id: 9,
        imgSrc: images('./poland/poland_photo10.jpg'),
        isSliderImg: false,
      },
    ],
  },
  {
    id: 1,
    activity: 'Slovakia',
    alt: 'img_alt_Slovakia',
    img: [
      {
        id: 0,
        imgSrc: images('./slovakia/slovakia_photo1.jpg'),
        isSliderImg: false,
      },
      {
        id: 1,
        imgSrc: images('./slovakia/slovakia_photo2.jpg'),
        isSliderImg: false,
      },
      {
        id: 2,
        imgSrc: images('./slovakia/slovakia_photo3.jpg'),
        isSliderImg: false,
      },
      {
        id: 3,
        imgSrc: images('./slovakia/slovakia_photo4.jpg'),
        isSliderImg: false,
      },
      {
        id: 4,
        imgSrc: images('./slovakia/slovakia_photo5.jpg'),
        isSliderImg: false,
      },
      {
        id: 5,
        imgSrc: images('./slovakia/slovakia_photo6.jpg'),
        isSliderImg: true,
      },
      {
        id: 6,
        imgSrc: images('./slovakia/slovakia_photo7.jpg'),
        isSliderImg: false,
      },
      {
        id: 7,
        imgSrc: images('./slovakia/slovakia_photo8.jpg'),
        isSliderImg: true,
      },
      {
        id: 8,
        imgSrc: images('./slovakia/slovakia_photo9.jpg'),
        isSliderImg: false,
      },
      {
        id: 9,
        imgSrc: images('./slovakia/slovakia_photo10.jpg'),
        isSliderImg: false,
      },
    ],
  },
];
