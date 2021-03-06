
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { Subscription }                 from 'rxjs/Subscription';

import { LayoutService  }               from '../../services/layout.service';
import { SocketService }                from '../../services/socket.service';
import { DataframeAccount }             from '../../services/dataframe.account.service';

@Component (
{
    selector    : 'dashboard'
,   templateUrl : './dashboard.component.html'
,   styleUrls   : ['./dashboard.component.scss']
} )
export class DashboardComponent implements OnInit
{
    current_height      : string;
    height_subscription : Subscription;

    current_token       : any;
    token_subscription  : Subscription;

    constructor ( private _route            : ActivatedRoute
                , private _layoutService    : LayoutService
                , private _socketService    : SocketService
                , private _dataframeAccount : DataframeAccount )
    {
    }

    ngOnInit ( ) : void
    {
        this.current_token = this._route.snapshot.data['token'];

        this.height_subscription = this._layoutService.observe_content_height ( ).subscribe (

            value => { this.resizeFn ( ); }

        );

        this.token_subscription = this._dataframeAccount.observe_account_token ( ).subscribe (

            value => { this.current_token = value; }

        );

        this._socketService.engine_init ( );
    }

    ngOnDestroy ( )
    {
        this.height_subscription.unsubscribe();
        this.token_subscription.unsubscribe();
    }

    private resizeFn ( )
    {
        this.current_height = this._layoutService.get_content_height ( );
    }

}
