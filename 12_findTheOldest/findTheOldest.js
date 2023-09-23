const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  people.forEach((personObj) => {
    let Death = personObj["yearOfDeath"];
    if (Death === undefined) {
      personObj["yearOfDeath"] = currentYear;
    }
    return personObj;
  });
  let peopleWithAge = people.map((personObj) => {
    return (personObj = {
      name: personObj.name,
      age: personObj.yearOfDeath - personObj.yearOfBirth,
    });
  });
  const oldest = peopleWithAge.reduce((currPersonObj, nextPersonObj) => {
    if (currPersonObj.age > nextPersonObj.age) return currPersonObj;
    else return nextPersonObj;
  }, 0);
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
