(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{11:function(e,r,t){"use strict";t.d(r,"e",function(){return o}),t.d(r,"b",function(){return a}),t.d(r,"d",function(){return c}),t.d(r,"f",function(){return s}),t.d(r,"a",function(){return d}),t.d(r,"c",function(){return l});var n=t(20),i=t.n(n);const o={id:i.a.random.uuid(),humanId:i.a.random.uuid(),firstName:i.a.name.firstName(),lastName:i.a.name.lastName(),typeOfPerson:[i.a.lorem.word(),i.a.lorem.word(),i.a.lorem.word()],quotes:[`${i.a.lorem.sentence()} ${i.a.lorem.sentence()}`],pictures:{headerPic:i.a.random.image()}},a={id:i.a.random.uuid(),authorId:i.a.random.uuid(),author:{humanId:i.a.random.uuid(),firstName:i.a.name.firstName(),lastName:i.a.name.lastName(),typeOfPerson:[i.a.lorem.word(),i.a.lorem.word(),i.a.lorem.word()],categories:[i.a.lorem.word(),i.a.lorem.word(),i.a.lorem.word()],pictures:{cardPic:i.a.random.image()}}},c={id:i.a.random.uuid(),humanId:i.a.random.uuid(),authorId:i.a.random.uuid(),teaser:`${i.a.lorem.paragraph()} ${i.a.lorem.paragraph()}`,title:`${i.a.lorem.word()} ${i.a.lorem.word()} ${i.a.lorem.word()} ${i.a.lorem.word()} ${i.a.lorem.word()}`,author:{firstName:i.a.name.firstName(),lastName:i.a.name.lastName()},image:["../assets/book1.png","../assets/book2.png","../assets/book3.png","../assets/book4.png"]},s={id:i.a.random.uuid(),humanId:i.a.random.uuid(),authorId:i.a.random.uuid(),quote:i.a.lorem.sentence(),author:{humanId:i.a.random.uuid(),firstName:i.a.name.firstName(),lastName:i.a.name.lastName(),typeOfPerson:[i.a.lorem.word(),i.a.lorem.word(),i.a.lorem.word()],pictures:{cardPic:i.a.random.image()}}},d={id:i.a.random.uuid(),author:{humanId:i.a.random.uuid(),pictures:{profilePic:i.a.random.image()},categories:[i.a.lorem.word(),i.a.lorem.word(),i.a.lorem.word()],socialMedia:[{networkName:"facebook",count:i.a.random.number(),link:i.a.internet.url()},{networkName:"twitter",count:i.a.random.number(),link:i.a.internet.url()},{networkName:"instagram",count:i.a.random.number(),link:i.a.internet.url()}]}},l={id:i.a.random.uuid(),humanId:i.a.random.uuid(),title:i.a.lorem.sentence(),image:i.a.random.image(),affiliate:{link:i.a.internet.url(),price:i.a.commerce.price()}}},12:function(e,r,t){"use strict";t.d(r,"a",function(){return g});var n=t(3);function i(e){var r,t=b(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function o(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function a(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function s(e,r){var t=r.descriptor;if("field"===r.kind){var n=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,r.key,t)}function d(e,r,t){var n=r[e.placement];if(!t&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)}function l(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function u(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=f(e);return v(e,"finisher","An element descriptor"),v(e,"extras","An element descriptor"),r})}function f(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=b(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;v(e,"elements","An element descriptor");var o={kind:r,key:t,placement:n,descriptor:Object.assign({},i)};return"field"!==r?v(e,"initializer","A method descriptor"):(v(i,"get","The property descriptor of a field descriptor"),v(i,"set","The property descriptor of a field descriptor"),v(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o}function p(e){return{element:f(e),finisher:y(e,"finisher"),extras:u(e.extras)}}function m(e){var r={kind:"class",elements:e.map(l)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function h(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');v(e,"key","A class descriptor"),v(e,"placement","A class descriptor"),v(e,"descriptor","A class descriptor"),v(e,"initializer","A class descriptor"),v(e,"extras","A class descriptor");var t=y(e,"finisher");return{elements:u(e.elements),finisher:t}}function v(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function y(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function b(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let g=(w=null,k=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",decorators:[Object(n.f)({type:Boolean})],key:"active",value:void 0}]}},x=n.a,A=k(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&s(e,r)})})}(e,T.elements)},x),T=function(e,r){var t=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){d(e,i)}),e.forEach(function(e){if(!a(e))return t.push(e);var r=function(e,r){for(var t=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=l(e),s=p((0,i[o])(c)||c);d(e=s.element,r),s.finisher&&n.push(s.finisher);var u=s.extras;if(u){for(var f=0;f<u.length;f++)d(u[f],r);t.push.apply(t,u)}}return{element:e,finishers:n,extras:t}}(e,i);t.push(r.element),t.push.apply(t,r.extras),n.push.apply(n,r.finishers)}),!r)return{elements:t,finishers:n};var o=function(e,r){for(var t=[],n=r.length-1;n>=0;n--){var i=m(e),o=h((0,r[n])(i)||i);if(void 0!==o.finisher&&t.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return n.push.apply(n,o.finishers),o.finishers=n,o}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},n=0;n<e.length;n++){var i,s=e[n];if("method"===s.kind&&(i=r.find(t)))if(c(s.descriptor)||c(i.descriptor)){if(a(s)||a(i))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");i.descriptor=s.descriptor}else{if(a(s)){if(a(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");i.decorators=s.decorators}o(s,i)}else r.push(s)}return r}(A.d.map(i)),w),E=A.F,O=T.elements,j=E.prototype,["method","field"].forEach(function(e){O.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var n="static"===t?E:j;s(n,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var n=(0,r[t])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e}(A.F,T.finishers));var w,k,x,E,O,j,A,T},29:function(e,r,t){"use strict";var n=t(3),i=(t(7),t(5)),o=t(4);t(9),t(8);function a(e){var r,t=w(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function c(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function l(e,r){var t=r.descriptor;if("field"===r.kind){var n=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,r.key,t)}function u(e,r,t){var n=r[e.placement];if(!t&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)}function f(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function p(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=m(e);return b(e,"finisher","An element descriptor"),b(e,"extras","An element descriptor"),r})}function m(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=w(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;b(e,"elements","An element descriptor");var o={kind:r,key:t,placement:n,descriptor:Object.assign({},i)};return"field"!==r?b(e,"initializer","A method descriptor"):(b(i,"get","The property descriptor of a field descriptor"),b(i,"set","The property descriptor of a field descriptor"),b(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o}function h(e){return{element:m(e),finisher:g(e,"finisher"),extras:p(e.extras)}}function v(e){var r={kind:"class",elements:e.map(f)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function y(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');b(e,"key","A class descriptor"),b(e,"placement","A class descriptor"),b(e,"descriptor","A class descriptor"),b(e,"initializer","A class descriptor"),b(e,"extras","A class descriptor");var t=g(e,"finisher");return{elements:p(e.elements),finisher:t}}function b(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function g(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function w(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}function k(e,r,t){return(k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,r,t){var n=function(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=x(e)););return e}(e,r);if(n){var i=Object.getOwnPropertyDescriptor(n,r);return i.get?i.get.call(t):i.value}})(e,r,t||e)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}let E=(O=null,j=function(e,r){class t extends r{constructor(){super(...arguments),e(this)}}return{F:t,d:[{kind:"field",static:!0,key:"styles",value:()=>n["b"]`
    :host {
      cursor: pointer;
      display: block;
      overflow: hidden;
      flex-grow: 1;
      position: relative;
      color: white;

      ${Object(o.c)(i.g.lg)}
    }

    mwc-chip {
      background: white;
      opacity: 0.65;
      color: var(--secondary);
      border-radius: 50px;
      padding: 2px 9px;
      text-transform: capitalize;
      font-size: 12px;
      margin-right: 3px;
      margin-top: 22px;
      display: inline-block;          
    }

    :host(:hover) div {
      transform: scale(1.05);
    }

    a {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;

      ${Object(o.c)(i.f.md)}
    }    

    div {
      transition: transform 0.5s ease-in-out;
      padding-top: 100%;
    }
  `},{kind:"field",decorators:[Object(n.f)({type:Object})],key:"person",value:()=>({})},{kind:"method",key:"connectedCallback",value(){k(x(t.prototype),"connectedCallback",this).call(this),this.updateStyles("--author-bg","url(https://i1.wp.com/youberelentless.com/wp-content/uploads/2017/10/darren-hardy-motivational-speaker1.jpg?fit=770%2C462)")}},{kind:"method",key:"updateStyles",value(e,r){this.style.setProperty(e,r)}},{kind:"method",key:"render",value(){return n["d"]`
      ${o.a}

      <style>
        div {
          background: var(--author-bg)
              no-repeat center center fixed;
          background-size: cover;


          background: linear-gradient(
                var(--secondary-fade),
                var(--secondary-fade)
              )
              no-repeat center center fixed,
              var(--author-bg) no-repeat center center;
          background-size: cover, cover;          
        }

        h1 {
          font-size: 23px;
          font-weight: 600;
        }

        h2 {
          font-size: 16px;
          font-weight: 500;
          opacity: 0.7;
          text-transform: capitalize;
          line-height: 1;
        }
      </style>

        <div></div>

        <a
            href="authors/${this.person.author.humanId}"
          >

              <flex-align direction='column'>
                <flex-grow grow='1'></flex-grow>
                <flex-grow>
                  <h1>
                    ${this.person.author.firstName} ${this.person.author.firstName}
                  </h1>
                  <h2>${this.person.author.typeOfPerson.join(", ")}</h2>

                  ${this.person.author.categories.map(e=>n["d"]`
                        <mwc-chip>${e}</mwc-chip>
                      `)}
                </flex-grow>
              </flex-align>
          </a>


    `}}]}},A=n.a,z=j(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&l(e,r)})})}(e,N.elements)},A),N=function(e,r){var t=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach(function(e){u(e,i)}),e.forEach(function(e){if(!s(e))return t.push(e);var r=function(e,r){for(var t=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=f(e),s=h((0,i[o])(c)||c);u(e=s.element,r),s.finisher&&n.push(s.finisher);var d=s.extras;if(d){for(var l=0;l<d.length;l++)u(d[l],r);t.push.apply(t,d)}}return{element:e,finishers:n,extras:t}}(e,i);t.push(r.element),t.push.apply(t,r.extras),n.push.apply(n,r.finishers)}),!r)return{elements:t,finishers:n};var o=function(e,r){for(var t=[],n=r.length-1;n>=0;n--){var i=v(e),o=y((0,r[n])(i)||i);if(void 0!==o.finisher&&t.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return n.push.apply(n,o.finishers),o.finishers=n,o}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=r.find(t)))if(d(o.descriptor)||d(i.descriptor)){if(s(o)||s(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(s(o)){if(s(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}c(o,i)}else r.push(o)}return r}(z.d.map(a)),O),T=z.F,P=N.elements,S=T.prototype,["method","field"].forEach(function(e){P.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var n="static"===t?T:S;l(n,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var n=(0,r[t])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e}(z.F,N.finishers));var O,j,A,T,P,S,z,N;customElements.define("author-preview",E)}}]);