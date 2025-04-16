import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user=useLoaderData()
    const{name,website}=user
    const params=useParams()
        console.log(params.UserId)
    return (
        <div>
            <h3>user details here</h3>
            <h4>Name:{name}</h4>
            <p>Website:{website}</p>
        </div>
    );
};

export default UserDetails;