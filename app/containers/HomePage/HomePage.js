/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import './style.scss';
import {
  Container, Row, Col, Button, Card, CardGroup
} from 'react-bootstrap';

import Banner from '../../components/Header/images/product-img_Monitoring.png';
import Charts from '../../components/Header/images/internet-statistics.jpg';
// C:\work\ui\react\app\components\Header\images\internet-statistics.jpg
import Schedulers from '../../components/Header/images/sche.png';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const { username, onSubmitForm } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    const {
      loading, error, repos, username, onChangeUsername, onSubmitForm
    } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    return (
      <div className="home-page">
        <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Banner} />
            <Card.Body>
              <Card.Title>Microservice health check</Card.Title>
              <Card.Text>
      Please check the micro services health check here
              </Card.Text>
              <Button variant="primary">click here</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Charts} />
            <Card.Body>
              <Card.Title>Charts.js</Card.Title>
              <Card.Text>
                reports and bar charts for analytics and statistics
              </Card.Text>
              <Button variant="primary">click here</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Schedulers} />
            <Card.Body>
              <Card.Title>Used for scheduling jobs</Card.Title>
              <Card.Text>
      Please check scheduling jobs check here
              </Card.Text>
              <Button variant="primary">click here</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};
