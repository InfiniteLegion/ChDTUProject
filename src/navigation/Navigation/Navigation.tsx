import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawerContent from "../CustomDrawerContent/CustomDrawerContent.tsx";
import TabNavigation from "../TabNavigation/TabNavigation.tsx";
import ChatDisplay from "../../displays/ChatDisplay/ChatDisplay.tsx";

const Drawer = createDrawerNavigator();

function Navigation() {
    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName='Info'
                    drawerContent={(props) => <CustomDrawerContent {...props} />}
                >
                    <Drawer.Screen
                        name='Info'
                        component={TabNavigation}
                        options={{
                            drawerLabel: 'Інфо',
                        }}
                    />
                    <Drawer.Screen
                        name='Chat'
                        component={ChatDisplay}
                        options={{
                            drawerLabel: 'Чат',
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigation;
