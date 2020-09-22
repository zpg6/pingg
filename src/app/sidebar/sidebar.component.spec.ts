import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ObserverService } from '../observer.service';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(() => {
    const observerServiceStub = () => ({
      getMessage: () => ({ subscribe: f => f({}) }),
      sendMessage: appData => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SidebarComponent],
      providers: [{ provide: ObserverService, useFactory: observerServiceStub }]
    });
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('updateObserver', () => {
    it('makes expected calls', () => {
      const observerServiceStub: ObserverService = fixture.debugElement.injector.get(
        ObserverService
      );
      spyOn(observerServiceStub, 'sendMessage').and.callThrough();
      component.updateObserver();
      expect(observerServiceStub.sendMessage).toHaveBeenCalled();
    });
  });
});
