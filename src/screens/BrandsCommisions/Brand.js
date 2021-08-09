import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const Brand = ({ row, index, deleteBrandHandler }) => {
  return (
    <>
      <TableRow>
        <TableCell style={{ fontWeight: "bolder" }} component="th" scope="row">
          {index + 1}
        </TableCell>
        <TableCell align="left">{row.title?.slice(0, 50)}</TableCell>
        <TableCell align="left">{row.content?.slice(0, 50)}</TableCell>
        <TableCell align="left">
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              onClick={() => deleteBrandHandler(row.title)}
              variant="contained"
              color="secondary"
            >
              Del
            </Button>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Brand;
