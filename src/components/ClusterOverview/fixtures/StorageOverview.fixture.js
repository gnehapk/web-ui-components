import React from 'react';

import { StorageOverview as StorageOverviewComponent } from '../StorageOverview';
import { storageClusterDetailsData } from '../Details/fixtures/StorageDetails.fixture';
import { inventoryData } from '../Inventory/fixtures/Inventory.fixture';

import { ClusterOverviewContext } from '../ClusterOverviewContext';

const StorageOverview = props => (
    <ClusterOverviewContext.Provider value={props}>
      <StorageOverviewComponent />
    </ClusterOverviewContext.Provider>
  );

export default [
    {
        component: StorageOverview,
        props: {
            detailsData: storageClusterDetailsData,
            inventoryData
        }
    }
]