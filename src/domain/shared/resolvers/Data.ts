import { IPage } from './Page';
import { IResource } from './Resource';

export const dataResolver = <T, R extends IResource<T> | IPage<T>>(result: R) => result.data as R extends IPage<T> ? T[] : T;
