import './About.css'
import 'terminal.css'
import pokemon from '../assets/pokemon.mp3'
import Typed from 'typed.js'
import React from 'react'

/**
 * First page to show with info aboutMe
 */
export default function AboutMe(props) {
    const elem = React.useRef()
    const typed = React.useRef()
    const pokeAudio = React.useRef()

    React.useEffect(() => {
        typed.current = new Typed(elem.current, {
            strings: [
                "> just another dev",
                "> fire-able",
                "> don't hire him",
                "> y're warned",
            ],
            typeSpeed: 50,
            backSpeed: 40,
            backDelay: 1500,
            loop: true,
            smartBackspace: true,
        })

        return () => { typed.current.destroy() }
    }, [])

    const playPokemon = () => pokeAudio.current.play()

    return (
        <div className="AboutContainer">
            <div className='AboutCols' style={{ alignItems: 'flex-start'}}>
                <span className='AboutName' >{ props.name }</span>
                <div className='type-wrap AboutBanner'>
                    <span ref={elem}></span>
                </div>
                <div className='AboutSkillsContainer'>
                { props.skills.map(s => 
                    <span style={{ backgroundColor: s.backgroundColor, color: 'black', padding: '5px', margin: '5px'}}>
                        { s.title }
                    </span>
                ) }
                </div>
            </div>
            <div className='AboutCols'>
                <a href='#timeline' type="button" class="btn btn-error AboutButtons">Timeline</a>
                <a href='/#' type="button" class="btn btn-primary AboutButtons">Projects</a>
                <a href='#contact' onClick={playPokemon} type="button" class="btn btn-default AboutButtons">Reach Me!</a>
                <audio ref={pokeAudio} src={pokemon}/>
            </div>
        </div>
    )
}