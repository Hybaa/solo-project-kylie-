/* class */
function makeShop(name) {
  return {
    name,
    list: [],
    makeItems,
    displayItems,
    display,
    removeItem,
    updateItem,
    sortByPrice,
    sortByPriceDecrement,
    sortByDate,
    sortByDateDecrement,

  }
}

/*id generator*/
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
    currentImageIndex: 0,
    id: id(),
  }
  this.list.push(item)
  return item
}
/**initiating the class */
var kylie = makeShop("Kylie Cosmetics")

/**creating data using our factory function */
/** Items */
kylie.makeItems(104, "Sweet Like Hunny", "Lips", ["photoo/custom_resized_876fa0d9-287d-4730-b975-5bc19bd1b0fc.webp", "photoo/Lips/KJC_GLD_23_LipMacro_SweetLikeHunny_01_WS_800x.webp", "photoo/Lips/KJC_GLD_23_PP_Armswatch_V2_7a487639-bc3e-4878-9913-b496bc665047_800x.webp"])

kylie.makeItems(45, "Matte Lipstick", "Lipsticks", ["photoo/Lips/KJC_MATTE_23_Kylie_808_Open-0_800x.webp", "photoo/Lips/KJC_MATTE_23_LipMacro_Kylie_01_800x.webp", "photoo/Lips/KJC_MATTE_23_Kylie_808_Swatch_800x.webp"])
kylie.makeItems(43, "Matte Lipstick ROU ", "Lipsticks", ["photoo/Lips/KJC_MATTE_23_An_Apple_A_Day_410_Open-0_800x.webp", "photoo/Lips/KJC_MATTE_23_LipMacro_AnAppleADay_02_800x.webp", "photoo/Lips/KJC_MATTE_23_KV_Kylie_AnAppleADay_03_WS_800x.webp", "photoo/Lips/KJC_MATTE_23_An_Apple_A_Day_410_Swatch-0_800x.webp"])

kylie.makeItems(77, "Matte Liquid Lipstick", "Liquid Lipstick", ["photoo/Lips/fupfnpqwdti2nisf1v7q_800x.webp", "photoo/Lips/qlhl4dca8ukzmann37d4_800x.webp", "photoo/Lips/KJC_MLL_21_Arm_Swatch_Set5_WS_ShadeNames_625bdce4-5856-496d-bda4-1e5e363dc237_800x.webp"])

kylie.makeItems(178, "Matte Liquid Lipstick Trio - Pinks", "Liquid Lipstick", ["photoo/Lips/KJC_Bundle_MLLTrio-Pinks_75501b31-fe12-441a-8f63-5e693ff936bf_800x.webp", "photoo/Lips/KJC_INFOGRAPHICS_MATTELIQUIDLIPS2_DEF-0_f0d1db84-547e-498a-91d8-22a81a52f952_800x.webp", "photoo/Lips/KJC_Bundle_MLLTrio-Pinks_Swatches_800x.webp"])

kylie.makeItems(198, "Gloss & Glow Bundle", "Lip glosses", ["photoo/Lips/0808_GlossDripsBundles_heroimagesR2_Gloss_GlowBundle_1_800x.webp", "photoo/Lips/IMG_3510_Facetune_28-05-2022-11-11-45copy_WS_pinkmeupGlowBalm_underestimatedGlossDrip_800x.webp", "photoo/Lips/KJC_SUMMER_22_Gloss_Drip_Armswatch_AllArmswatches_DTC_NEW_8b0f5b91-3cd0-4fb8-bf7c-fdec147f60ca_800x.webp"])
kylie.makeItems(98, "Precision Pout Lip Liner Set", "Lips", ["photoo/Lips/KJC_Holiday_23_GS_LipLinerTrio_Open_800x.webp", "photoo/Lips/KJC_HOLIDAY_23_CP_PrecisionPoutLinerSet_02_WS_800x.webp", "photoo/Lips/KJC_LL_PRP_23_Kylie_Cinnamon_01_WS_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Comes_Naturally_01_2500x2500_91039e4f-049c-4e64-be97-24be2af5ad85_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Trio_Cinnamon_01_2500x2500_357c6499-193e-4a8e-928a-48654e12f886_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Trio_Cocoa_01_2500x2500_e1193a6a-f02e-410f-95c0-bf67c8e2f902_800x.webp"])
kylie.makeItems(98, "Precision Pout Lip Liner Set", "Lips", ["photoo/Lips/KJC_Holiday_23_GS_LipLinerTrio_Open_800x.webp", "photoo/Lips/KJC_HOLIDAY_23_CP_PrecisionPoutLinerSet_02_WS_800x.webp", "photoo/Lips/KJC_LL_PRP_23_Kylie_Cinnamon_01_WS_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Comes_Naturally_01_2500x2500_91039e4f-049c-4e64-be97-24be2af5ad85_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Trio_Cinnamon_01_2500x2500_357c6499-193e-4a8e-928a-48654e12f886_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Trio_Cocoa_01_2500x2500_e1193a6a-f02e-410f-95c0-bf67c8e2f902_800x.webp"])
kylie.makeItems(98, "Precision Pout Lip Liner Set", "Lips", ["photoo/Lips/KJC_Holiday_23_GS_LipLinerTrio_Open_800x.webp", "photoo/Lips/KJC_HOLIDAY_23_CP_PrecisionPoutLinerSet_02_WS_800x.webp", "photoo/Lips/KJC_LL_PRP_23_Kylie_Cinnamon_01_WS_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Comes_Naturally_01_2500x2500_91039e4f-049c-4e64-be97-24be2af5ad85_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Trio_Cinnamon_01_2500x2500_357c6499-193e-4a8e-928a-48654e12f886_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Trio_Cocoa_01_2500x2500_e1193a6a-f02e-410f-95c0-bf67c8e2f902_800x.webp"])
kylie.makeItems(98, "Precision Pout Lip Liner Set", "Lips", ["photoo/Lips/KJC_Holiday_23_GS_LipLinerTrio_Open_800x.webp", "photoo/Lips/KJC_HOLIDAY_23_CP_PrecisionPoutLinerSet_02_WS_800x.webp", "photoo/Lips/KJC_LL_PRP_23_Kylie_Cinnamon_01_WS_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Comes_Naturally_01_2500x2500_91039e4f-049c-4e64-be97-24be2af5ad85_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Trio_Cinnamon_01_2500x2500_357c6499-193e-4a8e-928a-48654e12f886_800x.webp", "photoo/Lips/KJC_Holiday_23_Digital_Model_Lip_Macro_Precision_Pout_Lip_Liner_Trio_Cocoa_01_2500x2500_e1193a6a-f02e-410f-95c0-bf67c8e2f902_800x.webp"])



/** displaying one Items  */
function display(item) {
  var id = item.id
  $(".product-grid").append(`
<div class="product-card" id = item-${id}>
<h3 clasname id = title${id}>${item.name}</h3>
<img src="${item.images[0]}" class="item-image" id="img-${item.id}" alt = ${item.images[1]}>
<h2 class = "catego"  id = "catego${id}">${item.category}</h2>
<p class = "price" id = "price${id}"> Price: $ ${item.price}</p>
<button class="book-button" class="add-to-cart-home" > Add To Cart </button></div>`)
  addToggleEvent(item)
}
const addToggleEvent = (item) => {
  $(`#img-${item.id}`).on('mouseenter', function (e) {
    console.log('iiddddd', this, e);
    this.iid = setInterval(function () {

      let image
      if (item.images[item.currentImageIndex + 1]) {

        image = item.images[item.currentImageIndex + 1]

        item.currentImageIndex++

      }
      else {

        image = item.images[0]
        item.currentImageIndex = 0
      }
      $(`#img-${item.id}`).attr('src', image)
    }, 800);
    console.log('dddd', this.iid);

  }).on('mouseleave', function (e) {


    this.iid && clearInterval(this.iid);
  });

}

/** displaying all of the items through iteration */
function displayItems() {
  $(".product-grid").empty();
  for (var i = 0; i < this.list.length; i++) {
    display(this.list[i]);
  }
}
kylie.displayItems()

/**deleting items */

function removeItem(id) {
  this.list = this.list.filter(function (item) {
    item.id !== id
  })

  $(`#item${id}`).remove()
}
/**updating items */

function updateItem(id, prop, newValue) {
  this.list.forEach(function (item) {
    if (item.id === id) {
      item[prop] = newValue;
    }
  });
  console.log(this);

  this.displayItems();
}
/** sort by price increment  */
function sortByPrice() {
  kylie.list.sort(function (a, b) {
    return a.price - b.price;
  });

  kylie.displayItems();
}
/**sort by price decrement */
function sortByPriceDecrement() {
  kylie.list.sort(function (a, b) {
    return b.price - a.price;
  });

  kylie.displayItems();
}

/** sort by date increment */
function sortByDate() {
  kylie.list
    .sort(function (a, b) {
      return a.date - b.date;
    })
    .reverse();
  kylie.displayItems();
}

/** sort by date decrement */
function sortByDateDecrement() {
  kylie.list
    .sort(function (a, b) {
      return b.date - a.date;
    })
  kylie.displayItems();
}

$(".lipsticks").on("click", function (e) {
  e.preventDefault()

  var filtered = kylie.list.filter(function (items) {
    console.log(items.category);
    return items.category === "Lipsticks"

  });

  $(".product-grid").empty();
  filtered.forEach(function (items) {
    console.log(items)
    display(items)
  });
})

$(".LiquidLipsticks").on("click", function (e) {
  e.preventDefault()

  var filtered = kylie.list.filter(function (items) {
    console.log(items.category);
    return items.category === "Liquid Lipsticks"

  });

  $(".product-grid").empty();
  filtered.forEach(function (items) {
    console.log(items)
    display(items)
  });
})

$(".LipGlosses").on("click", function (e) {
  e.preventDefault()

  var filtered = kylie.list.filter(function (items) {
    console.log(items.category);
    return items.category === "Lip Glosses"

  });

  $(".product-grid").empty();
  filtered.forEach(function (items) {
    console.log(items)
    display(items)
  });
})


$(".LipBalms").on("click", function (e) {
  e.preventDefault()

  var filtered = kylie.list.filter(function (items) {
    console.log(items.category);
    return items.category === "Lip Balms"
  });

  $(".product-grid").empty();
  filtered.forEach(function (items) {
    console.log(items)
    display(items)
  });
})

$(".LipBlushes").on("click", function (e) {
  e.preventDefault()

  var filtered = kylie.list.filter(function (items) {
    console.log(items.category);
    return items.category === "Lip Blushes"
  });

  $(".product-grid").empty();
  filtered.forEach(function (items) {
    console.log(items)
    display(items)
  });
})


$(".LipCrayons").on("click", function (e) {
  e.preventDefault()

  var filtered = kylie.list.filter(function (items) {
    console.log(items.category);
    return items.category === "Lip Crayons"
  });

  $(".product-grid").empty();
  filtered.forEach(function (items) {
    console.log(items)
    display(items)
  });
})


$(".LipLiners").on("click", function (e) {
  e.preventDefault()

  var filtered = kylie.list.filter(function (items) {
    console.log(items.category);
    return items.category === "Lip Liners"
  });

  $(".product-grid").empty();
  filtered.forEach(function (items) {
    console.log(items)
    display(items)
  });
})

var lowerSlider = document.querySelector('#lower');
var upperSlider = document.querySelector('#upper');

document.querySelector('#two').value = upperSlider.value;
document.querySelector('#one').value = lowerSlider.value;

var lowerVal = parseInt(lowerSlider.value);
var upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);

  if (upperVal < lowerVal + 4) {
    lowerSlider.value = upperVal - 4;
    if (lowerVal == lowerSlider.min) {
      upperSlider.value = 4;
    }
  }
  document.querySelector('#two').value = this.value
};

lowerSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);
  if (lowerVal > upperVal - 4) {
    upperSlider.value = lowerVal + 4;
    if (upperVal == upperSlider.max) {
      lowerSlider.value = parseInt(upperSlider.max) - 4;
    }
  }
  console.log(document.querySelector('#one').value = this.value);
  document.querySelector('#one').value = this.value
};

$(".price-title").on("click", function (e) {
  e.preventDefault()

  var filtered = kylie.list.filter(function (items) {
    
    return items.price < $("#one")


  });
  $(".product-grid").empty()
  console.log($(".product-grid", "zeaze"))
  filtered.forEach(function (items) {
    console.log(items);
    display(items)
  });

})









// Select the header element
const header = document.querySelector('header');

// Function to handle the scroll event
function handleScroll() {
  if (window.scrollY > 0) {
    // Add a CSS class to hide the background when scrolled down
    header.classList.add('scrolled');
  } else {
    // Remove the CSS class when at the top of the page
    header.classList.remove('scrolled');
  }
}

// Add a scroll event listener to the window
window.addEventListener('scroll', handleScroll);


var kendel = ["photoo/channels4_profile.jpg", "photoo/91f7f4591e61ecf39b1be30e560202b5.jpg", "photoo/kendall-x-kylie-1020x1024.webp"]
var liplook = ["photoo/0801-HP-Banner_Gloss-Drips_Kylie_s-Look_-972-x-972_600x900_1440x1439_ratio_800x.webp", "photoo/KJC_GLD_23_CP_Fall_In_Love_Sweet_Like_Hunny_01_WS.webp", "photoo/PhotoMay102023_24222PMcopy_0b0ed2b6-ab8f-40cd-9249-ba624a923ad0.webp"]
/** ToggleImage just pub */

function toggleImage(imgarr) {
  var counter = 0
  return function () {
    if (counter === imgarr.length - 1) {
      counter = 0
    } else {
      counter++
    }
    $(`.kendel`).attr("src", imgarr[counter])

    console.log(counter);
    console.log(imgarr);
  }

}
console.log($(`.kendel`))
$(`.kendel`).on("click", toggleImage(kendel))

function toggleImagelip(imgarr) {
  var counter = 0
  return function () {
    if (counter === imgarr.length - 1) {
      counter = 0
    } else {
      counter++
    }
    $(`.liplook`).attr("src", imgarr[counter])

    console.log(counter);
    console.log(imgarr);
  }

}

$(`.liplook`).on("click", toggleImagelip(liplook))




$("#searchButton").on("click", function (e) {
  e.preventDefault();

  var value = $("#searchInput").val().toLowerCase();

  var filtered = kylie.list.filter(function (items) {
    console.log(items.name);
    return (
      items.name.toLowerCase().includes(value) || items.category.toLowerCase().includes(value));

  });

  $(".product-grid").empty();
  filtered.forEach(function (items) {
    display(items)
  });
});


































// function toggleImageOnHover(productId) {
//   var productContainer = $(`#${productId}`)
// console.log( productContainer,"productContainer");
//   var imageElement = productContainer.find('.item-image')
// console.log(imageElement,"imageElement");
//   var product = kylie.list.find(item => item.id === productId)
// console.log(product,"product");
//   var counter = 0
//   imageElement.hover(
//       function () {
//           counter = (counter + 1) % product.images.length
//           imageElement.attr('src', product.images[counter])
//           console.log(imageElement,"hove") },
//       function () {
//           counter = 0;
//           imageElement.attr('src', product.images[counter])
//           console.log(imageElement,"hover");  }
//   )
// }
// $('.item-image').each(function () {
//   var productId = $(this).closest('.product-card').attr('id').split()[1];
//   console.log(productId,"productId each");

//   toggleImageOnHover(productId);
// });