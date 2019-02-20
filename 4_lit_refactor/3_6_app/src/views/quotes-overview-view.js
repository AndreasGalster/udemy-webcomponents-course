import { LitElement, html, css, customElement, property } from "lit-element";
import { PageViewElement } from '../components/page-view-element.js';
import "../components/max-width.js";
import "../components/flex-grow.js";
import "../components/flex-align.js";

import {quotesPreview} from '../_mocks';
import "../components/quote-preview.js";
import { inkReset, uCSS } from "@andreas-galster/inkling";
import {
    radiusAll, paddingAll
  } from "@andreas-galster/inkling/dist/ink-layout-helpers-lit";

import { inkFlexGrid } from "@andreas-galster/inkling/dist/ink-flex-grid-lit";

@customElement("quotes-overview-view")
export class QuotesOverviewView extends PageViewElement {
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
					<h1>quotes-overview view</h1>
				</max-width>
			</search-bar>

            <max-width>
                <mwc-card ink-grid ink-gap-i>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>
					<quote-preview c-xs-12 c-sm-6 c-md-4 c-lg-4 c-xlg-3 .quote=${quotesPreview}></quote-preview>																														
            	</mwc-card>
			</max-width>
		`;
	}
}