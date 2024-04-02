import {ReactNode} from 'react';
import {clsx} from 'clsx';

type ExtraContainerProps = {
  children: ReactNode;
  extraClass?: string;
}

function Container({ children, extraClass }: ExtraContainerProps): JSX.Element {
  return (
    <div className={clsx('page', extraClass ? extraClass : '')}>
      {children}
    </div>
  );
}

export default Container;
