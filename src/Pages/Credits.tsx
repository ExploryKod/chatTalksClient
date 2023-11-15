import { IoIosLink } from "react-icons/io";
export const Credits = () => {
    return (
        <div className="category-container">
            <h1 className="category-text">Crédits</h1>
            <div className="b-shadow-1 padding-10 margin-x-40 bgd-darkpink border-radius-5">
                <h2 className="text-white">Icone de chat sur la page de login: </h2>
                <p className="text-darkBlue margin-top-10 text-w-600">
                    <IoIosLink className="icon-size-20 margin-right-10" />
                    <a href="https://www.flaticon.com/free-icons/cat" title="cat icons">Cat icons created by Freepik - Flaticon</a>
                </p>
            </div>
        </div>
    )
}