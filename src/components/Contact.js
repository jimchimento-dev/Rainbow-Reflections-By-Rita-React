import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="row row-content">
                    <div className="col text-center">
                        <h4 className="ourAddress">Our Address</h4>
                        <address className="ourAddress">
                            75 NJ-15 Building I-5<br />
                    Lafayette, NJ<br />
                    07848
                </address>
                        <div className="col">
                            <a role="button" class="btn btn-link contactBtnPage align-self-center" href="tel:+19733003377"><i
                                class="fa fa-phone"></i>
                        1-973-300-3377<br /></a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div clasNames="col d-flex justify-content-center align-items-center mb-3">
                        <h2>Or email us below!</h2>
                        <img className="ml-3" src="/assets/images/contact-image.png" alt="Contact Message" />
                    </div>
                    <div className="col-md-10">
                        <form>
                            <div className="form-group row">
                                <label for="firstName" className="col-md-2 col-form-label">First Name</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" id="firstName" name="firstName"
                                        placeholder="First Name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="lastName" className="col-md-2 col-form-label">Last Name</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" id="lastName" name="lastName"
                                        placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="areaCode" className="col-md-2 col-form-label">Phone (optional)</label>
                                <div class="col-md-10">
                                    <input type="tel" className="form-control" name="telNum" placeholder="Tel. number" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="email" className="col-md-2 col-form-label">Email</label>
                                <div className="col-md-10">
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="subject" className="col-md-2 col-form-label">Subject</label>
                                <div class="col-md-10">
                                    <select class="custom-select" name="subject" id="subject">
                                        <option selected>Choose...</option>
                                        <option value="Gifts">Gifts</option>
                                        <option value="Reading">Reading/Reiki Inquiry</option>
                                        <option value="Events">Events</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="feedback" class="col-md-2 col-form-label">Your Message</label>
                                <div class="col-md-10">
                                    <textarea name="feedback" class="form-control" id="feedback" rows="8"></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="offset-md-2 col-md-10">
                                    <button type="submit" class="btn btn-primary"> Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="container-fluid">
                    <iframe class="well well-sm col-xs-12 mt-5" width="100%" height="500" id="gmap_canvas"
                        src="https://maps.google.com/maps?q=75%20NJ-15%20building%20i-5,%20Lafayette,%20NJ%2007848&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                            href="https://www.zipcodewiki.net/united-states/"></a><br />
                </div>
            </div>
        </>
    )
}

export default Contact;