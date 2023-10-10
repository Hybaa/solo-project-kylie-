
/* class */
function makeShop(name) {
    return {
        name,
        list: [],
        makeItems,
        removeItem,
        upDateItem,
        displayItems,
        display,
        sortsItmsByPrice,
        sortByItemsByDate,
    }
}


function generateID() {
    var count = 0;
    return function () {
        return count++;
    };
}

var id = generateID();


/** factory function */
function makeItems(price, name, category, images) {
    var item = {
        price,
        name,
        category,
        images,
        date: new Date().toLocaleString(),
        id: id(),
    }
    this.list.push(item)
    return item
}
/**initiating the class */
var kylie = makeShop("Kylie Cosmetics")

/**creating data using our factory function */
/** Items */
kylie.makeItems(104, "Sweet Like Hunny", "lips", ["photoo/custom_resized_876fa0d9-287d-4730-b975-5bc19bd1b0fc.webp", "photoo/Lips/KJC_GLD_23_LipMacro_SweetLikeHunny_01_WS_800x.webp", "photoo/Lips/KJC_GLD_23_PP_Armswatch_V2_7a487639-bc3e-4878-9913-b496bc665047_800x.webp"])

kylie.makeItems(98, "Precision Pout Lip Liner Set", "lips", ["photoo/Lips/KJC_Holiday_23_GS_LipLinerTrio_Open_800x.webp", "photoo/Lips/KJC_HOLIDAY_23_CP_PrecisionPoutLinerSet_02_WS_800x.webp", "photoo/Lips/KJC_LL_PRP_23_Kylie_Cinnamon_01_WS_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Comes_Naturally_01_2500x2500_91039e4f-049c-4e64-be97-24be2af5ad85_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Trio_Cinnamon_01_2500x2500_357c6499-193e-4a8e-928a-48654e12f886_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Trio_Cocoa_01_2500x2500_e1193a6a-f02e-410f-95c0-bf67c8e2f902_800x.webp"])
console.log(kylie.makeItems);
console.log();


/** displaying one Items  */
function display(item) {
    var id = item.id
    $(".product-grid").append(`
  <div class="product-card" id = item-${id}>
  <h3 class = title id = title${id}>${item.name}</h3>
  <img src="${item.images[0]}" class="item-image" id="img-${item.id}" alt = ${item.images[1]}>
  <h2 class = "catego"  id = "catego${id}">${item.category}</h2>
  <p class = "price" id = "price${id}"> Price: $ ${item.price}</p>
  <button class="book-button"class="add-to-cart-home" >Add To Cart</button></div>`)
}

/** displaying all of the items through iteration */
function displayItems() {
    $(".product-grid").empty();
    for (var i = 0; i < this.list.length; i++) {
        display(this.list[i]);
    }
}
kylie.displayItems()

/** ToggleImage just lips */
var counter = 0
function toggleImage(obj) {
    if (counter === obj.images.length) {
        counter = 0
    } else {
        counter++
    }
    $(`#img-${lips.id}`).attr("src", obj.images[counter])
}

$(`#img-${lips.id}`).on("click", function () {
    toggleImage(lips)
})
console.log($(`#${lips.id}`))


function removeItem(id) {
    this.list = this.list.filter(function (item) {
        item.id !== id
    })
}
function upDateItem(id, reference, newValue) {
    var itemToUpdate = this.list.find(function (item) { item.id === id })
    if (itemToUpdate) {
        itemToUpdate[reference] = newValue
    }
}

function displayItems(category) {
    this.list.forEach(function (item) {
        if (item.category === category) {
            console.log(`Name: ${item.name}, Price: $${item.price} Image:${item.images[0]}`);
        }
    });
}
function sortsItmsByPrice() {
    this.list.sort(function (a, b) {
        return a.price - b.price
    })
}
function sortByItemsByDate() {
    this.list.sort(function (a, b) {
        return a.date - b.date
    })
}


function displayProduct(product) {
    $(".product-grid").append(`<div class="product-card" id="${product.id}">
<img class="item-image" id="img-${product.id}" src="${product.images[0]}"alt="${product.name}">
<h3>${product.name}</h3>
<p>Price: $${product.price}</p>
<button class="book-button"class="add-to-cart-home" >Add To Cart</button> 
</div>`)

}
function displayAllProducts(products) {
    $.each(products, function (i, product) {
        $('.product-grid').append(`
      <div class="product-card" id="${product.id}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <img class="item-image" id="img-${product.id}" src="${product.images[0]}" alt="${product.name}">
        <button class="book-button"class="add-to-cart-home" >Add To Cart</button> 
</div>
    `);
    });
}


var lipsCollection = makeShop(lipsCollection)
lipsCollection.addProduct(lips)
lipsCollection.addProduct(lineLips)
displayAllProducts(lipsCollection.list)




function toggleImageOnHover(productId) {
    var productContainer = $(`#${productId}`)

    var imageElement = productContainer.find('.item-image')

    var product = lipsCollection.list.find(item => item.id === productId)

    var counter = 0
    imageElement.hover(
        function () {
            counter = (counter + 1) % product.images.length
            imageElement.attr('src', product.images[counter])
        },
        function () {
            counter = 0;
            imageElement.attr('src', product.images[counter])
        }
    )
}
$('.item-image').each(function () {
    var productId = $(this).closest('.product-card').attr('id').split('-')[1];
    toggleImageOnHover(productId);
});
// function toggleImageOnHover(productId) {
//     var productContainer = $(`#${productId}`);
//     var imageElement = productContainer.find('.item-image');
//     var product = kylie.list.find(item => item.id === productId);
  
//     // Initialize the counter outside of the hover event handler
//     var counter = 0;
  
//     imageElement.hover(
//       function () {
//         counter = (counter + 1) % product.images.length;
//         imageElement.attr('src', product.images[counter]);
//       },
//       function () {
//         // No need to reset the counter here
//       }
//     );
//   }
  
//   // Call the toggleImageOnHover function for each item-image element
//   $('.item-image').each(function () {
//     var productId = $(this).closest('.product-card').attr('id').split('-')[1];
//     toggleImageOnHover(productId);
//   });
  