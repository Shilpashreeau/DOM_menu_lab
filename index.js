// Menu data structure



//Select and cache the <main>element in a variable named mainEl.
const mainE1=document.querySelector('main');
console.log(mainE1);

//Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainE1.style.backgroundColor='var(--main-bg)';

//Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainE1.innerHTML="<h1>SEI Rocks!</h1>";

//Add a class of flex-ctr to mainEl.
mainE1.classList.add('flex-ctr');
//or mainE1.className="flex-ctr"

//Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl=document.getElementById("top-menu");
console.log(topMenuEl);

//Set the height topMenuEl element to be 100%.
topMenuEl.style.height="100%";

//Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor='#0e9aa7';

//Add a class of flex-around to topMenuEl
topMenuEl.classList.add('flex-around');

//Copy the following data structure to the top of script.js:
/*Iterate over the entire menuLinks array and for each "link" object:

Create an <a>element.
On the new element, add an href attribute with its value set to the href property of the "link" object.
Set the new element's content to the value of the text property of the "link" object.
Append the new element to the topMenuEl element.*/

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

for(link of menuLinks){
    //Create an <a>element.
const anchorTag=document.createElement('a');

anchorTag.setAttribute('href',link.href);

 anchorTag.innerText=link.text;
 //console.log(anchorTag);
 topMenuEl.appendChild(anchorTag);

}