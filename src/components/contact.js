import './Contact.css'

/**
 * 3rd section of my contact channels 
 */
export default function ContactMe(props) {
    const gh = `https://github.com/${props.links.gh}`
    const mail = `mailto:${props.links.mail}`
    const In = `https://www.linkedin.com/in/${props.links.In}`

    return (
        <section id='contact' className='ContactContainer'>
            <div class="icon-list">
                <a href={gh} target='_blank' rel="noreferrer" ><i class="nes-icon github is-large"></i></a>
                <a href={mail} target='_blank' rel="noreferrer" ><i class="nes-icon gmail is-large"></i></a>
                <a href={In} target='_blank' rel="noreferrer" ><i class="nes-icon linkedin is-large"></i></a>
            </div>
        </section>
    )
}