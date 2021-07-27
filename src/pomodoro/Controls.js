import React from "react"

function Controls({session, playPause, classNames, isTimerRunning, stopSession}) {
  return (
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >  {/* pause the current focus or break session */}
        {/* sound alarm when current focus or break session is up  */}
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          {/* Stop the current focus or break session */}
          {/* Disable the stop button when there is no active session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="stop"
            title="Stop the session"
            disabled={!session}
            onClick={stopSession}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
  )
}   

export default Controls;