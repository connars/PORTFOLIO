import './header.css';

function Header() {
  return (
    <header className='header'>
          <div className='header__nav'>
            <div className='header__nav-link title header__logo'>
                Logo
            </div>
            <div className='header__nav-link'>
                Home
            </div>
            <div className='header__nav-link'>
                Services
            </div>
            <div className='header__nav-link'>
                Works
            </div>
            <div className='header__nav-link'>
                Contscts
            </div>
          </div>
    </header>
  );
}

export default Header;
