import { Global } from '@emotion/react';
import { Fragment } from 'react';
import tw, { GlobalStyles as BaseStyles, css } from 'twin.macro';

function Styles() {
  return (
    <Fragment>
      <BaseStyles />
      <Global
        styles={css({
          body: {
            ...tw`antialiased font-sans text-center flex flex-col items-center justify-center bg-slate-800 text-slate-100 min-h-screen`,
          },
        })}
      />
    </Fragment>
  );
}

export default Styles;
