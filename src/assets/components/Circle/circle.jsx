import './circle.scss'

function Circle({ className }) {
  return <div className={className ? `circle ${className}` : 'circle'}></div>
}

export default Circle
