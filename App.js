import './App.css';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import baba from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
function App() {
  return ( 
    <div className="App">
         <div className= "sideBar">
              <div className="upperSide">
                   <div className="upperSideTop"><span className=" brand">SUM AK AI</span></div>
                   <button className="midBtn"><img src ={addBtn} alt="new chat" className="logo"/>New chat</button>
                   <div className="upperSideBottom">
                       <button className="query"><img src={msgIcon} alt="Query"/>what is programming?</button>
                       <button className="query"><img src={msgIcon} alt="Query"/>what are you?</button>
                   </div>
              </div>

              <div className="lowerSide"> 
                <div className=" listItems"><img src ={home} alt="" className=" listItemsImg"/>home </div>
              <div className=" listItems"><img src ={saved} alt="" className=" listItemsImg"/>saved </div>
                <div className=" listItems"><img src ={baba} alt="" className=" listItemsImg"/>upgrade to pro </div>

              </div>

         </div>
         <div className="main">
          <div className ="chats">
            <div className="chat">
              <img className= 'chatimg' src={userIcon} alt="" /><p className="txt">hi my name is sumeya akmel are u ok?
              </p>
            </div>
            <div className="chat bot">
              <img className= 'chatimg' src={gptImgLogo} alt="" /><p className="txt">what is goodddbdshfgfvdvdvfdghfvsavfhgvhgsvfgvjfvgcv agefbc dsghcb cgh d c d cbc gdgd cgd chdchdvdcdghvg dcvghdcdbvcgdcdbncdhgvdbn</p>
            </div>

          </div>
          <div className="chatFooter">
            <div className="inp">
                <input type="text" placeholder='send a message...'/><button className="send"><img src={sendBtn} alt="send" /></button>

            </div>
            <p>SUM AK AI may produce incorrect information about people, places, or facts. sorry not my fault am just a bot</p>
          </div>
       </div>
       </div>
  );
}

export default App;
