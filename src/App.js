import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImage from './2bg.jpg';

function App() {
  return (
    <div> 
      
       <section>
   {/* header part start */}
   

   
   <header>
   <nav>
   <div className="topbar">
      <ul style={{ listStyleType: 'none' }}>
        <li style={{ float: 'right', marginInlineEnd: '50px', display: 'block' }}>
        <a href="contact.html">Web App</a>
        </li>
        <li style={{ float: 'right', marginInlineEnd: '50px', display: 'block' }}>
        <a href="contact.html">Web Api</a>
        </li>
        <li style={{ float: 'right', marginInlineEnd: '50px', display: 'block' }}>
          <a href="contact.html">Find us</a>
        </li>
        <li style={{ float: 'right', marginInlineEnd: '50px', display: 'block' }}>
          <a href="contact.html">Contact</a>
        </li>
        <li style={{ float: 'right', marginInlineEnd: '50px', display: 'block' }}>
          <a href="about.html">About</a>
        </li>
        <li style={{ float: 'right', marginInlineEnd: '50px', display: 'block' }}>
          <a href="index.html">Home</a>
        </li>
      </ul>
      </div>
            </nav>
   </header>
   {/*header part end*/}

   {/*main content start*/}
   <div className="fluid-container content">
    <div className="row m-25">
      <div className="col-md-25 p-5 m-auto typ-content">
        <h1 className="text-start" style={{color:"white"}}>WELCOME TO SPAM DETECTION</h1>
        <h5 className="text-start" style={{color:"white"}}>[Spam Email and Message detection]</h5>
        <p className="text-start">This is a online platform where you can check any text </p><p className="text-start">either it is spam message/email Text or not. Just enter</p>
        <p className="text-start">your text into the Textarea and select algorithm,press</p>
        <p className="text-start">check button and wait while your data proceeds.After</p><p className="text-start">processing you will see the result</p>
    </div>

   {/* FORM SECTION STARTS */}
<div className="col-md-10 p-10 form-control form-section" style={{width:"50%",backgroundColor:"black"}}>
  <form className="main-form" method="POST">
    <textarea rows="8" cols="82" name="rawdata" id="rawdata" placeholder="Enter Your Text Here....." style={{backgroundColor :"black",color:"white",border:"2px solid white"}}></textarea>
    <div className="algo-choice">
      <label className="radiocontainer" style={{color:"white", marginLeft:"5px"}}>
        Algo-1
        <input type="radio" name="algo"></input>
        <span className="checkmark"> </span>
      </label>
      <label className="radiocontainer" style={{color:"white", marginLeft:"200px"}}>
        Algo-2
        <input type="radio" name="algo"></input>
        <span className="checkmark"> </span>
      </label>
      <label className="radiocontainer" style={{color:"white",marginLeft:"200px"}}>
        Algo-3
        <input type="radio" name="algo"></input>
        <span className="checkmark"> </span>
      </label>
    </div>
    <br></br>
    <div className="check-holder">
      <button className="check-btn" type="submit">Check</button>
      </div>

  </form>
</div>
{/* FORM SECTION END */}

   </div>
   <div className="footer">
    <p>Copyright &copy; 2023 Developed by <b>Wahaj & Umair</b></p>
   </div>
   </div>
   
   {/*main content end*/}


   </section>

    </div>
    
  );
}

export default App;
