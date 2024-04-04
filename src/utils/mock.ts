import {OfferPreview} from '@/types/offer-preview';
import {Offer} from '@/types/offer';

export const makeFakePreviewOfferCard = (isFavorite = false): OfferPreview => ({
  id: 'd9027e8b-affc-4dd5-8bfa-a99149c85785',
  title: 'Tile House',
  type: 'house',
  price: 458,
  previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
    zoom: 16
  },
  isFavorite: isFavorite,
  isPremium: true,
  rating: 5
} as OfferPreview);

export const makeFakeOfferCard = (): Offer => ({
  id: 'd1b7c2d6-9a02-4426-a2a0-16a50f05830c',
  title: 'Nice, cozy, warm big bed apartment',
  type: 'apartment',
  price: 447,
  previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
    zoom: 16
  },
  isFavorite: false,
  isPremium: true,
  rating: 3.1
} as Offer);
