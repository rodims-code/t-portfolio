interface TitleProps {
    title : string;
}

const Title = ({title} : TitleProps) => {
  return (
    <h1 className="upercase font-bold text-center text-3xl">
        {title}
    </h1>
  )
}

export default Title