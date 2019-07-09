import React from "react";
import { ZoomableImg } from "../../components";
import data from "../../config/data/essentials";
import "./styles.css";
import tracks from "../../config/data/tracks";

let { direction, parking, transportation, shouldBring, tracksDesc } = data;

export const ParkingCardContent = (
  <div className="essentials-parking-card-content">
    <div className="arena-info-container">
      <div className="arena-maps-image-container">
        <ZoomableImg
          imageLink={
            "https://parking.fiu.edu/wp-content/uploads/2018/08/082018-updated-general-tg-map.png"
          }
        />
      </div>
      <div className="parking-content">
        <p className="essential-item-header">{direction.title} </p>
        <br />
        <p>{direction.address}</p>
        <br />
        {direction.directions.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>

    <div>
      <br />
      <br />
      <p className="essential-item-header">{parking.title}</p>
      <br />
      <p>{parking.description}</p>
      <br />
      <br />
    </div>
    <div>
      <p className="essential-item-header">{transportation.title}</p>
      <br />
      <p>{transportation.description}</p>
    </div>
  </div>
);

const { title, essential, optional } = shouldBring;
export const ImportantItemsCardContent = (
  <div className="essentials-items-card-content">
    <div>
      <p style={{ margin: "25px 0 50px" }}>{title}</p>
      <p className="essential-item-header">{essential.title}</p>
      <br />
      <ul>
        {essential.items.map((item, i) => (
          <li key={i}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <p className="essential-item-header">{optional.title}</p>
      <br />
      <ul>
        {optional.items.map((item, i) => (
          <li key={i}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const LearningTracksCardContent = (
  <div className="learning-tracks-container">
    <div style={{ margin: "25px 0 50px" }}>
      <p>{tracksDesc}</p>
    </div>
    {tracks.map((data, i) => (
      <div key={i}>
        <p
          className="essential-item-header"
          style={{ textAlign: "center", width: "40%" }}
        >
          {data.title}
        </p>
        <div className="track-overview">
          <img
            className="essentials-holder-circle"
            alt="cirlcePlaceholder"
            src={data.path}
          />
          <div className="track-details">
            <p>{data.details}</p>
            <ul>
              {data.trackDetails.map((techDetails, i) => (
                <li key={i}>{techDetails}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="track-software">
          <p style={{ width: "100%", margin: "0 0 25px" }}>
            {"Required Software & How to Get Them?"}
          </p>

          {data.softwareNames.map((softwareLinks, i) => (
            <button
              key={i}
              className="software-button"
              onClick={() => window.open("https://Shellhacks.net")}
            >
              {softwareLinks}
            </button>
          ))}
        </div>
      </div>
    ))}
  </div>
);
