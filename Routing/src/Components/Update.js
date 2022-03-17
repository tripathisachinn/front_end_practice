import React from 'react'

export default function Update() {
    return (
        <div id='update'>
            Update
            <p id='para'>
            Developers can typically update the component in a few main ways. They can either send new props to the command or update the state entirely. Depending on the complexity or the scale of work, they can choose either method and get the program running.
            Here are Hook methods that are critical to understanding
            <li> <b>shouldComponentUpdate</b> The method tells the program about the state of rendering when it is updated. If new props or rules are being updated, a rendering can be done or skipped. This is important to code in properly, as there are evolving states in the program as well. Updating the method as true/false is the proper approach. The default here is true, which can be changed as per the code.</li>
            <li> <b>componentWillUpdate</b> This is executed when the prior method returns the answer of true. It’s then used to prepare the upcoming render, in the case where some previous calculation is necessary before returning a response. For more complex programs, this method can be used as well.</li>
            <li> <b>componentDidUpdate</b> This is then executed when the updated component has been updated in the DOM as well. You can initiate new libraries to reload so that you can maintain an updated program throughout the process. Rendering can be triggered accordingly, as per the core requirement.</li>
            </p>
            
        </div>
    )
}
