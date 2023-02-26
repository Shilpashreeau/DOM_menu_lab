//Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector("main");
console.log(mainEl);

//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

//Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");
//or mainE1.className="flex-ctr"

//Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);

//Set the height topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

//Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = "#0e9aa7";

//Add a class of flex-around to topMenuEl
topMenuEl.classList.add("flex-around");

//Copy the following data structure to the top of script.js:
/*Iterate over the entire menuLinks array and for each "link" object:

Create an <a>element.
On the new element, add an href attribute with its value set to the href property of the "link" object.
Set the new element's content to the value of the text property of the "link" object.
Append the new element to the topMenuEl element.*/
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

for (link of menuLinks) {
  //Create an <a>element.
  const anchorTag = document.createElement("a");

  anchorTag.setAttribute("href", link.href);

  anchorTag.textContent = link.text;
  //console.log(anchorTag);
  topMenuEl.appendChild(anchorTag);
}

//Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

const subMenuEl = document.getElementById("sub-menu");

//Set the height subMenuEl element to be 100%.
subMenuEl.style.height = "100%";

//Set the background color of subMenuEl to the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = "#3da4ab";

//Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

//Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

//Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = "0";

//Update the menuLinks array in script.js to this:
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//Select and cache the all of the <a>elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('#top-menu > a');
console.log(topMenuLinks);

//Declare a global showingSubMenu variable and initialize it to false;
let showingSubMenu = false;

//Attach a delegated 'click' event listener to topMenuEl.
//The first line of code of the event listener function should call the event object's preventDefault()method.
//The second line of code function should immediately return if the element clicked was not an <a> element.
topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  //console.dir(e.target);
  //console.log( e.target.tagName.toLowerCase());
  if (e.target.tagName !== "A") {
    return;
  }
   
  //console.log the content of the <a>to verify the handler is working.
   console.log(e.target.textContent);


  /*Next in the event listener, if the clicked <a>link has a class of active:
Remove the active class from the clicked <a>element.
Set the showingSubMenu to false.
Set the CSS top property of subMenuEl to 0.
return to exit the handler.*/

  if (e.target.classList.contains("active")) {
    console.log(e.target);
    e.target.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  /*Next, the event listener should remove a class name of active from each <a>element in topMenuLinks- whether the active class exists or not.*/

  topMenuLinks.forEach(e => {
    e.classList.remove("active");
  });
  //Next, the event listener should add a class name of active to the <a>element that was clicked.
  e.target.classList.add("active");
  /*Set showingSubMenu to true if the clicked <a>element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.*/
  let text = e.target.textContent;
  let menuLink = menuLinks.find(link => text.toLowerCase() === link.text.toLowerCase());
  console.dir(e.target);
  console.log(menuLink);
  if (menuLink.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }
   /*If showingSubMenu is true:

Call a buildSubMenu function passing to it the subLinks array for the clicked <a>element.
Set the CSS top property of subMenuEl to 100%.
Otherwise (showingSubMenu is false):

Set the CSS top property of subMenuEl to 0.*/

  if (showingSubMenu) {
    buildSubMenu(menuLink.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = 0;
  }
})
/*Code the buildSubMenu function so that it:

Clears the contents of subMenuEl.
Iterates over the subLinks array passed as an argument; and for each "link" object:

Create an <a>element.
On the new element, add an href attribute with its value set to the href property of the "link" object.
Set the new element's content to the value of the text property of the "link" object.
Append the new element to the subMenuEl element.*/

  function buildSubMenu(subLinksArr) {
    subMenuEl.innerHTML = "";
    subLinksArr.forEach((subLink) => {
      let anchorTag = document.createElement("a");
      anchorTag.setAttribute("href", subLink.href);
      anchorTag.textContent = subLink.text;
      subMenuEl.append(anchorTag);
    });
  }

  /* Attach a delegated 'click' event listener to subMenuEl.

The first line of code of the event listener function should call the event object's preventDefault()method.

The second line of code function should immediately return if the element clicked was not an <a>element.

console.log the content of the <a>to verify the handler is working.*/

  subMenuEl.addEventListener("click", (e) => {
    
    e.preventDefault();
    if (e.target.tagName.toLowerCase() !== "a") return;

    console.log("Submenu target of click:");
    console.log(e.target);

    // Set showingSubMenu to false.
    showingSubMenu = false;
    //Set the CSS top property of subMenuEl to 0.
    subMenuEl.style.top = 0;

    // Remove the class name of active from each <a>element in topMenuLinks- whether the active class exists or not.
    topMenuLinks.forEach(el => {
      // console.log(el)
      el.classList.remove("active");
    });

    // Update the contents of mainEl to the contents of the <a>element, within an <h1>, clicked within subMenuEl.
    mainEl.innerHTML = "<h1>" + e.target.textContent + "</h1>";

    // If the ABOUT link is clicked, an <h1>about</h1>should be displayed.
  });

