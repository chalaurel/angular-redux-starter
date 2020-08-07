import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable()
export class userDataService {
  private userDataUrl: string = "https://reqres.in/api/users";

  constructor(private http: HttpClient) {}

  getuserData() {
    return this.http
      .get(this.userDataUrl)
      .pipe(catchError((error: any) => throwError(error.message)));
  }
}
