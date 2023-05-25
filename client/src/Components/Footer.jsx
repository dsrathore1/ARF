import React from 'react';
import "../Styles/FooterStyle.css";

const Footer = () => {
    return (
        <>
            <div className='mainFooterContainer'>
                <div className='footerContainer'>
                    <div className='aboutPortfolio footerInnerContainer'>
                        <h2 className='portfolioHeading'>Automating Resp<span className='portSpan'>onse Force</span></h2>
                        <p className='para1'>Thank you for visiting our website. Connect with us over social media handle.</p>
                        <br />
                        <p className='para2'> Keep Rising 🚀. Connect with us over live chat!</p>
                    </div>
                    <div className='quickLink footerInnerContainer'>
                        <h2 className='quickLinksHeading'>Quick Links</h2>
                        <ol className='quickLinkList'>
                            <a href='/'>
                                <li className='quickLinks'><span className='nameEmoji'>🏠</span> Home</li>
                            </a>
                            <a href='/location'>
                                <li className='quickLinks'><span className='nameEmoji'>📍</span> Location</li>
                            </a>
                            <a href='/members'>
                                <li className='quickLinks'><span className='nameEmoji'>🤹‍♂️</span> Members</li>
                            </a>
                            <a href='/contactUs'>
                                <li className='quickLinks'><span className='nameEmoji'>🤙</span>  Contact Us</li>
                            </a>
                        </ol>
                    </div>
                    <div className='contactInfos footerInnerContainer'>
                        <h2 className='contactInfoHeading'>Contact Info</h2>
                        <ol className='contactInfoList'>
                            <li className='contactInfo'><span className='nameEmoji'>📞</span>+91 635177***</li>
                            <li className='contactInfo'><span className='nameEmoji'>📧</span>dsrathorebsw1234@gmail.com</li>
                            <li className='contactInfo'><span className='nameEmoji'>🛣</span>	3-6-307, Hyderguda Rd, Avanti Nagar, Basheer Bagh</li>
                        </ol>
                    </div>
                </div>
                <h1 className='name-King'>ARF</h1>
                <span className='creditSpan'>Designed With 💓 by <span className='nameSpan'>Digpal Singh Rathore</span></span>
            </div>
        </>
    )
}

export default Footer