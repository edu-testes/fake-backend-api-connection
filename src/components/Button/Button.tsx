
import "./Button.css";
type IButtonProps = {
  typeButton: string,
}
export default function Button(props: IButtonProps) {
  return (
    <input type={props.typeButton} value="Submit" />
  )
}