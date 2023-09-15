import './navbar.module.css';

function Navbar() {
  const date = new Date();
  return (
    <nav>
      <h3>
        ©
        {date.getFullYear()}
      </h3>
      <h1>Countries Of The World</h1>
      <div className="icons">
        <img src="https://img.icons8.com/ios/30/microphone.png" alt="microphone icon" />
        <img src="https://img.icons8.com/30/settings--v1.png" alt="settings icon" />
      </div>
    </nav>
  );
}

export default Navbar;
