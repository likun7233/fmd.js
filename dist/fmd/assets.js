fmd("assets",["cache","lang","event","config","module"],function(n,t,e,r,i){var u=n.assets={},c={},a={make:function(n){if(c[n])return u[c[n]];var t={id:n};return e.emit("analyze",t),i.has(t.id)?t.url=t.id:e.emit("id2url",t),c[n]=t.url,u[t.url]=t},group:function(n){return t.map(n,function(n){return a.make(n)})}};return a});