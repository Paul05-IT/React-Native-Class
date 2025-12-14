import { Tabs } from "expo-router";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 64,
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                    backgroundColor: '#fff',
                    shadowColor: '#000',
                    shadowOpacity: 0.06,
                    shadowRadius: 8,
                    elevation: 8,
                },
            }}
        >
            <Tabs.Screen
                name="HomeScreen"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("../images/logo.png")}
                            style={{ width: 32, height: 32, opacity: focused ? 1 : 0.5 }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="CartScreen"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("../images/cart.png")}
                            style={{ width: 28, height: 28, opacity: focused ? 1 : 0.5 }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="AccountScreen"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("../images/Account.png")}
                            style={{ width: 28, height: 28, opacity: focused ? 1 : 0.5 }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="ProductScreen"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("../images/ProductScreen.png")}
                            style={{ width: 28, height: 28, opacity: focused ? 1 : 0.5 }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Menu"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
                            <Image
                                source={require("../images/menu.png")}
                                style={{ width: 32, height: 32, opacity: focused ? 1 : 0.5 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    ),
                }}
                listeners={{
                    tabPress: e => {
                        e.preventDefault();
                        setMenuOpen(!menuOpen);
                    },
                }}
            />
            {/* Optionally, render a custom menu overlay when menuOpen is true */}
            {menuOpen && (
                <View style={{ position: 'absolute', bottom: 80, left: 0, right: 0, backgroundColor: '#fff', borderRadius: 16, margin: 16, padding: 24, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 12, elevation: 12, zIndex: 100 }}>
                    {/* Add your menu items here */}
                </View>
            )}
        </Tabs>
    );
}