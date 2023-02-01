import { Fragment } from 'react';
import tw from 'twin.macro';
import Styles from './components/Styles';
import reactLogo from '../../assets/react.svg';

const Link = tw.a`
  p-4
  flex flex-col items-center justify-center
  [> span]:(mt-2 font-bold text-lg text-white)
`;

const Logo = tw.img`
  h-12
  align-middle
`;

const Paragraph = tw.p`pb-2`;

function App() {
  return (
    <Fragment>
      <Styles />
      <div css={tw`flex flex-row justify-center items-center`}>
        <Link href="https://vitejs.dev" rel="noreferrer" target="_blank">
          <Logo alt="Vite logo" src="/vite.svg" />
          <span>Vite</span>
        </Link>
        <div tw="m-4 font-bold text-xl">+</div>
        <Link href="https://reactjs.org" rel="noreferrer" target="_blank">
          <Logo alt="React logo" src={reactLogo} />
          <span>React</span>
        </Link>
      </div>
      <hr tw="min-w-full mb-8 mt-8 border-slate-600" />
      <Paragraph>
        Edit <code>src/App.tsx</code> and save to test HMR
      </Paragraph>
      <Paragraph className="read-the-docs">
        Click on the Vite and React logos to learn more
      </Paragraph>
    </Fragment>
  );
}

export default App;
