import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const testUser = await dbClient.user.create({
    data: {
      email: `xtombrock1989@gmail.com`,
      password,
      profile: {
        create: {
          username: `xtombrock`,
        },
      },
      simulatorAccount: {
        create: {}
      }
    },
  });

  const devUser = await dbClient.user.create({
    data: {
      email: 'dev@dev.com',
      password,
      role: 'DEVELOPER',
      profile: {
        create: {
          username: `deve`,
        },
      },
      simulatorAccount: {
        create: {}
      }
    },
  });

  const createdUser = await dbClient.user.create({
    data: {
      email: 'maxpower@email.com',
      password,
      simulatorAccount: {
        create: {}
      }
    },
  });

  const createdProfile = await dbClient.profile.create({
    data: {
      userId: createdUser.id,
      username: 'maxymilly',
      firstName: 'Max',
      lastName: 'Power',
      biography: 'I got my name off a microwave',
    },
  });

  const userPostOne = await dbClient.post.create({
    data: {
      userId: createdUser.id,
      title: 'My first post',
      content: `Ahh so much to say and so little time`,
      category: `GENERAL`,
      ownerName: createdUser.id,
    },
  });

  const createdCommentOne = await dbClient.comment.create({
    data: {
      postId: userPostOne.id,
      userId: createdUser.id,
      content: `Load of bollocks`,
    },
  });

  const userPostTwo = await dbClient.post.create({
    data: {
      userId: createdUser.id,
      title: 'My second post',
      content: `Will it work?`,
      category: `GENERAL`,
      ownerName: createdUser.id,
    },
  });

  const userPostThree = await dbClient.post.create({
    data: {
      userId: createdUser.id,
      title: 'My 3rd post',
      content: `3 is the magic number`,
      category: `EVENTS`,
      ownerName: createdUser.id,
    },
  });

  const userPostFour = await dbClient.post.create({
    data: {
      userId: createdUser.id,
      title: 'My 4TH post',
      content: `SQUARE ROOT OF WHATEVER`,
      category: `EVENTS`,
      ownerName: createdUser.id,
    },
  });

  const userPostFive = await dbClient.post.create({
    data: {
      userId: createdUser.id,
      title: 'My V Post',
      content: `Romans get it`,
      category: `NEWBIES`,
      ownerName: createdUser.id,
    },
  });

  const userPostSix = await dbClient.post.create({
    data: {
      userId: createdUser.id,
      title: '666',
      content: `Ahh the devil is here`,
      category: `NEWBIES`,
      ownerName: createdUser.id,
    },
  });

  const createdUserTwo = await dbClient.user.create({
    data: {
      email: 'atanzarian@email.com',
      password,
    },
  });

  const createdAdmin = await dbClient.user.create({
    data: {
      email: 'admin@admin.com',
      password,
      role: `ADMIN`,
    },
  });

  const createdAdminProfile = await dbClient.profile.create({
    data: {
      userId: createdAdmin.id,
      username: 'dean pelton',
      firstName: 'admin',
      lastName: 'magic',
      biography: 'I have my powers of administaration',
    },
  });

  const createdDev = await dbClient.user.create({
    data: {
      email: 'dev@email.com',
      password,
      role: `DEVELOPER`,
    },
  });

  const linkOne = await dbClient.bookieLink.create({
    data: {
      bookieName: 'Betfair',
      betType: 'Matched',
      minBet: 10,
      url: `https://www.betfair.com`,
      endDate: new Date(),
      desc: `A exchange and a bookie`,
      stakeRequired: 10,
      potentialProfit: 7.70,
      freeBetAmount: 10
    },
  });

  const linkTwo = await dbClient.bookieLink.create({
    data: {
      bookieName: 'BetFred',
      betType: 'Matched',
      minBet: 10,
      url: `https://www.betfred.com`,
      endDate: new Date(),
      desc: `A exchange and a bookie`,
      stakeRequired: 10,
      potentialProfit: 7.70,
      freeBetAmount: 10
    },
  });

  const createdSportEventOne = await dbClient.sportEvent.create({
    data: {
      title: 'Everton vs Chelsea',
      sportType: 'football',
      betTypes: ['win', 'lose', 'draw'],
      competitors: ['Everton', 'chelsea'],
    },
  });

  const createdSportEventTwo = await dbClient.sportEvent.create({
    data: {
      title: 'The Grand National',
      sportType: 'racing',
      betTypes: ['win'],
      competitors: [
        'bigDuck',
        'shesTheFastest',
        'dontHoofMe',
        'ponyBoy',
        'theHorseNorse',
        'splashy',
      ],
    },
  });

  const createdSportEventThree = await dbClient.sportEvent.create({
    data: {
      title: 'Royal Ascot',
      sportType: 'racing',
      betTypes: ['win'],
      competitors: [
        'chillyHair',
        'crowdPleaser',
        'lastHorseInn',
        'fastFucker',
        'irishStew',
        'soonGlue',
      ],
    },
  });

  const firstLink = await dbClient.bookieLink.create({
    data: {
      bookieName: 'Ladbrokes',
      url: 'https://promo.ladbrokes.com/en/promo/pm/online-betting/bet-5-get-20?wm=4945004&tdpeh=ladbrokes%20sign%20up%20offer_e_611946981597_c&cat=&type=en&class=&event=&utm_source=search_google&utm_campaign=1374248764&utm_content=611946981597&utm_medium=e_g&utm_term=ladbrokes%20sign%20up%20offer&gclid=CjwKCAjwuqiiBhBtEiwATgvixGR-Q7unlOHNvIzXcmTYrqK2yBZp1NN4ByMzbB5Sq5jSzNhLPMWI-xoCauEQAvD_BwE',
      stakeRequired: 5,
      freeBetAmount: 20,
      potentialProfit: 16.2,
      betType: 'Matched',
      minBet: 5,
      endDate: new Date(),
      desc: `A exchange and a bookie`,
      freeBetAmount: 20
    },
  });

  // EVENTS
  const eventOne = await dbClient.event.create({
    data: {
      type: 'ERROR',
      topic: 'Test event',
      code: 500,
      content: '500 test content',
    },
  });
  const eventTwo = await dbClient.event.create({
    data: {
      type: 'USER',
      topic: 'Test event',
      code: 200,
      content: '200 test content',
    },
  });
  const eventThree = await dbClient.event.create({
    data: {
      type: 'ADMIN',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
  const eventFour = await dbClient.event.create({
    data: {
      type: 'VISITOR',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
  const eventFive = await dbClient.event.create({
    data: {
      type: 'DEVELOPER',
      topic: 'Test event',
      code: 201,
      content: '201 test content',
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
