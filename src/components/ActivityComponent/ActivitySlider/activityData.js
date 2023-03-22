const images = require.context('../../../assets/images/activity', true);

export const activityData = [
  {
    id: 0,
    activity: 'Poland',
    alt: 'img_alt_Poland',
    img: [
      {
        id: 0,
        imgSrc: images('./poland/poland-photo1.webp'),
        isSliderImg: false,
      },
      {
        id: 1,
        imgSrc: images('./poland/poland-photo2.webp'),
        isSliderImg: false,
      },
      {
        id: 2,
        imgSrc: images('./poland/poland-photo3.webp'),
        isSliderImg: false,
      },
      {
        id: 3,
        imgSrc: images('./poland/poland-photo4.webp'),
        isSliderImg: true,
      },
      {
        id: 4,
        imgSrc: images('./poland/poland-photo5.webp'),
        isSliderImg: false,
      },
      {
        id: 5,
        imgSrc: images('./poland/poland-photo6.webp'),
        isSliderImg: false,
      },
      {
        id: 6,
        imgSrc: images('./poland/poland-photo7.webp'),
        isSliderImg: false,
      },
      {
        id: 7,
        imgSrc: images('./poland/poland-photo8.webp'),
        isSliderImg: false,
      },
      {
        id: 8,
        imgSrc: images('./poland/poland-photo9.webp'),
        isSliderImg: true,
      },
      {
        id: 9,
        imgSrc: images('./poland/poland-photo10.webp'),
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
        imgSrc: images('./slovakia/slovakia-photo1.webp'),
        isSliderImg: false,
      },
      {
        id: 1,
        imgSrc: images('./slovakia/slovakia-photo2.webp'),
        isSliderImg: false,
      },
      {
        id: 2,
        imgSrc: images('./slovakia/slovakia-photo3.webp'),
        isSliderImg: false,
      },
      {
        id: 3,
        imgSrc: images('./slovakia/slovakia-photo4.webp'),
        isSliderImg: false,
      },
      {
        id: 4,
        imgSrc: images('./slovakia/slovakia-photo5.webp'),
        isSliderImg: false,
      },
      {
        id: 5,
        imgSrc: images('./slovakia/slovakia-photo6.webp'),
        isSliderImg: true,
      },
      {
        id: 6,
        imgSrc: images('./slovakia/slovakia-photo7.webp'),
        isSliderImg: false,
      },
      {
        id: 7,
        imgSrc: images('./slovakia/slovakia-photo8.webp'),
        isSliderImg: true,
      },
      {
        id: 8,
        imgSrc: images('./slovakia/slovakia-photo9.webp'),
        isSliderImg: false,
      },
      {
        id: 9,
        imgSrc: images('./slovakia/slovakia-photo10.webp'),
        isSliderImg: false,
      },
    ],
  },
];
