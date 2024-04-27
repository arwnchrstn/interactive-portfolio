type PanelTitleProps = {
  image: string
  title: string
}

function PanelTitle(props: PanelTitleProps) {
  return (
    <div className="flex flex-row gap-1.5 items-center justify-center">
      <img src={props.image} alt={props.title} width="20px" />
      <span className="font-medium text-sm">{props.title}</span>
    </div>
  )
}
export default PanelTitle
