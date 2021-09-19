import './Button.css'
import {Link} from "react-router-dom"

const Button = ({children, large, small}) => {
    return(
           <Link to="/signup">
                <button href="http://localhost:3000/MoneyO" className={`${large?'large': ''} ${small?'small': '' }  `}>{children}</button>
           </Link>
    )
}

export default Button