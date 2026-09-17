import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

function findFriends(
  friends: Friend[],
  criterion: (friend: Friend) => boolean
): Friend[] {
  return friends.filter(criterion);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
function addColleague(cs: Colleague[], name: string, department: string, email: string){
  const highestExt = highestExtension(cs);
  const newColleague: Colleague = {
    name,
    department,
    contact: {
      email,
      extension: highestExt.contact.extension + 1,
    },
  };
  cs.push(newColleague);
}


function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {

 let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}

function addInterest(f: Friend, interest: string) {
  if (f.interests === undefined) {
    f.interests = [];}
    f.interests.push(interest);
    return f.interests;
  }

function sort<T>(data: T[], sorter: (a: T, b: T) => number): T[] {
  return data.sort(sorter);
}

// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);


  


//test invocations of sortColleagues
// console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
// console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
// console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length)));
// console.log(addInterest(friends[0], 'Politics'))


// console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
// console.log(findFriends(friends, (friend) => friend.age < 35));
// addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
// console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));



// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);
