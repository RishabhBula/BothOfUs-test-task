import { TableCell, TableRow } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import ContentCard from "./ContentCard";
import SenderCard from "./SenderCard";

const MessageCard = ({ row }) => {
 return (
  <TableRow key={row.name} component={Paper}>
   <TableCell component="th" scope="row">
    <SenderCard />
   </TableCell>
   <TableCell align="Left">Dec 12, 2020</TableCell>
   <TableCell align="Left">
    <ContentCard />
   </TableCell>
  </TableRow>
 );
};

export default MessageCard;
