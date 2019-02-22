(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1099:function(e,r,t){"use strict";t.r(r);var i=t(3),n=t(12),o=(t(7),t(11)),a=t(4);function c(e){var r,t=k(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function s(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function f(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function p(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function d(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function u(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function h(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=m(e);return w(e,"finisher","An element descriptor"),w(e,"extras","An element descriptor"),r})}function m(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=k(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;w(e,"elements","An element descriptor");var o={kind:r,key:t,placement:i,descriptor:Object.assign({},n)};return"field"!==r?w(e,"initializer","A method descriptor"):(w(n,"get","The property descriptor of a field descriptor"),w(n,"set","The property descriptor of a field descriptor"),w(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o}function v(e){return{element:m(e),finisher:g(e,"finisher"),extras:h(e.extras)}}function y(e){var r={kind:"class",elements:e.map(u)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function b(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');w(e,"key","A class descriptor"),w(e,"placement","A class descriptor"),w(e,"descriptor","A class descriptor"),w(e,"initializer","A class descriptor"),w(e,"extras","A class descriptor");var t=g(e,"finisher");return{elements:h(e.elements),finisher:t}}function w(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function g(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function k(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let x=(E=null,A=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>i["b"]`
    :host {
      display: block;
      color: white;
      overflow: auto;
    }

    h1 {
      font-size: 40px;
      line-height: 1.2;
      padding: 2px 0;
      width: 560px;
      margin-top: 15%;
      margin-bottom: 40px;
      font-weight: 300;
      position: relative;
    }

    div {
      max-width: var(--mw);
      margin: 21px auto 60px auto;
    }

    span {
      background: none;
      display: inline;
      padding: 0.7rem 1.3rem;

      box-decoration-break: clone;
      -webkit-box-decoration-break: clone;
      z-index: 2;
      position: relative;
    }

    section span {
      color: transparent;
      background-color: var(--primary);
      opacity: 0.5;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      opacity: 0.7;
      font-size: 15px;
      font-weight: 500;
      line-height: 1;
    }

    p {
      opacity: 0.3;
      font-size: 14px;
    }

    section {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    flex-align {
      display: flex;
      align-items: center;
    }

    flex-grow {
      flex-grow: 1;
    }
  `},{kind:"field",decorators:[Object(i.f)({type:Object})],key:"person",value:()=>({})},{kind:"method",key:"render",value(){return i["d"]`
      ${a.a}

      <style>
        :host {
          background: linear-gradient(rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86))
              no-repeat center center fixed,
            url(${this.person.pictures.headerPic}) no-repeat center center;
          background-size: cover, cover;
        }
      </style>
      <div>
        <p>Quote of the day</p>

        <h1>
          <span>
            ${this.person.quotes[0]}
          </span>
          <section>
            <span>
              ${this.person.quotes[0]}
            </span>
          </section>
        </h1>

        <flex-align>
          <flex-grow>
            <h2>${this.person.firstName} ${this.person.lastName}</h2>
            <h3>${this.person.typeOfPerson.join(", ")}</h3>
          </flex-grow>
          <mwc-button outlined>SEE PROFILE</mwc-button>
        </flex-align>
      </div>
    `}}]}},T=i.a,z=A(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&p(e,r)})})}(e,$.elements)},T),$=function(e,r){var t=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){d(e,n)}),e.forEach(function(e){if(!l(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=u(e),s=v((0,n[o])(c)||c);d(e=s.element,r),s.finisher&&i.push(s.finisher);var l=s.extras;if(l){for(var f=0;f<l.length;f++)d(l[f],r);t.push.apply(t,l)}}return{element:e,finishers:i,extras:t}}(e,n);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var o=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var n=y(e),o=b((0,r[i])(n)||n);if(void 0!==o.finisher&&t.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,o.finishers),o.finishers=i,o}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=r.find(t)))if(f(o.descriptor)||f(n.descriptor)){if(l(o)||l(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(l(o)){if(l(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}s(o,n)}else r.push(o)}return r}(z.d.map(c)),E),j=z.F,O=$.elements,S=j.prototype,["method","field"].forEach(function(e){O.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?j:S;p(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(z.F,$.finishers));var E,A,T,j,O,S,z,$;customElements.define("quotes-header",x);t(29),t(19),t(18),t(15);var P=t(5);function q(e){var r,t=V(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function D(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function F(e){return e.decorators&&e.decorators.length}function N(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function R(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function I(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function L(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function _(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=J(e);return C(e,"finisher","An element descriptor"),C(e,"extras","An element descriptor"),r})}function J(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=V(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;C(e,"elements","An element descriptor");var o={kind:r,key:t,placement:i,descriptor:Object.assign({},n)};return"field"!==r?C(e,"initializer","A method descriptor"):(C(n,"get","The property descriptor of a field descriptor"),C(n,"set","The property descriptor of a field descriptor"),C(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o}function M(e){return{element:J(e),finisher:H(e,"finisher"),extras:_(e.extras)}}function Q(e){var r={kind:"class",elements:e.map(L)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function B(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');C(e,"key","A class descriptor"),C(e,"placement","A class descriptor"),C(e,"descriptor","A class descriptor"),C(e,"initializer","A class descriptor"),C(e,"extras","A class descriptor");var t=H(e,"finisher");return{elements:_(e.elements),finisher:t}}function C(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function H(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function V(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}t.d(r,"HomeView",function(){return G});let G=function(e,r,t){var i,n,o,a=r(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&R(e,r)})})}(e,c.elements)},t),c=function(e,r){var t=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){I(e,n)}),e.forEach(function(e){if(!F(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=L(e),s=M((0,n[o])(c)||c);I(e=s.element,r),s.finisher&&i.push(s.finisher);var l=s.extras;if(l){for(var f=0;f<l.length;f++)I(l[f],r);t.push.apply(t,l)}}return{element:e,finishers:i,extras:t}}(e,n);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var o=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var n=Q(e),o=B((0,r[i])(n)||n);if(void 0!==o.finisher&&t.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,o.finishers),o.finishers=i,o}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=r.find(t)))if(N(o.descriptor)||N(n.descriptor)){if(F(o)||F(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(F(o)){if(F(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}D(o,n)}else r.push(o)}return r}(a.d.map(q)),e);return i=a.F,n=c.elements,o=i.prototype,["method","field"].forEach(function(e){n.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var n="static"===t?i:o;R(n,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(a.F,c.finishers)}([Object(i.c)("home-view")],function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>i["b"]`
        :host {
            background: var(--bg-overview); 
        }

        mwc-card {
            display: block;
            background: white;
            box-shadow: 0 2px 7px 1px rgba(0,0,0,0.1);
            ${Object(a.c)(P.g.lg)}
            ${Object(a.c)(P.f.xs)}
        }
                    
        flex-align {
            margin-top: 150px;
        }

        h1 {
            font-size: 22px;
            color: black;        
        }
    `},{kind:"method",key:"render",value:()=>i["d"]`

            <quotes-header .person=${o.e}></quotes-header>
            
            <max-width>
                <flex-align center>
                    <flex-grow grow='1'>
                        <h1>Authors</h1>
                    </flex-grow>
                    <flex-grow>
                        <a href='/authors'><mwc-button>SEE ALL</mwc-button></a>                    
                    </flex-grow>
                </flex-align>
                <mwc-card style="display: flex">
                        <author-preview .person=${o.b}></author-preview>
                        <author-preview .person=${o.b}></author-preview>
                <author-preview .person=${o.b}></author-preview>
            </mwc-card>
            

            <flex-align center>
                    <flex-grow grow='1'>
                        <h1>Books</h1>
                    </flex-grow>
                    <flex-grow>
                        <a href='/books'><mwc-button>SEE ALL</mwc-button></a>                    
                    </flex-grow>
                </flex-align>            
            <mwc-card style="display: flex">
                    <book-preview .book=${o.d}></book-preview>
                    <book-preview .book=${o.d}></book-preview>
                    <book-preview .book=${o.d}></book-preview>
                    <book-preview .book=${o.d}></book-preview>
                </mwc-card>
                

                <flex-align center>
                    <flex-grow grow='1'>
                        <h1>Quotes</h1>
                    </flex-grow>
                    <flex-grow>
                        <a href='/quotes'><mwc-button>SEE ALL</mwc-button></a>                    
                    </flex-grow>
                </flex-align>                
                <mwc-card style="display: flex">
                        <quote-preview .quote=${o.f}></quote-preview>
                        <quote-preview .quote=${o.f}></quote-preview>
                        <quote-preview .quote=${o.f}></quote-preview>
                        <quote-preview .quote=${o.f}></quote-preview>
                    </mwc-card>      
                </max-width>


		`}]}},n.a)},18:function(e,r,t){"use strict";var i=t(3),n=(t(7),t(5)),o=t(4);t(9),t(8);function a(e){var r,t=g(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function c(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function f(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function p(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function d(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function u(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=h(e);return b(e,"finisher","An element descriptor"),b(e,"extras","An element descriptor"),r})}function h(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=g(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;b(e,"elements","An element descriptor");var o={kind:r,key:t,placement:i,descriptor:Object.assign({},n)};return"field"!==r?b(e,"initializer","A method descriptor"):(b(n,"get","The property descriptor of a field descriptor"),b(n,"set","The property descriptor of a field descriptor"),b(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o}function m(e){return{element:h(e),finisher:w(e,"finisher"),extras:u(e.extras)}}function v(e){var r={kind:"class",elements:e.map(d)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function y(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');b(e,"key","A class descriptor"),b(e,"placement","A class descriptor"),b(e,"descriptor","A class descriptor"),b(e,"initializer","A class descriptor"),b(e,"extras","A class descriptor");var t=w(e,"finisher");return{elements:u(e.elements),finisher:t}}function b(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function w(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function g(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let k=(x=null,E=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>i["b"]`
    :host {
      cursor: pointer;
      display: block;
      overflow: hidden;
      flex-grow: 1;
      margin: 10px;
      color: white;
      ${Object(o.c)(n.g.lg)}

      text-align: center;
      position: relative;
    }

    :host(:hover) .content_wrapper {
      transform: scale(1.05);
    }

    a {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      ${Object(o.c)(n.f.md)}
    }

    h1 {
      font-size: 21px;
      font-weight: 300;
      margin-bottom: 30px;
      line-height: 1.1;      
    }

    h2 {
      font-size: 23px;
      font-weight: 600;
    }

    h3 {
      font-size: 16px;
      font-weight: 500;
      opacity: 0.7;
      text-transform: capitalize;
      line-height: 1;
    }

  `},{kind:"field",decorators:[Object(i.f)({type:Object})],key:"quote",value:()=>({})},{kind:"method",key:"render",value(){return i["d"]`
      ${o.a}

      <style>
        .content_wrapper {
          transition: transform 0.5s ease-in-out;
          background: linear-gradient(
                var(--secondary-fade),
                var(--secondary-fade)
              )
              no-repeat center center fixed,
            url(https://i1.wp.com/youberelentless.com/wp-content/uploads/2017/10/darren-hardy-motivational-speaker1.jpg?fit=770%2C462) no-repeat center center;
          background-size: cover, cover;
          padding-top: 100%;
        }
      </style>

        <div class="content_wrapper"></div>

        <a
            href="authors/${this.quote.author.humanId}"
          >
            <flex-align direction='column'>
              <flex-grow grow='1'></flex-grow>
              <flex-grow>
                <h1>
                  ${this.quote.quote}
                </h1>

                <h2>
                  ${this.quote.author.firstName} ${this.quote.author.firstName}
                </h2>
                <h3>${this.quote.author.typeOfPerson.join(", ")}</h3>
              </flex-grow>
            </flex-align>
          </a>


    `}}]}},A=i.a,S=E(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&f(e,r)})})}(e,z.elements)},A),z=function(e,r){var t=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){p(e,n)}),e.forEach(function(e){if(!s(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=d(e),s=m((0,n[o])(c)||c);p(e=s.element,r),s.finisher&&i.push(s.finisher);var l=s.extras;if(l){for(var f=0;f<l.length;f++)p(l[f],r);t.push.apply(t,l)}}return{element:e,finishers:i,extras:t}}(e,n);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var o=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var n=v(e),o=y((0,r[i])(n)||n);if(void 0!==o.finisher&&t.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,o.finishers),o.finishers=i,o}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=r.find(t)))if(l(o.descriptor)||l(n.descriptor)){if(s(o)||s(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(s(o)){if(s(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}c(o,n)}else r.push(o)}return r}(S.d.map(a)),x),T=S.F,j=z.elements,O=T.prototype,["method","field"].forEach(function(e){j.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?T:O;f(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(S.F,z.finishers));var x,E,A,T,j,O,S,z;customElements.define("quote-preview",k)},19:function(e,r,t){"use strict";var i=t(3),n=(t(7),t(5)),o=t(4);t(9),t(8);function a(e){var r,t=g(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function c(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function f(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function p(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function d(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function u(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=h(e);return b(e,"finisher","An element descriptor"),b(e,"extras","An element descriptor"),r})}function h(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=g(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;b(e,"elements","An element descriptor");var o={kind:r,key:t,placement:i,descriptor:Object.assign({},n)};return"field"!==r?b(e,"initializer","A method descriptor"):(b(n,"get","The property descriptor of a field descriptor"),b(n,"set","The property descriptor of a field descriptor"),b(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o}function m(e){return{element:h(e),finisher:w(e,"finisher"),extras:u(e.extras)}}function v(e){var r={kind:"class",elements:e.map(d)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function y(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');b(e,"key","A class descriptor"),b(e,"placement","A class descriptor"),b(e,"descriptor","A class descriptor"),b(e,"initializer","A class descriptor"),b(e,"extras","A class descriptor");var t=w(e,"finisher");return{elements:u(e.elements),finisher:t}}function b(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function w(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function g(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let k=(x=null,E=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>i["b"]`
    :host {
      cursor: pointer;
      display: block;
      flex: auto;
      margin: 10px;
      color: white;
      position: relative;
      overflow: hidden;
      ${Object(o.c)(n.b.g90)}
      ${Object(o.c)(n.g.lg)}
    }

    :host(:hover) div {
      opacity: 1;
    }

    div {
      transition: opacity 0.4s ease-in-out;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: var(--secondary-fade);
      opacity: 0;

      ${Object(o.c)(n.f.md)}
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }    

    h1 {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 30px;
      line-height: 1.3;
      letter-spacing: 0.2px;
    }

    h2 {
      font-size: 23px;
      font-weight: 600;
    }

    h3 {
      font-size: 16px;
      font-weight: 500;
      opacity: 0.7;
      text-transform: capitalize;
      line-height: 1;
    }

  `},{kind:"field",decorators:[Object(i.f)({type:Object})],key:"book",value:()=>({})},{kind:"method",key:"render",value(){return i["d"]`
      ${o.a}

      <style>

      </style>

        <img src=${this.book.image[Math.floor(Math.random()*this.book.image.length)]}>

        <div>

        <a
            href="books/${this.book.humanId}"
          >

          <flex-align direction='column'>
            <flex-grow grow='1'></flex-grow>
            <flex-grow>
              <h1>
                ${this.book.teaser}
              </h1>

              <h2>
                ${this.book.title}
              </h2>
              <h3>
                ${this.book.author.firstName} ${this.book.author.firstName}
              </h3>        
            </flex-grow>
          </flex-align>

          </a>
        </div>


    `}}]}},A=i.a,S=E(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&f(e,r)})})}(e,z.elements)},A),z=function(e,r){var t=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){p(e,n)}),e.forEach(function(e){if(!s(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=d(e),s=m((0,n[o])(c)||c);p(e=s.element,r),s.finisher&&i.push(s.finisher);var l=s.extras;if(l){for(var f=0;f<l.length;f++)p(l[f],r);t.push.apply(t,l)}}return{element:e,finishers:i,extras:t}}(e,n);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var o=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var n=v(e),o=y((0,r[i])(n)||n);if(void 0!==o.finisher&&t.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,o.finishers),o.finishers=i,o}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=r.find(t)))if(l(o.descriptor)||l(n.descriptor)){if(s(o)||s(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(s(o)){if(s(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}c(o,n)}else r.push(o)}return r}(S.d.map(a)),x),T=S.F,j=z.elements,O=T.prototype,["method","field"].forEach(function(e){j.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?T:O;f(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(S.F,z.finishers));var x,E,A,T,j,O,S,z;customElements.define("book-preview",k)}}]);