import { LitElement, property } from "lit-element";

export class PageViewElement extends LitElement {
    @property({ type: Boolean }) active;

    // // Only render this page if it's actually visible.
    // shouldUpdate(changedProps) {
    // //   _shouldRender(props, changedProps, old) {
    // // return props.active;
    //    return changedProps.active;
    // }
}