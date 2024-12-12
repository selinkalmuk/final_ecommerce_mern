import { useEffect, useState } from "react";
import "../assets/styles/userProfile.css";
import ProductCard from "../components/ProductCard";
import WorkshopCard from "../components/WorkshopCard";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebook, FaBehance } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import EditTextField from "../components/EditTextField";

const Profile = () =>{
    const[user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const storedUser = localStorage.getItem('user'); 
        if(storedUser){
            setUser(JSON.parse(storedUser));
            setLoading(false);
        }
        else{
            setLoading(false);
        }
        
        

    },[]);

    if (loading) {
        return <p>Loading...</p>; 
    }

    const handleLogout = ()=>{
        localStorage.clear();
        navigate('/login');
    }

    const handleEdit=()=>{
        console.log("handle edit is clicked");
       
        isEditing?setIsEditing(false): setIsEditing(true);
        
        
    }


    return (
        <div className="user-profile-page">
            <div className="user-profile-header">
            <div className="header-box">
                <div className="left">
                <img className="user-profile-image" src="https://i.pinimg.com/736x/99/b8/a4/99b8a4c0316b840f0453f6d473f3f8c8.jpg" alt="" />
                <h3 className="username">{user? user.username: "UNDEFINED" }</h3>
                <h3 className="username">{user? user.email: "UNDEFINED" }</h3>
                </div>
                <div className="follow">
                <div className="follow-button" onClick={handleLogout}>Logout</div>
                <div className="followers">589 followers</div>
                </div>
                </div>
                <div className="social-links">
                    <a className="link" href="#"><FaInstagram size={25} /></a>
                    <a className="link" href="#"><FaFacebook size={25} /></a>
                    <a className="link" href="#"><FaXTwitter size={25} /></a>
                    <a className="link" href="#"><FaBehance size={25} /></a>
                    <a className="link" href="#"><FaLinkedin size={25} /></a>
                </div>
               
            </div> 
            
            <div className="user-description">
            <div 
            style={{ display: "flex", justifyContent: "flex-end"}}>
            <MdEdit onClick={handleEdit} size={30}/>
            
            </div>
            {isEditing && <EditTextField />}
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet libero modi illum pariatur, repellendus porro illo blanditiis, laborum architecto eum fugit? Vel dolore porro commodi similique perspiciatis fugiat a consequuntur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea, voluptatibus molestiae repellat fugiat ducimus possimus aspernatur quod totam. Et exercitationem necessitatibus quidem laudantium amet aut. Debitis enim in recusandae?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fuga necessitatibus temporibus? Quia alias facilis soluta explicabo deleniti iste ipsa, voluptas nemo eligendi delectus, sed quaerat? Illo atque est tenetur?
            </div>
                </div>
                <hr />
            <div className="section-box">
                <p>Artworks</p>
                <p>Workshops</p>
                <p>Portfolio</p>
            </div>
        
        
        </div>
    );
};

export default Profile;