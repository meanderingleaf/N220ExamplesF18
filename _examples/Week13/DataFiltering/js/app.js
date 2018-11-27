var applicationData;
var dvClothes = document.querySelector("#clothes");

//load in the clothing 
fetch("data/clothes.json")
    .then((response) => { return response.json() }) //turn the textual data into a object
    .then((jsonData) => {

        //store the application data longterm.
        applicationData = jsonData;
        console.log(applicationData)

        //now we have the data, we're ready to go.
        init();
    })


//sets up this application.
//if you ever see an init funciton, then you can be fairly sure its 
//the FIRST function called in an app.
function init() {
    placeClothes(applicationData.clothes);

    var navItems = document.querySelectorAll(".navItem");
    navItems.forEach((nItem) => {
        nItem.addEventListener("click", onNavClicked);
    })
}

function onNavClicked(event) {

    //get the type of clothing to filter on
    let filterType = event.target.getAttribute("filterType");

    //create a new array with only  the associate type in it.
    let filteredList = applicationData.clothes.filter((item) => {
        return item.type == filterType
    });

    //place the new data on the page.
    placeClothes(filteredList);
}

function placeClothes(clothingCollection) {

    //clean out old data.
    dvClothes.innerHTML = "";

    //place elements on the page
    clothingCollection.forEach((clothingItem,index) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("clothingItem");
        newDiv.setAttribute("size", clothingItem.size);
        newDiv.innerHTML = clothingItem.color + " " + clothingItem.type;
        dvClothes.appendChild(newDiv);

        TweenMax.from(newDiv, 1, { opacity: 0, delay: index * .3, left: 10 });
    })
}