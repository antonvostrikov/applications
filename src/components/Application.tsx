import { IApplications } from "../interfaces/applications.interface"

const Application:React.FC<IApplications> = ({ name, surname, secondName, number, email, theme, text }) => {
  return (
    <div className="application">
      <div className="application-top">
        <div className="application-top__name">
          <span>{secondName} {name} {surname}</span>
        </div>
        <div className="application-top__contacts">
          <span>{number}</span>
          <span>{email}</span>
        </div>
      </div>
      <div className="application-theme">
        <h3>{theme}</h3>
      </div>
      <div className="application-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Application