var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(){"use strict";var a=window.location,o=window.document,t=o.currentScript,r=t.getAttribute("data-api")||new URL(t.src).origin+"/api/event",l=t.getAttribute("data-domain");function s(t,e){t&&console.warn("Ignoring Event: "+t),e&&e.callback&&e.callback()}function e(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname)||"file:"===a.protocol)return s("localhost",e);if((window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)&&!window.__plausible)return s(null,e);try{if("true"===window.localStorage.plausible_ignore)return s("localStorage flag",e)}catch(t){}var n={},i=(n.n=t,n.u=a.href,n.d=l,n.r=o.referrer||null,e&&e.meta&&(n.m=JSON.stringify(e.meta)),e&&e.props&&(n.p=e.props),new XMLHttpRequest);i.open("POST",r,!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4===i.readyState&&e&&e.callback&&e.callback({status:i.status})}}var n=window.plausible&&window.plausible.q||[];window.plausible=e;for(var i,p=0;p<n.length;p++)e.apply(this,n[p]);function c(){i!==a.pathname&&(i=a.pathname,e("pageview"))}function u(){c()}var w,t=window.history;t.pushState&&(w=t.pushState,t.pushState=function(){w.apply(this,arguments),u()},window.addEventListener("popstate",u)),"prerender"===o.visibilityState?o.addEventListener("visibilitychange",function(){i||"visible"!==o.visibilityState||c()}):c()}();

}
/*
     FILE ARCHIVED ON 13:14:38 Oct 07, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:18:07 Mar 18, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.014
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.01
  esindex: 0.013
  cdx.remote: 19.769
  LoadShardBlock: 616.492 (6)
  PetaboxLoader3.datanode: 518.925 (8)
  PetaboxLoader3.resolve: 373.984 (4)
  load_resource: 373.419 (2)
*/