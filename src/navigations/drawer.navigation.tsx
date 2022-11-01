import React from "react";
import { Text, StyleSheet } from "react-native"
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Ionicons, FontAwesome5, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../styles/colors";
import { ChatScreen, AcelerometroScreen, PedometroScreen, MagnetoScreen, GyroscopioScreen, MapScreen, PerfilScreen, SairScreen, CameraScreen, ArquivoScreen, QrCodeScreen, VideoAudioScreen } from "../screens";
import DrawerNavigation from "./drawer.navigation";
import ChatNavigation from "./chat.navigation";

const Drawer = createDrawerNavigator();

export default function HomeRoute() {
    return (
        <Drawer.Navigator
                screenOption={{
                    headerShown: true,
                    headerStyle: { backgroundColor: colors.black},
                    headerTintColor: colors.black,
                    drawerStyle: {
                        backgroundColor: colors.black,
                    },
                    drawerInactiveTintColor: colors.black,
                    drawerActiveTintColor: colors.black,
                }}
            >
            <Drawer.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    drawerLabel: "Perfil",
                    drawerIcon: () => (
                        <Ionicons name="person" size={24} color={colors.black} />
                    )
                }}
            />
            <Drawer.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    drawerLabel: "Chat",
                    drawerIcon: () => (
                        <Ionicons name="chatbubbles" size={24} color={colors.black} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Mapa"
                component={MapScreen}
                options={{
                    drawerLabel: "Mapa",
                    drawerIcon: () => (
                        <Ionicons name="map" size={24} color={colors.black} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Sair"
                component={SairScreen}
                options={{
                    drawerLabel: "Sair",
                    drawerIcon: () => (
                        <Ionicons name="exit" size={24} color={colors.black} />
                    ),
                }}
            />

            <Drawer.Screen
                name="Camera"
                component={CameraScreen}
                options={{
                    drawerLabel: "Camera",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="camera"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />

            <Drawer.Screen
                name="Arquivos"
                component={ArquivoScreen}
                options={{
                    drawerLabel: "Arquivos",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="file-account"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />  

            <Drawer.Screen
                name="QrCode"
                component={QrCodeScreen}
                options={{
                    drawerLabel: "Qrcode",
                    drawerIcon: () => (                            
                        <MaterialCommunityIcons
                            name="qrcode-scan"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            />  

            <Drawer.Screen
                name="ChatNavigation"
                component={ChatNavigation}
                options={{
                    drawerLabel: "Chat",
                    title: "Chat",
                    drawerIcon: () => (
                        <Ionicons name="chatbubbles" size={24} color={colors.black}/>
                    ),
                }}
            />  

            <Drawer.Screen
                name="AudioVideo"
                component={VideoAudioScreen}
                options={{
                    drawerLabel: "Áudio Vídeo",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="video"
                            size={24}
                            color={colors.black}
                        />
                    ),
                }}
            /> 
            <Drawer.Screen
                name="Pedometro"
                component={PedometroScreen}
                options={{
                    drawerLabel: "Pedometro",
                    drawerIcon: () => (
                      <FontAwesome5 
                        name="shoe-prints" 
                        size={24} 
                        color="black" 
                      />
                    ),
                }}
            />  
            <Drawer.Screen
                name="Magneto"
                component={MagnetoScreen}
                options={{
                    drawerLabel: "Magneto",
                    drawerIcon: () => (
                      <FontAwesome5 
                        name="compass" 
                        size={24} 
                        color="black" 
                      />
                  ),
                }}
            />  
            <Drawer.Screen
                name="Gyroscopio"
                component={GyroscopioScreen}
                options={{
                    drawerLabel: "Gyroscopio",
                    drawerIcon: () => (
                      <FontAwesome5 
                        name="balance-scale" 
                        size={24} 
                        color="black" 
                    />
                    ),
                }}
            />  
            <Drawer.Screen
                name="Acelerometro"
                component={AcelerometroScreen}
                options= {{
                    drawerLabel: "Acelerômetro",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="speedometer"
                            size={24}
                            color={colors.black}
                        />
        ),
    }}
/>
        </Drawer.Navigator>
    );
}