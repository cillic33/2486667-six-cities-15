import {useParams} from 'react-router-dom';
import {Offer} from '@/types/offer';
import Container from '@/components/common/container/container';
import Header from '@/components/common/header/header';
import MainContainer from '@/components/common/main-container/main-container';
import OfferGallary from '@/components/catalog/offer-gallary/offer-gallary';
import OfferReviews from '@/components/catalog/offer-reviews/offer-reviews';
import NotFoundPage from '@/pages/not-found-page/not-found-page';
import MapLeaflet from '@/components/common/map-leaflet/map-leaflet';
import {useActionCreators, useAppSelector} from '@/hooks/store/store';
import {City} from '@/types/city';
import {useEffect} from 'react';
import OfferDescription from '@/components/catalog/offer-description/offer-description';
import OfferOtherPlaces from '@/components/catalog/offer-other-places/offer-other-places';
import {RequestStatus} from '@/utils/const';
import LoadingScreen from '@/pages/loading-screen/loading-screen';
import {offerActions, offerSelectors} from '@/store/slices/offer';
import {nearbyActions, nearbySelectors} from '@/store/slices/nearby';
import {reviewsActions, reviewsSelectors} from '@/store/slices/reviews';
import HelmetComponent from '@/components/common/helmet-component/helmet';

export default function OfferPage(): JSX.Element {
  const offer = useAppSelector(offerSelectors.offer);
  const offerRequestStatus = useAppSelector(offerSelectors.requestStatus);
  const reviews = useAppSelector(reviewsSelectors.reviews);
  const reviewsRequestStatus = useAppSelector(reviewsSelectors.requestStatus);
  const nearOffers = useAppSelector(nearbySelectors.nearOffers).slice(0, 3);
  const nearRequestStatus = useAppSelector(nearbySelectors.requestStatus);

  const { fetchOffer } = useActionCreators(offerActions);
  const { fetchNearOffers } = useActionCreators(nearbyActions);
  const { fetchReviews } = useActionCreators(reviewsActions);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      Promise.all([fetchOffer(id), fetchNearOffers(id), fetchReviews(id)]);
    }
  }, [id, fetchOffer, fetchNearOffers, fetchReviews]);

  if (!(offerRequestStatus === RequestStatus.Loading ||
    nearRequestStatus === RequestStatus.Loading ||
    reviewsRequestStatus === RequestStatus.Loading)) {
    if (!offer || offerRequestStatus === RequestStatus.Failed) {
      return <NotFoundPage type='offer'/>;
    }
    const currentCity: City = offer.city;
    const activePoint = offer.location;
    const nearOffersPlusCurrent: Offer[] = [...nearOffers, offer];
    const nearPoints = nearOffersPlusCurrent.map((item) => item.location);
    return (
      <Container>
        <HelmetComponent title="6 cities: offer"/>

        <Header/>

        <MainContainer extraClass="page__main--offer">
          {offer &&
            <section className="offer">
              <OfferGallary images={offer.images}/>

              <div className="offer__container container">
                <div className="offer__wrapper">
                  <OfferDescription offer={offer}/>

                  <OfferReviews reviews={reviews}/>
                </div>
              </div>

              <MapLeaflet
                currentCity={currentCity}
                points={nearPoints}
                activePoint={activePoint}
                extraClass="offer__map"
              />
            </section>}

          <OfferOtherPlaces offers={nearOffers}/>
        </MainContainer>
      </Container>
    );
  } else {
    return <LoadingScreen/>;
  }
}
