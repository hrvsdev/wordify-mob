import { useState } from "react";
import MQ from "react-responsive";
import SideBar from "../side-bar";
import { Drawer, Button } from "@mantine/core";

type Props = {};

export default function Home({}: Props): JSX.Element {
  const [opened, setOpened] = useState(false);

  return (
    <main>
      <MQ minWidth={1000}>
        <SideBar />
      </MQ>
      <MQ maxWidth={1000}>
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <SideBar />
        </Drawer>

        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </MQ>
    </main>
  );
}
