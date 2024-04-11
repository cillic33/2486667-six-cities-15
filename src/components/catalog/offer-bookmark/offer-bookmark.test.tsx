import {describe, expect, it} from 'vitest';
import {screen} from '@testing-library/react';
import OfferBookmark from '@/components/catalog/offer-bookmark/offer-bookmark';
import {renderWithRouterAndProviders} from '@/utils/mock-component';
import {makeFakeOfferCard, makeFakeBookmarkType} from '@/utils/mock';

const IS_FAVORITE = true;

describe('Component: OfferBookmark', () => {
  it('should render correctly', () => {
    const bookmarkButtonTestId = 'bookmark-button';
    const mockOfferId = makeFakeOfferCard().id;
    const mockTypeBlock = makeFakeBookmarkType();

    renderWithRouterAndProviders(<OfferBookmark isFavorite={IS_FAVORITE} offerId={mockOfferId} block={mockTypeBlock} />);

    expect(screen.getByTestId(bookmarkButtonTestId)).toBeInTheDocument();
  });
});
