import favicon from "../assets/film_reel_20203.ico"

const inlineStyle = {
    maxWidth: "32px",
    maxHeight: "32px",
}

export default function Footer() {
    return (
        <p className="text-center "><img src={favicon} alt="Icon" href="https://www.freepik.com/icons/film-reel" style={inlineStyle} />Icon by dr.iconsart</p>
    )
}