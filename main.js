const USER = "admin"; // обьявление константы

var userName = 'Marina',
	username,
	user_pass = 258; // обьявление переменных

var user_login = '';

var array = [1, 2, "Masha"];

console.log('Second elem ' + array[1]);
console.log('User name ' + userName);
console.log('User name ' + userName);

var object = {};

var x=0, y=1;

x+=y;  //x = x+y;

var x=5, y=5;
console.log('x='+ x);
var a, b;
a=x++; /*a=x; x=x+1; */
console.log('x='+ x);
b=++y;  /* x=x+1; b=x; */
console.log('x='+ x);

console.log('a='+ a + ',b='+b);

if ((0!=1) && (10<5) && (5==5)) { // && - значит что все условия должны быть верны
	alert('True');
}else{
	alert('False');
}

if ((0!=1) || (10<5) || (5==5)) { // || - значит что хотя бы одно условие должно быть верно
	alert('True');
}else{
	alert('False');
}

var x=6;

if (x>10){
	alert('Больше 10');
}else 
if (x<5){
	alert('Меньше 10');
}else{
	alert('То что нужно!');
}

for (var i=0; i<=10; i++){
	console.log(i);
}

var array = [1,2,3,4,4,4,4,4,4,4,4,4,4,4,9];
var arr_width = array.length-1;


for (var i=0; i<=arr_width; i++){
	document.write("Значение элемента - " + array[i] + "<br/>");
	array[i]+=1;
}
document.write("Новый массыв: " + array + "<br/>");

var num=20;
/* Сначала идет проверка условия, так что цыкл может ни разу и не вылниться */ 
while(num<150){
	num+=38;
	console.log("Number" +num);
}

/* Сначала выполниться цикл, потом провериться услови (цыкл точно выполниться один раз) */ 
do{
	num+=38;
	console.log("Number" +num);
}while(num < 0);

/**/

var z=5;
switch(x) {
	case 1:  // if (x == 1)
    	console.log('1');
    	break;

  	case 2:  // if (x == 2)
    	console.log('2');
    	break;

    case 3:  // if (x == 3)
    	console.log('3');
    	break;

	case 4:  // if (x == 4)
	    console.log('4');
	    break;

	case 5:  // if (x == 5)
    	console.log('5');
    	break;    

  	case 6:  // if (x == 6)
    	console.log('6');
    	break;

  	default:
    	console.log('Значение больше 6');
    	break;
} 