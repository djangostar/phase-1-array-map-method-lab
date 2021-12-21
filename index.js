const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (tutorials) => {
  return tutorials.map(line => {
    const lineSplit = line.split(' ')
    return lineSplit.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  })
}
  //return map through tutorials and split the lines into individual words
  //iterate over words and at index 0, uppercase word
  //use slice and join to join the words back together
 
