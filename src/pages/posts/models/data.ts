import thumb from './React-logo.png'
import photo from './Alexandreicon.jpg'

interface data {
  title: string,
  resume: string,
  author: string,
  date: string,
  photo: StaticImageData,
  Tags: Array<string>,
  thumbnail: StaticImageData,
}

export const data: data = {
  title: "Gravida neque convallis a cras semper auctor",
  resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.",
  author: "Alexandre XYZ",
  date: '22 dezembro de 2020',
  photo: photo,
  Tags: [
    'Faucinus',
    'Mauris',
    'Orci',
  ],
  thumbnail: thumb,
}