(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{11:function(e,r,t){"use strict";t.d(r,"e",function(){return n}),t.d(r,"b",function(){return a}),t.d(r,"d",function(){return c}),t.d(r,"f",function(){return s}),t.d(r,"a",function(){return d}),t.d(r,"c",function(){return l});var i=t(20),o=t.n(i);const n={id:o.a.random.uuid(),humanId:o.a.random.uuid(),firstName:o.a.name.firstName(),lastName:o.a.name.lastName(),typeOfPerson:[o.a.lorem.word(),o.a.lorem.word(),o.a.lorem.word()],quotes:[`${o.a.lorem.sentence()} ${o.a.lorem.sentence()}`],pictures:{headerPic:o.a.random.image()}},a={id:o.a.random.uuid(),authorId:o.a.random.uuid(),author:{humanId:o.a.random.uuid(),firstName:o.a.name.firstName(),lastName:o.a.name.lastName(),typeOfPerson:[o.a.lorem.word(),o.a.lorem.word(),o.a.lorem.word()],categories:[o.a.lorem.word(),o.a.lorem.word(),o.a.lorem.word()],pictures:{cardPic:o.a.random.image()}}},c={id:o.a.random.uuid(),humanId:o.a.random.uuid(),authorId:o.a.random.uuid(),teaser:`${o.a.lorem.paragraph()} ${o.a.lorem.paragraph()}`,title:`${o.a.lorem.word()} ${o.a.lorem.word()} ${o.a.lorem.word()} ${o.a.lorem.word()} ${o.a.lorem.word()}`,author:{firstName:o.a.name.firstName(),lastName:o.a.name.lastName()},image:["../assets/book1.png","../assets/book2.png","../assets/book3.png","../assets/book4.png"]},s={id:o.a.random.uuid(),humanId:o.a.random.uuid(),authorId:o.a.random.uuid(),quote:o.a.lorem.sentence(),author:{humanId:o.a.random.uuid(),firstName:o.a.name.firstName(),lastName:o.a.name.lastName(),typeOfPerson:[o.a.lorem.word(),o.a.lorem.word(),o.a.lorem.word()],pictures:{cardPic:o.a.random.image()}}},d={id:o.a.random.uuid(),author:{humanId:o.a.random.uuid(),pictures:{profilePic:o.a.random.image()},categories:[o.a.lorem.word(),o.a.lorem.word(),o.a.lorem.word()],socialMedia:[{networkName:"facebook",count:o.a.random.number(),link:o.a.internet.url()},{networkName:"twitter",count:o.a.random.number(),link:o.a.internet.url()},{networkName:"instagram",count:o.a.random.number(),link:o.a.internet.url()}]}},l={id:o.a.random.uuid(),humanId:o.a.random.uuid(),title:o.a.lorem.sentence(),image:o.a.random.image(),affiliate:{link:o.a.internet.url(),price:o.a.commerce.price()}}},1103:function(e,r,t){"use strict";t.r(r),t.d(r,"BooksOverviewView",function(){return A});var i=t(3),o=t(12),n=(t(15),t(9),t(8),t(11)),a=(t(19),t(4)),c=t(5),s=t(16);function d(e){var r,t=E(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function l(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function p(e){return e.decorators&&e.decorators.length}function f(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function u(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function m(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function h(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function v(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=b(e);return g(e,"finisher","An element descriptor"),g(e,"extras","An element descriptor"),r})}function b(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=E(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;g(e,"elements","An element descriptor");var n={kind:r,key:t,placement:i,descriptor:Object.assign({},o)};return"field"!==r?g(e,"initializer","A method descriptor"):(g(o,"get","The property descriptor of a field descriptor"),g(o,"set","The property descriptor of a field descriptor"),g(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n}function k(e){return{element:b(e),finisher:x(e,"finisher"),extras:v(e.extras)}}function y(e){var r={kind:"class",elements:e.map(h)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function w(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');g(e,"key","A class descriptor"),g(e,"placement","A class descriptor"),g(e,"descriptor","A class descriptor"),g(e,"initializer","A class descriptor"),g(e,"extras","A class descriptor");var t=x(e,"finisher");return{elements:v(e.elements),finisher:t}}function g(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function x(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function E(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let A=(T=[Object(i.c)("books-overview-view")],$=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>i["b"]`
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
					<h1>books-overview view</h1>
				</max-width>
			</search-bar>

            <max-width>
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
		`}]}},j=o.a,P=$(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&u(e,r)})})}(e,N.elements)},j),N=function(e,r){var t=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){m(e,o)}),e.forEach(function(e){if(!p(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=h(e),s=k((0,o[n])(c)||c);m(e=s.element,r),s.finisher&&i.push(s.finisher);var d=s.extras;if(d){for(var l=0;l<d.length;l++)m(d[l],r);t.push.apply(t,d)}}return{element:e,finishers:i,extras:t}}(e,o);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var n=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var o=y(e),n=w((0,r[i])(o)||o);if(void 0!==n.finisher&&t.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,n.finishers),n.finishers=i,n}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=r.find(t)))if(f(n.descriptor)||f(o.descriptor)){if(p(n)||p(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(p(n)){if(p(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}l(n,o)}else r.push(n)}return r}(P.d.map(d)),T),O=P.F,S=N.elements,z=O.prototype,["method","field"].forEach(function(e){S.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?O:z;u(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(P.F,N.finishers));var T,$,j,O,S,z,P,N},12:function(e,r,t){"use strict";t.d(r,"a",function(){return y});var i=t(3);function o(e){var r,t=k(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function n(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function a(e){return e.decorators&&e.decorators.length}function c(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function s(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function d(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function l(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function p(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=f(e);return v(e,"finisher","An element descriptor"),v(e,"extras","An element descriptor"),r})}function f(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=k(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;v(e,"elements","An element descriptor");var n={kind:r,key:t,placement:i,descriptor:Object.assign({},o)};return"field"!==r?v(e,"initializer","A method descriptor"):(v(o,"get","The property descriptor of a field descriptor"),v(o,"set","The property descriptor of a field descriptor"),v(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n}function u(e){return{element:f(e),finisher:b(e,"finisher"),extras:p(e.extras)}}function m(e){var r={kind:"class",elements:e.map(l)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function h(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');v(e,"key","A class descriptor"),v(e,"placement","A class descriptor"),v(e,"descriptor","A class descriptor"),v(e,"initializer","A class descriptor"),v(e,"extras","A class descriptor");var t=b(e,"finisher");return{elements:p(e.elements),finisher:t}}function v(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function b(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function k(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let y=(w=null,g=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",decorators:[Object(i.f)({type:Boolean})],key:"active",value:void 0}]}},x=i.a,$=g(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&s(e,r)})})}(e,j.elements)},x),j=function(e,r){var t=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){d(e,o)}),e.forEach(function(e){if(!a(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=l(e),s=u((0,o[n])(c)||c);d(e=s.element,r),s.finisher&&i.push(s.finisher);var p=s.extras;if(p){for(var f=0;f<p.length;f++)d(p[f],r);t.push.apply(t,p)}}return{element:e,finishers:i,extras:t}}(e,o);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var n=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var o=m(e),n=h((0,r[i])(o)||o);if(void 0!==n.finisher&&t.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,n.finishers),n.finishers=i,n}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},i=0;i<e.length;i++){var o,s=e[i];if("method"===s.kind&&(o=r.find(t)))if(c(s.descriptor)||c(o.descriptor)){if(a(s)||a(o))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");o.descriptor=s.descriptor}else{if(a(s)){if(a(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");o.decorators=s.decorators}n(s,o)}else r.push(s)}return r}($.d.map(o)),w),E=$.F,A=j.elements,T=E.prototype,["method","field"].forEach(function(e){A.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?E:T;s(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}($.F,j.finishers));var w,g,x,E,A,T,$,j},19:function(e,r,t){"use strict";var i=t(3),o=(t(7),t(5)),n=t(4);t(9),t(8);function a(e){var r,t=w(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function c(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function s(e){return e.decorators&&e.decorators.length}function d(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function l(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function p(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function f(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function u(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=m(e);return k(e,"finisher","An element descriptor"),k(e,"extras","An element descriptor"),r})}function m(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=w(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;k(e,"elements","An element descriptor");var n={kind:r,key:t,placement:i,descriptor:Object.assign({},o)};return"field"!==r?k(e,"initializer","A method descriptor"):(k(o,"get","The property descriptor of a field descriptor"),k(o,"set","The property descriptor of a field descriptor"),k(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n}function h(e){return{element:m(e),finisher:y(e,"finisher"),extras:u(e.extras)}}function v(e){var r={kind:"class",elements:e.map(f)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function b(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');k(e,"key","A class descriptor"),k(e,"placement","A class descriptor"),k(e,"descriptor","A class descriptor"),k(e,"initializer","A class descriptor"),k(e,"extras","A class descriptor");var t=y(e,"finisher");return{elements:u(e.elements),finisher:t}}function k(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function y(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function w(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let g=(x=null,E=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>i["b"]`
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


    `}}]}},A=i.a,O=E(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&l(e,r)})})}(e,S.elements)},A),S=function(e,r){var t=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){p(e,o)}),e.forEach(function(e){if(!s(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var a=r[e.placement];a.splice(a.indexOf(e.key),1);var c=f(e),s=h((0,o[n])(c)||c);p(e=s.element,r),s.finisher&&i.push(s.finisher);var d=s.extras;if(d){for(var l=0;l<d.length;l++)p(d[l],r);t.push.apply(t,d)}}return{element:e,finishers:i,extras:t}}(e,o);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var n=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var o=v(e),n=b((0,r[i])(o)||o);if(void 0!==n.finisher&&t.push(n.finisher),void 0!==n.elements){e=n.elements;for(var a=0;a<e.length-1;a++)for(var c=a+1;c<e.length;c++)if(e[a].key===e[c].key&&e[a].placement===e[c].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,n.finishers),n.finishers=i,n}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=r.find(t)))if(d(n.descriptor)||d(o.descriptor)){if(s(n)||s(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(s(n)){if(s(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}c(n,o)}else r.push(n)}return r}(O.d.map(a)),x),T=O.F,$=S.elements,j=T.prototype,["method","field"].forEach(function(e){$.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?T:j;l(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(O.F,S.finishers));var x,E,A,T,$,j,O,S;customElements.define("book-preview",g)}}]);