import { AtomicSingularitySystem, MiddlewareUseFunction, createNebula } from "@atomicdesign/atomic-singularity";
import { VueNebula } from "./vue.nebula";

export function useAtomicVue(): MiddlewareUseFunction {
  return createNebula(new VueNebula()).build();
}