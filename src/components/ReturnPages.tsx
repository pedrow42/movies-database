import { useNavigate } from "react-router-dom"

export const ReturnPages = () =>{

    const navigate = useNavigate()

    const handleBackButton = () =>{
        navigate(-1)
    }
    return(
        <div className="navigate--button">
            <a className="previous" onClick={handleBackButton}>&laquo; Previous</a>
        </div>
    )
}