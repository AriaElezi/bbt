

import React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../components/layouts/sidebar/Sidebar";
import Library from "src/components/panel/library/Library";

const LibraryView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Übersicht</title>
      </Helmet>
      <Sidebar>
        <Library />
      </Sidebar>
    </>
  );
};

export default LibraryView;
