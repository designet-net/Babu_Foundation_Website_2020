/* Font Face Observer v2.0.13 - Â© Bram Stein. License: BSD-3-Clause */(function () {
  'use strict'; var f, g = []; function l(a) { g.push(a); 1 == g.length && f() } function m() { for (; g.length;)g[0](), g.shift() } f = function () { setTimeout(m) }; function n(a) { this.a = p; this.b = void 0; this.f = []; var b = this; try { a(function (a) { q(b, a) }, function (a) { r(b, a) }) } catch (c) { r(b, c) } } var p = 2; function t(a) { return new n(function (b, c) { c(a) }) } function u(a) { return new n(function (b) { b(a) }) } function q(a, b) { if (a.a == p) { if (b == a) throw new TypeError; var c = !1; try { var d = b && b.then; if (null != b && "object" == typeof b && "function" == typeof d) { d.call(b, function (b) { c || q(a, b); c = !0 }, function (b) { c || r(a, b); c = !0 }); return } } catch (e) { c || r(a, e); return } a.a = 0; a.b = b; v(a) } }
  function r(a, b) { if (a.a == p) { if (b == a) throw new TypeError; a.a = 1; a.b = b; v(a) } } function v(a) { l(function () { if (a.a != p) for (; a.f.length;) { var b = a.f.shift(), c = b[0], d = b[1], e = b[2], b = b[3]; try { 0 == a.a ? "function" == typeof c ? e(c.call(void 0, a.b)) : e(a.b) : 1 == a.a && ("function" == typeof d ? e(d.call(void 0, a.b)) : b(a.b)) } catch (h) { b(h) } } }) } n.prototype.g = function (a) { return this.c(void 0, a) }; n.prototype.c = function (a, b) { var c = this; return new n(function (d, e) { c.f.push([a, b, d, e]); v(c) }) };
  function w(a) { return new n(function (b, c) { function d(c) { return function (d) { h[c] = d; e += 1; e == a.length && b(h) } } var e = 0, h = []; 0 == a.length && b(h); for (var k = 0; k < a.length; k += 1)u(a[k]).c(d(k), c) }) } function x(a) { return new n(function (b, c) { for (var d = 0; d < a.length; d += 1)u(a[d]).c(b, c) }) }; window.Promise || (window.Promise = n, window.Promise.resolve = u, window.Promise.reject = t, window.Promise.race = x, window.Promise.all = w, window.Promise.prototype.then = n.prototype.c, window.Promise.prototype["catch"] = n.prototype.g);
}());

(function () {
  function l(a, b) { document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b) } function m(a) { document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() { document.removeEventListener("DOMContentLoaded", c); a() }) : document.attachEvent("onreadystatechange", function k() { if ("interactive" == document.readyState || "complete" == document.readyState) document.detachEvent("onreadystatechange", k), a() }) }; function r(a) {
  this.a = document.createElement("div"); this.a.setAttribute("aria-hidden", "true"); this.a.appendChild(document.createTextNode(a)); this.b = document.createElement("span"); this.c = document.createElement("span"); this.h = document.createElement("span"); this.f = document.createElement("span"); this.g = -1; this.b.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"; this.c.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
    this.f.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"; this.h.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"; this.b.appendChild(this.h); this.c.appendChild(this.f); this.a.appendChild(this.b); this.a.appendChild(this.c)
  }
  function t(a, b) { a.a.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";" } function y(a) { var b = a.a.offsetWidth, c = b + 100; a.f.style.width = c + "px"; a.c.scrollLeft = c; a.b.scrollLeft = a.b.scrollWidth + 100; return a.g !== b ? (a.g = b, !0) : !1 } function z(a, b) { function c() { var a = k; y(a) && a.a.parentNode && b(a.g) } var k = a; l(a.b, c); l(a.c, c); y(a) }; function A(a, b) { var c = b || {}; this.family = a; this.style = c.style || "normal"; this.weight = c.weight || "normal"; this.stretch = c.stretch || "normal" } var B = null, C = null, E = null, F = null; function G() { if (null === C) if (J() && /Apple/.test(window.navigator.vendor)) { var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent); C = !!a && 603 > parseInt(a[1], 10) } else C = !1; return C } function J() { null === F && (F = !!document.fonts); return F }
  function K() { if (null === E) { var a = document.createElement("div"); try { a.style.font = "condensed 100px sans-serif" } catch (b) { } E = "" !== a.style.font } return E } function L(a, b) { return [a.style, a.weight, K() ? a.stretch : "", "100px", b].join(" ") }
  A.prototype.load = function (a, b) {
    var c = this, k = a || "BESbswy", q = 0, D = b || 3E3, H = (new Date).getTime(); return new Promise(function (a, b) {
      if (J() && !G()) { var M = new Promise(function (a, b) { function e() { (new Date).getTime() - H >= D ? b() : document.fonts.load(L(c, '"' + c.family + '"'), k).then(function (c) { 1 <= c.length ? a() : setTimeout(e, 25) }, function () { b() }) } e() }), N = new Promise(function (a, c) { q = setTimeout(c, D) }); Promise.race([N, M]).then(function () { clearTimeout(q); a(c) }, function () { b(c) }) } else m(function () {
        function u() {
          var b; if (b = -1 !=
            f && -1 != g || -1 != f && -1 != h || -1 != g && -1 != h) (b = f != g && f != h && g != h) || (null === B && (b = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent), B = !!b && (536 > parseInt(b[1], 10) || 536 === parseInt(b[1], 10) && 11 >= parseInt(b[2], 10))), b = B && (f == v && g == v && h == v || f == w && g == w && h == w || f == x && g == x && h == x)), b = !b; b && (d.parentNode && d.parentNode.removeChild(d), clearTimeout(q), a(c))
        } function I() {
          if ((new Date).getTime() - H >= D) d.parentNode && d.parentNode.removeChild(d), b(c); else {
            var a = document.hidden; if (!0 === a || void 0 === a) f = e.a.offsetWidth,
              g = n.a.offsetWidth, h = p.a.offsetWidth, u(); q = setTimeout(I, 50)
          }
        } var e = new r(k), n = new r(k), p = new r(k), f = -1, g = -1, h = -1, v = -1, w = -1, x = -1, d = document.createElement("div"); d.dir = "ltr"; t(e, L(c, "sans-serif")); t(n, L(c, "serif")); t(p, L(c, "monospace")); d.appendChild(e.a); d.appendChild(n.a); d.appendChild(p.a); document.body.appendChild(d); v = e.a.offsetWidth; w = n.a.offsetWidth; x = p.a.offsetWidth; I(); z(e, function (a) { f = a; u() }); t(e, L(c, '"' + c.family + '",sans-serif')); z(n, function (a) { g = a; u() }); t(n, L(c, '"' + c.family + '",serif'));
        z(p, function (a) { h = a; u() }); t(p, L(c, '"' + c.family + '",monospace'))
      })
    })
  }; "object" === typeof module ? module.exports = A : (window.FontFaceObserver = A, window.FontFaceObserver.prototype.load = A.prototype.load);
}());
/* Intersection Observer Polyfill - could use the following which has browser detection built-in: //cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver */
(function (undefined) { !function () { function e(e, t) { for (var n = -1, o = e.length; ++n < o;)if (n in e && e[n] === t) return n; return -1 } var t = { click: 1, dblclick: 1, keyup: 1, keypress: 1, keydown: 1, mousedown: 1, mouseup: 1, mousemove: 1, mouseover: 1, mouseenter: 1, mouseleave: 1, mouseout: 1, storage: 1, storagecommit: 1, textinput: 1 }; if ("undefined" != typeof document && "undefined" != typeof window) { var n = window.Event && window.Event.prototype || null; window.Event = Window.prototype.Event = function (e, t) { if (!e) throw new Error("Not enough arguments"); var n; if ("createEvent" in document) { n = document.createEvent("Event"); var o = !(!t || t.bubbles === undefined) && t.bubbles, i = !(!t || t.cancelable === undefined) && t.cancelable; return n.initEvent(e, o, i), n } return n = document.createEventObject(), n.type = e, n.bubbles = !(!t || t.bubbles === undefined) && t.bubbles, n.cancelable = !(!t || t.cancelable === undefined) && t.cancelable, n }, n && Object.defineProperty(window.Event, "prototype", { configurable: !1, enumerable: !1, writable: !0, value: n }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function () { var n = this, o = arguments[0], i = arguments[1]; if (n === window && o in t) throw new Error("In IE8 the event: " + o + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information."); n._events || (n._events = {}), n._events[o] || (n._events[o] = function (t) { var o, i = n._events[t.type].list, r = i.slice(), c = -1, a = r.length; for (t.preventDefault = function () { !1 !== t.cancelable && (t.returnValue = !1) }, t.stopPropagation = function () { t.cancelBubble = !0 }, t.stopImmediatePropagation = function () { t.cancelBubble = !0, t.cancelImmediate = !0 }, t.currentTarget = n, t.relatedTarget = t.fromElement || null, t.target = t.target || t.srcElement || n, t.timeStamp = (new Date).getTime(), t.clientX && (t.pageX = t.clientX + document.documentElement.scrollLeft, t.pageY = t.clientY + document.documentElement.scrollTop); ++c < a && !t.cancelImmediate;)c in r && (o = r[c], -1 !== e(i, o) && "function" == typeof o && o.call(n, t)) }, n._events[o].list = [], n.attachEvent && n.attachEvent("on" + o, n._events[o])), n._events[o].list.push(i) }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function () { var t, n = this, o = arguments[0], i = arguments[1]; n._events && n._events[o] && n._events[o].list && -1 !== (t = e(n._events[o].list, i)) && (n._events[o].list.splice(t, 1), n._events[o].list.length || (n.detachEvent && n.detachEvent("on" + o, n._events[o]), delete n._events[o])) }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function (e) { if (!arguments.length) throw new Error("Not enough arguments"); if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0"); var t = this, n = e.type; try { if (!e.bubbles) { e.cancelBubble = !0; var o = function (e) { e.cancelBubble = !0, (t || window).detachEvent("on" + n, o) }; this.attachEvent("on" + n, o) } this.fireEvent("on" + n, e) } catch (i) { e.target = t; do { e.currentTarget = t, "_events" in t && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), t = 9 === t.nodeType ? t.parentWindow : t.parentNode } while (t && !e.cancelBubble) } return !0 }, document.attachEvent("onreadystatechange", function () { "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded", { bubbles: !0 })) })) } }(); !function (t, e) { "use strict"; function n(t) { this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || a(); try { this.isIntersecting = !!t.intersectionRect } catch (r) { } var e = this.boundingClientRect, n = e.width * e.height, o = this.intersectionRect, i = o.width * o.height; this.intersectionRatio = n ? i / n : this.isIntersecting ? 1 : 0 } function o(t, e) { var n = e || {}; if ("function" != typeof t) throw new Error("callback must be a function"); if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element"); this._checkForIntersections = r(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map(function (t) { return t.value + t.unit }).join(" ") } function i() { return t.performance && performance.now && performance.now() } function r(t, e) { var n = null; return function () { n || (n = setTimeout(function () { t(), n = null }, e)) } } function s(t, e, n, o) { "function" == typeof t.addEventListener ? t.addEventListener(e, n, o || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n) } function h(t, e, n, o) { "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, o || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n) } function c(t, e) { var n = Math.max(t.top, e.top), o = Math.min(t.bottom, e.bottom), i = Math.max(t.left, e.left), r = Math.min(t.right, e.right), s = r - i, h = o - n; return s >= 0 && h >= 0 && { top: n, bottom: o, left: i, right: r, width: s, height: h } } function u(t) { var e; try { e = t.getBoundingClientRect() } catch (n) { } return e ? (e.width && e.height || (e = { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: e.right - e.left, height: e.bottom - e.top }), e) : a() } function a() { return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 } } function l(t, e) { for (var n = e; n;) { if (n == t) return !0; n = p(n) } return !1 } function p(t) { var e = t.parentNode; return e && 11 == e.nodeType && e.host ? e.host : e } if (!("IntersectionObserver" in t && "IntersectionObserverEntry" in t && "intersectionRatio" in t.IntersectionObserverEntry.prototype)) { var f = []; o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.observe = function (t) { if (!this._observationTargets.some(function (e) { return e.element == t })) { if (!t || 1 != t.nodeType) throw new Error("target must be an Element"); this._registerInstance(), this._observationTargets.push({ element: t, entry: null }), this._monitorIntersections() } }, o.prototype.unobserve = function (t) { this._observationTargets = this._observationTargets.filter(function (e) { return e.element != t }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance()) }, o.prototype.disconnect = function () { this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance() }, o.prototype.takeRecords = function () { var t = this._queuedEntries.slice(); return this._queuedEntries = [], t }, o.prototype._initThresholds = function (t) { var e = t || [0]; return Array.isArray(e) || (e = [e]), e.sort().filter(function (t, e, n) { if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively"); return t !== n[e - 1] }) }, o.prototype._parseRootMargin = function (t) { var e = t || "0px", n = e.split(/\s+/).map(function (t) { var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t); if (!e) throw new Error("rootMargin must be specified in pixels or percent"); return { value: parseFloat(e[1]), unit: e[2] } }); return n[1] = n[1] || n[0], n[2] = n[2] || n[0], n[3] = n[3] || n[1], n }, o.prototype._monitorIntersections = function () { this._monitoringIntersections || (this._monitoringIntersections = !0, this._checkForIntersections(), this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (s(t, "resize", this._checkForIntersections, !0), s(e, "scroll", this._checkForIntersections, !0), "MutationObserver" in t && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, { attributes: !0, childList: !0, characterData: !0, subtree: !0 })))) }, o.prototype._unmonitorIntersections = function () { this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, h(t, "resize", this._checkForIntersections, !0), h(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null)) }, o.prototype._checkForIntersections = function () { var t = this._rootIsInDom(), e = t ? this._getRootRect() : a(); this._observationTargets.forEach(function (o) { var r = o.element, s = u(r), h = this._rootContainsTarget(r), c = o.entry, a = t && h && this._computeTargetAndRootIntersection(r, e), l = o.entry = new n({ time: i(), target: r, boundingClientRect: s, rootBounds: e, intersectionRect: a }); c ? t && h ? this._hasCrossedThreshold(c, l) && this._queuedEntries.push(l) : c && c.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l) }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this) }, o.prototype._computeTargetAndRootIntersection = function (n, o) { if ("none" != t.getComputedStyle(n).display) { for (var i = u(n), r = i, s = p(n), h = !1; !h;) { var a = null, l = 1 == s.nodeType ? t.getComputedStyle(s) : {}; if ("none" == l.display) return; if (s == this.root || s == e ? (h = !0, a = o) : s != e.body && s != e.documentElement && "visible" != l.overflow && (a = u(s)), a && !(r = c(a, r))) break; s = p(s) } return r } }, o.prototype._getRootRect = function () { var t; if (this.root) t = u(this.root); else { var n = e.documentElement, o = e.body; t = { top: 0, left: 0, right: n.clientWidth || o.clientWidth, width: n.clientWidth || o.clientWidth, bottom: n.clientHeight || o.clientHeight, height: n.clientHeight || o.clientHeight } } return this._expandRectByRootMargin(t) }, o.prototype._expandRectByRootMargin = function (t) { var e = this._rootMarginValues.map(function (e, n) { return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100 }), n = { top: t.top - e[0], right: t.right + e[1], bottom: t.bottom + e[2], left: t.left - e[3] }; return n.width = n.right - n.left, n.height = n.bottom - n.top, n }, o.prototype._hasCrossedThreshold = function (t, e) { var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1, o = e.isIntersecting ? e.intersectionRatio || 0 : -1; if (n !== o) for (var i = 0; i < this.thresholds.length; i++) { var r = this.thresholds[i]; if (r == n || r == o || r < n != r < o) return !0 } }, o.prototype._rootIsInDom = function () { return !this.root || l(e, this.root) }, o.prototype._rootContainsTarget = function (t) { return l(this.root || e, t) }, o.prototype._registerInstance = function () { f.indexOf(this) < 0 && f.push(this) }, o.prototype._unregisterInstance = function () { var t = f.indexOf(this); -1 != t && f.splice(t, 1) }, t.IntersectionObserver = o, t.IntersectionObserverEntry = n } }(window, document); }).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
!function (t) { "use strict"; t.loadCSS || (t.loadCSS = function () { }); var e = loadCSS.relpreload = {}; if (e.support = function () { var e; try { e = t.document.createElement("link").relList.supports("preload") } catch (t) { e = !1 } return function () { return e } }(), e.bindMediaToggle = function (t) { var e = t.media || "all"; function a() { t.media = e } t.addEventListener ? t.addEventListener("load", a) : t.attachEvent && t.attachEvent("onload", a), setTimeout(function () { t.rel = "stylesheet", t.media = "only x" }), setTimeout(a, 3e3) }, e.poly = function () { if (!e.support()) for (var a = t.document.getElementsByTagName("link"), n = 0; n < a.length; n++) { var o = a[n]; "preload" !== o.rel || "style" !== o.getAttribute("as") || o.getAttribute("data-loadcss") || (o.setAttribute("data-loadcss", !0), e.bindMediaToggle(o)) } }, !e.support()) { e.poly(); var a = t.setInterval(e.poly, 500); t.addEventListener ? t.addEventListener("load", function () { e.poly(), t.clearInterval(a) }) : t.attachEvent && t.attachEvent("onload", function () { e.poly(), t.clearInterval(a) }) } "undefined" != typeof exports ? exports.loadCSS = loadCSS : t.loadCSS = loadCSS }("undefined" != typeof global ? global : this);

/* Font Loading */
(function (win) {
  // if the class is already set, we're good.
  if (win.document.documentElement.className.indexOf('u-fonts-loaded') > -1) {
    return;
  }
  var fontLino500 = new win.FontFaceObserver('Montserrat', {
    weight: 500
  });
  var cifa = new win.FontFaceObserver('ci-icons');
  win.Promise
    .all([fontLino500.load(), cifa.load()])
    .then(fontsLoaded(win));
}(this));

// for some reason Edge wants this as a separate function
function fontsLoaded(win) {
  win.document.documentElement.className += ' u-fonts-loaded';
  win.document.cookie = 'fonts-loaded=true;path=/;SameSite=strict;Secure';
}

var videosToResize = false;

$(function () {
	/* Deferred loading of CSS */
	loadDeferredStyles();
  
	var cartModal = $('.js-cart-modal');

	$('.js-account-modal__dropdown').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();

		if (cartModal.is(':visible'))
			cartModal.hide();

		var isOpen = $(this).parent().hasClass('top-nav-login--modal-is-open');
		toggleMyAccountDropdown(!isOpen);
	});
	
	$('.js-account-modal__close').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		toggleMyAccountDropdown(false);
	});

	$('.js-cart-nav').on('click', function (event) {
		event.preventDefault();
		cartModal.slideToggle('fast');
	});
	$('.js-cart-close').on('click', function (event) {
		event.preventDefault();
		cartModal.slideUp('fast');
	});

  $('.js-menu-handle').on('click', function (event) {
    var $this = $(this);
    var isOpening = !$this.hasClass('is-open');
    $this.toggleClass('is-open', isOpening);
    $('.js-menu-navigation').slideToggle('fast');
  });

  $('.js-menu-link').on('click', function (event) {
    if (event.target.tagName == 'SPAN') {
      event.preventDefault();
      event.stopPropagation();
      $(this).siblings('.js-menu-children').slideDown('fast');
    }
  });
  $('.js-menu-back').on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).parent().slideUp('fast');
  });

  /* Lazy Loading */
  var imagesToLoad = $('[data-src]');
  var imagesToLoadConfig = {
    rootMargin: '0px 0px 300px 0px',
    threshold: 0
  };

  var imgObserver = new IntersectionObserver(function (entries, self) {
    for (var index = 0; index < entries.length; index++) {
      var entry = entries[index];
      if (entry.intersectionRatio > 0) { // entry.isIntersecting is unsupported by some browsers
        lazyLoadImage(entry.target);
        // Stop watching and load the image
        self.unobserve(entry.target);
      }
    }
  }, imagesToLoadConfig);

  imagesToLoad.each(function () {
    imgObserver.observe(this);
  });

  var $header = $('.js-header');
  var headerElems = $('.js-header-top');
  var headerElemsConfig = {
    rootMargin: '-9px 0px 0px'
  };
  var visible = true;

  var headerObserver = new IntersectionObserver(function (entries, self) {
    for (var index = 0; index < entries.length; index++) {
      var entry = entries[index];
      var nowVisible = (entry.intersectionRatio > 0); // entry.isIntersecting is unsupported by some browsers

      if (visible !== nowVisible && nowVisible !== undefined) {
        visible = nowVisible;

        if (!window.matchMedia('(min-width:1000px)').matches || visible)
          $header.toggleClass('c-header--fixed', !visible);
      }
    }
  }, headerElemsConfig);

  headerElems.each(function () {
    headerObserver.observe(this);
  });

  var footersToLoad = $('.c-footer');
  var imagesToLoadConfig = {
    rootMargin: '0px 0px 300px 0px',
    threshold: 0
  };

  var footerObserver = new IntersectionObserver(function (entries, self) {
    for (var index = 0; index < entries.length; index++) {
      var entry = entries[index];
      if (entry.intersectionRatio > 0) { // entry.isIntersecting is unsupported by some browsers
        $('.c-footer__trust-items').addClass('is-loaded');
        self.unobserve(entry.target);
      }
    }
  }, imagesToLoadConfig);

  footersToLoad.each(function () {
    footerObserver.observe(this);
  });

  /* Video Resizing */
  videosToResize = $('.c-video--resize').length > 0;
  if (videosToResize)
    resizeVideos();
});

$(window).resize(function () {
  if (videosToResize)
    resizeVideos();
});

function loadDeferredStyles() {
  var deferredStyles = $('.js-deferred-styles');
  deferredStyles.each(function () {
    var replacement = document.createElement("div");
    replacement.innerHTML = this.innerText;
    document.body.appendChild(replacement);
  });
}

function offModalClick(event)  {
	if (!$(event.target).closest('.js-account-modal').length)
		toggleMyAccountDropdown(false);
}

function toggleMyAccountDropdown(showModal){
	var $topNavLogin = $('.js-top-nav-login');
	if (showModal) {
		$topNavLogin.addClass('top-nav-login--modal-is-open');
		// register all other clicks
		$(document).on('click', 'body', offModalClick);
	} else {
		// remove the watcher
		$(document).off('click', 'body', offModalClick);
	}
	
	$('.js-account-modal').slideToggle('fast', function(event) {
		if (!showModal) {
			$topNavLogin.removeClass('top-nav-login--modal-is-open');
		}
	});
}

function lazyLoadImage(img) {
  var srcSet = img.getAttribute('data-srcset');
  if (srcSet && img.srcset !== undefined)
    img.srcset = srcSet;
  else {
    // use data src instead
    var src = img.getAttribute('data-src');
    if (!src) { return; }
    img.src = src;
  }
}

function resizeVideos() {
  $('.c-video--resize').each(function () {
    $video = $(this);
    $video.height(($video.width() * .5625));
  });
}

function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}


(function () {
  return {
    parse: function () {
      var that = this;
      var crumbs = $('.wi-breadcrumbs__item');
      var addedCurrentPage = false;
      crumbs.each(function (i, crumb) {
        var link = $('.wi-breadcrumbs__link', crumb);
        if (link.length) {
          that.add(document.location.origin + link.attr('href'), link.attr('title'));
        } else {
          addedCurrentPage = true;
          that.add(window.location.href, crumb.innerText);
        }
      })

      if (this.itemListElement.length) {
        if (!addedCurrentPage)
          this.add(window.location.href, window.document.title);

        var node = document.createElement('script');
        node.setAttribute('type', 'application/ld+json');
        node.innerText = JSON.stringify(this);
        document.body.appendChild(node);
      }
    },
    add: function (href, title) {
      this.itemListElement.push({
        '@type': 'ListItem',
        position: this.itemListElement.length + 1,
        item: {
          '@id': href,
          name: title,
          image: null
        }
      })
    },
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: []
  }
})().parse();