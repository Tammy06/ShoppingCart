/* 
   Javascript Shopping Cart: created by me 
   from a tutorial video i watched on youtube
   some years back :)
   ...forgotten the name of the channel
*/

//cart : Array
//Item : class/object
//addItemToCart : function
//removeItemFromCart : function
//removeAllItemFromCart : function
//clearCart : function
//cartQuantity : function
//cartTotal : function
//listCart : function
//saveCart : function
//loadCart : function

//*********************************************
//*********************************************

var myCart = (function(){
	
	var control = {};
	var cart = [];
	
	// item class/object
	function Item(name, cost, quantity){
		this.name = name;
		this.cost = cost;
		this.quantity = quantity;
	};

	// addItemToCart(name, cost, quantity)
	control.addItemToCart = function(name, cost, quantity){
		for(var i in cart){
			if(cart[i].name === name){
				cart[i].quantity += quantity;
				this.saveCart();
				return;
			}
		}
		var item = new Item(name, cost, quantity);
		cart.push(item);
		this.saveCart();
	};

	// removeItemFromCart(name) // removes one item
	control.removeItemFromCart = function(name){
		for(var i in cart){
			if(cart[i].name === name){
				cart[i].quantity--;
				if(cart[i].quantity === 0){
					cart.splice(i, 1);
				}
				break;
			}
		}
		this.saveCart();
	};

	// removeAllItemFromCart() // removes all
	control.removeAllItemFromCart = function(name){
		for(var i in cart){
			if(cart[i].name === name){
				cart.splice(i, 1);
				break;
			}
		}
		this.saveCart();
	};

	//setQuantityForItem() // input function
	control.setQuantityForItem = function(name, quantity){
		for(var i in cart){
			if(cart[i].name === name){
				cart[i].quantity = quantity;
				if(cart[i].quantity === 0){
					cart.splice(i, 1);
				}
				break;
			}
		}
		this.saveCart();
	};

	// clearCart
	control.clearCart = function(){
		cart = [];
		this.saveCart();
	};

	// cartQuantity -> returns total quantity
	control.cartQuantity = function(){
		var totalQuantity = 0;
		
		for(var i in cart){
			totalQuantity += cart[i].quantity;
		}
		return totalQuantity;
	};

	// cartTotal -> returns total cost
	control.cartTotal = function(){
		var totalCost = 0;
		
		for(var i in cart){
			totalCost += cart[i].cost * cart[i].quantity;
		}
		return totalCost.toFixed(2);
	};

	// listCart -> returns array of cart
	control.listCart = function(){
		cartCopy = [];
		for(var i in cart){
			var item = cart[i];
			var itemCopy = {};
			for(var p in item){
				itemCopy[p] = item[p];
			}
			itemCopy.total = (item.cost * item.quantity).toFixed(2);
			cartCopy.push(itemCopy);
		}
		return cartCopy;
	};

	// saveCart
	control.saveCart = function(){
		localStorage.setItem("shoppingCart", JSON.stringify(cart));
	};

	// loadCart
	control.loadCart = function(){
		cart = JSON.parse( localStorage.getItem("shoppingCart") );
	};

	// if cart exist load cart from storage as page loads else, save a new cart
	if(JSON.parse( localStorage.getItem("shoppingCart") )){
		control.loadCart();
	}else{
		control.saveCart();
	}
	
	return control;
})();












