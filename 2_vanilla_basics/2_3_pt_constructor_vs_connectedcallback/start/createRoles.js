export let createRoles = {
    roles: [],
    init: function(roles) {
        // if roles exist, push them into the roles property
        if(roles) {
            roles.map(role => {
                this.roles.push(role);
            });
        }
        

        // creating a function to act as a wrapper to document.createElement:
        document.create = function(elType){
            // creating the new element:
            var elem = document.createElement(elType),
                // creating a custom event (called 'elementCreated'):
                evt = new CustomEvent('elementCreated', {
                    // details of the custom event:
                    'detail' : {
                        // what was created:
                        'elementTag' : elem.localName,
                        // a reference to the created node:
                        'elementNode' : elem
                    }
            });
            // dispatching the event:
            this.dispatchEvent(evt);
        
            // returning the created element:
            return elem;
        };
    
    
        // assigning an event-handler to listen for the 'elementCreated' event:
        document.addEventListener('elementCreated', (e) => {
        
            // compare roles array with created element
            // if there's a match, set attribute to role defined
            this.roles.map(role => {
                if(role.tag == e.detail.elementTag) {
                    e.detail.elementNode.setAttribute('role', role.role); // Set custom role
                }
            });    
    
        });
    }
}