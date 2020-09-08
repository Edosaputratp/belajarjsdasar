// 1.diketahui  panajang = 10 cm, lebar = 5cm , dan tinggi = 8 cm. hitunglah luas permukaan balok dan volume 
 // balok sehingga menampilakn outpu di web

//diketahui :
//p = ... cm
//l = ... cm
//t = ... cm

//ditanya ?
//volume dari balok adalah ..cm3
//luas permukaan balok adalah ..cm2
//volume balok dalam liter .. l
//volume balok krtika di perbesar 3x .. cm3

//2.diketahui segitiga memiliki alas = 10 cm, tinggi = 12 cm, hitunglah luas segitiga , dan memiliki keluaran output pada web 

//diketahui 
//alas = ..cm'
//tinggi = ..cm

//ditanya?
// luas segitiga adalah ... m2

//diketahui
//volume dari balok adalah ..cm3

var p= 10;
var l = 5;
var t = 8;
var volume = p * l * t
document.write("ditanya <br> volume dari balok adalah " + volume + "cm3 <br>")

//luas permukaan balok adalah ..cm2

var hasil1= 2*(p*l+p*t+l*t)
document.write('diketahui:<br> <br> p=10cm <br> l=5cm <br> t=8cm <br>')
document.write('Luas Permukaaan Balok Adalah '+hasil1 +'cm2')
document.write("<br>")

//volume balok dalam liter

var balokliter = volume / 1000
document.write("ditanya? <br> volume balok dalam liter adalah " + balokliter)

//volume balok krtika di perbesar 3x .. cm3

var balokperbesar = volume * 3 
document.write('ditanya? <br> volume balok perbesar 3x' + balokperbesar + "cm3 <br>")


//diketahui
var a = 10 
var T = 12
var luassegitiga = 1 / 2 * a * T 
document.write("diketahui: <br> alas = 10 cm <br> tinggi = 12 cm <br> ditanya? <br> luas segitiga adalah "+ luassegitiga + "cm2")