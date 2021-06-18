import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

function Buttons(props) {
  return (
    <div className="info-der">
      <span className="sub">${props.sub}</span>
      <span className="count">{props.formatCount}</span>

      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={props.add}
      >
        Incrementar
      </Button>

      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={props.remove}
        startIcon={<DeleteIcon />}
      >
        Borrar
      </Button>
    </div>
  );
}

export default Buttons;
