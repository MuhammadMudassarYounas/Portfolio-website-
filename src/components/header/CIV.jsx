const cv = "/images/Muhammad_Mudassar_CV.pdf"

export const CV = () => {

    return (
        <>
            <div className="cta">
                <a href={cv} download className="btn">Download CV</a>
                <a href="#contact" className="btn btn-primary">Lets Talk</a>

            </div>

        </>
    )
}