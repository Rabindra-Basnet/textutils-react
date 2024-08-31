import React  from 'react'

export default function About(props) { 
    return (
        <>
            <div className='container' style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', color: props.mode === 'dark'? 'white': 'black'}} >
                <h1 className=' text-center'>About Us</h1>
                <div className="accordion" id="accordionExample"  >
                    <div className="accordion-item" style={{color: props.mode === 'dark'? 'white': 'black'}}>
                        <h2 className="accordion-header"   >
                            <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Name Lists
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body"  >
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={{color: props.mode === 'dark'? 'white': 'black'}}>
                        <h2 className="accordion-header" >
                            <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Address Lists
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body"  >
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item" style={{color: props.mode === 'dark'? 'white':'black'}}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Contact Details
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{color: props.mode === 'dark'? 'white':'black'}}  >
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={props.toggleMode} type="button" class="btn btn-primary m-2" style={{color: props.mode === 'dark'? 'white': 'black'}}>{}</button>
            </div>
        </>
    )
}



// const [myStyle, setmyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })

    // const [btnText, setBtnText] = useState("Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === "black") {
    //         setmyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "px solid white"
    //         })
    //         setBtnText('Light Mode')
    //     }
    //     else {
    //         setmyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText('Dark Mode')
    //     }
    // }

