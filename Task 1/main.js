// задание 1

// let age = parseInt(prompt("Введите свой возраст: ", "18"));
// if (age <12) {
//     alert("Серьезно? Ты ребенок? Иди учись!!!");
// }
// else if (age <18 && age >=12) {
//     alert("Подросток, иди учись еще!");
// }
// else if (age <60 && age >=18) {
//     alert("Уже другое дело, можем нормально поболтать с тобой, взрослый :)");
// }
// else {
//     alert("Эх, пенсия, ужасная вещь :(");
// }

// задание 2

// let choise = parseInt(prompt("Введите своё число (0-9):"))
// switch (choise)
// {
//     case 0:
//         alert(")");
//         break;
//     case 1:
//         alert("!");
//         break;
//     case 2:
//         alert("@");
//         break;
//     case 3:
//         alert("#");
//         break;
//     case 4:
//         alert("$");
//         break;
//     case 5:
//         alert("%");
//         break;     
//     case 6:
//         alert("^");
//         break;
//     case 7:
//         alert("&");
//         break;
//     case 8:
//         alert("*");
//         break;
//     case 9:
//         alert("(");
//         break;       
// }

// задание 3

// let number = parseInt(prompt("Введите трехзначное число: ", "123"));
// let num1 = parseInt(number % 10);
// let num2 = parseInt(number / 10 % 10);
// let num3 = parseInt(number / 100);
// if (num1 == num2 || num2 == num3 || num1 == num3) {
//     alert("Число имеет две одинаковые цифры");
// }
// else
// {
//     alert("Число не имеет одинаковые цифры");
// }

// задание 4

// let year = parseInt(prompt("Введите год: ", "2025"));
// (year % 400 === 0 || year % 4 === 0 && year% 100 !== 0 ) ? alert("Год высокосный") : alert("Год не высокосный");

// задание 5

// let number = parseInt(prompt("Введите пятиразрядное число: ", "12345"));
// let num1 = parseInt(number % 10);
// let num2 = parseInt(number % 100 / 10);
// let num3 = parseInt(number % 1000 / 100);
// let num4 = parseInt(number % 10000 / 1000);
// let num5 = parseInt(number % 100000 / 10000);
// if (num1 == num5 && num2 == num4) {
//     alert("Число палиндром");
// }
// else
// {
//     alert("Число не палиндром");
// }

// задание 6

// let usd = parseFloat(prompt("Введите доллары:", "1234"));
// const eur = 0.85;
// const uah = 41.18;
// const azn = 1.7;
// let choise = parseInt(prompt("Выберите курс валют (1-eur; 2-uah; 3-azn):"));
// switch (choise)
// {
//     case 1:
//         alert("Результат: " + (usd * eur));
//         break;
//     case 2:
//         alert("Результат: " + (usd * uah));
//         break;
//     case 3:
//         alert("Результат: " + (usd * azn));
//         break;
//     default:
//         alert("Ошибка, не правильно ввели выбор!!!");
//         break;
// }

// задание 7

// let count = parseInt(prompt("Введите суму вашей покупки", "1234"));
// if (count >=200 && count < 300) {
//     alert("Сумма со скидкой 3%: " + (count - (count * 3 / 100)));
// }
// else if (count >=300 && count < 500) {
//     alert("Сумма со скидкой 5%: " + (count - (count * 5 / 100)));
// }
// else if (count >= 500) {
//     alert("Сумма со скидкой 7%: " + (count - (count * 7 / 100)));
// }
// else {
//     alert("Нету скидки :(");
// }

// задание 8

// let d = parseFloat(prompt("Enter diametr: "));
// let P = parseFloat(prompt("Enter Place of square: "));
// const Pi = 3.14;
// let C = Pi*d;
// let a = P/2;
// (a>C||a==C)?alert("A circle can place in this square :)") :alert("A circle can't place in this square :(");


// задание 9

// let choise1 = parseInt(prompt("What is the capital of Ukraine?\n1) Warsaw\n2) Kyiv\n3) Lviv"));
// let choise2 = parseInt(prompt("Which color is NOT on the Ukrainian flag?\n1) Yellow\n2) Blue\n3) Green"));
// let choise3 = parseInt(prompt("Who wrote the famous book \"Kobzar\"?\n1) Taras Shevchenko\n2) Ivan Franko\n3) Lesya Ukrainka"));
// if (choise1 == 2 && choise2 == 3 && choise3 == 1)
// {
//     alert("That's correct, you are welcome! :)");
// }
// else
// {
//     alert("Something you don't know :(");
// }


// задание 10

// let year = parseInt(prompt("Enter year: "));
// let month = parseInt(prompt("Enter month: "));
// let day = parseInt(prompt("Enter day: "));
// if(day == 31 && month == 12)
// {
//     day = 1;
//     month = 1;
//     year+=1;
//     alert("next date: " + day + "." + month + "."+ year)
// }
// else if (day == 31 && month == 1, 3, 5, 7, 8, 10 || day == 28 && month == 2 || day == 30 && month == 4, 6, 9, 11)
// {
//     day = 1;
//     month+=1;
//     alert("next date: " + day + "." + month + "."+ year)
// }
// else{
//     day += 1;
//     alert("next date: " + day + "." + month + "."+ year)
// }