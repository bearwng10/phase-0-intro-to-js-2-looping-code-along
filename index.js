const writeCards = (names, event) => {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
};

const countDown = (number) => {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
};

// Example of how to use the writeCards() function
const names = ["John", "Mary", "Peter"];
const event = "surprise";

const messages = writeCards(names, event);

console.log(messages); // ["Thank you, John, for the wonderful surprise gift!", "Thank you, Mary, for the wonderful surprise gift!", "Thank you, Peter, for the wonderful surprise gift!"]

// Example of how to use the countDown() function
countDown(10);

