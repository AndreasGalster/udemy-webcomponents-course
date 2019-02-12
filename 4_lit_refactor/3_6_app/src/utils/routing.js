import { createBrowserHistory, startListener, push, replace } from 'redux-first-routing'
import UniversalRouter from 'universal-router'
import {configureStore} from '../store/store';
import { property } from "lit-element";


export const routeNames = {
    // author
    home: "",
    // author
    authorsOverview: "authors",
    authorsDetail: "author",
    // books
    booksOverview: "books",
    booksDetail: "book",
    // quotes
    quotesOverview: "quotes"
  };

const routes = [];
Object.values(routeNames).map(r => routes.push( {path: `/${r}`, action: () => ''} ))
console.log(routes);

/* ---------- routes.js ---------- */
// const routes = [
//     {
//       path: '',
//     //   action: () => '<h1 on>Home</h1>',
//     },
//   ]

// Create the history object
const history = createBrowserHistory()

// Create the store, passing it the history object
const store = configureStore(history)

// Start the history listener, which automatically dispatches actions to keep the store in sync with the history
startListener(history, store)

// Create the router
const router = new UniversalRouter(routes)

// Get the current pathname
let currentLocation = store.getState().router.pathname

// Subscribe to the store location
// const unsubscribe = store.subscribe(() => {
//   const previousLocation = currentLocation
//   currentLocation = store.getState().router.pathname

//     console.log(currentLocation);
//     console.log(previousLocation);

//   if (previousLocation !== currentLocation) {
//     console.log('Some deep nested property changed from', previousLocation, 'to', currentLocation)
//     document.querySelector('app-shell').loadRoute(currentLocation)
//   }
// })

// Call render function once, on app start
// loadRoute(currentLocation)





export const Routing = superclass =>
  class extends superclass {
    @property({ type: String }) route;

    constructor() {
        super();
        this.subscribe();
        this.loadRoute(currentLocation);
        // store.dispatch(push('/author'))

    }

    subscribe() {
        store.subscribe(() => {
            const previousLocation = currentLocation
            currentLocation = store.getState().router.pathname
        
            console.log(currentLocation);
            console.log(previousLocation);
        
            if (previousLocation !== currentLocation) {
            console.log('Some deep nested property changed from', previousLocation, 'to', currentLocation)
            document.querySelector('app-shell').loadRoute(currentLocation)
            }
        })
    }

    // Create the reactive render function
    loadRoute(pathName) {
        // pathName = pathName.replace("/", "");

        console.log(`loading ${pathName}`);
        router.resolve(pathName).then((h) => {
            this.route = pathName;
            // document.body.innerHTML = h
            this._loadViewDependency(pathName)
        })
    }

    /*
     * Load the view as needed by doing this:
     *
     * 1) Set loaded state for page loader to false
     * 2) Load the component, then load analytics if needed
     * 3) Initiate connectedCallback for view, since some data might not be fetching properly on route changes
     * 4) Tell preprender it can start reading the page for SSR
     * 5) Set loaded state to true if child component doesn't do so via data fetching
     */
    async _loadViewDependency(page) {
      console.log(`loading chunk ${page}`);

      switch (page) {
        case "":
            await import(/* webpackChunkName: "home" */ "../views/home-view.js");
          break;
        case "/authors":
            await import(/* webpackChunkName: "authors-overview" */ "../views/authors-overview-view.js");
            break;
        case "/author":
            await import(/* webpackChunkName: "authors-detail" */ "../views/authors-detail-view.js");
            break;
        case "/books":
            await import(/* webpackChunkName: "books-overview" */ "../views/books-overview-view.js");
            break;
        case "/book":
            await import(/* webpackChunkName: "books-detail" */ "../views/books-detail-view.js");
            break;
        case "/quotes":
            await import(/* webpackChunkName: "quotes-overview" */ "../views/quotes-overview-view.js");
            break;            
        case "/add-an-event":
        // await import (/* webpackChunkName: "add-an-event" */ '../views/events-submit-view.js');
      }

      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("sw.js")
          .then(reg => {
            console.log("SW registered!", reg);

            // updatefound is fired if sw.js changes.
            reg.onupdatefound = function() {
              // The updatefound event implies that reg.installing is set; see
              // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
              var installingWorker = reg.installing;

              installingWorker.onstatechange = () => {
                switch (installingWorker.state) {
                  case "installed":
                    if (navigator.serviceWorker.controller) {
                      // At this point, the old content will have been purged and the fresh content will
                      // have been added to the cache.
                      // It's the perfect time to display a "New content is available; please refresh."
                      // message in the page's interface.
                      console.log("New or updated content is available.");
                      console.log(this);
                      reg.update();
                      this.dispatchEvent(
                        new CustomEvent("toggleToast", {
                          detail: {
                            text: "A site update is available, please refresh."
                          },
                          bubbles: true,
                          composed: true
                        })
                      );
                    } else {
                      // At this point, everything has been precached.
                      // It's the perfect time to display a "Content is cached for offline use." message.
                      console.log("Content is now available offline!");
                    }
                    break;

                  case "redundant":
                    console.error(
                      "The installing service worker became redundant."
                    );
                    break;
                }
              };
            };
          })
          .catch(function(e) {
            console.error("Error during service worker registration:", e);
          });
      }

      // // (function() {
      // if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      // 	navigator.serviceWorker.register('/sw.js').then((reg) => {
      // 		console.log('SW registered!', reg);
      // 		reg.update();
      // 	}).catch((err) => console.log('Could not register SW', err));
      // }
      // // })();

    //   this._loadAnalytics();
    }
  };