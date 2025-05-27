import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopicListItem from "./TopicListItem";
import useFetch from "./useFetch";
import Loader from "./Loader";

const TopicList = () => {
    const params = useParams();
    const [allTopics, setAllTopics] = useState([]);
    const { post, loading } = useFetch("https://uztechtips.onrender.com/api/v1/");

    useEffect(() => {
        post("getAppTopics", {appName : params.appName}).then(data => setAllTopics(data));
    }, [params]);
    

    return <>
        <div className="sidebar">
        {allTopics && allTopics.map(topics => {
            return <TopicListItem key={topics.id} topicName={topics.topicName}/>
        })}
        {loading && <div className="sidebar-item"><Loader/></div>}
        </div>
    </>
}

export default TopicList;