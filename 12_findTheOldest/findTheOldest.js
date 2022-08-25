// const findTheOldest = function (people) {
//   const oldest = people.sort((a, b) => {
//     if (!("yearOfDeath" in a)) a.yearOfDeath = new Date().getFullYear();
//     if (!("yearOfDeath" in b)) b.yearOfDeath = new Date().getFullYear();
//     const prevGuy = a.yearOfDeath - a.yearOfBirth;
//     const nextGuy = b.yearOfDeath - b.yearOfBirth;

//     return prevGuy > nextGuy ? -1 : 1;
//   });
//   return oldest[0];
// };

// use reduce
const findTheOldest = function (people) {
  return people.reduce((oldestPerson, nextPerson) => {
    const oldAge = getAges(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
    const nextAge = getAges(nextPerson.yearOfBirth, nextPerson.yearOfDeath);

    return oldAge < nextAge ? nextPerson : oldestPerson;
  });
};

function getAges(birth, death) {
  if (!death) death = new Date().getFullYear();
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
