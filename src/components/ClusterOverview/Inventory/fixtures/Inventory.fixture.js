import { Inventory } from '../Inventory';
import { nodes, pvcs, pods, vms, vmis, migrations, heading } from '../../fixtures/ClusterOverview.fixture';

export default [
  {
    component: Inventory,
    props: {
      nodes,
      pvcs,
      pods,
      vms,
      vmis,
      migrations,
      heading,
    },
  },
  {
    name: 'loading',
    component: Inventory,
    props: {},
  },
];
