import Application from "../components/Application"
import { useGetApplicationsQuery } from "../store/applications/applications.api"

const ApplicationsPage: React.FC = () => {
  const { data, isError, isLoading } = useGetApplicationsQuery()

  return (
    <div className="applications">
      <div className="container-application">
        { isLoading && <p>Загрузка... Ожидайте</p> }
        { isError && <p>Произошла ошибка при загрузке данных. Попробуйте повторить запрос позже или перезагрузите страницу!</p> }
        { data && data.map(application => <Application key={application.id} {...application} /> ) }
      </div>
    </div>
  )
} 

export default ApplicationsPage