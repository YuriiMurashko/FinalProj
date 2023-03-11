$.fn.animate_Text = function() {
    var string = this.text();
    return this.each(function(){
     var $this = $(this);
     $this.html(string.replace(/./g, '<span class="new">$&</span>'));
     $this.find('span.new').each(function(i, el){
      setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
     });
    });
   };
   $('#example1').show();
   $('#example1').animate_Text();

   $.fn.animate_Text = function() {
    var string = this.text();
    return this.each(function(){
     var $this = $(this);
     $this.html(string.replace(/./g, '<span class="new">$&</span>'));
     $this.find('span.new').each(function(i, el){
      setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
     });
    });
   };
   $('#example2').show();
   $('#example2').animate_Text();

   
