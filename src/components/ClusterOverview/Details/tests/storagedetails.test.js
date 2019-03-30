import React from 'react';
import { render } from 'enzyme';

import { StorageDetails } from '../storageDetails';
import { default as StorageDetailsFixtures } from '../fixtures/Details.fixture';

const testStorageDetailsOverview = () => <StorageDetails {...StorageDetailsFixtures[0].props} />;

describe('<StorageDetails />', () => {
  it('renders correctly', () => {
    const component = render(testStorageDetailsOverview());
    expect(component).toMatchSnapshot();
  });
});
