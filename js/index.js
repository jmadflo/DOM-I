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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//nav links
let navs = document.querySelectorAll("a");
for (let i = 0; i < navs.length; i++) {
  navs[i].innerText = siteContent["nav"][`nav-item-${i+1}`];
}

// cta
let ctaHeader = document.querySelector("h1");
ctaHeader.innerText = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.innerText = siteContent["cta"]["button"];

let ctaImage = document.getElementById("cta-img");
ctaImage.src = siteContent["cta"]["img-src"];

// main content - top section
let topTextContentHeaders = document.querySelectorAll(".top-content .text-content h4");
topTextContentHeaders[0].innerText = siteContent["main-content"]["features-h4"];
topTextContentHeaders[1].innerText = siteContent["main-content"]["about-h4"];

let topTextContentParagraphs = document.querySelectorAll(".top-content .text-content p");
topTextContentParagraphs[0].innerText = siteContent["main-content"]["features-content"];
topTextContentParagraphs[1].innerText = siteContent["main-content"]["about-content"];

// main content - image
let mainContentImage = document.querySelector("#middle-img");
mainContentImage.src = siteContent["main-content"]["middle-img-src"];

// main content - bottom section
let bottomTextContentHeaders = document.querySelectorAll(".bottom-content .text-content h4");
bottomTextContentHeaders[0].innerText = siteContent["main-content"]["services-h4"];
bottomTextContentHeaders[1].innerText = siteContent["main-content"]["product-h4"];
bottomTextContentHeaders[2].innerText = siteContent["main-content"]["vision-h4"];

let bottomTextContentParagraphs = document.querySelectorAll(".bottom-content .text-content p");
bottomTextContentParagraphs[0].innerText = siteContent["main-content"]["services-content"];
bottomTextContentParagraphs[1].innerText = siteContent["main-content"]["product-content"];
bottomTextContentParagraphs[2].innerText = siteContent["main-content"]["vision-content"];

// contact
let contactHeader = document.querySelector(".contact h4");
contactHeader.innerText = siteContent["contact"]["contact-h4"];

let contactParagraphs = document.querySelectorAll(".contact p");
contactParagraphs[0].innerText = siteContent["contact"]["address"];
contactParagraphs[1].innerText = siteContent["contact"]["phone"];
contactParagraphs[2].innerText = siteContent["contact"]["email"];
