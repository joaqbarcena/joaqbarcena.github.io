import './Timeline.css'

export default function Timeline({ events }) {

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
                                        {event.title} @ {event.at}
                                    </div>
                                    <div className='TimelineCardHeaderYearContainer'>
                                        {event.year}
                                    </div>
                                </div>
                            </header>
                            <div className='TimelineCardDescriptionFontSize'>
                                <blockquote>
                                    {event.description}
                                </blockquote>
                            </div>
                        </div>
                    ) 
                }
            </div>
        </section>
    )
}

