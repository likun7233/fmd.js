fmd("when",function(){var h=function(){},n=function(a){var e=this,c=[],k=0,f=0;a=a||0;var g=function(){k+f===a&&l()},l=function(){e.then=f?function(d,b){b&&b()}:function(d,b){d&&d()};l=h;m(f?1:0);m=h;c=[]},m=function(d){for(var b,a=0;b=c[a++];)(b=b[d])&&b()};this.then=function(a,b){c.push([a,b])};this.resolve=function(){k++;g()};this.reject=function(){f++;g()};g()};return function(){for(var a=new n(arguments.length),e,c=0;e=arguments[c++];)e(a);return a}});
