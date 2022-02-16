import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import anime from 'animejs';

import { Link } from '../Link';

class Component extends React.Component {
  static displayName = 'Brand';

  static propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    energy: PropTypes.object.isRequired,
    audio: PropTypes.object.isRequired,
    sounds: PropTypes.object.isRequired,
    className: PropTypes.any,
    link: PropTypes.string,
    hover: PropTypes.bool,
    stableTime: PropTypes.bool,
    onEnter: PropTypes.func,
    onExit: PropTypes.func,
    onLinkStart: PropTypes.func,
    onLinkEnd: PropTypes.func
  };

  static defaultProps = {
    link: '/'
  };

  constructor () {
    super(...arguments);

    const { energy, stableTime } = this.props;

    if (!stableTime) {
      energy.updateDuration({ enter: 820 });
    }
  }

  componentWillUnmount () {
    const paths = this.svgElement.querySelectorAll('path');
    anime.remove(paths);
  }

  enter () {
    const { energy, sounds, stableTime, onEnter } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    anime.set(this.svgElement, { opacity: 1 });

    sounds.logo.play();

    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      delay: (path, index) => stableTime ? 0 : index * energy.duration.stagger,
      duration: path => stableTime ? energy.duration.enter : path.getTotalLength(),
      complete: () => {
        onEnter && onEnter();
      }
    });
  }

  exit () {
    const { energy, sounds, onExit } = this.props;
    const paths = this.svgElement.querySelectorAll('path');

    sounds.fade.play();

    anime({
      targets: this.svgElement,
      easing: 'easeInCubic',
      duration: energy.duration.exit,
      opacity: 0
    });
    anime({
      targets: paths,
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'linear',
      direction: 'reverse',
      duration: energy.duration.exit,
      complete: () => {
        anime.set(this.svgElement, { opacity: 0 });
        onExit && onExit();
      }
    });
  }

  render () {
    const {
      theme,
      classes,
      energy,
      audio,
      sounds,
      className,
      link,
      hover,
      stableTime,
      onEnter,
      onExit,
      onLinkStart,
      onLinkEnd,
      ...etc
    } = this.props;

    return (
      <h1 className={cx(classes.root, hover && classes.hover, className)} {...etc}>
        <Link
          className={classes.link}
          href={link}
          title='Abdullah Bozdağ Logo'
          onLinkStart={onLinkStart}
          onLinkEnd={onLinkEnd}
        >
          <span className={classes.title}>Abdullah Bozdağ</span>
          <svg
            ref={ref => (this.svgElement = ref)}
            className={classes.svg}
            viewBox='0 0 1400 92'
            xmlns='http://www.w3.org/2000/svg'
            onMouseEnter={() => sounds.hover.play()}
          >
            <path className={classes.path} d='M 0 81 L 109 81 L 169 3 L 169 25 L 169 89' />
            <path className={classes.path} d='M 198 44 L 239 44 L 249 8 L 190 8 L 190 81 L 252 81 L 252 37' />
            <path className={classes.path} d='M 273 0 L 273 81 L 315 81 L 335 53 L 335 8 L 281 8' />
            <path className={classes.path} d='M 356 0 L 356 81 L 418 81 L 418 0' />
            <path className={classes.path} d='M 439 0 L 439 81 L 504 80' />
            <path className={classes.path} d='M 583 80 L 517 80 L 517 0' />
            <path className={classes.path} d='M 596 88 L 596 5 L 646 83 L 646 88' />
            <path className={classes.path} d='M 667 88 L 667 0 V 45 H 715 V 88 V 0' />
            <path className={classes.path} d='M 807 40 L 818 8 L 759 8 L 759 80 L 821 80 L 821 43 L 762 43' />
            <path className={classes.path} d='M 877 80 L 842 80 L 842 8 L 884 8 L 884 88' />
            <path className={classes.path} d='M 897 8 L 961 8 L 908 80 L 977 80' />
            <path className={classes.path} d='M 991 0 L 990 80 L 1037 80 L 1051 50 L 1051 8 L 992 8' />
            <path className={classes.path} d='M 1217 80 L 1125 80 L 1072 4 L 1072 88' />
            <path className={classes.path} d='M 1218 23 L 1143 23 L 1143 80 L 1211 80 L 1211 76 L 1186 52' />
            <path className={classes.path} d='M 1135 4 L 1218 4' />
          </svg>
        </Link>
      </h1>
    );
  }
}

export { Component };
