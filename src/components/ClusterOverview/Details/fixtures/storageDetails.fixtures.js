import { StorageDetails } from '../storageDetails';
import { InlineLoading } from '../../../Loading/Loading';

export const storageDetailsData = {
    storageCluster: [
        {
          "apiVersion": "ceph.rook.io/v1",
          "items": [
            {
              "apiVersion": "ceph.rook.io/v1",
              "kind": "CephCluster",
              "metadata": {
                "creationTimestamp": "2019-03-27T08:32:47Z",
                "finalizers": [
                  "cephcluster.ceph.rook.io"
                ],
                "generation": 1,
                "name": "rook-ceph",
                "namespace": "openshift-storage",
                "resourceVersion": "30382",
                "selfLink": "/apis/ceph.rook.io/v1/namespaces/openshift-storage/cephclusters/rook-ceph",
                "uid": "e656cdda-506a-11e9-a7bb-0252ac3432b6"
              },
            }
          ]
        }
      ],
    LoadingComponent: InlineLoading
}


export default [
  {
    component: StorageDetails,
    props: { ...storageDetailsData },
  }
];
