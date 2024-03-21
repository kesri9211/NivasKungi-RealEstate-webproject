import React from 'react'
import './contact.css'
import {MdCall} from 'react-icons/md' //importing all icons
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2' //hi directory
function contact() {
  return (
    <section className='c-wrapper'>
        <div className='paddings innerWidth flexCenter c-container'>
    {/* left side */}
    <div className='flexColStart c-left '>
        <scan className="orangeText">Our contacts</scan>
        <scan className="primaryText">Easy to contact</scan>
        <scan className="secondaryText">We always ready to help by providing the best services beleive a good blace to live can make your life better</scan>

        <div className='flexColStart contactModes'>
            {/*first row -2 cards */}
            <div className='flexStart row'>

                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                             <MdCall size={25}/>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>Call</span>
                            <span className='secondaryText'>+91 9839415341</span>
                        </div>
                    </div>
                    <div className='flexCenter button'>Call Now</div>
                </div>
                {/* second mode */}
                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                             <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>Chat</span>
                            <span className='secondaryText'>+91 9839415341</span>
                        </div>
                    </div>
                    <div className='flexCenter button'>Chat Now</div>
                </div>
            </div>
            {/* second row -2 card */}
            <div className='flexStart row'>

                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                             <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>Video Call</span>
                            <span className='secondaryText'>+91 9839415341</span>
                        </div>
                    </div>
                    <div className='flexCenter button'>Video Call here</div>
                </div>
                {/* second mode */}
                <div className='flexColCenter mode'>
                    <div className='flexStart'>
                        <div className='flexCenter icon'>
                             <BsFillChatDotsFill size={25}/>
                        </div>
                        <div className='flexColStart detail'>
                            <span className='primaryText'>Message</span>
                            <span className='secondaryText'>+91 9839415341</span>
                        </div>
                    </div>
                    <div className='flexCenter button'>Message Now</div>
                </div>
            </div>
        </div>
    </div>

    {/* right side */}
    <div className='c-right'>
        <div className='image-container'>
            <img src='./contact.jpg' alt=""/>
        </div>
    </div>
        </div>
    </section>
  )
}

export default contact
