import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCertificateComponent } from './income-certificate.component';

describe('IncomeCertificateComponent', () => {
  let component: IncomeCertificateComponent;
  let fixture: ComponentFixture<IncomeCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeCertificateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
