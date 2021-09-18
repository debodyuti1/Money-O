import './ProfilePage.css'
import RectangleOne from '../../assets/ProfilePage/RectangleOne.png'
import RectangleTwo from '../../assets/ProfilePage/RectangleTwo.png'
import DefaultImage from '../../assets/ProfilePage/defaultimage.png'
import pen from '../../assets/ProfilePage/pen.png'
import Button from '../../components/Button/Button'


const ProfilePage = () => {

    return(
        <div className="ProfilePageBody">
            <span className="ProfilePageTitle">My Profile</span><br /><br /><br />
           <div className=" row">
            <div className=" col-lg-3">
                <div className="ProfilePageLeft">
            <img className="Pen" src={pen} /><br /><br />
                <img className="ProfilePicture" src={DefaultImage} />
                <div className="BodyProfile">
                    <span className="ProfilePageText">Name</span><br />
                    <input className="inputComponent" />
                </div>
                <div className="BodyProfile">
                    <span className="ProfilePageText">Email</span><br />
                    <input className="inputComponent" />
                </div>
                <div className="BodyProfile">
                    <span className="ProfilePageText">Username</span><br />
                    <input className="inputComponent" />
                </div>
                <div className="BodyProfile">
                    <span className="ProfilePageText">Password</span><br />
                    <input className="inputComponent" />
                </div><br />
                <Button className="profileButton" small>Update</Button>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="ProfilePageRight">
                    <span className="PastTransactionsTitle">Past Transactions</span>
                    <div className="TransactionLogs">
                    <span className="TransactionsName"> Advaita Anand</span>
                    <span className="TransactionsPrice" > -Rs. 100</span>
                </div>
                <div className="TransactionLogs">
                    <span className="TransactionsName"> Advaita Anand</span>
                    <span className="TransactionsPrice" > -Rs. 100</span>
                </div>
                <div className="TransactionLogs">
                    <span className="TransactionsName"> Advaita Anand</span>
                    <span className="TransactionsPrice" > -Rs. 100</span>
                </div>
                </div>
            </div>
           </div>
        </div>
    )
}

export default ProfilePage