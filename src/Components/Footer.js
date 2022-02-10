import React from "react"
import InstagramIcon from "@material-ui/icons/Instagram"
import Facebook  from "@material-ui/icons/Facebook"
import Twitter  from "@material-ui/icons/Twitter"
import '../Styles/Footer.css'

function Footer() {
    return(
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon/> <Facebook/> <Twitter/>
            </div>
            <p> &copy; 2022 VN Best Pizza Company</p>
        </div>
    )
}

export default Footer