import './Ticks.css'
export const Ticks = ({icon, paragraph}) => {
  return (
    <div className="ticks">
      <img src={icon} className="icon-tick"/>
      <p className='ticks-paragraph'>{paragraph}</p>
    </div>
  )
}
