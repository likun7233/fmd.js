fmd("async",["config","module","remote"],function(c,d,e){var f=d.prototype.autocompile,g=function(){var a=this;a.unnamed()&&e.fetch(a,function(){a.compile()})};c.register({keys:"async",rule:function(a,c,b){b=!!b;a!==b&&(this.async=b,d.prototype.autocompile=!0===b?g:f)}}).set({async:!0})});
