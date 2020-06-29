import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseHTMLelementsComponent } from './use-htmlelements.component';

describe('UseHTMLelementsComponent', () => {
  let component: UseHTMLelementsComponent;
  let fixture: ComponentFixture<UseHTMLelementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseHTMLelementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseHTMLelementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
