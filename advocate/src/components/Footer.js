// Footer.js

import React from 'react';
import './body.css'

function Footer () {
  return (
    <div className="footer">
        <div className="sb_footer section_padding">
            <div className="sb_footer-links">
                <div className="sb_footer-links_div">
                    <h4>for business</h4>
                    <a href="">
                        <p>emploter</p>
                    </a>
                    <a href="">
                        <p>health plan</p>
                    </a>
                    <a href="">
                        <p>individual</p>
                    </a>
                </div>

                <div className="sb_footer-links_div">
                    <h4>for business</h4>
                    <a href="">
                        <p>emplo</p>
                    </a>
                    <a href="">
                        <p>heh plan</p>
                    </a>
                    <a href="">
                        <p>dividual</p>
                    </a>
                </div>

                <div className="sb_footer-links_div">
                    <h4>for business</h4>
                    <a href="">
                        <p>emploter</p>
                    </a>
                    <a href="">
                        <p>health plan</p>
                    </a>
                    <a href="">
                        <p>individual</p>
                    </a>
                </div>

                <div className="sb_footer-links_div">
                    <h4>coming soon on</h4>
                    <div className="socialmedia">
                        <p><img src = "" alt = ""></img></p>
                        <p><img src = "" alt = ""></img></p>
                        <p><img src = "" alt = ""></img></p>
                        <p><img src = "" alt = ""></img></p>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} codeinn. arr.
                    </p>
                </div>

                <div className="sb_footer-below-links">
                    <a href=""><div><p>terms and condition</p></div></a>
                    <a href=""><div><p>privacy</p></div></a>
                    <a href=""><div><p>security</p></div></a>
                    <a href=""><div><p>cookie declaration</p></div></a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Footer;
