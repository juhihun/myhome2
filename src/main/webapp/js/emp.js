/*
* emp.js
*/


document.addEventListener("DOMContentLoaded", initForm)

//화면 로딩 후 처음 실행할 함수
function initForm() {
	//Ajax호출.
	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../empJson.json');
	xhtp.send();
	xhtp.onload = function() {
		let data = JSON.parse(xhtp.responseText);
		console.log(data);
		data.forEach(emp => {
			let tr = makeRow(emp);
			document.querySelector('#elist').appendChild(tr);
		})
	}

	//등록버튼 이벤트
	document.querySelector('#addBtn').addEventListener('click', addRow);


}//end of initform

function addRow() {
	console.log("fffff");
	//db insert & 화면 출력
	const addHtp = new XMLHttpRequest();
	//사원이름(ename),연락처(phone),급여(salary),입사일자(hire),이메일(email)
	let ename = document.querySelector('#ename').value;
	let ephone = document.querySelector('#ephone').value;
	let email = document.querySelector('#email').value;
	let ehire = document.querySelector('#edate').value;
	let esalary = document.querySelector('#esalary').value;

	let param = '../empsave.json?job=add&name=' + ename + '&phone=' + ephone + '&salary=' + esalary +
		'&hire=' + ehire + '&email=' + email;
	addHtp.open('get', param);
	addHtp.send();
	addHtp.onload = function() {
		let result = JSON.parse(addHtp.responseText);
		console.log(result);
		if (result.retCode = 'OK') {
			let tr = makeRow(result.retVal);
			document.querySelector('#elist').appendChild(tr);
		}
	}

}



function makeRow(emp = {}) {
	let prop = ['empNo', 'empName', 'email', 'salary'];
	//한건에 대한 처리
	let tr = document.createElement('tr');
	tr.setAttribute('data-no',emp.empNo);
	tr.addEventListener('dblclick',modifyRow);
	prop.forEach(prop => {
		let td = document.createElement('td');
		td.innerHTML = emp[prop];
		tr.appendChild(td);
	})
	let td = document.createElement('td');
	let btn = document.createElement('button');

	btn.innerHTML = '삭제';
	btn.addEventListener('click', deleteRow);
	td.appendChild(btn);
	tr.appendChild(td);
	return tr;
}//end of makeRow

//화면수정함수
function modifyRow(){
	let originMail = this.children[2].innerText;
	let originSalary = this.children[3].innerText;
	let oldTr = this;
	let newTr = this.cloneNode(true); //복제
	newTr.querySelector('td:nth-of-type(3)').innerHTML = '<input value="'+originMail+'">';
	newTr.querySelector('td:nth-of-type(4)').innerHTML = '<input value="'+originSalary+'">';
	newTr.querySelector('button').innerText = '수정';
	newTr.querySelector('button').addEventListener('click',updateRow);
	console.log(newTr);
	oldTr.parentElement.replaceChild(newTr,oldTr);
}


//updateRow

function updateRow(){
	let oldTr = this.parentElement.parentElement;
	let empNo = this.parentElement.parentElement.dataset.no; //data-no => dataset.no
	let email = this.parentElement.parentElement.children[2].children[0].value;
	let salary = this.parentElement.parentElement.children[3].children[0].value;
	console.log(empNo,email,salary);
	
	const editHtp = new XMLHttpRequest();
	editHtp.open('get','../empsave.json?job=edit&empNo='+empNo
	+'&salary='+salary+'&email='+email);
	
	editHtp.send();
	editHtp.onload = function(){
		let result = JSON.parse(editHtp.responseText);
		console.log(result);
		if(result.retCode == 'OK'){
		let newTr = makeRow(result.retVal);
		oldTr.parentElement.replaceChild(newTr,oldTr);
		}
	}
}

function deleteRow() {
	const delNo = this.parentElement.parentElement.children[0].innerText;
	let tr = this.parentElement.parentElement;
	console.log(delNo);
	//서블릿실행(삭제) ->ok반환->화면처리
	const delHtp = new XMLHttpRequest();
	delHtp.open('get', '../empsave.json?job=delete&empNo=' + delNo);
	delHtp.send();
	delHtp.onload = function() {
		let result = JSON.parse(delHtp.responseText); //retCode:ok
		if (result.retCode == 'OK') {
			tr.remove();
		} else if (result.retCode == 'NG') {
			alert('처리중 에러발생');
		} else {
			alert('처리코드 확인하새요');
		}
	}

}//end of deleteRow.






