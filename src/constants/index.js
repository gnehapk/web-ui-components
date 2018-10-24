import { fedora28 } from '../k8s/mock_templates/fedora28.template';
import { rhel75 } from '../k8s/mock_templates/rhel75.template';
import { ubuntu1804 } from '../k8s/mock_templates/ubuntu1804.template';
import { rhelHighPerformance } from '../k8s/mock_templates/rhel-high-p.template';
import { windows } from '../k8s/mock_templates/windows.template';
import { linuxUserTemplate } from '../k8s/mock_user_templates/linux.template';
import { windowsUserTemplate } from '../k8s/mock_user_templates/windows.template';
import { network1 } from '../k8s/mock_network/network.template';

export const API_VERSION = 'kubevirt.io/v1alpha2';
export const OS_LABEL = 'kubevirt.io/os';
export const FLAVOR_LABEL = 'kubevirt.io/flavor';
export const CLOUDINIT_VOLUME = 'cloudinitvolume';
export const CLOUDINIT_DISK = 'cloudinitdisk';
export const REGISTRY_VOLUME = 'registryvolume';
export const REGISTRY_DISK = 'registrydisk';
export const VIRTIO_BUS = 'virtio';
export const TEMPLATE_OS_LABEL = 'os.template.cnv.io';
export const TEMPLATE_FLAVOR_LABEL = 'flavor.template.cnv.io';
export const TEMPLATE_WORKLOAD_LABEL = 'workload.template.cnv.io';
export const TEMPLATE_TYPE_LABEL = 'template.cnv.io/type';
export const TEMPLATE_TYPE_VM = 'vm';
export const TEMPLATE_TYPE_BASE = 'base';
export const CUSTOM_FLAVOR = 'Custom';
export const ANNOTATION_DEFAULT_DISK = 'defaults.template.cnv.io/disk';
export const ANNOTATION_DEFAULT_NETWORK = 'defaults.template.cnv.io/network';
export const PARAM_VM_NAME = 'NAME';
export const PROVISION_SOURCE_URL = 'URL';
export const PROVISION_SOURCE_PXE = 'PXE';
export const PROVISION_SOURCE_REGISTRY = 'Registry';
export const PROVISION_SOURCE_TEMPLATE = 'Template';

export const POD_NETWORK = 'Pod Networking';

export const baseTemplates = [fedora28, ubuntu1804, rhel75, rhelHighPerformance, windows];
export const userTemplates = [linuxUserTemplate, windowsUserTemplate];
export const templates = [...baseTemplates, ...userTemplates];
export const networkConfigs = [network1];
