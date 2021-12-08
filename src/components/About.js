import React from 'react';

const About = () => {

    return (
        <>
            <div className="container">
                <div className="row mt-3">
                    <div className="col">
                        <img src="/assets/images/Rainbow Reflections Store Outside New (1).jpg" className="img-fluid mx-auto"
                            id="outsideImg" alt="Rainbow Reflections Outside" />
                    </div>
                    <div className="col">
                        <h3 className="text-center aboutUs">Our Mission</h3>
                        <p className="text-center aboutUs"> We strive to put a smile on the face of all of our customers to help
                        them
                        achieve a positive mindset. By doing so, we hope to empower them to live life to their fullest
                        potential. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, id ab quas modi
                        minima vel tenetur explicabo, in nostrum totam quidem dignissimos, voluptatem earum commodi aut
                        necessitatibus exercitationem vitae at!
                        Quos, numquam nobis. Nobis in perferendis atque odit, sit vel totam laboriosam fuga magni
                        accusamus velit rem aliquam labore voluptatibus, nulla asperiores at iste aut? Iure id
                            repudiandae nulla distinctio!</p>
                        <p>Our mission is to empower our customers with the philosophy of metaphysics
                            and how they can take control of their life. By doing so,</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card mt-5 p-2">
                            <blockquote className="blockquote card-body">
                                <p className="mb-0">"I believe we all journey through life with different goals and dreams;
                                sometimes not even knowing why we are drawn to certain places or things. We are all
                                    individuals, but a part of something bigger."</p>
                                <footer className="blockquote-footer mt-3 quoteFooter">Rita Chimento,
                                    <cite title="Source Title">Rainbow Reflections By Rita</cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                        <div className="card mt-4">
                            <div className="card-header">
                                <h3 className="text-center aboutUs">Rita's Credentials and Certifications</h3>
                            </div>
                            <div className="card-body">
                                <ul className="list-unstyled">
                                    <li>2010: Levels I, II and Master Reiki Certification at Huna Healing Center - Denville,
                                    NJ.
                                    </li>
                                    <br />
                                    <li>2010 - 2015: Psychic devleopment classes at various metaphysical locations.</li>
                                    <br />
                                    <li>2015: Ordained Minister through International Metaphysical Ministry.</li>
                                    <br />
                                    <li>2015: Bachelor of Metaphysical Science from University of Metaphysics.</li>
                                    <br />
                                    <li>2015: Practitioners Diploma for Metaphysical Practitioner.</li>
                                    <br />
                                    <li>2015: Beginning, Intermediate and Advanced Mediumship classes with Janet Nohavec
                                    from
                                    the
                                        Journey Within - Pompton Lakes, NJ.</li>
                                    <br />
                                    <li>2015-2017: Various courses and circles at Institute for Spiritual Development -
                                    Sparta,
                                    NJ.
                                    Including mediumship, tarot, psychic development, etc. Instructors included Karen
                                    Slember,
                                        Rev. Susan Cahill and Anna Marie Ludwig.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-self-center">
                        <div className="col">
                            <img src="/assets/images/Rainbow Reflections Store Inside (1).jpg" class="img-fluid mx-auto" id="insideImg"
                                alt="Rainbow Reflections Outside" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;