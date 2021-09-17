import './Button.css'

const Button = ({children, large, small}) => {
    return(
        <div>
            <button href="/MoneyO" className={`large`}>{children}</button>
        </div>
    )
}

export default Button