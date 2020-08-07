import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { userDataService } from '../services/user.service';

import {
  UserActionType,
  getuserDataActionSuccess,
  getuserDataActionError
} from '../reducers/user.reducer';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class userDataEffects {
  constructor(
    private actions$: Actions,
    private userDataService: userDataService
  ) {}

  @Effect()
  getuserDatas$ = this.actions$.pipe(
    ofType(UserActionType.GET_USER_ACTION),
    switchMap(() =>
      this.userDataService.getuserData().pipe(
        map((response: string) => new getuserDataActionSuccess(response)),
        catchError((error: string) => of(new getuserDataActionError(error)))
      )
    )
  );
}
