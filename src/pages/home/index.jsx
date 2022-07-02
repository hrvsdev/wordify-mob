import { useContext, useEffect } from "react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { Drawer } from "@mantine/core";
import MQ from "react-responsive";

import SideBar from "../side-bar";
import { Context } from "../../Context";
import "./home.scss";

export default function Home() {
  const navigate = useNavigate();
  const { folder } = useParams();

  const { sideBarOpened, setSideBarOpened } = useContext(Context);

  useEffect(() => {
    if (!folder) navigate("/all");
  }, []);

  return (
    <>
      <MQ minWidth={1000}>
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
