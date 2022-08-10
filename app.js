const humburgerbtn = document.getElementById('humburgerbtn');
const close = document.getElementById('close');
const menus = document.getElementById('menus');
humburgerbtn.addEventListener('click', () =>{
    document.getElementById('navbar').style.display = "block";
    close.style.display = "block";
    humburgerbtn.style.display = "none";
    console.log("clicked")
})
close.addEventListener('click', () =>{
    document.getElementById('navbar').style.display = "none";
    close.style.display = "none";
    humburgerbtn.style.display = "block";
    console.log("clicked")
} )
const product = document.getElementById('product');
product.addEventListener('click', () =>{
    document.getElementById('productItems').style.display = "block";
    document.getElementById('connectItems').style.display = "none";
    document.getElementById('companyItems').style.display = "none";
    console.log("clicked")
})
const connect = document.getElementById('connect');
connect.addEventListener('click', () =>{
    document.getElementById('productItems').style.display = "none";
    document.getElementById('connectItems').style.display = "block";
    document.getElementById('companyItems').style.display = "none";
    console.log("clicked")
})
const company = document.getElementById('company');
company.addEventListener('click', () =>{
    document.getElementById('productItems').style.display = "none";
    document.getElementById('connectItems').style.display = "none";
    document.getElementById('companyItems').style.display = "block";
    console.log("clicked")
})
const desktopProduct = document.getElementById('desktopProduct');
const promenu = document.getElementById('promenu');
const compmenu = document.getElementById('compmenu');
const connmenu = document.getElementById('connmenu');
const main = document.getElementById('main');
const desktopCompany = document.getElementById('desktopCompany');
const desktopConnect = document.getElementById('desktopConnect');
desktopProduct.addEventListener('click', () =>{
    promenu.style.display = "block";
    promenu.style.right = "166px";
    main.style.marginTop = "-66px";
    desktopCompany.style.marginLeft = "-148px"
    desktopConnect.style.marginLeft = "auto"
    compmenu.style.display = "none";
    connmenu.style.display = "none";

})
desktopCompany.addEventListener('click', () =>{
    promenu.style.display = "none";
    compmenu.style.display = "block";
    desktopCompany.style.marginLeft = "auto"
    connmenu.style.display = "none";
    compmenu.style.left = "-165px"
    compmenu.style.top = "107px";
    main.style.marginTop = "-53px";
    desktopConnect.style.marginLeft = "-165px"
    desktopCompany.style.marginLeft = "auto"
} )


desktopConnect.addEventListener('click', () =>{
    promenu.style.display = "none";
    compmenu.style.display = "none";
    connmenu.style.display = "block";
    desktopCompany.style.marginLeft = "auto"
    desktopConnect.style.marginLeft = "auto"
    connmenu.style.right = "152px";
    connmenu.style.top = "84px";
    main.style.marginTop = "-34px"
} )