import { useParams, useLocation, useNavigate } from "react-router-dom";

const Post = () => {   
    const {id} = useParams();

    // For if you want items from url using ?id=69420
    const {pathname, search, hash, state, key} = useLocation();

    //(used to be useHistory)
    // const navigate = useNavigate() //array of paths the user has been to
    // navigate.push('/') sends user to that path

    // const {path, url} = useRouteMatch();


    return (
        <div>
            <h2>Id is = {id}</h2>
        </div>
    )
}

export default Post;