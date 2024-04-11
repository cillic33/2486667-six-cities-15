import {clsx} from 'clsx';
import {useActionCreators} from '@/hooks/store/store';
import {offersActions} from '@/store/slices/offers';
import {SORT_OPTIONS, SortOption} from '@/types/sort';

type OffersSortListProps = {
  sortOption: SortOption;
  isOn: boolean;
  off: () => void;
}

function OffersSortList({sortOption, isOn, off}: OffersSortListProps): JSX.Element {
  const {setSortOption} = useActionCreators(offersActions);

  const handleOptionClick = (option: SortOption): void => {
    off();
    setSortOption(option);
  };

  return (
    <ul
      className={clsx(
        'places__options',
        'places__options--custom',
        isOn && 'places__options--opened'
      )}
      data-testid="offers-sort-list"
    >
      {SORT_OPTIONS.map((option) => (
        <li
          key={option.id}
          tabIndex={0}
          className={clsx(
            'places__option',
            sortOption === option.id && 'places__option--active',
          )}
          onClick={() => handleOptionClick(option.id)}
        >
          {option.name}
        </li>
      ))}
    </ul>
  );
}

export default OffersSortList;
