import React from "react";
import {Link} from "react-router-dom"

const Footer=()=>{
    return (


        <div className="footer-as">
          {" "}
          <div>
            <footer id="section_footer">
              <div className="container">
                <div className="row mb-5">
                  <div className="col-md-3">
                    <div className="ftco-footer-widget mb-4">
                      <p className="ftco-heading-2">Terms and Conditions</p>
                      <p>Privacy Policy</p>
                      <p>Refund Poicy</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                      <li className="ftco-animate">
                        <Link href="" target="_blank">
                          <span>
                            <i className="fab fa-facebook-f"></i>
                          </span>
                        </Link>
                      </li>
                      <li className="ftco-animate">
                        <Link href="" target="_blank">
                          <span>
                            <i className="fab fa-instagram"></i>
                          </span>
                        </Link>
                      </li>
                      <li className="ftco-animate">
                        <Link href="" target="_blank">
                          <span>
                            <i className="fab fa-linkedin-in"></i>
                          </span>
                        </Link>
                      </li>
                      <li className="ftco-animate">
                        <Link href="" target="_blank">
                          <span>
                            <i className="fab fa-instagram"></i>
                          </span>
                        </Link>
                      </li>
                      <li className="ftco-animate">
                        <Link href="" target="_blank">
                          <span>
                            <i className="fab fa-linkedin-in"></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <div className="ftco-footer-widget mb-4">
                      <p className="ftco-heading-2">About Shared Kitchen</p>
                      <p>Contact Us</p>
                      <p>Sustainability</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <p>
                      Copyright &copy; 2019 Shared Kitchen, All rights reserved
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
    )
}


export default Footer;