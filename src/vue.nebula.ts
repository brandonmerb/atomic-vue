import { AsyncActivationFunction, AtomicNebulaInterface, AtomicSingularitySystem, ExecutorFunction, LoggingMiddleware, MiddlewareUseFunction } from "@atomicdesign/atomic-singularity"
import type { RouteRecordRaw, Router } from 'vue-router';
import type { App } from 'vue';
import type { AtomicVueNebula, VueComponent } from "./types";

import warningVue from './components/warning.vue';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";

export class VueNebula implements AtomicVueNebula {
  public name: string = "Atomic Vue";

  // Router instance
  private router?: Router;

  // App instance, but maybe not necessary
  public vueApp: App<Element>;

  // Master Template that gets mounted
  private _masterTemplate?: VueComponent;

  async onModuleActivation(nebula: AtomicNebulaInterface): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (nebula.disabled === true) {
        reject(`${nebula.name} is disabled`);
      }
      this.activateMasterTemplate(nebula)
          .activateComponents(nebula)
          .activateRoutes(nebula);
      resolve(true);
    });
  }

  public onStarted(app: AtomicSingularitySystem, nebula: AtomicNebulaInterface): boolean {
    const logger = LoggingMiddleware.instance.getLogger();

    logger.system("Starting the real Vue Nebula");
    logger.error("No Master Template is configured");
    this.getVueApp().mount("#app");

    return true;
  }


  /**
   * Activate a router for the Nebula. This method is intended to be used by modules
   * in the event they need to provide a custom router instance. However to do so, they
   * must be loaded before any other routes are loaded
   * @param module The module this is being done for
   * @param customRouter An optional custom router to use
   * @returns An instance of this nebula for daisy chaining
   */
  public activateRouter(module: AtomicVueNebula, customRouter?: Router): this {
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
   * Registers all routes provided within the module with the Vue Router. If no router has been
   * created yet, it will automatically create one
   * @returns An instance of Vue Router
   */
  protected activateRoutes(module: AtomicVueNebula): this {
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
  protected activateComponents(module: AtomicVueNebula): this {
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
    // It might be possible to wrap this in an import.meta.env.MODE statement
    // for tree shaking purposes. Not 100% sure how this would work since this
    // is technically a library
    return this._masterTemplate ?? warningVue;
  }

  /**
   * Activate the master template contained within this module. This will set it as the default
   * template to render when the application starts
   * @param module The module being activated
   * @returns An instance of this nebula for daisy chaining
   */
  private activateMasterTemplate(module: AtomicVueNebula): this {
    if (!!module.masterTemplate) {
      if (!!this._masterTemplate) {
        LoggingMiddleware.instance
          .getLogger()
          .warn("Replacing existing master template. Is this correct?");
      }
      this._masterTemplate = module.masterTemplate;
    }
    return this;
  }
}