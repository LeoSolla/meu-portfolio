import './Timeline.css'

const timelineData = [
    {
        title: "The Beginning",
        text: "I quit my IT Manager job position after an opportunity to build a mobile app at the same office. Love at first sight!"
    },
    {
        title: "The Process",
        text: "Initiated my journey studying Java but my creative side took me to work in agencies making hotsites and landing pages."
    },
    {
        title: "Currently",
        text: "I use my experience and skills to help customers build products, grow faster and unlock value."
    },
    {
        title: "The Future",
        text: "To be continued..." 
    }
];

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span>{data.title}</span>
            <p>{data.text}</p>
            <span className="circle" />
        </div>
    </div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
            <div className="timeline-line-top"></div>
            <div className="timeline-line-middle"></div>
            <div className="timeline-line-bottom"></div>
        </div>
    );

export default Timeline;