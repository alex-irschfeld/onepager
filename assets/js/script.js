// Scroll back to top when click on 'top' button
let backToTop = () =>
{
  let windowTop = document.querySelector('nav');
  let topPos    = windowTop.getBoundingClientRect().top + window.pageYOffset;
  
  window.scrollTo(
  {
    top     : topPos,
    behavior: 'smooth'
  });
}

// Scroll to section when click on specific button from sub menu
let anchorSlide = anchor =>
{
  let anchorTag  = document.getElementById(anchor);
  
  anchorTag.scrollIntoView(
  {
    behavior: 'smooth'
  })
}

// Show about and contact field
let showWrapper = element =>
{
  let bodyTag    = document.querySelector('body');
  let light      = document.querySelector('.light');
  let divWrapper = document.getElementById(element);
  let closingBtn = document.getElementById('cross-wrapper');
  
  divWrapper.style.display = 'block';
  bodyTag.style.overflow   = 'hidden'; // Disable body scroll
  light.style.display      = 'none';
  // Execute styles after display block for fading in
  setTimeout( () => 
  { 
    divWrapper.style.zIndex  = 998;
    closingBtn.style.zIndex  = 999;
    closingBtn.style.opacity = 1;
    divWrapper.style.opacity = 1;
  }, 200)
}

// Clone cross for closing via template in about and contact field
let addCross = () => 
{
  let temp    = document.getElementsByTagName("template")[0];
  let clon1   = temp.content.cloneNode(true); 
  let clon2   = temp.content.cloneNode(true); 
  let about   = document.querySelector('#about');
  let contact = document.querySelector('#contact');
  let bodyTag = document.querySelector('body');
  bodyTag.appendChild(clon1);
  bodyTag.appendChild(clon2);
}
addCross();

// close overlay field by click on cross
let closeOverlayField = () => 
{
  let light         = document.querySelector('.light');
  let bodyTag       = document.querySelector('body');
  let overlayFields = document.querySelectorAll('.overlay-field');
  let closingBtn    = document.getElementById('cross-wrapper');
  
  overlayFields.forEach( field =>
  {
    field.style.opacity = 0;
    field.style.zIndex  = -1;
    // Execute display 'none' after opacity transition
    setTimeout( () => 
    {
      field.style.display = 'none';
    }, 200)
  })
  // Enable body scroll
  bodyTag.style.overflow   = 'auto';
  light.style.display      = 'block';
  closingBtn.style.zIndex  = -1;
  closingBtn.style.opacity = 0;
}

// Scale down sub navigation on scroll
// Scale up when page Y-Offset is 0
let shrinkSubMenu = () =>
{
  let subNav = document.querySelectorAll('.sub-nav a h2');
  
  subNav.forEach(element => {
    if(window.pageYOffset != 0 && window.innerWidth > 756)
    {
      element.style.fontSize = 'var(--font-size-big)';
    } else {
      element.style.fontSize = 'var(--font-size-huge)';
    }
  })
}

//Follow mouse
$(document).ready( () => 
{
  $(document).on('mousemove', e =>
  {
    $('.light').css(
    {
      left: e.pageX,
      top : e.pageY
    });
  });
});

