import { LitElement, html, css, customElement, property } from "lit-element";
import { PageViewElement } from '../components/page-view-element.js';
import "../components/max-width.js";
import "../components/flex-grow.js";
import "../components/flex-align.js";

import {authorPreview} from '../_mocks';
import "../components/author-preview.js";
import { inkReset, uCSS } from "@andreas-galster/inkling";
import {
    radiusAll, paddingAll
  } from "@andreas-galster/inkling/dist/ink-layout-helpers-lit";

import { inkFlexGrid } from "@andreas-galster/inkling/dist/ink-flex-grid-lit";

@customElement("authors-overview-view")
export class AuthorsOverviewView extends PageViewElement {
	static styles = css`
		${uCSS(inkFlexGrid)}
	`;

	render() {
		return html`
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
					${uCSS(radiusAll.lg)}
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
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>
					<author-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .person=${authorPreview}></author-preview>																														
            	</mwc-card>
			</max-width>
		`;
	}
}