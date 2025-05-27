import { useParams, NavLink } from "react-router-dom";
const TopicListItem = (props) => {

    const params = useParams();

    return <>
        
        <NavLink className={({isActive}) => (isActive ? "sidebar-item sidebar-item-active" : "sidebar-item")} to={`/${params.appName}/${props.topicName}`}>
            {props.topicName}
        </NavLink>
        
    </>
}

export default TopicListItem;