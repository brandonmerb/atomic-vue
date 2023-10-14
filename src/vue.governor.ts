import { AbstractBaseGovernor } from '@atomicdesign/atomic-singularity';
import { ModuleLogService } from "@atomicdesign/atomic-singularity/logging";
import { createApp } from 'vue';
import type { AtomicVueModule, VueComponent } from "./types";

import warningVue from './components/warning.vue';

export class VueGovernor extends AbstractBaseGovernor<AtomicVueModule> {
  // Governor scoped logger
  private governorLogger: ModuleLogService = new ModuleLogService({name: "Vue Governor"})

  // Master Template that gets mounted
  private masterTemplate?: VueComponent;

  /**
   * 
   * @param rootComponent 
   * @returns 
   */
  private createApp(rootComponent?: VueComponent): void {
    createApp(!!rootComponent ? rootComponent : this.getMasterTemplateComponent())
      .mount("#app");
  }

  private getMasterTemplateComponent(): VueComponent {
    return this.masterTemplate ?? warningVue;
  }

  private setMasterTemplateComponent(component: VueComponent): void {
    if (!!this.masterTemplate) {
      this.governorLogger.warn("Replacing existing master template. Is this correct?");
    }
    this.masterTemplate = component;
  }

  /**
   * 
   * @param module 
   * @returns 
   */
  public useModule(module: AtomicVueModule): this {
    return this;
  }

  /**
   * Mount the Vue Instance onto the page and begin rendering
   */
  public start(): void {
    this.governorLogger.system("Starting the real Vue Governor");
    this.governorLogger.error("No Master Template is configured");
    this.createApp();
  }
}