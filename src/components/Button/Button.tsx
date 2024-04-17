import classes from "./button.module.css"

interface IButton {
    children: React.ReactNode
}

export const Button = ({children}: IButton) => {
  return (
    <button className={classes.btn}>Купить<br></br> за {children} 	&#8381;</button>
  )
}
