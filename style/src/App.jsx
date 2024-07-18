import style from './custom.module.css'
import './style.css'
import './App.css'

function App() {


  return (
    <>
     <h1 className='primary'>Style CSS Type 1</h1>
     <h1 style={{color:'red', backgroundColor:'black'}}>Style CSS Type 2</h1>
     <h1 className={style.secondary}>Style CSS Type 3</h1>

    </>
  )
}

export default App
