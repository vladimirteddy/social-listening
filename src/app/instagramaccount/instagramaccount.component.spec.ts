import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramaccountComponent } from './instagramaccount.component';

describe('InstagramaccountComponent', () => {
  let component: InstagramaccountComponent;
  let fixture: ComponentFixture<InstagramaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
