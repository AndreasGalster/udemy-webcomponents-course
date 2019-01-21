var polyfills = [];
// if (!('attachShadow' in Element.prototype && 'getRootNode' in Element.prototype) || (window.ShadyDOM && window.ShadyDOM.force)) {
//     polyfills.push('sd');
// }

// if (!window.customElements || window.customElements.forcePolyfill) {
//     polyfills.push('ce');
// }

if (polyfills.length) {
    // import( /* webpackChunkName: "webcomponents-polyfill" */ '@webcomponents/webcomponentsjs/webcomponents-sd-ce.js').then(chunk => {
    //     import(/* webpackChunkName: "app-shell" */'./views/app-shell.js');
    // });
} else {
        import(/* webpackChunkName: "app-shell" */'./views/app-shell.js');
}