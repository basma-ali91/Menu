$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });



$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 4,
            }
        }
    });

});
//using typed library

var typed = new Typed('#element', {
    strings: ['uper Offer'],
    typeSpeed: 100,
    loop: true,
    backSpeed: 100,
    backDelay: 700,
    showCursor: false,
});

// using aos animation library
AOS.init({
    duration: 1500
});

//declared variables
let btnlogIn = document.getElementById("LogIn");
let fixedBox = document.getElementById("fixedBox");
let btnclose = document.getElementById("close");

let btnsignUp = document.getElementById("SignUp");
let fixedBox1 = document.getElementById("fixedBox1");
let btnclose1 = document.getElementById("close1");

let searchInput = document.getElementById("search");
let qr = document.getElementById("Qr");
let btnclose2 = document.getElementById("close2");

let favHeart = document.getElementsByClassName("fav");
let favHeartclick = document.getElementsByClassName("favsolid");

let decreamentbtn = document.getElementsByClassName("minus");
let increamentbtn = document.getElementsByClassName("pos");
let num = document.getElementsByClassName("num");

let addBtn = document.getElementsByClassName("addcart");
let imgitem = document.getElementsByClassName("card-img-top");
let nameItem = document.getElementsByClassName("card-title");
let textItem = document.getElementsByClassName("card-text")
let itemPrice = document.getElementsByClassName("itemPrice");
let empty = document.getElementById("empty");
let totalPrice = document.getElementById("Total_Price");
let itemLenght = document.getElementById("itemlength");
let showCart = document.getElementById("showcart");
let cartSection = document.getElementById("cart");
let backbtn = document.getElementById("arrowIcon")
let cartItem = {};
let cart = [];

let favCart = {};
let favItems = [];


//display login card
btnlogIn.addEventListener("click", function () {
    fixedBox.classList.replace('d-none', 'd-flex');

});

btnclose.addEventListener("click", function () {
    fixedBox.classList.replace('d-flex', 'd-none');
})

//display sign up card
btnsignUp.addEventListener("click", function () {
    fixedBox1.classList.replace('d-none', 'd-flex');

});

btnclose1.addEventListener("click", function () {
    fixedBox1.classList.replace('d-flex', 'd-none');
});

if(localStorage.getItem("favItamssection") !=null){
    favItems = JSON.parse(localStorage.getItem("favItamssection"));
    document.getElementById("favempty").style.display="none";
    displayFavItem();
}
else{
    document.getElementById("favempty").style.display="block";
}
if (favItems.length <= 0) {
    document.getElementById("favempty").style.display="block";
}
//click heart icon
for (let i = 0; i < favHeart.length; i++) {
    favHeart[i].addEventListener("click", function () {
        favHeart[i].classList.replace('d-flex', 'd-none');
        favHeartclick[i].classList.replace('d-none', 'd-flex');

        favCart = {
            img: imgitem[i].src,
            nameItem : nameItem[i].innerText,
            textItem : textItem[i].innerText,
            priceItem : itemPrice[i].firstElementChild.innerText,
        }
        favItems.push(favCart);
        console.log(favItems);
    
        localStorage.setItem("favItamssection",JSON.stringify(favItems));
        document.getElementById("favempty").style.display="none";
        displayFavItem();
    })
}


//display favItems function
function displayFavItem() {
    let fav_Items = "";

    for (let i = 0; i < favItems.length; i++) {
        fav_Items += `<div class="col-md-4 mb-3">
                            <div class="card mb-3 h-100">
                                <div class="text-center">
                                    <img src="${favItems[i].img}" class="card-img-top" alt="...">  
                                    <span class="cardIcon"><i class="fas fa-heart"></i></span>
                                </div>
                                <div class="card-body ps-4">
                                    <h5 class="card-title">${favItems[i].nameItem}</h5>
                                    <p class="card-text">${favItems[i].textItem}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="itemPrice">
                                            <p class="fw-bold">${favItems[i].priceItem}</p>
                                        </div>
    
    
                                        <div style="color: black; ">
                                            <button class="btn d-flex  justify-content-end align-items-center"
                                                style="border: 1px solid #EA840D;border-radius: 32px;">
                                                <div class="d-flex">
                                                    <span class="minus me-2">-</span>
                                                    <span class="num">01</span>
                                                    <span class="pos d-inline-block me-2 ms-2">+</span>
                                                </div>
                                                <div class="addcart">
                                                    <i class="fas fa-shopping-cart"></i>
                                                </div>
    
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>

    `
    }
 document.getElementById("favCards").innerHTML = fav_Items;

}

$("#favcart").click(function () {
    $("#fav").fadeIn(2000)
});

$("#favarrowIcon").click(function () {
    $("#fav").fadeOut(1000)
})

for (let i = 0; i < favHeartclick.length; i++) {
    favHeartclick[i].addEventListener("click", function () {
        favHeartclick[i].classList.toggle('d-none')
        favHeart[i].classList.replace('d-none', 'd-flex');
        deletfavitem(i)
    })
}

function deletfavitem(x){

    favItems.splice(x, 1);
    if (favItems.length <= 0) {
        document.getElementById("favempty").style.display="block";
    }
    displayFavItem();
    localStorage.setItem("favItamssection", JSON.stringify(favItems));
}

//Qr card
searchInput.addEventListener("keyup", function () {
    qr.classList.replace('d-none', 'd-flex');
})

btnclose2.addEventListener("click", function () {
    qr.classList.replace('d-flex', 'd-none');
});

//increament button
for (let i = 0; i < increamentbtn.length; i++) {
    increamentbtn[i].addEventListener("click", function () {

        num[i].innerText++;
        if (num[i].innerText < 10) {
            num[i].innerText = `0${num[i].innerText}`;
        }
        else {
            num[i].innerText = num[i].innerText;
        }
    })
}

//decreament button 
for (let i = 0; i < decreamentbtn.length; i++) {
    decreamentbtn[i].addEventListener("click", function () {
        if (num[i].innerText > 1) {
            if (num[i].innerText <= 10) {
                num[i].innerText--;
                num[i].innerText = `0${num[i].innerText}`;
            }
            else {
                num[i].innerText--;
            }
        }
        else {
            num[i].innerText = "01";
        }
    })
}

//add to cart
if (localStorage.getItem("cartItems") != null) {
    cart = JSON.parse(localStorage.getItem("cartItems"));
    empty.style.display = "none";
    itemLenght.innerHTML = cart.length;
    document.getElementById("cartItem").style.display = "flex";
    displayItems();

}
else {
    empty.style.display = "block";
    document.getElementById("cartItem").style.display = "none";
}

if (cart.length <= 0) {
    empty.style.display = "block";
    document.getElementById("cartItem").style.display = "none";
}

for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", function () {

        cartItem = {
            img: imgitem[i].src,
            nameItem: nameItem[i].innerText,
            priceItem: itemPrice[i].firstElementChild.innerText,
        }

        cart.push(cartItem);
        console.log(cart)
        localStorage.setItem("cartItems", JSON.stringify(cart))
        empty.style.display = "none";
        document.getElementById("cartItem").style.display = "flex";
        itemLenght.innerHTML = cart.length
        displayItems();
       
    })
    total()
}

//display cart items function
function displayItems() {
    let items = "";
    for (let i = 0; i < cart.length; i++) {

        items += ` <tr>
        <td><img src="${cart[i].img}" style="width:60px"></td>
        <td>${cart[i].nameItem}</td>
        <td>${cart[i].priceItem}</td>
        <td class="d-flex align-items-center h-100"> 
        <button class="btn d-flex  justify-content-end align-items-center">
        <div class="d-flex align-items-center">
            <span class="minus me-3 d-inline-block p-2"  style="border: 1px solid #EA840D;border-radius: 4px;">-</span>
            <span class="num">1</span>
            <span class="pos d-inline-block me-2 ms-3 d-inline-block p-2"  style="color:#fff;border-radius: 4px;background-color:#EA840D">+</span>
        </div>
        </button>
        <i class="fas fa-times" onclick="deleteitem(${i})" style="cursor:pointer"></i>
        </td>
    </tr>

    `
    }
    document.getElementById("tbody").innerHTML = items;
}

//deleteitem function

function deleteitem(x) {
    cart.splice(x, 1);
    displayItems();
    if (cart.length <= 0) {
        empty.style.display = "block";
        document.getElementById("cartItem").style.display = "none";
    }
    itemLenght.innerHTML = cart.length;
    localStorage.setItem("cartItems", JSON.stringify(cart));
}

//total price function
function total(){
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].priceItem;
    }
    console.log(sum)
    
    //   totalPrice.innerHTML= sum
}

//show and hide cart section
$("#showcart").click(function () {
    $("#cart").fadeIn(2000)
});

$("#arrowIcon").click(function () {
    $("#cart").fadeOut(1000)
})




$(".icon").click(function () {
    $(".open").animate({ marginLeft: "150px" }, function () {
      $(".sidenav").fadeIn(1000);
      $(".open").css("background-color","#ffffffbf");
      $(".open").css("height","100vh");
      $(".open .icon").css("display", "none");
      $(".open .icon2").css("display", "block");
      $(".sidenav .item1").animate({ paddingTop: "25px" }, 1000);
      $(".sidenav .item2").animate({ paddingTop: "25px" }, 1100);
      $(".sidenav .item3").animate({ paddingTop: "25px" }, 1200);
      $(".sidenav .item4").animate({ paddingTop: "25px" }, 1300);
      $(".sidenav .item5").animate({ paddingTop: "25px" }, 1400);
      $(".sidenav .item6").animate({ paddingTop: "25px" }, 1500);
    });
  });

  $(".icon2").click(function () {
    $(".open").animate({ marginLeft: "0" }, function () {
      $(".open").css("background-color","transparent");
      $(".open").css("height","50px");
      $(".sidenav ").fadeOut(500);
      $(".open .icon").css("display", "block");
      $(".open .icon2").css("display", "none");
      $(".sidenav  li").css("padding-top", "100vh");
    });
  });
  


