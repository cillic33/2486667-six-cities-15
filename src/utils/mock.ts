import {OfferPreview} from '@/types/offer-preview';
import {Offer} from '@/types/offer';
import {City} from '@/types/city';
import {SortOption} from '@/types/sort';
import {ChangeFavoriteArgs, Favorites, FavoriteStatus} from '@/types/favorites';
import {PostReviewBody, Review} from '@/types/reviews';
import {AuthorizationData, UserData} from '@/types/user';
import {AuthorizationStatus} from '@/utils/const';

export const makeFakePreviewOfferCard = (isFavorite = false): OfferPreview => ({
  id: 'd1b7c2d6-9a02-4426-a2a0-16a50f05830c',
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

export const makeFakeOfferCard = (isFavorite = false): Offer => ({
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
  isFavorite: isFavorite,
  isPremium: true,
  rating: 3.1
} as Offer);

export const makeFakeOfferId = (): string => 'd1b7c2d6-9a02-4426-a2a0-16a50f05830c';

export const makeFakeCity = (): City => ({
  name: 'Paris',
  location: {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 13
  }
} as City);

export const makeFakeSortOption = (): SortOption => SortOption.TopRatedFirst;

export const makeFakeChangeFavoriteArgs = (): ChangeFavoriteArgs => ({
  offerId: 'd1b7c2d6-9a02-4426-a2a0-16a50f05830c',
  status: FavoriteStatus.Add,
});

export const makeFakeReview = (): Review => ({
  id: 'db4cb87b-7c0f-45f1-8deb-742499f6aa30',
  comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
  date: '2024-03-12T21:00:00.035Z',
  rating: 3,
  user: {
    name: 'Isaac',
    avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/6.jpg',
    isPro: true
  }
} as Review);

export const makeFakeReviewBody = ():PostReviewBody => ({
  offerId: 'd1b7c2d6-9a02-4426-a2a0-16a50f05830c',
  comment: 'Home is amazing. It\'s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
  rating: 3,
} as PostReviewBody);

export const makeFakeUserData = ():UserData => ({
  email: 'oliver.conner@gmail.com',
  token: 'b2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
  name: 'Oliver.conner',
  avatarUrl: 'https://15.design.htmlacademy.pro/static/avatar/5.jpg',
  isPro: false
} as UserData);

export const makeFakeAuthorisationData = ():AuthorizationData => ({
  email: 'Oliver.conner@gmail.com',
  password: 'password1',
});

export const makeFakeAuthorizationStatus = (status: AuthorizationStatus):AuthorizationStatus => status;

export const makeFakeFavoritesList = (): Favorites => ({
  'Paris': [makeFakePreviewOfferCard()],
});

export const makeFakeTypeBlock = (): string => 'place-card';
