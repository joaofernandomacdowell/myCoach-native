const questionsData = [
  { gender: 'Are you...' },
  { shape: 'How do you consider yourself?' },
  { objective: 'What is your main objective?' },
  { badHabits: 'Do you have any bad habits?' },
  { time: 'How much time do you want to invest in workout daily?' }
];

const optionsData = [
  {
    gender: [
      'MALE',
      'FEMALE'
    ]
  },
  {
    shape: [
      'TOTALLY IN SHAPE',
      'IN SHAPE',
      'OUT OF SHAPE'
    ]
  },
  {
    objective: [
      'PHYSICAL HEALTH',
      'STRENGTHENING',
      'WEIGHT LOSS',
      'PSYCHOLOGICAL HEALTH'
    ]
  },
  {
    badHabits: [
      'I\'M A SMOKER',
      'I\'M A FAST FOOD ADDICT',
      'I\'M LAZY',
      'I SKIP MEALS'
    ]
  },
  {
    time: [
      '30-60 MINUTES',
      '60-120 MINUTES'
    ]
  }
];

export { questionsData, optionsData };
