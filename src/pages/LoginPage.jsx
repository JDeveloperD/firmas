import FormLogin from "../components/Form/FormLogin"

function LoginPage() {
  return( 
    <div className="wrapper">
      <div className="col-lg-5 p-4 bg-white d-flex align-items-center h-100vh">
        <FormLogin />
      </div>
      <div className="col-lg-7"></div>
    </div>
  )
}

export default LoginPage