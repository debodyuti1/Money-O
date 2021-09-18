import './Footer.css'
import circle from '../../assets/circle.png'

const Footer = () => {

    return(
        <div className="FooterContainer">
            <span className="FooterTitle" >MoneyO</span><br/>
            <span className="FooterSubTitle">MoneyO Copyright 2021</span><br />
           <div className="socialMedia">
           <img alt="circle" className="cicleImg" src={circle} /> <img alt="circle" className="cicleImg" src={circle} /> <img alt="circle" className="cicleImg" src={circle} /> <img alt="circle" className="cicleImg" src={circle} /> <img alt="circle" className="cicleImg" src={circle} /> 
           </div><br/>
            <span className="MadeWith">Made with ♡ by Team Unfinished</span>
        </div>
    )
}

export default Footer