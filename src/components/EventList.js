import React from "react";
import Event from "./Event";
import data from "../data"

export default function EventList(props) {
    const items = data.map(item => {
        return <Event key={item.title} item={item} />
    })
    return (
        <div className="events">
            {items}
        </div>
    )
}