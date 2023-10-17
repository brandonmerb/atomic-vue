import type { AtomicSingularitySystem } from "@atomicdesign/atomic-singularity"
import type { RouteRecordRaw, Router } from 'vue-router';
import type { App } from 'vue';
import type { AtomicVueModule, VueComponent } from "./types";

import warningVue from './components/warning.vue';
import { AbstractBaseGovernor } from '@atomicdesign/atomic-singularity';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";

export class VueGovernor extends AbstractBaseGovernor<AtomicVueModule> {
  // Master Template that gets mounted
  private masterTemplate?: VueComponent;

  // Router instance
  private router?: Router;
  // private routes?: Array<RouteRecordRaw> = [];

  // App instance, but maybe not necessary
  public vueApp: App<Element>;

  constructor(app: AtomicSingularitySystem) {
    super(app, "AtomicVue")
  }

  /**
   * Activate a router for the Governor. This method is intended to be used by modules
   * in the event they need to provide a custom router instance. However to do so, they
   * must be loaded before any other routes are loaded
   * @param module The module this is being done for
   * @param customRouter An optional custom router to use
   * @returns An instance of this governor for daisy chaining
   */
  public activateRouter(module: AtomicVueModule, customRouter?: Router): this {
    if (customRouter == null) {
      // No router provided, so we'll just instantiate our own, with default routes if provided
      this.router = createRouter({
        history: createWebHashHistory("/"),
        routes: module.routes ?? []
      })
    } else {
      // A router was provided, so register it
      this.router = customRouter;
    }
    return this;
  }

  /**
   * Returns the current Vue Router if there is one. Otherwise it will insantiate a new one
   * with default settings
   * @returns An instance of Vue Router
   */
  protected getRouter(): Router {
    if (this.router == null) {
      this.router = createRouter({
        history: createWebHashHistory("/"),
        routes: []
      })
    }
    return this.router;
  }

  /**
   * Returns the current Vue Router if there is one. Otherwise it will insantiate a new one
   * with default settings
   * @returns An instance of Vue Router
   */
  protected activateGovernorItems(module: AtomicVueModule): this {
    return this.activateMasterTemplate(module)
               .activateComponents(module)
               .activateRoutes(module);
  }


  /**
   * Registers all routes provided within the module with the Vue Router. If no router has been
   * created yet, it will automatically create one
   * @returns An instance of Vue Router
   */
  protected activateRoutes(module: AtomicVueModule): this {
    if (this.router == null) {
      return this.activateRouter(module);
    } else {
      module.routes?.forEach((route) => this.getRouter().addRoute(route));
      return this;
    }
  }

  /**
   * Register all components provided by this module with Vue. It's recommended to avoid
   * doing this where possible to avoid performance overhead
   * @returns An instance of Vue Router
   */
  protected activateComponents(module: AtomicVueModule): this {
    module.components?.forEach((component) => this.getVueApp().component(component.name, component));
    return this;
  }

  /**
   * Activate the actual Vue instance
   * @param rootComponent A component to use for activation. This will default to
   *                      using the Master Template component if one is not provided
   * @returns A Vue App
   */
  protected getVueApp(rootComponent?: VueComponent): App<Element> {
    if (this.vueApp == null) {
      this.vueApp = createApp(rootComponent ?? this.getMasterTemplateComponent());
    }
    return this.vueApp;
  }

  /**
   * Get the current master template, or fetch the basic Warning Component if
   * no master template is defined
   * @returns A Vue Component
   */
  private getMasterTemplateComponent(): VueComponent {
    return this.masterTemplate ?? warningVue;
  }

  /**
   * Activate the master template contained within this module. This will set it as the default
   * template to render when the application starts
   * @param module The module being activated
   * @returns An instance of this governor for daisy chaining
   */
  private activateMasterTemplate(module: AtomicVueModule): this {
    if (!!module.masterTemplate) {
      if (!!this.masterTemplate) {
        this.governorLogger.warn("Replacing existing master template. Is this correct?");
      }
      this.masterTemplate = module.masterTemplate;
    }
    return this;
  }

  /**
   * Mount the Vue Instance onto the page and begin rendering
   */
  public start(): void {
    this.governorLogger.system("Starting the real Vue Governor");
    this.governorLogger.error("No Master Template is configured");
    this.getVueApp().mount("#app");
  }
}