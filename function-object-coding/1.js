const person = {
    name:'kirandeep',
    hobbies: ['coding']
}
function addHobby(hobby,hobbies=person.hobbies){
 hobbies.push(hobby);
 return hobbies;
}
addHobby("running",[]) // 
addHobby("dancing"); //
addHobby("banking",person.hobbies) // [coding, banking]
console.log(person.hobbies)