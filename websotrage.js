console.log('web storage xuxu');

localStorage.setItem('usuario', 'paulo');
sessionStorage.setItem('usuario', 'paulo');

localStorage.senha = 12345;
sessionStorage.senha = 12345;

var userLocal = localStorage.getItem ('usuario');       
var userSession =sessionStorage.getItem ('usuario');
console.log (userLocal,userSession);

var pwdLocal = localStorage.senha;
var pwdSession = sessionStorage.senha;
console.log (pwdLocal, pwdSession);

console.log(localStorage.length);

for(var index =0; index < localStorage.lenght; index++){
	var key = localStorage.key(index);
	var value =localStorage.key(key);
	console.log(key,value);
}

localStorage.removeItem('usuario');
sessionStorage.removeItem('senha');

localStorage.clear();
sessionStorage.clear();
