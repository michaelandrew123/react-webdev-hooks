import React from 'react'
import UseStateHook from './Hooks/State/UseStateHook'
import UseEffectHookk from './Hooks/Effect/UseEffectHook'
import UseMemoization from './Hooks/Memo/UseMemoizationHook'
import UseCallBackHook from './Hooks/CallBack/UseCallBackHook'
import UseRefHook from './Hooks/Ref/UseRefHook'
import './assets/index.css'

export default  function App() {
  return ( 
    <>
      <div className="container">
        <div className="container-grid">  
          <nav>
              <div className="nav-menu">
                  <ul> 
                    <li><a href="home">Home</a></li>
                    <li><a href="documentation">Documentation</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contact-us">Contact Us</a></li> 
                  </ul> 
              </div> 
          </nav> 
          <main>
            <div className="gap-m main-container"> 
              <div>
                <h1>Welcome to React Hook Tutorial</h1>
                <span>Web Dev Simplify Series</span>
              </div>
              <div>  
              </div>
            </div>
          </main>
          <section className="sidebar">
            <div className="gap-m"> 
              <ul>
                  <li><a>useState</a></li>
                  <li><a>useEffect</a></li>
                  <li><a>useMemo</a></li>
                  <li><a>useRef</a></li>
                  <li><a>useContext</a></li>
                  <li><a>useReducer</a></li>
                  <li><a>useCallBack</a></li>
                  <li><a>useCustomHook</a></li>
                </ul>  
            </div>
          </section>

          <div className="content">
            <div className="row">
              <div className="grid_4 gap-p">
                <UseStateHook />
              </div>
              <div className="grid_4 gap-p">
                <UseEffectHookk />
              </div>
              <div className="grid_4 gap-p">
                <UseMemoization /> 
              </div> 
              <div className="grid_4 gap-p">
                <UseCallBackHook />
              </div>  
              <div className="grid_4 gap-p">
                <UseRefHook />
              </div> 
            </div>
          </div> 
          <footer className="footer-content">
              <div>
                Footer Section
              </div>
          </footer>
        </div> 
      </div> 
    </> 
  );
}
 