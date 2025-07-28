const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsConteiner = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const chekoutBtn = document.getElementById("chekout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput= document.getElementById("address")
const addressWarn =document.getElementById("address-warn")

let cart = [];

cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex"
})

//fechar o modal clicar fora 
cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

//fechar Modal clicar em fechar
closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})

menu.addEventListener("click", function(event){
    //console.log(even.target)
    let parentButton = event.target.closest(".add-to-cart-btn")
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        addToCart(name, price)
    }
})

//função para adicionar ao carrinho
function addToCart(name, price){
    const existingItem = cart.find(item => item.name === name)
    if(existingItem){
        existingItem.quantity += 1;
    }else{
        cart.push({
        name,
        price,
        quantity: 1,
        })

    }

    updateCartModal() 

}

function updateCartModal(){
    cartItemsConteiner.innerHTML ="";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");

        cartItemElement.innerHTML = `
          <div>
             <div>
               <p>${item.name}</p>
               <p>${item.quantity}</p>
               <p>R$ ${item.price}</p>

               <div>
                <button>
                  Remover
                </button>
               </div>

             </div>



          </div>

        `
        cartItemsConteiner.appendChild(cartItemElement)
    })
}