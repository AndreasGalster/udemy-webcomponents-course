import faker from "faker";

export const quotesHeader = {
  id: faker.random.uuid(),
  humanId: faker.random.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  typeOfPerson: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
  quotes: [`${faker.lorem.sentence()} ${faker.lorem.sentence()}`],
  pictures: {
    headerPic: faker.random.image()
  }
};

export const authorPreview = {
  id: faker.random.uuid(),
  humanId: faker.random.uuid(),
  authorId: faker.random.uuid(),
  author: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    typeOfPerson: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    categories: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    pictures: {
      cardPic: faker.random.image()
    }
  }
};

export const booksPreview = {
  id: faker.random.uuid(),
  humanId: faker.random.uuid(),
  authorId: faker.random.uuid(),
  title: faker.lorem.sentence(),
  author: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  },
  image: ['../assets/book1.png', '../assets/book2.png', '../assets/book3.png', '../assets/book4.png'],
  teaser: `${faker.lorem.sentence()} ${faker.lorem.sentence()}`  
};

export const quotesPreview = {
  id: faker.random.uuid(),
  humanId: faker.random.uuid(),
  authorId: faker.random.uuid(),
  quote: faker.lorem.sentence(),
  author: {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    typeOfPerson: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    pictures: {
      cardPic: faker.random.image()
    }
  }
};

export const authorHighlight = {
  id: faker.random.uuid(),
  humanId: faker.random.uuid(),
  author: {
    pictures: {
      profilePic: faker.random.image()
    },    
    categories: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    socialMedia: [
      {
        networkName: 'facebook',
        count: faker.random.number(),
        link: faker.internet.url()
      },
      {
        networkName: 'twitter',
        count: faker.random.number(),
        link: faker.internet.url()
      },
      {
        networkName: 'instagram',
        count: faker.random.number(),
        link: faker.internet.url()
      },            
    ]
  }
};

export const bookHighlight = {
  id: faker.random.uuid(),
  humanId: faker.random.uuid(),
  title: faker.lorem.sentence(),
  image: faker.random.image(),
  affiliate: {
    link: faker.internet.url(),
    price: faker.commerce.price(),
  }
};
