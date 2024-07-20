import './BannersParagraph.css'

export const BannersParagraph = ({span, paragraph}) => {
  return (
    <div className="bannersparagraph">
      <p className="paragraph-banners">
        <span className="span-banners">{span} </span>
        {paragraph}
      </p>
    </div>
  )
}
