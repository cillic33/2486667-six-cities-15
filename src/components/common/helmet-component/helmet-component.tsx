import {Helmet} from 'react-helmet-async';
import {memo} from 'react';

type HelmetComponentProps = {
  title: string;
  description?: string;
  name?: string;
  type?: string;
}

function HelmetComponent({ title, description, name, type }: HelmetComponentProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

const MemoHelmetComponent = memo(HelmetComponent);
export default MemoHelmetComponent;
