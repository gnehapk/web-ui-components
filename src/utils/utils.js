import { NamespaceModel, ProjectModel } from '../models';

export function prefixedId(idPrefix, id) {
  return idPrefix && id ? `${idPrefix}-${id}` : null;
}

export const parseUrl = url => {
  try {
    return new URL(url);
  } catch (e) {
    return null;
  }
};

export const getSequence = (from, to) => Array.from({ length: to - from + 1 }, (v, i) => i + from);

export const setNativeValue = (element, value) => {
  const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
  const prototype = Object.getPrototypeOf(element);
  const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

  if (valueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value);
  } else {
    valueSetter.call(element, value);
  }
};

export const generateDiskName = (vmName, diskName, clone) => {
  const name = [vmName, diskName];
  if (clone) {
    name.push('clone');
  }
  return name.join('-');
};

export const getBootDeviceIndex = (devices, bootOrder) => devices.findIndex(device => device.bootOrder === bootOrder);

export const getResource = (
  model,
  { name, namespaced = true, namespace, isList = true, matchLabels, matchExpressions, prop, fieldSelector } = {
    namespaced: true,
    isList: true,
  }
) => {
  const res = {
    // non-admin user cannot list namespaces (k8s wont return only namespaces available to user but 403 forbidden, ).
    // Instead we need to use ProjectModel which will return available projects (namespaces)
    kind: model.kind === NamespaceModel.kind ? ProjectModel.kind : model.kind,
    namespaced,
    namespace,
    isList,
    prop: prop || model.kind,
  };

  if (name) {
    res.name = name;
  }
  if (matchLabels) {
    res.selector = { matchLabels };
  }
  if (matchExpressions) {
    res.selector = { matchExpressions };
  }
  if (fieldSelector) {
    res.fieldSelector = fieldSelector;
  }

  return res;
};
