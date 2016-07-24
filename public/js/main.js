 $(document).ready(function() {
 var lang = 0;
     
 
 
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