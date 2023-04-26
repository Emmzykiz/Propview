import { useState } from "react";
import ProfileTab from "../widgets/tabs/ProfileTab.jsx";
import HistoryTab from "../widgets/tabs/HistoryTab.jsx";

function Profile(){
    const [currentTab, changeTab] = useState("profile");

    function changeCurrentTab(tab){
        changeTab(tab);
    }

    return <div className="profile-container">
        <div className="profile-tab d-flex w-100">
            <a onClick={()=>{changeCurrentTab("profile")}} className={currentTab == "profile" ? "tab-active" : null}>Home</a>
            <a onClick={()=>{changeCurrentTab("history")}} className={currentTab == "history" ? "tab-active" : null}>History</a>
        </div>
        {currentTab == "profile" ? <ProfileTab /> : <HistoryTab />}
    </div>
}

export default Profile; 