import { LitElement, property } from "lit-element";
import { ApolloQuery } from '@apollo-elements/lit-apollo';
import { apolloClient } from '../utils/apollo_client';

export class PageViewElement extends ApolloQuery {
// export class PageViewElement extends LitElement {
    @property({ type: Boolean }) active;
    client = apolloClient;

    // // Only render this page if it's actually visible.
    // shouldUpdate(changedProps) {
    // //   _shouldRender(props, changedProps, old) {
    // // return props.active;
    //    return changedProps.active;
    // }
}