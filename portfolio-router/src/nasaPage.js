import React from "react";
import "./index.css";
import { FetchApi } from "./nasaApp/App";
import { DatePicker } from "./nasaApp/DatePicker";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const apiKey = "hw7MfiEOLhCthoY1oTX57XvgA61SUbFUEoejOerA";

function NasaMediaObject() {
  const [dateValue, setDateValue] = useState("");
  return (
    <div>
      <DatePicker setDateValue={setDateValue} />
      <FetchApi apiKey={apiKey} dateValue={dateValue} />
    </div>
  );
}

export function NasaPage() {
  return (
    <div>
      <nav>
        <Link to="/"> Home</Link>
      </nav>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/jordanwuuuu/NasaDailyImageScroller"
      >
        <AiFillGithub /> Github Code
      </a>
      <NasaMediaObject />
    </div>
  );
}
