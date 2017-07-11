import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class GlobalService {

    constructor() { }



    private _currentPage: Subject<string> = new Subject();

    public pageChanged(page: string) {
        return this._currentPage.next(page);
    }
}