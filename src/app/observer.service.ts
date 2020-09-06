import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AppData } from './app-data';

@Injectable({ providedIn: 'root' })
export class ObserverService {
    private subject = new BehaviorSubject<AppData>(new AppData());

    sendMessage(message: AppData) {
        this.subject.next(message);
    }

    clearMessage() {
        this.subject.next(new AppData());
    }

    getMessage(): Observable<AppData> {
        return this.subject.asObservable();
    }

    getMessageOnce(): AppData {
        return this.subject.value
    }
}
