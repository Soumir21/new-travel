import React,{useEffect} from 'react'
import "./Footer.css"
import videoFooter from "../../Assets/videoFooter.mp4"
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter,FaYoutube, FaInstagram,FaTripadvisor,FaChevronRight   } from "react-icons/fa";
import Aos from "aos";
import 'aos/dist/aos.css'
export const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
   <section className='footer'>
        <div className='videoDiv'>
          <video src={videoFooter} loop autoPlay muted type="video/mp4"></video>
        </div>

        <div className='secContent container'>
          <div className='contactDiv flex'>
            <div className='text' data-aos="fade-up">
              <small>KEEP IN TOUCH</small>
              <h2>TRAVEL WITH US</h2>
            </div>

            <div className='inputDiv flex'>
              <input type='text' placeholder='Enter email Address' data-aos="fade-up"></input>
              <button data-aos="fade-up" className='btn flex' type='submit'>
                  SEND<FiSend className='icon'/>
              </button>
            </div>
          </div>

          <div className='footerCard flex'>
                <div className='footerIntro flex'>
                  <div className='logoDiv'>
                    <a href='#' className='logo flex'><MdOutlineTravelExplore className='icon'/>TRAVEL</a>
                 </div>
                <div className='footerParagraph' data-aos="fade-up">
                      Traveling opens doors to new cultures, 
                      enriching the soul with diverse experiences and 
                      broadening perspectives. It is a journey that transcends 
                      physical boundaries, weaving a tapestry of memories that linger
                      long after the adventure ends.
                </div>
                <div className='footerSocial flex' data-aos="fade-up">
                    <FaTwitter className='icon' />
                    <FaYoutube className='icon' />
                    <FaInstagram  className='icon' />
                    <FaTripadvisor  className='icon' />
                </div>
                <div className='footerLinks grid'>

                  {/* Group 1 */}
                    <div className='linkGroup' data-aos="fade-up" data-aos-duration="3000">
                      <span className='groupTitle'>
                        OUR AGENCY
                      </span>
                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            SERVICES
                        
                      </li>

                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            INSURANCE
                          
                      </li>

                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            AGENCY
                          
                      </li>

                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            TOURISM

                      </li>

                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            PAYMENT
                        
                      </li>
                    </div>
                  {/* Group 2 */}
                    <div className='linkGroup' data-aos="fade-up" data-aos-duration="3000">
                      <span className='groupTitle'>
                        PARTNERS
                      </span>
                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            Bookings
                        
                      </li>

                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            Rentcars
                          
                      </li>

                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            Hostelworld
                          
                      </li>

                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            Trivago

                      </li>

                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            TripAdvisor
                        
                      </li>
                    </div>
                  {/* Group 3 */}
                    <div className='linkGroup' data-aos="fade-up" data-aos-duration="3000">
                      <span className='groupTitle'>
                        LAST MINUTE
                      </span>
                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            London
                        
                      </li>

                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            Californioa
                          
                      </li>

                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            Indonesia
                          
                      </li>

                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            India

                      </li>

                      <li className='footerList flex'>
                          <FaChevronRight  className='icon'/>
                            Europe
                        
                      </li>
                    </div>
                <div className='footerDiv flex'>
                  <small> BEST TRAVEL WEBSITE THEME</small>
                  <small> COPYRIGHT RESERVED- duARah 2024</small>
                </div>
            
            </div>

            </div>
          </div>

        
          
        </div>
   </section>
  )
}
