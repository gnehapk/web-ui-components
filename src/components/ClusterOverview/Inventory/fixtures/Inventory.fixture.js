import { Inventory } from '../Inventory';
import { nodes, pvcs, pvs, pods, vms, vmis, migrations, inventoryHeading } from '../../fixtures/ClusterOverview.fixture';

export default [
  {
    component: Inventory,
    props: {
      inventoryHeading,
      nodes,
      pvcs,
      pvs,
      pods,
      vms,
      vmis,
      migrations,
    },
  },
  {
    name: 'loading',
    component: Inventory,
    props: {},
  },
];
