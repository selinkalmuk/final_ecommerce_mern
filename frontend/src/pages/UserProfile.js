import "../assets/styles/userProfile.css";
import ProductCard from "../components/ProductCard";
import WorkshopCard from "../components/WorkshopCard";
const UserProfile = () =>{



    return (
        <div className="user-profile-page">
            <div className="user-profile-header">
            <div className="header-box">
                <div className="left">
                <img className="user-profile-image" src="https://i.pinimg.com/736x/99/b8/a4/99b8a4c0316b840f0453f6d473f3f8c8.jpg" alt="" />
                <h3 className="username"> John Doe</h3>
                </div>
                <div className="follow">
                <div className="follow-button">Follow</div>
                <div className="followers">589 followers</div>
                </div>
                </div>
                <div className="social-links">
                    <a href="#">instagram</a>
                    <a href="#">twitter</a>
                    <a href="#">website</a>
                </div>
               
            </div> 
            <div className="user-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet libero modi illum pariatur, repellendus porro illo blanditiis, laborum architecto eum fugit? Vel dolore porro commodi similique perspiciatis fugiat a consequuntur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea, voluptatibus molestiae repellat fugiat ducimus possimus aspernatur quod totam. Et exercitationem necessitatibus quidem laudantium amet aut. Debitis enim in recusandae?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fuga necessitatibus temporibus? Quia alias facilis soluta explicabo deleniti iste ipsa, voluptas nemo eligendi delectus, sed quaerat? Illo atque est tenetur?  
                </div>
                <hr />
            <div className="section-box">
                <p>Artworks</p>
                <p>Workshops</p>
                <p>Portfolio</p>
            </div>
            <h2>Artworks</h2>
            <div className="product-container">
            
            <ProductCard 
                imgsrc="https://i.pinimg.com/736x/5e/86/b9/5e86b952ae661d28474f857ab798246d.jpg" 
                name="Artwork Name" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                artist="John Doe"
                    price="$49.99"/> 
                <ProductCard 
                imgsrc="https://i.pinimg.com/564x/0e/b5/b6/0eb5b6b243b9af1ef91538f73842e5a4.jpg" 
                name="Artwork Name" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                artist="Kate Done"
                price="$79.99"/> 
                <ProductCard 
                imgsrc="https://i.pinimg.com/236x/18/2d/64/182d64b6814660221e8714524019edea.jpg" 
                name="Artwork Name" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                artist="Nova Alf"
                price="$123.99"/> 
                
                <ProductCard 
                imgsrc="https://i.pinimg.com/474x/cf/52/2d/cf522d5c488f825d8cb6b047efb7dac8.jpg" 
                name="Artwork Name" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                artist="Daren Fire"
                price="$145.99"/> 
            </div>
            <h2>Workshops</h2>
            <div className="workshops">
            
            <WorkshopCard 
                    imgsrc="https://i.pinimg.com/564x/0e/b5/b6/0eb5b6b243b9af1ef91538f73842e5a4.jpg"
                    title = "Workshop Name" 
                    category="Lorem ipsum dolor" 
                    instructor="John Doe" 
                    location="İstanbul" 
                    date="20.11.2024" 
                    price="$15.00"

                />
             <WorkshopCard 
                    imgsrc="https://i.pinimg.com/564x/0e/b5/b6/0eb5b6b243b9af1ef91538f73842e5a4.jpg"
                    title = "Workshop Name" 
                    category="Lorem ipsum dolor" 
                    instructor="John Doe" 
                    location="İstanbul" 
                    date="20.11.2024" 
                    price="$15.00"

                />
            </div>
        </div>
    );
};

export default UserProfile;