//создаем константу
/*const birthday = '14.07.2005';
//используем тип данных string
//при попытке изменить содержимое const выдает ошибку
console.log(birthday);


//используем тип данных number
let p = 3.14;
console.log(p)

let name = prompt('Имя')
let addres = prompt('Где живете');
let phone = prompt('Телефон:');


let student = 'Maga Aduev';
let adres = 'Goygova 17';
let tele = +79364782621
console.log(`Студент:${student},адрес:${adres},номер телефона:${tele}`);

//программа
let $ = 58;
let stockRu = 3558;
console.log(stockRu/$);

let a = 5;
let b = 10;
b = 9
c = ++ a + b --;
console.log(c);
*/

/*const a = 7;

if(a<10){
    console.log('константа меньше 10');
} else{
    console.log('константа больше 10')
}

let aa = 12;
let bb = 17;
let cc = 15;

let end = aa < 17 && bb < 17 ? 'yes' : 'no'
console.log(end);



let type = 'vn'
switch(type){
    case('vn1') :
    console.log(vn1);
    break;

    case('vn2') :
    console.log('vn2');
    break;

    case('vn') :
    console.log('vn');
    break;
}*/

// дополнительные задания по усл опер
let x = 10;
let y = 7;
let end = x > y ? 'x больше, чем y' : 'x не больше, чем y'
console.log(end);


let num = prompt("Введите число");

if(num % 2 == 0){
    alert( 'Число ${ num} четное');
}else{
    alert('Число ${num} нечетное')
}

let num1 = prompt('Введите число')
let num2 = prompt('Введите число')
let num3 = prompt('Введите число')

if(num1 >= num2 && num1 >= num3){
    alert(num1 +  " максимальное число");
}else if(num2 >= num1 && num2 >= num3){
    alert(num2 +  " максимальное число");
}else if(num3 >= num1 && num3 >= num2){
    alert(num3 +  " максимальное число")
}

//дз
function sendNum(a){
    
    if(a < 10){
        console.log('константа меньше 10')
    }else{
        console.log('константа не меньше 10')
    }
}
sendNum(12)


function showMessage(){
    alert("Привет, мир");
}
showMessage()

function message(a){
    console.log(a)
}
message('JavaScript')



let text = "flyEmirate"
function compare(){
    
    if(text === "lorem"){
        console.log('ошибка');
    }else{
        console.log(`содержимое переменной: ${text}`);
    }
}
compare()










