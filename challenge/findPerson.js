// Given a name (string) and an array of people (objects), find the person with the given name and return his/her hobby. Return false if there is no person with the given name.
//
// DO NOT use people.find()
//
// DO use a for loop.
//
// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
//

const findPerson = (name, people) => {
  let hobby = false;
  people.forEach(person => {
    if(person.name == name)
      hobby = person.hobby;
  })
  return hobby;
}
