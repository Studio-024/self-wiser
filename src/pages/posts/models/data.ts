import thumb from './React-logo.png'

interface data {
  title: string,
  resume: string,
  author: string,
  date: string,
  Tags: string[],
  thumbnail: StaticImageData,
}

export const data: data = {
  title: "Gravida neque convallis a cras semper auctor",
  resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.",
  author: "Alexandre XYZ",
  date: '22 dezembro de 2020',
  Tags: [
    'Faucinus',
    'Mauris',
    'Orci',
  ],
  thumbnail: thumb,
}