import { Utilization } from '../Utilization';

const time0 = 1000;
const KiB = 1024;

export const utilizationStats = {
  iopsUtilizationForOneHr: {
    data: {
      result: [
        {
          values: [[time0, 0], [time0 + 10, 10], [time0 + 20, 15], [time0 + 30, 100], [time0 + 40, 50]],
        },
      ],
    },
  },
  iopsUtilizationForSixHr: {
    data: {
      result: [
        {
          values: [[time0, 0], [time0 + 10, 10], [time0 + 20, 15], [time0 + 30, 100], [time0 + 40, 50]],
        },
      ],
    },
  },
  iopsUtilizationForTwentyFourHr: {
    data: {
      result: [
        {
          values: [[time0, 0], [time0 + 10, 10], [time0 + 20, 15], [time0 + 30, 100], [time0 + 40, 50]],
        },
      ],
    },
  },
  latencyUtilizationForOneHr: {
    data: {
      result: [
        {
          values: [[time0, 0], [time0 + 10, 10], [time0 + 20, 15], [time0 + 30, 100], [time0 + 40, 50]],
        },
      ],
    },
  },
  latencyUtilizationForSixHr: {
    data: {
      result: [
        {
          values: [[time0, 0], [time0 + 10, 10], [time0 + 20, 15], [time0 + 30, 100], [time0 + 40, 50]],
        },
      ],
    },
  },
  latencyUtilizationForTwentyFourHr: {
    data: {
      result: [
        {
          values: [[time0, 0], [time0 + 10, 10], [time0 + 20, 15], [time0 + 30, 100], [time0 + 40, 50]],
        },
      ],
    },
  },
  throughputUtilizationForOneHr: {
    data: {
      result: [
        {
          values: [
            [time0, 2 * KiB],
            [time0 + 10, 5 * KiB],
            [time0 + 20, 15 * KiB],
            [time0 + 30, 10 * KiB],
            [time0 + 40, 30 * KiB],
          ],
        },
      ],
    },
  },
  throughputUtilizationForSixHr: {
    data: {
      result: [
        {
          values: [
            [time0, 2 * KiB],
            [time0 + 10, 5 * KiB],
            [time0 + 20, 15 * KiB],
            [time0 + 30, 10 * KiB],
            [time0 + 40, 30 * KiB],
          ],
        },
      ],
    },
  },
  throughputUtilizationForTwentyFourHr: {
    data: {
      result: [
        {
          values: [
            [time0, 2 * KiB],
            [time0 + 10, 5 * KiB],
            [time0 + 20, 15 * KiB],
            [time0 + 30, 10 * KiB],
            [time0 + 40, 30 * KiB],
          ],
        },
      ],
    },
  },
  recoveryRateUtilizationForOneHr: {
    data: {
      result: [
        {
          values: [
            [time0, 2 * KiB],
            [time0 + 10, 5 * KiB],
            [time0 + 20, 15 * KiB],
            [time0 + 30, 10 * KiB],
            [time0 + 40, 30 * KiB],
          ],
        },
      ],
    },
  },
  recoveryRateUtilizationForSixHr: {
    data: {
      result: [
        {
          values: [
            [time0, 2 * KiB],
            [time0 + 10, 5 * KiB],
            [time0 + 20, 15 * KiB],
            [time0 + 30, 10 * KiB],
            [time0 + 40, 30 * KiB],
          ],
        },
      ],
    },
  },
  recoveryRateUtilizationForTwentyFourHr: {
    data: {
      result: [
        {
          values: [
            [time0, 2 * KiB],
            [time0 + 10, 5 * KiB],
            [time0 + 20, 15 * KiB],
            [time0 + 30, 10 * KiB],
            [time0 + 40, 30 * KiB],
          ],
        },
      ],
    },
  },
};

export const emptyUtilization = {
  iopsUtilizationForOneHr: {
    data: {
      result: [],
    },
  },
  iopsUtilizationForSixHr: {
    data: {
      result: [],
    },
  },
  iopsUtilizationForTwentyFourHr: {
    data: {
      result: [],
    },
  },
  latencyUtilizationForOneHr: {
    data: {
      result: [],
    },
  },
  latencyUtilizationForSixHr: {
    data: {
      result: [],
    },
  },
  latencyUtilizationForTwentyFourHr: {
    data: {
      result: [],
    },
  },
  throughputUtilizationForOneHr: {
    data: {
      result: [],
    },
  },
  throughputUtilizationForSixHr: {
    data: {
      result: [],
    },
  },
  throughputUtilizationForTwentyFourHr: {
    data: {
      result: [],
    },
  },
  recoveryRateUtilizationForOneHr: {
    data: {
      result: [],
    },
  },
  recoveryRateUtilizationForSixHr: {
    data: {
      result: [],
    },
  },
  recoveryRateUtilizationForTwentyFourHr: {
    data: {
      result: [],
    },
  },
};

export default [
  {
    component: Utilization,
    name: 'Utilization',
    props: utilizationStats,
  },
  {
    component: Utilization,
    name: 'Loading utilization',
    props: {},
  },
  {
    component: Utilization,
    name: 'Not available utilization',
    props: emptyUtilization,
  },
];
