import React from "react";
function Note(props) {
  const note = props.note;
  return (
    <div class="note" key={note}>
      {note}
    </div>
  );
}
export default Note;
