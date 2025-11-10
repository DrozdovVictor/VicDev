import './button.scss'

function Button({ children, className, onClick }) {
  return (
    <button className={className ? `button ${className}` : 'button'} onClick={onClick}>
      {children ? children : 'Continue'}
    </button>
  )
}

export default Button
