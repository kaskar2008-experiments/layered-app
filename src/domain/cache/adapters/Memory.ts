import { IBaseAdapter } from './base';

export class MemoryAdapter implements IBaseAdapter {
  public get() {
    return undefined;
  }

  public set() {
    return true;
  }
}

