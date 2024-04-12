import {ReactNode} from 'react';
import {clsx} from 'clsx';

type ExtraContainerProps = {
  children: ReactNode;
  extraClass?: string;
  dataTestid?: string;
}

function Container({ children, extraClass, dataTestid }: ExtraContainerProps): JSX.Element {
  return (
    <div
      className={clsx('page', extraClass ? extraClass : '')}
      data-testid={dataTestid}
    >
      {children}
    </div>
  );
}

export default Container;
