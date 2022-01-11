import thumb from './React-logo.png'

interface data {
  title: string,
  resume: string,
  author: string,
  date: string,
  Tags: Array<string>,
  thumbnail: StaticImageData,
  content: {
    paragraph_1: {
      title: string,
      text: Array<string>,
    },
    paragraph_2: {
      title: string,
      text: Array<string>,
      subtitle: {
        title:string,
        text: string
      }
    }  
  }
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
  content: {
    paragraph_1: {
      title: 'Sed id semper risus',
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat sed cras ornare arcu. Pretium fusce id velit ut tortor pretium.",
        "Vitae tempus quam pellentesque nec nam aliquam sem. Nec feugiat nisl pretium fusce id velit ut. Consectetur adipiscing elit pellentesque habitant. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Eget nullam non nisi est sit amet facilisis. ",
        "At erat pellentesque adipiscing commodo elit at imperdiet dui. Netus et malesuada fames ac turpis egestas integer."
      ],
    },
    paragraph_2: {
      title: 'In fermentum posuere urna',
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris ultrices eros in cursus. Bibendum ut tristique et egestas quis. Dolor sed viverra ipsum nunc aliquet bibendum enim.", 
        "Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Mauris a diam sed enim ut sem viverra. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Volutpat odio facilisis mauris sit amet. "
      ],
      subtitle: {
        title: 'Purus ut faucibus',
        text: "Vitae turpis massa sed elementum. Lorem ipsum dolor sit amet. Posuere ac ut consequat semper. Id interdum velit laoreet id donec ultrices tincidunt arcu non. In eu mi bibendum neque egestas congue quisque egestas. Velit euismod in pellentesque massa placerat duis ultricies lacus. Bibendum enim facilisis gravida neque convallis a. Pharetra sit amet aliquam id diam. Vitae suscipit tellus mauris a diam. Scelerisque eu ultrices vitae auctor eu augue ut. Nam at lectus urna duis convallis. "
      }
    }  
  }
}