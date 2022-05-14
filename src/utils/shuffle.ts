const getRandomIndex = () => Math.floor(Math.random() * 3);
const isEqual = (a: number, b: number) => a === b;
const swap = (array: Array<number>, anIndex: number, anotherIndex: number) => {
  const newArray = [...array];
  let temporaryValue;

  temporaryValue = newArray[anIndex];
  newArray[anIndex] = newArray[anotherIndex];
  newArray[anotherIndex] = temporaryValue;

  return newArray;
};

const shuffle = (array: Array<number>) => {
  let anIndex = getRandomIndex();
  let anotherIndex = getRandomIndex();

  while (isEqual(anIndex, anotherIndex)) {
    anIndex = getRandomIndex();
    anotherIndex = getRandomIndex();
  }

  return swap(array, anIndex, anotherIndex);
};

export default shuffle;
