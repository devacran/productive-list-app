import React, { FC, useState } from "react";
import Home from "./containers/Home";
import Header from "./components/Header";
import Statistics from "./containers/Statistics";
import { Container } from "@material-ui/core";
import { Modal as StatsModal } from "@material-ui/core";

const App: FC = () => {
  const [openStatsModal, setOpenStatsModal] = useState<boolean>(false);

  const handleCloseStatsModal = () => {
    setOpenStatsModal(false);
  };

  const handleOpenStatsModal = () => {
    setOpenStatsModal(true);
  };

  return (
    <div className="app-container">
      <Header handleOpenStatsModal={handleOpenStatsModal}></Header>
      <Home />
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
