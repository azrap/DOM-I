const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


/*
## Task 1: Create selectors to point your data into elements
* [ ] Create selectors by using any of the DOM element's methods
* [ ] Note that IDs have been used on all images.  Use the IDs to update src path content
*/

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



//nav:
let nav=document.querySelector("nav");

let anchors=document.querySelectorAll('nav a');
anchors[0].textContent=siteContent["nav"]["nav-item-1"];
anchors[1].textContent=siteContent["nav"]["nav-item-2"];
anchors[2].textContent=siteContent["nav"]["nav-item-3"];
anchors[3].textContent=siteContent["nav"]["nav-item-4"];
anchors[4].textContent=siteContent["nav"]["nav-item-5"];
anchors[5].textContent=siteContent["nav"]["nav-item-6"];

let lastNav=document.createElement('a');
lastNav.textContent='test';
nav.appendChild(lastNav);

//CTA header
let cta=document.querySelectorAll('.cta');
let ctaText=document.querySelectorAll(".cta .cta-text");
let h1=document.querySelector('h1');
h1.textContent=siteContent["cta"]["h1"];
let button=document.querySelector('button');
button.textContent=siteContent["cta"]["button"];


//mainContent

//all the h4s for the main content:
let h4=document.querySelectorAll('h4');
h4[0].textContent=siteContent["main-content"]["features-h4"];
h4[1].textContent=siteContent["main-content"]["about-h4"];
h4[2].textContent=siteContent["main-content"]["services-h4"];
h4[3].textContent=siteContent["main-content"]["product-h4"];
h4[4].textContent=siteContent["main-content"]["vision-h4"];

// all the paragraphs for the main content:
let p=document.querySelectorAll('p');
p[0].textContent=siteContent["main-content"]["features-content"];
p[1].textContent=siteContent["main-content"]["about-content"];
p[2].textContent=siteContent["main-content"]["services-content"];
p[3].textContent=siteContent["main-content"]["product-content"];
p[4].textContent=siteContent["main-content"]["vision-content"];

let bottomContent=document.querySelectorAll('.bottom-content');
let contact=document.querySelectorAll('.contact');



//image selectors:
let ctaImg=document.getElementById('cta-img');
// setting the src: 
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg=document.getElementById('middle-img');
// setting the src: 
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);




