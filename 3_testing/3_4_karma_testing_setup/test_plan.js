dialog
	it should open without data and not display anything, opened true
	it should open with data and display content, opened true
	it should close, opened false
	itshould be opened false by default


template-renderer
	it should not render shadow dom if noShadow
	it should contain something in the light/shadow DOM


app-shell
	it should contain no cards on initial render, people prop should be empty
	it should fetch some data / this.people should contain data
	it should contain some data after fetching & rendering
	it should open the dialog on click on card



profile-card
	it should dispatch an event on click on element
	it should contain no dom if nothing fed in, profileData isempty
	it should contain dom if data is fed in
	it should contain profileData property but no attribute