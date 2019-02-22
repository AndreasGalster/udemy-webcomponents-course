(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{11:function(e,r,t){"use strict";t.d(r,"e",function(){return o}),t.d(r,"b",function(){return a}),t.d(r,"d",function(){return c}),t.d(r,"f",function(){return s}),t.d(r,"a",function(){return l}),t.d(r,"c",function(){return d});var i=t(20),n=t.n(i);const o={id:n.a.random.uuid(),humanId:n.a.random.uuid(),firstName:n.a.name.firstName(),lastName:n.a.name.lastName(),typeOfPerson:[n.a.lorem.word(),n.a.lorem.word(),n.a.lorem.word()],quotes:[`${n.a.lorem.sentence()} ${n.a.lorem.sentence()}`],pictures:{headerPic:n.a.random.image()}},a={id:n.a.random.uuid(),authorId:n.a.random.uuid(),author:{humanId:n.a.random.uuid(),firstName:n.a.name.firstName(),lastName:n.a.name.lastName(),typeOfPerson:[n.a.lorem.word(),n.a.lorem.word(),n.a.lorem.word()],categories:[n.a.lorem.word(),n.a.lorem.word(),n.a.lorem.word()],pictures:{cardPic:n.a.random.image()}}},c={id:n.a.random.uuid(),humanId:n.a.random.uuid(),authorId:n.a.random.uuid(),teaser:`${n.a.lorem.paragraph()} ${n.a.lorem.paragraph()}`,title:`${n.a.lorem.word()} ${n.a.lorem.word()} ${n.a.lorem.word()} ${n.a.lorem.word()} ${n.a.lorem.word()}`,author:{firstName:n.a.name.firstName(),lastName:n.a.name.lastName()},image:["../assets/book1.png","../assets/book2.png","../assets/book3.png","../assets/book4.png"]},s={id:n.a.random.uuid(),humanId:n.a.random.uuid(),authorId:n.a.random.uuid(),quote:n.a.lorem.sentence(),author:{humanId:n.a.random.uuid(),firstName:n.a.name.firstName(),lastName:n.a.name.lastName(),typeOfPerson:[n.a.lorem.word(),n.a.lorem.word(),n.a.lorem.word()],pictures:{cardPic:n.a.random.image()}}},l={id:n.a.random.uuid(),author:{humanId:n.a.random.uuid(),pictures:{profilePic:n.a.random.image()},categories:[n.a.lorem.word(),n.a.lorem.word(),n.a.lorem.word()],socialMedia:[{networkName:"facebook",count:n.a.random.number(),link:n.a.internet.url()},{networkName:"twitter",count:n.a.random.number(),link:n.a.internet.url()},{networkName:"instagram",count:n.a.random.number(),link:n.a.internet.url()}]}},d={id:n.a.random.uuid(),humanId:n.a.random.uuid(),title:n.a.lorem.sentence(),image:n.a.random.image(),affiliate:{link:n.a.internet.url(),price:n.a.commerce.price()}}},1101:function(e,r,t){"use strict";t.r(r),t.d(r,"QuotesOverviewView",function(){return E});var i=t(3),n=t(12),o=(t(15),t(9),t(8),t(11)),a=(t(18),t(4)),c=t(5),s=t(16);function l(e){var r,t=q(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function d(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function u(e){return e.decorators&&e.decorators.length}function p(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function f(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function m(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function h(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function v(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=y(e);return k(e,"finisher","An element descriptor"),k(e,"extras","An element descriptor"),r})}function y(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=q(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;k(e,"elements","An element descriptor");var o={kind:r,key:t,placement:i,descriptor:Object.assign({},n)};return"field"!==r?k(e,"initializer","A method descriptor"):(k(n,"get","The property descriptor of a field descriptor"),k(n,"set","The property descriptor of a field descriptor"),k(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o}function w(e){return{element:y(e),finisher:x(e,"finisher"),extras:v(e.extras)}}function g(e){var r={kind:"class",elements:e.map(h)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function b(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');k(e,"key","A class descriptor"),k(e,"placement","A class descriptor"),k(e,"descriptor","A class descriptor"),k(e,"initializer","A class descriptor"),k(e,"extras","A class descriptor");var t=x(e,"finisher");return{elements:v(e.elements),finisher:t}}function k(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function x(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function q(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let E=(A=[Object(i.c)("quotes-overview-view")],T=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>i["b"]`
		${Object(a.c)(s.a)}
	`},{kind:"method",key:"render",value:()=>i["d"]`
			<style>

				search-bar {
					position: sticky;
					-webkit-position-sticky: sticky;
					top: 64px;
					overflow: auto;
					background: var(--secondary-light);
					display: block;				
					z-index: 31;
					box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
				}

				mwc-card {
					background: white;
					box-shadow: 0 2px 7px 1px rgba(0,0,0,0.1);
					${Object(a.c)(c.g.lg)}
				}
							
				flex-align {
					margin-top: 150px;
				}				
			</style>
			<search-bar>
				<max-width>
					<h1>quotes-overview view</h1>
				</max-width>
			</search-bar>

            <max-width>
                <mwc-card ink-grid ink-gap-i>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${o.f}></quote-preview>																														
            	</mwc-card>
			</max-width>
		`}]}},j=n.a,z=T(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&f(e,r)})})}(e,P.elements)},j),P=function(e,r){var t=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){m(e,n)}),e.forEach(function(e){if(!u(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=h(e),s=w((0,n[o])(c)||c);m(e=s.element,r),s.finisher&&i.push(s.finisher);var l=s.extras;if(l){for(var d=0;d<l.length;d++)m(l[d],r);t.push.apply(t,l)}}return{element:e,finishers:i,extras:t}}(e,n);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var o=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var n=g(e),o=b((0,r[i])(n)||n);if(void 0!==o.finisher&&t.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,o.finishers),o.finishers=i,o}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=r.find(t)))if(p(o.descriptor)||p(n.descriptor)){if(u(o)||u(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(u(o)){if(u(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}d(o,n)}else r.push(o)}return r}(z.d.map(l)),A),O=z.F,$=P.elements,S=O.prototype,["method","field"].forEach(function(e){$.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?O:S;f(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(z.F,P.finishers));var A,T,j,O,$,S,z,P},12:function(e,r,t){"use strict";t.d(r,"a",function(){return g});var i=t(3);function n(e){var r,t=w(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function o(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function a(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function s(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function l(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function d(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function u(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=p(e);return v(e,"finisher","An element descriptor"),v(e,"extras","An element descriptor"),r})}function p(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=w(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;v(e,"elements","An element descriptor");var o={kind:r,key:t,placement:i,descriptor:Object.assign({},n)};return"field"!==r?v(e,"initializer","A method descriptor"):(v(n,"get","The property descriptor of a field descriptor"),v(n,"set","The property descriptor of a field descriptor"),v(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o}function f(e){return{element:p(e),finisher:y(e,"finisher"),extras:u(e.extras)}}function m(e){var r={kind:"class",elements:e.map(d)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function h(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');v(e,"key","A class descriptor"),v(e,"placement","A class descriptor"),v(e,"descriptor","A class descriptor"),v(e,"initializer","A class descriptor"),v(e,"extras","A class descriptor");var t=y(e,"finisher");return{elements:u(e.elements),finisher:t}}function v(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function y(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function w(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let g=(b=null,k=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",decorators:[Object(i.f)({type:Boolean})],key:"active",value:void 0}]}},x=i.a,T=k(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&s(e,r)})})}(e,j.elements)},x),j=function(e,r){var t=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){l(e,n)}),e.forEach(function(e){if(!a(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=d(e),s=f((0,n[o])(c)||c);l(e=s.element,r),s.finisher&&i.push(s.finisher);var u=s.extras;if(u){for(var p=0;p<u.length;p++)l(u[p],r);t.push.apply(t,u)}}return{element:e,finishers:i,extras:t}}(e,n);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var o=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var n=m(e),o=h((0,r[i])(n)||n);if(void 0!==o.finisher&&t.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,o.finishers),o.finishers=i,o}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var n,s=e[i];if("method"===s.kind&&(n=r.find(t)))if(c(s.descriptor)||c(n.descriptor)){if(a(s)||a(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(a(s)){if(a(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}o(s,n)}else r.push(s)}return r}(T.d.map(n)),b),q=T.F,E=j.elements,A=q.prototype,["method","field"].forEach(function(e){E.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?q:A;s(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(T.F,j.finishers));var b,k,x,q,E,A,T,j},18:function(e,r,t){"use strict";var i=t(3),n=(t(7),t(5)),o=t(4);t(9),t(8);function a(e){var r,t=b(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function c(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function l(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function d(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function u(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function p(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function f(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=m(e);return w(e,"finisher","An element descriptor"),w(e,"extras","An element descriptor"),r})}function m(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=b(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var n=e.descriptor;w(e,"elements","An element descriptor");var o={kind:r,key:t,placement:i,descriptor:Object.assign({},n)};return"field"!==r?w(e,"initializer","A method descriptor"):(w(n,"get","The property descriptor of a field descriptor"),w(n,"set","The property descriptor of a field descriptor"),w(n,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o}function h(e){return{element:m(e),finisher:g(e,"finisher"),extras:f(e.extras)}}function v(e){var r={kind:"class",elements:e.map(p)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function y(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');w(e,"key","A class descriptor"),w(e,"placement","A class descriptor"),w(e,"descriptor","A class descriptor"),w(e,"initializer","A class descriptor"),w(e,"extras","A class descriptor");var t=g(e,"finisher");return{elements:f(e.elements),finisher:t}}function w(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function g(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function b(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let k=(x=null,q=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>i["b"]`
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


    `}}]}},E=i.a,O=q(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&d(e,r)})})}(e,$.elements)},E),$=function(e,r){var t=[],i=[],n={static:[],prototype:[],own:[]};if(e.forEach(function(e){u(e,n)}),e.forEach(function(e){if(!s(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],n=e.decorators,o=n.length-1;o>=0;o--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=p(e),s=h((0,n[o])(c)||c);u(e=s.element,r),s.finisher&&i.push(s.finisher);var l=s.extras;if(l){for(var d=0;d<l.length;d++)u(l[d],r);t.push.apply(t,l)}}return{element:e,finishers:i,extras:t}}(e,n);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var o=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var n=v(e),o=y((0,r[i])(n)||n);if(void 0!==o.finisher&&t.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,o.finishers),o.finishers=i,o}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},i=0;i<e.length;i++){var n,o=e[i];if("method"===o.kind&&(n=r.find(t)))if(l(o.descriptor)||l(n.descriptor)){if(s(o)||s(n))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");n.descriptor=o.descriptor}else{if(s(o)){if(s(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");n.decorators=o.decorators}c(o,n)}else r.push(o)}return r}(O.d.map(a)),x),A=O.F,T=$.elements,j=A.prototype,["method","field"].forEach(function(e){T.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?A:j;d(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(O.F,$.finishers));var x,q,E,A,T,j,O,$;customElements.define("quote-preview",k)}}]);