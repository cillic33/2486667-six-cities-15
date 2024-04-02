import {memo, useEffect} from 'react';
import {useAppSelector} from '@/hooks/store/store';
import OffersSortList from '@/components/catalog/offers-sort-list/offers-sort-list';
import {offersSelectors} from '@/store/slices/offers';
import {SORT_OPTIONS} from '@/types/sort';
import {useBoolean} from '@/hooks/use-boolean/use-boolean';

function OffersSort() {
  const {isOn, off, toggle} = useBoolean(false);
  const sortOption = useAppSelector(offersSelectors.sortOption);

  const handleCaptionClick = (): void => {
    toggle();
  };

  useEffect(() => {
    if (isOn) {
      const onEscKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          off();
        }
      };
      document.addEventListener('keydown', onEscKeyDown);
      return () => {
        document.removeEventListener('keydown', onEscKeyDown);
      };
    }
  });

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>

      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleCaptionClick}
        style={{outline: 'none'}}
      >
        &nbsp;
        {SORT_OPTIONS.find((option) => option.id === sortOption)?.name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <OffersSortList sortOption={sortOption} isOn={isOn} off={off} />
    </form>
  );
}

const MemoOffersSort = memo(OffersSort);
export default MemoOffersSort;
