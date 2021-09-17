import './Button.css'

const Button = ({children, large, small}) => {
    return(
            <button href="http://localhost:3000/MoneyO" className={`${large?'large': ''} ${small?'small': '' }  `}>{children}</button>
    )
}

export default Button