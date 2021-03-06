import { useContext, useEffect } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { Drawer } from "@mantine/core";
import MQ from "react-responsive";

import SideBar from "../side-bar";
import { Context } from "../../Context";
import "./home.scss";

export default function Home() {
  // Navigation
  const navigate = useNavigate();

  // Params
  const { folder, note } = useParams();

  // Context
  const { sideBarOpened, setSideBarOpened } = useContext(Context);

  // Running on first load
  useEffect(() => {
    if (!folder && !note) return navigate("/all/add");
    if (folder && !note) return navigate(folder + "/add");
  }, []);

  return (
    <>
      <MQ minWidth={1001}>
        <main className="large-screen">
          <SideBar />
          <Outlet />
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
          <Outlet />
        </main>
      </MQ>
    </>
  );
}
