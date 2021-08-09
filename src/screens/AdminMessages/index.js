import { Container, Grid } from "@material-ui/core";

import Header from "../../components/common/Header";
import Messages from "../../components/Messages";
import Sidebar from "../../components/common/Sidebar";

const AdminMessages = () => {
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
                  <h1>Messages</h1>
                  <Messages />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default AdminMessages;
