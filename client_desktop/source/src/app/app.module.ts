
import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { FormsModule }                      from '@angular/forms';
import { HttpModule }                       from '@angular/http';

import { DragulaModule }                    from 'ng2-dragula';

import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';
import { MaterialModule }                   from '@angular/material';
import { FlexLayoutModule }                 from '@angular/flex-layout';

import 'hammerjs';

import { AppRouting }                       from './app.routing';

import { RouteService }                     from '../services/route.service';
import { LayoutService }                    from '../services/layout.service';
import { SocketService }                    from '../services/socket.service';
import { InterprocessService }              from '../services/interprocess.service';

import { DataframeBase }                    from '../services/dataframe.base';
import { DataframeAccount }                 from '../services/dataframe.account.service';

import { DataframeDesignerTree }                from '../services/dataframe.designerTree.service';
import { DataframeDesignerTreeItem }            from '../services/dataframe.designerTreeItem.service';
import { DataframeDesignerTreeItemConnection }  from '../services/dataframe.designerTreeItemConnection.service';
import { DataframeDesignerTreeItemSetting }     from '../services/dataframe.designerTreeItemSetting.service';
import { DataframeDesignerTreeItemTerminal }    from '../services/dataframe.designerTreeItemTerminal.service';

import { DataframeMessageHub }              from '../services/dataframe.messageHub.service';

import { NotifyService }                    from '../services/notify.service';
import { DatastoreService }                 from '../services/datastore.service';

import { MouseService }			            from '../services/mouse.service';

import { AppComponent }                     from './app.component';

import { HeaderComponent }                  from '../pages/header/header.component';
import { FooterComponent }                  from '../pages/footer/footer.component';
import { SidebarComponent }                 from '../pages/sidebar/sidebar.component';

import { LoginComponent }                   from '../pages/login/login.component';

import { DashboardComponent }               from '../pages/dashboard/dashboard.component';

import { MessageHubComponent }              from '../pages/messageHub/messageHub.component.base';
import { MessageHubComponentPropBase }      from '../pages/messageHub/messageHub.component.prop.base';

import { DesignerComponent }                from '../pages/designer/designer.component.base';
import { DesignerComponentPropBase }        from '../pages/designer/designer.component.prop.base';
import { DesignerComponentPropCanvas }      from '../pages/designer/designer.component.prop.canvas';
import { DesignerComponentPropConnector }   from '../pages/designer/designer.component.prop.connector';
import { DesignerComponentPropItem }        from '../pages/designer/designer.component.prop.item';
import { DesignerComponentPropTerminal }    from '../pages/designer/designer.component.prop.terminal';

import { DesignerService }                  from '../pages/designer/designer.component.service';

import { EditorComponent }                  from '../pages/editor/editor.component';

import { SettingsComponent }                from '../pages/settings/settings.component';

import { AuthenticatedGuardAll }            from '../services/authenticated.guard.all';
import { AuthenticatedGuardLogin }          from '../services/authenticated.guard.login';

import { AuthenticatedResolveAll }          from '../services/authenticated.resolve.all';
import { AuthenticatedResolveLogin }        from '../services/authenticated.resolve.login';

import { CodemirrorComponent }              from '../controls/ngCodeMirror/codemirror.component';

@NgModule (
{
    declarations    :
    [
        AppComponent
    ,   HeaderComponent
    ,   FooterComponent
    ,   SidebarComponent

    ,   LoginComponent
    ,   DashboardComponent

    ,   MessageHubComponent
    ,   MessageHubComponentPropBase

    ,   DesignerComponent

    ,   DesignerComponentPropBase
    ,   DesignerComponentPropCanvas
    ,   DesignerComponentPropConnector
    ,   DesignerComponentPropItem
    ,   DesignerComponentPropTerminal
    ,   EditorComponent
    ,   SettingsComponent
    ,   CodemirrorComponent
    ],
    imports         :
    [
        BrowserModule
    ,   FormsModule
    ,   HttpModule
    ,   DragulaModule
    ,   BrowserAnimationsModule
    ,   MaterialModule
    ,   FlexLayoutModule
    ,   AppRouting
    ],
    providers       :
    [
        RouteService
    ,   LayoutService
    ,   SocketService
    ,   InterprocessService

    ,   DataframeBase
    ,   DataframeAccount

    ,   DataframeDesignerTree
    ,   DataframeDesignerTreeItem
    ,   DataframeDesignerTreeItemConnection
    ,   DataframeDesignerTreeItemSetting
    ,   DataframeDesignerTreeItemTerminal

    ,   DataframeMessageHub

    ,   DesignerService

    ,   DatastoreService
    ,   MouseService
    ,   NotifyService
    ,   AuthenticatedGuardAll
    ,   AuthenticatedGuardLogin
    ,   AuthenticatedResolveAll
    ,   AuthenticatedResolveLogin
    ],
    bootstrap       :
    [
        AppComponent
    ]
} )
export class AppModule { }
