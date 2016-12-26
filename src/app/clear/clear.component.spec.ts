/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClearComponent } from './clear.component';

describe('ClearComponent', () => {
  let component: ClearComponent;
  let fixture: ComponentFixture<ClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
