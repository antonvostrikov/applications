const MainPage:React.FC = () => {
  return (
    <div className="main">
      <div className="container-form">
        <form>
          <div className="form-name form-line">
            <label htmlFor="input-name">Введите имя</label>
            <input type="text" id="input-name" />
          </div>
          <div className="form-secondname form-line">
            <label htmlFor="input-secondname">Введите фамилию</label>
            <input type="text" id="input-secondname" />
          </div>
          <div className="form-surname form-line">
            <label htmlFor="input-surname">Введите отчество</label>
            <input type="text" id="input-surname" />
          </div>
          <div className="form-contact form-line">
            <label htmlFor="input-contact">Введите номер телефона</label>
            <input type="phone" id="input-contact" />
          </div>
          <div className="form-theme form-line">
            <label htmlFor="input-theme">Тема</label>
            <input type="text" id="input-theme" />
          </div>
          <div className="form-text form-line">
            <label htmlFor="textarea-text">Текст заявки</label>
            <textarea id="textarea-text"></textarea>
          </div>
          <div className="form-text">
            <button>Очистить</button>
            <button>Добавить</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MainPage