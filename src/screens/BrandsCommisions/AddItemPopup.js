import { makeStyles } from "@material-ui/core/styles";
import { Backdrop, Fade, Modal } from "@material-ui/core";

import AddItemForm from "./AddItemForm";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #979797",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 600,
    borderRadius: 24,
    overflow: "auto"
  }
}));

const AddItemPopup = ({ open, handleClose, saveBrandHandler }) => {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <AddItemForm saveBrandHandler={saveBrandHandler} />
        </div>
      </Fade>
    </Modal>
  );
};

export default AddItemPopup;
