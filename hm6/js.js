let age = prompt('Введіть  рік народження');
let city = +prompt('Введіть місто в якому проживаете');
let sport = +prompt ('Введіть улюблений вид спорту');
console.log(city);
console.log(sport);
alert(2023-age);
switch(true){
case 'Київ':
    console.log('Ти живешь у столиці України');
    break;
case 'Лондон':
    console.log('Ти живешь у столиці Англії');
    break;
case 'Вашингтон':
    console.log('Ти живешь у столиці США');
    break;
case city:
    console.log('Ти живешь у місті ${city}');
    break;
    default:
        console.log('ен')
}


switch(true){
    case 'Бокс':
    console.log('Круто! Хочеш стати Олександром Усиком ?');
        break;
    case 'Дзюдо':
        console.log('Круто! Хочеш стати Володимром Сорокою ?');
        break;
    case 'Плавання':
        console.log('Круто! Хочеш стати Майклом Фелпсом ?');
        break;
    case sport:
        console.log('${sport}');
        break;
        default:
        console.log('OK!')
}