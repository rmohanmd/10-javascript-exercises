const findTheOldest = function (people) {
  const oldest = people.sort((a, b) => {
    if (!("yearOfDeath" in a)) a.yearOfDeath = new Date().getFullYear();
    if (!("yearOfDeath" in b)) b.yearOfDeath = new Date().getFullYear();
    const prevGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;

    return prevGuy > nextGuy ? -1 : 1;
  });
  return oldest[0];
};

// const findTheOldest = function () {

// };

// Do not edit below this line
module.exports = findTheOldest;
