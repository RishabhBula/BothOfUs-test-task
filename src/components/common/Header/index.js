const { Container, Grid } = require("@material-ui/core");

const Header = () => {
 return (
  <>
   <div className="header">
    <Container>
     <Grid container spacing={3} justifyContent="flex-end">
      <Grid item xs={4} className="login">
       <p>amin@email.com</p>
       <p>Log Out</p>
      </Grid>
     </Grid>
    </Container>
   </div>
  </>
 );
};

export default Header;
