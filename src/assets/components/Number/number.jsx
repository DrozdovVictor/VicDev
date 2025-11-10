import './number.scss'

function Number({ className, children }) {
  return <p className={className ? `${className} number` : 'number'}>{children}</p>
}

export default Number
