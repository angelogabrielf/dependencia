import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomNumberComponent } from './random-number.component';

describe('RandomNumberComponent', () => {
  let component: RandomNumberComponent;
  let fixture: ComponentFixture<RandomNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomNumberComponent]

    });

    fixture = TestBed.createComponent(RandomNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
