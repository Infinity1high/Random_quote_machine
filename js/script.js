var url='http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

 

var getQuote= function(data) {
  quote = data.quoteText + ' ' + data.quoteAuthor;
   $("#text").html(" " + data.quoteText);
   if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
   $(".quote-author").html("- " + data.quoteAuthor);}

var tweet = function(){window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote))}



$(document).ready(function(){
 
  $.getJSON(url, getQuote);
$("#quote-new").click(function(){
 $.getJSON(url, getQuote)
});  
 $("#quote-tweet").click(tweet);
  
});
