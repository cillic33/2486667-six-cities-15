import {Link} from 'react-router-dom';
import {AppRoute} from '../../../const';

export default function OfferOtherPlaces(): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          <article className="near-places__card place-card">
            <div className="near-places__image-wrapper place-card__image-wrapper">
              <Link to={`${AppRoute.Offer }/id`}>
                <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image" />
              </Link>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;80&nbsp;</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to={`${AppRoute.Offer }/id`}>Wood and stone place</Link>
              </h2>
              <p className="place-card__type">Room</p>
            </div>
          </article>

          <article className="near-places__card place-card">
            <div className="near-places__image-wrapper place-card__image-wrapper">
              <Link to={`${AppRoute.Offer }/id`}>
                <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image" />
              </Link>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;132&nbsp;</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to={`${AppRoute.Offer }/id`}>Canal View Prinsengracht</Link>
              </h2>
              <p className="place-card__type">Apartment</p>
            </div>
          </article>

          <article className="near-places__card place-card">
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
            <div className="near-places__image-wrapper place-card__image-wrapper">
              <Link to={`${AppRoute.Offer }/id`}>
                <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image" />
              </Link>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;180&nbsp;</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{width: '100%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <Link to={`${AppRoute.Offer }/id`}>Nice, cozy, warm big bed apartment</Link>
              </h2>
              <p className="place-card__type">Apartment</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
