var stroredItemsObj = [];//Stores Items in the shop
var cartItemsObj = [];//Stores Cart Items
var currencyFooter = "(CAD $)";//currency displayer footer storage variable. Changes depending on which dropdown is selecetd 
var priceArray = [];//to store the stores's items'prices so that they can change depending on which dropdown is selected 
var priceCartArray = [];//to store the cart's items'prices so that they can change depending on which dropdown is selected 

//Mangas available in shop
var manga1 = new Store_Item("BL1", "Blue Lock Volume-1", 15.69, 200, 3, "Sports Thriller", 5.99, [], "After a disastrous defeat at the 2018 World Cup, Japan's team struggles to regroup. But what's mising? An absolute ace striker. The Football Union is hell-bent on creating a striker who hungers for goals and thirsts for victory, so Blue Lock -- a rigorous training ground for 300 of Japan's best and brightest youth players -- is created. To survive this battle royale, the last striker standing will have to out-muscle and out-ego everyone who stands in his way!", "img/mangas/bl/vol-1.jpg");
var manga2 = new Store_Item("BL2", "Blue Lock Volume-2", 18.99, 100, 4, "Sports Thriller", 5.99, [], "Yoichi Isagi, one of three hundred high school soccer players is in Team Z--the lowest ranked group in the controversial training facility, Blue Lock, where the aim is to create Japan's best striker. To survive their first round-robin tournament, Isagi's Team Z will need to find a way to use their unique \"weapons,\"  while struggling through a clash of egos. But Isagi grapples to understand what his strength is as a striker...", "img/mangas/bl/vol-2.jpg");
var manga3 = new Store_Item("BL3", "Blue Lock Volume-3", 15.68, 250, 30, "Sports Thriller", 5.99, [], "Savoring the sweet taste of victory against Team Y, Team Z is pumped to face their next opponent in the first selection round-robin tournament--Team W! But cracks begin to show within the shaky bonds of Team Z, and internal fears freeze players in their tracks on the field. In the face of Team W's powerful aces, the Wanima twins, will Team Z be able to come together in time to escape defeat?", "img/mangas/bl/vol-3.jpg");
var manga4 = new Store_Item("BL4", "Blue Lock Volume-4", 15.69, 50,  1, "Sports Thriller", 5.99, [], "It's the final round of the first selection and Team Z needs to win against Team V--the undefeated team of Wing 5--to survive! A triple threat awaits Isagi, including prodigy Seishiro Nagi, who only started playing soccer six months ago. Moreover, Team Z is still one man down after Kuon's brutal betrayal in the previous game. The odds are stacked against them as they enter the pitch, and Isagi and his teammates are becoming painfully aware of how weak they really are. In this end, is it all pointless? Or will desperation triumph over talent?", "img/mangas/bl/vol-4.jpg");
var manga5 = new Store_Item("BL5", "Blue Lock Volume-5", 20.40, 150, 50, "Sports Thriller", 5.99, [], "In the face of Team V and the prodigy Nagi’s overwhelming scoring ability, Team Z has managed to catch up to 3-3 with fifteen minutes remaining. In the midst of this tense environment, all the players seek the “awakening” that will take their skills to the next level… The match against Team V reaches its thrilling conclusion!", "img/mangas/bl/vol-5.jpg");

var manga6 = new Store_Item("HK1", "Haikyuu Volume-1", 9.69, 200, 7, "Sports", 1.99, [], "After losing his first and last volleyball match against Tobio Kageyama, “the King of the Court,” Shoyo Hinata swears to become his rival after graduating middle school. But what happens when the guy he wants to defeat ends up being his teammate?!", "img/mangas/hk/vol-1.jpg");
var manga7 = new Store_Item("HK2", "Haikyuu Volume-2", 9.99, 150, 50, "Sports", 1.99, [], "After proving themselves to be the ultimate combination in their practice match against Kei Tsukishima, Kageyama and Hinata are finally allowed to join the club! Hinata’s true power—to perfectly time his spikes with his eyes closed—is awakened, and nothing can seem to stop this crazy setter-spiker duo. Now their skills are about to be put to the test at a practice game against one of Kageyama’s former teammates from middle school, Tooru Oikawa.", "img/mangas/hk/vol-2.jpg");
var manga8 = new Store_Item("HK3", "Haikyuu Volume-3", 10.20, 90, 3, "Sports", 1.99, [], "Karasuno has successfully defeated Tohru Oikawa and Aoba Johsai in their practice match, but the team’s future doesn’t look so bright. The match uncovered serious holes in Karasuno’s defense, which would be fatal in a real game! What they need is a defense expert, a libero, to cover their holes for them. It turns out Karasuno does have a libero named Yu Nishinoya, but he was suspended for one week for violent behavior! And he’s even shorter than Hinata!", "img/mangas/hk/vol-3.jpg");
var manga9 = new Store_Item("HK4", "Haikyuu Volume-4", 9.30, 70,  10, "Sports", 1.99, [], "The training camp kicks off with a bang! Hinata and his teammates train their hearts out in preparation for the practice game against Nekoma, but they’ll need to polish their receiving skills if they want to win. After all their hard work, the moment they’ve all been waiting for finally arrives—the revival of the long-standing rivalry between the Cats and the Crows! And Nekoma’s starting setter looks vaguely familiar…", "img/mangas/hk/vol-4.jpg");
var manga10 = new Store_Item("HK5", "Haikyuu Volume-5", 12.69, 200, 27, "Sports", 1.99, [], "After Karasuno loses all of their practice games against Nekoma, the cracks in Karasuno’s teamwork are more apparent than ever! With Inter-High qualifiers looming over them, Hinata, Kageyama and the rest of the team will have to work hard to be able to stand a chance. But with two of the top four schools in their qualifier block, Karasuno’s chances look slim. How will they overcome this challenge when just thinking about their second opponent, Date Tech, makes Karasuno’s ace, Asahi Azumane, tremble in fear?", "img/mangas/hk/vol-5.jpg");

var manga11 = new Store_Item("MHA1", "My Hero Academia Volume-1", 10.69, 200, 3, "Shonen Manga", 2.99, [], "Middle school student Izuku Midoriya wants to be a hero more than anything, but he hasn’t got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all, gives him a chance to change his destiny…", "img/mangas/mha/vol-1.jpg");
var manga12 = new Store_Item("MHA2", "My Hero Academia Volume-2", 9.99, 100, 10, "Shonen Manga", 2.99, [], "Getting into U.A. High School was difficult enough, but it was only the beginning of Midoriya’s long road toward becoming a superhero. The new students all have amazing powers, and although Midoriya has inherited All Might’s abilities, he can barely control them. What’s more, the first-year students are told they will have to compete just to avoid being expelled!", "img/mangas/mha/vol-2.jpg");
var manga13 = new Store_Item("MHA3", "My Hero Academia Volume-3", 12.39, 200, 3, "Shonen Manga", 2.99, [], "A sinister group of villains has attacked the first-year U.A. students, but their real target is All Might. It’s all that Midoriya and his classmates can do to hold them off until reinforcements arrive. All Might joins the battle to protect the kids, but as his power runs out, he may be forced into an extremely dangerous bluff!", "img/mangas/mha/vol-3.jpg");
var manga14 = new Store_Item("MHA4", "My Hero Academia Volume-4", 8.74, 200, 5, "Shonen Manga", 2.99, [], "The U.A. High sports festival is a chance for the budding heroes to show their stuff and find a superhero mentor. The students have already struggled through a grueling preliminary round, but now they have to team up to prove they’re capable of moving on to the next stage. The whole country is watching, and so are the shadowy forces that attacked the academy…", "img/mangas/mha/vol-4.jpg");
var manga15 = new Store_Item("MHA5", "My Hero Academia Volume-5", 15.69, 77, 30, "Shonen Manga", 2.99, [], "The final stages of the U.A. High sports festival promise to be explosive, as Uraraka takes on Bakugo in a head-to-head match! Bakugo never gives anyone a break, and the crowd holds its breath as the battle begins. The finals will push the students of Class 1-A to their limits and beyond!", "img/mangas/mha/vol-5.jpg");

var manga16 = new Store_Item("TPN1", "The Promised Neverland Volume-1", 12.69, 200, 8, "Thriller", 3.99, [], "Emma, Norman and Ray are the brightest kids at the Grace Field House orphanage. And under the care of the woman they refer to as “Mom,” all the kids have enjoyed a comfortable life. Good food, clean clothes and the perfect environment to learn—what more could an orphan ask for? One day, though, Emma and Norman uncover the dark truth of the outside world they are forbidden from seeing.", "img/mangas/tpn/vol-1.jpg");
var manga17 = new Store_Item("TPN2", "The Promised Neverland Volume-2", 12.69, 200, 70, "Thriller", 3.99, [], "Behind the facade of a happy orphanage, the children of Grace Field House are secretly being raised as food for demons! Determined to save themselves and the other kids, Emma, Norman and Ray begin planning an escape. But their caretaker, “Mom,” has brought in extra help to keep the orphans in line…", "img/mangas/tpn/vol-2.jpg");
var manga18 = new Store_Item("TPN3", "The Promised Neverland Volume-3", 12.69, 200, 3, "Thriller", 3.99, [], "In order to escape the orphanage where they are being raised as food for demons, Emma, Norman and Ray begin recruiting allies. But convincing the other children to believe them may not be an easy task.", "img/mangas/tpn/vol-3.jpg");
var manga19 = new Store_Item("TPN4", "The Promised Neverland Volume-4", 12.69, 200, 30, "Thriller", 3.99, [], "Just as the plan to escape the orphanage is coming together, Mom viciously breaks Emma’s leg and reveals that Norman’s days are numbered. Emma and Ray will do anything to save their friend from being eaten by the demons, but can they outsmart their devious foe?", "img/mangas/tpn/vol-4.jpg");
var manga20 = new Store_Item("TPN5", "The Promised Neverland Volume-5", 12.69, 200, 80, "Thriller", 3.99, [], "As Grace Field House goes up in flames, Emma and the other children make their run for freedom. With Mom refusing to give up and an army of demons at her call, this escape from captivity won’t be easy. Just what will Emma have to sacrifice to pull it off…?", "img/mangas/tpn/vol-5.jpg");


//Contained shop date use this to be structured
function Store_Item(Id, Name, Price, QuantityOnHand, MaxPerCust, Category, CostOfShip, Reviews, Description, Image){
    this.Id = Id;//string
    this.Name = Name;//string
    this.Price = Price;//number
    this.QuantityOnHand = QuantityOnHand;//number
    this.MaxPerCust = MaxPerCust;//number
    this.Category = Category; //string
    this.CostOfShip = CostOfShip;//number
    this.Reviews = Reviews;//array
    this.Description = Description;//string
    this.Image = Image; //string
}

//Specification abt whats in the cart currently
function Cart_Item(Id, Price, Quantity, Shipping){
    this.Id = Id;//string
    this.Price = Price;//number
    this.Quantity = Quantity;//number
    this.Shipping = Shipping;//number
}

//Stores reviews and ranting made on a specific product
function Review_Item(Review, Rating){
    this.Review = Review;//string
    this.Rating = Rating;//number
}

function mainPageLoad(){
    var currentDay = new Date();
    stroredItemsObj = stroredItemsObj.concat(manga1, manga2, manga3, manga4, manga5, manga6, manga7, manga8, manga9, manga10, manga11, manga12, manga13, manga14, manga15, manga16, manga17, manga18, manga19, manga20);
    document.getElementById("date_time").innerHTML = currentDay.toString();
    for(i=0; i<stroredItemsObj.length; i++){
        priceArray.push(stroredItemsObj[i].Price);
    }
    display_Store_Items();
    display_Cart_Items();
    display_Items_Details();
    
}

function display_Store_Items(){
    
    var selectedDepartment = document.getElementById("displayGenreFilter");
	
    var strArrayLng = stroredItemsObj.length;
    var displayALL = [];
    var rowNum;
    var tbl = document.getElementById("product_table");
    
    //event listeners 
    //Categoty changes depending on when a different option is selecetd
    selectedDepartment.addEventListener('change', function handleChange(event) { 

        generateTable();
    });
    //Generates a dynamic table
    function generateTable() {
        // creates a <table> element and a <tbody> element
            tbl.innerHTML = '';
            var k = 0;
            var optionSelc = selectedDepartment.options[selectedDepartment.selectedIndex].value;//To get the selected option in a dropbox 
            //Checks which option  is selected
            if(optionSelc === "All"){
                displayALL = [];
                rowNum = 4;
                displayALL = stroredItemsObj;
            }
            else if(optionSelc === "SPORTS"){
                rowNum = 1;
                displayALL = [];

                for(i=0; i<strArrayLng; i++){

                    if(stroredItemsObj[i].Category === "Sports"){
                        displayALL.push(stroredItemsObj[i]);
                    }
                }
            }
            else if(optionSelc === "THRILLER"){
                rowNum = 1;
                displayALL = [];
                for(i=0; i<strArrayLng; i++){
                    if(stroredItemsObj[i].Category === "Thriller"){
                        displayALL.push(stroredItemsObj[i]);
                    }
                }
            }
            else if(optionSelc === "SHONEN MANGA"){
                rowNum = 1;
                displayALL = [];
                for(i=0; i<strArrayLng; i++){
                    if(stroredItemsObj[i].Category === "Shonen Manga"){
                        displayALL.push(stroredItemsObj[i]);
                    }
                }
            }
            else if(optionSelc === "SPORTS THRILLER"){
                rowNum = 1;
                displayALL = [];
                for(i=0; i<strArrayLng; i++){
                    if(stroredItemsObj[i].Category === "Sports Thriller"){
                        displayALL.push(stroredItemsObj[i]);
                    }
                }
            }
            //Creates the rows and cells
            for(i=0; i < rowNum; i++){
                //creates row
                var row = document.createElement("tr");
                for(j=0; j<= 4; j++){

                    cell = document.createElement("td");
                    cell.style.maxWidth = "300rem";
                    cell.setAttribute("width",200);
                    // creates an image so we can put it in a cell
                    var img = document.createElement("IMG");
                    var imageSrc = displayALL[k].Image;
                    
                    img.setAttribute("src",imageSrc);
                    img.setAttribute("height",300);
                    img.setAttribute("width",300);
                    //creates a text containing the name of the current manga it is on that will later be put in a cell
                    var mangaTitle = displayALL[k].Name;
                    var mangaTitleCell = document.createTextNode("                    Name: " + mangaTitle+ "   ");
                    //mangaTitleCell.style();
                    
                    //creates a text containing the id of the current manga it is on that will later be put in a cell
                    var mangaId = displayALL[k].Id;
                    var mangaIdCell = document.createTextNode("ID: "+ mangaId);
                    
                    //creates a text containing the price of the current manga it is on that will later be put in a cell
                    var mangaPrice = displayALL[k].Price;
                    var mangaPriceCell = document.createTextNode("Price: " + mangaPrice.toFixed(2) + currencyFooter);

                    //creates a text containing the quantity available in stock of the current manga it is on that will later be put in a cell
                    var mangaQTYoNHand = displayALL[k].QuantityOnHand;
                    var mangaQtyOHCell = document.createTextNode("Quantity on Hand: "+ mangaQTYoNHand);

                    //creates a text containing the maximum per customer amount of the current manga it is on that will later be put in a cell
                    var mangaMaxPerCost = displayALL[k].MaxPerCust;
                    var mangaMPCCell = document.createTextNode("Max per Customer: " + mangaMaxPerCost);

                    //creates what each cells contains
                    cell.appendChild(img);
                    cell.appendChild(mangaIdCell);
                    cell.appendChild(mangaTitleCell);
                    cell.appendChild(mangaPriceCell);
                    cell.appendChild(mangaQtyOHCell);
                    cell.appendChild(mangaMPCCell);
                    row.appendChild(cell);
                    k++;
            }
            tbl.appendChild(row);
        } 
    }
    generateTable(); 
    var selectedCurrency = document.getElementById("currencySelector");
    selectedCurrency.addEventListener('change', function handleChange(event) {

        currencySection();
    });
    //When theadd button is clicked the fuction is called
    var pressAdd = document.getElementById("addBtn");
    pressAdd.addEventListener("click", function(){
        addToCart();
    });
    //When theadd button is clicked the fuction is called
    var pressReview =  document.getElementById("review_Btn");
    pressReview.addEventListener("click", function(){
        display_Items_Details();
    })

}
//Displays the iteme present in  the cart
function display_Cart_Items(){
    var pressDelete = document.getElementById("deleteBtn");
    var crtArrayLng = cartItemsObj.length;
    var rowNum;
    var displayCartTotal = ("Items Subtotal: 0.00" + "<br>" + "Estimated Shipping: 0.00" + "<br>" + "SubTotal: 0.00" + "<br>" + "Estimated Tax: 0.00" + "<br>" + "Order Total: 0.00");
    var tbl = document.getElementById("cart_table");

    //If the cart is zero display this
    if(crtArrayLng == 0){
        document.getElementById("cartOutput").innerHTML = "No Items in Cart";
        document.getElementById("cartCheckout").innerHTML = displayCartTotal;
    }
        
    var rows = tbl.rows;
    var i = rows.length;
    while (--i) {
        rows[i].parentNode.removeChild(rows[i]);
        // or
        // table.deleteRow(i);
        }

    if(cartItemsObj.length > 0){
        document.getElementById("cartOutput").innerHTML = '';
        document.getElementById("cartCheckout").innerHTML = cartTotal();

        function generateTableCart(){
                rowNum = cartItemsObj.length;
                
                for(i=0; i < rowNum; i++){
                    var row = document.createElement("tr");

                    for(j=0; j<= 4; j++){
                        if(j==0){
                            cell = document.createElement("td");
                            var mangaId = cartItemsObj[i].Id;
                            var mangaIdCell = document.createTextNode(mangaId);
                            cell.appendChild(mangaIdCell);
                            row.appendChild(cell);
                        }

                        else if(j==1){
                            cell = document.createElement("td");
                            var mangaPrice = cartItemsObj[i].Price;
                            var mangaPriceCell = document.createTextNode(mangaPrice.toFixed(2));    
                            cell.appendChild(mangaPriceCell);
                            row.appendChild(cell);
                        }

                        else if(j==2){
                            cell = document.createElement("td");
                            var mangaQTY = cartItemsObj[i].Quantity;
                            var mangaQTYCell = document.createTextNode(mangaQTY);
                            cell.appendChild(mangaQTYCell);
                            row.appendChild(cell);
                        }
                        else if(j==3){
                            cell = document.createElement("td");
                            var mangaSubtotal = cartItemsObj[i].Price * cartItemsObj[i].Quantity;
                            var mangaSubtotalCell = document.createTextNode(mangaSubtotal.toFixed(2));
                            cell.appendChild(mangaSubtotalCell);
                            row.appendChild(cell);
                        }

                    }
                    tbl.appendChild(row);
                }
            }generateTableCart();//generates the cart table 
            cartTotal();//calls the cart table info function 
        }
        pressDelete.addEventListener("click", function(){
        removeFromCart();
    })

}
//displays the cart infos to the cart output area
function cartTotal(){
    var cartLength = cartItemsObj.length;
    var total = 0;
    var subtotalCart = 0;
    var taxeCart = 0;
    var cartShipping = 0;
    for(i=0; i<cartLength; i++){
        var cartPrice = cartItemsObj[i].Price
        var cartQTY = cartItemsObj[i].Quantity;
        var ItemCost = cartPrice * cartQTY;
        var Itemshipping = stroredItemsObj[i].CostOfShip;
        var taxRate = 0.13;
        var taxeValue = ItemCost * taxRate;
        var totalAndTax = ItemCost + taxeValue;
        cartShipping = cartShipping + Itemshipping;
        taxeCart = taxeCart + taxeValue;
        subtotalCart =  subtotalCart + ItemCost;
        total = total + totalAndTax;
    }
    var displayCartTotal = ("Items Subtotal: " + subtotalCart.toFixed(2) + currencyFooter + "<br>" + "Estimated Shipping: " + cartShipping + currencyFooter + "<br>" + "SubTotal:$ " + subtotalCart.toFixed(2) + currencyFooter + "<br>" + "Estimated Tax: " + taxeCart.toFixed(2) + "<br>" + "Order Total: " + total.toFixed(2) + currencyFooter);
    document.getElementById("cartCheckout").innerHTML = displayCartTotal;
}

//Changes the currency depending on what the user has selected as currency at the top of the page's drop down. Default is Canadian dollards
function currencySection(){
    var selectedDepartment = document.getElementById("currencySelector");
    var strArrayLng = stroredItemsObj.length;
    var cartLength = cartItemsObj.length;

        console.log("loop1");
        function convertPrice(Store_Item){
            var optionSelc = selectedDepartment.options[selectedDepartment.selectedIndex].value;//To get the selected option in a dropbox
            console.log("loop If ");

            if(optionSelc === "CAD"){
                console.log("CAN");
                for(i=0; i< strArrayLng; i++){
                    console.log("CAN 2");
                    stroredItemsObj[i].Price = priceArray[i];
                    currencyFooter = "(CAD $)";
                }
                for(i=0; i < cartLength; i++){
                    cartItemsObj[i].Price = priceCartArray[i];
                }
            }            
            else if(optionSelc === "USD"){
                console.log("USD");
                for(i=0; i< strArrayLng; i++){
                    console.log("USD2" + i);
                    stroredItemsObj[i].Price = priceArray[i] * 0.73;
                    console.log(stroredItemsObj.Price);
                    currencyFooter = "(USD $)";
                }
                for(i=0; i < cartLength; i++){
                    cartItemsObj[i].Price = priceCartArray[i] * 0.73;
                }
            }
            else if(optionSelc === "JAP"){
                console.log("JAP");
                for(i=0; i< strArrayLng; i++){
                    console.log("JAP2");
                    stroredItemsObj[i].Price = priceArray[i] * 100.09;
                    currencyFooter = "(YEN ¥)";
                }
                for(i=0; i < cartLength; i++){
                    cartItemsObj[i].Price = priceCartArray[i] * 100.09;
                }
            }
        } 
        convertPrice();
        display_Store_Items();
        display_Cart_Items();
        
    }
//enables the user to add they items selected with their ids and add their quantity
function addToCart(){
    
    var item_id = document.getElementById("item_id").value;
    var selectedQty = document.getElementById("item_qty").value;
    selectedQty = parseInt(selectedQty);
    var cartLength = cartItemsObj.length;
    var strOjtLeng = stroredItemsObj.length;
    var insideCart = false;

    if(validation()){

        for(i=0; i<strOjtLeng; i++){
            
            var cartItemId = stroredItemsObj[i].Id;
            
            if(cartItemId == item_id){
                
                
                if(cartLength > 0){
                    

                    for(j=0; j<cartLength;j++){

                        if(cartItemsObj[j].Id == cartItemId){
                            insideCart = true
                            stroredItemsObj[i].QuantityOnHand = stroredItemsObj[i].QuantityOnHand - selectedQty;
                            
                            var qtyInCart =  cartItemsObj[j].Quantity;
                            var totalQty = selectedQty + qtyInCart

                            if(totalQty  < stroredItemsObj[i].MaxPerCust){
                                cartItemsObj[j].Quantity = totalQty;
                                stroredItemsObj[i].QuantityOnHand = stroredItemsObj[i].QuantityOnHand - selectedQty;
                                
                            }
                            else{
                                console.log("foud");
                                cartItemsObj[j].Quantity = stroredItemsObj[i].MaxPerCust;
                                stroredItemsObj[i].QuantityOnHand = stroredItemsObj[i].QuantityOnHand - selectedQty;

                            }
                    
                        }
                    }
                    }

                    if(insideCart === false){
                        
                        var cartItemQnt;

                        if(selectedQty >stroredItemsObj[i].MaxPerCust){

                            cartItemQnt = stroredItemsObj[i].MaxPerCust;
                        }
                        else{
                            cartItemQnt = selectedQty

                        }

                        var cartItemPrice = stroredItemsObj[i].Price;
                        var subTotal = cartItemPrice * cartItemQnt;
                        var newCartItem = new Cart_Item(cartItemId, cartItemPrice, cartItemQnt,subTotal);
                        cartItemsObj.push(newCartItem);
                        priceCartArray.push(cartItemPrice);
                        stroredItemsObj[i].QuantityOnHand = stroredItemsObj[i].QuantityOnHand - selectedQty;
                    }
                    document.getElementById("item_id").value = '';
                    document.getElementById("item_qty").value = '';
            }
        }
        display_Cart_Items();
    }
}
//Enables the client to remove items with their ids and by their quantity
function removeFromCart(){
    var item_id = document.getElementById("item_id").value;
    var selectedQty = document.getElementById("item_qty").value;
    selectedQty = parseInt(selectedQty);
    var cartLength = cartItemsObj.length;
    
    if(cartLength > 0){
        console.log("loop 1");
        for(i=0; i<cartLength; i++){
        if(cartItemsObj[i].Id == item_id){
            console.log("loop 2");
            if(cartItemsObj[i].Quantity > selectedQty){

                for(j=0 ; j<stroredItemsObj.length; j++){
                    
                    if(stroredItemsObj[j].Id == item_id){
                        console.log("beforee" + stroredItemsObj[j].QuantityOnHand);
                        stroredItemsObj[j].QuantityOnHand = stroredItemsObj[j].QuantityOnHand + selectedQty;
                        console.log("after" + stroredItemsObj[j].QuantityOnHand);
                    }
                }
                cartItemsObj[i].Quantity = cartItemsObj[i].Quantity - selectedQty;
                document.getElementById("item_id").value = '';
                document.getElementById("item_qty").value = '';
            }
            else if((cartItemsObj[i].Quantity < 0) || (cartItemsObj[i].Quantity <= selectedQty)){

                for(j=0 ; j<stroredItemsObj.length; j++){
                    if(stroredItemsObj[j].Id == item_id){
                        stroredItemsObj[j].QuantityOnHand = stroredItemsObj[j].QuantityOnHand + selectedQty;
                    }
                }
                cartItemsObj.splice(i,1); 
                document.getElementById("item_id").value = '';
                document.getElementById("item_qty").value = '';
                priceCartArray.splice(i,1);
            }
            
        }
    }
    } display_Cart_Items();

}
//Ads reviews to items ids entred
function reviewItems(){
    var itemId = document.getElementById("product_id").value;
    var itemReview = document.getElementById("item_review").value;
    var itemRate = document.getElementById("rating").value;
    itemRate = parseInt(itemRate);

    for(i=0; i<stroredItemsObj.length; i++){
        if(stroredItemsObj[i].Id == itemId){
            if((itemRate <= 5) && (itemRate >= 0)){
                console.log("RevieItems");
                var newReview = new Review_Item(itemReview, itemRate);
                stroredItemsObj[i].Reviews.push(newReview);
                document.getElementById("product_id").value = '';
                document.getElementById("item_review").value = '';
                document.getElementById("rating").value = '';
                alert("Your review was entered! :)");
            }
            else{
                if(itemRate >5){
                    alert("We understand that you loved this book, but you can ony rate up till 5! Thank you though :)");
                document.getElementById("product_id").value = '';
                document.getElementById("item_review").value = '';
                document.getElementById("rating").value = '';
                }
                else if(itemRate < 0){
                    alert("We are sorry that you dislike this book, but you can only rate it down till 0...");
                    document.getElementById("product_id").value = '';
                    document.getElementById("item_review").value = '';
                    document.getElementById("rating").value = '';
                }
            }
            
        }
    }

}
//Validates the values entered
function validation(){
    //getting all the values that wil be entered by the user
    var item_id = document.getElementById("item_id");
    var item_qty = document.getElementById("item_qty");

     //check if Id was entered
     if(item_id && item_id.value){
        document.getElementById("item_id").style.backgroundColor = "white";
        document.getElementById("addIDValidationMessage").innerHTML = '';

        //checks id id exists 
        for(i=0; i<stroredItemsObj.length; i++){
            //if it does
            if(stroredItemsObj[i].Id == item_id.value){
                document.getElementById("item_qty").style.backgroundColor = "white";
                document.getElementById("addIDValidationMessage").innerHTML = '';
                //if quantity was entered
                if(item_qty && item_qty.value){
                    document.getElementById("item_qty").style.backgroundColor = "white";
                    document.getElementById("addQtyValidationMessage").innerHTML = '';
                    //checks if quantity is less than 1
                    if(item_qty.value < 1){
                        document.getElementById("item_qty").style.backgroundColor = "white";
                        document.getElementById("addQtyValidationMessage").innerHTML = "The quantity entered is too low ):";
                        document.getElementById("addQtyValidationMessage").style.color = "yellow"; 
                        return false;
                    }//if quantity entered is greater than the max amount per customer
                    else if(item_qty.value > stroredItemsObj[i].MaxPerCust){
                        document.getElementById("item_qty").style.backgroundColor = "white";
                        document.getElementById("addQtyValidationMessage").innerHTML = "Dear client, the selected item's quantity has exceed the maximum amount allowed per customers. Due to this only the maximum number allowed was added to the cart.";
                        document.getElementById("addQtyValidationMessage").style.color = "purple";
                        return true;
                    }//If quantity entered is less than quantity in hand(in store)
                    else if(item_qty.value < stroredItemsObj[i].QuantityOnHand){
                        document.getElementById("item_qty").style.backgroundColor = "white";
                        document.getElementById("addQtyValidationMessage").innerHTML = "Item is still available in store to add!";
                        document.getElementById("addQtyValidationMessage").style.color = "orange";
                        return true;
                    }
                    return true;
                }//if quatity wasn't entered
                else{
                    document.getElementById("item_qty").style.backgroundColor = "salmon";
                    document.getElementById("addQtyValidationMessage").innerHTML = "You need to enter a value!!!";
                    document.getElementById("addQtyValidationMessage").style.color = "Red"; 
                    return false;
                }
            }
        }//if id doesn't exist
            document.getElementById("item_id").style.backgroundColor = "sky";
            document.getElementById("addIDValidationMessage").innerHTML = "The ID is not valid ):";
            document.getElementById("addIDValidationMessage").style.color = "blue"; 
            return false;
        
    }//if id wasn't entered
    else{
        document.getElementById("item_id").style.backgroundColor = "salmon";
        document.getElementById("addIDValidationMessage").innerHTML = "You need to enter a value!!!";
        document.getElementById("addIDValidationMessage").style.color = "Red"; 
        return false;
    }

}
//Alert thedetails about a specific item
function display_Items_Details(){
    var pressReview = document.getElementById("reviewBtn");
    var itemId = document.getElementById("item_id").value;
    var sumofRating = 0;
    var mangaReview = "";

        for(i=0; i<stroredItemsObj.length; i++){
            if(stroredItemsObj[i].Id === itemId){
                var mangaId = stroredItemsObj[i].Id;
                var mangaName = stroredItemsObj[i].Name;
                var mangaPrice = stroredItemsObj[i].Price;
                var mangaQTYOnHand = stroredItemsObj[i].QuantityOnHand;
                var mangaMaxPerCost = stroredItemsObj[i].MaxPerCust;
                var mangaCategory = stroredItemsObj[i].Category;
                var mangaCostOfShip = stroredItemsObj[i].CostOfShip;
                var mangaDescrip = stroredItemsObj[i].Description;

                for(j=0; j< stroredItemsObj[i].Reviews.length; j++){
                    var rating = stroredItemsObj[i].Reviews[j].Rating;
                    var sumofRating  = sumofRating + rating;

                    var getReview = stroredItemsObj[i].Reviews[j].Review;
                    mangaReview = "\n" + mangaReview + "Review " + (j + 1) + ": " + getReview + "\n";

                }
                var avgRating = sumofRating / stroredItemsObj[i].Reviews.length;

                alert("Item's Id: " + mangaId + "\n" + "Item's Name: " + mangaName + "\n" + "Item's Price: " + mangaPrice + "\n" + "Item's Quantity on Hand: " + mangaQTYOnHand + "\n" + "Item's Max per Customer: " + mangaMaxPerCost + "\n" + "Item's Category: " + mangaCategory + "\n" + "Item's Cost of Shipping: " + mangaCostOfShip + "\n" + "Item's Description: " + mangaDescrip + "\n" + "Item's Reviews: " + mangaReview + "\n" + "Average Rating: " + avgRating);
            }
        }

    pressReview.addEventListener("click", function(){
        console.log("DissRevieItems");
        reviewItems();
    });
}


mainPageLoad();

