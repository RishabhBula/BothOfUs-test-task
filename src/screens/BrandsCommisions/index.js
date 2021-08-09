import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

import Header from "../../components/common/Header";
import Sidebar from "../../components/common/Sidebar";
import Brand from "./Brand";
import AddItemPopup from "./AddItemPopup";

const useStyles = makeStyles((theme) => ({
  buttonsContainer: {
    padding: 20
  },
  table: {
    minWidth: 650
  }
}));

export default function BrandsAndCommisions() {
  const classes = useStyles();

  const [brands, setBrands] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveBrandHandler = (title, commision) => {
    setBrands((brands) => [...brands, { title, commision }]);
    handleClose();
  };

  const deleteBrandHandler = (title) => {
    const newBrands = brands.filter((item) => item.title !== title);
    setBrands(newBrands);
  };

  return (
    <Container maxWidth="lg">
      <div>
        <Grid container spacing={3}>
          <Grid container item xs={12}>
            <Grid item xs={3} className="sidebar">
              <Sidebar />
            </Grid>
            <Grid container item xs={9} className="main-layout">
              <Grid item xs={12}>
                <Header />
                <div className="messages">
                  <h1>Brand and Commisions</h1>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>S. No</TableCell>
                          <TableCell align="left">Brand</TableCell>
                          <TableCell align="left">Commision</TableCell>
                          <TableCell align="center">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {brands?.map((row, index) => (
                          <Brand
                            deleteBrandHandler={deleteBrandHandler}
                            key={row._id}
                            index={index}
                            row={row}
                          />
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <div className={classes.buttonsContainer}>
                    <Button
                      onClick={handleOpen}
                      variant="contained"
                      color="secondary"
                    >
                      Add Item
                    </Button>
                  </div>

                  <AddItemPopup
                    saveBrandHandler={saveBrandHandler}
                    open={open}
                    handleClose={handleClose}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
