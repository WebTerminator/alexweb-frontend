import React from "react";
import Layout from "../components/Layout";
import { Title } from "../components/Style";
import SideBarShare from "../components/SideBarShare";
import { BioWrapper } from "../components/SideBar/style";

const Custom500 = () => { 
    const style = {
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        flexDirection: "column", 
        height: "100%",
        textAlign: "center"
    };

    return (
        <Layout isNavVisible={false} isSocialVisible={false}>
            <div style={style}>    
                <Title>
                    The website is currently under maintenance.
                </Title>
                <BioWrapper>
                <SideBarShare />
                </BioWrapper>
            </div>
        </Layout>
)}

export default Custom500;