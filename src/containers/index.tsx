import * as React from 'react';
import { createUseStyles } from 'react-jss';
import KeyboardButton from '../components/KeyboardButton';

import { animated, useSpring } from 'react-spring';
import { formatKey } from '../utils';

const useStyles = createUseStyles({
  main: {
    backgroundColor: '#000',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    color: '#fff',
  },
});

type IProps = {}

const IndexPageContainer: React.FC<IProps> = () => {

  const classes = useStyles();

  const [keyLabel, setKeyLabel] = React.useState('💩');

  const onKeyUp = (ev: KeyboardEvent) => setKeyLabel(formatKey(ev.key));

  React.useEffect(() => {
    window.addEventListener('keyup', onKeyUp);

    return () => {
      window.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  const containerStyle = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { tension: 100, friction: 10 },
  });

  return (
    <main className={classes.main}>
      <animated.section style={containerStyle}>
        <KeyboardButton
          buttonLabel={keyLabel}
        />
      </animated.section>
    </main >
  );
};

export default IndexPageContainer;
