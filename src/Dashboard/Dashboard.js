import React from "react";
import classes from './Dashboard.module.css';


const Dashboard = () => {
    return (
        <div className={classes.DashboardContainer}>
            <aside className={classes.AsideContainer}>
                <div className={classes.Logo}>
                    Logo
                </div>
                <div className={classes.ButtonContainer}>
                    <button className={classes.AsideButton}>Create New Video <i className="fa-solid fa-plus"></i></button>
                    <button className={classes.AsideButton}>Home</button>
                    <button className={classes.AsideButton}>Template</button>
                    <button className={classes.AsideButton}>All Videos</button>
                </div>
            </aside>
            <div className={classes.MainContainer}>
                <div className={classes.Header}>
                    <div><i class="fa-solid fa-magnifying-glass" style={{position: "absolute", top: "26px", left: "26px", color: "#ccc"}}></i><input type="text" placeholder="          Search" className={classes.SearchBar} /></div>
                    <div className={classes.ProfileIcon}><i class="fa-solid fa-user" style={{color: "white", fontSize: "50px"}}></i></div>
                </div>
                <div className={classes.ButtonRow}>
                    <div>
                        <button className={classes.MainButton}><i class="fa-solid fa-scissors"></i>Create Project</button>
                        <button className={classes.MainButton}><i class="fa-solid fa-video"></i>Record Video</button>
                    </div>
                    <a href="https://www.w3schools.com">All Videos{' >'}</a>
                </div>
                <h2 style={{fontSize: "24px", fontWeight: "400"}}>Recent Videos</h2>
                <div className={classes.VideoCardRow}>
                    <div>
                    <iframe width="400" height="280" src="https://www.youtube.com/embed/1tEZR9WBLXU" title="CGI 3D Animated Short Film HD: &quot;Life is Great&quot; by Lightberg Studios | CGMeetup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <p>Project Name1</p>
                    </div>
                    <div>
                    <iframe width="400" height="280" src="https://www.youtube.com/embed/1tEZR9WBLXU" title="CGI 3D Animated Short Film HD: &quot;Life is Great&quot; by Lightberg Studios | CGMeetup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p>Project Name2</p>
                    </div>
                    <div>
                    <iframe width="400" height="280" src="https://www.youtube.com/embed/1tEZR9WBLXU" title="CGI 3D Animated Short Film HD: &quot;Life is Great&quot; by Lightberg Studios | CGMeetup" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <p>Project Name3</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Dashboard;