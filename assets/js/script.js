// Scroll back to top when click on 'top' button
let backToTop = () =>
{
  let windowTop = document.querySelector('nav');
  let topPos    = windowTop.getBoundingClientRect().top + window.pageYOffset;
  
  window.scrollTo(
  {
    top      : topPos,
    behavior : 'smooth'
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
  let bodyTag = document.querySelector('body');
  let divWrapper = document.getElementById(element);
  
  divWrapper.style.display = 'block';
  divWrapper.style.opacity = 1;
  // Disable body scroll
  bodyTag.style.overflow = 'hidden';
}

// Clone cross for closing via template in about and contact field
let addCross = () => 
{
  let temp    = document.getElementsByTagName("template")[0];
  let clon1   = temp.content.cloneNode(true); 
  let clon2   = temp.content.cloneNode(true); 
  let about   = document.querySelector('#about');
  let contact = document.querySelector('#contact');
  about.appendChild(clon1);
  contact.appendChild(clon2);
}
addCross();

// close overlay field by click on cross
let closeOverlayField = () => 
{
  let bodyTag = document.querySelector('body');
  let overlayFields = document.querySelectorAll('.overlay-field');
  
  overlayFields.forEach( field =>
  {
    field.style.display = 'none';
  })
  // Enable body scroll
  bodyTag.style.overflow = 'auto';

}


//Follow mouse
$(document).ready( () => 
{
  $(document).on('mousemove', e =>
  {
    $('.light').css(
    {
      left : e.pageX,
      top  : e.pageY
    });
  });
});

