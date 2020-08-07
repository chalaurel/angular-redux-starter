import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, BehaviorSubject } from "rxjs";

import { getuserDataAction } from "../../reducers/user.reducer";
import { userData, AppState } from '../../reducers/root.reducer';
import { userDataService } from '../../services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"]
})
export class userDataComponent implements OnInit {
  users$: Observable<object>;
  data$: any;
  dataArray: any;

  constructor(
    private store: Store<AppState>,
    private user: userDataService,
  ) {
    this.store.dispatch(new getuserDataAction());
    // console.log(this.store.dispatch(new getuserDataAction()));
  }

  ngOnInit(): void {
    // this.users$ = O  bject.keys;
    this.users$ = this.store.pipe(select(userData));
    this.users$.subscribe(v => {
    this.dataArray = Object.entries( v['userReducer']['userData']['data']);

     console.log(v['userReducer']['userData'])
    })
    // console.log()
  }
}
