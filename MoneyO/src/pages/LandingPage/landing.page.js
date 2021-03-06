import React from "react"
import "./landing.page.css"
import Button from '../../components/Button/Button'
import Image1 from '../../assets/screens/Homepage.png'
import Group from '../../assets/screens/Group.png'
import Vector from '../../assets/waves/finalwave.png'
import Screen2 from '../../assets/screens/Screen1.png'

const LandingPage = () => {
    return(
        <div className="LandingPageHome">
        <div className="LandingPageBody">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
        <span className="HomePageTitle">Welcome to MoneyO</span><br /><br />
        <span className="HomePageBody">MoneyO is a website that allows users to manage their expenses among peers. MoneyO will ensure that you have minimum transactions and can settle up easily with your friends.Start Managing your transactions and enjoy spending time with your friends rather than worrying about settling up.</span><br /> <br />
        <Button large>Get Started</Button>
        <br />
        <br />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
        <img alt="image1" className="homePageImage" src={Image1} />
        </div>
        </div>
        <img alt="vector" className="homePageVector" src={Vector} />
        </div>
        
       
        <div className="HomePageFeatures">
            <span className="HomePageTitle">Features of MoneyO</span>
            <div className="row">
                
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <img alt="screen2" className="FeaturesImage" src={Screen2} /><br />
                <span className="FeaturesTitle">Add expenses easily</span><br />
                <span className="FeaturesTextBody">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</span><br />
            </div>
            
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                <img alt="screen2" className="FeaturesImage" src={Screen2} /><br />
                <span className="FeaturesTitle">Pay friends back</span><br />
                <span className="FeaturesTextBody">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </span>
            </div>
            </div>
            <div className="row">
                
                <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                    <img alt="screen2" className="FeaturesImage" src={Screen2} /><br />
                    <span className="FeaturesTitle">Add expenses easily</span><br />
                    <span className="FeaturesTextBody">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</span><br />
                </div>
                
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    <img alt="screen2" className="FeaturesImage" src={Screen2} /><br />
                    <span className="FeaturesTitle">Pay friends back</span><br />
                    <span className="FeaturesTextBody">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </span>
                </div>
                </div>
        </div>
        <div className="homeBanner">
            <div className="row mb-5" >
                <div className="col-lg-6 col-sm-12">
                <img className="TrackingImage" alt="screen2" src={Group} />
                </div>
                <div className="col-lg-6 col-sm-12">
                    <span className="HomeBannerPageTitle">Start tracking your expenses now!</span><br /><br />
                    <span className="HomeBannerPageBody">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </span><br /><br /><br />
                <Button large className="ButtonLarge">Get Started</Button>
                <br />
                </div>
            </div>
        </div>
        </div>
        )
}


export default LandingPage