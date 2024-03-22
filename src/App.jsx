import './App.css'
import HookFrom from './Components/HookFrom/HookFrom'
import RefFrom from './Components/RefFrom/RefFrom'
import ReuseableFrom from './Components/ReuseableFrom/ReuseableFrom'
import SimpleFrom from './Components/SimpleFrom/SimpleFrom'
import StareFullFrom from './Components/StateFullFrom/StareFullFrom'

function App() {
  const handleSignUpSubmit = data => {
    console.log('SignUp data',data)
  }
  const handleUpdateSubmit = data => {
    console.log('Update Data',data)
  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleFrom></SimpleFrom> */}
      {/* <StareFullFrom></StareFullFrom> */}
      {/* <RefFrom></RefFrom> */}
      {/* <HookFrom></HookFrom> */}
      <ReuseableFrom
        handleSubmit={handleSignUpSubmit}
        fromTitle={'Sign Up'}
        submitbtn={"Submit"}>
          <div>
            <h2>Sign Up From</h2>
            <p>Please sign up with vaild information</p>
          </div>
      </ReuseableFrom>

      <ReuseableFrom
        handleSubmit={handleUpdateSubmit}
        fromTitle={'Update Now'}
        submitbtn={"Update"}>
          <div>
            <h2>Update Now</h2>
            <p>please always update your profile</p>
          </div>
      </ReuseableFrom>


    </>
  )
}

export default App
