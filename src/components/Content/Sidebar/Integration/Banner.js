export const Banner = ({ image, status, text }) => {
  return (
    <div className="banner">
      <div className="bannerHeader">
        <img className="png" src={image} width={130} height={40} />
        <img className="png" src={status} width={100} height={45} />
      </div>
      <p>{text}</p>
    </div>
  )
}
