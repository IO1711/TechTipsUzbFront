import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import useFetch from "./useFetch";
import Loader from "./Loader";



const Menu = () => {
    const [allApps, setAllApps] = useState([]);
    const { get, loading } = useFetch("https://uztechtips.onrender.com/api/v1/");

    useEffect(() => {get("getApps").then(data => setAllApps(data));},[]);

    return <>
        <div className="menu-bar">
        {allApps && allApps.map(app => <MenuItem key={app.id} appName={app.appName}/>)}
        {loading && <Loader/>}
        </div>
    </>
}

export default Menu;