(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1104:function(e,r,t){"use strict";t.r(r),t.d(r,"AuthorsOverviewView",function(){return E});var i=t(3),o=t(12),n=(t(15),t(9),t(8),t(11)),c=(t(29),t(4)),a=t(5),s=t(16);function p(e){var r,t=$(e.key);"method"===e.kind?(r={value:e.value,writable:!0,configurable:!0,enumerable:!1},Object.defineProperty(e.value,"name",{value:"symbol"==typeof t?"":t,configurable:!0})):"get"===e.kind?r={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?r={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(r={configurable:!0,writable:!0,enumerable:!0});var i={kind:"field"===e.kind?"field":"method",key:t,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:r};return e.decorators&&(i.decorators=e.decorators),"field"===e.kind&&(i.initializer=e.value),i}function l(e,r){void 0!==e.descriptor.get?r.descriptor.get=e.descriptor.get:r.descriptor.set=e.descriptor.set}function d(e){return e.decorators&&e.decorators.length}function u(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function f(e,r){var t=r.descriptor;if("field"===r.kind){var i=r.initializer;t={enumerable:t.enumerable,writable:t.writable,configurable:t.configurable,value:void 0===i?void 0:i.call(e)}}Object.defineProperty(e,r.key,t)}function h(e,r,t){var i=r[e.placement];if(!t&&-1!==i.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");i.push(e.key)}function m(e){var r={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(r.initializer=e.initializer),r}function v(e){var r;if(void 0!==e)return(r=e,function(e){if(Array.isArray(e))return e}(r)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()).map(function(e){var r=w(e);return x(e,"finisher","An element descriptor"),x(e,"extras","An element descriptor"),r})}function w(e){var r=String(e.kind);if("method"!==r&&"field"!==r)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+r+'"');var t=$(e.key),i=String(e.placement);if("static"!==i&&"prototype"!==i&&"own"!==i)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+i+'"');var o=e.descriptor;x(e,"elements","An element descriptor");var n={kind:r,key:t,placement:i,descriptor:Object.assign({},o)};return"field"!==r?x(e,"initializer","A method descriptor"):(x(o,"get","The property descriptor of a field descriptor"),x(o,"set","The property descriptor of a field descriptor"),x(o,"value","The property descriptor of a field descriptor"),n.initializer=e.initializer),n}function g(e){return{element:w(e),finisher:k(e,"finisher"),extras:v(e.extras)}}function b(e){var r={kind:"class",elements:e.map(m)};return Object.defineProperty(r,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),r}function y(e){var r=String(e.kind);if("class"!==r)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+r+'"');x(e,"key","A class descriptor"),x(e,"placement","A class descriptor"),x(e,"descriptor","A class descriptor"),x(e,"initializer","A class descriptor"),x(e,"extras","A class descriptor");var t=k(e,"finisher");return{elements:v(e.elements),finisher:t}}function x(e,r,t){if(void 0!==e[r])throw new TypeError(t+" can't have a ."+r+" property.")}function k(e,r){var t=e[r];if(void 0!==t&&"function"!=typeof t)throw new TypeError("Expected '"+r+"' to be a function");return t}function $(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}let E=(A=[Object(i.c)("authors-overview-view")],T=function(e,r){return{F:class extends r{constructor(){super(...arguments),e(this)}},d:[{kind:"field",static:!0,key:"styles",value:()=>i["b"]`
		${Object(c.c)(s.a)}
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
					${Object(c.c)(a.g.lg)}
				}
							
				flex-align {
					margin-top: 150px;
				}				
			</style>
			<search-bar>
				<max-width>
					<h1>authors-overview view</h1>
				</max-width>
			</search-bar>

            <max-width>
                <mwc-card ink-grid ink-gap-i>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${n.b}></author-preview>																														
            	</mwc-card>
			</max-width>
		`}]}},j=o.a,D=T(function(e){!function(e,r){["method","field"].forEach(function(t){r.forEach(function(r){r.kind===t&&"own"===r.placement&&f(e,r)})})}(e,P.elements)},j),P=function(e,r){var t=[],i=[],o={static:[],prototype:[],own:[]};if(e.forEach(function(e){h(e,o)}),e.forEach(function(e){if(!d(e))return t.push(e);var r=function(e,r){for(var t=[],i=[],o=e.decorators,n=o.length-1;n>=0;n--){var c=r[e.placement];c.splice(c.indexOf(e.key),1);var a=m(e),s=g((0,o[n])(a)||a);h(e=s.element,r),s.finisher&&i.push(s.finisher);var p=s.extras;if(p){for(var l=0;l<p.length;l++)h(p[l],r);t.push.apply(t,p)}}return{element:e,finishers:i,extras:t}}(e,o);t.push(r.element),t.push.apply(t,r.extras),i.push.apply(i,r.finishers)}),!r)return{elements:t,finishers:i};var n=function(e,r){for(var t=[],i=r.length-1;i>=0;i--){var o=b(e),n=y((0,r[i])(o)||o);if(void 0!==n.finisher&&t.push(n.finisher),void 0!==n.elements){e=n.elements;for(var c=0;c<e.length-1;c++)for(var a=c+1;a<e.length;a++)if(e[c].key===e[a].key&&e[c].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[c].key+")")}}return{elements:e,finishers:t}}(t,r);return i.push.apply(i,n.finishers),n.finishers=i,n}(function(e){for(var r=[],t=function(e){return"method"===e.kind&&e.key===n.key&&e.placement===n.placement},i=0;i<e.length;i++){var o,n=e[i];if("method"===n.kind&&(o=r.find(t)))if(u(n.descriptor)||u(o.descriptor)){if(d(n)||d(o))throw new ReferenceError("Duplicated methods ("+n.key+") can't be decorated.");o.descriptor=n.descriptor}else{if(d(n)){if(d(o))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+n.key+").");o.decorators=n.decorators}l(n,o)}else r.push(n)}return r}(D.d.map(p)),A),O=D.F,S=P.elements,z=O.prototype,["method","field"].forEach(function(e){S.forEach(function(r){var t=r.placement;if(r.kind===e&&("static"===t||"prototype"===t)){var i="static"===t?O:z;f(i,r)}})}),function(e,r){for(var t=0;t<r.length;t++){var i=(0,r[t])(e);if(void 0!==i){if("function"!=typeof i)throw new TypeError("Finishers must return a constructor.");e=i}}return e}(D.F,P.finishers));var A,T,j,O,S,z,D,P}}]);