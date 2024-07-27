import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderListComponent } from './provider-list.component';

describe('ProviderComponent', () => {
  let component: ProviderListComponent;
  let fixture: ComponentFixture<ProviderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProviderListComponent]
    });
    fixture = TestBed.createComponent(ProviderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
