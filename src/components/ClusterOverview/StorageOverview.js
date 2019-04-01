import React from 'react';

import { Grid, GridItem } from '@patternfly/react-core';

import { Dashboard, DashboardBody, DashboardHeader } from '../Dashboard';

import { StorageDetailsConnected } from './Details/StorageDetails'; // TODO: re-export
import InventoryConnected from './Inventory/Inventory';

const LeftCards = () => (
  <GridItem key="left" lg={3} md={12} sm={12}>
    <Grid>
      <GridItem lg={12} md={6} sm={12}>
        <StorageDetailsConnected />
      </GridItem>
      <GridItem lg={12} md={6} sm={12}>
        <InventoryConnected />
      </GridItem>
    </Grid>
  </GridItem>
);

export const StorageOverview = () => (
  <Dashboard>
    <DashboardHeader>Storage Overview</DashboardHeader>
    <DashboardBody>
      <Grid>
        <LeftCards />
      </Grid>
    </DashboardBody>
  </Dashboard>
);

StorageOverview.propTypes = {};