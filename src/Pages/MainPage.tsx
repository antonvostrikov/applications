import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useAddApplicationMutation } from "../store/applications/applications.api"
import { IApplications } from "../interfaces/applications.interface"

interface IForm {
  inputName: string
  inputSecondName: string
  inputSurname: string
  inputNumber: string
  inputEmail: string
  inputTheme: string
  inputText: string
}

const MainPage:React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IForm>()
  const [addApplication] = useAddApplicationMutation()
  const [application, setApplication] = React.useState<IApplications>()

  const onSumbit: SubmitHandler<IForm> = (data) => console.log(data)

  return (
    <div className="main">
      <div className="container-form">
        <div className="form-header">
          <h2>Форма заполнения заявки</h2>
        </div>
        <form onSubmit={handleSubmit(onSumbit)}>
          <div className="form-name form-line">
            <label htmlFor="input-name">Введите имя</label>
            { errors.inputName?.type === 'required' && <p className="input-required">Не заполнено поле имя</p> }
            <input 
              type="text" 
              id="input-name" 
              {...register("inputName", { required: true })} 
              aria-invalid={errors.inputName ? 'true' : 'false'}
            />
          </div>
          <div className="form-secondname form-line">
            <label htmlFor="input-secondname">Введите фамилию</label>
            { errors.inputSecondName?.type === 'required' && <p className="input-required">Не заполнено поле фамилия</p> }
            <input 
              type="text" 
              id="input-secondname" 
              {...register("inputSecondName", { required: true })} 
              aria-invalid={errors.inputSecondName ? 'true' : 'false'}
            />
          </div>
          <div className="form-surname form-line">
            <label htmlFor="input-surname">Введите отчество</label>
            { errors.inputSurname?.type === 'required' && <p className="input-required">Не заполнено поле отчество</p> }
            <input 
              type="text" 
              id="input-surname" 
              {...register("inputSurname", { required: true })} 
              aria-invalid={errors.inputSurname ? 'true' : 'false'}
            />
          </div>
          <div className="form-number form-line">
            <label htmlFor="input-number">Введите номер телефона</label>
            { errors.inputNumber?.type === 'required' && <p className="input-required">Не заполнено поле телефон</p> }
            <input 
              type="phone" 
              id="input-number" 
              {...register("inputNumber", { required: true } )} 
              aria-invalid={errors.inputNumber ? 'true' : 'false'}
            />
          </div>
          <div className="form-email form-line">
            <label htmlFor="input-email">Введите почту</label>
            { errors.inputEmail?.type === 'required' && <p className="input-required">Не заполнено поле почта</p> }
            <input 
              type="email" 
              id="input-email" 
              {...register("inputEmail", { required: true } )} 
              aria-invalid={errors.inputEmail ? 'true' : 'false'}
            />
          </div>
          <div className="form-theme form-line">
            <label htmlFor="input-theme">Тема</label>
            { errors.inputTheme?.type === 'required' && <p className="input-required">Не заполнено поле тема</p> }
            <input 
              type="text" 
              id="input-theme" 
              {...register("inputTheme", { required: true } )}
              aria-invalid={errors.inputTheme ? 'true' : 'false'}
            />
          </div>
          <div className="form-text form-line">
            <label htmlFor="textarea-text">Текст заявки</label>
            { errors.inputText?.type === 'required' && <p className="input-required">Не заполнено поле текст заявки</p> }
            <textarea 
              id="textarea-text" 
              {...register("inputText", { required: true } )}
              aria-invalid={errors.inputText ? 'true' : 'false'}>  
            </textarea>
          </div>
          <div className="form-text">
            <button>Очистить</button>
            <button type="submit">Добавить</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MainPage