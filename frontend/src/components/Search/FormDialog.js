import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Send Us a Request
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Please Help Us Finding The Restaurent</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            
            id="name"
            label="Restaurent Name"
            type="text"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            margin="normal"
            id="city"
            label="City"
            type="text"
            variant="outlined"
          />
          <TextField
            margin="normal"
            id="zip"
            label="Zip Code"
            type="text"
            variant="outlined"
          />
          <TextField
            margin="normal"
            id="cuisine"
            label="Cuisine Type"
            type="text"
            variant="outlined"
          />
          <TextField
            margin="normal"
            id="state"
            label="State"
            type="text"
            variant="outlined"
          />
          <TextField
            margin="normal"
            id="addinf"
            label="Additional Information"
            type="text"
            fullWidthvariant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}