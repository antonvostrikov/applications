import { Link } from "react-router-dom"

const Header:React.FC = () => {
  return (
    <header className="header-top">
      <nav>
        <ul>
          <li>
            <Link to="/">Добавить заявку</Link>
          </li>
          <li>
            <Link to="/applications">Заявки</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header