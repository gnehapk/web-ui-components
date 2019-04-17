import React from 'react';
import { shallow } from 'enzyme';

import { TopConsumers } from '../TopConsumers';
import { TopConsumerStats } from '../fixtures/TopConsumers.fixture';

/* eslint no-global-assign: 0 */
describe('<TopConsumers />', () => {
  it('no-data-renders-correctly', () => {
    const component = shallow(<TopConsumers {...TopConsumerStats[0]} />);
    expect(component).toMatchSnapshot();
  });
  it('data-renders-correctly', () => {
    const component = shallow(<TopConsumers {...TopConsumerStats[1]} />);
    expect(component).toMatchSnapshot({});
  });
  it('render-correctly-on-loading', () => {
    const component = shallow(<TopConsumers />);
    expect(component).toMatchSnapshot();
  });
});
/* eslint no-global-assign: 1 */
