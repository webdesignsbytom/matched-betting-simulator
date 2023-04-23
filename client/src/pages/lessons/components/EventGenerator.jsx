import React from 'react';
export const footballGenerator = [
  {
    title: 'Everton vs Arsenal',
    competitors: ['Everton', 'Arsenal'],
    sportType: 'football',
    betTypes: ['win', 'lose', 'draw'],
    bookieOdds: [
      [2, 4, 3.5],
      [2.1, 4.8, 3.8],
    ],
    exchangeOdds: [
      [2.1, 4.15, 3.52],
      [2.1, 4, 3.8],
    ],
  },
  {
    title: 'Liverpool vs Manchester City',
    competitors: ['Liverpool', 'Manchester City'],
    sportType: 'football',
    betTypes: ['win', 'lose', 'draw'],
    bookieOdds: [
      [1.8, 6, 4],
      [1.85, 6.2, 4.4],
    ],
    exchangeOdds: [
      [2.1, 4.15, 3.52],
      [2.1, 4, 3.8],
    ],
  },
  {
    title: 'Leeds United vs Manchester United',
    competitors: ['Leeds United', 'Manchester United'],
    sportType: 'football',
    betTypes: ['win', 'lose', 'draw'],
    bookieOdds: [
      [1.55, 5, 3],
      [1.57, 5.1, 3.2],
    ],
    exchangeOdds: [
      [2.1, 4.15, 3.52],
      [2.1, 4, 3.8],
    ],
  },
];

export const horseRaceGenerator = [
  {
    title: 'The Grand National',
    competitors: [
      'columbianMascot',
      'redDead',
      'lostHorse',
      'steelygaze',
      'longFace',
      'missleMan',
      'lazerBeam',
    ],
    sportType: 'racing',
    betTypes: ['win'],
    bookieOdds: [2, 4, 3.5, 4.1, 4.7, 8, 16],
    exchangeOdds: [2.1, 4.1, 3.7, 4.2, 4.9, 8.5, 20],
  },
  {
    title: 'Royal Ascot',
    competitors: [
      'dontHoofMe',
      'ponyBoy',
      'theHorseNorse',
      'splashy',
      'chillyHair',
      'crowdPleaser',
      'lastHorseInn',
    ],
    sportType: 'racing',
    betTypes: ['win'],
    bookieOdds: [3.1, 3.2, 5, 5.5, 6.5, 9, 12],
    exchangeOdds: [3.15, 3.4, 5.5, 6, 7, 9.8, 15],
  },
];
