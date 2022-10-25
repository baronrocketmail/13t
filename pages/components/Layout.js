import NavTabs from "./NavTabs.js"
import FloatingActionButtons from "./FloatingActionButtons";
import {colors, createTheme, ThemeProvider} from "@mui/material";
import {createContext, useState} from "react";

export const TabValueContext = createContext(0)

export default function Layout({ children }){
    const [tabValue, setTabValue] = useState(0)
    return(
        <>
        <TabValueContext.Provider value={{tabValue, setTabValue}}>
        <NavTabs/>
        <FloatingActionButtons/>
        {children }
        </TabValueContext.Provider>
        </>
    )
}

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: colors.orange[900],
        },
        secondary: {
            main: colors.orange[900],
        },
        text: {
            secondary: colors.orange[900],
        },
    },
    typography: {
        fontFamily: ["Goldman Sans"]
    }
});