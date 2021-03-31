import ky from 'ky-universal';
import { fromBase } from '@/domain/shared/api/config';
import { IResource, IPage } from '@/domain/shared/resolvers';
import { cachedHooks } from '@/domain/cache/integrations/ky';
import { IUser } from './resolvers';

export const UserApi = ky.extend({
  prefixUrl: fromBase('users'),
});

export class UserRepository {
  public getList(page: number) {
    return UserApi.get('', {
      searchParams: {
        page,
      },
    })
      .json<IPage<IUser>>();
  }

  public getUser(id: number) {
    return UserApi.extend(cachedHooks).get(`${id}`)
      .json<IResource<IUser>>();
  }
}

export const userRepository = new UserRepository();
