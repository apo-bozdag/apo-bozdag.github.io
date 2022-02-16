import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Main } from '../components/Main';
import { Text } from '../components/Text';
import { Fader } from '../components/Fader';
import { Secuence } from '../components/Secuence';
import my_working_environment from '../images/my_working_environment.jpg';

const styles = theme => ({
  root: {}
});

class Hakkimda extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <Main className={classes.root}>
        <article>
          <Secuence stagger>
            <header>
              <h1><Text>Hakkımda</Text></h1>
            </header>
            <p>
              Sivas‘da doğdum, 2009’un sonlarında İzmir'e taşındım. Hala İzmir’de yaşıyorum.
              Gezmeyi ve çalışmayı çok seviyorum. Yeni teknoloji ve fikirler beni her zaman heyecanlandırıyor.
              Üzerinde çalıştığım bir projem var ise, bitirene kadar rahat bir uyku çekemem.
            </p>
            <p>
              Sektörde neredeyse 6 senelik bir geçmişim var. Öğrenmeyi seven birisiyim.
              Open source kültürüne bağlı bağımsız bir hayat sürüyorum.
            </p>
            <p>
              Yazılım dili olarak PHP, Python onun yanında Front-end ve Mobil Uygulamalar için Native olarak
              geliştirmeler yapıyorum. Çalışırken müzik dinlemeye bayılırım.
            </p>
            <Fader>
              <img src={my_working_environment} alt="my working environment"/>
            </Fader>
          </Secuence>
        </article>
      </Main>
    );
  }
}

export default withStyles(styles)(Hakkimda);
