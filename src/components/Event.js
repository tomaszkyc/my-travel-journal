import React from "react";

export default function Event(props) {
    return (
        <section className="event">
            <img className="event-img" src={props.item.imageUrl} alt="Shows event target" />
            <div className="event-info">
                <div className="event-header">
                    <div className="event-header-location">
                        <span className="event-header-location-name">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>{props.item.location}</p>
                        </span>
                        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h3 className="event-header-name">{props.item.title}</h3>
                </div>
                <p className="event-dates">{`${props.item.startDate} - ${props.item.endDate}`}</p>
                <p className="event-description">{props.item.description}</p>
            </div>
        </section>
    )
}