import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import EventList from "./components/EventList";

export default function App() {
    return (
        <>
            <Navbar />
            <EventList />
        </>
    )
}