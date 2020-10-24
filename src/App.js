import React, { useState } from "react";
import Home from "./containers/Home";
import Header from "./containers/Header";
import Statistics from "./containers/Statistics";
import { Container } from "@material-ui/core";
import { Modal as StatsModal } from "@material-ui/core";
const App = () => {
  const [openStatsModal, setOpenStatsModal] = useState(false);
  const handleCloseStatsModal = () => {
    setOpenStatsModal(false);
  };
  const handleOpenStatsModal = () => {
    setOpenStatsModal(true);
  };
  return (
    <div className="app-container">
      <Header
        handleOpenStatsModal={handleOpenStatsModal}
        handleCloseStatsModal={handleCloseStatsModal}
      ></Header>
      <Home></Home>
      <StatsModal
        className="stats-modal"
        open={openStatsModal}
        onClose={handleCloseStatsModal}
      >
        <Container maxWidth="md" className="stats-modal__container">
          <Statistics />
        </Container>
      </StatsModal>
    </div>
  );
};
export default App;
