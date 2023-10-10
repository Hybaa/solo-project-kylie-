/*class*/
function MakeStore(name) {
    return {
      name,
      list: [],
      makeVinyl: makeVinyl,
      displayItems,
      removeItem,
      updateItem,
      sortByPrice,
      sortByDate,
    };
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
  function makeVinyl(name, price, category, images) {
    var data = {
      price,
      name,
      category,
      images,
      date: new Date().toLocaleString(),
      id: id(),
    };
    this.list.push(data);
    return data;
  }
  /**initiating the class */
  var vinylShop = MakeStore("Houssy Records");
  
  /**creating data using our factory function */
  vinylShop.makeVinyl("bob marley", 99.9, "reggie", [
    "https://m.media-amazon.com/images/I/918LkEs4w2L._UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/71UNTLTCD8L._UF1000,1000_QL80_.jpg",
  ]);
  
  vinylShop.makeVinyl("nancy", 50000, "pop", [
    "https://merchbar.imgix.net/product/vinylized/upc/00/5099926400013.jpg?q=40&auto=compress,format&w=1400",
    "https://img.broadtime.com/418459199985:500.webp",
  ]);
  
  vinylShop.makeVinyl("frank sinatra", 20, "classic", [
    "https://target.scene7.com/is/image/Target/GUEST_4b85b5cd-6973-4a90-bf31-f6ca5a549a4f?wid=488&hei=488&fmt=pjpeg",
    "https://m.media-amazon.com/images/I/61pV1CjxxIL._UF1000,1000_QL80_.jpg",
  ]);
  vinylShop.makeVinyl("om kalsoum", 11, "classic", [
    "https://www.popsike.ch/pix/20160718/252466405975.jpg",
    "https://www.popsike.ch/pix/20160417/201562828416.jpg",
  ]);
  
  /** displaying one item */
  function display(item) {
    var id = item.id;
    $("#shop").append(`
    <div class = item id = item${id}>
      <h2 class = title id = title${id}>${item.name}</h2>
      <img class = image id = ${id} src=${item.images[0]} alt = ${item.images[1]} />
      <p class = cat id = cat${id}>${item.category}</p>
      <p class = price id = price${id} >price ${item.price} $</p>
    </div>
    `);
  }
  
  /** displaying all of the items through iteration */
  function displayItems() {
    $("#shop").empty();
    for (var i = 0; i < this.list.length; i++) {
      display(this.list[i]);
    }
  }
  
  vinylShop.displayItems();
  
  /**deleting items */
  
  function removeItem(id) {
    this.list = this.list.filter(function (item, index) {
      return item.id !== id;
    });
    $(`#item${id}`).remove();
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
  
  function sortByPrice() {
    vinylShop.list.sort(function (a, b) {
      return a.price - b.price;
    });
  
    vinylShop.displayItems();
  }
  
  function sortByDate() {
    vinylShop.list
      .sort(function (a, b) {
        return a.date - b.date;
      })
      .reverse();
    vinylShop.displayItems();
  }
  
  /** togglement de l'image */
  // $("#image" + "v1.id");
  
  $(".image").click(function () {
    var id = this.id;
    console.log(id);
    var src = this.src;
    var alt = this.alt;
    $(`#${id}`).attr("src", alt);
    $(`#${id}`).attr("alt", src);
  });
  
  // $(`#${0}`).on("click", toggle);
  
  // console.log();
  // function toggleImage(){
  //   var context = this
  // }
  // $(".image").on("click", function () {
  //   var id = this.id;
  //   console.log(id);
  // });
  
  $("#price").on("click", sortByPrice);
  
  $("select").on("change", function () {
    var value = $(this).val();
    console.log(value);
    var filtered = vinylShop.list.filter(function (item) {
      return item.category === value;
    });
    $("#shop").empty();
    filtered.forEach(function (item) {
      display(item);
    });
  });
  
  $("#cts").on("click", function () {
    var value = $("#search").val();
    console.log(value);
    var filtered = vinylShop.list.filter(function (item) {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    $("#shop").empty();
    filtered.forEach(function (item) {
      display(item);
    });
  });



  