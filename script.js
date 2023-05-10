"use strict"

// Nested object in array for data manipulation
 const quoteData = [
  {author: 'Walt Disney',
  quote: 'The way to get started is to quit talking and begin doing.'},
  {author: 'Jim Carry',
  quote: 'Behind every great man is a woman rolling her eyes.'},
  {author: 'Mark Twain',
  quote: 'To succeed in life, you need two things: ignorance and confidence'},
  {author: 'Frank Sinatra',
  quote: 'The best revenge is massive success.'},
  {author: 'Abraham Lincoln',
  quote: 'I walk slowly but never backwards.'}
]

//Dom element selection
const genButton = document.body.querySelector('button')

//Gen button  Function
genButton.addEventListener("click", function() {
  const rdmNum = (Math.floor(Math.random() * 4));
  const arrayindx = quoteData[rdmNum]
  const authorObj = arrayindx.author
  const quotObj = arrayindx.quote
  const authorBox  = document.body.querySelector('.author-txt')
  authorBox.innerText = `${authorObj}`
  const quoteBox = document.body.querySelector('p')
  quoteBox.innerText = `${quotObj}`
  return console.log(authorObj)
})
