import {OfferPreview} from '@/types/offer-preview';
import {random, name, commerce, image, address} from 'faker';

export const makeFakeOfferCard = (): OfferPreview => ({
  id: random.uuid(),
  title: name.title(),
  type: 'house',
  price: commerce.price(),
  previewImage: image.imageUrl(),
  city: {
    name: address.city(),
    location: {
      latitude: address.latitude(),
      longitude: address.longitude(),
      zoom: 13
    }
  },
  location: {
    latitude: address.latitude(),
    longitude: address.longitude(),
    zoom: 16
  },
  isFavorite: random.boolean(),
  isPremium: random.boolean(),
  rating: random.number(5)
} as OfferPreview);
