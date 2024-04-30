/*
* js/array1.js
*/
empList.forEach((item,idx)=>{
	if(item.first_name.indexOf('e') !== -1){
		console.log(item);
	}
});

let newAry = empList.filter((item, idx, ary) => {	
	return (idx+1) ==ary.length;
});
//A -> A'

newAry = empList.map((item,idx,ary) =>{
	const obj = {
		no : item.id,
		name : item.first_name + "-"+ item.last_name,
		email : item.email
	}
	//return obj;
});
//newAry = empList.map();
console.log(newAry);

let result = empList.reduce((acc, curVal) => {
	if(curVal.gender =='Male'){
		acc.push(curVal);
	}
	return acc;
}, []);
console.log(result);
const array1 = [1, 7, 3, 4, 9];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(function(acc,currentValue) {
	console.log(`acc=> ${acc},currentValue=> ${currentValue}`)
	//return acc + currentValue;
	//return acc > currentValue ? acc : CucurrentValue;
	if(acc < currentValue){
		return acc;
	}else{
		return currentValue;
	}
});

console.log(sumWithInitial);
// Expected output: 10





// String.prototype.indexOf('') => 찾는 값의 인덱스를 반환.
// Array.prototype.indexOf('') => 찾는 값의 인덱스를 반환.

console.log("abcde".indexOf("k"));
console.log([1,2,3,4,5].indexOf(3));

let genderAry = []; //gender를 종류별로 한가지만 담기
empList.forEach(emp =>{
	if(genderAry.indexOf(emp.gender)== -1){
		genderAry.push(emp.gender);
	}
});
	
//empList.forEach();
console.log(genderAry); //['Male','Female',..]



