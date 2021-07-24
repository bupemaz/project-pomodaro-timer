import React from "react"


function Duration({session, type, duration, focusDuration, handleFocusDecrease, handleFocusIncrease}) {
 
return (
<div className="input-group input-group-lg mb-2">
<span className="input-group-text" data-testid="duration-focus">
{type==="focus" ? "Focus" : "Break"} Duration: {duration >= 10 ? duration : `0${duration}`}:00
</span>
<div className="input-group-append">
  {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
  <button
    type="button"
    className="btn btn-secondary"
    data-testid="decrease-focus"
    onClick={handleFocusDecrease}
    disabled={session || focusDuration <= 5}
  >
    <span className="oi oi-minus" />
  </button>
  {/* TODO: Implement increasing focus duration and disable during a focus or break session */}
  <button
    type="button"
    className="btn btn-secondary"
    data-testid="increase-focus"
    onClick={handleFocusIncrease}
    disabled={session || focusDuration >= 60}
  >
    <span className="oi oi-plus" />
  </button>
</div>
</div>
)

}


export default Duration;