import {Offer} from '@/types/offer';
import {useEffect, useRef, useState} from 'react';
import {Location} from '@/types/location';
import OfferCard from '@/components/catalog/offer-card/offer-card';
import MapLeaflet from '@/components/common/map-leaflet/map-leaflet';
import {City} from '@/types/city';
import OffersSort from '@/components/catalog/offers-sort/offers-sort';
import {useAppSelector} from '@/hooks/store/store';
import {offersSelectors} from '@/store/slices/offers';
import {useLocation} from 'react-router-dom';
import {getPageTitle, getSortedOffers} from "@/components/catalog/offers-list/utils";

type OffersListProps = {
  offers: Offer[];
  currentCity: City;
  block: string;
}

export default function OffersList({ offers, currentCity, block }: OffersListProps): JSX.Element {
  const [activePoint, setActivePoint] = useState<Location | null>(null);
  const sortOption = useAppSelector(offersSelectors.sortOption);
  const sortedOffers = getSortedOffers(sortOption, offers);
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const { pathname } = useLocation();

  const handleCardHover = (id: Offer['id'] | null) => {
    const point = offers.find((offer) => offer.id === id)?.location || null;
    setActivePoint(point);
  };

  const points = offers.map((offer) => offer.location);

  const scrollToTopContainer = () => {
    containerRef.current?.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTopContainer();
  }, [pathname]);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places" ref={containerRef}>
        <h2 className="visually-hidden">Places</h2>

        <b className="places__found">{getPageTitle(offers.length, currentCity.name)}</b>

        <OffersSort />

        <div className="cities__places-list places__list tabs__content">
          {sortedOffers && sortedOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} block={block} handleCardHover={handleCardHover} />
          ))}
        </div>
      </section>

      <div className="cities__right-section">
        <MapLeaflet
          currentCity={currentCity}
          points={points}
          activePoint={activePoint}
          extraClass="cities__map"
        />
      </div>
    </div>
  );
}
