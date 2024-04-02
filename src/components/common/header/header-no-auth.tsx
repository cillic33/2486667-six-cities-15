import {Link} from 'react-router-dom';
import {AppRoute} from '@/utils/const';

function HeaderNoAuth() {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to={AppRoute.Login}>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__signout">Sign in</span>
      </Link>
    </li>
  );
}

export default HeaderNoAuth;
