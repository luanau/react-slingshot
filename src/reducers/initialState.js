const headers = ["Book","Author","Language","Published","Sales"];
const data = [
  ["Don Quixote","Miguel de Cervantes","Spanish","1612","500 million"],
  ["A Tale of Two Cities","Charles Dickens","English","1859","200 million"],
  ["O Alquimista (The Alchemist)","Paulo Coelho","Portuguese","1988","150 million"],
  ["Le Petit Prince (The Little Prince)","Antoine de Saint-Exupéry","French","1943","140 million"],
  ["Harry Potter and the Philosopher's Stone","J.K. Rowling","English","1997","107 million"],
  ["The Hobbit","J. R. R. Tolkien","English","1937","100 million"],
  ["And Then There Were None","Agatha Christie","English","1939","100 million"],
  ["Dream of the Red Chamber","Cao Xueqin","Chinese","1754","100 million"],
  ["Alice in Wonderland","Lewis Carroll","English","1865","100 million"]
];

export default {
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  pdps: {'12':{id: '12'}, '13':{id: '13'}},
  // pdpSections : {},
  // pdpQuestions: {},
  // pdpAnswers: {}
  books: {headers: headers, data: data}
};
