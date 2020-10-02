import React, { useState, useEffect } from 'react';
import { Parallax, Background } from 'react-parallax';
//import { ParallaxProvider, ParallaxBanner, Parallax  } from 'react-scroll-parallax';
import logo from '../logo.svg';

export default function ParallaxSA() {
    const [offSetY, setOffSetY] = useState(0);
    const handleScroll = () => setOffSetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <div>
            {/* -----basic config-----*/}
            <Parallax
                blur={10}
                bgImage={require('path/to/image.jpg')}
                bgImageAlt="the cat"
                strength={200}
            >
                Put some text content here - even an empty div with fixed dimensions to have a height
                for the parallax.
                <div style={{ height: '200px' }} />
            </Parallax>
    
            {/* -----dynamic blur-----*/}
            <Parallax
                blur={{ min: -15, max: 15 }}
                bgImage={require('path/to/another/image.jpg')}
                bgImageAlt="the dog"
                strength={-200}
            >
                Blur transition from min to max
                <div style={{ height: '200px' }} />
            </Parallax>
    
            {/* -----custom background element-----*/}
            <Parallax strength={300}>
                <div>Use the background component for custom elements</div>
                <Background className="custom-bg">
                    <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
                </Background>
            </Parallax>
    
            {/* -----renderProp: "renderLayer"-----*/}
            <Parallax
                bgImage={'/path/to/another/image'}
                strength={400}
                renderLayer={percentage => (
                    <div
                        style={{
                            position: 'absolute',
                            background: `rgba(255, 125, 0, ${percentage * 1})`,
                            left: '50%',
                            top: '50%',
                            width: percentage * 500,
                            height: percentage * 500,
                        }}
                    />
                )}
            >
                <p>... Content</p>
            </Parallax>        
        </div>
    )
}
