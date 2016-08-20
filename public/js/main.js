 $(document).ready(function() {
 var lang = 0; widthPage =  $(window).width();
  
     

     
     
 if (widthPage > 999) {

 $('#fullpage').fullpage({
anchors: ['home-1', 'home-2', 'home-3', 'home-4', 'home-5', 'footer'],
menu: '#menu',
scrollingSpeed: 1000
			}); 
     
     
 }
     

     

$('#menu').click(function() {  
$('#sub2').addClass('active-sub');
}); 
     

$('#close-menu').click(function() {

$('#sub2').removeClass('active-sub'); 
}); 
    
     
     
     

$('#search').click(function() {
$('#sub1').addClass('active-sub');
}); 

$('#close-search').click(function() {
$('#sub1').removeClass('active-sub'); 
}); 


$('div#langs').click(function() {
    
if (lang == 0) {
$('#eng').addClass('active');   
$('#rus').removeClass('active'); 
lang = 1;} 
    
    
    else {
$('#rus').addClass('active');   
$('#eng').removeClass('active'); 
lang = 0;
}     
      
    
});     
     
     
});