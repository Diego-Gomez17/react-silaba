import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ReactCarousel }
    from "react-responsive-carousel";

import "./styles.css"
import home from "./assets/home.png"
import slides from "./slides"

import {FC, useState, useEffect} from "react";


export const Carousel = ()=>{
    const[selectedItem, setSelectedItem]=
     useState<number>(0);
     
    const handleOnChange=(index:number)=>
     setSelectedItem(index);

    type NavProps ={
        owo: number;
    };
    
    const Nav : FC<NavProps>=
    (owo)=>(
        <nav className="nav">
            {slides.map((slide, index)=>(
                <button
                    className={slide.name}
                    key={slide.color}
                    onClick={ ()=> handleOnChange(index)}
                    >
                        <span>{slide.icon}</span> 
                    </button>
            ))}
        </nav>
    );
    
    return(
        <>
            <Nav owo={selectedItem}/>
            <ReactCarousel
                infiniteLoop
                axis="vertical"
                className="react-carousel"
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                swipeable={true}
                emulateTouch={true}
                selectedItem={selectedItem}
                onChange={handleOnChange}
            >
                {slides.map((slide)=>(
                    <div
                        style={{
                            background: slide.color
                        }}
                    >
                        {slide.page}
                    </div>
                ))}
            </ReactCarousel>
        </>
     );
};