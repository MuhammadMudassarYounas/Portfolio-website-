const cv = "/images/Muhammad-Mudassar-Younas-Resume.pdf"

export const CV=()=>{
  
    return(
        <>
        <div className="cta">
            <a href={cv} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Lets Talk</a>

        </div>

        </>
    )
}