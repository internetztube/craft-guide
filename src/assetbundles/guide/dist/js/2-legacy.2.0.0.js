(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{41:function(e,a,t){"use strict";t.r(a),t.d(a,"animate",function(){return c});var o=t(2),n=t(23);function c(e,a,t){var c=void 0!==t.delay?i(t.delay):0,d=void 0!==t.speed?i(t.speed):.5;switch(e){case"background-color":n.d.to(a,d,{backgroundColor:t.color||"transparent",delay:c,ease:n.c.easeOut});break;case"fade-in":n.d.to(a,d,{delay:c,ease:n.c.easeOut,opacity:1});break;case"fade-out":n.d.to(a,d,{delay:c,ease:n.c.easeOut,opacity:0});break;case"slide-in":n.d.to(a,d,{delay:c,ease:n.c.easeOut,opacity:1,x:0,y:0,startAt:{opacity:0,x:t.x||0,y:t.y||0}});break;default:Object(o.e)("Animation not found in animation.js",e)}Object(o.c)("Animation:",e,t)}function i(e){return e.constructor===Array?Math.random()*(e[1]-e[0])+e[0]:e}Object(o.c)("Animation")}}]);