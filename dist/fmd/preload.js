fmd("preload","global lang event when request loader".split(" "),function(c,f,g,l,m,d){var h=c.document,k="async"in h.createElement("script")||"MozAppearance"in h.documentElement.style||c.opera;g.on("createNode",function(a,b){b.isPreload&&(a.async=!1,a.defer=!1,!k&&(a.type="text/cache-javascript"))});g.on("request",function(a,b){a.preState&&("preloading"===a.preState?(a.onpreload.push(function(){d(a,b)}),delete a.state,a.requested=!0):(delete a.requested,delete a.isPreload))});var n=function(a){a.preState||
(a.preState="preloading",a.onpreload=[],m(a,function(){a.preState="preloaded";f.forEach(a.onpreload,function(a){a()})}))},p=function(a,b){l.apply(null,f.map(a,function(a){return function(b){a.isPreload=!0;d(a,function(){b.resolve()})}})).then(b)},q=function(a,b){var c=a.slice(1);c.length?(f.forEach(a,function(a){a.isPreload||(a.isPreload=!0,n(a))}),d(a[0],function(){e(c,b)})):d(a[0],b)},e=function(a,b){e=k?p:q;e(a,b)};return e});
