import { BsDribbble, BsGithub, BsLinkedin } from "react-icons/bs"

export const HeaderSocials =()=>{
    return(
        <>
          <div className="header__socials">
            <a href="https://linkedin.com" target="_blank"><BsLinkedin className="header-icon"/></a>
            <a href="https://github.com" target="_blank"><BsGithub className="header-icon" /></a>
              <a href="https://dribble.com" target="_blank"><BsDribbble className="header-icon"/></a>
          </div>
        </>
    )
}