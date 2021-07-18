import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Card.css";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const Card = ({ name, attractions, description, img }) => {
  const style = {
    backgroundImage: `url("${img}")`,
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="card" onClick={handleOpen}>
        <div className="card-image" style={style}></div>
        <div className="card-text">
          <span className="date">4 days ago</span>
          <h2>{name}</h2>
          <p> {description}</p>
        </div>
        <div className="card-stats">
          <div className="stat">
            <div className="value">{attractions}</div>
            <div className="type">Attractions</div>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{name}</h2>
            <p id="transition-modal-description">{description}</p>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Card;
