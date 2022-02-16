import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Main } from '../components/Main';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';
import projects from '../data/projects';
import { Post } from '../components/Post';

const styles = theme => ({
  root: {},
});

class Projelerim extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <h1><Text>Projelerim</Text></h1>
          {projects.map((post, index) => (
            <Post
              key={index}
              audio={{ silent: index > 4 }}
              data={{ ...post, id: 'post' + index }}
            />
          ))}
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(Projelerim);
