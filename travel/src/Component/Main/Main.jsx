import React,{useEffect} from 'react'
import "./Main.css"
import Data from './data'
import { FaLocationDot,  FaClipboardCheck  } from "react-icons/fa6";
import Aos from "aos";
import 'aos/dist/aos.css'

export const Main = () => { 
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

  return (
    <section className='main container section' >
        <div className='sectionTitle' data-aos="fade-right">
            <h3 className='title'>
                Most Visited destinations
            </h3>
        </div>
        
        <div className='sectionContent grid'>
            {Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
               return(
                <div key={id} className='singleDiv' data-aos="fade-up">
                    <div className='imageDiv'>
                        <img src={`./Images/${imgSrc}.jpg`} alt='hello' />
                    </div>
                    <div className='cardInfo'>
                        <h4 className='destTitle'>{destTitle}</h4>
                        <span className='continent flex'>
                            <FaLocationDot className='icon'/>
                            <span className='name'>{location}</span>
                        </span>
                        <div className='fees flex'>
                            <div className='grade'>
                                <span>{grade}<small>+1</small></span>
                            </div>
                            <div className='price'>
                                    <span>{fees}</span>
                            </div>
                        </div>

                        <div className='description'>
                            <p>{description}</p>
                        </div>
                        <button className='btn'>
                        DETAILS
                        <FaClipboardCheck className='icon' />
                    </button>
                    </div>

                    

                </div>
               )


            })}
        </div>
    </section>
  )
}
