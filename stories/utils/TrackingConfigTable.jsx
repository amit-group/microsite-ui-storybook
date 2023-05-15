import React from "react";
import { ConfigTable } from "./ConfigTable";

export function Code({ children }) {
  return <code className="css-1kwwth4">{children}</code>;
}

export function TrackingDataTable() {
  return (
    <ConfigTable>
      <tr>
        <td>action</td>
        <td>
          <Code>string</Code>
        </td>
        <td></td>
        <td></td>
        <td>Custom action for event</td>
      </tr>
      <tr>
        <td>target</td>
        <td>
          <Code>string</Code>
        </td>
        <td></td>
        <td></td>
        <td>Custom target for event</td>
      </tr>
      <tr>
        <td>label</td>
        <td>
          <Code>string</Code>
        </td>
        <td></td>
        <td></td>
        <td>Custom label for event</td>
      </tr>
      <tr>
        <td>category</td>
        <td>
          <Code>string</Code>
        </td>
        <td></td>
        <td></td>
        <td>Custom category for event</td>
      </tr>
    </ConfigTable>
  );
}

export function TrackingEventsTable({ events = [] }) {
  return (
    <ConfigTable>
      {events.includes("toggleClick") && (
        <tr>
          <td>toggleClick</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td>Custom for event click on toggle</td>
        </tr>
      )}
      {events.includes("videoPlay") && (
        <tr>
          <td>videoPlay</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
      {events.includes("videoReplay") && (
        <tr>
          <td>videoReplay</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
      {events.includes("videoPause") && (
        <tr>
          <td>videoPause</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
      {events.includes("videoSoundOff") && (
        <tr>
          <td>videoSoundOff</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
      {events.includes("videoSoundOn") && (
        <tr>
          <td>videoSoundOn</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
      {events.includes("carouselClickNext") && (
        <tr>
          <td>carouselClickNext</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
      {events.includes("carouselClickPrev") && (
        <tr>
          <td>carouselClickPrev</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
      {events.includes("carouselClickItem") && (
        <tr>
          <td>carouselClickItem</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
      {events.includes("modalClickClose") && (
        <tr>
          <td>modalClickClose</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
      {events.includes("modalClickThumb") && (
        <tr>
          <td>modalClickThumb</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
      {events.includes("playlistClickToggle") && (
        <tr>
          <td>playlistClickToggle</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
      {events.includes("minigameClickClose") && (
        <tr>
          <td>minigameClickClose</td>
          <td>
            <Code>MicrositeTrackingData</Code>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      )}
    </ConfigTable>
  );
}

export function TrackingConfigTable() {
  return (
    <ConfigTable>
      <tr>
        <td>category</td>
        <td>
          <Code>string</Code>
        </td>
        <td></td>
        <td>
          <Code>Engagement</Code>
        </td>
        <td>Category for GA Event</td>
      </tr>
      <tr>
        <td>label</td>
        <td>
          <Code>string</Code>
        </td>
        <td></td>
        <td>
          <Code>General</Code>
        </td>
        <td>Label for GA Event</td>
      </tr>
      <tr>
        <td>events</td>
        <td>
          <Code>MicrositeTrackingEvents</Code>
        </td>
        <td></td>
        <td>
          <Code>{`{}`}</Code>
        </td>
        <td>Custom for each events</td>
      </tr>
    </ConfigTable>
  );
}
