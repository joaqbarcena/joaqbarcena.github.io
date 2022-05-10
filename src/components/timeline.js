import './Timeline.css'

export default function Timeline({ events }) {

    let buildDescription = (val) => {
        if (typeof val === 'string') val = [val]
        let boldp = (x) => x.split("**").map((s, i) => ((i % 2 == 1) ? (<b style={{ color: '#96CEB4' }}>{s}</b>) : s))
        let buildList = (val) => (<ul> { val.map(element => (<li> {Array.isArray(element) ? buildList(element) : boldp(element)} </li>)) } </ul> )
        return val.map(x => Array.isArray(x) ? buildList(x) : (<blockquote>{boldp(x)}</blockquote>))
    }

    return (
        <section id='timeline' className="TimelineContainer">
            <header>Where & What I Did</header>
            <div className="terminal-timeline TimelineWidth" >
                {
                    (events || []).map(event => 
                        <div className="terminal-card" style={{ textAlign: 'start' }}>
                            <header className='TimelineCardHeaderFontSize'>
                                <div className='TimelineCardHeaderContainer'>
                                    <div className='TimelineCardHeaderTitleContainer'>
                                        <b>{event.title} @ {event.at}</b>
                                    </div>
                                    <div className='TimelineCardHeaderYearContainer'>
                                        <b>{event.year}</b>
                                    </div>
                                </div>
                            </header>
                            <div className='TimelineCardDescriptionFontSize'>
                                { buildDescription(event.description) }  
                            </div>
                        </div>
                    ) 
                }
            </div>
        </section>
    )
}

