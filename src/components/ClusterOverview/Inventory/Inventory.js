import React from 'react';
import PropTypes from 'prop-types';

import {
  DashboardCard,
  DashboardCardBody,
  DashboardCardHeader,
  DashboardCardTitle,
  DashboardCardTitleHelp,
} from '../../Dashboard/DashboardCard';
import { ClusterOverviewContext } from '../ClusterOverviewContext';
import { mapNodesToProps, mapPodsToProps, mapPvcsToProps, mapVmsToProps } from './utils';
import { InventoryRow } from './InventoryRow';

const InventoryBody = ({ nodes, pods, vms, vmis, pvcs, migrations }) => (
  <React.Fragment>
    <InventoryRow title="Nodes" {...mapNodesToProps(nodes)} />
    <InventoryRow title="PVCs" {...mapPvcsToProps(pvcs)} />
    <InventoryRow title="Pods" {...mapPodsToProps(pods)} />
    <InventoryRow title="VMs" {...mapVmsToProps(vms, pods, migrations)} />
  </React.Fragment>
);

InventoryBody.defaultProps = {
  nodes: undefined,
  pods: undefined,
  vms: undefined,
  vmis: undefined,
  pvcs: undefined,
  migrations: undefined,
};

InventoryBody.propTypes = {
  nodes: PropTypes.array,
  pods: PropTypes.array,
  vms: PropTypes.array,
  vmis: PropTypes.array,
  pvcs: PropTypes.array,
  migrations: PropTypes.array,
};

<<<<<<< HEAD
export const Inventory = props => (
  <DashboardCard>
    <DashboardCardHeader>
      <DashboardCardTitle>Inventory</DashboardCardTitle>
=======
export const Inventory = ({ inventory, loaded, heading }) => (
  <DashboardCard>
    <DashboardCardHeader>
      <DashboardCardTitle>{heading}</DashboardCardTitle>
>>>>>>> Integrated inventory card
      <DashboardCardTitleHelp>help for inventory</DashboardCardTitleHelp>
    </DashboardCardHeader>
    <DashboardCardBody className="kubevirt-inventory__body">
      <InventoryBody {...props} />
    </DashboardCardBody>
  </DashboardCard>
);

Inventory.defaultProps = {
<<<<<<< HEAD
  ...InventoryBody.defaultProps,
};

Inventory.propTypes = {
  ...InventoryBody.propTypes,
=======
  loaded: false,
  heading: "Inventory",
};

Inventory.propTypes = {
  inventory: PropTypes.object.isRequired,
  loaded: PropTypes.bool,
  heading: PropTypes.string,
>>>>>>> Integrated inventory card
};

const InventoryConnected = () => (
  <ClusterOverviewContext.Consumer>{props => <Inventory {...props} />}</ClusterOverviewContext.Consumer>
);

export default InventoryConnected;
