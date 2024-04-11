import {MAX_OFFER_GALLARY_IMAGES} from '@/components/catalog/offer-gallary/const';

type OfferGallaryProps = {
  images: string[];
}

function OfferGallary({ images }: OfferGallaryProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery" data-testid="offer-gallary">
        {images && images.slice(0, MAX_OFFER_GALLARY_IMAGES).map((img) => (
          <div className="offer__image-wrapper" key={img}>
            <img className="offer__image" src={img} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGallary;
