import type { AtomicSingularitySystem, MiddlewareUseFunction } from "@atomicdesign/atomic-singularity";
import { VueGovernor } from "./vue.governor";

export function useAtomicVue(): MiddlewareUseFunction {
  return (app: AtomicSingularitySystem) => {
    app.setGovernor(new VueGovernor(app));
    return true;
  }
}