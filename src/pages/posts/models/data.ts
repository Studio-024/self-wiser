import thumb from './React-logo.png'
import photo from './Alexandreicon.jpg'

export type data = {
  title: string,
  resume: string,
  author: string,
  created_at: string,
  photo: StaticImageData,
  photoAlt?: string,
  Tags: Array<string>,
  thumbnail: StaticImageData,
}

export const dataExample: data = {
  title: "Gravida neque convallis a cras semper auctor",
  resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.",
  author: "Alexandre XYZ",
  created_at: '22 dezembro de 2020',
  photo: photo,
  Tags: [
    'Faucinus',
    'Mauris',
    'Orci',
  ],
  thumbnail: thumb,
}