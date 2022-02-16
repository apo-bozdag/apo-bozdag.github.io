import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Post } from '../components/Post';
import { Secuence } from '../components/Secuence';
import { Text } from '../components/Text';

let Parser = require('rss-parser');
let parser = new Parser();
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

const styles = theme => ({
  root: {},
  seeMore: {
    marginTop: 20
  }
});

class Blog extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  constructor () {
    super(...arguments);
    this.state = {
      feed: []
    };
  }

  async componentDidMount () {
    const feed = await parser.parseURL(CORS_PROXY + 'https://apo-bozdag.hashnode.dev/rss.xml');
    this.setState(feed);
  }

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <Secuence stagger>
          <header>
            <h1><Text>Blog</Text></h1>
          </header>
          {this.state.items && this.state.items.map((post, index) => (
            <Post
              key={index}
              audio={{ silent: index > 4 }}
              data={{ ...post, id: 'post' + index }}
            />
          ))}
          <p className={classes.seeMore}>
            <Text>See more at</Text>
            {' '}
            <Link href='https://apo-bozdag.hashnode.dev' target='medium'>
              <Text>https://apo-bozdag.hashnode.dev</Text>
            </Link>
          </p>
        </Secuence>
      </Main>
    );
  }
}

export default withStyles(styles)(Blog);
