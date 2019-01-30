export class TemplateRenderer extends HTMLElement {
	connectedCallback() {
		if (!this.noShadow) this.attachShadow({ mode: 'open' });
		this.render();
	}

	render(template) {
		if (this.noShadow) {
			this.innerHTML = template || this.template;
		} else {
			this.shadowRoot.innerHTML = template || this.template;
		}
	}
}
