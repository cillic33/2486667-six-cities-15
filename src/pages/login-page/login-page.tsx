import {Link} from 'react-router-dom';
import {appRouteOnlyCities} from '@/utils/const';
import Header from '@/components/common/header/header';
import Container from '@/components/common/container/container';
import MainContainer from '@/components/common/main-container/main-container';
import LoginForm from '@/components/common/login-form/login-form';
import HelmetComponent from '@/components/common/helmet-component/helmet';
import {randomProperty} from '@/pages/login-page/utils';
import {CityShot} from '@/types/city';

export default function LoginPage() {
  const randomRoute: CityShot = randomProperty(appRouteOnlyCities);

  return (
    <Container extraClass="page--gray page--login">
      <HelmetComponent title="6 cities: authorization" />
      <Header />
      <MainContainer extraClass="page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={randomRoute.id}>
                <span>{randomRoute.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </MainContainer>
    </Container>
  );
}
