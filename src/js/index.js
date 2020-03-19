import '../css/style.scss'

const products=["product 1","product 2","product 3","product 4"]

let html=''

products.forEach(element => {
    html+=`<li>${element}</li>`    
});

document.getElementById('products').innerHTML=html

