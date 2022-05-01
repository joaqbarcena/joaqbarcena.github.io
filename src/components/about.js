import './About.css'
import 'terminal.css'
import Typed from 'typed.js'
import React from 'react'

/**
 * First page to show with info aboutMe
 */
export default function AboutMe() {
    const elem = React.useRef()
    const typed = React.useRef()

    React.useEffect(() => {
        typed.current = new Typed(elem.current, {
            strings: [
                "boring programmer",
                "f*king weirdo",
                "don't hire him"
            ],
            typeSpeed: 50,
            backSpeed: 40,
            backDelay: 1500,
            loop: true
        })

        return () => { typed.current.destroy() }
    }, [])

    return (
        <div className="AboutContainer">
            <div className='AboutCols' style={{ alignItems: "center" }}>
                <div>Joaquin Barcena</div>
                <div className='type-wrap' style={{ marginTop: "30px", color: "yellow" }}>
                    <span ref={elem}></span>
                </div>
            </div>
            <div className='AboutCols' style={{ alignItems: "center", }}>
                <a type="button" class="btn btn-default " style={{ width: "70%" }}>Projects</a>
                <a type="button" class="btn btn-default" style={{ width: "70%" }}>Reach Me !</a>
            </div>
        </div>
    )
}