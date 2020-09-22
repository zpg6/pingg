import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ObserverService } from '../observer.service';
import { FirebaseUISignInFailure } from 'firebaseui-angular';
import { FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { SignInButtonsComponent } from './sign-in-buttons.component';

describe('SignInButtonsComponent', () => {
  let component: SignInButtonsComponent;
  let fixture: ComponentFixture<SignInButtonsComponent>;

  beforeEach(() => {
    const observerServiceStub = () => ({
      getMessage: () => ({ subscribe: f => f({}) }),
      sendMessage: appData => ({})
    });
    const angularFireAuthStub = () => ({
      authState: { subscribe: f => f({}) }
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SignInButtonsComponent],
      providers: [
        { provide: ObserverService, useFactory: observerServiceStub },
        { provide: AngularFireAuth, useFactory: angularFireAuthStub }
      ]
    });
    fixture = TestBed.createComponent(SignInButtonsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`loading has default value`, () => {
    expect(component.loading).toEqual(true);
  });

  describe('successCallback', () => {
    it('makes expected calls', () => {
      const firebaseUISignInSuccessWithAuthResultStub: FirebaseUISignInSuccessWithAuthResult = <
        any
      >{};
      spyOn(component, 'updateObserver').and.callThrough();
      component.successCallback(firebaseUISignInSuccessWithAuthResultStub);
      expect(component.updateObserver).toHaveBeenCalled();
    });
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'updateObserver').and.callThrough();
      component.ngOnInit();
      expect(component.updateObserver).toHaveBeenCalled();
    });
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

  describe('bypassLogin', () => {
    it('makes expected calls', () => {
      spyOn(component, 'updateObserver').and.callThrough();
      component.bypassLogin();
      expect(component.updateObserver).toHaveBeenCalled();
    });
  });

  describe('reportIssue', () => {
    it('makes expected calls', () => {
      spyOn(component, 'updateObserver').and.callThrough();
      component.reportIssue();
      expect(component.updateObserver).toHaveBeenCalled();
    });
  });
});
