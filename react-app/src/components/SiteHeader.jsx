import React from "react";
import { Header } from "semantic-ui-react";

const SiteHeader = () => {
  return (
    <Header  size="large" color="orange" textAlign="center">
      <h1 data-cy="header">COURSE LIST</h1>
      <Header.Subheader data-cy="sub-header">
        Workshops Testing Vue Productivity Node React
      </Header.Subheader>
    </Header>
  );
};

export default SiteHeader;
