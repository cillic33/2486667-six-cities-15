import {OfferPreview} from '@/types/offer-preview';

export const makeFakeOfferCard = (isFavorite = false): OfferPreview => ({
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
