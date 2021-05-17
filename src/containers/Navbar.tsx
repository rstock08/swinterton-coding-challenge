import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

interface INavbarProps {

}

export default function Navbar(props: INavbarProps) {
    const location = useLocation();
    const history = useHistory();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const handleTabClick = (event: React.ChangeEvent<{}>, newValue: string) => {
        history.push(`${newValue}`);
        setActiveLink(newValue);
    }

    return (
        <AppBar position="fixed">
            <Tabs value={activeLink} centered onChange={handleTabClick}>
                <Tab label="Challenge Description" value="/" />
                <Tab label="Data Analysis" value="/data" />
            </Tabs>
        </AppBar>
    )
}