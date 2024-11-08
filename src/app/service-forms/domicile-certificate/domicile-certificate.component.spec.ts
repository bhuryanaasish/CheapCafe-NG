import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicileCertificateComponent } from './domicile-certificate.component';

describe('DomicileCertificateComponent', () => {
  let component: DomicileCertificateComponent;
  let fixture: ComponentFixture<DomicileCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomicileCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomicileCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
