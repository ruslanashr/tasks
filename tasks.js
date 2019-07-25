// Task 1
var student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};
console.log(`${student['name'] },${student['sclass']},${student['rollno']}`);
// Task 2
var student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};
delete student.rollno;
console.log(student);
// Task 3
let student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12
};
var size = Object.keys(student).length;
console.log(size)
// Tasks 4
let library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true,
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true,
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false,
  }];
for (size = 0; size < Object.keys(library).length; size++) {
  if (library[size].readingStatus == true) {
    console.log('Already read:' + ' ' + library[size].author + ', ' + library[size].title);
  } else {
    console.log('You still need to read:' + ' ' + library[size].author + ', ' + library[size].title);
  }
}
// Task 7
const test = 'dog';
let word = [];
for (i = 0; i < test.length; i++) {
  for (j = i + 1; j <= test.length; j++) {
    let rr = test.slice(i, j);
    word.push(rr);
  }
}
console.log(word);
// Task 14
const obj = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12,
};
for (const key in obj) {
  const value = obj[key];
  console.log(value);
}
// Tasks 16
let obj = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12
};
let obj1 = {};
for (let key in obj){
  let value = obj[key];
  obj1[value] = key;
}
console.log(obj1)
// Tasks 17
let obj = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12
};
if('name' in obj){
  console.log('with name')
}
else{
  console.log('without name')
}
