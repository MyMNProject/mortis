
import { Component, OnChanges, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SimpleChanges }    from '@angular/core';
import { Subscription }     from 'rxjs/Subscription';

import { LayoutService  }   from '../../service/layout.service';
import { SidebarService }   from './sidebar.service';

@Component (
{
    moduleId        : module.id,
    selector        : 'app-sidebar',
    templateUrl     : 'sidebar.component.html',
    styleUrls       : ['sidebar.component.scss']
} )
export class SidebarComponent implements OnInit, OnChanges
{
     @Input() isMenuOpen:   boolean;
     @Output() onMenuItem   = new EventEmitter ( );

    sidebar_height_flex:    string;

    nav_center_left_mini:   string  = `48px`;
    nav_center_left_open:   string  = `280px`;

    nav_center_left_width:  string  = this.nav_center_left_mini;

    listof_menu_item:       any[]   = [];

    logout_menu_item:       any     = {};

    subscription:           Subscription;

    constructor ( private sidebarService : SidebarService,
                  private layoutService  : LayoutService  )
    {
    }

    ngOnChanges ( changes: SimpleChanges )
    {
        if ( this.isMenuOpen )
        {
            this.nav_center_left_width = this.nav_center_left_open;

        } else
        {
            this.nav_center_left_width = this.nav_center_left_mini;
        }
    }

    ngOnInit ( )
    {
        this.init_listof_menu_item ( );

        this.subscription = this.layoutService.get_content().subscribe (

            value => { this.resizeFn ( ); }

        );
    }

    init_listof_menu_item ( ) : void
    {
        this.listof_menu_item = this.sidebarService.get_listof_menu_item ( );

        this.logout_menu_item = this.sidebarService.get_menu_item_logoff ( );
    }

    on_select_sidebar_menu_item ( menu_item: any ) : void
    {
        this.onMenuItem.emit ( menu_item );
    }

    private resizeFn ( )
    {
        let adjusted_height = this.layoutService.get_current_height ( );

        adjusted_height -= 48;  // minus the dashboard
        adjusted_height -= 48;  // minus the messages
        adjusted_height -= 48;  // minus the flag
        adjusted_height -= 48;  // minus the settings
        adjusted_height -= 48;  // minus the logout / power

        this.sidebar_height_flex = `${adjusted_height}px`;
    }

}
