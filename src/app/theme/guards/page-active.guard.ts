import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { GlobalService } from "app/theme/services";

@Injectable()
export class PageGuard implements CanActivate {
    constructor(private globalService: GlobalService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //\?(.*)
        
        let page = state.url.match(/\/(.*)/)[1];
        this.globalService.pageChanged(page);
        return true;
    }
}