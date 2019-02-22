import { LitElement, html, css, customElement, property } from "lit-element";
import { PageViewElement } from '../components/page-view-element.js';
import {authorHighlight, quotesHeader, booksPreview, quotesPreview} from '../_mocks';
import "../components/book-preview.js";
import "../components/quote-preview";


import "../components/author-highlight";
import "../components/header-quotes.js";
import "../components/header-books.js";
import "../components/header-author.js";


import { inkReset, uCSS } from "@andreas-galster/inkling";
import {
    radiusAll, paddingAll
  } from "@andreas-galster/inkling/dist/ink-layout-helpers-lit";

import { inkFlexGrid } from "@andreas-galster/inkling/dist/ink-flex-grid-lit";


@customElement("authors-detail-view")
export class authorsDetailView extends PageViewElement {
	static styles = css`
		${uCSS(inkFlexGrid)}
	`;

	render() {
		return html`
		<style>
			/* quotes-header {
				position: sticky;
				top: 64px;
			} */

			section {
				z-index: 29;
				position: relative;
				background: var(--bg-overview);				
			}

			max-width:first-child {
				display: flex;
			}

			mwc-card {
					background: white;
					box-shadow: 0 2px 7px 1px rgba(0,0,0,0.1);
					${uCSS(radiusAll.lg)}
				}

			div {
				flex-grow: 1;
			}

			author-highlight {
				margin-top: -140px;
			}

			h1 {
				color: var(--primary);
				font-size: 34px;
				font-weight: 300;
				margin-top: 100px;				
			}
		</style>
            <quotes-header .item=${quotesHeader}></quotes-header>
			<br>
            <authors-header .item=${quotesHeader}></authors-header>
            <br>
			<books-header .item=${quotesHeader}></books-header>


			<section>
				<max-width>
					<div>
						<h1>About Tony Robbins</h1>
						<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

<h2>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in</h2> 
<p>
	"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
</p>

<h2>
	1914 translation by H. Rackham
</h2>
<p>
	"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
</p>
					</div>
					<author-highlight .person=${authorHighlight}></author-highlight>
				</max-width>


				<max-width>
					<h1>Books published</h1>
					<mwc-card ink-grid ink-gap-i>
					
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>
					<book-preview c-xs-12 c-sm-6 c-md-4 c-lg-3 c-xlg-3 .book=${booksPreview}></book-preview>																														
			</mwc-card>					
				</max-width>

				<max-width>
					<h1>Famous quotes</h1>

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


			</section>
		`;
	}
}