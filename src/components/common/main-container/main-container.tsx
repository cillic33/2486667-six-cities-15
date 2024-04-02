import { ReactNode } from 'react';
import {clsx} from 'clsx';

type ContainerProps = {
  children: ReactNode;
  extraClass?: string;
}

function MainContainer({ children, extraClass }: ContainerProps): JSX.Element {
  return (
    <main className={clsx('page__main', extraClass ? extraClass : '')}>
      {children}
    </main>
  );
}

export default MainContainer;
