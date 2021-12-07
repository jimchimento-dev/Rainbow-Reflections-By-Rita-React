import React from 'react';
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData';
import { Button } from 'reactstrap'


const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 m-5">
                        <h1>Explore Your Inner Self...</h1>
                        <h2 className="mt-3">Welcome to Rainbow Reflections By Rita</h2>
                    </div>
                    <div className="col-sm-3">
                        <Button className="homeButtons m-3 px-5">Login</Button>
                        <Button className="homeButtons m-3">Book A Reading</Button>
                    </div>
                </div>
                <ImageSlider slides={SliderData} />
                <section>
                    <div className="row row-content align-items-center">
                        <div className="col-sm-4 order-sm-last col-md-3">
                            <h2 className="text-sm-right">Inspirational Gifts</h2>
                        </div>
                        <div className="col">
                            <div className="media">
                                <img className="rowImg d-flex mr-5 img-thumbnail" src="assets/images/Inspirtational Gifts.jpeg"
                                    alt="Inspirtational Gifts" />
                                <div className="media-body align-self-center">
                                    <h3 className="d-none d-md-block">Refresh yourself in a better way</h3>
                                    <p className="d-none d-md-block">Surround yourself with positivity, view our uplifting
                                    gift
                                    items today!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row-content align-items-center">
                        <div className="col-sm-4 col-md-3">
                            <h2>Gemstones &amp; Crystals</h2>
                        </div>
                        <div className="col">
                            <div className="media">
                                <div className="media-body align-self-center">
                                    <h3 className="d-none d-md-block">Enlighten your life.</h3>
                                    <p className="d-none d-md-block">Give your life balance with our exquisite selection of
                                    gemstones.</p>
                                </div>
                                <img className="rowImg d-flex ml-3 img-thumbnail" src="assets/images/Gemstones and Crystals.jpeg"
                                    alt="Gemstones &amp; Crystals" />
                            </div>
                        </div>
                    </div>

                    <div className="row row-content align-items-center">
                        <div className="col-sm-4 order-sm-last col-md-3">
                            <h2 className="text-sm-right">Mind, Body &amp; Spirit</h2>
                        </div>
                        <div className="col">
                            <div className="media">
                                <img className="rowImg d-flex mr-5 img-thumbnail" src="assets/images/Mind Body Spirit.jpeg"
                                    alt="Mind, Body &amp; Spirit" />
                                <div className="media-body align-self-center">
                                    <h3 className="d-none d-md-block">Life is beautiful, feel it.</h3>
                                    <p className="d-none d-md-block">Create a better understanding with yourself.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;