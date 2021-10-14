import './FormLogin.css'
import { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'
import { validEmail, validPassword } from './regex'
import { UserContext } from '../../context/UserContext'

function FormLogin() {
  const history = useHistory()

  const { login } = useContext(UserContext)

  const [dataForm, setDataForm] = useState({email: 'davidangel_32@hotmail.com', password: 'contra123' })

  const [errors, setErrors] = useState({})

  const [inputsActives, setInputsActives] = useState({ email: false, inputPassword: false })

  function inputIsActive(e) {
    let field = e.target.id
    let value = e.target.value

    if (inputsActives[field]) {
      if (!value) {
        setInputsActives({
          ...inputsActives,
          [field]: false
        })
      }
    } else {
      setInputsActives({
        ...inputsActives,
        [field]: true
      })
    }

    setDataForm({
      ...dataForm,
      [field]: value
    })
  }
  
  function validateInputs() {
    let errors = {}
    let haveError = false

    if (!validEmail.test(dataForm.email)) {
      errors.emailError = 'Email incorrecto'
      haveError = true
    }

    if (!validPassword.test(dataForm.password)) {
      errors.passwordError = 'Password incorrecto'
      haveError = true
    }

    setErrors(errors)


    return haveError
  }

  function handleLogin() {
    if (!validateInputs()) {
      if (!login(dataForm.email, dataForm.password)) {

      } else {
        history.push('/')
      }
    }
  }

  return (
    <div className="FormLogin">
      <h1 className="mb-4">Login</h1>

      <img src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y" alt="" className="FormLogin__avatar mb-4" />

      <div className="InputGroupIcon mb-4">
        <i className="InputGroupIcon__icon"> <FeatherIcon icon="user" size="16" /> </i>
        <input
          type="email"
          id="email"
          className={`InputGroupIcon__input${inputsActives.email ? ` active` : ``}${errors.emailError ?` error` : ``}`}
          onFocus={inputIsActive}
          onBlur={inputIsActive} />
        <label htmlFor="email" className="InputGroupIcon__placeholder">Email</label>

        {errors.emailError && (
          <small className="InputGroupIcon__error">Por favor ingresa un correo válido</small>
        )}
      </div>

      <div className="InputGroupIcon">
        <i className="InputGroupIcon__icon"> <FeatherIcon icon="unlock" size="16" /> </i>
        <input
          type="password"
          id="password"
          className={`InputGroupIcon__input${inputsActives.password ? ` active` : ``}${errors.passwordError ?` error` : ``}`}
          onFocus={inputIsActive}
          onBlur={inputIsActive} />
        <label htmlFor="password" className="InputGroupIcon__placeholder">Contraseña</label>
        {errors.passwordError && (
          <small className="InputGroupIcon__error">La contraseña es incorrecta (debe ser mayor a 5 caracteres, contener letras y números)</small>
        )}
      </div>

      <div className="FormLogin__forgot_password mb-4">
        <Link to="">Recuperar contraseña?</Link>
      </div>
      
      <button className="Button Button--dark rounded-pill d-block" onClick={handleLogin}>Enviar</button>
    </div>
  )
}

export default FormLogin