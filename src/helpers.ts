import type { AtomicSingularitySystem, MiddlewareUseFunction } from "@atomicdesign/atomic-singularity";
import { VueNebula } from "./vue.nebula";

export function useAtomicVue(): MiddlewareUseFunction {
  return (app: AtomicSingularitySystem) => {
    app.setNebula(new VueNebula(app));
    return true;
  }
}