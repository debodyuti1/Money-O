  
import './ProfilePage.css'
import RectangleOne from '../../assets/ProfilePage/RectangleOne.png'
import RectangleTwo from '../../assets/ProfilePage/RectangleTwo.png'
import DefaultImage from '../../assets/ProfilePage/defaultimage.png'


const ProfilePage = () => {

    return(
        <div className="ProfilePageBody">
            <span className="ProfilePageTitle">My Profile</span><br />
           <div className=" row">
            <div className=" col-lg-6">
                <div className="ProfilePageLeft">
                <img alt= "defaultImage" className="ProfilePicture" src={DefaultImage} />
                </div>
            </div>
           </div>
        </div>
    )
}

export default ProfilePage