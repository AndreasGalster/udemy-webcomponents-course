(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{11:function(e,r,t){"use strict";t.d(r,"e",function(){return n}),t.d(r,"b",function(){return a}),t.d(r,"d",function(){return c}),t.d(r,"f",function(){return s}),t.d(r,"a",function(){return l}),t.d(r,"c",function(){return d});var i=t(20),o=t.n(i);const n={id:o.a.random.uuid(),humanId:o.a.random.uuid(),firstName:o.a.name.firstName(),lastName:o.a.name.lastName(),typeOfPerson:[o.a.lorem.word(),o.a.lorem.word(),o.a.lorem.word()],quotes:[`${o.a.lorem.sentence()} ${o.a.lorem.sentence()}`],pictures:{headerPic:o.a.random.image()}},a={id:o.a.random.uuid(),authorId:o.a.random.uuid(),author:{humanId:o.a.random.uuid(),firstName:o.a.name.firstName(),lastName:o.a.name.lastName(),typeOfPerson:[o.a.lorem.word(),o.a.lorem.word(),o.a.lorem.word()],categories:[o.a.lorem.word(),o.a.lorem.word(),o.a.lorem.word()],pictures:{cardPic:o.a.random.image()}}},c={id:o.a.random.uuid(),humanId:o.a.random.uuid(),authorId:o.a.random.uuid(),teaser:`${o.a.lorem.paragraph()} ${o.a.lorem.paragraph()}`,title:`${o.a.lorem.word()} ${o.a.lorem.word()} ${o.a.lorem.word()} ${o.a.lorem.word()} ${o.a.lorem.word()}`,author:{firstName:o.a.name.firstName(),lastName:o.a.name.lastName()},image:["../assets/book1.png","../assets/book2.png","../assets/book3.png","../assets/book4.png"]},s={id:o.a.random.uuid(),humanId:o.a.random.uuid(),authorId:o.a.random.uuid(),quote:o.a.lorem.sentence(),author:{humanId:o.a.random.uuid(),firstName:o.a.name.firstName(),lastName:o.a.name.lastName(),typeOfPerson:[o.a.lorem.word(),o.a.lorem.word(),o.a.lorem.word()],pictures:{cardPic:o.a.random.image()}}},l={id:o.a.random.uuid(),author:{humanId:o.a.random.uuid(),pictures:{profilePic:o.a.random.image()},categories:[o.a.lorem.word(),o.a.lorem.word(),o.a.lorem.word()],socialMedia:[{networkName:"facebook",count:o.a.random.number(),link:o.a.internet.url()},{networkName:"twitter",count:o.a.random.number(),link:o.a.internet.url()},{networkName:"instagram",count:o.a.random.number(),link:o.a.internet.url()}]}},d={id:o.a.random.uuid(),humanId:o.a.random.uuid(),title:o.a.lorem.sentence(),image:o.a.random.image(),affiliate:{link:o.a.internet.url(),price:o.a.commerce.price()}}},1100:function(e,r,t){"use strict";t.r(r);var i=t(3),o=t(12),n=t(11),a=(t(19),t(18),t(35),t(7),t(4));t(15);function c(e){var r,t=k(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function s(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function l(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function u(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function p(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function f(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function m(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=h(e);return b(e,"finisher","An element descriptor"),b(e,"extras","An element descriptor"),r})}function h(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=k(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;b(e,"elements","An element descriptor");var n={kind:r,key:t,placement:i,descriptor:Object.assign({},o)};return"field"!==r?b(e,"initializer","A method descriptor"):(b(o,"get","The property descriptor of a field descriptor"),b(o,"set","The property descriptor of a field descriptor"),b(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n}function v(e){return{element:h(e),finisher:w(e,"finisher"),extras:m(e.extras)}}function g(e){var r={kind:"class",elements:e.map(f)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function y(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');b(e,"key","A class descriptor"),b(e,"placement","A class descriptor"),b(e,"descriptor","A class descriptor"),b(e,"initializer","A class descriptor"),b(e,"extras","A class descriptor");var t=w(e,"finisher");return{elements:m(e.elements),finisher:t}}function b(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function w(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function k(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let x=(q=null,E=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",decorators:[Object(i.f)({type:Object})],key:"item",value:()=>({})},{kind:"field",decorators:[Object(i.f)({type:String})],key:"picture",value:void 0},{kind:"get",static:!0,key:"styles",value:()=>[i["b"]`
          :host {
            display: block;
            color: white;
            overflow: auto;
          }

          h1 {
            font-weight: 300;
          }

          max-width {
            position: relative;
            padding-top: 35%;            
          }
        `]},{kind:"method",key:"dynamicStyle",value(){return i["d"]`
      <style>
        :host {
          background: linear-gradient(rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.86))
              no-repeat center center fixed,
            url(${this.picture}) no-repeat center center;
          background-size: cover, cover;
        }
      </style>
    `}},{kind:"method",key:"header",value:()=>i["d"]``},{kind:"method",key:"footer",value:()=>i["d"]``},{kind:"method",key:"render",value(){return i["d"]`
      ${a.a}

        ${this.dynamicStyle()}

        <max-width>
          <header>
          ${this.header()}
          </header>

          <footer>
          ${this.footer()}
          </footer>
        </max-width>
    `}}]}},$=i.a,O=E(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&u(e,r)})})}(e,S.elements)},$),S=function(e,r){var t=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){p(e,o)}),e.forEach(function(e){if(!l(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=f(e),s=v((0,o[n])(c)||c);p(e=s.element,r),s.finisher&&i.push(s.finisher);var l=s.extras;if(l){for(var d=0;d<l.length;d++)p(l[d],r);t.push.apply(t,l)}}return{element:e,finishers:i,extras:t}}(e,o);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var n=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var o=g(e),n=y((0,r[i])(o)||o);if(void 0!==n.finisher&&t.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,n.finishers),n.finishers=i,n}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=r.find(t)))if(d(n.descriptor)||d(o.descriptor)){if(l(n)||l(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(l(n)){if(l(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}s(n,o)}else r.push(n)}return r}(O.d.map(c)),q),A=O.F,T=S.elements,j=A.prototype,["method","field"].forEach(function(e){T.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?A:j;u(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(O.F,S.finishers));var q,E,$,A,T,j,O,S;t(9),t(8);customElements.define("quotes-header",class extends x{static get styles(){return[super.styles,i["b"]`
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

      `]}updated(e){console.log(e),console.log(this.item.pictures.headerPic),console.log(e.get("item")),this.item&&(this.picture=this.item.pictures.headerPic),console.log(this.picture)}header(){return i["d"]`
        <p>Quote of the day</p>
    `}footer(){return i["d"]`
      <h1>
          <span>
            ${this.item.quotes[0]}
          </span>
          <section>
            <span>
              ${this.item.quotes[0]}
            </span>
          </section>
        </h1>

        <flex-align>
          <flex-grow grow='1'>
            <h2>${this.item.firstName} ${this.item.lastName}</h2>
            <h3>${this.item.typeOfPerson.join(", ")}</h3>
          </flex-grow>
          <mwc-button outlined>SEE PROFILE</mwc-button>
        </flex-align>    
    `}});customElements.define("books-header",class extends x{static get styles(){return[super.styles,i["b"]`  
    h1 {

    }
  `]}updated(e){console.log(e),console.log(this.item.pictures.headerPic),console.log(e.get("item")),this.item&&(this.picture=this.item.pictures.headerPic),console.log(this.picture)}header(){return i["d"]`
        <style>
          h1 {
            max-width: 500px;
            font-size: 48px;
          }

          h2 {
            margin-top: 20px;
            max-width: 450px;
          }

          h2, h4 {
            font-weight: 500;
            font-size: 17px;
            opacity: 0.7;
          }

          h3, h4 {
            line-height: 1;
          }

          img {
            border-radius: 50%;
            border: 4px solid var(--secondary-light);
            width: 77px;
            box-sizing: border-box;
            margin-right: 10px;
          }

          header {
            position: absolute;
            top: 80px;                
          }

          footer {
            position: absolute;
            bottom: 40px;            
          }
        </style>

        <h1>The five love languages</h1>
        <h2>Gary Chapman's five language explain eloquently how every partner needs to learn each other's love language to keep a relationship healthy after the in-love experience.</h2>
    `}footer(){return i["d"]`
      <flex-align center>
        <img src='http://lorempixel.com/100/100/cats/'>
        <div>
          <h3>Author name</h3>
          <h4>Author profession</h4>
        </div>
      </flex-align>
    `}}),console.log("nothing",i.nothing);customElements.define("authors-header",class extends x{static get styles(){return[super.styles,i["b"]`
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

    h2 {

    }
  `]}updated(e){console.log(e),console.log(this.item.pictures.headerPic),console.log(e.get("item")),this.item&&(this.picture=this.item.pictures.headerPic),console.log(this.picture)}header(){return i["d"]`
        <h1>Tony Robbins</h1>
        <h2>Bla, bla, bla</h2>
    `}footer(){return i.nothing}});var z=t(5),P=t(16);function N(e){var r,t=H(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function D(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function F(e){return e.decorators&&e.decorators.length}function I(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function R(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function B(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function M(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function C(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=_(e);return U(e,"finisher","An element descriptor"),U(e,"extras","An element descriptor"),r})}function _(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=H(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;U(e,"elements","An element descriptor");var n={kind:r,key:t,placement:i,descriptor:Object.assign({},o)};return"field"!==r?U(e,"initializer","A method descriptor"):(U(o,"get","The property descriptor of a field descriptor"),U(o,"set","The property descriptor of a field descriptor"),U(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n}function J(e){return{element:_(e),finisher:G(e,"finisher"),extras:C(e.extras)}}function L(e){var r={kind:"class",elements:e.map(M)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function Q(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');U(e,"key","A class descriptor"),U(e,"placement","A class descriptor"),U(e,"descriptor","A class descriptor"),U(e,"initializer","A class descriptor"),U(e,"extras","A class descriptor");var t=G(e,"finisher");return{elements:C(e.elements),finisher:t}}function U(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function G(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function H(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}t.d(r,"authorsDetailView",function(){return V});let V=function(e,r,t){var i,o,n,a=r(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&R(e,r)})})}(e,c.elements)},t),c=function(e,r){var t=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){B(e,o)}),e.forEach(function(e){if(!F(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=M(e),s=J((0,o[n])(c)||c);B(e=s.element,r),s.finisher&&i.push(s.finisher);var l=s.extras;if(l){for(var d=0;d<l.length;d++)B(l[d],r);t.push.apply(t,l)}}return{element:e,finishers:i,extras:t}}(e,o);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var n=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var o=L(e),n=Q((0,r[i])(o)||o);if(void 0!==n.finisher&&t.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,n.finishers),n.finishers=i,n}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=r.find(t)))if(I(n.descriptor)||I(o.descriptor)){if(F(n)||F(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(F(n)){if(F(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}D(n,o)}else r.push(n)}return r}(a.d.map(N)),e);return i=a.F,o=c.elements,n=i.prototype,["method","field"].forEach(function(e){o.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var o="static"===t?i:n;R(o,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(a.F,c.finishers)}([Object(i.c)("authors-detail-view")],function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>i["b"]`
		${Object(a.c)(P.a)}
	`},{kind:"method",key:"render",value:()=>i["d"]`
		<style>
			/* quotes-header {
				position: sticky;
				top: 64px;
			} */

			section {
				z-index: 29;
				position: relative;
				background: var(--bg-overview);				
			}

			max-width:first-child {
				display: flex;
			}

			mwc-card {
					background: white;
					box-shadow: 0 2px 7px 1px rgba(0,0,0,0.1);
					${Object(a.c)(z.g.lg)}
				}

			div {
				flex-grow: 1;
			}

			author-highlight {
				margin-top: -140px;
			}

			h1 {
				color: var(--primary);
				font-size: 34px;
				font-weight: 300;
				margin-top: 100px;				
			}
		</style>
            <quotes-header .item=${n.e}></quotes-header>
			<br>
            <authors-header .item=${n.e}></authors-header>
            <br>
			<books-header .item=${n.e}></books-header>


			<section>
				<max-width>
					<div>
						<h1>About Tony Robbins</h1>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

<h2>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in</h2> 
<p>
	"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
</p>

<h2>
	1914 translation by H. Rackham
</h2>
<p>
	"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
</p>
					</div>
					<author-highlight .person=${n.a}></author-highlight>
				</max-width>


				<max-width>
					<h1>Books published</h1>
					<mwc-card ink-grid ink-gap-i>
					
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${n.d}></book-preview>																														
			</mwc-card>					
				</max-width>

				<max-width>
					<h1>Famous quotes</h1>

					<mwc-card ink-grid ink-gap-i>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>
						<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${n.f}></quote-preview>																														
            		</mwc-card>					
				</max-width>


			</section>
		`}]}},o.a)},12:function(e,r,t){"use strict";t.d(r,"a",function(){return b});var i=t(3);function o(e){var r,t=y(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function n(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function a(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function s(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function l(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function d(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function u(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=p(e);return v(e,"finisher","An element descriptor"),v(e,"extras","An element descriptor"),r})}function p(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=y(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;v(e,"elements","An element descriptor");var n={kind:r,key:t,placement:i,descriptor:Object.assign({},o)};return"field"!==r?v(e,"initializer","A method descriptor"):(v(o,"get","The property descriptor of a field descriptor"),v(o,"set","The property descriptor of a field descriptor"),v(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n}function f(e){return{element:p(e),finisher:g(e,"finisher"),extras:u(e.extras)}}function m(e){var r={kind:"class",elements:e.map(d)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function h(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');v(e,"key","A class descriptor"),v(e,"placement","A class descriptor"),v(e,"descriptor","A class descriptor"),v(e,"initializer","A class descriptor"),v(e,"extras","A class descriptor");var t=g(e,"finisher");return{elements:u(e.elements),finisher:t}}function v(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function g(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function y(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let b=(w=null,k=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",decorators:[Object(i.f)({type:Boolean})],key:"active",value:void 0}]}},x=i.a,A=k(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&s(e,r)})})}(e,T.elements)},x),T=function(e,r){var t=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){l(e,o)}),e.forEach(function(e){if(!a(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=d(e),s=f((0,o[n])(c)||c);l(e=s.element,r),s.finisher&&i.push(s.finisher);var u=s.extras;if(u){for(var p=0;p<u.length;p++)l(u[p],r);t.push.apply(t,u)}}return{element:e,finishers:i,extras:t}}(e,o);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var n=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var o=m(e),n=h((0,r[i])(o)||o);if(void 0!==n.finisher&&t.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,n.finishers),n.finishers=i,n}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var o,s=e[i];if("method"===s.kind&&(o=r.find(t)))if(c(s.descriptor)||c(o.descriptor)){if(a(s)||a(o))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");o.descriptor=s.descriptor}else{if(a(s)){if(a(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");o.decorators=s.decorators}n(s,o)}else r.push(s)}return r}(A.d.map(o)),w),q=A.F,E=T.elements,$=q.prototype,["method","field"].forEach(function(e){E.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?q:$;s(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(A.F,T.finishers));var w,k,x,q,E,$,A,T},18:function(e,r,t){"use strict";var i=t(3),o=(t(7),t(5)),n=t(4);t(9),t(8);function a(e){var r,t=w(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function c(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function u(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function p(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function f(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=m(e);return y(e,"finisher","An element descriptor"),y(e,"extras","An element descriptor"),r})}function m(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=w(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;y(e,"elements","An element descriptor");var n={kind:r,key:t,placement:i,descriptor:Object.assign({},o)};return"field"!==r?y(e,"initializer","A method descriptor"):(y(o,"get","The property descriptor of a field descriptor"),y(o,"set","The property descriptor of a field descriptor"),y(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n}function h(e){return{element:m(e),finisher:b(e,"finisher"),extras:f(e.extras)}}function v(e){var r={kind:"class",elements:e.map(p)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function g(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');y(e,"key","A class descriptor"),y(e,"placement","A class descriptor"),y(e,"descriptor","A class descriptor"),y(e,"initializer","A class descriptor"),y(e,"extras","A class descriptor");var t=b(e,"finisher");return{elements:f(e.elements),finisher:t}}function y(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function b(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function w(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let k=(x=null,q=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>i["b"]`
    :host {
      cursor: pointer;
      display: block;
      overflow: hidden;
      flex-grow: 1;
      margin: 10px;
      color: white;
      ${Object(n.c)(o.g.lg)}

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

      ${Object(n.c)(o.f.md)}
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
      ${n.a}

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


    `}}]}},E=i.a,j=q(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&d(e,r)})})}(e,O.elements)},E),O=function(e,r){var t=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){u(e,o)}),e.forEach(function(e){if(!s(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=p(e),s=h((0,o[n])(c)||c);u(e=s.element,r),s.finisher&&i.push(s.finisher);var l=s.extras;if(l){for(var d=0;d<l.length;d++)u(l[d],r);t.push.apply(t,l)}}return{element:e,finishers:i,extras:t}}(e,o);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var n=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var o=v(e),n=g((0,r[i])(o)||o);if(void 0!==n.finisher&&t.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,n.finishers),n.finishers=i,n}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=r.find(t)))if(l(n.descriptor)||l(o.descriptor)){if(s(n)||s(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(s(n)){if(s(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}c(n,o)}else r.push(n)}return r}(j.d.map(a)),x),$=j.F,A=O.elements,T=$.prototype,["method","field"].forEach(function(e){A.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?$:T;d(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(j.F,O.finishers));var x,q,E,$,A,T,j,O;customElements.define("quote-preview",k)},19:function(e,r,t){"use strict";var i=t(3),o=(t(7),t(5)),n=t(4);t(9),t(8);function a(e){var r,t=w(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function c(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function u(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function p(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function f(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=m(e);return y(e,"finisher","An element descriptor"),y(e,"extras","An element descriptor"),r})}function m(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=w(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;y(e,"elements","An element descriptor");var n={kind:r,key:t,placement:i,descriptor:Object.assign({},o)};return"field"!==r?y(e,"initializer","A method descriptor"):(y(o,"get","The property descriptor of a field descriptor"),y(o,"set","The property descriptor of a field descriptor"),y(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n}function h(e){return{element:m(e),finisher:b(e,"finisher"),extras:f(e.extras)}}function v(e){var r={kind:"class",elements:e.map(p)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function g(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');y(e,"key","A class descriptor"),y(e,"placement","A class descriptor"),y(e,"descriptor","A class descriptor"),y(e,"initializer","A class descriptor"),y(e,"extras","A class descriptor");var t=b(e,"finisher");return{elements:f(e.elements),finisher:t}}function y(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function b(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function w(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let k=(x=null,q=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>i["b"]`
    :host {
      cursor: pointer;
      display: block;
      flex: auto;
      margin: 10px;
      color: white;
      position: relative;
      overflow: hidden;
      ${Object(n.c)(o.b.g90)}
      ${Object(n.c)(o.g.lg)}
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

      ${Object(n.c)(o.f.md)}
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
      ${n.a}

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


    `}}]}},E=i.a,j=q(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&d(e,r)})})}(e,O.elements)},E),O=function(e,r){var t=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){u(e,o)}),e.forEach(function(e){if(!s(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=p(e),s=h((0,o[n])(c)||c);u(e=s.element,r),s.finisher&&i.push(s.finisher);var l=s.extras;if(l){for(var d=0;d<l.length;d++)u(l[d],r);t.push.apply(t,l)}}return{element:e,finishers:i,extras:t}}(e,o);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var n=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var o=v(e),n=g((0,r[i])(o)||o);if(void 0!==n.finisher&&t.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,n.finishers),n.finishers=i,n}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=r.find(t)))if(l(n.descriptor)||l(o.descriptor)){if(s(n)||s(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(s(n)){if(s(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}c(n,o)}else r.push(n)}return r}(j.d.map(a)),x),$=j.F,A=O.elements,T=$.prototype,["method","field"].forEach(function(e){A.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?$:T;d(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(j.F,O.finishers));var x,q,E,$,A,T,j,O;customElements.define("book-preview",k)}}]);