import Header from '@/components/common/header/header';
import Container from '@/components/common/container/container';
import MainContainer from '@/components/common/main-container/main-container';
import OffersList from '@/components/catalog/offers-list/offers-list';
import OffersListEmpty from '@/components/catalog/offers-list-empty/offers-list-empty';
import Tabs from '@/components/common/tabs/tabs';
import {City} from '@/types/city';
import {useAppSelector} from '@/hooks/store/store';
import {offersSelectors} from '@/store/slices/offers';
import HelmetComponent from '@/components/common/helmet-component/helmet-component';

type MainPageProps = {
  cities: City[];
}

export default function MainPage({ cities }: MainPageProps): JSX.Element {
  const currentCity = useAppSelector(offersSelectors.city);
  const currentOffers = useAppSelector(offersSelectors.cityOffers);

  return (
    <Container extraClass="page--gray page--main" dataTestid="main-page">
      <HelmetComponent title="6 cities" />
      <Header />
      <MainContainer extraClass={currentOffers.length ? 'page__main--index' : 'page__main--index page__main--index-empty'}>
        <h1 className="visually-hidden">Cities</h1>

        <Tabs cities={cities} />

        <div className="cities">
          {currentOffers.length !== 0 && currentCity &&
            <OffersList
              offers={currentOffers}
              currentCity={currentCity}
              block='cities'
            />}
          {currentOffers.length === 0 && currentCity &&
            <OffersListEmpty currentCity={currentCity} />}
        </div>
      </MainContainer>
    </Container>
  );
}
