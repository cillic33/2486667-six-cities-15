import {Link} from 'react-router-dom';
import {Favorites} from '@/types/favorites';
import {City} from '@/types/city';
import OfferCard from '@/components/catalog/offer-card/offer-card';
import {CITIES} from '@/utils/const';

type FavoritesListProps = {
  favorites: Favorites;
}

function FavoritesList({ favorites }: FavoritesListProps): JSX.Element {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list" data-testid="favorites-list">
        {favorites && Object.entries(favorites).map(([cityName, groupedFavorites]) => {
          const city = CITIES.find((item: City) => (item.name === cityName));
          const cityPath = `/${city?.id}` || '';

          return (
            <li key={cityName} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to={cityPath}>
                    <span>{cityName}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {groupedFavorites &&
                  groupedFavorites.map((offer) => (
                    <OfferCard key={offer.id} offer={offer} block='favorites' />
                  ))}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FavoritesList;
