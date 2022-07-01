import React, { useState, useContext } from "react";
import MQ from "react-responsive";
import { Drawer } from "@mantine/core";

import SideBar from "../side-bar";
import { NotesLargeScreen, NotesSmallScreen } from "../notes";
import { Context } from "../../Context";
import "./home.scss";

export default function Home() {
  const { sideBarOpened, setSideBarOpened } = useContext(Context);

  return (
    <>
      <MQ minWidth={1000}>
        <main className="large-screen">
          <SideBar />
          <NotesLargeScreen/>
        </main>
      </MQ>
      <MQ maxWidth={1000}>
        <main className="small-screen">
          <Drawer
            opened={sideBarOpened}
            onClose={() => setSideBarOpened(false)}
          >
            <SideBar />
          </Drawer>
          <NotesSmallScreen />
        </main>
      </MQ>
    </>
  );
}
