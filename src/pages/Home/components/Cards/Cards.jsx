import './Cards.css'

export const Cards = ({icon, name, paragraph, aos}) => {
  return (
    <div className="cards" data-aos="zoom-in" data-aos-duration={900}>
      <img src={icon} alt={name} className='card-icon' />

      <div className="title-paragraph-card">
        <span className='span-cards'>{name}</span>
        <p className='paragraph-cards'>{paragraph}</p>
      </div>
      
    </div>
  )
}
