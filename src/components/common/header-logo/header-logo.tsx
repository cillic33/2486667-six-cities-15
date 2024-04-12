import {Link, useLocation} from 'react-router-dom';
import {AppRoute} from '@/utils/const';
import {clsx} from 'clsx';
import {memo, MouseEvent} from 'react';

function HeaderLogo(): JSX.Element {
  const {pathname} = useLocation();

  const isMainPage = () => pathname === '/';

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isMainPage()) {
      event.preventDefault();
    }
  };

  return (
    <Link
      to={AppRoute.Root}
      onClick={handleLogoClick}
      className={clsx('header__logo-link', !isMainPage() && 'header__logo-link--active')}
      data-testid="header-logo"
    >
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

const MemoHeaderLogo = memo(HeaderLogo);
export default MemoHeaderLogo;
