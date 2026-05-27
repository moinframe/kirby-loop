(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode('kirby-loop{--color-neutral-h:900;--color-neutral-c:0;--color-accent-h:900;--color-accent-c:.18;--color-accent-l:.75;--color-accent-dark-factor:.4;--color-accent-light-factor:1.2;--color-neutral-l-0:1;--color-neutral-l-100:.95;--color-neutral-l-200:.9;--color-neutral-l-300:.7;--color-neutral-l-400:.6;--color-neutral-l-600:.4;--color-neutral-l-500:.5;--color-neutral-l-700:.3;--color-neutral-l-800:.2;--color-neutral-l-900:.1;--color-neutral-l-1000:0}kirby-loop[theme=dark]{--color-accent-l:.85;--color-neutral-l-0:0;--color-neutral-l-100:.1;--color-neutral-l-200:.2;--color-neutral-l-300:.45;--color-neutral-l-400:.5;--color-neutral-l-600:.55;--color-neutral-l-500:.6;--color-neutral-l-700:.7;--color-neutral-l-800:.8;--color-neutral-l-900:.95;--color-neutral-l-1000:1;--shadow-s:0 .1em .25em oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.1);--shadow-m:0 2px 8px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.08),0 8px 16px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.12),0 16px 24px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.08);--shadow-l:0 4px 16px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.08),0 12px 32px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.12),0 24px 48px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.16),0 48px 80px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.08);--shadow-light-edge:inset 1px 1px 1px oklch(var(--color-neutral-l-1000)var(--color-neutral-c)var(--color-neutral-h)/.3);--shadow-dark-edge:inset -1px -1px 1px oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h)/.3);--background-glass:linear-gradient(135deg,transparent,var(--color-base-background-o-50));--panel-threads-background:oklch(var(--color-neutral-l-200)var(--color-neutral-c)var(--color-neutral-h)/.99)}kirby-loop{--color-base:var(--color-neutral-900);--color-base-background:var(--color-neutral-0);--color-base-background-o-5:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.05);--color-base-background-o-10:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.1);--color-base-background-o-20:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.2);--color-base-background-o-50:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.5);--color-base-background-o-60:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.6);--color-base-background-o-75:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.75);--color-base-background-o-95:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.95);--color-accent-light:oklch(calc(var(--color-accent-l)*var(--color-accent-light-factor))var(--color-accent-c)var(--color-accent-h));--color-accent:oklch(var(--color-accent-l)var(--color-accent-c)var(--color-accent-h));--color-accent-dark:oklch(calc(var(--color-accent-l)*var(--color-accent-dark-factor))var(--color-accent-c)var(--color-accent-h));--color-neutral-0:oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-100:oklch(var(--color-neutral-l-100)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-200:oklch(var(--color-neutral-l-200)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-300:oklch(var(--color-neutral-l-300)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-400:oklch(var(--color-neutral-l-400)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-500:oklch(var(--color-neutral-l-500)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-600:oklch(var(--color-neutral-l-600)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-700:oklch(var(--color-neutral-l-700)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-800:oklch(var(--color-neutral-l-800)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-900:oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h));--color-neutral-1000:oklch(var(--color-neutral-l-1000)var(--color-neutral-c)var(--color-neutral-h));--color-success:oklch(.65 .15 150);--color-warning:oklch(.75 .15 80);--color-error:oklch(.65 .18 25);--color-info:oklch(.65 .15 220);--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol",sans-serif;--line-height:1.4;--font-weight-light:300;--font-weight-normal:400;--font-weight-medium:550;--font-weight-bold:700;--font-size-3:clamp(1.9531rem,1.4262rem + 1.7565vw,3.5339rem);--font-size-4:clamp(1.5625rem,1.2503rem + 1.0408vw,2.4992rem);--font-size-5:clamp(1.25rem,1.0775rem + .575vw,1.7675rem);--font-size-6:clamp(1rem,.9167rem + .2778vw,1.25rem);--font-size-7:clamp(.8rem,.772rem + .0934vw,.884rem);--font-size-8:clamp(.6252rem,.6449rem + -.0165vw,.64rem);--border-radius-s:.125rem;--border-radius:.25rem;--border-radius-rounded:4096px;--space-2xs:clamp(.25rem,.2292rem + .0694vw,.3125rem);--space-xs:clamp(.5rem,.4583rem + .1389vw,.625rem);--space-s:clamp(1rem,.9167rem + .2778vw,1.25rem);--space-m:clamp(1.5rem,1.375rem + .4167vw,1.875rem);--space-l:clamp(2rem,1.8333rem + .5556vw,2.5rem);--space-2xs-xs:clamp(.25rem,.125rem + .4167vw,.625rem);--space-xs-s:clamp(.5rem,.25rem + .8333vw,1.25rem);--space-s-m:clamp(1rem,.7083rem + .9722vw,1.875rem);--space-m-l:clamp(1.5rem,1.1667rem + 1.1111vw,2.5rem);--space-s-l:clamp(1rem,.5rem + 1.6667vw,2.5rem);--shadow-s:0 .1em .25em oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.1);--shadow-m:0 2px 8px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.08),0 8px 16px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.12),0 16px 24px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.08);--shadow-l:0 4px 16px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.08),0 12px 32px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.12),0 24px 48px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.16),0 48px 80px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.08);--shadow-light-edge:inset 1px 1px 1px oklch(var(--color-neutral-l-0)var(--color-neutral-c)var(--color-neutral-h)/.3);--shadow-dark-edge:inset 0 -1px 1px oklch(var(--color-neutral-l-900)var(--color-neutral-c)var(--color-neutral-h)/.3);--backdrop-blur:blur(6px);--backdrop-glass:var(--backdrop-blur)saturate(1.4)brightness(1.2);--background-glass:linear-gradient(135deg,transparent,var(--color-base-background-o-95));--background-glass-frosted:linear-gradient(0deg,var(--color-base-background-o-75)0%,var(--color-base-background-o-95)50%);--opacity-subtle:.5;--opacity-medium:.7;--opacity-strong:.9;--outline-color:var(--color-accent);--outline-offset:.25rem;--transition-duration:.2s;--transition-duration-jump:.4s;--transition-easing-jump:cubic-bezier(.44,1.2,.64,1);--transition-easing:cubic-bezier(0,0,.2,1);--z-loop-marker:9998;--z-loop-panel:9999;--z-loop-dialog:10000;--author-avatar-color:var(--color-neutral-600);--author-avatar-background-color:var(--color-neutral-100);--author-avatar-size:2.5rem;--author-avatar-border-radius:var(--border-radius-rounded);--author-avatar-font-size:var(--font-size-6);--button-background:transparent;--button-color:var(--color-neutral-600);--button-border-radius:var(--border-radius);--button-padding:0 var(--space-xs);--button-gap:var(--space-2xs);--button-font-size:var(--font-size-7);--button-font-weight:var(--font-weight-medium);--button-height:2.25rem;--button-transition:var(--transition-duration)var(--transition-easing);--button-outline-color:var(--outline-color);--button-outline-offset:var(--outline-offset);--button-hover-color:var(--color-neutral-900);--button-hover-background:var(--color-neutral-200);--button-header-background:transparent;--button-header-height:3rem;--button-header-padding:0 var(--space-s);--button-header-hover-background:var(--color-base-background-o-95);--button-header-blend-mode:multiply;--button-panel-background:transparent;--button-panel-padding:0 calc(var(--space-s)*.4);--button-solid-background:var(--color-neutral-100);--button-solid-hover-color:var(--color-neutral-900);--button-solid-hover-background:var(--color-neutral-200);--button-small-height:1.5rem;--button-small-font-size:var(--font-size-7);--button-icon-background:var(--color-neutral-0);--button-icon-color:var(--color-neutral-500);--button-icon-height:3rem;--button-icon-shadow:var(--shadow-s);--button-icon-border-radius:var(--border-radius-rounded);--button-icon-font-size:var(--font-size-6);--button-icon-hover-background:var(--color-neutral-200);--button-icon-hover-color:var(--color-neutral-900);--button-marker-background:var(--color-accent);--button-marker-color:var(--color-accent-dark);--button-marker-font-weight:var(--font-weight-bold);--button-marker-border-radius:var(--border-radius-rounded);--button-marker-highlighted-background:var(--color-accent);--button-marker-highlighted-color:var(--color-accent-dark);--button-filter-background:transparent;--button-filter-color:var(--color-neutral-500);--button-filter-height:1.75rem;--button-filter-font-size:var(--font-size-8);--button-filter-padding:0 var(--space-xs);--button-filter-border-radius:calc(var(--border-radius) - 2px);--button-filter-hover-color:var(--color-neutral-700);--button-filter-hover-background:var(--color-neutral-200);--button-filter-active-background:var(--color-base-background);--button-filter-active-color:var(--color-base);--button-filter-active-font-weight:var(--font-weight-medium);--button-menu-item-background:transparent;--button-menu-item-color:var(--color-neutral-700);--button-menu-item-padding:var(--space-2xs)var(--space-xs);--button-menu-item-border-radius:calc(var(--border-radius) - 2px);--button-menu-item-font-size:var(--font-size-7);--button-menu-item-gap:var(--space-2xs);--button-menu-item-hover-background:var(--color-neutral-100);--button-menu-item-hover-color:var(--color-neutral-900);--button-menu-item-active-background:var(--color-accent-light);--button-menu-item-active-color:var(--color-accent-dark);--button-menu-item-active-font-weight:var(--font-weight-medium);--button-active-background:var(--color-accent);--button-active-color:var(--color-accent-dark);--button-disabled-opacity:var(--opacity-subtle);--button-disabled-hover-color:var(--color-neutral-700);--button-disabled-hover-background:var(--color-neutral-100);--comment-avatar-size:2.5rem;--comment-marker-background:var(--color-neutral-200);--comment-marker-color:var(--color-neutral-800);--comment-line-background:var(--color-neutral-100);--comment-line-width:.1rem;--comment-line-offset:calc(var(--space-s) + var(--comment-avatar-size)/2);--comment-header-font-size:var(--font-size-7);--comment-header-padding:var(--space-s);--comment-header-gap:var(--space-s);--comment-header-outline-color:var(--outline-color);--comment-header-outline-offset:-2px;--comment-header-border-radius:var(--border-radius);--comment-content-padding:var(--space-xs);--comment-content-background:var(--color-neutral-100);--comment-content-background-dark:var(--color-neutral-200);--comment-content-border-radius:var(--border-radius);--comment-author-gap:var(--space-xs);--comment-author-margin-bottom:var(--space-2xs);--comment-timestamp-font-size:var(--font-size-8);--comment-timestamp-color:var(--color-neutral-300);--comment-replies-padding:0 var(--space-s);--comment-replies-gap:var(--space-s);--comment-footer-padding:var(--space-s);--comment-footer-gap:var(--space-s);--comment-buttons-gap:var(--space-xs);--comment-dialog-position:absolute;--comment-dialog-max-width:300px;--comment-dialog-border-radius:var(--border-radius);--comment-dialog-shadow:var(--shadow-s);--comment-dialog-backdrop-background:transparent;--comment-dialog-textarea-font-size:var(--font-size-6);--comment-form-background:var(--color-base-background);--comment-form-color:var(--color-base);--comment-form-border:1px solid var(--color-neutral-200);--comment-form-border-radius:var(--border-radius);--comment-form-textarea-height:15ch;--comment-form-textarea-padding:var(--space-s);--comment-form-textarea-background:var(--color-base-background);--comment-form-textarea-font-family:var(--font-family);--comment-form-textarea-font-size:var(--font-size-7);--comment-form-footer-padding:var(--space-xs);--comment-form-footer-gap:var(--space-xs);--comment-form-hint-font-size:var(--font-size-8);--comment-form-hint-color:var(--color-neutral-300);--comment-form-hint-padding:0 var(--space-xs)var(--space-xs)var(--space-xs);--context-menu-container-bottom:var(--space-s);--context-menu-container-right:var(--space-s);--context-menu-container-z-index:10;--context-menu-trigger-size:2.5rem;--context-menu-trigger-border-radius:var(--border-radius-rounded);--context-menu-background:var(--color-base-background);--context-menu-border-radius:var(--border-radius);--context-menu-shadow:var(--shadow-s);--context-menu-padding:var(--space-xs);--context-menu-min-width:12rem;--context-menu-backdrop-background:transparent;--context-menu-section-gap:var(--space-2xs);--context-menu-title-font-size:var(--font-size-8);--context-menu-title-font-weight:var(--font-weight-medium);--context-menu-title-color:var(--color-neutral-500);--context-menu-title-margin-bottom:var(--space-2xs);--context-menu-title-letter-spacing:.05em;--context-menu-filter-gap:1px;--context-menu-filter-dot-size:.5em;--context-menu-filter-dot-border-radius:50%;--context-menu-filter-dot-margin-right:var(--space-2xs);--context-menu-filter-dot-open-background:var(--color-accent);--context-menu-filter-dot-resolved-background:var(--color-neutral-400);--header-position:fixed;--header-top:var(--space-xs);--header-transform:translateX(-50%);--header-color:var(--color-base);--header-border-radius:var(--border-radius-rounded);--header-z-index:9999;--header-bottom-position:var(--space-xs);--header-backdrop-filter:var(--backdrop-glass);--header-background:var(--background-glass);--header-count-size:2rem;--header-count-border-radius:var(--border-radius-rounded);--header-count-backdrop-filter:var(--backdrop-glass);--header-count-background:var(--background-glass);--marker-size:2rem;--marker-position:absolute;--marker-z-index:var(--z-loop-marker);--marker-transform:translate(-50%,-50%);--marker-border-radius:var(--border-radius-rounded);--panel-width:380px;--panel-mobile-width:85svw;--panel-position:fixed;--panel-right:var(--space-xs);--panel-top:var(--space-xs);--panel-height:calc(100svh - var(--space-xs)*2);--panel-transform-closed:translateX(calc(100% + var(--space-xs)));--panel-transform-open:translateX(0);--panel-color:var(--color-base);--panel-border-radius:var(--border-radius);--panel-border-top-left-radius:0;--panel-transition:var(--transition-duration-jump)var(--transition-easing-jump);--panel-z-index:var(--z-loop-panel);--panel-shadow:var(--shadow-m);--panel-header-transform-closed:translate(-95%);--panel-header-transform-open:translate(calc(-100% + 1px));--panel-header-transform-hover:translate(calc(-100% + 1px));--panel-header-border-radius:var(--border-radius-rounded);--panel-header-gap:var(--space-xs);--panel-header-backdrop-filter:var(--backdrop-glass);--panel-header-background:var(--background-glass);--panel-threads-background:var(--color-base-background-o-95);--panel-threads-backdrop:var(--backdrop-blur);--panel-threads-border-radius:var(--border-radius);--panel-threads-border-top-left-radius:0;--panel-threads-padding:0 0 var(--space-s)0;--panel-threads-item-margin:var(--space-s);--panel-threads-scrollbar-width:thin;--panel-no-threads-padding:var(--space-s)var(--space-l);--panel-no-threads-font-size:var(--font-size-6);--panel-no-threads-color:var(--color-neutral-300);--reply-gap:var(--space-s);--reply-content-padding:var(--space-xs);--reply-content-background:var(--color-neutral-100);--reply-content-background-dark:var(--color-neutral-200);--reply-content-border-radius:var(--border-radius);--reply-header-gap:var(--space-xs);--reply-header-margin-bottom:var(--space-2xs);--reply-timestamp-font-size:var(--font-size-8);--reply-timestamp-color:var(--color-neutral-300);--welcome-dialog-background:var(--background-glass-frosted);--welcome-dialog-backdrop-filter:var(--backdrop-glass);--welcome-dialog-border:0px;--welcome-dialog-border-radius:var(--border-radius);--welcome-dialog-shadow:var(--shadow-l),var(--shadow-light-edge),var(--shadow-dark-edge);--welcome-dialog-max-width:500px;--welcome-dialog-backdrop-background:var(--color-base-background-o-10);--welcome-dialog-backdrop-backdrop-filter:none;--welcome-dialog-form-padding:var(--space-l);--welcome-dialog-title-margin:0 0 var(--space-s)0;--welcome-dialog-title-font-size:var(--font-size-4);--welcome-dialog-title-color:var(--color-base);--welcome-dialog-title-font-weight:var(--font-weight-bold);--welcome-dialog-text-margin:0 0 var(--space-m)0;--welcome-dialog-text-font-size:var(--font-size-6);--welcome-dialog-text-color:var(--color-neutral-600);--welcome-dialog-text-line-height:var(--line-height);--welcome-dialog-name-section-margin:var(--space-l);--welcome-dialog-input-border:1px solid var(--color-neutral-300);--welcome-dialog-input-border-radius:var(--border-radius-s);--welcome-dialog-input-padding:var(--space-xs);--welcome-dialog-input-font-family:var(--font-family);--welcome-dialog-input-font-size:var(--font-size-6);--welcome-dialog-input-color:var(--color-base);--welcome-dialog-input-background:var(--color-base-background);--welcome-dialog-input-outline-color:var(--outline-color);--welcome-dialog-input-outline-offset:var(--outline-offset);--welcome-dialog-footer-gap:var(--space-xs);--icon-size:1em}kirby-loop[data-theme=dark]{--color-neutral-l-0:0;--color-neutral-l-100:.1;--color-neutral-l-200:.2;--color-neutral-l-300:.3;--color-neutral-l-400:.4;--color-neutral-l-500:.5;--color-neutral-l-600:.6;--color-neutral-l-700:.7;--color-neutral-l-800:.9;--color-neutral-l-900:.95;--color-neutral-l-1000:1}kirby-loop{font-family:var(--font-family);line-height:var(--line-height);font-weight:var(--font-weight-normal);font-size:var(--font-size-7);box-sizing:border-box}html.loop-overlay-open a{pointer-events:none}')),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var lo = Object.defineProperty;
var Dr = (e) => {
  throw TypeError(e);
};
var uo = (e, t, r) => t in e ? lo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ae = (e, t, r) => uo(e, typeof t != "symbol" ? t + "" : t, r), jr = (e, t, r) => t.has(e) || Dr("Cannot " + r);
var ve = (e, t, r) => (jr(e, t, "read from private field"), r ? r.call(e) : t.get(e)), ar = (e, t, r) => t.has(e) ? Dr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), sr = (e, t, r, n) => (jr(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
const co = "5";
var nn;
typeof window < "u" && ((nn = window.__svelte ?? (window.__svelte = {})).v ?? (nn.v = /* @__PURE__ */ new Set())).add(co);
const pr = 1, br = 2, on = 4, fo = 8, vo = 16, mo = 1, ho = 2, go = 4, po = 8, bo = 16, wo = 1, _o = 2, wr = "[", _r = "[!", yr = "]", yt = {}, me = Symbol(), yo = "http://www.w3.org/1999/xhtml", Hr = !1, qe = 2, an = 4, Jt = 8, kr = 16, De = 32, ot = 64, Tt = 128, ze = 256, At = 512, _e = 1024, je = 2048, vt = 4096, Te = 8192, Kt = 16384, ko = 32768, xr = 65536, xo = 1 << 17, $o = 1 << 19, sn = 1 << 20, Qe = Symbol("$state"), ln = Symbol("legacy props"), Co = Symbol("");
var $r = Array.isArray, zo = Array.prototype.indexOf, Cr = Array.from, Lt = Object.keys, Dt = Object.defineProperty, et = Object.getOwnPropertyDescriptor, un = Object.getOwnPropertyDescriptors, Eo = Object.prototype, So = Array.prototype, zr = Object.getPrototypeOf;
function qo(e) {
  return e();
}
function jt(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Io = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let xt = [], $t = [];
function cn() {
  var e = xt;
  xt = [], jt(e);
}
function dn() {
  var e = $t;
  $t = [], jt(e);
}
function Gt(e) {
  xt.length === 0 && queueMicrotask(cn), xt.push(e);
}
function Mo(e) {
  $t.length === 0 && Io(dn), $t.push(e);
}
function Fr() {
  xt.length > 0 && cn(), $t.length > 0 && dn();
}
function fn(e) {
  return e === this.v;
}
function Po(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Er(e) {
  return !Po(e, this.v);
}
function Ro(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function No() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Oo(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function To() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ao() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Lo(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Do() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function jo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Ho() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Fo() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let mt = !1, Vo = !1;
function Bo() {
  mt = !0;
}
const Ct = /* @__PURE__ */ new Map();
function he(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: fn,
    rv: 0,
    wv: 0
  };
  return r;
}
function fe(e) {
  return /* @__PURE__ */ vn(he(e));
}
// @__NO_SIDE_EFFECTS__
function Qt(e, t = !1) {
  var n;
  const r = he(e);
  return t || (r.equals = Er), mt && J !== null && J.l !== null && ((n = J.l).s ?? (n.s = [])).push(r), r;
}
function Vr(e, t = !1) {
  return /* @__PURE__ */ vn(/* @__PURE__ */ Qt(e, t));
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return W !== null && !Se && (W.f & qe) !== 0 && (Me === null ? Xo([e]) : Me.push(e)), e;
}
function Pt(e, t) {
  return N(
    e,
    Ze(() => m(e))
  ), t;
}
function N(e, t) {
  return W !== null && !Se && It() && (W.f & (qe | kr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Me === null || !Me.includes(e)) && Fo(), dr(e, t);
}
function dr(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    St ? Ct.set(e, t) : Ct.set(e, r), e.v = t, e.wv = kn(), mn(e, je), It() && Y !== null && (Y.f & _e) !== 0 && (Y.f & (De | ot)) === 0 && (xe === null ? Uo([e]) : xe.push(e));
  }
  return t;
}
function mn(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = It(), o = r.length, a = 0; a < o; a++) {
      var s = r[a], i = s.f;
      (i & je) === 0 && (!n && s === Y || (Re(s, t), (i & (_e | ze)) !== 0 && ((i & qe) !== 0 ? mn(
        /** @type {Derived} */
        s,
        vt
      ) : tr(
        /** @type {Effect} */
        s
      ))));
    }
}
// @__NO_SIDE_EFFECTS__
function re(e) {
  var t = qe | je, r = W !== null && (W.f & qe) !== 0 ? (
    /** @type {Derived} */
    W
  ) : null;
  return Y === null || r !== null && (r.f & ze) !== 0 ? t |= ze : Y.f |= sn, {
    ctx: J,
    deps: null,
    effects: null,
    equals: fn,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? Y
  };
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = /* @__PURE__ */ re(e);
  return t.equals = Er, t;
}
function hn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Le(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Yo(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & qe) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Wo(e) {
  var t, r = Y;
  Ue(Yo(e));
  try {
    hn(e), t = $n(e);
  } finally {
    Ue(r);
  }
  return t;
}
function gn(e) {
  var t = Wo(e), r = (Ye || (e.f & ze) !== 0) && e.deps !== null ? vt : _e;
  Re(e, r), e.equals(t) || (e.v = t, e.wv = kn());
}
function Sr(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let A = !1;
function Oe(e) {
  A = e;
}
let F;
function we(e) {
  if (e === null)
    throw Sr(), yt;
  return F = e;
}
function Et() {
  return we(
    /** @type {TemplateNode} */
    /* @__PURE__ */ He(F)
  );
}
function $(e) {
  if (A) {
    if (/* @__PURE__ */ He(F) !== null)
      throw Sr(), yt;
    F = e;
  }
}
function be(e = 1) {
  if (A) {
    for (var t = e, r = F; t--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ He(r);
    F = r;
  }
}
function fr() {
  for (var e = 0, t = F; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === yr) {
        if (e === 0) return t;
        e -= 1;
      } else (r === wr || r === _r) && (e += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ He(t)
    );
    t.remove(), t = n;
  }
}
function Q(e, t = null, r) {
  if (typeof e != "object" || e === null || Qe in e)
    return e;
  const n = zr(e);
  if (n !== Eo && n !== So)
    return e;
  var o = /* @__PURE__ */ new Map(), a = $r(e), s = he(0);
  a && o.set("length", he(
    /** @type {any[]} */
    e.length
  ));
  var i;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, c, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Do();
        var h = o.get(c);
        return h === void 0 ? (h = he(v.value), o.set(c, h)) : N(h, Q(v.value, i)), !0;
      },
      deleteProperty(u, c) {
        var v = o.get(c);
        if (v === void 0)
          c in u && o.set(c, he(me));
        else {
          if (a && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              o.get("length")
            ), l = Number(c);
            Number.isInteger(l) && l < h.v && N(h, l);
          }
          N(v, me), Br(s);
        }
        return !0;
      },
      get(u, c, v) {
        var f;
        if (c === Qe)
          return e;
        var h = o.get(c), l = c in u;
        if (h === void 0 && (!l || (f = et(u, c)) != null && f.writable) && (h = he(Q(l ? u[c] : me, i)), o.set(c, h)), h !== void 0) {
          var d = m(h);
          return d === me ? void 0 : d;
        }
        return Reflect.get(u, c, v);
      },
      getOwnPropertyDescriptor(u, c) {
        var v = Reflect.getOwnPropertyDescriptor(u, c);
        if (v && "value" in v) {
          var h = o.get(c);
          h && (v.value = m(h));
        } else if (v === void 0) {
          var l = o.get(c), d = l == null ? void 0 : l.v;
          if (l !== void 0 && d !== me)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return v;
      },
      has(u, c) {
        var d;
        if (c === Qe)
          return !0;
        var v = o.get(c), h = v !== void 0 && v.v !== me || Reflect.has(u, c);
        if (v !== void 0 || Y !== null && (!h || (d = et(u, c)) != null && d.writable)) {
          v === void 0 && (v = he(h ? Q(u[c], i) : me), o.set(c, v));
          var l = m(v);
          if (l === me)
            return !1;
        }
        return h;
      },
      set(u, c, v, h) {
        var k;
        var l = o.get(c), d = c in u;
        if (a && c === "length")
          for (var f = v; f < /** @type {Source<number>} */
          l.v; f += 1) {
            var p = o.get(f + "");
            p !== void 0 ? N(p, me) : f in u && (p = he(me), o.set(f + "", p));
          }
        l === void 0 ? (!d || (k = et(u, c)) != null && k.writable) && (l = he(void 0), N(l, Q(v, i)), o.set(c, l)) : (d = l.v !== me, N(l, Q(v, i)));
        var w = Reflect.getOwnPropertyDescriptor(u, c);
        if (w != null && w.set && w.set.call(h, v), !d) {
          if (a && typeof c == "string") {
            var q = (
              /** @type {Source<number>} */
              o.get("length")
            ), _ = Number(c);
            Number.isInteger(_) && _ >= q.v && N(q, _ + 1);
          }
          Br(s);
        }
        return !0;
      },
      ownKeys(u) {
        m(s);
        var c = Reflect.ownKeys(u).filter((l) => {
          var d = o.get(l);
          return d === void 0 || d.v !== me;
        });
        for (var [v, h] of o)
          h.v !== me && !(v in u) && c.push(v);
        return c;
      },
      setPrototypeOf() {
        jo();
      }
    }
  );
}
function Br(e, t = 1) {
  N(e, e.v + t);
}
var Yr, pn, bn, wn, _n;
function vr() {
  if (Yr === void 0) {
    Yr = window, pn = document, bn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    wn = et(t, "firstChild").get, _n = et(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function We(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ie(e) {
  return wn.call(e);
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  return _n.call(e);
}
function E(e, t) {
  if (!A)
    return /* @__PURE__ */ Ie(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ie(F)
  );
  if (r === null)
    r = F.appendChild(We());
  else if (t && r.nodeType !== 3) {
    var n = We();
    return r == null || r.before(n), we(n), n;
  }
  return we(r), r;
}
function Ae(e, t) {
  if (!A) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ie(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ He(r) : r;
  }
  return F;
}
function B(e, t = 1, r = !1) {
  let n = A ? F : e;
  for (var o; t--; )
    o = n, n = /** @type {TemplateNode} */
    /* @__PURE__ */ He(n);
  if (!A)
    return n;
  var a = n == null ? void 0 : n.nodeType;
  if (r && a !== 3) {
    var s = We();
    return n === null ? o == null || o.after(s) : n.before(s), we(s), s;
  }
  return we(n), /** @type {TemplateNode} */
  n;
}
function qr(e) {
  e.textContent = "";
}
let Nt = !1, Ht = !1, Ft = null, tt = !1, St = !1;
function Wr(e) {
  St = e;
}
let kt = [];
let W = null, Se = !1;
function Xe(e) {
  W = e;
}
let Y = null;
function Ue(e) {
  Y = e;
}
let Me = null;
function Xo(e) {
  Me = e;
}
let ce = null, ge = 0, xe = null;
function Uo(e) {
  xe = e;
}
let yn = 1, Vt = 0, Ye = !1;
function kn() {
  return ++yn;
}
function qt(e) {
  var h;
  var t = e.f;
  if ((t & je) !== 0)
    return !0;
  if ((t & vt) !== 0) {
    var r = e.deps, n = (t & ze) !== 0;
    if (r !== null) {
      var o, a, s = (t & At) !== 0, i = n && Y !== null && !Ye, u = r.length;
      if (s || i) {
        var c = (
          /** @type {Derived} */
          e
        ), v = c.parent;
        for (o = 0; o < u; o++)
          a = r[o], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= At), i && v !== null && (v.f & ze) === 0 && (c.f ^= ze);
      }
      for (o = 0; o < u; o++)
        if (a = r[o], qt(
          /** @type {Derived} */
          a
        ) && gn(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!n || Y !== null && !Ye) && Re(e, _e);
  }
  return !1;
}
function Zo(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & Tt) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= Tt;
      }
    r = r.parent;
  }
  throw Nt = !1, e;
}
function Jo(e) {
  return (e.f & Kt) === 0 && (e.parent === null || (e.parent.f & Tt) === 0);
}
function er(e, t, r, n) {
  if (Nt) {
    if (r === null && (Nt = !1), Jo(t))
      throw e;
    return;
  }
  r !== null && (Nt = !0);
  {
    Zo(e, t);
    return;
  }
}
function xn(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var o = 0; o < n.length; o++) {
      var a = n[o];
      (a.f & qe) !== 0 ? xn(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? Re(a, je) : (a.f & _e) !== 0 && Re(a, vt), tr(
        /** @type {Effect} */
        a
      ));
    }
}
function $n(e) {
  var d;
  var t = ce, r = ge, n = xe, o = W, a = Ye, s = Me, i = J, u = Se, c = e.f;
  ce = /** @type {null | Value[]} */
  null, ge = 0, xe = null, Ye = (c & ze) !== 0 && (Se || !tt || W === null), W = (c & (De | ot)) === 0 ? e : null, Me = null, Xr(e.ctx), Se = !1, Vt++;
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (ce !== null) {
      var l;
      if (Bt(e, ge), h !== null && ge > 0)
        for (h.length = ge + ce.length, l = 0; l < ce.length; l++)
          h[ge + l] = ce[l];
      else
        e.deps = h = ce;
      if (!Ye)
        for (l = ge; l < h.length; l++)
          ((d = h[l]).reactions ?? (d.reactions = [])).push(e);
    } else h !== null && ge < h.length && (Bt(e, ge), h.length = ge);
    if (It() && xe !== null && !Se && h !== null && (e.f & (qe | vt | je)) === 0)
      for (l = 0; l < /** @type {Source[]} */
      xe.length; l++)
        xn(
          xe[l],
          /** @type {Effect} */
          e
        );
    return o !== null && (Vt++, xe !== null && (n === null ? n = xe : n.push(.../** @type {Source[]} */
    xe))), v;
  } finally {
    ce = t, ge = r, xe = n, W = o, Ye = a, Me = s, Xr(i), Se = u;
  }
}
function Ko(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = zo.call(r, e);
    if (n !== -1) {
      var o = r.length - 1;
      o === 0 ? r = t.reactions = null : (r[n] = r[o], r.pop());
    }
  }
  r === null && (t.f & qe) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ce === null || !ce.includes(t)) && (Re(t, vt), (t.f & (ze | At)) === 0 && (t.f ^= At), hn(
    /** @type {Derived} **/
    t
  ), Bt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Bt(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Ko(e, r[n]);
}
function Ir(e) {
  var t = e.f;
  if ((t & Kt) === 0) {
    Re(e, _e);
    var r = Y, n = J, o = tt;
    Y = e, tt = !0;
    try {
      (t & kr) !== 0 ? la(e) : Sn(e), En(e);
      var a = $n(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = yn;
      var s = e.deps, i;
      Hr && Vo && e.f & je;
    } catch (u) {
      er(u, e, r, n || e.ctx);
    } finally {
      tt = o, Y = r;
    }
  }
}
function Go() {
  try {
    To();
  } catch (e) {
    if (Ft !== null)
      er(e, Ft, null);
    else
      throw e;
  }
}
function Cn() {
  var e = tt;
  try {
    var t = 0;
    for (tt = !0; kt.length > 0; ) {
      t++ > 1e3 && Go();
      var r = kt, n = r.length;
      kt = [];
      for (var o = 0; o < n; o++) {
        var a = ea(r[o]);
        Qo(a);
      }
    }
  } finally {
    Ht = !1, tt = e, Ft = null, Ct.clear();
  }
}
function Qo(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var n = e[r];
      if ((n.f & (Kt | Te)) === 0)
        try {
          qt(n) && (Ir(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? qn(n) : n.fn = null));
        } catch (o) {
          er(o, n, null, n.ctx);
        }
    }
}
function tr(e) {
  Ht || (Ht = !0, queueMicrotask(Cn));
  for (var t = Ft = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (ot | De)) !== 0) {
      if ((r & _e) === 0) return;
      t.f ^= _e;
    }
  }
  kt.push(t);
}
function ea(e) {
  for (var t = [], r = e; r !== null; ) {
    var n = r.f, o = (n & (De | ot)) !== 0, a = o && (n & _e) !== 0;
    if (!a && (n & Te) === 0) {
      if ((n & an) !== 0)
        t.push(r);
      else if (o)
        r.f ^= _e;
      else {
        var s = W;
        try {
          W = r, qt(r) && Ir(r);
        } catch (c) {
          er(c, r, null, r.ctx);
        } finally {
          W = s;
        }
      }
      var i = r.first;
      if (i !== null) {
        r = i;
        continue;
      }
    }
    var u = r.parent;
    for (r = r.next; r === null && u !== null; )
      r = u.next, u = u.parent;
  }
  return t;
}
function z(e) {
  var t;
  for (Fr(); kt.length > 0; )
    Ht = !0, Cn(), Fr();
  return (
    /** @type {T} */
    t
  );
}
async function ta() {
  await Promise.resolve(), z();
}
function m(e) {
  var t = e.f, r = (t & qe) !== 0;
  if (W !== null && !Se) {
    Me !== null && Me.includes(e) && Ho();
    var n = W.deps;
    e.rv < Vt && (e.rv = Vt, ce === null && n !== null && n[ge] === e ? ge++ : ce === null ? ce = [e] : (!Ye || !ce.includes(e)) && ce.push(e));
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), a = o.parent;
    a !== null && (a.f & ze) === 0 && (o.f ^= ze);
  }
  return r && (o = /** @type {Derived} */
  e, qt(o) && gn(o)), St && Ct.has(e) ? Ct.get(e) : e.v;
}
function Ze(e) {
  var t = Se;
  try {
    return Se = !0, e();
  } finally {
    Se = t;
  }
}
const ra = -7169;
function Re(e, t) {
  e.f = e.f & ra | t;
}
function na(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Qe in e)
      mr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && Qe in r && mr(r);
      }
  }
}
function mr(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        mr(e[n], t);
      } catch {
      }
    const r = zr(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const n = un(r);
      for (let o in n) {
        const a = n[o].get;
        if (a)
          try {
            a.call(e);
          } catch {
          }
      }
    }
  }
}
function zn(e) {
  Y === null && W === null && Oo(), W !== null && (W.f & ze) !== 0 && Y === null && No(), St && Ro();
}
function oa(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function at(e, t, r, n = !0) {
  var o = Y, a = {
    ctx: J,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | je,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: o,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      Ir(a), a.f |= ko;
    } catch (u) {
      throw Le(a), u;
    }
  else t !== null && tr(a);
  var s = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & (sn | Tt)) === 0;
  if (!s && n && (o !== null && oa(a, o), W !== null && (W.f & qe) !== 0)) {
    var i = (
      /** @type {Derived} */
      W
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return a;
}
function rr(e) {
  const t = at(Jt, null, !1);
  return Re(t, _e), t.teardown = e, t;
}
function rt(e) {
  zn();
  var t = Y !== null && (Y.f & De) !== 0 && J !== null && !J.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      J
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: Y,
      reaction: W
    });
  } else {
    var n = Mr(e);
    return n;
  }
}
function aa(e) {
  return zn(), ht(e);
}
function sa(e) {
  const t = at(ot, e, !0);
  return () => {
    Le(t);
  };
}
function ia(e) {
  const t = at(ot, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Yt(t, () => {
      Le(t), n(void 0);
    }) : (Le(t), n(void 0));
  });
}
function Mr(e) {
  return at(an, e, !1);
}
function ht(e) {
  return at(Jt, e, !0);
}
function H(e, t = [], r = re) {
  const n = t.map(r);
  return Pr(() => e(...n.map(m)));
}
function Pr(e, t = 0) {
  return at(Jt | kr | t, e, !0);
}
function zt(e, t = !0) {
  return at(Jt | De, e, !0, t);
}
function En(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = St, n = W;
    Wr(!0), Xe(null);
    try {
      t.call(null);
    } finally {
      Wr(r), Xe(n);
    }
  }
}
function Sn(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var n = r.next;
    (r.f & ot) !== 0 ? r.parent = null : Le(r, t), r = n;
  }
}
function la(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & De) === 0 && Le(t), t = r;
  }
}
function Le(e, t = !0) {
  var r = !1;
  if ((t || (e.f & $o) !== 0) && e.nodes_start !== null) {
    for (var n = e.nodes_start, o = e.nodes_end; n !== null; ) {
      var a = n === o ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ He(n)
      );
      n.remove(), n = a;
    }
    r = !0;
  }
  Sn(e, t && !r), Bt(e, 0), Re(e, Kt);
  var s = e.transitions;
  if (s !== null)
    for (const u of s)
      u.stop();
  En(e);
  var i = e.parent;
  i !== null && i.first !== null && qn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function qn(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Yt(e, t) {
  var r = [];
  Rr(e, r, !0), In(r, () => {
    Le(e), t && t();
  });
}
function In(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var o of e)
      o.out(n);
  } else
    t();
}
function Rr(e, t, r) {
  if ((e.f & Te) === 0) {
    if (e.f ^= Te, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || r) && t.push(s);
    for (var n = e.first; n !== null; ) {
      var o = n.next, a = (n.f & xr) !== 0 || (n.f & De) !== 0;
      Rr(n, t, a ? r : !1), n = o;
    }
  }
}
function Wt(e) {
  Mn(e, !0);
}
function Mn(e, t) {
  if ((e.f & Te) !== 0) {
    e.f ^= Te, (e.f & _e) === 0 && (e.f ^= _e), qt(e) && (Re(e, je), tr(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, o = (r.f & xr) !== 0 || (r.f & De) !== 0;
      Mn(r, o ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
function Pn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let J = null;
function Xr(e) {
  J = e;
}
function ye(e, t = !1, r) {
  var n = J = {
    p: J,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  mt && !t && (J.l = {
    s: null,
    u: null,
    r1: [],
    r2: he(!1)
  }), rr(() => {
    n.d = !0;
  });
}
function ke(e) {
  const t = J;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const s = t.e;
    if (s !== null) {
      var r = Y, n = W;
      t.e = null;
      try {
        for (var o = 0; o < s.length; o++) {
          var a = s[o];
          Ue(a.effect), Xe(a.reaction), Mr(a.fn);
        }
      } finally {
        Ue(r), Xe(n);
      }
    }
    J = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function It() {
  return !mt || J !== null && J.l === null;
}
const ua = ["touchstart", "touchmove"];
function ca(e) {
  return ua.includes(e);
}
function da(e) {
  A && /* @__PURE__ */ Ie(e) !== null && qr(e);
}
let Ur = !1;
function Rn() {
  Ur || (Ur = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = r.__on_r) == null || t.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Nn(e) {
  var t = W, r = Y;
  Xe(null), Ue(null);
  try {
    return e();
  } finally {
    Xe(t), Ue(r);
  }
}
function fa(e, t, r, n = r) {
  e.addEventListener(t, () => Nn(r));
  const o = e.__on_r;
  o ? e.__on_r = () => {
    o(), n(!0);
  } : e.__on_r = () => n(!0), Rn();
}
const On = /* @__PURE__ */ new Set(), hr = /* @__PURE__ */ new Set();
function va(e, t, r, n = {}) {
  function o(a) {
    if (n.capture || _t.call(t, a), !a.cancelBubble)
      return Nn(() => r == null ? void 0 : r.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Gt(() => {
    t.addEventListener(e, o, n);
  }) : t.addEventListener(e, o, n), o;
}
function Je(e, t, r, n, o) {
  var a = { capture: n, passive: o }, s = va(e, t, r, a);
  (t === document.body || t === window || t === document) && rr(() => {
    t.removeEventListener(e, s, a);
  });
}
function Tn(e) {
  for (var t = 0; t < e.length; t++)
    On.add(e[t]);
  for (var r of hr)
    r(e);
}
function _t(e) {
  var _;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, o = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], a = (
    /** @type {null | Element} */
    o[0] || e.target
  ), s = 0, i = e.__root;
  if (i) {
    var u = o.indexOf(i);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = o.indexOf(t);
    if (c === -1)
      return;
    u <= c && (s = u);
  }
  if (a = /** @type {Element} */
  o[s] || e.target, a !== t) {
    Dt(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = W, h = Y;
    Xe(null), Ue(null);
    try {
      for (var l, d = []; a !== null; ) {
        var f = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + n];
          if (p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if ($r(p)) {
              var [w, ...q] = p;
              w.apply(a, [e, ...q]);
            } else
              p.call(a, e);
        } catch (k) {
          l ? d.push(k) : l = k;
        }
        if (e.cancelBubble || f === t || f === null)
          break;
        a = f;
      }
      if (l) {
        for (let k of d)
          queueMicrotask(() => {
            throw k;
          });
        throw l;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Xe(v), Ue(h);
    }
  }
}
function An(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Pe(e, t) {
  var r = (
    /** @type {Effect} */
    Y
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function X(e, t) {
  var r = (t & wo) !== 0, n = (t & _o) !== 0, o, a = !e.startsWith("<!>");
  return () => {
    if (A)
      return Pe(F, null), F;
    o === void 0 && (o = An(a ? e : "<!>" + e), r || (o = /** @type {Node} */
    /* @__PURE__ */ Ie(o)));
    var s = (
      /** @type {TemplateNode} */
      n || bn ? document.importNode(o, !0) : o.cloneNode(!0)
    );
    if (r) {
      var i = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(s)
      ), u = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      Pe(i, u);
    } else
      Pe(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Mt(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), o = `<${r}>${n ? e : "<!>" + e}</${r}>`, a;
  return () => {
    if (A)
      return Pe(F, null), F;
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        An(o)
      ), i = (
        /** @type {Element} */
        /* @__PURE__ */ Ie(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ Ie(i);
    }
    var u = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return Pe(u, u), u;
  };
}
function de(e = "") {
  if (!A) {
    var t = We(e + "");
    return Pe(t, t), t;
  }
  var r = F;
  return r.nodeType !== 3 && (r.before(r = We()), we(r)), Pe(r, r), r;
}
function Nr() {
  if (A)
    return Pe(F, null), F;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = We();
  return e.append(t, r), Pe(t, r), e;
}
function C(e, t) {
  if (A) {
    Y.nodes_end = F, Et();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function V(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function Ln(e, t) {
  return Dn(e, t);
}
function ma(e, t) {
  vr(), t.intro = t.intro ?? !1;
  const r = t.target, n = A, o = F;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== wr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ He(a);
    if (!a)
      throw yt;
    Oe(!0), we(
      /** @type {Comment} */
      a
    ), Et();
    const s = Dn(e, { ...t, anchor: a });
    if (F === null || F.nodeType !== 8 || /** @type {Comment} */
    F.data !== yr)
      throw Sr(), yt;
    return Oe(!1), /**  @type {Exports} */
    s;
  } catch (s) {
    if (s === yt)
      return t.recover === !1 && Ao(), vr(), qr(r), Oe(!1), Ln(e, t);
    throw s;
  } finally {
    Oe(n), we(o);
  }
}
const it = /* @__PURE__ */ new Map();
function Dn(e, { target: t, anchor: r, props: n = {}, events: o, context: a, intro: s = !0 }) {
  vr();
  var i = /* @__PURE__ */ new Set(), u = (h) => {
    for (var l = 0; l < h.length; l++) {
      var d = h[l];
      if (!i.has(d)) {
        i.add(d);
        var f = ca(d);
        t.addEventListener(d, _t, { passive: f });
        var p = it.get(d);
        p === void 0 ? (document.addEventListener(d, _t, { passive: f }), it.set(d, 1)) : it.set(d, p + 1);
      }
    }
  };
  u(Cr(On)), hr.add(u);
  var c = void 0, v = ia(() => {
    var h = r ?? t.appendChild(We());
    return zt(() => {
      if (a) {
        ye({});
        var l = (
          /** @type {ComponentContext} */
          J
        );
        l.c = a;
      }
      o && (n.$$events = o), A && Pe(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, n) || {}, A && (Y.nodes_end = F), a && ke();
    }), () => {
      var f;
      for (var l of i) {
        t.removeEventListener(l, _t);
        var d = (
          /** @type {number} */
          it.get(l)
        );
        --d === 0 ? (document.removeEventListener(l, _t), it.delete(l)) : it.set(l, d);
      }
      hr.delete(u), h !== r && ((f = h.parentNode) == null || f.removeChild(h));
    };
  });
  return gr.set(c, v), c;
}
let gr = /* @__PURE__ */ new WeakMap();
function ha(e, t) {
  const r = gr.get(e);
  return r ? (gr.delete(e), r(t)) : Promise.resolve();
}
function Ce(e, t, [r, n] = [0, 0]) {
  A && r === 0 && Et();
  var o = e, a = null, s = null, i = me, u = r > 0 ? xr : 0, c = !1;
  const v = (l, d = !0) => {
    c = !0, h(d, l);
  }, h = (l, d) => {
    if (i === (i = l)) return;
    let f = !1;
    if (A && n !== -1) {
      if (r === 0) {
        const w = (
          /** @type {Comment} */
          o.data
        );
        w === wr ? n = 0 : w === _r ? n = 1 / 0 : (n = parseInt(w.substring(1)), n !== n && (n = i ? 1 / 0 : -1));
      }
      const p = n > r;
      !!i === p && (o = fr(), we(o), Oe(!1), f = !0, n = -1);
    }
    i ? (a ? Wt(a) : d && (a = zt(() => d(o))), s && Yt(s, () => {
      s = null;
    })) : (s ? Wt(s) : d && (s = zt(() => d(o, [r + 1, n]))), a && Yt(a, () => {
      a = null;
    })), f && Oe(!0);
  };
  Pr(() => {
    c = !1, t(v), c || h(null, null);
  }, u), A && (o = F);
}
function Zr(e, t) {
  A && we(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ie(e)
  ), ht(() => {
    var r = t();
    for (var n in r) {
      var o = r[n];
      o ? e.style.setProperty(n, o) : e.style.removeProperty(n);
    }
  }), rr(() => {
    e.remove();
  });
}
function ga(e, t, r, n) {
  for (var o = [], a = t.length, s = 0; s < a; s++)
    Rr(t[s].e, o, !0);
  var i = a > 0 && o.length === 0 && r !== null;
  if (i) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    qr(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), Be(e, t[0].prev, t[a - 1].next);
  }
  In(o, () => {
    for (var c = 0; c < a; c++) {
      var v = t[c];
      i || (n.delete(v.k), Be(e, v.prev, v.next)), Le(v.e, !i);
    }
  });
}
function Or(e, t, r, n, o, a = null) {
  var s = e, i = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, u = (t & on) !== 0;
  if (u) {
    var c = (
      /** @type {Element} */
      e
    );
    s = A ? we(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ie(c)
    ) : c.appendChild(We());
  }
  A && Et();
  var v = null, h = !1, l = /* @__PURE__ */ pe(() => {
    var d = r();
    return $r(d) ? d : d == null ? [] : Cr(d);
  });
  Pr(() => {
    var d = m(l), f = d.length;
    if (h && f === 0)
      return;
    h = f === 0;
    let p = !1;
    if (A) {
      var w = (
        /** @type {Comment} */
        s.data === _r
      );
      w !== (f === 0) && (s = fr(), we(s), Oe(!1), p = !0);
    }
    if (A) {
      for (var q = null, _, k = 0; k < f; k++) {
        if (F.nodeType === 8 && /** @type {Comment} */
        F.data === yr) {
          s = /** @type {Comment} */
          F, p = !0, Oe(!1);
          break;
        }
        var x = d[k], g = n(x, k);
        _ = jn(
          F,
          i,
          q,
          null,
          x,
          g,
          k,
          o,
          t,
          r
        ), i.items.set(g, _), q = _;
      }
      f > 0 && we(fr());
    }
    A || pa(d, i, s, o, t, n, r), a !== null && (f === 0 ? v ? Wt(v) : v = zt(() => a(s)) : v !== null && Yt(v, () => {
      v = null;
    })), p && Oe(!0), m(l);
  }), A && (s = F);
}
function pa(e, t, r, n, o, a, s) {
  var ee, ue, O, K;
  var i = (o & fo) !== 0, u = (o & (pr | br)) !== 0, c = e.length, v = t.items, h = t.first, l = h, d, f = null, p, w = [], q = [], _, k, x, g;
  if (i)
    for (g = 0; g < c; g += 1)
      _ = e[g], k = a(_, g), x = v.get(k), x !== void 0 && ((ee = x.a) == null || ee.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(x));
  for (g = 0; g < c; g += 1) {
    if (_ = e[g], k = a(_, g), x = v.get(k), x === void 0) {
      var P = l ? (
        /** @type {TemplateNode} */
        l.e.nodes_start
      ) : r;
      f = jn(
        P,
        t,
        f,
        f === null ? t.first : f.next,
        _,
        k,
        g,
        n,
        o,
        s
      ), v.set(k, f), w = [], q = [], l = f.next;
      continue;
    }
    if (u && ba(x, _, g, o), (x.e.f & Te) !== 0 && (Wt(x.e), i && ((ue = x.a) == null || ue.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(x))), x !== l) {
      if (d !== void 0 && d.has(x)) {
        if (w.length < q.length) {
          var I = q[0], b;
          f = I.prev;
          var R = w[0], M = w[w.length - 1];
          for (b = 0; b < w.length; b += 1)
            Jr(w[b], I, r);
          for (b = 0; b < q.length; b += 1)
            d.delete(q[b]);
          Be(t, R.prev, M.next), Be(t, f, R), Be(t, M, I), l = I, f = M, g -= 1, w = [], q = [];
        } else
          d.delete(x), Jr(x, l, r), Be(t, x.prev, x.next), Be(t, x, f === null ? t.first : f.next), Be(t, f, x), f = x;
        continue;
      }
      for (w = [], q = []; l !== null && l.k !== k; )
        (l.e.f & Te) === 0 && (d ?? (d = /* @__PURE__ */ new Set())).add(l), q.push(l), l = l.next;
      if (l === null)
        continue;
      x = l;
    }
    w.push(x), f = x, l = x.next;
  }
  if (l !== null || d !== void 0) {
    for (var D = d === void 0 ? [] : Cr(d); l !== null; )
      (l.e.f & Te) === 0 && D.push(l), l = l.next;
    var G = D.length;
    if (G > 0) {
      var ie = (o & on) !== 0 && c === 0 ? r : null;
      if (i) {
        for (g = 0; g < G; g += 1)
          (O = D[g].a) == null || O.measure();
        for (g = 0; g < G; g += 1)
          (K = D[g].a) == null || K.fix();
      }
      ga(t, D, ie, v);
    }
  }
  i && Gt(() => {
    var y;
    if (p !== void 0)
      for (x of p)
        (y = x.a) == null || y.apply();
  }), Y.first = t.first && t.first.e, Y.last = f && f.e;
}
function ba(e, t, r, n) {
  (n & pr) !== 0 && dr(e.v, t), (n & br) !== 0 ? dr(
    /** @type {Value<number>} */
    e.i,
    r
  ) : e.i = r;
}
function jn(e, t, r, n, o, a, s, i, u, c) {
  var v = (u & pr) !== 0, h = (u & vo) === 0, l = v ? h ? /* @__PURE__ */ Qt(o) : he(o) : o, d = (u & br) === 0 ? s : he(s), f = {
    i: d,
    v: l,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return f.e = zt(() => i(e, l, d, c), A), f.e.prev = r && r.e, f.e.next = n && n.e, r === null ? t.first = f : (r.next = f, r.e.next = f.e), n !== null && (n.prev = f, n.e.prev = f.e), f;
  } finally {
  }
}
function Jr(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, o = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, a = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); a !== n; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ He(a)
    );
    o.before(a), a = s;
  }
}
function Be(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function Kr(e, t, r, n, o) {
  var i;
  A && Et();
  var a = (i = t.$$slots) == null ? void 0 : i[r], s = !1;
  a === !0 && (a = t[r === "default" ? "children" : r], s = !0), a === void 0 || a(e, s ? () => n : n);
}
function wa(e) {
  const t = {};
  e.children && (t.default = !0);
  for (const r in e.$$slots)
    t[r] = !0;
  return t;
}
function le(e, t) {
  Gt(() => {
    var r = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const o = document.createElement("style");
      o.id = t.hash, o.textContent = t.code, n.appendChild(o);
    }
  });
}
const Gr = [...` 	
\r\f \v\uFEFF`];
function _a(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), r) {
    for (var o in r)
      if (r[o])
        n = n ? n + " " + o : o;
      else if (n.length)
        for (var a = o.length, s = 0; (s = n.indexOf(o, s)) >= 0; ) {
          var i = s + a;
          (s === 0 || Gr.includes(n[s - 1])) && (i === n.length || Gr.includes(n[i])) ? n = (s === 0 ? "" : n.substring(0, s)) + n.substring(i + 1) : s = i;
        }
  }
  return n === "" ? null : n;
}
function ya(e, t) {
  return e == null ? null : String(e);
}
function st(e, t, r, n, o, a) {
  var s = e.__className;
  if (A || s !== r) {
    var i = _a(r, n, a);
    (!A || i !== e.getAttribute("class")) && (i == null ? e.removeAttribute("class") : e.className = i), e.__className = r;
  } else if (a && o !== a)
    for (var u in a) {
      var c = !!a[u];
      (o == null || c !== !!o[u]) && e.classList.toggle(u, c);
    }
  return a;
}
function ka(e, t, r, n) {
  var o = e.__style;
  if (A || o !== t) {
    var a = ya(t);
    (!A || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
  }
  return n;
}
const xa = Symbol("is custom element"), $a = Symbol("is html");
function Ca(e) {
  if (A) {
    var t = !1, r = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var n = e.value;
          te(e, "value", null), e.value = n;
        }
        if (e.hasAttribute("checked")) {
          var o = e.checked;
          te(e, "checked", null), e.checked = o;
        }
      }
    };
    e.__on_r = r, Mo(r), Rn();
  }
}
function te(e, t, r, n) {
  var o = za(e);
  A && (o[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || o[t] !== (o[t] = r) && (t === "loading" && (e[Co] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ea(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function za(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [xa]: e.nodeName.includes("-"),
      [$a]: e.namespaceURI === yo
    })
  );
}
var Qr = /* @__PURE__ */ new Map();
function Ea(e) {
  var t = Qr.get(e.nodeName);
  if (t) return t;
  Qr.set(e.nodeName, t = []);
  for (var r, n = e, o = Element.prototype; o !== n; ) {
    r = un(n);
    for (var a in r)
      r[a].set && t.push(a);
    n = zr(n);
  }
  return t;
}
function Hn(e, t, r = t) {
  var n = It();
  fa(e, "input", (o) => {
    var a = o ? e.defaultValue : e.value;
    if (a = ir(e) ? lr(a) : a, r(a), n && a !== (a = t())) {
      var s = e.selectionStart, i = e.selectionEnd;
      e.value = a ?? "", i !== null && (e.selectionStart = s, e.selectionEnd = Math.min(i, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (A && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ze(t) == null && e.value) && r(ir(e) ? lr(e.value) : e.value), ht(() => {
    var o = t();
    ir(e) && o === lr(e.value) || e.type === "date" && !o && !e.value || o !== e.value && (e.value = o ?? "");
  });
}
function ir(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function lr(e) {
  return e === "" ? null : +e;
}
function en(e, t) {
  return e === t || (e == null ? void 0 : e[Qe]) === t;
}
function nt(e = {}, t, r, n) {
  return Mr(() => {
    var o, a;
    return ht(() => {
      o = a, a = [], Ze(() => {
        e !== r(...a) && (t(e, ...a), o && en(r(...o), e) && t(null, ...o));
      });
    }), () => {
      Gt(() => {
        a && en(r(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Sa(e, t, r, n, o) {
  var a = () => {
    n(r[e]);
  };
  r.addEventListener(t, a), o ? ht(() => {
    r[e] = o();
  }) : a(), (r === document.body || r === window || r === document) && rr(() => {
    r.removeEventListener(t, a);
  });
}
function Fn(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    J
  ), r = t.l.u;
  if (!r) return;
  let n = () => na(t.s);
  if (e) {
    let o = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ re(() => {
      let i = !1;
      const u = t.s;
      for (const c in u)
        u[c] !== a[c] && (a[c] = u[c], i = !0);
      return i && o++, o;
    });
    n = () => m(s);
  }
  r.b.length && aa(() => {
    tn(t, n), jt(r.b);
  }), rt(() => {
    const o = Ze(() => r.m.map(qo));
    return () => {
      for (const a of o)
        typeof a == "function" && a();
    };
  }), r.a.length && rt(() => {
    tn(t, n), jt(r.a);
  });
}
function tn(e, t) {
  if (e.l.s)
    for (const r of e.l.s) m(r);
  t();
}
function qa(e) {
  var t = he(0);
  return function() {
    return arguments.length === 1 ? (N(t, m(t) + 1), arguments[0]) : (m(t), e());
  };
}
function nr(e) {
  J === null && Pn(), mt && J.l !== null ? Ia(J).m.push(e) : rt(() => {
    const t = Ze(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Vn(e) {
  J === null && Pn(), nr(() => () => Ze(e));
}
function Ia(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
let Rt = !1;
function Ma(e) {
  var t = Rt;
  try {
    return Rt = !1, [e(), Rt];
  } finally {
    Rt = t;
  }
}
function rn(e) {
  var t;
  return ((t = e.ctx) == null ? void 0 : t.d) ?? !1;
}
function S(e, t, r, n) {
  var P;
  var o = (r & mo) !== 0, a = !mt || (r & ho) !== 0, s = (r & po) !== 0, i = (r & bo) !== 0, u = !1, c;
  s ? [c, u] = Ma(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var v = Qe in e || ln in e, h = s && (((P = et(e, t)) == null ? void 0 : P.set) ?? (v && t in e && ((I) => e[t] = I))) || void 0, l = (
    /** @type {V} */
    n
  ), d = !0, f = !1, p = () => (f = !0, d && (d = !1, i ? l = Ze(
    /** @type {() => V} */
    n
  ) : l = /** @type {V} */
  n), l);
  c === void 0 && n !== void 0 && (h && a && Lo(), c = p(), h && h(c));
  var w;
  if (a)
    w = () => {
      var I = (
        /** @type {V} */
        e[t]
      );
      return I === void 0 ? p() : (d = !0, f = !1, I);
    };
  else {
    var q = (o ? re : pe)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    q.f |= xo, w = () => {
      var I = m(q);
      return I !== void 0 && (l = /** @type {V} */
      void 0), I === void 0 ? l : I;
    };
  }
  if ((r & go) === 0)
    return w;
  if (h) {
    var _ = e.$$legacy;
    return function(I, b) {
      return arguments.length > 0 ? ((!a || !b || _ || u) && h(b ? w() : I), I) : w();
    };
  }
  var k = !1, x = /* @__PURE__ */ Qt(c), g = /* @__PURE__ */ re(() => {
    var I = w(), b = m(x);
    return k ? (k = !1, b) : x.v = I;
  });
  return s && m(g), o || (g.equals = Er), function(I, b) {
    if (arguments.length > 0) {
      const R = b ? m(g) : a && s ? Q(I) : I;
      if (!g.equals(R)) {
        if (k = !0, N(x, R), f && l !== void 0 && (l = R), rn(g))
          return I;
        Ze(() => m(g));
      }
      return I;
    }
    return rn(g) ? g.v : m(g);
  };
}
function Pa(e) {
  return new Ra(e);
}
var Ne, $e;
class Ra {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    ar(this, Ne);
    /** @type {Record<string, any>} */
    ar(this, $e);
    var a;
    var r = /* @__PURE__ */ new Map(), n = (s, i) => {
      var u = /* @__PURE__ */ Qt(i);
      return r.set(s, u), u;
    };
    const o = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(s, i) {
          return m(r.get(i) ?? n(i, Reflect.get(s, i)));
        },
        has(s, i) {
          return i === ln ? !0 : (m(r.get(i) ?? n(i, Reflect.get(s, i))), Reflect.has(s, i));
        },
        set(s, i, u) {
          return N(r.get(i) ?? n(i, u), u), Reflect.set(s, i, u);
        }
      }
    );
    sr(this, $e, (t.hydrate ? ma : Ln)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: o,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && z(), sr(this, Ne, o.$$events);
    for (const s of Object.keys(ve(this, $e)))
      s === "$set" || s === "$destroy" || s === "$on" || Dt(this, s, {
        get() {
          return ve(this, $e)[s];
        },
        /** @param {any} value */
        set(i) {
          ve(this, $e)[s] = i;
        },
        enumerable: !0
      });
    ve(this, $e).$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(o, s);
    }, ve(this, $e).$destroy = () => {
      ha(ve(this, $e));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ve(this, $e).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    ve(this, Ne)[t] = ve(this, Ne)[t] || [];
    const n = (...o) => r.call(this, ...o);
    return ve(this, Ne)[t].push(n), () => {
      ve(this, Ne)[t] = ve(this, Ne)[t].filter(
        /** @param {any} fn */
        (o) => o !== n
      );
    };
  }
  $destroy() {
    ve(this, $e).$destroy();
  }
}
Ne = new WeakMap(), $e = new WeakMap();
let Bn;
typeof HTMLElement == "function" && (Bn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    ae(this, "$$ctor");
    /** Slots */
    ae(this, "$$s");
    /** @type {any} The Svelte component instance */
    ae(this, "$$c");
    /** Whether or not the custom element is connected */
    ae(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    ae(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ae(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ae(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    ae(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    ae(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    ae(this, "$$me");
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const o = this.$$c.$on(t, r);
      this.$$l_u.set(r, o);
    }
    super.addEventListener(t, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const o = this.$$l_u.get(r);
      o && (o(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return (a) => {
          const s = document.createElement("slot");
          o !== "default" && (s.name = o), C(a, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Na(this);
      for (const o of this.$$s)
        o in n && (o === "default" && !this.$$d.children ? (this.$$d.children = t(o), r.default = !0) : r[o] = t(o));
      for (const o of this.attributes) {
        const a = this.$$g_p(o.name);
        a in this.$$d || (this.$$d[a] = Ot(a, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
      this.$$c = Pa({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = sa(() => {
        ht(() => {
          var o;
          this.$$r = !0;
          for (const a of Lt(this.$$c)) {
            if (!((o = this.$$p_d[a]) != null && o.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const s = Ot(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            s == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, s);
          }
          this.$$r = !1;
        });
      });
      for (const o in this.$$l)
        for (const a of this.$$l[o]) {
          const s = this.$$c.$on(o, a);
          this.$$l_u.set(a, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, n) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ot(t, n, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Lt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Ot(e, t, r, n) {
  var a;
  const o = (a = r[e]) == null ? void 0 : a.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Na(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function se(e, t, r, n, o, a) {
  let s = class extends Bn {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Lt(t).map(
        (i) => (t[i].attribute || i).toLowerCase()
      );
    }
  };
  return Lt(t).forEach((i) => {
    Dt(s.prototype, i, {
      get() {
        return this.$$c && i in this.$$c ? this.$$c[i] : this.$$d[i];
      },
      set(u) {
        var h;
        u = Ot(i, u, t), this.$$d[i] = u;
        var c = this.$$c;
        if (c) {
          var v = (h = et(c, i)) == null ? void 0 : h.get;
          v ? c[i] = u : c.$set({ [i]: u });
        }
      }
    });
  }), n.forEach((i) => {
    Dt(s.prototype, i, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[i];
      }
    });
  }), e.element = /** @type {any} */
  s, s;
}
const j = Q({
  open: !1,
  currentCommentId: 0,
  showResolvedOnly: !1,
  pulseMarkerId: 0
}), Ge = Q({ open: !1 });
let lt = fe("");
const ct = {
  get value() {
    return m(lt);
  },
  set(e) {
    N(lt, Q(e)), typeof window < "u" && sessionStorage.setItem("loop-guest-name", e);
  },
  get() {
    return !m(lt) && typeof window < "u" && N(lt, Q(sessionStorage.getItem("loop-guest-name") || "")), m(lt);
  },
  clear() {
    N(lt, ""), typeof window < "u" && sessionStorage.removeItem("loop-guest-name");
  }
};
let Tr = fe(Q({}));
const T = (e, t) => m(Tr)[e] || t || e, ur = (e, t, r) => {
  let n = m(Tr)[e] || t || e;
  for (const [o, a] of Object.entries(r))
    n = n.replace(`{${o}}`, a);
  return n;
}, Oa = (e) => {
  N(Tr, Q(e));
};
Bo();
var Ta = /* @__PURE__ */ Mt('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-1q9atlb"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5"></path><path d="M15 12H12M12 12H9M12 12V9M12 12V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>');
const Aa = {
  hash: "svelte-1q9atlb",
  code: "svg.svelte-1q9atlb{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function Yn(e) {
  le(e, Aa);
  var t = Ta();
  C(e, t);
}
se(Yn, {}, [], [], !0);
var La = /* @__PURE__ */ X('<span class="svelte-1qoozz7"><!></span>'), Da = /* @__PURE__ */ X("<button><!> <!></button>");
const ja = {
  hash: "svelte-1qoozz7",
  code: "button.svelte-1qoozz7{appearance:none;background-color:var(--button-background);color:var(--button-color);padding:var(--button-padding);font-family:var(--font-family);letter-spacing:.01em;border-radius:var(--button-border-radius);gap:var(--button-gap);cursor:pointer;font-size:var(--button-font-size);font-weight:var(--button-font-weight);transition:var(--button-transition);white-space:nowrap;height:var(--button-height);outline-color:var(--button-outline-color);border:0;flex:none;justify-content:center;align-items:center;line-height:1;display:inline-flex}button.svelte-1qoozz7:focus-visible{outline-offset:var(--button-outline-offset)}button.svelte-1qoozz7:hover,button.svelte-1qoozz7:focus-visible{color:var(--button-hover-color);background-color:var(--button-hover-background)}button.svelte-1qoozz7 span:where(.svelte-1qoozz7){text-overflow:ellipsis;min-width:0;display:block;overflow-x:clip}button.button--header.svelte-1qoozz7{--icon-size:1.25rem;background-color:var(--button-header-background);height:var(--button-header-height);padding:var(--button-header-padding);mix-blend-mode:var(--button-header-blend-mode);border:0;border-radius:0}button.button--header.svelte-1qoozz7:first-child{border-top-left-radius:var(--border-radius-rounded);border-bottom-left-radius:var(--border-radius-rounded)}button.button--header.svelte-1qoozz7:hover,button.button--header.svelte-1qoozz7:focus-visible{background-color:var(--button-header-hover-background)}button.button--panel.svelte-1qoozz7{background-color:var(--button-panel-background);height:auto;padding:var(--button-panel-padding);border-radius:var(--border-radius-rounded);border:0}button.button--panel.svelte-1qoozz7 span:where(.svelte-1qoozz7){overflow:visible}button.button--solid.svelte-1qoozz7{background-color:var(--button-solid-background)}button.button--solid.svelte-1qoozz7:hover,button.button--solid.svelte-1qoozz7:focus-visible{color:var(--button-solid-hover-color);background-color:var(--button-solid-hover-background)}button.button--small.svelte-1qoozz7{height:var(--button-small-height);font-size:var(--button-small-font-size)}button.button--icon.svelte-1qoozz7{background-color:var(--button-icon-background);color:var(--button-icon-color);height:var(--button-icon-height);box-shadow:var(--button-icon-shadow);aspect-ratio:1;font-size:var(--button-icon-font-size);border-radius:var(--button-icon-border-radius);border:0;padding:0}button.button--icon.svelte-1qoozz7:hover,button.button--icon.svelte-1qoozz7:focus-visible{background-color:var(--button-icon-hover-background);color:var(--button-icon-hover-color)}button.button--marker.svelte-1qoozz7{background-color:var(--button-marker-background);color:var(--button-marker-color);height:var(--marker-size);width:var(--marker-size);font-weight:var(--button-marker-font-weight);border-radius:var(--button-marker-border-radius);border:0;padding:0}button.button--marker.svelte-1qoozz7 :where(.svelte-1qoozz7){pointer-events:none}button.button--marker.button--marker-highlighted.svelte-1qoozz7{background-color:var(--button-marker-highlighted-background);color:var(--button-marker-highlighted-color)}button.button--marker-open.svelte-1qoozz7{background-color:var(--color-accent);color:var(--color-accent-dark)}button.button--filter.svelte-1qoozz7{background-color:var(--button-filter-background);color:var(--button-filter-color);height:var(--button-filter-height);font-size:var(--button-filter-font-size);padding:var(--button-filter-padding);border-radius:var(--button-filter-border-radius);flex:1}button.button--filter.svelte-1qoozz7:hover,button.button--filter.svelte-1qoozz7:focus-visible{color:var(--button-filter-hover-color);background-color:var(--button-filter-hover-background)}button.button--filter.button--filter-active.svelte-1qoozz7{background-color:var(--button-filter-active-background);color:var(--button-filter-active-color);font-weight:var(--button-filter-active-font-weight)}button.button--filter.button--filter-active.svelte-1qoozz7:hover,button.button--filter.button--filter-active.svelte-1qoozz7:focus-visible{background-color:var(--button-filter-active-background);color:var(--button-filter-active-color)}button.button--menu-item.svelte-1qoozz7{background-color:var(--button-menu-item-background);color:var(--button-menu-item-color);width:100%;padding:var(--button-menu-item-padding);border-radius:var(--button-menu-item-border-radius);font-size:var(--button-menu-item-font-size);justify-content:flex-start;gap:var(--button-menu-item-gap)}button.button--menu-item.svelte-1qoozz7:hover,button.button--menu-item.svelte-1qoozz7:focus-visible{background-color:var(--button-menu-item-hover-background);color:var(--button-menu-item-hover-color)}button.button--menu-item.button--menu-item-active.svelte-1qoozz7{background-color:var(--button-menu-item-active-background);color:var(--button-menu-item-active-color);font-weight:var(--button-menu-item-active-font-weight)}button.button--menu-item.button--menu-item-active.svelte-1qoozz7:hover,button.button--menu-item.button--menu-item-active.svelte-1qoozz7:focus-visible{background-color:var(--button-menu-item-active-background);color:var(--button-menu-item-active-color)}button.is-active.svelte-1qoozz7{background-color:var(--button-active-background);color:var(--button-active-color)}button.is-active.svelte-1qoozz7:hover,button.is-active.svelte-1qoozz7:focus-visible{color:var(--button-active-color);background-color:var(--button-active-background)}button.svelte-1qoozz7:disabled{opacity:var(--button-disabled-opacity);cursor:not-allowed}button.svelte-1qoozz7:disabled:hover{color:var(--button-disabled-hover-color);background-color:var(--button-disabled-hover-background)}"
};
function ne(e, t) {
  const r = wa(t);
  ye(t, !0), le(e, ja);
  const n = S(t, "onclick", 7), o = S(t, "onmouseenter", 7), a = S(t, "onmouseout", 7), s = S(t, "onblur", 7), i = S(t, "active", 7, !1), u = S(t, "type", 7, "button"), c = S(t, "style", 7, ""), v = S(t, "disabled", 7, !1), h = S(t, "ariaLabel", 7, ""), l = S(t, "id", 7, ""), d = S(t, "ariaHaspopup", 7, ""), f = S(t, "ariaExpanded", 7, ""), p = S(t, "ariaControls", 7, "");
  var w = Da();
  w.__click = function(...g) {
    var P;
    (P = n()) == null || P.apply(this, g);
  };
  let q;
  w.__mouseout = function(...g) {
    var P;
    (P = a()) == null || P.apply(this, g);
  };
  var _ = E(w);
  Kr(_, t, "icon", {});
  var k = B(_, 2);
  {
    var x = (g) => {
      var P = La(), I = E(P);
      Kr(I, t, "default", {}), $(P), C(g, P);
    };
    Ce(k, (g) => {
      r.default && g(x);
    });
  }
  return $(w), H(
    (g) => {
      q = st(w, 1, `button ${c() ?? ""}`, "svelte-1qoozz7", q, g), te(w, "type", u()), te(w, "aria-label", h()), te(w, "id", l()), te(w, "aria-haspopup", d() === "menu" ? "menu" : null), te(w, "aria-expanded", f() === "true" ? !0 : f() === "false" ? !1 : null), te(w, "aria-controls", p() || null), w.disabled = v();
    },
    [() => ({ "is-active": i() })]
  ), Je("mouseenter", w, function(...g) {
    var P;
    (P = o()) == null || P.apply(this, g);
  }), Je("blur", w, function(...g) {
    var P;
    (P = s()) == null || P.apply(this, g);
  }), C(e, w), ke({
    get onclick() {
      return n();
    },
    set onclick(g) {
      n(g), z();
    },
    get onmouseenter() {
      return o();
    },
    set onmouseenter(g) {
      o(g), z();
    },
    get onmouseout() {
      return a();
    },
    set onmouseout(g) {
      a(g), z();
    },
    get onblur() {
      return s();
    },
    set onblur(g) {
      s(g), z();
    },
    get active() {
      return i();
    },
    set active(g = !1) {
      i(g), z();
    },
    get type() {
      return u();
    },
    set type(g = "button") {
      u(g), z();
    },
    get style() {
      return c();
    },
    set style(g = "") {
      c(g), z();
    },
    get disabled() {
      return v();
    },
    set disabled(g = !1) {
      v(g), z();
    },
    get ariaLabel() {
      return h();
    },
    set ariaLabel(g = "") {
      h(g), z();
    },
    get id() {
      return l();
    },
    set id(g = "") {
      l(g), z();
    },
    get ariaHaspopup() {
      return d();
    },
    set ariaHaspopup(g = "") {
      d(g), z();
    },
    get ariaExpanded() {
      return f();
    },
    set ariaExpanded(g = "") {
      f(g), z();
    },
    get ariaControls() {
      return p();
    },
    set ariaControls(g = "") {
      p(g), z();
    }
  });
}
Tn(["click", "mouseout"]);
se(
  ne,
  {
    onclick: {},
    onmouseenter: {},
    onmouseout: {},
    onblur: {},
    active: {},
    type: {},
    style: {},
    disabled: {},
    ariaLabel: {},
    id: {},
    ariaHaspopup: {},
    ariaExpanded: {},
    ariaControls: {}
  },
  ["icon", "default"],
  [],
  !0
);
var Ha = /* @__PURE__ */ Mt('<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-1q9atlb"><path d="M15.359 16.9999L12.8975 14.5385L12.1459 15.2902C11.3764 16.0597 10.9916 16.4444 10.5781 16.3536C10.1645 16.2628 9.97641 15.7522 9.60019 14.731L8.34544 11.3253C7.59492 9.28816 7.21966 8.2696 7.74463 7.74463C8.2696 7.21966 9.28816 7.59492 11.3253 8.34544L14.731 9.60019C15.7522 9.97641 16.2628 10.1645 16.3536 10.5781C16.4444 10.9916 16.0597 11.3764 15.2902 12.1459L14.5385 12.8975L16.9999 15.359C17.2548 15.6138 17.3822 15.7413 17.4411 15.8834C17.5196 16.073 17.5196 16.2859 17.4411 16.4755C17.3822 16.6176 17.2548 16.7451 16.9999 16.9999C16.7451 17.2548 16.6176 17.3822 16.4755 17.4411C16.2859 17.5196 16.073 17.5196 15.8834 17.4411C15.7413 17.3822 15.6138 17.2548 15.359 16.9999Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.5 12.5C2.5 7.78595 2.5 5.42893 3.96447 3.96447C5.42893 2.5 7.78595 2.5 12.5 2.5C17.214 2.5 19.5711 2.5 21.0355 3.96447C22.5 5.42893 22.5 7.78595 22.5 12.5C22.5 17.214 22.5 19.5711 21.0355 21.0355C19.5711 22.5 17.214 22.5 12.5 22.5C7.78595 22.5 5.42893 22.5 3.96447 21.0355C2.5 19.5711 2.5 17.214 2.5 12.5Z" stroke="currentColor" stroke-width="1.5"></path></svg>');
const Fa = {
  hash: "svelte-1q9atlb",
  code: "svg.svelte-1q9atlb{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function Wn(e) {
  le(e, Fa);
  var t = Ha();
  C(e, t);
}
se(Wn, {}, [], [], !0);
var Va = /* @__PURE__ */ X('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1), Ba = /* @__PURE__ */ X('<svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper>', 1), Ya = /* @__PURE__ */ X('<span class="count svelte-12aqd5e"> </span>'), Wa = /* @__PURE__ */ X('<header><div class="toggle svelte-12aqd5e"><!> <!></div> <!></header>');
const Xa = {
  hash: "svelte-12aqd5e",
  code: ".toggle.svelte-12aqd5e{display:flex}header.svelte-12aqd5e{position:var(--header-position);top:var(--header-top);max-width:100%;transform:var(--header-transform);color:var(--header-color);border-radius:var(--header-border-radius);z-index:var(--header-z-index);-webkit-backdrop-filter:var(--header-backdrop-filter);backdrop-filter:var(--header-backdrop-filter);box-shadow:var(--shadow-l),var(--shadow-light-edge),var(--shadow-dark-edge);background:var(--header-background);justify-content:space-between;align-items:stretch;display:flex;left:50%}header.bottom.svelte-12aqd5e{top:auto;bottom:var(--header-bottom-position)}.count.svelte-12aqd5e{width:var(--header-count-size);height:var(--header-count-size);border-radius:var(--header-count-border-radius);-webkit-backdrop-filter:var(--header-count-backdrop-filter);backdrop-filter:var(--header-count-backdrop-filter);box-shadow:var(--shadow-s),var(--shadow-light-edge),var(--shadow-dark-edge);background:var(--header-count-background);justify-content:center;align-items:center;display:flex}"
};
function Xn(e, t) {
  ye(t, !0), le(e, Xa);
  const r = S(t, "position", 7), n = S(t, "commentsCount", 7);
  var o = Wa();
  let a;
  var s = E(o), i = E(s);
  const u = /* @__PURE__ */ re(() => !Ge.open);
  ne(i, {
    onclick: () => {
      Ge.open = !1;
    },
    get active() {
      return m(u);
    },
    style: "button--header",
    children: (l, d) => {
      be();
      var f = de();
      H((p) => V(f, p), [() => T("ui.header.browse.mode", "Browse")]), C(l, f);
    },
    $$slots: {
      default: !0,
      icon: (l, d) => {
        var f = Va(), p = Ae(f);
        Zr(p, () => ({ "--size": "1.5em" })), Wn(p.lastChild), $(p), C(l, f);
      }
    }
  });
  var c = B(i, 2);
  ne(c, {
    onclick: () => {
      Ge.open = !0;
    },
    style: "button--header",
    get active() {
      return Ge.open;
    },
    children: (l, d) => {
      be();
      var f = de();
      H((p) => V(f, p), [
        () => T("ui.header.comment.mode", "Comment")
      ]), C(l, f);
    },
    $$slots: {
      default: !0,
      icon: (l, d) => {
        var f = Ba(), p = Ae(f);
        Zr(p, () => ({ "--size": "1.5em" })), Yn(p.lastChild), $(p), C(l, f);
      }
    }
  }), $(s);
  var v = B(s, 2);
  const h = /* @__PURE__ */ re(() => `${n()} ${T("ui.header.aria.count", "unresolved comments")}`);
  return ne(v, {
    onclick: () => j.open = !j.open,
    style: "button--panel",
    get ariaLabel() {
      return m(h);
    },
    children: (l, d) => {
      var f = Ya(), p = E(f, !0);
      $(f), H(() => V(p, n())), C(l, f);
    },
    $$slots: { default: !0 }
  }), $(o), H((l) => a = st(o, 1, "svelte-12aqd5e", null, a, l), [
    () => ({ bottom: r() === "bottom" })
  ]), C(e, o), ke({
    get position() {
      return r();
    },
    set position(l) {
      r(l), z();
    },
    get commentsCount() {
      return n();
    },
    set commentsCount(l) {
      n(l), z();
    }
  });
}
se(Xn, { position: {}, commentsCount: {} }, [], [], !0);
class Ua {
  constructor(t = {}) {
    ae(this, "callbacks", /* @__PURE__ */ new Set());
    ae(this, "debounceTimer", null);
    ae(this, "rafId", null);
    ae(this, "isListening", !1);
    ae(this, "options");
    ae(this, "handleResize", () => {
      this.debounceTimer && clearTimeout(this.debounceTimer), this.rafId && cancelAnimationFrame(this.rafId), this.debounceTimer = window.setTimeout(() => {
        this.options.useRAF ? this.rafId = requestAnimationFrame(() => {
          this.executeCallbacks();
        }) : this.executeCallbacks();
      }, this.options.debounceDelay);
    });
    this.options = {
      debounceDelay: t.debounceDelay ?? 100,
      useRAF: t.useRAF ?? !0
    };
  }
  executeCallbacks() {
    this.callbacks.forEach((t) => {
      try {
        t();
      } catch (r) {
        console.error("Error in resize callback:", r);
      }
    });
  }
  startListening() {
    this.isListening || (window.addEventListener("resize", this.handleResize, { passive: !0 }), this.isListening = !0);
  }
  stopListening() {
    this.isListening && (window.removeEventListener("resize", this.handleResize), this.isListening = !1);
  }
  /**
   * Add a callback to be executed on resize
   */
  subscribe(t) {
    return this.callbacks.add(t), this.startListening(), () => {
      this.callbacks.delete(t), this.callbacks.size === 0 && this.stopListening();
    };
  }
  /**
   * Clean up all resources
   */
  destroy() {
    this.callbacks.clear(), this.stopListening(), this.debounceTimer && clearTimeout(this.debounceTimer), this.rafId && cancelAnimationFrame(this.rafId);
  }
}
const Za = new Ua();
function Ja(e, t) {
  return Za.subscribe(e);
}
const Un = () => {
  const e = document.body, t = document.documentElement;
  return Math.max(
    e.scrollHeight,
    e.offsetHeight,
    t.clientHeight,
    t.scrollHeight,
    t.offsetHeight
  );
};
var Ka = /* @__PURE__ */ X("<div><!></div>");
const Ga = {
  hash: "svelte-4f1edl",
  code: ".marker.svelte-4f1edl{position:var(--marker-position);z-index:var(--marker-z-index);transform:var(--marker-transform);border-radius:var(--marker-border-radius)}.marker--pulse.svelte-4f1edl{animation:1.5s ease-in-out infinite svelte-4f1edl-kirby-loop-pulse}@keyframes svelte-4f1edl-kirby-loop-pulse{0%{box-shadow:0 0 0 0 var(--color-accent),0 0 0 0 #8080804d,0 0 0 0 #80808033}30%{box-shadow:0 0 0 8px #0000,0 0 #8080804d,0 0 #80808033}60%{box-shadow:0 0 0 8px #80808026,0 0 0 12px #0000,0 0 #80808033}to{box-shadow:0 0 0 16px #0000,0 0 0 12px #0000,0 0 0 8px #0000}}"
};
function Zn(e, t) {
  ye(t, !0), le(e, Ga);
  const r = S(t, "comment", 7), n = S(t, "selectComment", 7);
  let o = fe(!1);
  rt(() => {
    N(o, j.pulseMarkerId === r().id);
  });
  let a = fe(null), s = fe(null), i = fe(null);
  nr(() => {
    requestAnimationFrame(() => {
      u();
    }), N(i, Q(Ja(() => {
      u();
    })));
  }), Vn(() => {
    m(i) && m(i)();
  });
  function u() {
    if (!(!r() || !m(a)))
      try {
        N(s, Q(document.querySelector(r().selector)));
        let p, w;
        if (m(s)) {
          const ee = m(s).getBoundingClientRect(), ue = ee.width * r().selectorOffsetX / 100, O = ee.height * r().selectorOffsetY / 100;
          p = ee.left + window.scrollX + ue, w = ee.top + window.scrollY + O;
        } else
          p = Number(r().pagePositionX), w = Number(r().pagePositionY);
        const q = m(a).getBoundingClientRect(), _ = q.width || 32, k = q.height || 32, x = _ / 2, g = k / 2, P = Un(), I = window.innerWidth, b = x, R = I - x, M = g, D = P - g, G = Math.max(b, Math.min(R, p)), ie = Math.max(M, Math.min(D, w));
        m(a).style.left = `${G}px`, m(a).style.top = `${ie}px`;
      } catch (p) {
        console.error("Error positioning marker:", p);
      }
  }
  function c(p) {
    j.currentCommentId = p;
  }
  function v() {
    j.currentCommentId = 0;
  }
  function h() {
    n()(r().id);
  }
  var l = Nr(), d = Ae(l);
  {
    var f = (p) => {
      var w = Ka();
      let q;
      var _ = E(w);
      ne(_, {
        onmouseenter: () => c(r().id),
        onmouseout: v,
        onblur: v,
        onclick: h,
        get style() {
          return `button--marker button--marker-${r().status ?? ""}`;
        },
        children: (k, x) => {
          be();
          var g = de();
          H(() => V(g, r().id)), C(k, g);
        },
        $$slots: { default: !0 }
      }), $(w), nt(w, (k) => N(a, k), () => m(a)), H(
        (k) => {
          q = st(w, 1, `marker marker--${r().status ?? ""}`, "svelte-4f1edl", q, k), te(w, "id", `marker-${r().id ?? ""}`);
        },
        [
          () => ({ "marker--pulse": m(o) })
        ]
      ), C(p, w);
    };
    Ce(d, (p) => {
      r() && p(f);
    });
  }
  return C(e, l), ke({
    get comment() {
      return r();
    },
    set comment(p) {
      r(p), z();
    },
    get selectComment() {
      return n();
    },
    set selectComment(p) {
      n(p), z();
    }
  });
}
se(Zn, { comment: {}, selectComment: {} }, [], [], !0);
const Ee = Q({ comments: [] }), Qa = "loop", dt = document.querySelector("kirby-loop"), es = (dt == null ? void 0 : dt.getAttribute("csrf-token")) || "", ts = (dt == null ? void 0 : dt.getAttribute("apibase")) || "/", gt = {
  "Content-Type": "application/json",
  "X-CSRF-Token": es || ""
}, pt = (e) => {
  const t = new URL(`${ts}/${Qa}/${e}`, window.location.origin), r = new URLSearchParams(window.location.search), n = r.get("token") || r.get("_token");
  return n && t.searchParams.set(r.has("token") ? "token" : "_token", n), t.toString();
}, rs = async (e) => {
  const t = pt(`comments/${e}`), n = await (await fetch(t, { headers: gt })).json();
  return n.status === "ok" && (Ee.comments = n.comments), n.status === "ok";
}, ns = async (e) => {
  const t = pt("comment/new"), n = await (await fetch(t, {
    method: "POST",
    headers: gt,
    body: JSON.stringify(e)
  })).json();
  n.status === "ok" && (Ee.comments = [n.comment, ...Ee.comments]);
}, os = async (e) => {
  const t = pt("comment/resolve"), n = await (await fetch(t, {
    method: "POST",
    headers: gt,
    body: JSON.stringify({ id: e.id })
  })).json();
  if (n.success) {
    const o = Ee.comments.findIndex((a) => a.id === e.id);
    o !== -1 && (Ee.comments[o].status = "RESOLVED");
  }
  return n.success;
}, as = async (e) => {
  const t = pt("comment/unresolve"), n = await (await fetch(t, {
    method: "POST",
    headers: gt,
    body: JSON.stringify({ id: e.id })
  })).json();
  if (n.success) {
    const o = Ee.comments.findIndex((a) => a.id === e.id);
    o !== -1 && (Ee.comments[o].status = "OPEN");
  }
  return n.success;
}, ss = async (e) => await (await fetch(pt("guest/name"), {
  method: "POST",
  headers: gt,
  body: JSON.stringify({ name: e })
})).json(), is = async (e) => {
  const t = pt("comment/reply"), n = await (await fetch(t, {
    method: "POST",
    headers: gt,
    body: JSON.stringify(e)
  })).json();
  if (n.status === "ok") {
    const o = Ee.comments.find((a) => a.id === n.reply.parentId);
    o && (o.replies = [...o.replies, n.reply]);
  }
}, ft = Q({ text: "", parentId: null }), cr = () => {
  ft.text = "", ft.parentId = null;
};
function ls(e) {
  var t;
  if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
    e.preventDefault();
    const r = (t = e.currentTarget) == null ? void 0 : t.closest("form");
    r && r.requestSubmit();
  }
}
var us = /* @__PURE__ */ X('<form method="POST" class="svelte-w3h34c"><div class="input"><textarea name="comment" required class="svelte-w3h34c"></textarea></div> <div class="keyboard-hint svelte-w3h34c"> </div> <footer class="svelte-w3h34c"><!> <!></footer></form>');
const cs = {
  hash: "svelte-w3h34c",
  code: "form.svelte-w3h34c{cursor:auto;background-color:var(--comment-form-background);color:var(--comment-form-color);border-radius:var(--comment-form-border-radius);border:var(--comment-form-border);padding:0;overflow:hidden}textarea.svelte-w3h34c{width:100%;height:var(--comment-form-textarea-height);resize:none;padding:var(--comment-form-textarea-padding);box-sizing:border-box;background-color:var(--comment-form-textarea-background);font-family:var(--comment-form-textarea-font-family);font-size:var(--comment-form-textarea-font-size);color:currentColor;border:0;margin:0}textarea.svelte-w3h34c:focus-visible,textarea.svelte-w3h34c:focus{outline:0}footer.svelte-w3h34c{padding:var(--comment-form-footer-padding);gap:var(--comment-form-footer-gap);display:flex}footer.svelte-w3h34c button{flex:1}.keyboard-hint.svelte-w3h34c{font-size:var(--comment-form-hint-font-size);color:var(--comment-form-hint-color);padding:var(--comment-form-hint-padding);white-space:nowrap;align-self:center;margin-left:auto}"
};
function Ar(e, t) {
  ye(t, !0), le(e, cs);
  const r = S(t, "handleSubmit", 7), n = S(t, "cancel", 7), o = S(t, "parentId", 7, null);
  ft.parentId = o() ? Number(o()) : null;
  var a = us(), s = E(a), i = E(s);
  da(i), i.__keydown = [ls], $(s);
  var u = B(s, 2), c = E(u, !0);
  $(u);
  var v = B(u, 2), h = E(v);
  ne(h, {
    type: "submit",
    style: "button--solid",
    children: (d, f) => {
      be();
      var p = de();
      H((w) => V(p, w), [
        () => o() ? T("ui.reply.submit", "Reply") : T("ui.comment.submit", "Submit")
      ]), C(d, p);
    },
    $$slots: { default: !0 }
  });
  var l = B(h, 2);
  return ne(l, {
    get onclick() {
      return n();
    },
    children: (d, f) => {
      be();
      var p = de();
      H((w) => V(p, w), [() => T("ui.comment.cancel", "Cancel")]), C(d, p);
    },
    $$slots: { default: !0 }
  }), $(v), $(a), H(
    (d, f) => {
      te(i, "placeholder", d), V(c, f);
    },
    [
      () => o() ? T("ui.reply.placeholder", "Write a reply...") : T("ui.comment.placeholder", "Enter your comment..."),
      () => T("ui.comment.keyboardHint", "⌘+Enter or Ctrl+Enter to submit")
    ]
  ), Je("submit", a, function(...d) {
    var f;
    (f = r()) == null || f.apply(this, d);
  }), Hn(i, () => ft.text, (d) => ft.text = d), C(e, a), ke({
    get handleSubmit() {
      return r();
    },
    set handleSubmit(d) {
      r(d), z();
    },
    get cancel() {
      return n();
    },
    set cancel(d) {
      n(d), z();
    },
    get parentId() {
      return o();
    },
    set parentId(d = null) {
      o(d), z();
    }
  });
}
Tn(["keydown"]);
se(Ar, { handleSubmit: {}, cancel: {}, parentId: {} }, [], [], !0);
var ds = /* @__PURE__ */ X('<div class="author svelte-1xlsy1x"> </div>');
const fs = {
  hash: "svelte-1xlsy1x",
  code: ".author.svelte-1xlsy1x{font-size:var(--author-avatar-font-size);text-transform:uppercase;color:var(--author-avatar-color);background-color:var(--author-avatar-background-color);aspect-ratio:1;flex:0 0 var(--author-avatar-size);border-radius:var(--author-avatar-border-radius);justify-content:center;align-items:center;display:flex}"
};
function Jn(e, t) {
  ye(t, !0), le(e, fs);
  const r = S(t, "initials", 7);
  var n = ds(), o = E(n, !0);
  return $(n), H(() => V(o, r())), C(e, n), ke({
    get initials() {
      return r();
    },
    set initials(a) {
      r(a), z();
    }
  });
}
se(Jn, { initials: {} }, [], [], !0);
function Xt(e, t = !0) {
  const r = new Date(e * 1e3), o = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), a = Math.floor(o / (1e3 * 60)), s = Math.floor(o / (1e3 * 60 * 60)), i = Math.floor(o / (1e3 * 60 * 60 * 24));
  return t && i <= 3 ? a < 1 ? T("ui.time.just_now", "just now") : a === 1 ? T("ui.time.minute_ago", "a minute ago") : a < 60 ? ur("ui.time.minutes_ago", "{count} minutes ago", { count: a.toString() }) : s === 1 ? T("ui.time.hour_ago", "an hour ago") : s < 24 ? ur("ui.time.hours_ago", "{count} hours ago", { count: s.toString() }) : i === 1 ? T("ui.time.yesterday", "yesterday") : ur("ui.time.days_ago", "{count} days ago", { count: i.toString() }) : r.toLocaleString(void 0, { dateStyle: "short", timeStyle: "short" });
}
function Kn(e) {
  return new Date(e * 1e3).toISOString();
}
function Ut(e) {
  const t = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#x27;": "'",
    "&#x2F;": "/",
    "&#x60;": "`",
    "&#x3D;": "="
  };
  return e.replace(/&[#\w]+;/g, (r) => t[r] || r);
}
var vs = /* @__PURE__ */ X('<article class="reply svelte-1nsulj7"><!> <div class="reply__content svelte-1nsulj7"><header class="svelte-1nsulj7"><strong> </strong> <time class="svelte-1nsulj7"> </time></header> <div class="reply__text svelte-1nsulj7"> </div></div></article>');
const ms = {
  hash: "svelte-1nsulj7",
  code: ".reply.svelte-1nsulj7{gap:var(--reply-gap);flex-direction:row;align-items:start;display:flex}.reply__content.svelte-1nsulj7{padding:var(--reply-content-padding);background-color:var(--reply-content-background);border-radius:var(--reply-content-border-radius)}.reply__content.svelte-1nsulj7 header:where(.svelte-1nsulj7){gap:var(--reply-header-gap);margin-bottom:var(--reply-header-margin-bottom);justify-content:flex-start;align-items:center;display:flex}.reply__content.svelte-1nsulj7 header:where(.svelte-1nsulj7) time:where(.svelte-1nsulj7){font-size:var(--reply-timestamp-font-size);color:var(--reply-timestamp-color)}@media (prefers-color-scheme:dark){.reply__content.svelte-1nsulj7{background-color:var(--reply-content-background-dark)}}.reply__text.svelte-1nsulj7{white-space:pre-line}"
};
function Gn(e, t) {
  ye(t, !1), le(e, ms);
  let r = S(t, "reply", 12);
  Fn();
  var n = vs(), o = E(n);
  const a = /* @__PURE__ */ pe(() => r().author.substring(0, 1));
  Jn(o, {
    get initials() {
      return m(a);
    }
  });
  var s = B(o, 2), i = E(s), u = E(i), c = E(u, !0);
  $(u);
  var v = B(u, 2), h = E(v, !0);
  $(v), $(i);
  var l = B(i, 2), d = E(l, !0);
  return $(l), $(s), $(n), H(
    (f, p, w, q, _, k) => {
      te(n, "data-id", r().id), te(n, "aria-label", `${f ?? ""} ${r().author ?? ""}: ${p ?? ""}`), V(c, r().author), te(v, "datetime", w), te(v, "title", q), V(h, _), V(d, k);
    },
    [
      () => T("ui.reply.aria.label", "Reply by"),
      () => Ut(r().comment),
      () => Kn(r().timestamp),
      () => Xt(r().timestamp, !1),
      () => Xt(r().timestamp),
      () => Ut(r().comment)
    ],
    pe
  ), C(e, n), ke({
    get reply() {
      return r();
    },
    set reply(f) {
      r(f), z();
    }
  });
}
se(Gn, { reply: {} }, [], [], !0);
var hs = /* @__PURE__ */ X("<li><!></li>"), gs = /* @__PURE__ */ X('<ul class="comment__replies svelte-6fqqrp"></ul>'), ps = /* @__PURE__ */ X("<!> <!>", 1), bs = /* @__PURE__ */ X('<div class="buttons svelte-6fqqrp"><!></div>'), ws = /* @__PURE__ */ X('<details><summary class="comment__header svelte-6fqqrp"><!> <div class="comment__content svelte-6fqqrp"><header class="svelte-6fqqrp"><strong> </strong> <time class="svelte-6fqqrp"> </time></header> <div class="comment__text svelte-6fqqrp"> </div></div> <!></summary> <!> <footer class="svelte-6fqqrp"><!></footer></details>');
const _s = {
  hash: "svelte-6fqqrp",
  code: '.comment.svelte-6fqqrp{--loop-marker-background:var(--comment-marker-background);--loop-marker-color:var(--comment-marker-color);--marker-size:var(--comment-avatar-size);position:relative}.comment.svelte-6fqqrp>:where(.svelte-6fqqrp){z-index:1;position:relative}.comment.svelte-6fqqrp:after{content:"";left:var(--comment-line-offset);width:var(--comment-line-width);background-color:var(--comment-line-background);z-index:0;height:calc(100% - 4rem);position:absolute;top:1.5rem}.comment.svelte-6fqqrp:not([open]):after{height:calc(100% - 2.75rem)}.comment__header.svelte-6fqqrp{font-size:var(--comment-header-font-size);padding:var(--comment-header-padding);align-items:flex-start;gap:var(--comment-header-gap);cursor:pointer;border-radius:var(--comment-header-border-radius);display:flex}.comment__header.svelte-6fqqrp:focus-visible{outline:2px solid var(--comment-header-outline-color);outline-offset:var(--comment-header-outline-offset)}.comment__header.svelte-6fqqrp .comment__replies-count{bottom:0;left:var(--space-s);min-width:var(--comment-avatar-size);position:absolute}.comment__header.svelte-6fqqrp header:where(.svelte-6fqqrp){gap:var(--comment-author-gap);margin-bottom:var(--comment-author-margin-bottom);justify-content:flex-start;align-items:center;display:flex}.comment__header.svelte-6fqqrp header:where(.svelte-6fqqrp) time:where(.svelte-6fqqrp){font-size:var(--comment-timestamp-font-size);color:var(--comment-timestamp-color)}.comment__header.svelte-6fqqrp .comment__content:where(.svelte-6fqqrp){padding:var(--comment-content-padding);background-color:var(--comment-content-background);border-radius:var(--comment-content-border-radius);flex:1}@media (prefers-color-scheme:dark){.comment__header.svelte-6fqqrp .comment__content:where(.svelte-6fqqrp){background-color:var(--comment-content-background-dark)}}.comment__header.svelte-6fqqrp .comment__text:where(.svelte-6fqqrp){white-space:pre-line}.comment__replies.svelte-6fqqrp{padding:var(--comment-replies-padding);gap:var(--comment-replies-gap);flex-direction:column;margin:0;list-style:none;display:flex}footer.svelte-6fqqrp{gap:var(--comment-footer-gap);padding:var(--comment-footer-padding);flex-direction:column;display:flex}footer.svelte-6fqqrp .buttons:where(.svelte-6fqqrp){gap:var(--comment-buttons-gap);align-items:flex-end;display:flex}.is-hidden.svelte-6fqqrp{display:none}'
};
function Qn(e, t) {
  var ue;
  ye(t, !0), le(e, _s);
  const r = S(t, "comment", 7), n = S(t, "scrollIntoView", 7), o = S(t, "handleSubmit", 7), a = S(t, "cancel", 7);
  let s = fe(!1), i = fe(Q(((ue = r().replies) == null ? void 0 : ue.length) > 0 && !j.showResolvedOnly));
  var u = ws();
  let c;
  var v = E(u), h = E(v);
  const l = /* @__PURE__ */ re(() => r().status), d = /* @__PURE__ */ re(() => j.currentCommentId === r().id ? "button--marker-highlighted" : ""), f = /* @__PURE__ */ re(() => `${T("ui.comment.maker.aria.label", "Jump to marker")} ${r().id}`);
  ne(h, {
    get style() {
      return `button--marker button--marker-${m(l) ?? ""} ${m(d) ?? ""}`;
    },
    onclick: () => n()(r().id),
    onmouseenter: () => j.pulseMarkerId = r().id,
    onmouseout: () => j.pulseMarkerId = 0,
    get ariaLabel() {
      return m(f);
    },
    children: (O, K) => {
      be();
      var y = de();
      H(() => V(y, r().id)), C(O, y);
    },
    $$slots: { default: !0 }
  });
  var p = B(h, 2), w = E(p), q = E(w), _ = E(q, !0);
  $(q);
  var k = B(q, 2), x = E(k, !0);
  $(k), $(w);
  var g = B(w, 2), P = E(g, !0);
  $(g), $(p);
  var I = B(p, 2);
  {
    var b = (O) => {
      const K = /* @__PURE__ */ re(() => `${T("ui.comment.replies.aria.label", "Show replies")} ${r().id}`);
      ne(O, {
        style: "button--solid button--small comment__replies-count",
        get ariaLabel() {
          return m(K);
        },
        onclick: () => {
          N(i, !m(i));
        },
        children: (y, Z) => {
          be();
          var L = de();
          H(() => {
            var U;
            return V(L, ((U = r().replies) == null ? void 0 : U.length) > 0 ? `+${r().replies.length}` : "+");
          }), C(y, L);
        },
        $$slots: { default: !0 }
      });
    };
    Ce(I, (O) => {
      m(i) || O(b);
    });
  }
  $(v);
  var R = B(v, 2);
  {
    var M = (O) => {
      var K = gs();
      Or(K, 21, () => r().replies, (y) => y.id, (y, Z) => {
        var L = hs(), U = E(L);
        Gn(U, {
          get reply() {
            return m(Z);
          }
        }), $(L), C(y, L);
      }), $(K), C(O, K);
    };
    Ce(R, (O) => {
      var K;
      ((K = r().replies) == null ? void 0 : K.length) > 0 && O(M);
    });
  }
  var D = B(R, 2), G = E(D);
  {
    var ie = (O) => {
      Ar(O, {
        handleSubmit: (K) => {
          N(s, !1), o()(K);
        },
        cancel: () => {
          N(s, !1), a()();
        },
        get parentId() {
          return r().id;
        }
      });
    }, ee = (O) => {
      var K = bs(), y = E(K);
      {
        var Z = (U) => {
          var oe = ps(), bt = Ae(oe);
          ne(bt, {
            style: "button--solid",
            onclick: () => N(s, !0),
            children: (Ke, io) => {
              be();
              var wt = de();
              H((or) => V(wt, or), [() => T("ui.reply.submit", "Reply")]), C(Ke, wt);
            },
            $$slots: { default: !0 }
          });
          var Fe = B(bt, 2);
          ne(Fe, {
            onclick: () => os(r()),
            children: (Ke, io) => {
              be();
              var wt = de();
              H((or) => V(wt, or), [
                () => T("ui.comment.mark.solved", "Resolve")
              ]), C(Ke, wt);
            },
            $$slots: { default: !0 }
          }), C(U, oe);
        }, L = (U) => {
          ne(U, {
            onclick: () => as(r()),
            children: (oe, bt) => {
              be();
              var Fe = de();
              H((Ke) => V(Fe, Ke), [
                () => T("ui.comment.mark.unsolved", "Reopen")
              ]), C(oe, Fe);
            },
            $$slots: { default: !0 }
          });
        };
        Ce(y, (U) => {
          r().status === "OPEN" ? U(Z) : U(L, !1);
        });
      }
      $(K), C(O, K);
    };
    Ce(G, (O) => {
      m(s) ? O(ie) : O(ee, !1);
    });
  }
  return $(D), $(u), H(
    (O, K, y, Z, L, U, oe) => {
      te(u, "id", `comment-${r().id ?? ""}`), c = st(u, 1, `comment comment--${r().status ?? ""}`, "svelte-6fqqrp", c, O), te(v, "aria-label", `${K ?? ""} ${r().author ?? ""}: ${y ?? ""}`), V(_, r().author), te(k, "datetime", Z), te(k, "title", L), V(x, U), V(P, oe);
    },
    [
      () => ({
        "comment--current": j.currentCommentId === r().id
      }),
      () => T("ui.comment.summary.aria.label", "Comment by"),
      () => Ut(r().comment),
      () => Kn(r().timestamp),
      () => Xt(r().timestamp, !1),
      () => Xt(r().timestamp),
      () => Ut(r().comment)
    ]
  ), Sa("open", "toggle", u, (O) => N(i, O), () => m(i)), C(e, u), ke({
    get comment() {
      return r();
    },
    set comment(O) {
      r(O), z();
    },
    get scrollIntoView() {
      return n();
    },
    set scrollIntoView(O) {
      n(O), z();
    },
    get handleSubmit() {
      return o();
    },
    set handleSubmit(O) {
      o(O), z();
    },
    get cancel() {
      return a();
    },
    set cancel(O) {
      a(O), z();
    }
  });
}
se(
  Qn,
  {
    comment: {},
    scrollIntoView: {},
    handleSubmit: {},
    cancel: {}
  },
  [],
  [],
  !0
);
var ys = /* @__PURE__ */ Mt('<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-1q9atlb"><path d="M5.44067 14.4885C6.54524 14.4885 7.44067 13.5931 7.44067 12.4885C7.44067 11.384 6.54524 10.4885 5.44067 10.4885C4.3361 10.4885 3.44067 11.384 3.44067 12.4885C3.44067 13.5931 4.3361 14.4885 5.44067 14.4885Z" stroke="currentColor" stroke-width="1.5"></path><path d="M12.4407 14.4885C13.5452 14.4885 14.4407 13.5931 14.4407 12.4885C14.4407 11.384 13.5452 10.4885 12.4407 10.4885C11.3361 10.4885 10.4407 11.384 10.4407 12.4885C10.4407 13.5931 11.3361 14.4885 12.4407 14.4885Z" stroke="currentColor" stroke-width="1.5"></path><path d="M19.4407 14.4885C20.5452 14.4885 21.4407 13.5931 21.4407 12.4885C21.4407 11.384 20.5452 10.4885 19.4407 10.4885C18.3361 10.4885 17.4407 11.384 17.4407 12.4885C17.4407 13.5931 18.3361 14.4885 19.4407 14.4885Z" stroke="currentColor" stroke-width="1.5"></path></svg>');
const ks = {
  hash: "svelte-1q9atlb",
  code: "svg.svelte-1q9atlb{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function xs(e) {
  le(e, ks);
  var t = ys();
  C(e, t);
}
se(xs, {}, [], [], !0);
var $s = /* @__PURE__ */ Mt('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-1q9atlb"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="1.5"></path><path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="currentColor" stroke-width="1.5"></path></svg>');
const Cs = {
  hash: "svelte-1q9atlb",
  code: "svg.svelte-1q9atlb{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function eo(e) {
  le(e, Cs);
  var t = $s();
  C(e, t);
}
se(eo, {}, [], [], !0);
var ut = qa(() => j), zs = /* @__PURE__ */ X('<span class="filter-dot filter-dot--open svelte-15wfo7b" slot="icon" aria-hidden="true"></span>'), Es = /* @__PURE__ */ X('<span class="filter-dot filter-dot--resolved svelte-15wfo7b" slot="icon" aria-hidden="true"></span>'), Ss = /* @__PURE__ */ X('<div class="context-menu-container svelte-15wfo7b"><div class="context-menu-trigger svelte-15wfo7b"><!></div> <div class="context-menu svelte-15wfo7b" popover="auto" role="menu" aria-labelledby="context-menu-trigger" id="context-menu"><div class="menu-section svelte-15wfo7b"><div class="menu-section-title svelte-15wfo7b"> </div> <div class="filter-options svelte-15wfo7b"><!> <!></div></div></div></div>');
const qs = {
  hash: "svelte-15wfo7b",
  code: ".context-menu-container.svelte-15wfo7b{bottom:var(--context-menu-container-bottom);right:var(--context-menu-container-right);z-index:var(--context-menu-container-z-index);position:absolute}.context-menu-trigger.svelte-15wfo7b{width:var(--context-menu-trigger-size);height:var(--context-menu-trigger-size);border-radius:var(--context-menu-trigger-border-radius);justify-content:center;align-items:center;display:flex}.context-menu.svelte-15wfo7b{background:var(--context-menu-background);border-radius:var(--context-menu-border-radius);box-shadow:var(--context-menu-shadow);padding:var(--context-menu-padding);min-width:var(--context-menu-min-width);border:0;margin:0;position:fixed}.context-menu.svelte-15wfo7b::backdrop{background:var(--context-menu-backdrop-background)}.menu-section.svelte-15wfo7b{gap:var(--context-menu-section-gap);flex-direction:column;display:flex}.menu-section-title.svelte-15wfo7b{font-size:var(--context-menu-title-font-size);font-weight:var(--context-menu-title-font-weight);color:var(--context-menu-title-color);margin-bottom:var(--context-menu-title-margin-bottom);text-transform:uppercase;letter-spacing:var(--context-menu-title-letter-spacing);padding:0}.filter-options.svelte-15wfo7b{gap:var(--context-menu-filter-gap);flex-direction:column;display:flex}.filter-dot.svelte-15wfo7b{width:var(--context-menu-filter-dot-size);height:var(--context-menu-filter-dot-size);border-radius:var(--context-menu-filter-dot-border-radius);margin-right:var(--context-menu-filter-dot-margin-right);display:inline-block}.filter-dot--open.svelte-15wfo7b{background:var(--context-menu-filter-dot-open-background)}.filter-dot--resolved.svelte-15wfo7b{background:var(--context-menu-filter-dot-resolved-background)}"
};
function to(e, t) {
  ye(t, !1), le(e, qs);
  let r = Vr(), n = Vr();
  const o = () => {
    m(r).matches(":popover-open") ? m(r).hidePopover() : (m(r).showPopover(), a());
  }, a = () => {
    if (!m(n) || !m(r)) return;
    const b = m(n).getBoundingClientRect(), R = m(r).getBoundingClientRect(), M = b.top - R.height - 8, D = b.left - R.width + b.width;
    Pt(r, m(r).style.position = "fixed"), Pt(r, m(r).style.top = `${Math.max(8, M)}px`), Pt(r, m(r).style.left = `${Math.max(8, D)}px`), Pt(r, m(r).style.margin = "0");
  }, s = () => {
    m(r).hidePopover();
  }, i = (b) => {
    ut(ut().showResolvedOnly = b), s();
  };
  Fn();
  var u = Ss(), c = E(u), v = E(c);
  const h = /* @__PURE__ */ pe(() => T("ui.panel.menu.open", "Open menu")), l = /* @__PURE__ */ pe(() => {
    var b;
    return (b = m(r)) != null && b.matches(":popover-open") ? "true" : "false";
  });
  ne(v, {
    onclick: o,
    get ariaLabel() {
      return m(h);
    },
    style: "button--icon",
    id: "context-menu-trigger",
    ariaHaspopup: "menu",
    get ariaExpanded() {
      return m(l);
    },
    ariaControls: "context-menu",
    $$slots: {
      icon: (b, R) => {
        eo(b);
      }
    }
  }), $(c), nt(c, (b) => N(n, b), () => m(n));
  var d = B(c, 2), f = E(d), p = E(f), w = E(p, !0);
  $(p);
  var q = B(p, 2), _ = E(q);
  const k = /* @__PURE__ */ pe(() => ut().showResolvedOnly ? "" : "button--menu-item-active"), x = /* @__PURE__ */ pe(() => ut().showResolvedOnly ? T("ui.panel.filter.open.inactive", "Show open comments") : T("ui.panel.filter.open.active", "Show open comments (currently selected)"));
  ne(_, {
    get style() {
      return `button--menu-item ${m(k) ?? ""}`;
    },
    onclick: () => i(!1),
    get ariaLabel() {
      return m(x);
    },
    children: (b, R) => {
      be();
      var M = de();
      H((D) => V(M, D), [() => T("ui.panel.filter.open", "Open")], pe), C(b, M);
    },
    $$slots: {
      default: !0,
      icon: (b, R) => {
        var M = zs();
        C(b, M);
      }
    }
  });
  var g = B(_, 2);
  const P = /* @__PURE__ */ pe(() => ut().showResolvedOnly ? "button--menu-item-active" : ""), I = /* @__PURE__ */ pe(() => ut().showResolvedOnly ? T("ui.panel.filter.resolved.active", "Show resolved comments (currently selected)") : T("ui.panel.filter.resolved.inactive", "Show resolved comments"));
  ne(g, {
    get style() {
      return `button--menu-item ${m(P) ?? ""}`;
    },
    onclick: () => i(!0),
    get ariaLabel() {
      return m(I);
    },
    children: (b, R) => {
      be();
      var M = de();
      H(
        (D) => V(M, D),
        [
          () => T("ui.panel.filter.resolved", "Resolved")
        ],
        pe
      ), C(b, M);
    },
    $$slots: {
      default: !0,
      icon: (b, R) => {
        var M = Es();
        C(b, M);
      }
    }
  }), $(q), $(f), $(d), nt(d, (b) => N(r, b), () => m(r)), $(u), H(
    (b) => V(w, b),
    [
      () => T("ui.panel.menu.filter.title", "Show Comments")
    ],
    pe
  ), C(e, u), ke();
}
se(to, {}, [], [], !0);
var Is = /* @__PURE__ */ Mt('<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="svelte-1q9atlb"><path d="M12.5 22.5C18.0228 22.5 22.5 18.0228 22.5 12.5C22.5 6.97715 18.0228 2.5 12.5 2.5C6.97715 2.5 2.5 6.97715 2.5 12.5C2.5 14.0997 2.87562 15.6116 3.54346 16.9525C3.72094 17.3088 3.78001 17.7161 3.67712 18.1006L3.08151 20.3267C2.82295 21.293 3.70701 22.177 4.67335 21.9185L6.89939 21.3229C7.28393 21.22 7.69121 21.2791 8.04753 21.4565C9.38837 22.1244 10.9003 22.5 12.5 22.5Z" stroke="currentColor" stroke-width="1.5"></path><path d="M8.5 11H16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M8.5 14.5H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>');
const Ms = {
  hash: "svelte-1q9atlb",
  code: "svg.svelte-1q9atlb{width:var(--size,var(--icon-size));height:var(--size,var(--icon-size))}"
};
function ro(e) {
  le(e, Ms);
  var t = Is();
  C(e, t);
}
se(ro, {}, [], [], !0);
var Ps = /* @__PURE__ */ X('<li class="no-threads svelte-1nwyuw"><p> </p></li>'), Rs = /* @__PURE__ */ X('<li class="no-threads svelte-1nwyuw"><p> </p></li>'), Ns = /* @__PURE__ */ X('<li class="svelte-1nwyuw"><!></li>'), Os = /* @__PURE__ */ X('<dialog><header class="svelte-1nwyuw"><!></header> <ul class="threads svelte-1nwyuw" data-lenis-prevent=""><!></ul> <!></dialog>');
const Ts = {
  hash: "svelte-1nwyuw",
  code: ".panel.svelte-1nwyuw{position:var(--panel-position);right:var(--panel-right);top:var(--panel-top);transform:var(--panel-transform-closed);width:var(--panel-width);max-width:none;height:var(--panel-height);color:var(--panel-color);border-radius:var(--panel-border-radius);border-top-left-radius:var(--panel-border-top-left-radius);transition:var(--panel-transition);z-index:var(--panel-z-index);cursor:auto;background:0 0;border:0;flex-direction:column;justify-content:flex-start;align-items:flex-start;margin:0;padding:0;display:flex;bottom:auto;left:auto}@media screen and (max-width:600px){.panel.svelte-1nwyuw{width:var(--panel-mobile-width)}}.panel.open.svelte-1nwyuw{transform:var(--panel-transform-open);box-shadow:var(--panel-shadow)}.panel.open.svelte-1nwyuw header:where(.svelte-1nwyuw){transform:var(--panel-header-transform-open)}.panel.svelte-1nwyuw header:where(.svelte-1nwyuw){transform:var(--panel-header-transform-closed);border-top-left-radius:var(--panel-header-border-radius);border-bottom-left-radius:var(--panel-header-border-radius);gap:var(--panel-header-gap);-webkit-backdrop-filter:var(--panel-header-backdrop-filter);backdrop-filter:var(--panel-header-backdrop-filter);background:var(--panel-header-background);box-shadow:var(--shadow-l),var(--shadow-light-edge),var(--shadow-dark-edge);transition:transform var(--transition-duration)var(--transition-easing);border-top-right-radius:0;border-bottom-right-radius:0;flex-direction:column;display:flex;position:absolute}.panel.svelte-1nwyuw header:where(.svelte-1nwyuw):hover,.panel.svelte-1nwyuw header:where(.svelte-1nwyuw):focus-visible{transform:var(--panel-header-transform-hover)}.threads.svelte-1nwyuw{overscroll-behavior:contain;padding:var(--panel-threads-padding);box-sizing:border-box;background-color:var(--panel-threads-background);width:100%;-webkit-backdrop-filter:var(--panel-threads-backdrop);backdrop-filter:var(--panel-threads-backdrop);z-index:2;border-radius:var(--panel-threads-border-radius);border-top-left-radius:var(--panel-threads-border-top-left-radius);scrollbar-width:var(--panel-threads-scrollbar-width);scrollbar-gutter:stable;flex-direction:column;flex:100%;margin:0;list-style:none;display:flex;overflow-y:auto}.threads.svelte-1nwyuw li:where(.svelte-1nwyuw)+li:where(.svelte-1nwyuw){margin-top:var(--panel-threads-item-margin)}.threads.svelte-1nwyuw .no-threads:where(.svelte-1nwyuw){text-align:center;padding:var(--panel-no-threads-padding);font-size:var(--panel-no-threads-font-size);color:var(--panel-no-threads-color);margin-block:auto}"
};
function no(e, t) {
  ye(t, !0), le(e, Ts);
  const r = S(t, "scrollIntoView", 7), n = S(t, "handleSubmit", 7), o = S(t, "cancel", 7);
  let a;
  const s = /* @__PURE__ */ re(() => j.showResolvedOnly ? Ee.comments.filter((_) => _.status === "RESOLVED") : Ee.comments.filter((_) => _.status === "OPEN"));
  rt(() => {
    a && (j.open && !a.open ? a.show() : !j.open && a.open && a.close());
  }), nr(() => {
    const _ = (k) => {
      k.key === "Escape" && j.open && (j.open = !1);
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  });
  function i() {
    j.open = !1;
  }
  var u = Os();
  let c;
  var v = E(u), h = E(v);
  const l = /* @__PURE__ */ re(() => T("ui.panel.open", "Open comments"));
  ne(h, {
    onclick: () => j.open = !j.open,
    style: "button--header",
    get ariaLabel() {
      return m(l);
    },
    $$slots: {
      icon: (_, k) => {
        ro(_);
      }
    }
  }), $(v);
  var d = B(v, 2), f = E(d);
  {
    var p = (_) => {
      var k = Ps(), x = E(k), g = E(x, !0);
      $(x), $(k), H((P) => V(g, P), [
        () => T("ui.panel.no.comments", "No comments yet.")
      ]), C(_, k);
    }, w = (_, k) => {
      {
        var x = (P) => {
          var I = Rs(), b = E(I), R = E(b, !0);
          $(b), $(I), H((M) => V(R, M), [
            () => T("ui.panel.no.resolved", "No resolved comments yet.")
          ]), C(P, I);
        }, g = (P) => {
          var I = Nr(), b = Ae(I);
          Or(b, 17, () => m(s), (R) => R.id, (R, M) => {
            var D = Ns(), G = E(D);
            Qn(G, {
              get comment() {
                return m(M);
              },
              get scrollIntoView() {
                return r();
              },
              get cancel() {
                return o();
              },
              get handleSubmit() {
                return n();
              }
            }), $(D), C(R, D);
          }), C(P, I);
        };
        Ce(
          _,
          (P) => {
            m(s).length === 0 && j.showResolvedOnly ? P(x) : P(g, !1);
          },
          k
        );
      }
    };
    Ce(f, (_) => {
      m(s).length === 0 ? _(p) : _(w, !1);
    });
  }
  $(d);
  var q = B(d, 2);
  return to(q, {}), $(u), nt(u, (_) => a = _, () => a), H(
    (_) => {
      c = st(u, 1, "panel svelte-1nwyuw", null, c, _), d.inert = !j.open;
    },
    [() => ({ open: j.open })]
  ), Je("close", u, i), C(e, u), ke({
    get scrollIntoView() {
      return r();
    },
    set scrollIntoView(_) {
      r(_), z();
    },
    get handleSubmit() {
      return n();
    },
    set handleSubmit(_) {
      n(_), z();
    },
    get cancel() {
      return o();
    },
    set cancel(_) {
      o(_), z();
    }
  });
}
se(
  no,
  {
    scrollIntoView: {},
    handleSubmit: {},
    cancel: {}
  },
  [],
  [],
  !0
);
function As(e) {
  const t = e.target;
  if (!t)
    throw new Error("No target element found in event");
  const r = Ls();
  for (const n of r)
    try {
      const o = n.generator(t);
      if (o && Fs(o, t))
        return o;
    } catch (o) {
      console.warn(`Strategy ${n.name} failed:`, o);
    }
  return Ds(t);
}
function Ls() {
  return [
    {
      name: "ID",
      priority: 1,
      generator: (e) => e.id && Lr(e.id) ? `#${CSS.escape(e.id)}` : null
    },
    {
      name: "Unique Attributes",
      priority: 2,
      generator: (e) => {
        const t = ["data-testid", "data-id", "name", "for"];
        for (const r of t) {
          const n = e.getAttribute(r);
          if (n) {
            const o = `${e.tagName.toLowerCase()}[${r}="${CSS.escape(n)}"]`;
            if (Ve(o))
              return o;
          }
        }
        return null;
      }
    },
    {
      name: "Semantic Attributes",
      priority: 3,
      generator: (e) => {
        const t = [
          "aria-label",
          "aria-labelledby",
          "role",
          "type",
          "placeholder",
          "title",
          "alt"
        ], n = [e.tagName.toLowerCase()];
        for (const o of t) {
          const a = e.getAttribute(o);
          a && n.push(`[${o}="${CSS.escape(a)}"]`);
        }
        if (n.length > 1) {
          const o = n.join("");
          if (Ve(o))
            return o;
        }
        return null;
      }
    },
    {
      name: "Structural Attributes",
      priority: 4,
      generator: (e) => {
        const t = ["href", "src", "action", "value"], r = e.tagName.toLowerCase();
        for (const n of t) {
          const o = e.getAttribute(n);
          if (o && o.length > 0) {
            const a = `${r}[${n}="${CSS.escape(o)}"]`;
            if (Ve(a))
              return a;
          }
        }
        return null;
      }
    },
    {
      name: "Class Combinations",
      priority: 5,
      generator: (e) => {
        const t = Zt(e);
        if (t.length === 0)
          return null;
        const r = e.tagName.toLowerCase();
        for (const n of t) {
          const o = `${r}.${CSS.escape(n)}`;
          if (Ve(o))
            return o;
        }
        if (t.length >= 2) {
          const n = t.slice(0, 3).map((a) => `.${CSS.escape(a)}`).join(""), o = `${r}${n}`;
          if (Ve(o))
            return o;
        }
        return null;
      }
    },
    {
      name: "Parent Context",
      priority: 6,
      generator: (e) => {
        const t = e.parentElement;
        if (!t) return null;
        const r = js(t);
        if (!r) return null;
        const n = e.tagName.toLowerCase(), o = oo(e);
        if (o > 0) {
          const s = `${r} > ${n}:nth-of-type(${o})`;
          if (Ve(s))
            return s;
        }
        const a = Zt(e);
        if (a.length > 0) {
          const s = `${r} > ${n}.${CSS.escape(a[0])}`;
          if (Ve(s))
            return s;
        }
        return null;
      }
    }
  ];
}
function Zt(e) {
  const t = Array.from(e.classList), r = [
    /^(is-|has-|js-)/,
    // State prefixes
    /^(active|disabled|loading|selected|hover|focus)/,
    // State classes
    /^[a-z]+-[0-9]+$/,
    // Generated classes like 'item-123'
    /^(sm-|md-|lg-|xl-)/,
    // Responsive utilities
    /^(m-|p-|w-|h-|text-|bg-)/,
    // Tailwind-like utilities
    /^[a-f0-9]{6,}$/
    // Hash-like classes
  ];
  return t.filter((n) => !r.some((o) => o.test(n)));
}
function Ds(e) {
  const t = [];
  let r = e;
  for (; r && r !== document.body && t.length < 5; ) {
    const n = Hs(r);
    t.unshift(n);
    const o = t.join(" > ");
    if (Ve(o))
      return o;
    r = r.parentElement;
  }
  return t.join(" > ");
}
function js(e) {
  if (e.id && Lr(e.id))
    return `#${CSS.escape(e.id)}`;
  const t = ["data-testid", "data-id", "name"];
  for (const o of t) {
    const a = e.getAttribute(o);
    if (a)
      return `[${o}="${CSS.escape(a)}"]`;
  }
  const r = e.tagName.toLowerCase(), n = Zt(e);
  return n.length > 0 ? `${r}.${CSS.escape(n[0])}` : null;
}
function Hs(e) {
  const t = e.tagName.toLowerCase();
  if (e.id && Lr(e.id))
    return `#${CSS.escape(e.id)}`;
  const r = Zt(e);
  if (r.length > 0)
    return `${t}.${CSS.escape(r[0])}`;
  const n = oo(e);
  return n > 1 ? `${t}:nth-of-type(${n})` : t;
}
function oo(e) {
  let t = 1, r = e.previousElementSibling;
  for (; r; )
    r.tagName === e.tagName && t++, r = r.previousElementSibling;
  return t;
}
function Fs(e, t) {
  try {
    const r = document.querySelectorAll(e);
    return r.length === 1 && r[0] === t;
  } catch (r) {
    return console.warn(`Invalid selector: ${e}`, r), !1;
  }
}
function Ve(e) {
  try {
    return document.querySelectorAll(e).length === 1;
  } catch {
    return !1;
  }
}
function Lr(e) {
  return ![
    /^[a-f0-9]{8,}$/,
    // Hex strings
    /^(ember|react|vue)[0-9]+/,
    // Framework generated
    /^[0-9]+$/,
    // Pure numbers
    /^temp-/
    // Temporary prefixes
  ].some((r) => r.test(e));
}
const Vs = (e, t) => {
  const r = e.pageX, n = e.pageY, o = t.getBoundingClientRect(), a = o.left + window.scrollX, s = o.top + window.scrollY, i = r - a, u = n - s;
  let c = i / t.offsetWidth * 100, v = u / t.offsetHeight * 100;
  return c = Number(c.toFixed(2)), v = Number(v.toFixed(2)), {
    selectorOffsetX: c,
    selectorOffsetY: v
  };
}, Bs = (e) => {
  const t = As(e), r = document.querySelector(t);
  if (!r) return;
  const { selectorOffsetX: n, selectorOffsetY: o } = Vs(e, r);
  let a = e.pageX, s = e.pageY;
  return a = Number(a.toFixed(2)), s = Number(s.toFixed(2)), {
    selector: t,
    selectorOffsetX: n,
    selectorOffsetY: o,
    pagePositionX: a,
    pagePositionY: s
  };
}, Ys = () => {
  const e = document.body, t = document.documentElement;
  return Math.max(
    e.scrollWidth,
    e.offsetWidth,
    t.clientWidth,
    t.scrollWidth,
    t.offsetWidth
  );
}, Ws = (e, t) => {
  let r = 0, n = 0;
  if (!e || !t) return { left: r, top: n };
  r = e.pagePositionX, n = e.pagePositionY;
  const o = t.offsetWidth, a = t.offsetHeight, s = Ys(), i = Un();
  return r + o > s && (r = s - o), n + a > i && (n = i - a), r = Math.max(0, r), n = Math.max(0, n), { left: r, top: n };
};
var Xs = /* @__PURE__ */ X("<dialog><!></dialog>");
const Us = {
  hash: "svelte-iihm64",
  code: "dialog.svelte-iihm64{--loop-textarea-font-size:var(--comment-dialog-textarea-font-size);position:var(--comment-dialog-position);top:var(--top);left:var(--left);max-width:var(--comment-dialog-max-width);border-radius:var(--comment-dialog-border-radius);visibility:hidden;width:100%;max-height:none;box-shadow:var(--comment-dialog-shadow);border:0;margin:0;padding:0;overflow:hidden}dialog.is-visible.svelte-iihm64{visibility:visible}dialog.svelte-iihm64::backdrop{background-color:var(--comment-dialog-backdrop-background)}"
};
function ao(e, t) {
  ye(t, !0), le(e, Us);
  const r = S(t, "handleSubmit", 7), n = S(t, "showModal", 7), o = S(t, "newMarker", 7), a = S(t, "cancel", 7);
  let s, i = fe(Q({ left: 0, top: 0 })), u = fe(!1);
  rt(() => {
    n() ? (s.showModal(), N(i, Q(Ws(o(), s))), N(u, !0)) : (s.close(), N(u, !1));
  });
  var c = Xs();
  let v;
  var h = E(c);
  return Ar(h, {
    get handleSubmit() {
      return r();
    },
    get cancel() {
      return a();
    }
  }), $(c), nt(c, (l) => s = l, () => s), H(
    (l) => {
      ka(c, `--left: ${m(i).left ?? ""}px; --top: ${m(i).top ?? ""}px;`), v = st(c, 1, "svelte-iihm64", null, v, l);
    },
    [() => ({ "is-visible": m(u) })]
  ), Je("close", c, function(...l) {
    var d;
    (d = a()) == null || d.apply(this, l);
  }), C(e, c), ke({
    get handleSubmit() {
      return r();
    },
    set handleSubmit(l) {
      r(l), z();
    },
    get showModal() {
      return n();
    },
    set showModal(l) {
      n(l), z();
    },
    get newMarker() {
      return o();
    },
    set newMarker(l) {
      o(l), z();
    },
    get cancel() {
      return a();
    },
    set cancel(l) {
      a(l), z();
    }
  });
}
se(
  ao,
  {
    handleSubmit: {},
    showModal: {},
    newMarker: {},
    cancel: {}
  },
  [],
  [],
  !0
);
var Zs = /* @__PURE__ */ X('<h2 class="svelte-1y3js7r"> </h2> <p class="welcome-text svelte-1y3js7r"> </p>', 1), Js = /* @__PURE__ */ X('<div><div class="input"><input type="text" required class="svelte-1y3js7r"></div></div>'), Ks = /* @__PURE__ */ X('<dialog class="svelte-1y3js7r"><form class="svelte-1y3js7r"><!> <!> <footer class="svelte-1y3js7r"><!> <!></footer></form></dialog>');
const Gs = {
  hash: "svelte-1y3js7r",
  code: "dialog.svelte-1y3js7r{-webkit-backdrop-filter:var(--welcome-dialog-backdrop-filter);backdrop-filter:var(--welcome-dialog-backdrop-filter);border:var(--welcome-dialog-border);border-radius:var(--welcome-dialog-border-radius);box-shadow:var(--welcome-dialog-shadow);width:100%;max-width:var(--welcome-dialog-max-width);background:var(--welcome-dialog-background);padding:0}dialog.svelte-1y3js7r::backdrop{background:var(--welcome-dialog-backdrop-background);-webkit-backdrop-filter:var(--welcome-dialog-backdrop-backdrop-filter);backdrop-filter:var(--welcome-dialog-backdrop-backdrop-filter)}form.svelte-1y3js7r{padding:var(--welcome-dialog-form-padding)}h2.svelte-1y3js7r{margin:var(--welcome-dialog-title-margin);font-size:var(--welcome-dialog-title-font-size);color:var(--welcome-dialog-title-color);font-weight:var(--welcome-dialog-title-font-weight)}.welcome-text.svelte-1y3js7r{margin:var(--welcome-dialog-text-margin);font-size:var(--welcome-dialog-text-font-size);color:var(--welcome-dialog-text-color);line-height:var(--welcome-dialog-text-line-height)}.name-section.svelte-1y3js7r{margin-bottom:var(--welcome-dialog-name-section-margin)}.name-section.no-welcome.svelte-1y3js7r{border-top:none;padding-top:0}input.svelte-1y3js7r{border:var(--welcome-dialog-input-border);border-radius:var(--welcome-dialog-input-border-radius);width:100%;padding:var(--welcome-dialog-input-padding);box-sizing:border-box;font-family:var(--welcome-dialog-input-font-family);font-size:var(--welcome-dialog-input-font-size);color:var(--welcome-dialog-input-color);background:var(--welcome-dialog-input-background)}input.svelte-1y3js7r:focus-visible{outline-color:var(--welcome-dialog-input-outline-color);outline-offset:var(--welcome-dialog-input-outline-offset)}footer.svelte-1y3js7r{gap:var(--welcome-dialog-footer-gap);display:flex}footer.svelte-1y3js7r button{flex:1}"
};
function so(e, t) {
  ye(t, !0), le(e, Gs);
  const r = S(t, "headline", 7), n = S(t, "text", 7), o = S(t, "authenticated", 7), a = S(t, "welcomeEnabled", 7, !0), s = S(t, "onDismiss", 7);
  let i, u = fe(""), c = fe(!1);
  const v = () => i == null ? void 0 : i.showModal(), h = () => i == null ? void 0 : i.close();
  async function l(b) {
    var R;
    if (b.preventDefault(), o())
      (R = s()) == null || R(), i == null || i.close();
    else if (m(u).trim() && !m(c)) {
      N(c, !0);
      try {
        await ss(m(u).trim()), ct.set(m(u).trim()), i == null || i.close();
      } catch (M) {
        console.error("Failed to set guest name:", M);
      } finally {
        N(c, !1);
      }
    }
  }
  function d() {
    i == null || i.close();
  }
  function f() {
    N(u, ""), N(c, !1);
  }
  var p = Ks(), w = E(p), q = E(w);
  {
    var _ = (b) => {
      var R = Zs(), M = Ae(R), D = E(M, !0);
      $(M);
      var G = B(M, 2), ie = E(G, !0);
      $(G), H(() => {
        V(D, r()), V(ie, n());
      }), C(b, R);
    };
    Ce(q, (b) => {
      a() && b(_);
    });
  }
  var k = B(q, 2);
  {
    var x = (b) => {
      var R = Js();
      let M;
      var D = E(R), G = E(D);
      Ca(G), $(D), $(R), H(
        (ie, ee) => {
          M = st(R, 1, "name-section svelte-1y3js7r", null, M, ie), te(G, "placeholder", ee);
        },
        [
          () => ({ "no-welcome": !a() }),
          () => T("ui.welcome.guest.name.placeholder", "Enter your name")
        ]
      ), Hn(G, () => m(u), (ie) => N(u, ie)), C(b, R);
    };
    Ce(k, (b) => {
      o() || b(x);
    });
  }
  var g = B(k, 2), P = E(g);
  ne(P, {
    type: "submit",
    style: "button--solid",
    get disabled() {
      return m(c);
    },
    children: (b, R) => {
      var M = Nr(), D = Ae(M);
      {
        var G = (ee) => {
          var ue = de();
          H((O) => V(ue, O), [
            () => m(c) ? "Saving..." : T("ui.welcome.continue", "Continue")
          ]), C(ee, ue);
        }, ie = (ee) => {
          var ue = de();
          H((O) => V(ue, O), [() => T("ui.welcome.continue", "Continue")]), C(ee, ue);
        };
        Ce(D, (ee) => {
          o() ? ee(ie, !1) : ee(G);
        });
      }
      C(b, M);
    },
    $$slots: { default: !0 }
  });
  var I = B(P, 2);
  return ne(I, {
    onclick: d,
    get disabled() {
      return m(c);
    },
    children: (b, R) => {
      be();
      var M = de();
      H((D) => V(M, D), [() => T("ui.welcome.dismiss", "Dismiss")]), C(b, M);
    },
    $$slots: { default: !0 }
  }), $(g), $(w), $(p), nt(p, (b) => i = b, () => i), Je("close", p, f), Je("submit", w, l), C(e, p), ke({
    showModal: v,
    close: h,
    get headline() {
      return r();
    },
    set headline(b) {
      r(b), z();
    },
    get text() {
      return n();
    },
    set text(b) {
      n(b), z();
    },
    get authenticated() {
      return o();
    },
    set authenticated(b) {
      o(b), z();
    },
    get welcomeEnabled() {
      return a();
    },
    set welcomeEnabled(b = !0) {
      a(b), z();
    },
    get onDismiss() {
      return s();
    },
    set onDismiss(b) {
      s(b), z();
    }
  });
}
se(
  so,
  {
    headline: {},
    text: {},
    authenticated: {},
    welcomeEnabled: {},
    onDismiss: {}
  },
  [],
  ["showModal", "close"],
  !0
);
var Qs = /* @__PURE__ */ X("<!> <!> <!> <!>", 1), ei = /* @__PURE__ */ X("<!> <!>", 1);
function ti(e, t) {
  ye(t, !0);
  const r = S(t, "position", 7), n = S(t, "language", 7), o = S(t, "apibase", 7), a = S(t, "pageId", 7), s = S(t, "authenticated", 7), i = S(t, "welcome-enabled", 7), u = S(t, "welcome-headline", 7), c = S(t, "welcome-text", 7), v = S(t, "translations", 7);
  let h = fe(!1), l = fe(!1), d, f = /* @__PURE__ */ re(() => s() === "true"), p = /* @__PURE__ */ re(() => i() === "true");
  const w = /* @__PURE__ */ re(() => Ee.comments.filter((y) => y.status !== "RESOLVED")), q = "loop-welcome-dismissed", _ = () => m(f) ? sessionStorage.getItem(q) === "true" : !1, k = () => {
    m(f) && sessionStorage.setItem(q, "true");
  };
  let x = fe(null);
  const g = (y) => {
    var L;
    const Z = (L = t.$$host.shadowRoot) == null ? void 0 : L.getElementById(`marker-${y}`);
    Z && Z.scrollIntoView({ behavior: "smooth", block: "center" });
  }, P = async (y) => {
    const Z = Ee.comments.find((L) => L.id === y);
    Z && (j.open = !0, j.currentCommentId = y, Z.status === "RESOLVED" && (j.showResolvedOnly = !0), await ta(), requestAnimationFrame(() => {
      var U, oe;
      const L = t.$$host.shadowRoot;
      (U = L == null ? void 0 : L.getElementById(`marker-${y}`)) == null || U.scrollIntoView({ behavior: "smooth", block: "center" }), (oe = L == null ? void 0 : L.getElementById(`comment-${y}`)) == null || oe.scrollIntoView({ behavior: "smooth", block: "start" }), j.pulseMarkerId = y, setTimeout(
        () => {
          j.pulseMarkerId === y && (j.pulseMarkerId = 0);
        },
        3e3
      );
    }));
  }, I = (y) => {
    j.open = !0, j.currentCommentId = y, requestAnimationFrame(() => {
      var Z, L;
      (L = (Z = t.$$host.shadowRoot) == null ? void 0 : Z.getElementById(`comment-${y}`)) == null || L.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, b = () => {
    const y = window.location.hash.match(/^#loop-comment-(\d+)$/);
    y && P(Number(y[1]));
  }, R = (y) => {
    var oe;
    const Z = y.target, L = Z.nodeName === "KIRBY-LOOP" || ((oe = Z.parentElement) == null ? void 0 : oe.closest("loop"));
    if (!Ge.open || L) return;
    if (!m(f) && !ct.get()) {
      d == null || d.showModal();
      return;
    }
    const U = Bs(y);
    U && (N(x, Q(U)), N(l, !0));
  }, M = () => {
    N(l, !1), cr();
  }, D = (y) => {
    if (y.preventDefault(), !m(f) && !ct.get()) {
      d == null || d.showModal();
      return;
    }
    const { text: Z, parentId: L } = ft;
    if (L)
      is({ parentId: L, comment: Z }), cr();
    else {
      if (!m(x)) return;
      const U = n() || "", oe = {
        url: window.location.href,
        comment: Z,
        parentId: null,
        lang: U,
        pageId: a(),
        ...m(x)
      };
      N(l, !1), ns(oe), cr();
    }
  };
  nr(async () => {
    const y = JSON.parse(v() || "{}");
    Oa(y), N(h, Q(await rs(a()))), m(h) && (b(), window.addEventListener("hashchange", b)), ct.get(), m(p) && m(h) ? (m(f) && !_() || !m(f) && !ct.get()) && (d == null || d.showModal()) : !m(f) && !ct.get() && m(h) && (d == null || d.showModal());
  }), Vn(() => {
    window.removeEventListener("hashchange", b);
  }), rt(() => {
    Ge.open ? document.body.style.setProperty("cursor", `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='black' stroke-width='1.5'/%3E%3Cpath d='M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z' stroke='white' stroke-width='0.75'/%3E%3Cpath d='M15 12H12M12 12H9M12 12V9M12 12V15' stroke='white' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M15 12H12M12 12H9M12 12V9M12 12V15' stroke='black' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E"), auto`) : document.body.style.removeProperty("cursor"), document.documentElement.classList.toggle("loop-overlay-open", Ge.open);
  });
  var G = ei();
  Je("click", pn, R);
  var ie = Ae(G);
  {
    var ee = (y) => {
      var Z = Qs(), L = Ae(Z);
      Xn(L, {
        get position() {
          return r();
        },
        get commentsCount() {
          return m(w).length;
        }
      });
      var U = B(L, 2);
      no(U, { scrollIntoView: g, handleSubmit: D, cancel: M });
      var oe = B(U, 2);
      Or(oe, 17, () => m(w), (Fe) => Fe.id, (Fe, Ke) => {
        Zn(Fe, {
          get comment() {
            return m(Ke);
          },
          selectComment: I
        });
      });
      var bt = B(oe, 2);
      ao(bt, {
        handleSubmit: D,
        get showModal() {
          return m(l);
        },
        get newMarker() {
          return m(x);
        },
        cancel: M
      }), C(y, Z);
    };
    Ce(ie, (y) => {
      m(h) && y(ee);
    });
  }
  var ue = B(ie, 2);
  const O = /* @__PURE__ */ re(() => u() || ""), K = /* @__PURE__ */ re(() => c() || "");
  return nt(
    so(ue, {
      get headline() {
        return m(O);
      },
      get text() {
        return m(K);
      },
      get authenticated() {
        return m(f);
      },
      get welcomeEnabled() {
        return m(p);
      },
      onDismiss: k
    }),
    (y) => d = y,
    () => d
  ), C(e, G), ke({
    get position() {
      return r();
    },
    set position(y) {
      r(y), z();
    },
    get language() {
      return n();
    },
    set language(y) {
      n(y), z();
    },
    get apibase() {
      return o();
    },
    set apibase(y) {
      o(y), z();
    },
    get pageId() {
      return a();
    },
    set pageId(y) {
      a(y), z();
    },
    get authenticated() {
      return s();
    },
    set authenticated(y) {
      s(y), z();
    },
    get "welcome-enabled"() {
      return i();
    },
    set "welcome-enabled"(y) {
      i(y), z();
    },
    get "welcome-headline"() {
      return u();
    },
    set "welcome-headline"(y) {
      u(y), z();
    },
    get "welcome-text"() {
      return c();
    },
    set "welcome-text"(y) {
      c(y), z();
    },
    get translations() {
      return v();
    },
    set translations(y) {
      v(y), z();
    }
  });
}
customElements.define("kirby-loop", se(
  ti,
  {
    position: {},
    language: {},
    apibase: {},
    pageId: {},
    authenticated: {},
    "welcome-enabled": {},
    "welcome-headline": {},
    "welcome-text": {},
    translations: {}
  },
  [],
  [],
  !0
));
export {
  ti as default
};
