import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class GlobalService {

    constructor() { }

    private _currentPage$: Subject<string> = new Subject();
    public pagesNavigated$ = this._currentPage$.asObservable();

    public pageChanged(page: string) {
        this._currentPage$.next(page);
    }
}