import {CSSProperties, memo} from 'react';
import {BeatLoader} from 'react-spinners';

function LoadingPage(): JSX.Element {
  const loaderCSS: CSSProperties = {
    margin: 'calc(50vh - 80px / 2 - 20px) auto',
    width: '72px',
  };

  return (
    <BeatLoader
      color="#4481C3"
      size={20}
      cssOverride={loaderCSS}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

const MemoLoadingPage = memo(LoadingPage);

export default MemoLoadingPage;
