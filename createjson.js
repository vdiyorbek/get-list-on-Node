'use strict';
const fs=require('fs');
let student={
    name:'Diyorbek',
    age:21,
    gender:'Male',
    department: 'English',
    car:'Honda'
}
let data=JSON.stringify(student);
fs.writeFileSync('student-2.json', data);