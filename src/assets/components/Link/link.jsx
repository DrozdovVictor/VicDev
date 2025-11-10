import './link.scss'

function Link({ children, href, className, onClick, blank }) {
  return (
    <>
      <a
        href={href ? href : '#'}
        className={className ? `${className} link` : 'link'}
        onClick={onClick}
        target={blank ? '_blank' : '_self'}
      >
        {children}
      </a>
    </>
  )
}

export default Link
