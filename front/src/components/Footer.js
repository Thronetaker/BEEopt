import React from 'react';
function Footer() {
    return ( 
        <footer style={{backgroundColor:"rgb(250,250,250)"}}>
        <div className='container border-top mt-5 ' >
            <div className='row mt-5'>
                <div className='col' >
                    <img src='media/images/HeroImage.png' alt='logo' style={{width:"50%"}}/>
                    <p>&copy; 2024-2025 , Not Samiti Broking Ltd.<br/> All rights reserved.</p>
                    <br/>
                </div>
                <div className='col'>
                    <h3>GET IN TOUCH</h3>
                    <div><i className="fa fa-envelope" style={{color:"#4747d1"}} aria-hidden="true"></i> parmanand224radha@gmail.com</div>
                    <div><i className="fa fa-envelope" style={{color:"#4747d1"}} aria-hidden="true"></i> btbtc24246_radha@banasthali.in </div>
                    <div><i className="fa fa-envelope" style={{color:"#4747d1"}} aria-hidden="true"></i> parmanand24radha@gmail.com </div>
                    <div><i className="fa fa-cogs" style={{color:"#4747d1"}} aria-hidden="true"></i> Support Team : 10am - 6pm</div>
                    <br/>
                </div>
                <div className='col'>
                    <h3>CONNECT WITH US</h3>
                    <a href='#' style={{textDecoration:"none", color:"#4747d1"}}>Facebook <i className="fa fa-facebook-official" aria-hidden="true"></i></a><br/>
                    <a href='#'style={{textDecoration:"none" ,color:"#4747d1"}}>Instagram <i className="fa fa-instagram" aria-hidden="true"></i></a><br/>
                    <a href='#'style={{textDecoration:"none" ,color:"#4747d1"}}>Youtube <i className="fa fa-youtube-play" aria-hidden="true"></i></a><br/>
                    <a href='#'style={{textDecoration:"none" ,color:"#4747d1"}}>Twitter <i className="fa fa-twitter-square" aria-hidden="true"></i></a><br/>
                    <a href='#'style={{textDecoration:"none" ,color:"#4747d1"}}>LinkedIn <i className="fa fa-linkedin-square" aria-hidden="true"></i></a><br/>
                    <br/>
                </div>
            </div>
            
        </div>
        </footer>
     );
}

export default Footer;