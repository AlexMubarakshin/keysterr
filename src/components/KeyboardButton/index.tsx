import * as React from 'react';
import { createUseStyles } from 'react-jss';
import { animated, useSpring } from 'react-spring';

const useStyles = createUseStyles({
  container: {
    padding: '32px 54px',
    border: '4px solid #fff',
    borderRadius: '12px',
    textTransform: 'uppercase',
  },
  title: {
    color: '#fff',
    padding: 0,
    margin: 0,
    fontFamily: 'Lato, sans-serif',
    fontWeight: 700,
    fontSize: '32px',
  },
});

type TProps = {
  className?: string;
  buttonLabel: string;
};

const KeyboardButton: React.FC<TProps> = ({ buttonLabel, className }: TProps) => {
  const classes = useStyles();

  const props = useSpring<any>({
    from: { marginTop: 0 },
    to: [
      { marginTop: 0 },
      { marginTop: -50 },
      { marginTop: 50 },
      { marginTop: 0 },
    ],
    config: { mass: 1, tension: 180, friction: 12, duration: 120 },
  });

  return (
    <animated.div style={props} className={`${classes.container} ${className || ''}`}>
      <p className={classes.title}>
        {buttonLabel}
      </p>
    </animated.div>
  );
};

export default KeyboardButton;