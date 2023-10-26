import type { AtomicNebulaInterface } from '@atomicdesign/atomic-singularity';
import type { Component, ComputedOptions, MethodOptions } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

export type VueComponent = Component<any, any, any, ComputedOptions, MethodOptions>;

export interface VueComponentDeclaration {
  // The name that will be associated with the component
  name: string;
  // The component object
  component: VueComponent
}

export interface AtomicVueNebula extends AtomicNebulaInterface {
  /**
   * These are component declarations that will be loaded into Vue as
   * the corresponding name given. These are basically a wrapper around Vue.component.
   * Avoid using declarations like these in production environments, as they clutter
   * global scopes and don't tree shake well. It's better to use vue-router where possible
   * and only resort to this for dynamic components, or for development purposes
   */
  components?: VueComponentDeclaration[],

  /**
   * These are vue-router route declarations to be added to the master route object
   */
  routes?: RouteRecordRaw[];

  /**
   * This is the master Vue component to render. There generally should only be one defined
   * across a project. If more than one is defined, we'll prioritize the last one loaded
   */
  masterTemplate?: VueComponent;

  /**
   * 
   */
  vuePlugins?: Array<any>
}