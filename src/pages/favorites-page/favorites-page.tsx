import {getFavoritesByLocation} from '@/utils';
import Header from '@/components/common/header/header';
import Container from '@/components/common/container/container';
import Footer from '@/components/common/footer/footer';
import MainContainer from '@/components/common/main-container/main-container';
import FavoritesList from '@/components/catalog/favorites-list/favorites-list';
import FavoritesListEmpty from '@/components/catalog/favorites-list-empty/favorites-list-empty';
import {useAppSelector} from '@/hooks/store/store';
import {favoritesSelectors} from '@/store/slices/favorites';
import {RequestStatus} from '@/utils/const';
import LoadingScreen from '@/pages/loading-screen/loading-screen';
import HelmetComponent from '@/components/common/helmet-component/helmet';

export default function FavoritesPage(): JSX.Element {
  const favorites = useAppSelector(favoritesSelectors.favorites);
  const favoritesRequestStatus = useAppSelector(favoritesSelectors.requestStatus);
  const favoritesByLocation = getFavoritesByLocation(favorites);

  if (favoritesRequestStatus === RequestStatus.Loading) {
    return <LoadingScreen />;
  }

  return (
    <Container>
      <HelmetComponent title="6 cities: favorites" />
      <Header />
      <MainContainer extraClass="page__main--favorites">
        <div className="page__favorites-container container">
          {favorites.length ?
            <FavoritesList favorites={favoritesByLocation} /> :
            <FavoritesListEmpty />}
        </div>
      </MainContainer>
      <Footer extraClass="container" />
    </Container>
  );
}
