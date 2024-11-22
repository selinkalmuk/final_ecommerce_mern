import '../assets/styles/artistInfo.css';
const ArtistInfo = ({artistId}) =>{

return(
    <div className="artist-info">
        <div className="artist-header">
            <div className="profile">
            <img className='avatar' src="https://i.pinimg.com/564x/0e/b5/b6/0eb5b6b243b9af1ef91538f73842e5a4.jpg" alt="" />
            <div className="artist-name">John Doe</div>
            </div>
           
            <div className="follow-button">Follow</div>
        </div>
        <div className="artist-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet libero modi illum pariatur, repellendus porro illo blanditiis, laborum architecto eum fugit? Vel dolore porro commodi similique perspiciatis fugiat a consequuntur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea, voluptatibus molestiae repellat fugiat ducimus possimus aspernatur quod totam. Et exercitationem necessitatibus quidem laudantium amet aut. Debitis enim in recusandae?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fuga necessitatibus temporibus? Quia alias facilis soluta explicabo deleniti iste ipsa, voluptas nemo eligendi delectus, sed quaerat? Illo atque est tenetur?  
        </div>
    </div>
)


}

export default ArtistInfo;