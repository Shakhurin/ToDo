import { Form } from '../Form'
import style from './header.module.css'

export const Header = ({addToList}) => {

  return (
    <>
      <header className={style.wrapper}>Header</header>
      <Form addToList={addToList}/>
    </>
  )
}