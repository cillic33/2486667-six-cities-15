import {useMatch} from 'react-router-dom';
import {AppRoute} from '@/utils/const';
import HeaderLogo from '@/components/common/header-logo/header-logo';
import {useAuth} from '@/hooks/user-authorisation/user-authorisation';
import {memo} from 'react';
import HeaderAuth from '@/components/common/header-auth/header-auth';
import HeaderNoAuth from '@/components/common/header-no-auth/header-no-auth';

function Header(): JSX.Element {
  const isAuth = useAuth();
  const matchWithLoginPage = useMatch(AppRoute.Login);

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <HeaderLogo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuth &&
                <HeaderAuth />}
              {!isAuth && !matchWithLoginPage &&
                <HeaderNoAuth />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const MemoHeader = memo(Header);
export default MemoHeader;
