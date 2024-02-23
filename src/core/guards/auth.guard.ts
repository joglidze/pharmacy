import { CanActivateFn } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const local = LocalStorageService.getlocalStorage();
  if (local) {
    console.log('true');

    return true;
  } else {
    console.log('false');
    return false;
  }
};
