import { LitElement, property } from "lit-element";
import { ApolloQuery } from '@apollo-elements/lit-apollo';
import { apolloClient } from '../utils/apollo_client';
import gql from 'graphql-tag';
// import {getRouteDetails} from '../graphql-store/getRouteDetails';
import getRouteDetails from '../graphql-store/getRouteDetails.graphql';


export class PageViewElement extends ApolloQuery {
// export class PageViewElement extends LitElement {
    constructor() {
        super();
        this.query = getRouteDetails;
    }



    @property({ type: Boolean }) active;
    client = apolloClient;

    // render() {
    //     const { data, error, loading } = this;
    //     const { item = {} } = data || {}
        
    //     console.log(` here is some ${data}`);

    //     return '';
    // }



	// render() {
	// 	const { data, error, loading } = this;
    //     const { item = {} } = data || {}
    //     console.log(data);
    //     console.log(` here is some ${data}`);
    //     console.log('yohohohoho');

	// 	return html`
	// 	`;
	// }


    // // Only render this page if it's actually visible.
    // shouldUpdate(changedProps) {
    // //   _shouldRender(props, changedProps, old) {
    // // return props.active;
    //    return changedProps.active;
    // }
}