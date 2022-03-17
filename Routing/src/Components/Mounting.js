import React from 'react'

export default function Mounting() {
    return (
        <div id='mounting'>
            Mounting
            <p id='para'>
            In the mounting (or DOM creation, or "setup") phase, we have access to two lifecycle methods: <b>componentWillMount</b>, and <b>componentDidMount</b>.
            
            <li> <b>componentWillMount</b> is called only once in the component lifecycle, immediately before the component is rendered. componentWillMount is largely considered problematic, and as of now, is being considered for deprecation. If your intention is to set an initial state for your component, it is preferable for you to do this in the constructor as shown above. If your intention is to set state using data from an async request, it is preferable that you do this in componentDidMount, as we will see below. In picnic terms, componentWillMount is the moment when you arrive at the field with your picnic blanket and you make sure the spot you've chosen is nice and level. You might find some twigs or little rocks you need to clean up before you lay your blanket down. In React terms, the use-cases for this are quite subtle. For example, suppose you want to keep the time and date of when the component was created in your component state, you could set this up in componentWillMount.</li>
            
            <li>Similarily to the method above, <b>componentDidMount</b> is also only called once, but immediately after the render() method has taken place. That means that the HTML for the React component has been rendered into the DOM and can be accessed if necessary. This method is used to perform any DOM manipulation of data-fetching that the component might need. If you were at a picnic, this is the moment just after you've laid out your blanket. You would use this time to set up any things you want to be using during your stay: lay out all your food and drinks, maybe take out a radio and put some music on. In React, this is where you would set up any long-running processes you want to use in your component, for example fetching data. Suppose we were building a weather app that fetches data on the current weather and displays it to the user. We would want this data to update every 15 seconds without the user having to refresh the page. componentDidMount to the rescue!</li>
            </p>
        </div>

    )
}
