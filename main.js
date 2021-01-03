$(document).ready(function(){
	// display cart as page loadss
	displayCart();
	
	$('.add-to-cart').on('click', function(event){
		event.preventDefault();
		var name = $(this).attr('data-name');
		var cost = Number( $(this).attr('data-cost') );		
		myCart.addItemToCart(name, cost, 1);
		displayCart();
	});
			
	$('#clear-cart').on('click', function(event){
		myCart.clearCart();
		displayCart();
	});

	$('#show-cart').on('click', '.delete-item', function(event){
		var name = $(this).attr('data-name');
		myCart.removeAllItemFromCart(name);
		displayCart();
	});

	$('#show-cart').on('click', '.subtract-item', function(event){
		var name = $(this).attr('data-name');
		myCart.removeItemFromCart(name);
		displayCart();
	});

	$('#show-cart').on('click', '.plus-item', function(event){
		var name = $(this).attr('data-name');
		myCart.addItemToCart(name, 0, 1);
		displayCart();
	});

	$('#show-cart').on('change', '.item-quantity', function(event){
		var name = $(this).attr('data-name');
		var quantity = Number( $(this).val() );
		myCart.setQuantityForItem(name, quantity);
		displayCart();
	});
});

function displayCart(){
	var cartArray = myCart.listCart();
	var outPut = "";
	for(var i in cartArray){
		outPut += "<li>" 
		+ cartArray[i].name
		+ " <input class='item-quantity' type='number' data-name='"+cartArray[i].name
		+"' value='"+cartArray[i].quantity+"'>"
		+ " x " + cartArray[i].cost
		+ " = " + cartArray[i].total
		+ " <button class='plus-item' data-name='"+cartArray[i].name+"'>+</button>"
		+ " <button class='subtract-item' data-name='"+cartArray[i].name+"'>-</button>"
		+ " <button class='delete-item' data-name='"+cartArray[i].name+"'>X</button>"
		+ "</li>"
	}
	$('#show-cart').html(outPut);
	$('#count-cart').html( myCart.cartQuantity() );
	$('#total-cart').html( myCart.cartTotal() );
};






























