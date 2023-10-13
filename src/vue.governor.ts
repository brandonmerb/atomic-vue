import { AbstractBaseGovernor } from '@atomicdesign/atomic-singularity';
import type { AtomicVueModule } from "./types";

export class VueGovernor extends AbstractBaseGovernor<AtomicVueModule> {
  useModule(module: AtomicVueModule): this {
    console.log("Do nothing for now");
    return this;
  }
  start(): void {
    console.log("Starting the real Vue Governor")
  }
}