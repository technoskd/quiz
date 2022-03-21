
export const QuizBank = [

  {
    ABOUT_YOU: [{
      id: 1, question: 'Are you?', options: [{ label: 'male', rating: 20 }, { label: 'female', rating: 10 }, { label: 'I would not describe myself as either', rating: 10 }]
    },]
  },

  {
    YOUR_HOME: [{
      id: 2, question: 'What type of home do you live?', options: [{ label: 'Mansion (more than 6 bedrooms)', rating: 10 }, { label: 'Detached', rating: 9 }, { label: 'Cottage', rating: 8 }, { label: 'Semi Detached', rating: 7 }, { label: 'Terrace ( 3 floors)', rating: 7 }, { label: 'Terrace ( 2 floors)', rating: 7 }, { label: 'Bungalow', rating: '6' }, { label: 'Flat (Purpose build)', rating: 5 }, { label: 'Flat (Conversion)', rating: 10 }, { label: 'Town House' }, { label: 'Do you own more that 1 home?', rating: 20 }]
    },

    {
      id: 3, question: 'How well is your home insulated?', options: [{ label: 'Very well', rating: -5 }, { label: `It's OK`, rating: 5 }, { label: 'Drafts everywhere', rating: 10 }, { label: `Don't know`, rating: 15 }]
    },


    {
      id: 4, question: 'How many adults (16+) live in your home?', options: [{ label: 1, rating: 10 }, { label: 2, rating: 8 }, { label: 3, rating: 7 }, { label: 4, rating: 6 }, { label: 5, rating: '6+' }]
    }

    ]
  }
];