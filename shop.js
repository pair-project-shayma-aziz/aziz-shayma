function makeProduct(name,price,stock){
    var product={}
    product.name=name
    product.price=price
    product.stock=stock
    return product
}
function makeProductslist(product){
    var arraylist=[]
    console.log(arraylist.push(product)) 
}




var product1=makeProduct("Smartphone Samsung S21",4599+" TND","Available")
$("#namephone1").append(`<h3>${product1.name}</h3>`)
$("#stockphone1").append(`${product1.stock}`)
$("#pricephone1").append(`${product1.price}`)
var product2=makeProduct("Smartphone OPPO RENO 8",1799+" TND","Available")
$("#namephone2").append(`<h3>${product2.name}</h3>`)
$("#stockphone2").append(`${product2.stock}`)
$("#pricephone2").append(`${product2.price}`)
var product3=makeProduct("IPHONE 14 PRO MAX",7999+" TND","Unavailable")
$("#namephone3").append(`<h3>${product3.name}</h3>`)
$("#stockphone3").append(`${product3.stock}`)
$("#pricephone3").append(`${product3.price}`)
var product4=makeProduct("IPHONE 14 PRO",6899+" TND","Available")
$("#namephone4").append(`<h3>${product4.name}</h3>`)
$("#stockphone4").append(`${product4.stock}`)
$("#pricephone4").append(`${product4.price}`)

var product5=makeProduct("SAMSUNG TELEVISEUR",4284.874+" TND","Available")
$("#nameTv1").append(`<h3>${product5.name}</h3>`)
$("#stockTv1").append(`${product5.stock}`)
$("#priceTv1").append(`${product5.price}`)
var product6=makeProduct("TV LG 65 SMART-RECEPTEUR",1799+" TND","Unavailable")
$("#nameTv2").append(`<h3>${product6.name}</h3>`)
$("#stockTv2").append(`${product6.stock}`)
$("#priceTv2").append(`${product6.price}`)
var product7=makeProduct("TV LG 50 SMART-RECEPTEUR",2179+" TND","Available")
$("#nameTv3").append(`<h3>${product7.name}</h3>`)
$("#stockTv3").append(`${product7.stock}`)
$("#priceTv3").append(`${product7.price}`)
var product8=makeProduct("TV SAMSUNG 55 SMART-QLED",7999+" TND","Available")
$("#nameTv4").append(`<h3>${product8.name}</h3>`)
$("#stockTv4").append(`${product8.stock}`)
$("#priceTv4").append(`${product8.price}`)

var product9=makeProduct("Sony Playstation 5",3699+" TND","Available")
$("#nameConsole1").append(`<h3>${product9.name}</h3>`)
$("#stockConsole1").append(`${product9.stock}`)
$("#priceConsole1").append(`${product9.price}`)
var product10=makeProduct("Console Nintendo Switch",1499+" TND","Available")
$("#nameConsole2").append(`<h3>${product10.name}</h3>`)
$("#stockConsole2").append(`${product10.stock}`)
$("#priceConsole2").append(`${product10.price}`)
var product11=makeProduct("PC GAMER FRAG GA-V7 ",5500+" TND","Unavailable")
$("#nameConsole3").append(`<h3>${product11.name}</h3>`)
$("#stockConsole3").append(`${product11.stock}`)
$("#priceConsole3").append(`${product11.price}`)
var product12=makeProduct("PC GAMER FRAG GI-V9 ",6529+" TND","Available")
$("#nameConsole4").append(`<h3>${product12.name}</h3>`)
$("#stockConsole4").append(`${product12.stock}`)
$("#priceConsole4").append(`${product12.price}`)

var product13=makeProduct("PC PORTABLE APPLE MACBOOK PRO M1",5519+" TND","Available")
$("#laptop1").append(`<h3>${product13.name}</h3>`)
$("#stocklaptop1").append(`${product13.stock}`)
$("#pricelaptop1").append(`${product13.price}`)
var product14=makeProduct("APPLE MACBOOK PRO M1 PRO",8899+" TND","Available")
$("#laptop2").append(`<h3>${product14.name}</h3>`)
$("#stocklaptop2").append(`${product14.stock}`)
$("#pricelaptop2").append(`${product14.price}`)
var product15=makeProduct("PC PORTABLE DELL VOSTRO",2070+" TND","Unavailable")
$("#laptop3").append(`<h3>${product15.name}</h3>`)
$("#stocklaptop3").append(`${product15.stock}`)
$("#pricelaptop3").append(`${product15.price}`)
var product16=makeProduct("PC HP 250 G8 i5-10éme",1849+" TND","Available")
$("#laptop4").append(`<h3>${product16.name}</h3>`)
$("#stocklaptop4").append(`${product16.stock}`)
$("#pricelaptop4").append(`${product16.price}`)


var product17=makeProduct("JBL CASQUE BLUETOOTH",159+" TND","Unavailable")
$("#acc1").append(`<h3>${product17.name}</h3>`)
$("#stockacc1").append(`${product17.stock}`)
$("#priceacc1").append(`${product17.price}`)
var product18=makeProduct("Manette SONY PS5",327+" TND","Available")
$("#acc2").append(`<h3>${product18.name}</h3>`)
$("#stockacc2").append(`${product18.stock}`)
$("#priceacc2").append(`${product18.price}`)
var product19=makeProduct("APPLE WATCH SÉRIES 7",2399+" TND","Available")
$("#acc3").append(`<h3>${product19.name}</h3>`)
$("#stockacc3").append(`${product19.stock}`)
$("#priceacc3").append(`${product19.price}`)
var product20=makeProduct("CASQUE GAMING ASUS",999+" TND","Available")
$("#acc4").append(`<h3>${product20.name}</h3>`)
$("#stockacc4").append(`${product20.stock}`)
$("#priceacc4").append(`${product20.price}`)

var array=[]
function pushh(product){
    array.push(product)
}pushh(product1)
pushh(product2)
pushh(product3)
pushh(product4)
pushh(product5)
pushh(product6)
pushh(product7)
pushh(product8)
pushh(product9)
pushh(product10)
pushh(product11)
pushh(product12)
pushh(product13)
pushh(product14)
pushh(product15)
pushh(product16)
pushh(product17)
pushh(product18)
pushh(product19)
pushh(product20)

var productlist=[]
var productlistname=[]

function addtocart(product){
    $("#productname").append(`<p>${product.name}</p>` )
    $("#productprice").append(`<p>${product.price}</p> `)
    $('#trash').prepend('<img id="deleteproduct" src="file:///C:/Users/shdri/OneDrive/Bureau/aziz-shayma/assets/trash-icon.png" />')
    productlist.push(product.price)
    productlistname.push(product.name)

}
$(".menucart").click(function() {
    $('.checkoutbox').toggle();
})

$("#deleteall").click(function() {
    $('#cartproduct').remove();
    $('#total').remove();
})





function sum(){
    var montant=0
    for(var i=0;i<productlist.length;i++){
        var y=parseInt(productlist[i])
        montant=montant+y
    }
    $("#total").empty()
    $("#total").append(`<p>${montant}</p>`)
}

