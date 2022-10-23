const person = {};
person.name = {
    firstName:"Gildong",
    lastName:"Hong"
};

//delete person.name;  //삭제
person.likes = ["apple", "samsung"];
person.printHello = function(){
    return "hello";
}
console.log(person);

//primitive_copy.js
let num = 10;
let copyNum = num;
num = 20; //변수 num을 재할당
console.log(num); //20
console.log(copyNum); //10

//shallow_copy.js
const persons = {
    name:"Hong Gildong"
};
const copyPerson = persons;     // 변수 persons에 할당된 객체를 변수 copyPerson에 복사
persons.name = "Hong";          // 변수 persons에 할당된 객체의 값을 변경
console.log(persons.name);      // Hong
console.log(copyPerson.name);   // Hong