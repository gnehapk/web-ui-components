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

const InventoryBody = ({ nodes, pods, vms, vmis, pvcs, pvs, migrations }) => (
  <React.Fragment>
    <InventoryRow title="Nodes" {...mapNodesToProps(nodes)} />
    <InventoryRow title="PVCs" {...mapPvcsToProps(pvcs)} />
    <InventoryRow title="PVs" {...mapPvcsToProps(pvs)} />
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
  pvs: undefined,
  migrations: undefined,
};

InventoryBody.propTypes = {
  nodes: PropTypes.array,
  pods: PropTypes.array,
  vms: PropTypes.array,
  vmis: PropTypes.array,
  pvcs: PropTypes.array,
  pvs: PropTypes.array,
  migrations: PropTypes.array,
};

export const Inventory = props => (
  <DashboardCard>
    <DashboardCardHeader>
      <DashboardCardTitle> {props.inventoryHeading} </DashboardCardTitle>
      <DashboardCardTitleHelp>help for inventory</DashboardCardTitleHelp>
    </DashboardCardHeader>
    <DashboardCardBody className="kubevirt-inventory__body">
      <InventoryBody {...props} />
    </DashboardCardBody>
  </DashboardCard>
);

Inventory.defaultProps = {
  ...InventoryBody.defaultProps,
  inventoryHeading: undefined,
};

Inventory.propTypes = {
  ...InventoryBody.propTypes,
  inventoryHeading: PropTypes.string,
};

const InventoryConnected = () => (
  <ClusterOverviewContext.Consumer>{props => <Inventory {...props} />}</ClusterOverviewContext.Consumer>
);

export default InventoryConnected;
