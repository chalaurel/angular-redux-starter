import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { userDataComponent } from "./user.component";

describe("userDataComponent", () => {
  let component: userDataComponent;
  let fixture: ComponentFixture<userDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [userDataComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(userDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
