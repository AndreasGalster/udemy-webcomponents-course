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



import gql from 'graphql-tag';


// Compute graphql documents statically for performance
const query = gql`
  query($humanId: String) {
    getAuthor(humanId: $humanId) {
      _id
      humanId
      firstName
      lastName
    }
  }
`;


// const query = gql`
//   query {
//     getRouteDetails @client {
//       routePath 
//       routeParam
//     }
//   }
// `;


// <quotes-header .item=${quotesHeader}></quotes-header>
// <br>
// <books-header .item=${quotesHeader}></books-header>
// <br>

@customElement("authors-detail-view")
export class authorsDetailView extends PageViewElement {
   constructor() {
	super();
    this.query = query;

    this.variables = {
      humanId: "darren-hardy"
    }
  }

	static styles = css`
		${uCSS(inkFlexGrid)}
	`;

	render() {
		super.render; 

		const { data, error, loading } = this;
		const { item = {} } = data || {}
	

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
				margin-right: auto;
				padding-right: 40px;
				max-width: 800px;
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

			@media(max-width: 900px) {
				max-width {
					flex-direction: column-reverse;
				}

				author-highlight {
					margin-top: -25px;					
				}
			}
		</style>
            <authors-header .item=${quotesHeader}></authors-header>


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


<video controls="" controlslist="nodownload" class="tWeCl" playsinline="" poster="https://instagram.fcrk2-1.fna.fbcdn.net/vp/699848ff50035e2b3fccf5702a3ea41f/5CA8E44C/t51.2885-15/e35/55782438_379988852590192_1157961736965292392_n.jpg?_nc_ht=instagram.fcrk2-1.fna.fbcdn.net" preload="metadata" src="https://scontent.cdninstagram.com/vp/970c2b872a3d67c00e112cc9da115406/5CA8D5D0/t50.16885-16/10000000_661672590935234_4873590087595589632_n.mp4?_nc_ht=scontent.cdninstagram.com" type="video/mp4"></video>

<video controls="" controlslist="nodownload" class="tWeCl" playsinline="" poster="https://scontent-arn2-1.cdninstagram.com/vp/9b128af6fa8ecbdbb97dbd1cc8c3ed13/5B306166/t51.2885-15/e15/fr/p1080x1080/35344231_1893732617339726_5427501132018614272_n.jpg" preload="none" src="https://scontent-arn2-1.cdninstagram.com/vp/e35501dad2d840a2eb7ec141b466b315/5B30A767/t50.16885-16/10000000_592828714423251_1144202836960083968_n.mp4" type="video/mp4"></video>

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/tv/BvvdUHklzoa/?utm_source=ig_embed&amp;utm_medium=loading&amp;utm_campaign=embed_loading_state_script" data-instgrm-version="10" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
	<div style="padding:16px;">
		<a href="https://www.instagram.com/tv/BvvdUHklzoa/?utm_source=ig_embed&amp;utm_medium=loading&amp;utm_campaign=embed_loading_state_script" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
			<div style=" display: flex; flex-direction: row; align-items: center;"> 
				<div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> 
				<div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> 
					<div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> 
					<div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
				</div>
			</div>
			<div style="padding: 19% 0;"></div>
			<div style=" display:block; height:60px; margin:0 auto 16px; width:210px;">
				<svg xmlns="https://www.w3.org/2000/svg" viewbox="0 0 840 300" width="210" version="1">
					<path d="M65 49c-16 7-34 26-40 50-7 31 23 44 25 39 3-5-5-6-7-22-2-21 7-43 19-53 3-2 2 0 2 5v102c0 21-1 28-3 35-1 7-4 11-2 13s12-3 17-10c7-9 9-20 10-32v-51-68c0-5-14-11-21-8m575 102c0 11-3 20-6 26-6 12-18 16-23-1-3-10-4-26-1-39 2-13 8-23 17-22 10 0 14 13 13 36zm-162 70c0 19-3 35-9 40-9 7-21 1-19-12 2-12 13-25 28-40v12zm-2-70c-1 10-4 20-6 26-6 12-19 16-24-1-4-12-3-28-1-37 2-13 8-24 18-24 9 0 14 10 13 36zm-94-1c-1 11-3 20-6 27-7 12-19 16-24-1-4-13-3-30-1-39 2-14 8-23 18-22 9 0 14 13 13 35zm430 13c-2 0-3 3-4 7-3 14-6 17-10 17-5 0-9-7-10-21v-52c0-4-1-8-12-12-5-2-12-4-15 4a209 209 0 0 0-15 50c-1-6-2-17-2-41-1-4-1-8-7-11-3-2-13-6-16-2s-7 13-11 25l-5 15v-34c0-4-2-5-3-5l-12-3c-4 0-5 2-5 5v58c-2 11-8 25-15 25s-10-6-10-33l1-34v-13c0-3-6-5-9-5l-7-1c-2 0-4 2-4 4v4c-4-6-10-9-13-10-10-3-21-1-29 10-6 9-10 19-11 33-2 11-1 22 1 31-3 10-7 14-12 14-7 0-12-11-11-31 0-13 3-22 6-35 1-6 0-8-3-11-2-3-7-4-13-3l-19 4 1-4c2-15-14-14-19-9-3 3-5 6-6 12-1 9 7 13 7 13a139 139 0 0 1-24 51 1390 1390 0 0 1 0-54l1-12c0-3-2-4-5-5l-9-2c-5-1-7 2-7 4v4c-4-6-9-9-13-10-10-3-21-1-29 10-6 9-10 21-11 33v29c-1 8-6 16-11 16-7 0-10-6-10-33v-34l1-13c0-3-6-5-9-5l-8-1c-2 0-4 2-4 4v4c-4-6-9-9-13-10-10-3-20-1-28 10-6 7-10 15-12 33l-1 15c-2 12-11 27-19 27-4 0-8-9-8-27l1-62h27c3 0 6-12 3-13l-16-1-13-1 1-25c0-2-3-4-4-4l-11-3c-5-1-8 0-8 4l-1 27-21-1c-4 0-8 16-3 16l23 1-1 46v3c-3 19-16 29-16 29 3-12-3-22-13-30l-20-15s5-4 9-14c3-7 3-14-4-16-12-3-22 6-25 16-3 7-2 13 3 18l1 2-10 18c-9 15-15 28-21 28-4 0-4-13-4-24l2-41c0-5-3-8-7-11-3-2-8-5-11-5-5 0-19 1-33 39l-5 14 1-46-2-3c-2-1-8-4-14-4-2 0-3 1-3 4l-1 72 1 15 2 6 5 3c2 0 12 2 13-2 0-5 0-10 6-30 8-30 20-45 25-50h2l-2 38c-1 37 6 44 16 44 7 0 18-7 29-26l19-32 11 11c9 8 12 16 10 24-2 6-7 12-17 6l-7-5h-6c-3 3-6 6-7 11-1 4 3 6 8 8 4 2 12 3 17 4 21 0 37-10 49-38 2 24 11 37 26 37 10 0 20-13 25-26 1 6 3 10 6 14 11 19 34 15 46-1l4-7c1 15 13 20 20 20 8 0 16-3 21-16l3 4c11 19 34 15 46-1l1-2v10l-10 9c-18 16-31 29-32 43-2 18 13 25 24 26 12 1 22-6 29-15 5-8 9-25 9-43l-1-25a200 200 0 0 0 38-66h14c2 0 2 0 2 2s-9 34-1 55c5 15 17 19 24 19 8 0 16-6 20-15l1 3c12 19 35 15 46-1l4-7c3 16 15 20 22 20s14-3 19-16l1 12 4 3c7 2 13 1 16 1 2-1 3-2 3-6 1-9 0-25 3-36 5-20 9-27 11-31 2-2 3-2 3 0l2 35c1 13 3 21 5 23 4 7 8 8 12 8 3 0 8-1 8-5 0-3 0-16 5-35 3-13 8-24 10-28a252 252 0 0 0 3 52c5 21 18 23 23 23 11 0 19-7 22-28 0-5-1-9-4-9" fill="#262626"/>
				</svg>
			</div>
			<div style="padding-top: 8px;"> 
				<div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;"> View this post on Instagram</div>
			</div>
			<div style="padding: 12.5% 0;"></div> 
			<div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> 
			<div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> 
			<div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> 
			<div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div></a> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/tv/BvvdUHklzoa/?utm_source=ig_embed&amp;utm_medium=loading&amp;utm_campaign=embed_loading_state_script" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Do you often struggle to achieve your goals or you give upon your habits like a diet, working out,and so on? Here&#39;s why we often fail to stay consistent. Like my work? I regularly post videos on YouTube &amp; IGTV on personal development topics such as understanding relationships, the art of fulfillment, wealth management and book reviews on growth &amp; relationships. My YouTube account: https://www.youtube.com/channel/UCflkNeQQ9uMCY4zOb1VJHrw My Twitter account: https://twitter.com/AndyGalster Super-like my work? You can become a Patreon to show your appreciation. https://www.patreon.com/andygalster I offer one-hour long coaching sessions focused on dating and relationships. The first session is free for us to assess your current situation. To book a coaching session book here: https://calendly.com/andygalster #life #happy #happiness #mindset #personalgrowth #personaldevelopment #betterme #coach #coaching #mentor #motivation #success #inspiration #goals #lifecoach</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by <a href="https://www.instagram.com/andygalster/?utm_source=ig_embed&amp;utm_medium=loading&amp;utm_campaign=embed_loading_state_script" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank"> Andreas Galster</a> (@andygalster) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2019-04-02T05:45:05+00:00">Apr 1, 2019 at 10:45pm PDT</time></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>

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