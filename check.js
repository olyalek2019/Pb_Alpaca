function check(){
	let form=document.getElementById('first_form');
	let name=document.getElementById('user_name');
	let email=document.getElementById('email');
	let password=document.getElementById('pass');
	let rep_password=document.getElementById('rp_pass'); 
	form.onsubmit=function(event){
		event.preventDefault();
		let length_name=name.value.length;
		let count=0;
		if(length_name<4||length_name>10){
			let two=name.nextElementSibling;
			two.classList.remove("unvisible");
			count++;
			name.value="";
		}
		if(/@/.test(email.value)==false){
			let five=email.nextElementSibling;
			five.classList.remove("unvisible");
			count++;
			email.value="";
		}
		if (password.value.length<6||password.value.length>20){
			let treee=password.nextElementSibling;
			treee.classList.remove("unvisible");
			count++;
			password.value="";
			rep_password.value="";
		}
		if (count==0){
			if(password.value!=rep_password.value){
				let four=rep_password.nextElementSibling;
				four.classList.remove("unvisible");
				count++;
				password.value="";
				rep_password.value="";
			}
		}
		if(count==0){
			alert("Congratulations! You have been registrated!");
			name.value="";
		email.value="";
		password.value="";
		rep_password.value="";
		}
		two.classList.add("unvisible");
	}
}	
check(); 
