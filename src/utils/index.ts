import {ConvertDate} from '@/types/offer';
import {Favorites} from '@/types/favorites';
import {OfferPreview} from '@/types/offer-preview';

function getFavoritesByLocation(offers: OfferPreview[]): Favorites {
  return offers.reduce<Favorites>((acc, current) => {
    const location = current.city.name;

    if (current.isFavorite) {
      if (!(location in acc)) {
        acc[location] = [];
      }
      acc[location].push(current);
    }

    return acc;
  }, {});
}

function getRatingWidth(rating: number): string {
  const MAX_RATING_STARS = 5;
  return `${((Math.round(rating) / MAX_RATING_STARS) * 100)}%`;
}

const getConvertDate = (str: string): ConvertDate => {
  const date = new Date(str);
  const monthYear = `${date.toLocaleString('en-GB', { month: 'long' }) } ${ date.getFullYear()}`;
  const fullDate = str.slice(0, 10);

  return {monthYear, fullDate};
};

export {getFavoritesByLocation, getRatingWidth, getConvertDate};
