class CustomProgressBar extends HTMLElement {
    connectedCallback() {
        // tells assistive technologies  what kind of widget it is
        this.setAttribute('role', 'progressbar');

        // setting defaults
        this.setAttribute('aria-valuemin', 0);
        this.setAttribute('aria-valuemax', 100);
        this.setAttribute('aria-valuenow', 0);
    }
}

customElements.define('custom-progress-bar', CustomProgressBar);