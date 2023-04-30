
interface ICardProps {
  imgSrc?: string;
  title?: string;
  showImage?: boolean;
  imgOnSide?: boolean;
  cardClasses?: string;
  cardBodyClasses?: string;
  children: React.ReactNode;
}

export const Card = (props: ICardProps) => {

  return (
    <div className={`
      ${props.cardClasses ?? ""}
      ${props.imgOnSide && ' lg:card-side '}
      card bg-base-100 shadow-xl`
    }>
      {props.showImage && <figure className="w-3/12"><img src={props.imgSrc} alt={props.title} height={200} width={200}/></figure>}
      <div className={`card-body ${props.cardBodyClasses ?? ""}`}>
        <h1 className="card-title underline">{props.title}</h1>
        {props.children}
      </div>
    </div>
  )
}