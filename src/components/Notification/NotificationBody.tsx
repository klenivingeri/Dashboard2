import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    List,

  } from "@chakra-ui/react"


import { Messages } from "./Messages"
import { NotificationTab } from "./NotificationTab"

export function NotificationBody(){
    return(

        <Tabs variant="enclosed">
            <TabList>
                <Tab>Notifications</Tab>
                <Tab>Messages</Tab>
            </TabList>
            <TabPanels >
                <TabPanel p="0" pt="2">
                    <List spacing={2}>

                        <NotificationTab />

                    </List>
                </TabPanel > 
                <TabPanel p="0" pt="2">
                    <Messages avatar="avatar1.png" name="Erick" message="Ciao socis notaque penatibus..." />
                    <Messages avatar="avatar3.png" name="João" message="Main socis notaque penibus..." />
                    <Messages avatar="avatar4.png" name="Pedro" message="Notific socis aque penibus..." />
                    <Messages avatar="avatar5.png" name="Maria" message="Home socis noe penatbus..." />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}