fmd("logger",["global","require","env","config","assets","loader","console"],function(e,n,t,r,i,o,u){var c=t.log=function(){},a=e.console,s=function(e){t.log=e?a&&a.warn?function(e,n){a[n||"log"](e)}:function(e,t){u?u(e,t):o&&o(i.make("fmd/console"),function(){u||(u=n("console")),u(e,t)})}:c};r.register({keys:"debug",rule:function(e,n,t){s(t),this.debug=t}})});