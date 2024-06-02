import React, {useEffect,useState} from 'react'
import "./Home.css"
import video from "../../Assets/videoHome.mp4";
import { CiLocationOn } from "react-icons/ci";
import { FaFilter,FaInstagram,FaTripadvisor,FaListUl    } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { TbApps } from "react-icons/tb";
import citiesStartingWithA from './cities';
import Aos from "aos";
import 'aos/dist/aos.css'
export const Home = () => {
    //for scroll animation

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
const [findCity,setFindCity]=useState('');
const [price,setPrice]=useState(3000);

const handleChange=(e)=>{
    setFindCity(e.target.value);
    console.log(findCity);
}
 const selectCity=({item})=>{
   setFindCity(item);
 }

 const handlePriceChange=(e)=>{
    setPrice(e.target.value);
 }

  return (
    <section className='home'>
        <div className='overlay'></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
        <div className='homeContent container'>
            <div className='textDiv'>
                <span className='smallText' data-aos="fade-up">
                    Our packages
                </span>
                <h1 data-aos="fade-up" className='homeTitle'>
                    Search your Holiday
                </h1>
             </div>

            <div className="cardDiv grid" data-aos="fade-up">
                <div className='destinationInput'>
                    <label htmlFor='city'>Search City:</label>
                    <div className='input flex'>
                        <input type='text' placeholder='Enter name here' onChange={handleChange} value={findCity}></input>
                        <CiLocationOn className='icon'/>
                    </div>
                    <div className={findCity?'dropdown active':'dropdown'}>
                        {citiesStartingWithA.filter((item)=>{
                            let findcity=findCity.toLowerCase();
                            item=item.toLowerCase();
                            return item.startsWith(findcity) && item!==findcity && findCity;
                        })
                        .map((item)=>{
                            return <p onClick={()=>selectCity({item})} className='dropdownItem'>{item}</p>
                        })}
                    </div>
                </div>

                <div className='dateInput'>
                    <label htmlFor='date'>Select your date:</label>
                    <div className='input flex'>
                        <input type='date'></input>
                    </div>
                </div>

                <div className='priceInput'>
                   
                    <div className='label_total flex'>
                       <label htmlFor='price'>Max price:</label>
                       <h3 className='total'>{price}Rs</h3>
                    </div>
                    <div className='input flex'>
                        <input type='range' min="3000" max="20000" onChange={handlePriceChange}></input>
                    </div>
                </div>

                <div className='searchOptions flex'>
                    <FaFilter className='icon'/>
                    <span>SEARCH</span>
                </div>
            </div>

            <div className='homeFooteIcons flex' data-aos="fade-up">
                <div className='rightIcons'>
                    <FiFacebook className='icon'/>
                    <FaInstagram  className='icon'/>
                    <FaTripadvisor  className='icon'/>
                </div>
                <div className='leftIcons'>
                    <FaListUl   className='icon'/>
                    <TbApps   className='icon'/>
                </div>

            </div>
            
        </div>
    </section>
  )
}
