! function(e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var o = n[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
  }
  var n = {};
  t.m = e, t.c = n, t.i = function(e) {
    return e
  }, t.d = function(e, n, i) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: i
    })
  }, t.n = function(e) {
    var n = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "", t(t.s = 17)
}([function(e, t) {
  e.exports = '<ion-side-menus enable-menu-with-back-views=false> <ion-side-menu-content class=sidemenu-content drag-content=false> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <button class="button button-clear" menu-toggle=left> <i class="icon ion-navicon-round"></i> </button> </ion-nav-buttons> <ion-nav-back-button> </ion-nav-back-button> </ion-nav-bar> <ion-tabs ng-if="!(vm.isBetaUser && $root.hasBreakerPanels)"> <ion-tab title="{{\'CONTROLS\' | translate}}" icon-on=icon-tab-control-on icon-off=icon-tab-control-off ui-sref=rooms.list> <ion-nav-view name=tab-rooms></ion-nav-view> </ion-tab> <ion-tab title="{{\'ACTIVITIES\' | translate}}" icon-on=icon-tab-activity-on icon-off=icon-tab-activity-off ui-sref=activities.list> <ion-nav-view name=tab-activities></ion-nav-view> </ion-tab> <ion-tab title="{{\'SCHEDULES\' | translate}}" icon-on=icon-tab-schedule-on icon-off=icon-tab-schedule-off ui-sref=schedules.list> <ion-nav-view name=tab-schedules></ion-nav-view> </ion-tab> </ion-tabs> <ion-tabs ng-if=$root.hasBreakerPanels> <ion-tab title="{{\'CONTROLS\' | translate}}" icon-on=icon-tab-control-on icon-off=icon-tab-control-off ui-sref=rooms.list> <ion-nav-view name=tab-rooms></ion-nav-view> </ion-tab> <ion-tab title="{{\'ACTIVITIES\' | translate}}" icon-on=icon-tab-activity-on icon-off=icon-tab-activity-off ui-sref=activities.list> <ion-nav-view name=tab-activities></ion-nav-view> </ion-tab> <ion-tab title="{{\'SCHEDULES\' | translate}}" icon-on=icon-tab-schedule-on icon-off=icon-tab-schedule-off ui-sref=schedules.list> <ion-nav-view name=tab-schedules></ion-nav-view> </ion-tab> <ion-tab title="{{\'BREAKERS\' | translate }}" icon-on=icon-tab-loadcenter-on icon-off=icon-tab-loadcenter-off ui-sref=breakers.breaker-dashboard> <ion-nav-view name=tab-breakers></ion-nav-view> </ion-tab> </ion-tabs> </ion-side-menu-content> <ion-side-menu class=sidemenu-menu side=left> <ion-header-bar> <img ng-src=./img/logo/leviton-logo.svg /> </ion-header-bar> <ion-content> <ion-list> <div class=sidemenu-top> <ion-item class=item-icon-left menu-close ng-click=vm.openHomeAwayPage()> {{\'RESIDENCE_SETTINGS\' | translate }} <span class="icon ion-gear-b"></span> </ion-item> <ion-item class=item-icon-left menu-close ng-click=vm.openResidenceList()> {{\'RESIDENCES\' | translate }} <span class="icon icon-residence-off"></span> </ion-item> <ion-item class=item-icon-left menu-close ng-click=vm.openUsersList()> {{\'USERS\' | translate}} <span class="icon icon-users"></span> </ion-item> <ion-item class=item-icon-left menu-close ng-click=vm.openConnectionsList()> {{\'CONNECTIONS\' | translate}} <span class="icon icon-connections"></span> </ion-item> <div class=hr-bar></div> <ion-item class=item-icon-left menu-close ng-click=vm.openSupportPage()> {{\'SUPPORT\' | translate}} <i class="icon icon-info-outline"></i> </ion-item> <ion-item class=item-icon-left menu-close ng-click=vm.showBasicCoachMarks()> {{\'TAKE_A_TOUR\' | translate}} <i class="icon ion-paper-airplane"></i> </ion-item> <ion-item class=item-icon-left menu-close ng-click=vm.openPrintUtil()> {{\'LOAD_CENTER_UTILITY\' | translate}} <i class="icon ion-ios-bolt"></i> </ion-item> <ion-item class=item-icon-left menu-close ng-click=vm.doLogout()> {{\'LOGOUT\' | translate}} <i class="icon ion-log-out"></i> </ion-item> </div> </ion-list> </ion-content> <ion-footer-bar class=version-info> {{\'APP_VERSION\' | translate}} : {{vm.appInfo.version | versionFilter}} </ion-footer-bar> </ion-side-menu> </ion-side-menus>'
}, function(e, t) {
  e.exports = {
    email: "",
    password: "",
    registered_via: "myLeviton",
    client_id: "levdb-echo-proto",
    prod: "my",
    qa: "myqa",
    dev: "mydev",
    server_prefix: "https://",
    server_suffix: ".leviton.com/",
    target_server: "https://my.leviton.com/",
    ota_device_home: "http://192.168.0.1/",
    ota_update_url: "Apps/DECORA_WIFI/updates",
    ota_update_url_beta: "Apps/DECORA_WIFI_BETA/updates",
    ota_test_device_url: !1,
    enable_interceptor_log: !1,
    enable_lib_log: !1,
    enable_sourcemap: !1,
    remove_log_stmt: !0
  }
}, function(e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.ncmErrorCodes = {
    BSM_DISCOVERY_IN_PROGRESS: {
      en: "Discovery in progress..."
    },
    BSM_INVALID_RESPONSE: {
      en: "Invalid response from BSM",
      es: "Respuesta inválida de BSM"
    },
    BSM_NO_BREAKER_LIST: {
      en: "BSM did not return BREAKER_LIST"
    },
    BSM_NOT_CONNETED: {
      en: "Not connected to Bluetooth Support Module (BSM)"
    },
    BSM_START_NOT_ACKED: {
      en: "BSM did not ACK ncmStart process"
    },
    BSM_STOP_NOT_ACKED: {
      en: "BSM did not ACK stop process"
    },
    BSM_TIMEOUT: {
      en: "Timeout from BSM"
    },
    INVALID_PROPERTIES: {
      en: "Invalid or Missing Object Properties"
    },
    INVALID_ID: {
      en: "Invalid or Missing id"
    },
    INVALID_TIMEOUT: {
      en: "Invalid or Missing timeout value"
    },
    INVALID_SSID: {
      en: "Invalid or Missing SSID"
    },
    INVALID_PASSPHRASE: {
      en: "Invalid or Missing Passphrase"
    },
    NOT_IMPLEMENTED: {
      en: "Function/Feature Not Implemented."
    },
    SYSTEM_ERROR: {
      en: "Error executing system command."
    }
  }, t.ncmErrorCodesText = function(e, n) {
    return t.ncmErrorCodes.hasOwnProperty(e) ? t.ncmErrorCodes[e].hasOwnProperty(n) ? t.ncmErrorCodes[e][n] : t.ncmErrorCodes[e].en : e
  }, t.ncmErrorCodesValue = function(e, n) {
    return t.ncmErrorCodes.hasOwnProperty(e) ? t.ncmErrorCodes[e].hasOwnProperty(n) ? {
      code: e,
      message: t.ncmErrorCodes[e][n]
    } : {
      code: e,
      message: t.ncmErrorCodes[e].en
    } : e
  };
  var i;
  ! function(e) {
    e.UNDEFINED = "UNDEFINED", e.AFCIMiswire = "AFCIMiswire", e.AFCIParallelFault = "AFCIParallelFault", e.AFCISerialArc5AFault = "AFCISerialArc5AFault", e.AFCISerialArc10AFault = "AFCISerialArc10AFault", e.AFCISerialArc15AFault = "AFCISerialArc15AFault", e.AFCISerialArc20AFault = "AFCISerialArc20AFault", e.AFCISerialArc30AFault = "AFCISerialArc30AFault", e.COMMUNICATING = "COMMUNICATING", e.GFCIFault = "GFCIFault", e.ManualOFF = "ManualOFF", e.ManualON = "ManualON", e.NotCommunicating = "NotCommunicating", e.OverCurrentTripPhase1 = "OverCurrentTripPhase1", e.OverCurrentTripPhase2 = "OverCurrentTripPhase2", e.OverloadTrip = "OverloadTrip", e.ShortCircuitTrip = "ShortCircuitTrip", e.SoftwareTrip = "SoftwareTrip", e.UpstreamFault = "UpstreamFault", e.default = "UNDEFINED"
  }(i = t.breakerCurrentState || (t.breakerCurrentState = {}));
  var o = {};
  o[i.UNDEFINED] = {
    notificationLevel: "ERROR",
    en: "UNDEFINED"
  }, o[i.AFCIMiswire] = {
    notificationLevel: "ERROR",
    en: "MisWire"
  }, o[i.AFCIParallelFault] = {
    notificationLevel: "WARNING",
    en: "AF-PAR"
  }, o[i.AFCISerialArc5AFault] = {
    notificationLevel: "WARNING",
    en: "AF-05A"
  }, o[i.AFCISerialArc10AFault] = {
    notificationLevel: "WARNING",
    en: "AF-10A"
  }, o[i.AFCISerialArc15AFault] = {
    notificationLevel: "WARNING",
    en: "AF-15A"
  }, o[i.AFCISerialArc20AFault] = {
    notificationLevel: "WARNING",
    en: "AF-20A"
  }, o[i.AFCISerialArc30AFault] = {
    notificationLevel: "WARNING",
    en: "AF-30A"
  }, o[i.COMMUNICATING] = {
    notificationLevel: "INFO",
    en: "COMMUNICATING"
  }, o[i.GFCIFault] = {
    notificationLevel: "WARNING",
    en: "GFCI"
  }, o[i.SoftwareTrip] = {
    notificationLevel: "WARNING",
    en: "REM-TR"
  }, o[i.ManualOFF] = {
    notificationLevel: "INFO",
    en: "OFF"
  }, o[i.ManualON] = {
    notificationLevel: "INFO",
    en: "ON"
  }, o[i.NotCommunicating] = {
    notificationLevel: "INFO",
    en: "Not Communicating"
  }, o[i.OverCurrentTripPhase1] = {
    notificationLevel: "WARNING",
    en: "Over-current Trip Phase 1"
  }, o[i.OverCurrentTripPhase2] = {
    notificationLevel: "WARNING",
    en: "Over-current Trip Phase 2"
  }, o[i.OverloadTrip] = {
    notificationLevel: "WARNING",
    en: "Overload"
  }, o[i.ShortCircuitTrip] = {
    notificationLevel: "WARNING",
    en: "ShortCircuitTrip"
  }, o[i.UpstreamFault] = {
    notificationLevel: "ERROR",
    en: "UpstreamFault"
  }, t.breakerCurrentStateText = function(e, t) {
    return o.hasOwnProperty(e) ? o[e].hasOwnProperty(t) ? o[e][t] : o[e].en : e
  }, t.breakerCurrentStateLevel = function(e) {
    return o.hasOwnProperty(e) ? o[e].notificationLevel : e
  };
  var a;
  ! function(e) {
    e.UNDEFINED = "UNDEFINED", e.AFCIGFCISelfTestFailure = "AFCIGFCISelfTestFailure", e.AFCISelfTestFailure = "AFCISelfTestFailure", e.EndOfLife = "EndOfLife", e.GFCIErrorManualPhase1Failed = "GFCIErrorManualPhase1Failed", e.GFCIErrorManualPhase2Failed = "GFCIErrorManualPhase2Failed", e.GFCIErrorPhase1Failed = "GFCIErrorPhase1Failed", e.GFCIErrorPhase2Failed = "GFCIErrorPhase2Failed", e.GFCIErrorSTFailed = "GFCIErrorSTFailed", e.GFCISCRBFailed = "GFCISCRBFailed", e.GFCISelfTestFailureWithLVST = "GFCISelfTestFailureWithLVST", e.Normal = "Normal", e.default = "UNDEFINED"
  }(a = t.breakerOperationalState || (t.breakerOperationalState = {}));
  var s = {};
  s[a.UNDEFINED] = {
    notificationLevel: "ERROR",
    en: "UNDEFINED"
  }, s[a.AFCISelfTestFailure] = {
    notificationLevel: "ERROR",
    en: "AFCI Self-Test Failure"
  }, s[a.AFCIGFCISelfTestFailure] = {
    notificationLevel: "ERROR",
    en: "AF-GF Self-Test Failure"
  }, s[a.EndOfLife] = {
    notificationLevel: "ERROR",
    en: "EndOfLife"
  }, s[a.GFCISelfTestFailureWithLVST] = {
    notificationLevel: "ERROR",
    en: "GFCI Self-Test Failure With LVST"
  }, s[a.GFCIErrorSTFailed] = {
    notificationLevel: "ERROR",
    en: "GFCI Error ST Failed"
  }, s[a.GFCISCRBFailed] = {
    notificationLevel: "ERROR",
    en: "GFCI SCR B Failed"
  }, s[a.GFCIErrorPhase1Failed] = {
    notificationLevel: "ERROR",
    en: "GFCI Error Phase 1 Failed"
  }, s[a.GFCIErrorPhase2Failed] = {
    notificationLevel: "ERROR",
    en: "GFCI Error Phase 2 Failed"
  }, s[a.GFCIErrorManualPhase1Failed] = {
    notificationLevel: "ERROR",
    en: "GFCI Error Manual Phase 1 Failed"
  }, s[a.GFCIErrorManualPhase2Failed] = {
    notificationLevel: "ERROR",
    en: "GFCI Error Manual Phase 2 Failed"
  }, s[a.Normal] = {
    notificationLevel: "INFO",
    en: "Normal"
  }, t.breakerOperationalStateText = function(e, t) {
    return s.hasOwnProperty(e) ? s[e].hasOwnProperty(t) ? s[e][t] : s[e].en : e
  }, t.breakerOperationalStateLevel = function(e) {
    return s.hasOwnProperty(e) ? s[e].notificationLevel : e
  };
  var r;
  ! function(e) {
    e.NOT_READY = "NOT_READY", e.READY = "READY", e.SYNCHRONIZING = "SYNCHRONIZING"
  }(r = t.breakerPanelStatus || (t.breakerPanelStatus = {}));
  var c = {};
  c[r.NOT_READY] = {
    notificationLevel: "ERROR",
    en: "Offline"
  }, c[r.READY] = {
    notificationLevel: "INFO",
    en: "Online"
  }, c[r.SYNCHRONIZING] = {
    notificationLevel: "INFO",
    en: "Synchronizing..."
  }, t.breakerPanelStatusText = function(e, t) {
    return c.hasOwnProperty(e) ? c[e].hasOwnProperty(t) ? c[e][t] : c[e].en : e
  }, t.breakerPanelStatusLevel = function(e) {
    return c.hasOwnProperty(e) ? c[e].notificationLevel : e
  };
  var l;
  ! function(e) {
    e.start = "start", e.stop = "stop", e.default = "start"
  }(l = t.discoverBreakersMode || (t.discoverBreakersMode = {}));
  var d = {};
  d[l.start] = {
    en: "start"
  }, d[l.stop] = {
    en: "stop"
  }, t.discoverBreakersModeText = function(e, t) {
    return d.hasOwnProperty(e) ? d[e].hasOwnProperty(t) ? d[e][t] : d[e].en : e
  };
  var u;
  ! function(e) {
    e.UNDEFINED = "UNDEFINED", e.AUTO_UPDATE_AVAILABLE = "AUTO_UPDATE_AVAILABLE", e.CHECKING = "CHECKING", e.DOWNLOADING = "DOWNLOADING", e.ERROR = "ERROR", e.STARTED = "STARTED", e.UP_TO_DATE = "UP_TO_DATE", e.UPDATE_AVAILABLE = "UPDATE_AVAILABLE"
  }(u = t.updateAvailability || (t.updateAvailability = {}));
  var v = {};
  v[u.UNDEFINED] = {
    notificationLevel: "ERROR",
    en: "UNDEFINED"
  }, v[u.AUTO_UPDATE_AVAILABLE] = {
    notificationLevel: "INFO",
    en: "AUTO UPDATE AVAILABLE"
  }, v[u.CHECKING] = {
    notificationLevel: "INFO",
    en: "CHECKING"
  }, v[u.DOWNLOADING] = {
    notificationLevel: "INFO",
    en: "DOWNLOADING"
  }, v[u.ERROR] = {
    notificationLevel: "ERROR",
    en: "ERROR"
  }, v[u.STARTED] = {
    notificationLevel: "INFO",
    en: "STARTED"
  }, v[u.UP_TO_DATE] = {
    notificationLevel: "INFO",
    en: "UP TO DATE"
  }, v[u.UPDATE_AVAILABLE] = {
    notificationLevel: "INFO",
    en: "UPDATE AVAILABLE"
  }, t.updateAvailabilityText = function(e, t) {
    return v.hasOwnProperty(e) ? v[e].hasOwnProperty(t) ? v[e][t] : v[e].en : e
  }, t.updateAvailabilityLevel = function(e) {
    return v.hasOwnProperty(e) ? v[e].notificationLevel : e
  };
  var m;
  ! function(e) {
    e.AccessPoint = "AccessPoint", e.Client = "Client", e.Disabled = "Disabled", e.default = "AccessPoint"
  }(m = t.wifiMode || (t.wifiMode = {}));
  var p = {};
  p[m.AccessPoint] = {
    en: "AccessPoint"
  }, p[m.Client] = {
    en: "Client"
  }, p[m.Disabled] = {
    en: "Disabled"
  }, t.wifiModeText = function(e, t) {
    return p.hasOwnProperty(e) ? p[e].hasOwnProperty(t) ? p[e][t] : p[e].en : e
  };
  var E;
  ! function(e) {
    e.AccessPoint = "AccessPoint", e.ClientConnectedAccess = "ClientConnectedAccess", e.ClientConnectedNoAccess = "ClientConnectedNoAccess", e.ClientDisconnected = "ClientDisconnected", e.Disabled = "Disabled", e.Error = "Error"
  }(E = t.wifiState || (t.wifiState = {}));
  var f = {};
  f[E.AccessPoint] = {
    en: "AccessPoint"
  }, f[E.ClientConnectedAccess] = {
    en: "Client Connected Access"
  }, f[E.ClientConnectedNoAccess] = {
    en: "Client Connected No Access"
  }, f[E.ClientDisconnected] = {
    en: "Client Disconnected"
  }, f[E.Disabled] = {
    en: "Disabled"
  }, f[E.Error] = {
    en: "Error"
  }, t.wifiStateText = function(e, t) {
    return f.hasOwnProperty(e) ? f[e].hasOwnProperty(t) ? f[e][t] : f[e].en : e
  }
}, function(e, t) {
  e.exports = "<ion-nav-view class=view-setup> </ion-nav-view>"
}, function(e, t, n) {
  "use strict";
  e.exports = function() {
    var e = n(16),
      t = {
        breaker_panel_local_ip: "http://" + e.address + ":3000/api/"
      },
      i = {
        breaker_panel_local_ip: "http://10.10.0.1:13107/api/"
      },
      o = {};
    return o = window.cordova ? i : t, {
      breaker_panel_local_ip: o.breaker_panel_local_ip
    }
  }()
}, function(e, t) {
  e.exports = "<div class=kwh-rate> <span class=kwh-rate-title>Electricity Rate Per kWh</span> <div class=item-input-a> <input type=number ng-model=vm.kwhRate> </div> </div> "
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'SCHEDULE_ADD_DEVICES.TITLE\' | translate }}"> <ion-nav-bar class=bar-a> <ion-nav-back-button ng-click=vm.onBackClick();> </ion-nav-back-button> <ion-nav-buttons side=right> <nav-right-button text="{{\'DONE\' | translate }}" ng-show="vm.dirty && !vm.processing" ng-disabled=vm.processing ng-click=vm.onSaveSchedule()> </nav-right-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <p class=tab-instruction-a> <span translate=SCHEDULE_ADD_DEVICES.TEXT1></span> </p> <list-divider label="{{\'AVAILABLE_DEVICES\' | translate}}" type=a ng-if=vm.availableActions.length> </list-divider> <ion-list> <ion-checkbox class=item-checkbox-b ng-click=vm.makeDirty() ng-repeat="action in vm.availableActions" ng-model=action.selected> {{action.name}} </ion-checkbox> </ion-list> <div class="item text-center" ng-if="!vm.availableActions.length && vm.$resolved"> <span>{{\'NO_AVAILABLE_DEVICES\' | translate}}</span> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view class=schedule-settings view-title="{{\'SCHEDULE_EDIT.TITLE\' | translate }}"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button type=local ng-click=vm.onBackClick();></back-button> </ion-nav-buttons> <ion-nav-buttons side=right> <nav-right-button text="{{\'SAVE\' | translate}}" ng-show="vm.dirty && !vm.processing" ng-click=vm.onSaveSchedule()> </nav-right-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <edit-name-simple name=vm.scheduleEditDataService.SCHEDULE.name on-change=vm.makeDirty() label="{{\'EDIT_SCHEDULE_NAME\' | translate }}" placeholder="{{\'SCHEDULE_EDIT.NAME_PLACEHOLDER\' | translate }}"> </edit-name-simple> <list-divider label="{{\'ASSIGNED_DEVICES\'| translate}}" type=a></list-divider> <ion-list> <item-schedule-action config=vm.itemConfig ng-repeat="action in vm.scheduleEditDataService.SCHEDULE.residentialActions track by action.targetModelId" on-delete=vm.onDeleteAction(action) on-change=vm.makeActionDirty(action); action=action> </item-schedule-action> </ion-list> <ion-list> <item-schedule-action config=vm.itemConfig ng-repeat="action in vm.scheduleEditDataService.ACTIONS_QUEUED track by action.targetModelId" on-delete=vm.onDeleteQueuedAction(action) action=action> </item-schedule-action> </ion-list> <a ng-click=vm.onAddDevices() class="button-clear-a ml-15 mb-10 mt-10"> <i class="icon ion-plus"></i> {{\'SELECT DEVICE\'| translate}} </a> <div ng-if=vm.$resolved class="animated fadeIn"> <list-divider type=checkbox> <i class="icon ion-ios-checkmark"></i> <span>{{\'SCHEDULE_EDIT.TEXT1\' | translate }}</span> </list-divider> <schedule-time-card initial-time=vm.initialOnTime time=vm.scheduleOnTime on-time-change=vm.makeDirty()> </schedule-time-card> <div class=mt-15></div> <list-divider type=checkbox ng-click=vm.onSelectEndTime()> <i class=icon ng-class="{\'ion-ios-checkmark\': vm.setOffTime, \'ion-ios-circle-outline\': !vm.setOffTime}"> </i> <span> {{\'SCHEDULE_EDIT.TEXT2\' | translate }} </span> </list-divider> <schedule-time-card ng-show=vm.setOffTime initial-time=vm.initialOffTime time=vm.scheduleOffTime on-time-change=vm.makeDirty()> </schedule-time-card> </div> <div class=mt-15></div> <list-divider type=c> {{ \'REPEAT\' | translate}} </list-divider> <list-weekdays ng-if=vm.$resolved on-change=vm.makeDirty() days-selection=vm.scheduleEditDataService.SCHEDULE.dayOfWeek> </list-weekdays> <button on-tap=vm.deleteSchedule() ng-if="vm.$resolved && vm.scheduleEditDataService.SCHEDULE.id" class=button-block-c> <span class=lev-red>{{\'REMOVE_SCHEDULE\' | translate}}</span> </button> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-modal-view class="ion-nifty-modal setup-modal"> <ion-nav-bar> <ion-nav-buttons side=right> <button class="button button-clear" ng-click=vm.modal.hide()> <i class="icon ion-close-circled lev-gray"></i> </button> </ion-nav-buttons> <ion-nav-title> {{\'FACTORY_RESET_PROCEDURE_TITLE\' | translate }} </ion-nav-title> </ion-nav-bar> <ion-content class="has-header has-footer"> <ul class=list-instruction-a> <li translate=FACTORY_RESET_PROCEDURE.a></li> <li translate=FACTORY_RESET_PROCEDURE.b></li> </ul> </ion-content> <ion-footer-bar> <h1 class="title lev-light-blue" ng-click=vm.modal.hide()> {{\'CONTINUE_SETTING_DEVICE\' | translate }} </h1> </ion-footer-bar> </ion-modal-view>'
}, function(e, t) {
  e.exports = {
    name: "avatar",
    version: "1.5.10",
    description: "A Leviton EMC&A App",
    scripts: {
      preinstall: "bower install",
      postinstall: "cordova prepare",
      nuke: "rm -rf ./node_modules ./bower_components ./platforms ./plugins ./www/app.*",
      reinstall: "npm run nuke && npm install",
      start: "webpack-dev-server --hot --inline --colors --content-base www/",
      serve: "gulp serve | ionic serve",
      band: "adb install -r ./platforms/android/build/outputs/apk/android-release.apk",
      logs: 'adb logcat -s "chromium"',
      "android:device": "ionic cordova run android --device",
      "open:xcode": 'open "platforms/ios/My Leviton.xcworkspace"',
      "copy-apk": "node ./scripts/copy-apk.js",
      "build-ios-release": "ionic cordova build ios",
      "build-android-release": "ionic cordova build android --release && npm run copy-apk",
      "build-release": "npm run build-ios-release && npm run build-android-release",
      "deploy-release": "gulp deploy && npm run build-release"
    },
    dependencies: {
      "android-versions": "^1.3.0",
      "angular-file-saver": "^1.1.3",
      "angular-input-masks": "^4.1.0",
      "angular-moment": "^1.0.1",
      chalk: "^1.1.3",
      "common-leapfrog": "git+ssh://git@lxckjrbap.leviton.inc:7999/mer/common-leapfrog.git",
      "cordova-android": "~6.3.0",
      "cordova-android-support-gradle-release": "~1.4.2",
      "cordova-ios": "~4.5.4",
      "cordova-plugin-android-permissions": "1.0.0",
      "cordova-plugin-customurlscheme": "~4.3.0",
      "cordova-plugin-datepicker": "~0.8.2",
      "cordova-plugin-device": "~1.1.6",
      "cordova-plugin-file": "~4.3.3",
      "cordova-plugin-file-opener2": "~2.0.19",
      "cordova-plugin-file-transfer": "~1.6.2",
      "cordova-plugin-geolocation": "https://github.com/prashantghimire/cordova-plugin-geolocation.git",
      "cordova-plugin-globalization": "~1.0.7",
      "cordova-plugin-inappbrowser": "~1.7.1",
      "cordova-plugin-insomnia": "~4.3.0",
      "cordova-plugin-leviton": "git+ssh://git@lxckjrbap.leviton.inc:7999/mul/cordova-plugin-leviton.git#1.0.1",
      "cordova-plugin-nativestorage": "~2.3.0",
      "cordova-plugin-splashscreen": "~5.0.2",
      "cordova-plugin-statusbar": "~2.3.0",
      "cordova-plugin-whitelist": "~1.2.2",
      del: "^2.2.0",
      gulp: "^3.9.1",
      "gulp-bump": "^2.4.0",
      "gulp-concat": "^2.2.0",
      "gulp-jshint": "^2.0.0",
      "gulp-rename": "^1.2.0",
      "gulp-sass": "^2.0.4",
      "ionic-plugin-keyboard": "~2.2.1",
      "jshint-stylish": "^2.2.0",
      "json-loader": "^0.5.4",
      lodash: "^4.17.10",
      moment: "^2.18.1",
      shelljs: "^0.3.0",
      yargs: "^6.3.0"
    },
    cordovaPlugins: ["cordova-plugin-device", "cordova-plugin-console", "cordova-plugin-whitelist", "ionic-plugin-keyboard", "cordova-plugin-datepicker", "cordova-plugin-inappbrowser", "leviton-cordova-plugin", "wifiwizard", "cordova-plugin-inappbrowser", {
      locator: "https://github.com/apache/cordova-plugin-statusbar.git",
      id: "cordova-plugin-customurlscheme"
    }, {
      locator: "https://github.com/apache/cordova-plugin-statusbar.git",
      id: "cordova-plugin-statusbar"
    }, "cordova-plugin-splashscreen"],
    cordovaPlatforms: ["ios", "android"],
    devDependencies: {
      "android-versions": "^1.3.0",
      "babel-core": "^6.17.0",
      "babel-loader": "^6.2.5",
      "babel-preset-es2015": "^6.16.0",
      concurrently: "^3.5.0",
      eslint: "^3.7.1",
      "eslint-config-angular": "^0.5.0",
      "eslint-plugin-angular": "^1.4.1",
      "file-exists": "^4.0.0",
      "fs-extra": "^6.0.1",
      "gulp-clean-css": "^2.0.10",
      "gulp-eslint": "^3.0.1",
      "gulp-if": "^2.0.1",
      "gulp-minify": "0.0.12",
      "gulp-replace": "^0.5.4",
      "gulp-sass": "^2.3.2",
      "gulp-sass-glob": "^1.0.9",
      "gulp-strip-comments": "^2.4.3",
      "gulp-strip-debug": "^1.1.0",
      "gulp-uglify": "^2.0.0",
      "gulp-webpack": "^1.5.0",
      "html-loader": "^0.4.3",
      ip: "^1.1.5",
      jshint: "^2.9.4",
      "ng-annotate-webpack-plugin": "^0.1.3",
      path: "^0.12.7",
      "run-sequence": "^1.2.2",
      shelljs: "^0.3.0",
      "uglifyjs-webpack-plugin": "git://github.com/mishoo/UglifyJS2.git#harmony",
      webpack: "^2.4.1",
      "webpack-stream": "^3.2.0",
      xml2js: "^0.4.19"
    },
    cordova: {
      platforms: ["android", "ios"],
      plugins: {
        "cordova-android-support-gradle-release": {
          ANDROID_SUPPORT_VERSION: "27.+"
        },
        "cordova-plugin-android-permissions": {},
        "cordova-plugin-customurlscheme": {
          URL_SCHEME: "comlevitonhome",
          ANDROID_SCHEME: " ",
          ANDROID_HOST: " ",
          ANDROID_PATHPREFIX: "/"
        },
        "cordova-plugin-datepicker": {},
        "cordova-plugin-device": {},
        "cordova-plugin-file": {},
        "cordova-plugin-file-opener2": {},
        "cordova-plugin-file-transfer": {},
        "cordova-plugin-geolocation": {},
        "cordova-plugin-globalization": {},
        "cordova-plugin-inappbrowser": {},
        "cordova-plugin-insomnia": {},
        "cordova-plugin-leviton": {},
        "cordova-plugin-nativestorage": {},
        "cordova-plugin-splashscreen": {},
        "cordova-plugin-statusbar": {},
        "cordova-plugin-whitelist": {},
        "ionic-plugin-keyboard": {}
      }
    }
  }
}, function(e, t) {
  e.exports = {
    web_app_url: "https://my.leviton.com/",
    support_page_url: "https://my.leviton.com/support/#/decora-smart-wifi/decora-wifi-general",
    alexa_help_url: "https://my.leviton.com/support/#/decora-smart-wifi/amazon-alexa"
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(40)(e), n(41)(e), n(18)(e), n(20)(e), n(21)(e), n(22)(e), n(24)(e), n(26)(e), n(27)(e), n(28)(e), n(29)(e), n(30)(e), n(31)(e), n(25)(e), n(23)(e), n(19)(e), n(34)(e), n(32)(e), n(33)(e), n(36)(e), n(37)(e), n(42)(e), n(43)(e), n(44)(e), n(45)(e), n(47)(e), n(48)(e), n(49)(e), n(50)(e), n(51)(e), n(52)(e), n(53)(e), n(54)(e), n(56)(e), n(58)(e), n(59)(e), n(61)(e), n(66)(e), n(67)(e), n(68)(e), n(69)(e), n(71)(e), n(72)(e), n(74)(e), n(75)(e), n(76)(e), n(78)(e), n(79)(e), n(80)(e), n(82)(e), n(83)(e), n(84)(e), n(85)(e), n(63)(e), n(60)(e), n(57)(e), n(81)(e), n(65)(e), n(64)(e), n(39)(e), n(38)(e), n(73)(e), n(46)(e), n(77)(e), n(35)(e), n(70)(e), n(55)(e), n(62)(e), n(86)(e), n(87)(e), n(91)(e), n(92)(e), n(89)(e), n(90)(e), n(88)(e), n(93)(e), n(94)(e), n(95)(e), n(96)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(102)(e), n(101)(e), n(103)(e), n(105)(e), n(119)(e), n(120)(e), n(121)(e), n(122)(e), n(124)(e), n(123)(e), n(139)(e), n(140)(e), n(137)(e), n(138)(e), n(149)(e), n(104)(e), n(108)(e), n(109)(e), n(97)(e), n(98)(e), n(100)(e), n(106)(e), n(107)(e), n(110)(e), n(111)(e), n(112)(e), n(113)(e), n(114)(e), n(115)(e), n(118)(e), n(117)(e), n(126)(e), n(128)(e), n(129)(e), n(130)(e), n(133)(e), n(136)(e), n(131)(e), n(125)(e), n(141)(e), n(143)(e), n(144)(e), n(145)(e), n(148)(e), n(150)(e), n(151)(e), n(153)(e), n(152)(e), n(157)(e), n(158)(e), n(160)(e), n(155)(e), n(154)(e), n(135)(e), n(156)(e), n(142)(e), n(134)(e), n(127)(e), n(132)(e), n(159)(e), n(146)(e), n(147)(e), n(99)(e), n(116)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$localStorageProvider", "$sessionStorageProvider", "LoopBackResourceProvider", "LevDBChangesProvider", function(e, t, n, i) {
      function o(t, o) {
        n.setUrlBase(t), i.setSocketUrl(o), null === e.get("cloud") && e.set("cloud", !1)
      }
      e.setKeyPrefix("Avatar/Local/"), t.setKeyPrefix("Avatar/Session/"), n.setAuthHeader("X-Access-Token"),
        function() {
          var t = e.get("cloud_api"),
            n = e.get("cloud_socket");
          t && n ? o(t, n) : (e.set("cloud_api", "https://my.leviton.com/api"), e.set("cloud_socket", "https://my.leviton.com/socket"), o("https://my.leviton.com/api", "https://my.leviton.com/socket"))
        }()
    }]).config(["$ionicConfigProvider", function(e) {
      e.backButton.previousTitleText(!1).text(""), e.tabs.position("bottom"), e.views.transition("none"), e.views.maxCache(0), e.views.swipeBackEnabled(!1), e.navBar.alignTitle("center")
    }]).config(["$translateProvider", function(e) {
      e.translations("en", n(485)), e.translations("en", n(481)), e.translations("en", n(480)), e.translations("es", n(486)), e.translations("es", n(482)), e.translations("fr", n(487)), e.translations("fr", n(483)), e.preferredLanguage("en"), e.fallbackLanguage("en"), e.useSanitizeValueStrategy("escapeParameters")
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(161)(e), n(166)(e), n(169)(e), n(174)(e), n(180)(e), n(183)(e), n(184)(e), n(185)(e), n(186)(e), n(196)(e), n(199)(e), n(218)(e), n(223)(e), n(175)(e), n(232)(e), n(236)(e), n(241)(e), n(244)(e), n(249)(e), n(253)(e), n(258)(e), n(266)(e), n(270)(e), n(275)(e), n(276)(e), n(277)(e), n(278)(e), n(290)(e), n(294)(e), n(295)(e)
  }
}, function(e, t, n) {
  "use strict";
  ! function() {
    e.exports = function(e) {
      e.config(["$stateProvider", "$urlRouterProvider", function(e, t) {
        t.otherwise("/app-loading"), e.state("onboarding", {
          url: "/onboarding",
          abstract: !0,
          cache: !1,
          template: n(427),
          controller: "OnboardingCtrl as vm",
          resolve: {
            CurrentUser: ["AppSession", function(e) {
              return e.initialized.promise
            }]
          }
        }).state("devices", {
          url: "/devices",
          controller: "TabsCtrl as vm",
          template: n(0),
          abstract: !0,
          cache: !1,
          data: {
            authorize: !0
          },
          resolve: {
            Session: ["AppSession", function(e) {
              return e.initialized.promise
            }],
            Residences: ["ResidenceManager", function(e) {
              return e.initialized.promise
            }]
          }
        }).state("breakers", {
          url: "/breakers",
          controller: "TabsCtrl as vm",
          template: n(0),
          abstract: !0,
          cache: !1,
          data: {
            authorize: !0
          },
          resolve: {
            Session: ["AppSession", "ResidenceManager", function(e, t) {
              return e.initialized.promise.then(function() {
                return t.initialized.promise
              })
            }]
          }
        }).state("schedules", {
          url: "/schedules",
          controller: "TabsCtrl as vm",
          template: n(0),
          abstract: !0,
          cache: !1,
          data: {
            authorize: !0
          },
          resolve: {
            Session: ["AppSession", "ResidenceManager", function(e, t) {
              return e.initialized.promise.then(function() {
                return t.initialized.promise
              })
            }]
          }
        }).state("activities", {
          url: "/activities",
          controller: "TabsCtrl as vm",
          template: n(0),
          abstract: !0,
          cache: !1,
          data: {
            authorize: !0
          },
          resolve: {
            Session: ["AppSession", "ResidenceManager", function(e, t) {
              return e.initialized.promise.then(function() {
                return t.initialized.promise
              })
            }]
          }
        }).state("rooms", {
          url: "/rooms",
          controller: "TabsCtrl as vm",
          template: n(0),
          abstract: !0,
          cache: !1,
          data: {
            authorize: !0
          },
          resolve: {
            Session: ["AppSession", "ResidenceManager", function(e, t) {
              return e.initialized.promise.then(function() {
                return t.initialized.promise
              })
            }]
          }
        }).state("setups", {
          url: "/setups",
          controller: "SetupsCtrl as vm",
          template: n(456),
          data: {
            authorize: !0
          },
          abstract: !0
        }).state("activity-setup-wizard", {
          url: "/activity-setup-wizard",
          template: n(453),
          data: {
            authorize: !0
          },
          abstract: !0
        }).state("switch-setup-wizard", {
          url: "/switch-setup-wizard",
          template: n(3),
          controller: "SwitchSetupWizard as vm",
          data: {
            authorize: !0
          },
          abstract: !0
        }).state("scene-wizard", {
          url: "/scene-wizard",
          controller: "SceneWizardCtrl as vm",
          template: n(440),
          data: {
            authorize: !0
          },
          abstract: !0
        }).state("leapfrog-setup-wizard", {
          url: "/leapfrog-setup-wizard",
          template: n(3),
          data: {
            authorize: !0
          },
          abstract: !0
        }).state("leapfrog-online-wizard", {
          url: "/leapfrog-online-wizard",
          template: n(3),
          data: {
            authorize: !0
          },
          abstract: !0
        }).state("home-away", {
          url: "/home-away",
          template: n(454),
          data: {
            authorize: !0
          },
          abstract: !0
        }).state("home-away-wizard", {
          url: "/home-away-wizard",
          template: n(379),
          data: {
            authorize: !0
          },
          abstract: !0
        }).state("support", {
          url: "/support",
          template: '<ion-nav-view class="view-setup"></ion-nav-view>',
          data: {
            authorize: !0
          },
          abstract: !0
        })
      }])
    }
  }()
}, function(e, t) {
  e.exports = {
    address: "192.168.249.92"
  }
}, function(e, t, n) {
  ! function(e) {
    var t = ["ionic", "ngStorage", "ngMessages", "ng-levdb", "ngCordova", "highcharts-ng", "ghiscoding.validation", "pascalprecht.translate", "angularMoment", "toggle-switch", "ngFileSaver", "timer", "ui.utils.masks"];
    [{
      package: n(13)
    }, {
      package: n(15)
    }, {
      package: n(11)
    }, {
      package: n(12)
    }, {
      package: n(14)
    }].forEach(function(n, i) {
      var o = "avatar_" + i,
        a = e.module(o, []);
      n.package(a), t.push(o)
    }), e.module("avatar", t).run(["$window", "$ionicPlatform", function(e, t) {
      t.ready().then(function() {
        ionic.Platform.isFullScreen = !0, e.onerror = e.onerror || function(e, t, n, i, o) {}
      })
    }])
  }(window.angular)
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.run(["$localStorage", function(e) {
      delete e.wifiNetworks
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.run(["$androidPermissions", "$ionicPlatform", function(e, t) {
      t.ready(function() {
        e.requestPermissions(["READ_EXTERNAL_STORAGE", "WRITE_EXTERNAL_STORAGE"])
      })
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.run(["$ionicPlatform", "AccountManager", "$rootScope", "LevDBChanges", function(e, t, n, i) {
      n.$apply(function() {
        n.APP_IS_ACTIVE = !0
      }), e.on("resume", function() {
        n.$apply(function() {
          n.APP_IS_ACTIVE = !0
        }), n.socketConnected || t.connectSocket()
      }), e.on("pause", function() {
        n.$apply(function() {
          n.APP_IS_ACTIVE = !1
        }), i.disconnectSocket()
      })
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.run(["AppSession", "LoopBackAuth", "ResidenceManager", "AccountManager", "$rootScope", "$state", "$ionicHistory", "$ionicLoading", "$localStorage", "$timeout", "$window", function(e, t, n, i, o, a, s, r, c, l, d) {
        var u = c.cloud_api;
        o.isDev = !!u && !u.contains("my."), !d.cordova && (t.accessTokenId ? function() {
          c.credentials = c.credentials || {}, r.show({
            duration: 2e3
          }), e.setupCurrentUser().then(n.getResidences).then(function(e) {
            return i.connectSocket().then(function() {
              return e
            })
          }).then(function(e) {
            "accounts.login" === a.current.name && i.handlePostLoginRoute(e)
          }).catch(function(e) {
            var t = e.error.type;
            "SERVER_ERROR" === t && i.logout().finally(function() {
              a.go("accounts.login", {}, {
                reload: !0
              })
            })
          }).finally(r.hide)
        }() : a.go("accounts.login"))
      }])
    }
  }).call(t, "src/abstracts/config/auto-login.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.run(["$ionicPlatform", "$window", "$state", function(e, t, n) {
      function i(e) {
        for (var t = ["accounts.login", "rooms.list", "activities.list", "schedules.list"], n = 0; n < t.length; n++) {
          var i = t[n];
          if (e.indexOf(i) >= 0) return !0
        }
        return !1
      }
      e.ready(function() {
        t.cordova && t.cordova.plugins && t.cordova.plugins.Keyboard && (cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!1), cordova.plugins.Keyboard.disableScroll(!1))
      }), e.registerBackButtonAction(function(e) {
        var t = n.current.name,
          o = i(t);
        e.preventDefault(), o && ionic.Platform.exitApp()
      }, 100)
    }]).run(["$ionicHistory", "$rootScope", "$state", function(e, t, n) {
      var i = t.$ionicGoBack;
      t.$ionicGoBack = function() {
        var t = e.viewHistory();
        return t.backView && t.backView.stateName && t.currentView && t.currentView.stateName && t.currentView.stateName === t.backView.stateName ? void n.go("rooms.list", {}, {
          reload: !0
        }) : t.backView ? void i() : void n.go("rooms.list", {}, {
          reload: !0
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.run(["$rootScope", "$state", function(e, t) {
      e.$on("URL_SCHEME_CLICK", function(e, n) {
        "after_password_reset" === n.url_type && t.go("accounts.login")
      })
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.run(["$ionicPlatform", "$cordovaGlobalization", "$translate", "$window", function(e, t, n, i) {
        e.ready(function() {
          try {
            t.getPreferredLanguage().then(function(e) {
              var t = ((e || {}).value || "").split("-")[0];
              t && n.use(t)
            })
          } catch (e) {
            i.cordova
          }
        })
      }])
    }
  }).call(t, "src/abstracts/config/globalization.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.run(["$localStorage", function(e) {
      !0 !== e.ACTIVITY_RAN && (e.ACTIVITY_RAN = !1)
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.run(["$rootScope", "$window", "$state", "LevDBChanges", "LiveSubscription", function(e, t, n, i, o) {
      e.online = navigator.onLine, t.addEventListener("offline", function() {
        e.$apply(function() {
          e.online = !1
        }, !1)
      }), t.addEventListener("online", function() {
        e.$apply(function() {
          e.online = !0, o.stateRequiresInternet() && (i.connectSocket(), n.reload())
        }, !1)
      })
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.run(["$window", function(e) {
      var t = {
        allowPassphrases: !1,
        maxLength: 128,
        minLength: 8,
        minPhraseLength: 20,
        minOptionalTestsToPass: 0
      };
      e.owaspPasswordStrengthTest.config(t), e.owaspPasswordStrengthTest.tests.required.push(function(e) {
        if (e.indexOf(" ") >= 0) return {
          type: "NO_SPACE",
          message: "Password should not have spaces."
        }
      })
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.run(["$rootScope", "LevDBChanges", "$state", "$timeout", "LiveSubscription", "LoopBackAuth", "CheckConnection", function(e, t, n, i, o, a, s) {
      e.socketReconnectAttemptCount = 0, e.$on("LevDBChanges:connected", function() {
        o.stateRequiresInternet() && e.$apply(function() {
          e.socketReconnectAttemptCount = 0, e.socketConnected = !0
        })
      }), e.$on("LevDBChanges:closed", function() {
        var n = !1;
        o.stateRequiresInternet() && (e.socketReconnectAttemptCount >= 300 || n || (e.$apply(function() {
          e.socketConnected = !1
        }), e.APP_IS_ACTIVE && (e.socketReconnectAttemptCount += 1, i(function() {
          a.accessTokenId && a.currentUserId && e.online && t.connectSocket()
        }, 2500), s.isOnline().then(function(e) {
          n = !1
        }).catch(function() {
          n = !0
        }))))
      })
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.run(["$document", "$window", function(e, t) {
      function n() {
        "android" == cordova.platformId && StatusBar.backgroundColorByHexString("#333"), t.open = cordova.InAppBrowser.open
      }
      e[0].addEventListener("deviceready", n, !1)
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.run(["$rootScope", "$ionicHistory", "$state", function(e, t, n) {
      e.$on("$ionicView.enter", function() {
        function i(e) {
          if (!e) return !1;
          for (var i = [{
              state: "rooms.details",
              handleBack: function() {
                n.go("rooms.list", {}, {
                  reload: !0
                })
              }
            }, {
              state: "rooms.switch-details",
              handleBack: function() {
                if (t.backView()) return void t.goBack();
                n.go("rooms.list", {}, {
                  reload: !0
                })
              }
            }, {
              state: "activities.details",
              handleBack: function() {
                n.go("activities.list", {}, {
                  reload: !0
                })
              }
            }, {
              state: "residences.list",
              handleBack: function() {
                n.go("rooms.list", {}, {
                  reload: !0
                })
              }
            }], o = 0; o < i.length; o++) {
            var a = i[o];
            if (a.state === e.stateName) return a
          }
          return !1
        }
        e.goToBackView = function() {
            var e = t.backView(),
              o = t.currentView(),
              a = e && o && e.stateName === o.stateName,
              s = i(o);
            if (s) return void s.handleBack();
            if (e && !a) return void t.goBack();
            var r = _.get(n, "current.name") || "",
              c = "app-loading";
            return r.contains("rooms") ? void(c = "rooms.list") : r.contains("activities") ? void(c = "activities.list") : r.contains("schedules") ? void(c = "schedules.list") : void n.go(c, {}, {
              reload: !0
            })
          },
          function() {
            var e = ["rooms.list", "activities.list", "schedules.list"];
            (_.get(n, "current.name") || "").containsAnyOf(e)
          }()
      })
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.run(["$window", "$rootScope", "$timeout", "$localStorage", function(e, t, n, i) {
        e.handleOpenURL = function(e) {
          var i = new URL(e),
            o = i.searchParams.get("type"),
            a = i.searchParams.get("code"),
            s = i.searchParams.get("oauthType"),
            r = {
              url_type: o,
              nestCode: a
            };
          n(function() {
            if (a) return void t.$broadcast("NEST_OAUTH_CODE", {
              nestCode: a
            });
            if (s && "august" === s) {
              var e = {
                oauthType: s
              };
              return void t.$broadcast("AUGUST_DATA", e)
            }
            t.$broadcast("URL_SCHEME_CLICK", r)
          }, 1e3)
        }, delete i.cachedUser
      }])
    }
  }).call(t, "src/abstracts/config/url-scheme-handler.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.factory("AccountManager", ["Person", "AppSession", "LevDBChanges", "$q", "LoopBackAuth", "$rootScope", "$window", "$ionicHistory", "$state", "NestIntegrationFactory", function(e, t, n, i, o, a, s, r, c, l) {
        var d = this;
        return d.login = function(n) {
          var o = i.defer();
          return s.navigator.onLine ? (n.loggedInVia = n.loggedInVia || "myLeviton", e.login(n).$promise.then(function(e) {
            var n = t.getLoginResponse(e);
            return n
          }).then(function(e) {
            if (!e.error) return d.connectSocket(), t.setupCurrentUser();
            o.reject(e)
          }).then(function(e) {
            e && o.resolve(e)
          }).catch(function(e) {
            o.reject(e)
          })) : o.reject({
            error: {
              type: "DEVICE_OFFLINE"
            }
          }), o.promise
        }, d.handlePostLoginRoute = function(e) {
          r.nextViewOptions({
            disableBack: !0,
            disableAnimate: !0
          }), angular.isArray(e) && e.length > 0 ? c.go("rooms.list") : c.go("onboarding.add-residence")
        }, d.logout = function() {
          var o = i.defer(),
            a = {
              type: "LOGOUT_SUCCESS"
            };
          return e.logout().$promise.then(function(e) {
            a = e
          }).finally(function() {
            t.destroy(), n.disconnectSocket(), l.reset(), o.resolve(a)
          }), o.promise
        }, d.connectSocket = function(e) {
          var t = i.defer();
          e && e.error && t.reject(e);
          var s = n.socketConnected,
            r = o.currentUserId && !n.socketConnected && !n.socketConnecting;
          return s ? t.resolve("already connected") : r ? (n.connectSocket(), a.$on("LevDBChanges:connected", function() {
            t.resolve("just connected")
          })) : t.resolve("socket failed"), t.promise
        }, d.validatePasswordStrength = function(e) {
          return s.owaspPasswordStrengthTest.test(e)
        }, d.resendEmailVerification = function(t) {
          return e.verifyEmail({
            id: t
          }).$promise.then(function(e) {
            return e
          })
        }, d.clearUserTokens = function() {
          o.clearStorage(), o.clearUser()
        }, d
      }])
    }
  }).call(t, "src/abstracts/factories/account-manager.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.factory("AlertFactory", ["$ionicLoading", "$timeout", "$q", function(e, t, n) {
        var i = {};
        return i.pop = function(i) {
          var o = i.message || i.template,
            a = i.duration || 2e3,
            s = i.callback,
            r = n.defer();
          return e.show({
            template: '<div class="text-toast">' + o + "</div>",
            duration: a
          }).then(function() {
            t(function() {
              return r.resolve(), s
            }, a)
          }), r.promise
        }, i
      }]).factory("Toast", ["AlertFactory", "$ionicLoading", function(e, t) {
        var n = e;
        return n.show = e.pop, n.hide = t.hide, n
      }]).factory("PopupFactory", ["$ionicPopup", "$localStorage", "$translate", "$ionicPlatform", function(e, t, n, i) {
        var o = {};
        return o.alert = function(a) {
          var s = i.registerBackButtonAction(_.noop, 401),
            r = {
              title: a.title || n.instant("ALERT"),
              template: a.message || a.template,
              buttons: a.buttons || [{
                text: "Ok",
                type: "button-ok"
              }],
              cssClass: "popup-factory-alert " + (a.cssClass ? a.cssClass : ""),
              hardwareBackButtonClose: !1
            };
          return a.scope && (r.scope = a.scope), t.POPUP_SHOWING = !0, o.CURRENT_POPUP = e.alert(r), o.CURRENT_POPUP_PROMISE = o.CURRENT_POPUP.then(function() {
            t.POPUP_SHOWING = !1, s()
          }), o.CURRENT_POPUP
        }, o.confirm = function(t) {
          var i = {
            title: t.title || n.instant("CONFIRM"),
            template: t.message || t.template,
            buttons: t.buttons,
            cssClass: "popup-factory-confirm " + (t.cssClass ? t.cssClass : ""),
            hardwareBackButtonClose: !1
          };
          return t.scope && (i.scope = t.scope), o.CURRENT_POPUP = e.confirm(i), o.CURRENT_POPUP
        }, o.dismissPopup = function() {
          o.CURRENT_POPUP.close()
        }, o
      }])
    }
  }).call(t, "src/abstracts/factories/alert-factory.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("AndroidPermissionsManager", ["$androidPermissions", "$window", "$q", function(e, t, n) {
      var i = {
        hasPermission: !1
      };
      return i.loadLocationPermission = function() {
        return e.checkPermission("ACCESS_COARSE_LOCATION").then(function(e) {
          return i.hasPermission = e.hasPermission, e
        })
      }, i.requestLocationPermission = function() {
        return e.requestPermission("ACCESS_COARSE_LOCATION").then(function() {
          return i.loadLocationPermission()
        }).then(function(e) {
          return e.error = e.error || "DENIED", i.hasPermission ? n.resolve({
            status: "ALLOWED"
          }) : n.reject(e)
        })
      }, i.requireLocationPermission = function() {
        return t.cordova ? i.loadLocationPermission().then(function() {
          return i.hasPermission ? {
            status: "ALLOWED"
          } : i.requestLocationPermission()
        }) : (i.hasPermission = !0, n.resolve({
          status: "BROWSER_MODE"
        }))
      }, i
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("$androidPermissions", ["$window", "$q", function(e, t) {
      var n = function(t) {
          var n = e.cordova || {},
            i = n.plugins || {},
            o = i.permissions || {};
          return t ? o[t] : o
        },
        i = function(e) {
          var t = n(),
            i = function(e) {
              return t[e]
            };
          return e.map(i)
        },
        o = function(e, i) {
          var o = n(),
            a = o[e],
            s = t.defer();
          return a ? (i.push(function(e) {
            s.resolve(e)
          }), i.push(function(e) {
            s.reject(e)
          }), a.apply(o, i), s.promise) : t.resolve("browser")
        };
      return {
        checkPermission: function(e) {
          return o("checkPermission", [n(e)])
        },
        requestPermission: function(e) {
          return o("requestPermission", [n(e)])
        },
        requestPermissions: function(e) {
          return o("requestPermissions", [i(e)])
        }
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("AppData", function() {
      var e = {};
      return e.countries = [{
        name: "United States",
        code: "US"
      }, {
        name: "Afghanistan",
        code: "AF"
      }, {
        name: "Albania",
        code: "AL"
      }, {
        name: "Algeria",
        code: "DZ"
      }, {
        name: "American Samoa",
        code: "AS"
      }, {
        name: "Andorra",
        code: "AD"
      }, {
        name: "Angola",
        code: "AO"
      }, {
        name: "Anguilla",
        code: "AI"
      }, {
        name: "Antarctica",
        code: "AQ"
      }, {
        name: "Antigua and Barbuda",
        code: "AG"
      }, {
        name: "Argentina",
        code: "AR"
      }, {
        name: "Armenia",
        code: "AM"
      }, {
        name: "Aruba",
        code: "AW"
      }, {
        name: "Australia",
        code: "AU"
      }, {
        name: "Austria",
        code: "AT"
      }, {
        name: "Azerbaijan",
        code: "AZ"
      }, {
        name: "Bahamas",
        code: "BS"
      }, {
        name: "Bahrain",
        code: "BH"
      }, {
        name: "Bangladesh",
        code: "BD"
      }, {
        name: "Barbados",
        code: "BB"
      }, {
        name: "Belarus",
        code: "BY"
      }, {
        name: "Belgium",
        code: "BE"
      }, {
        name: "Belize",
        code: "BZ"
      }, {
        name: "Benin",
        code: "BJ"
      }, {
        name: "Bermuda",
        code: "BM"
      }, {
        name: "Bhutan",
        code: "BT"
      }, {
        name: "Bolivia",
        code: "BO"
      }, {
        name: "Bosnia and Herzegovina",
        code: "BA"
      }, {
        name: "Botswana",
        code: "BW"
      }, {
        name: "Bouvet Island",
        code: "BV"
      }, {
        name: "Brazil",
        code: "BR"
      }, {
        name: "British Indian Ocean Territory",
        code: "IO"
      }, {
        name: "Brunei Darussalam",
        code: "BN"
      }, {
        name: "Bulgaria",
        code: "BG"
      }, {
        name: "Burkina Faso",
        code: "BF"
      }, {
        name: "Burundi",
        code: "BI"
      }, {
        name: "Cambodia",
        code: "KH"
      }, {
        name: "Cameroon",
        code: "CM"
      }, {
        name: "Canada",
        code: "CA"
      }, {
        name: "Cape Verde",
        code: "CV"
      }, {
        name: "Cayman Islands",
        code: "KY"
      }, {
        name: "Central African Republic",
        code: "CF"
      }, {
        name: "Chad",
        code: "TD"
      }, {
        name: "Chile",
        code: "CL"
      }, {
        name: "China",
        code: "CN"
      }, {
        name: "Christmas Island",
        code: "CX"
      }, {
        name: "Cocos (Keeling) Islands",
        code: "CC"
      }, {
        name: "Colombia",
        code: "CO"
      }, {
        name: "Comoros",
        code: "KM"
      }, {
        name: "Congo",
        code: "CG"
      }, {
        name: "Congo, The Democratic Republic of the",
        code: "CD"
      }, {
        name: "Cook Islands",
        code: "CK"
      }, {
        name: "Costa Rica",
        code: "CR"
      }, {
        name: "Cote D'Ivoire",
        code: "CI"
      }, {
        name: "Croatia",
        code: "HR"
      }, {
        name: "Cuba",
        code: "CU"
      }, {
        name: "Cyprus",
        code: "CY"
      }, {
        name: "Czech Republic",
        code: "CZ"
      }, {
        name: "Denmark",
        code: "DK"
      }, {
        name: "Djibouti",
        code: "DJ"
      }, {
        name: "Dominica",
        code: "DM"
      }, {
        name: "Dominican Republic",
        code: "DO"
      }, {
        name: "Ecuador",
        code: "EC"
      }, {
        name: "Egypt",
        code: "EG"
      }, {
        name: "El Salvador",
        code: "SV"
      }, {
        name: "Equatorial Guinea",
        code: "GQ"
      }, {
        name: "Eritrea",
        code: "ER"
      }, {
        name: "Estonia",
        code: "EE"
      }, {
        name: "Ethiopia",
        code: "ET"
      }, {
        name: "Falkland Islands (Malvinas)",
        code: "FK"
      }, {
        name: "Faroe Islands",
        code: "FO"
      }, {
        name: "Fiji",
        code: "FJ"
      }, {
        name: "Finland",
        code: "FI"
      }, {
        name: "France",
        code: "FR"
      }, {
        name: "French Guiana",
        code: "GF"
      }, {
        name: "French Polynesia",
        code: "PF"
      }, {
        name: "French Southern Territories",
        code: "TF"
      }, {
        name: "Gabon",
        code: "GA"
      }, {
        name: "Gambia",
        code: "GM"
      }, {
        name: "Georgia",
        code: "GE"
      }, {
        name: "Germany",
        code: "DE"
      }, {
        name: "Ghana",
        code: "GH"
      }, {
        name: "Gibraltar",
        code: "GI"
      }, {
        name: "Greece",
        code: "GR"
      }, {
        name: "Greenland",
        code: "GL"
      }, {
        name: "Grenada",
        code: "GD"
      }, {
        name: "Guadeloupe",
        code: "GP"
      }, {
        name: "Guam",
        code: "GU"
      }, {
        name: "Guatemala",
        code: "GT"
      }, {
        name: "Guernsey",
        code: "GG"
      }, {
        name: "Guinea",
        code: "GN"
      }, {
        name: "Guinea-Bissau",
        code: "GW"
      }, {
        name: "Guyana",
        code: "GY"
      }, {
        name: "Haiti",
        code: "HT"
      }, {
        name: "Heard Island and Mcdonald Islands",
        code: "HM"
      }, {
        name: "Holy See (Vatican City State)",
        code: "VA"
      }, {
        name: "Honduras",
        code: "HN"
      }, {
        name: "Hong Kong",
        code: "HK"
      }, {
        name: "Hungary",
        code: "HU"
      }, {
        name: "Iceland",
        code: "IS"
      }, {
        name: "India",
        code: "IN"
      }, {
        name: "Indonesia",
        code: "ID"
      }, {
        name: "Iran, Islamic Republic Of",
        code: "IR"
      }, {
        name: "Iraq",
        code: "IQ"
      }, {
        name: "Ireland",
        code: "IE"
      }, {
        name: "Isle of Man",
        code: "IM"
      }, {
        name: "Israel",
        code: "IL"
      }, {
        name: "Italy",
        code: "IT"
      }, {
        name: "Jamaica",
        code: "JM"
      }, {
        name: "Japan",
        code: "JP"
      }, {
        name: "Jersey",
        code: "JE"
      }, {
        name: "Jordan",
        code: "JO"
      }, {
        name: "Kazakhstan",
        code: "KZ"
      }, {
        name: "Kenya",
        code: "KE"
      }, {
        name: "Kiribati",
        code: "KI"
      }, {
        name: "Korea, Democratic People's Republic of",
        code: "KP"
      }, {
        name: "Korea, Republic of",
        code: "KR"
      }, {
        name: "Kuwait",
        code: "KW"
      }, {
        name: "Kyrgyzstan",
        code: "KG"
      }, {
        name: "Lao People's Democratic Republic",
        code: "LA"
      }, {
        name: "Latvia",
        code: "LV"
      }, {
        name: "Lebanon",
        code: "LB"
      }, {
        name: "Lesotho",
        code: "LS"
      }, {
        name: "Liberia",
        code: "LR"
      }, {
        name: "Libyan Arab Jamahiriya",
        code: "LY"
      }, {
        name: "Liechtenstein",
        code: "LI"
      }, {
        name: "Lithuania",
        code: "LT"
      }, {
        name: "Luxembourg",
        code: "LU"
      }, {
        name: "Macao",
        code: "MO"
      }, {
        name: "Macedonia, The Former Yugoslav Republic of",
        code: "MK"
      }, {
        name: "Madagascar",
        code: "MG"
      }, {
        name: "Malawi",
        code: "MW"
      }, {
        name: "Malaysia",
        code: "MY"
      }, {
        name: "Maldives",
        code: "MV"
      }, {
        name: "Mali",
        code: "ML"
      }, {
        name: "Malta",
        code: "MT"
      }, {
        name: "Marshall Islands",
        code: "MH"
      }, {
        name: "Martinique",
        code: "MQ"
      }, {
        name: "Mauritania",
        code: "MR"
      }, {
        name: "Mauritius",
        code: "MU"
      }, {
        name: "Mayotte",
        code: "YT"
      }, {
        name: "Mexico",
        code: "MX"
      }, {
        name: "Micronesia, Federated States of",
        code: "FM"
      }, {
        name: "Moldova, Republic of",
        code: "MD"
      }, {
        name: "Monaco",
        code: "MC"
      }, {
        name: "Mongolia",
        code: "MN"
      }, {
        name: "Montserrat",
        code: "MS"
      }, {
        name: "Morocco",
        code: "MA"
      }, {
        name: "Mozambique",
        code: "MZ"
      }, {
        name: "Myanmar",
        code: "MM"
      }, {
        name: "Namibia",
        code: "NA"
      }, {
        name: "Nauru",
        code: "NR"
      }, {
        name: "Nepal",
        code: "NP"
      }, {
        name: "Netherlands",
        code: "NL"
      }, {
        name: "Netherlands Antilles",
        code: "AN"
      }, {
        name: "New Caledonia",
        code: "NC"
      }, {
        name: "New Zealand",
        code: "NZ"
      }, {
        name: "Nicaragua",
        code: "NI"
      }, {
        name: "Niger",
        code: "NE"
      }, {
        name: "Nigeria",
        code: "NG"
      }, {
        name: "Niue",
        code: "NU"
      }, {
        name: "Norfolk Island",
        code: "NF"
      }, {
        name: "Northern Mariana Islands",
        code: "MP"
      }, {
        name: "Norway",
        code: "NO"
      }, {
        name: "Oman",
        code: "OM"
      }, {
        name: "Pakistan",
        code: "PK"
      }, {
        name: "Palau",
        code: "PW"
      }, {
        name: "Palestinian Territory, Occupied",
        code: "PS"
      }, {
        name: "Panama",
        code: "PA"
      }, {
        name: "Papua New Guinea",
        code: "PG"
      }, {
        name: "Paraguay",
        code: "PY"
      }, {
        name: "Peru",
        code: "PE"
      }, {
        name: "Philippines",
        code: "PH"
      }, {
        name: "Pitcairn",
        code: "PN"
      }, {
        name: "Poland",
        code: "PL"
      }, {
        name: "Portugal",
        code: "PT"
      }, {
        name: "Puerto Rico",
        code: "PR"
      }, {
        name: "Qatar",
        code: "QA"
      }, {
        name: "Reunion",
        code: "RE"
      }, {
        name: "Romania",
        code: "RO"
      }, {
        name: "Russian Federation",
        code: "RU"
      }, {
        name: "Rwanda",
        code: "RW"
      }, {
        name: "Saint Helena",
        code: "SH"
      }, {
        name: "Saint Kitts and Nevis",
        code: "KN"
      }, {
        name: "Saint Lucia",
        code: "LC"
      }, {
        name: "Saint Pierre and Miquelon",
        code: "PM"
      }, {
        name: "Saint Vincent and the Grenadines",
        code: "VC"
      }, {
        name: "Samoa",
        code: "WS"
      }, {
        name: "San Marino",
        code: "SM"
      }, {
        name: "Sao Tome and Principe",
        code: "ST"
      }, {
        name: "Saudi Arabia",
        code: "SA"
      }, {
        name: "Senegal",
        code: "SN"
      }, {
        name: "Serbia and Montenegro",
        code: "CS"
      }, {
        name: "Seychelles",
        code: "SC"
      }, {
        name: "Sierra Leone",
        code: "SL"
      }, {
        name: "Singapore",
        code: "SG"
      }, {
        name: "Slovakia",
        code: "SK"
      }, {
        name: "Slovenia",
        code: "SI"
      }, {
        name: "Solomon Islands",
        code: "SB"
      }, {
        name: "Somalia",
        code: "SO"
      }, {
        name: "South Africa",
        code: "ZA"
      }, {
        name: "South Georgia and the South Sandwich Islands",
        code: "GS"
      }, {
        name: "Spain",
        code: "ES"
      }, {
        name: "Sri Lanka",
        code: "LK"
      }, {
        name: "Sudan",
        code: "SD"
      }, {
        name: "Suri",
        code: "SR"
      }, {
        name: "Svalbard and Jan Mayen",
        code: "SJ"
      }, {
        name: "Swaziland",
        code: "SZ"
      }, {
        name: "Sweden",
        code: "SE"
      }, {
        name: "Switzerland",
        code: "CH"
      }, {
        name: "Syrian Arab Republic",
        code: "SY"
      }, {
        name: "Taiwan, Province of China",
        code: "TW"
      }, {
        name: "Tajikistan",
        code: "TJ"
      }, {
        name: "Tanzania, United Republic of",
        code: "TZ"
      }, {
        name: "Thailand",
        code: "TH"
      }, {
        name: "Timor-Leste",
        code: "TL"
      }, {
        name: "Togo",
        code: "TG"
      }, {
        name: "Tokelau",
        code: "TK"
      }, {
        name: "Tonga",
        code: "TO"
      }, {
        name: "Trinidad and Tobago",
        code: "TT"
      }, {
        name: "Tunisia",
        code: "TN"
      }, {
        name: "Turkey",
        code: "TR"
      }, {
        name: "Turkmenistan",
        code: "TM"
      }, {
        name: "Turks and Caicos Islands",
        code: "TC"
      }, {
        name: "Tuvalu",
        code: "TV"
      }, {
        name: "Uganda",
        code: "UG"
      }, {
        name: "Ukraine",
        code: "UA"
      }, {
        name: "United Arab Emirates",
        code: "AE"
      }, {
        name: "United Kingdom",
        code: "GB"
      }, {
        name: "United States Minor Outlying Islands",
        code: "UM"
      }, {
        name: "Uruguay",
        code: "UY"
      }, {
        name: "Uzbekistan",
        code: "UZ"
      }, {
        name: "Vanuatu",
        code: "VU"
      }, {
        name: "Venezuela",
        code: "VE"
      }, {
        name: "Vietnam",
        code: "VN"
      }, {
        name: "Virgin Islands, British",
        code: "VG"
      }, {
        name: "Virgin Islands, U.S.",
        code: "VI"
      }, {
        name: "Wallis and Futuna",
        code: "WF"
      }, {
        name: "Western Sahara",
        code: "EH"
      }, {
        name: "Yemen",
        code: "YE"
      }, {
        name: "Zambia",
        code: "ZM"
      }, {
        name: "Zimbabwe",
        code: "ZW"
      }], e.states = [{
        name: "Alabama",
        code: "AL"
      }, {
        name: "Alaska",
        code: "AK"
      }, {
        name: "American Samoa",
        code: "AS"
      }, {
        name: "Arizona",
        code: "AZ"
      }, {
        name: "Arkansas",
        code: "AR"
      }, {
        name: "California",
        code: "CA"
      }, {
        name: "Colorado",
        code: "CO"
      }, {
        name: "Connecticut",
        code: "CT"
      }, {
        name: "Delaware",
        code: "DE"
      }, {
        name: "District Of Columbia",
        code: "DC"
      }, {
        name: "Federated States Of Micronesia",
        code: "FM"
      }, {
        name: "Florida",
        code: "FL"
      }, {
        name: "Georgia",
        code: "GA"
      }, {
        name: "Guam",
        code: "GU"
      }, {
        name: "Hawaii",
        code: "HI"
      }, {
        name: "Idaho",
        code: "ID"
      }, {
        name: "Illinois",
        code: "IL"
      }, {
        name: "Indiana",
        code: "IN"
      }, {
        name: "Iowa",
        code: "IA"
      }, {
        name: "Kansas",
        code: "KS"
      }, {
        name: "Kentucky",
        code: "KY"
      }, {
        name: "Louisiana",
        code: "LA"
      }, {
        name: "Maine",
        code: "ME"
      }, {
        name: "Marshall Islands",
        code: "MH"
      }, {
        name: "Maryland",
        code: "MD"
      }, {
        name: "Massachusetts",
        code: "MA"
      }, {
        name: "Michigan",
        code: "MI"
      }, {
        name: "Minnesota",
        code: "MN"
      }, {
        name: "Mississippi",
        code: "MS"
      }, {
        name: "Missouri",
        code: "MO"
      }, {
        name: "Montana",
        code: "MT"
      }, {
        name: "Nebraska",
        code: "NE"
      }, {
        name: "Nevada",
        code: "NV"
      }, {
        name: "New Hampshire",
        code: "NH"
      }, {
        name: "New Jersey",
        code: "NJ"
      }, {
        name: "New Mexico",
        code: "NM"
      }, {
        name: "New York",
        code: "NY"
      }, {
        name: "North Carolina",
        code: "NC"
      }, {
        name: "North Dakota",
        code: "ND"
      }, {
        name: "Northern Mariana Islands",
        code: "MP"
      }, {
        name: "Ohio",
        code: "OH"
      }, {
        name: "Oklahoma",
        code: "OK"
      }, {
        name: "Oregon",
        code: "OR"
      }, {
        name: "Palau",
        code: "PW"
      }, {
        name: "Pennsylvania",
        code: "PA"
      }, {
        name: "Puerto Rico",
        code: "PR"
      }, {
        name: "Rhode Island",
        code: "RI"
      }, {
        name: "South Carolina",
        code: "SC"
      }, {
        name: "South Dakota",
        code: "SD"
      }, {
        name: "Tennessee",
        code: "TN"
      }, {
        name: "Texas",
        code: "TX"
      }, {
        name: "Utah",
        code: "UT"
      }, {
        name: "Vermont",
        code: "VT"
      }, {
        name: "Virgin Islands",
        code: "VI"
      }, {
        name: "Virginia",
        code: "VA"
      }, {
        name: "Washington",
        code: "WA"
      }, {
        name: "West Virginia",
        code: "WV"
      }, {
        name: "Wisconsin",
        code: "WI"
      }, {
        name: "Wyoming",
        code: "WY"
      }], e.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], e.days = function() {
        for (var e = [], t = new Date, n = new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate(), i = 1; i <= n; i++) e.push(i);
        return e
      }, e.rangeStepValue = 5, e.weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], e.weekDays_short = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"], e.hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], e
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.factory("AppSession", ["Person", "$q", "LoopBackAuth", "ResidentialAccount", "Residence", "$rootScope", "SessionEvents", "$ionicHistory", "$window", "$state", "$localStorage", "Errors", "Toast", "$http", function(e, t, n, i, o, a, s, r, c, l, d, u, v, m) {
        function p() {
          return E.currentUser.selectedBreakerPanel
        }
        var E = this;
        E.currentUser = null, E.breakerPanels = [], E.initialized = t.defer(), E.getLoginResponse = function(e) {
          var t = e.hasOwnProperty("error"),
            n = e.user && !e.user.emailVerified,
            i = ((e.error || {}).message || "").contains("failed attempts");
          return i ? {
            error: {
              type: "TOO_MANY_ATTEMPTS"
            }
          } : t ? {
            error: {
              type: "LOGIN_FAIL"
            }
          } : n ? {
            error: {
              type: "EMAIL_NOT_VERIFIED"
            }
          } : e
        }, E.setupCurrentUser = function() {
          var e = t.defer();
          return n.currentUserId ? E.getUserInfo().then(E.getResidentialPermissions).then(E.getResidentialAccounts).then(function() {
            E.initialized.resolve(E.currentUser), e.resolve(E.currentUser)
          }).catch(function(t) {
            e.reject(t)
          }).finally(function() {}) : e.reject({
            error: u.ACCOUNTS.NO_LOOPBACK_AUTH
          }), e.promise
        }, E.getUserInfo = function() {
          var i = t.defer();
          return e.findById({
            id: n.currentUserId
          }).$promise.then(function(e) {
            e.hasOwnProperty("email") || e.hasOwnProperty("error") ? e.hasOwnProperty("emailVerified") && !e.emailVerified ? i.reject({
              error: u.ACCOUNTS.EMAIL_NOT_VERIFIED
            }) : e.error ? i.reject({
              error: u.ACCOUNTS.LOGIN_FAIL
            }) : (E.currentUser = e, i.resolve(e)) : i.reject({
              error: u.ACCOUNTS.DEVICE_OFFLINE
            })
          }).catch(function(e) {
            i.reject(e)
          }), i.promise
        }, E.getResidentialPermissions = function() {
          if (E.currentUser) return e.residentialPermissions({
            id: E.currentUser.id
          }).$promise.then(function(e) {
            return E.currentUser.residentialPermissions = e, e
          })
        }, E.getResidentialAccounts = function() {
          var e = E.currentUser.residentialPermissions,
            n = e.map(function(e) {
              if (e.residentialAccountId) return i.findById({
                id: e.residentialAccountId
              }).$promise
            }).filter(function(e) {
              return e
            });
          return t.all(n).then(function(e) {
            if (e && e.length > 0) return E.setSelectedResidentialAccount(e[0]), E.currentUser.residentialAccounts = e, e;
            v.show({
              duration: 3e3,
              message: "Unable to login to account, no associated account information"
            })
          })
        }, E.getSelectedResidentialAccount = function() {
          if (E.currentUser) return E.currentUser.selectedResidentialAccount
        }, E.setSelectedResidentialAccount = function(e) {
          E.currentUser && (E.currentUser.selectedResidentialAccount = e)
        }, E.getSelectedResidence = function() {
          if (E.currentUser) return E.currentUser.selectedResidence
        }, E.setSelectedResidence = function(e) {
          E.currentUser && (E.currentUser.selectedResidence = e, E.setLastUsedResidenceId(e.id), a.$broadcast(s.selectedResidenceChanged, e), E.checkForBreakerPanels())
        }, E.setLastUsedResidenceId = function(e) {
          d.lastUsedResidenceId = e
        }, E.getLastUsedResidenceId = function() {
          return d.lastUsedResidenceId
        }, E.getSelectedBreakerPanel = function() {
          if (E.currentUser) return E.currentUser.selectedBreakerPanel
        }, E.setSelectedBreakerPanel = function(e) {
          E.currentUser && (E.currentUser.selectedBreakerPanel = e)
        }, E.getSelectedBreaker = function() {
          if (E.currentUser) return E.currentUser.selectedBreaker
        }, E.setSelectedBreaker = function(e) {
          E.currentUser && (E.currentUser.selectedBreaker = e)
        }, E.setSelectedPanelsBreakers = function(e) {
          p() && (E.currentUser.selectedBreakerPanel.breakers = e)
        }, E.getSelectedPanelsBreakers = function() {
          if (p()) return E.currentUser.selectedBreakerPanel.breakers
        }, E.checkForBreakerPanels = function() {
          var e = E.getSelectedResidence();
          if (e && e.name) {
            var t = {
              id: e.id,
              filter: {
                include: "residentialBreakers"
              }
            };
            o.residentialBreakerPanels(t).$promise.then(function(e) {
              e.length < 1 ? a.hasBreakerPanels = !1 : a.hasBreakerPanels = !0
            })
          }
        }, E.destroy = function() {
          E.currentUser = null, delete d.NEST_ACCESS_TOKEN, r.clearHistory(), r.clearCache()
        }, E.removeCurrentlySelectedResidence = function() {
          E.currentUser.selectedResidence = null
        };
        return E.getBreakerPanels = function() {
          var e = E.getSelectedResidence().id;
          return o.residentialBreakerPanels({
            id: e
          }).$promise.then(function(e) {
            return E.breakerPanels = e, e
          })
        }, E
      }])
    }
  }).call(t, "src/abstracts/factories/app-session.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("AugustConn", ["$localStorage", "AppSession", "$q", "AugustIntegration", "Residence", "$http", function(e, t, n, i, o, a) {
      var s = this;
      return s.reset = function() {
        s.apiUrl = "https://developer-api.august.com/", s.LEVITON_RESIDENCE = null, s.AUGUST_DATA_BASE = null
      }, s.reset(), s.session = {}, s.sessionLoaded = !1, s.set = function(t, n) {
        s.sessionLoaded || (s.session = e.AUGUST_INTEGRATION || {}), s.session[t] = n, e.AUGUST_INTEGRATION = s.session
      }, s.get = function(e) {
        return s.session[e]
      }, s.initialize = function() {
        return s.loadAugustData(), s.loadLevitonResidence()
      }, s.getNewAccessToken = function(e) {
        var t = {
          client_id: "9bf03825-2fa9-4c2f-8de6-93cd3da9f18c",
          client_secret: "z9kBYmG3Wo5IG4eEx4SlPPdik",
          grant_type: "authorization_code",
          code: e
        };
        return a({
          method: "POST",
          url: "https://api.home.august.com/oauth2/access_token",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
          },
          transformRequest: function(e) {
            var t = [];
            for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            var i = t.join("&");
            return i
          },
          data: t
        }).then(function(e) {
          var t = e.data;
          return s.setAugustAccessToken(t), t
        })
      }, s.persistAugustIntegration = function(t) {
        e.AUGUST_INTEGRATION = t
      }, s.getPersistedAugustIntegration = function() {
        return e.AUGUST_INTEGRATION
      }, s.setPersistedAugustIntegration = function(t) {
        e.AUGUST_INTEGRATION = _.extend(e.AUGUST_INTEGRATION, t)
      }, s.setAugustAccessToken = function(e) {
        s.setPersistedAugustIntegration({
          accessToken: e.access_token,
          refreshToken: e.refresh_token,
          expiresIn: e.expires_in
        })
      }, s.loadLevitonResidence = function() {
        var e = t.getSelectedResidence().id;
        return o.findById({
          id: e,
          filter: {
            include: [{
              relation: "iotSwitches"
            }, {
              relation: "residentialActivities"
            }, {
              relation: "augustIntegrations",
              scope: {
                include: ["augustLocks", "augustActions"]
              }
            }]
          }
        }).$promise.then(function(e) {
          return s.set("LEVITON_RESIDENCE", e), e
        })
      }, s.loadAugustData = function() {
        s.session = e.AUGUST_INTEGRATION
      }, s
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("AugustOnlineData", ["AugustIntegration", function(e) {
      var t = this;
      return t.reset = function() {
        t.SELECTED_AUGUST_INTEGRATION_ID = null, t.SAVED_ONLINE_DATA = null
      }, t.reset(), t.loadOnlineData = function() {
        return e.findById({
          id: t.SELECTED_AUGUST_INTEGRATION_ID,
          filter: {
            include: {
              relation: "augustActivities",
              scope: {
                include: {
                  relation: "augustActions"
                }
              }
            }
          }
        }).$promise.then(function(e) {
          return t.SAVED_ONLINE_DATA = e, e
        })
      }, t
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.factory("BreakerDataCalculator", ["moment", "$q", "AppSession", "AppData", "NativeStorage", "Residence", "ResidentialBreakerPanel", "ResidentialBreaker", "Toast", function(e, t, n, i, o, a, s, r, c) {
        var l = this,
          d = "$CACHE_LFA_";
        l.Models = {
          Residence: a,
          ResidentialBreakerPanel: s,
          ResidentialBreaker: r
        }, l.getBreakerMonthlySnapshot = function(e) {
          return g("Breaker", e)
        };
        var u = function() {
            var e = null;
            try {
              e = n.currentUser && n.currentUser.selectedResidence && n.currentUser.selectedResidence.timezone && n.currentUser.selectedResidence.timezone.id, e = e || Intl.DateTimeFormat().resolvedOptions().timeZone
            } catch (e) {}
            return e || (n.noTimeZone = n.currentUser.selectedResidence.id, c.show({
              message: "Warning, no timezone is set. Please set your Residence's location via the Residence Page in the settings menu.",
              duration: 3500
            }))
          },
          v = function(e, n, i, a) {
            if (!_.isEmpty(a)) {
              var s = d + (e + ":") + n + ":" + i,
                r = new Date,
                c = new Date;
              if ("YTD" === i) c = new Date(r.getFullYear(), r.getMonth() + 1, 0);
              else if ("MTD" === i) c.setHours(24, 0, 0, 0);
              else if ("WTD" === i) c.setHours(24, 0, 0, 0);
              else {
                if ("DTD" !== i) return t.reject("INVALID_TYPE");
                c.setHours(r.getHours() + 1, 0, 0, 0)
              }
              var l = JSON.stringify({
                TTL: c.getTime(),
                data: a
              });
              return o.setItem(s, l)
            }
          },
          m = function(e, t, n) {
            var i = d + (e + ":") + t + ":" + n,
              a = (new Date).getTime();
            return o.getItem(i).then(function(e) {
              var t = angular.isString(e) ? JSON.parse(e) : e;
              if (t && "" !== t) {
                var n = t.TTL;
                return n && a < n ? t.data : null
              }
              return null
            })
          },
          p = function(e) {
            var t = void 0,
              n = void 0,
              i = void 0,
              o = void 0,
              a = void 0,
              s = void 0,
              r = void 0,
              c = null;
            if ((t = _.max(e) || 0) < 1) {
              i = JSON.stringify(t), o = i.length - 1 || 1;
              for (var l = 0; l <= o; l++) {
                var d = i[l];
                if ("0" !== d && "." !== d) {
                  s = l;
                  break
                }
              }
              r = 100 / Math.pow(10, s), c = r / 10
            } else n = Math.round(t), i = JSON.stringify(n), o = i.length - 1 || 1, a = parseInt(i.substring(0, o)), r = Math.pow(10, o) + 10 * a, c = r / 10;
            return {
              tickInterval: c,
              max: r
            }
          },
          E = function(e, t, n) {
            for (var i = [], o = 1; o <= n; o++) ! function(o) {
              var a = _.find(e, function(e) {
                if ("theDay" === t) {
                  var i = new Date(e[t]),
                    a = null;
                  return a = 7 === n ? i.getUTCDay() + 1 : i.getUTCDate(), o === a
                }
                return "theHour" === t ? Number(e[t]) === o - 1 : Number(e[t]) === o
              });
              a ? i.push(a.energyConsumption) : i.push(null)
            }(o);
            return i
          };
        l.getSnapshots = function(e, i, o, a) {
          var s = t.defer(),
            r = l.Models[e],
            d = null,
            f = null,
            g = {
              id: i
            },
            h = null,
            _ = null,
            S = new Date;
          switch (o) {
            case "YTD":
              h = "theMonth", _ = 12;
              break;
            case "MTD":
              h = "theDay", _ = new Date(S.getFullYear(), S.getMonth() + 1, 0).getDate();
              break;
            case "WTD":
              h = "theDay", _ = 7;
              break;
            case "DTD":
              h = "theHour", _ = 24;
              break;
            default:
              return
          }
          var b = function() {
            if ("Residence" !== e && (g.localTimezone = u()), "ResidentialBreaker" === e) {
              if (!a) return;
              g.residentialBreakerPanelId = a
            }
            if ("YTD" === o ? (d = "energyConsumptionForYear", g.theYear = new Date) : "MTD" === o ? (d = "energyConsumptionForMonth", g.theMonth = new Date) : "WTD" === o ? (d = "energyConsumptionForWeek", g.theWeek = new Date) : "DTD" === o && (d = "energyConsumptionForDay", g.theDay = new Date), e)
              if (f = r[d]) {
                var t = f(g).$promise;
                t.then(function(t) {
                  if (t && t.length > 0) try {
                    var n = {
                      range: {
                        start: t[0][h],
                        end: t[t.length - 1][h]
                      },
                      consumption: t.reduce(function(e, t) {
                        return e + Number(t.energyConsumption)
                      }, 0),
                      snapshots: t
                    };
                    n.chartData = E(t, h, _), n.yAxis = p(n.chartData), v(e, i, o, n).then(function() {
                      s.resolve(n)
                    }).catch(function(e) {
                      throw e
                    })
                  } catch (e) {
                    s.resolve({
                      snapshots: t
                    })
                  } else s.resolve({
                    snapshots: t
                  })
                }, function(e) {
                  e = e.error || e, e && e.message && e.message.toLowerCase().indexOf("missing timezone") >= 0 ? n.noTimeZone = n.currentUser.selectedResidence.id : c.show({
                    message: e.message || e,
                    duration: 2e3
                  }), s.resolve({})
                })
              } else s.reject("InvalidFuncRef");
            else s.reject("InvalidModel")
          };
          return m(e, i, o).then(function(e) {
            if (!e) return b();
            s.resolve(e)
          }).catch(function(e) {
            return b()
          }), s.promise
        }, l.getSnapshot = function(i, o) {
          var a = t.defer(),
            r = void 0,
            c = void 0,
            l = new Date;
          "YTD" === o ? (r = new Date(l.getFullYear(), 0, 1), r = r.getTime()) : "MTD" === o && (r = new Date(l.getFullYear(), l.getMonth(), 1), r.setHours(0, 0, 0, 0), r = r.getTime());
          var d = new Date;
          d.setSeconds(0), d.setTime(d.getTime() - 144e5), c = d.getTime(), r = e(r).format(), c = e(c).format();
          var u = n.currentUser.selectedBreakerPanel.residentialBreakers,
            v = u.length;
          return function() {
            var e = t.defer(),
              n = [],
              o = [],
              a = [],
              l = function(e) {
                var n = t.defer(),
                  l = {
                    where: {
                      residentialBreakerId: e.id
                    },
                    fields: {
                      energyConsumption: !0,
                      residentialBreakerId: !0,
                      residentialBreakerPanelId: !0,
                      timestamp: !0
                    },
                    limit: 1,
                    order: "timestamp"
                  },
                  d = function() {
                    var e = _.cloneDeep(l);
                    return e.where.timestamp = {
                      lt: c
                    }, e.order = l.order + " DESC", s.residentialBreakerSnapshots({
                      id: i,
                      filter: e
                    }).$promise
                  };
                return function() {
                  var e = _.cloneDeep(l);
                  return e.where.timestamp = {
                    gt: r
                  }, e.order = l.order + " ASC", s.residentialBreakerSnapshots({
                    id: i,
                    filter: e
                  }).$promise
                }().then(function(e) {
                  return e.forEach(function(e) {
                    o.push(e)
                  }), d()
                }).then(function(e) {
                  return e.forEach(function(e) {
                    a.push(e)
                  }), n.resolve()
                }).catch(function(e) {
                  return n.reject()
                }), n.promise
              },
              d = u.map(function(e) {
                return l(e)
              });
            return t.all(d).then(function() {
              o.forEach(function(e) {
                n.push(e)
              }), a.forEach(function(e) {
                n.push(e)
              }), e.resolve(n)
            }), e.promise
          }().then(function(e) {
            var t = _.chunk(e, v),
              n = t[0] || [],
              i = t[1] || [],
              o = n.reduce(function(e, t) {
                return e + t.energyConsumption
              }, 0),
              s = i.reduce(function(e, t) {
                return e + t.energyConsumption
              }, 0),
              l = Math.abs(s - o),
              d = Number(l).toFixed(2),
              u = {
                consumption: d,
                range: {
                  start: new Date(r),
                  end: new Date(c)
                }
              };
            a.resolve(u)
          }).catch(function(e) {
            a.reject(e)
          }), a.promise
        }, l.getMonthlyUsageForYear = function(e) {
          return g("ResidentialBreakerPanel", e)
        };
        var f = function() {
            var e = new Date,
              t = e.getFullYear();
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function(e) {
              return new Date(t, e, 0)
            })
          },
          g = function(e, o) {
            var a = f(),
              s = new Date;
            n.currentUser.selectedBreakerPanel.residentialBreakers;
            s.setSeconds(0), s.setTime(s.getTime() - 72e5);
            var r = a.map(function(n) {
              if (n.getTime() > s.getTime()) {
                var i = t.defer();
                return i.resolve([]), i.promise
              }
              var a = {
                id: o.id,
                theYear: new Date,
                localTimezone: u()
              };
              "BreakerPanel" !== e && (a.residentialBreakerPanelId = o.residentialBreakerId);
              var r = this[e].energyConsumptionForYear(a).$promise;
              return r.then(function(e) {
                return e
              }, function(e) {
                return e = e.error || e, c.show({
                  message: e.message || e,
                  duration: 2e3
                }), {}
              }), r
            });
            return t.all(r).then(function(e) {
              for (var t = [], n = 0; n < e.length; n++) {
                var o = e[n],
                  a = o.reduce(function(e, t) {
                    return e + t.energyConsumption
                  }, 0);
                t.push(a)
              }
              var r = t.map(function(e, n) {
                var i = e - (t[n - 1] || 0);
                return i > 0 ? i : 0
              });
              return {
                year: s.getFullYear(),
                data: r.map(function(e, t) {
                  return {
                    month: i.months[t],
                    energyUsage: e
                  }
                })
              }
            })
          };
        return l
      }])
    }
  }).call(t, "src/abstracts/factories/breaker-data-calculator.js")
}, function(e, t, n) {
  "use strict";
  var i = n(2);
  e.exports = function(e) {
    e.factory("BreakerManager", ["Residence", "ResidentialBreakerPanel", "AppSession", function(e, t, o) {
      function a(e, t) {
        return Math.floor(Math.random() * (t - e)) + e
      }

      function s(e) {
        for (var t = [], n = 0; n < e; n++) t.push(a(200, 300));
        return t
      }

      function r(e) {
        return "manualon" === (e = e.toLowerCase())
      }

      function c(e) {
        return "manualoff" === (e = e.toLowerCase())
      }
      var l = this;
      l.CURRENT_STATE_MAP = {
        AFCISerialArcFault: "Arc Fault Trip",
        AFCISerialArc5AFault: "Arc Fault Trip",
        AFCISerialArc10AFault: "Arc Fault Trip",
        AFCISerialArc15AFault: "Arc Fault Trip",
        AFCISerialArc20AFault: "Arc Fault Trip",
        AFCISerialArc30AFault: "Arc Fault Trip",
        AFCIParallelFault: "Trip",
        GFCIFault: "Trip",
        UpstreamFault: "Trip",
        SoftwareTrip: "Trip",
        AFCIMiswire: "Trip",
        OverloadTrip: "Trip",
        ShortCircuitTrip: "Trip",
        OverLoadTrip: "Trip",
        ManualON: "On",
        ManualOFF: "Off",
        NotCommunicating: "Not Communicating",
        UNKNOWN: "Unknown"
      }, l.CL = i, l.BREAKER_NAME_SUGGESTIONS = n(479), l.getBreakerPanels = function(t) {
        t = t || o.getSelectedResidence();
        var n = {
          id: t.id,
          filter: {
            include: "residentialBreakers"
          }
        };
        return e.residentialBreakerPanels(n).$promise.then(function(e) {
          if (!e || e.length < 1) return [];
          var t = o.getSelectedBreakerPanel() || e[0],
            n = _.find(e, {
              id: t.id
            }) || e[0];
          return o.setSelectedBreakerPanel(n), e
        })
      }, l.getBreakerPanelInfo = function(e) {
        return e = e || o.getSelectedBreakerPanel().id, t.findById({
          id: e,
          filter: {
            include: "residentialBreakers"
          }
        }).$promise.then(function(e) {
          return e
        })
      }, l.getBreakers = function(e) {
        return t.residentialBreakers({
          id: e.id
        }).$promise.then(function(e) {
          var t = _.sortBy(e, ["position"]);
          return o.setSelectedPanelsBreakers(t), t
        })
      }, l.updateBreakerStatus = function(e) {
        return r(e) || c(e), e
      }, l.getRandomBreakerUsageData = function() {
        return s(12)
      };
      var d = s(12);
      return l.getRandomPanelAverageUsage = function() {
        return d
      }, l.getRandomNumberArrayOfSize = s, l.getRandomNumberInRange = a, l.getBreakerNameSuggestions = function() {
        return l.BREAKER_NAME_SUGGESTIONS
      }, l
    }]).constant("BreakerStatusClass", {
      manualOn: "lev-green",
      manualOff: "lev-red",
      overloadTrip: "lev-red",
      shortCircuitTrip: "lev-red",
      groundFaultTrip: "lev-red",
      arcFaultTrip: "lev-red",
      seriesArcFaultTrip: "lev-red",
      softwareTrip: "lev-red"
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("Browser", ["$cordovaInAppBrowser", "$ionicPlatform", function(e, t) {
      var n = {},
        i = {
          location: "no",
          clearcache: "yes",
          toolbar: "yes"
        };
      return n.openURLExternal = function(n) {
        t.ready(function() {
          e.open(n, "_system", i)
        })
      }, n.openOAuth = function(n) {
        t.ready(function() {
          e.open(n, "_system")
        })
      }, n
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("CheckConnection", ["$window", "$http", "$q", function(e, t, n) {
      var i = {};
      return i.isOnline = function() {
        var e = n.defer();
        return t.get("https://my.leviton.com/api/Apps").then(function(t) {
          return 200 === t.status ? e.resolve(!0) : e.reject(!1)
        }).catch(function() {
          return e.reject(!1)
        }), e.promise
      }, i
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("CustomBackHandler", ["$state", "$stateParams", "$rootScope", function(e, t, n) {
      var i = this;
      return i.handleBack = function() {
        for (var i = e.current, o = t, a = [{
            state: "scene-wizard.scene-assign-devices",
            onBack: function() {
              e.go("rooms.details", {
                roomId: o.id
              })
            }
          }, {
            state: "switch-settings",
            onBack: function() {
              e.go("rooms.switch-details", {
                id: o.id
              })
            }
          }, {
            state: "rooms.switch-details",
            onBack: function() {
              e.go("rooms.list", {}, {
                reload: !0
              })
            }
          }, {
            state: "rooms.add",
            onBack: function() {
              e.go("rooms.list", {}, {
                reload: !0
              })
            }
          }], s = !1, r = 0; r < a.length; r++) {
          var c = a[r];
          i.name === c.state && (c.onBack(), s = !0)
        }
        s || n.goToBackView()
      }, i
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("DeviceEnrollmentDataService", ["AndroidPermissionsManager", "$q", function(e, t) {
      var n = {};
      return n.resetReconfigure = function() {
        n.switchToReconfigure = null
      }, n.resetData = function() {
        n.selectedNetwork = null, n.connectedAccessory = null, n.supportsSpecialChars = !1, n.supportsEncryption = !1, n.regKey = null
      }, n.askWifiPermission = function() {
        return e.requireLocationPermission()
      }, n
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("Discover", ["ResidentialBreakerPanel", "$q", "AppSession", "$timeout", function(e, t, n, i) {
      function o(i) {
        var o = t.defer();
        return e.discover({
          id: i
        }).$promise.then(function(e) {
          var t = n.getSelectedResidence().id,
            i = e.residentialBreakerPanel;
          if (i) {
            var a = _.get(e, "residentialBreakerPanel.residenceId"),
              s = a === t,
              r = 0 === i.residenceId,
              c = "NOT_READY" !== i.status;
            (s || r) && c ? o.resolve(i) : o.reject({
              error: "NOT_COMMUNICATING"
            })
          } else o.reject({
            error: "PANEL_NOT_FOUND"
          })
        }).catch(function(e) {
          o.reject(e)
        }), o.promise
      }
      var a = this;
      return a.CANCEL_LOADCENTER_DISCOVERY = !1, a.cancelLoadCenterDiscovery = function() {
        a.CANCEL_LOADCENTER_DISCOVERY = !0
      }, a.resetLoadCenterDiscovery = function() {
        a.CANCEL_LOADCENTER_DISCOVERY = !1
      }, a.discoverLoadCenter = function(e, n) {
        a.resetLoadCenterDiscovery();
        var s = t.defer(),
          r = Math.ceil((n || 60) / 2);
        return function t(n) {
          return a.CANCEL_LOADCENTER_DISCOVERY ? (s.reject({
            error: "CANCELLED"
          }), void a.resetLoadCenterDiscovery()) : n <= 0 ? void s.reject({
            error: "TIMEOUT"
          }) : void o(e).then(function(e) {
            s.resolve(e)
          }).catch(function(e) {
            n -= 1, i(function() {
              return t(n)
            }, 2e3)
          })
        }(r), s.promise
      }, a
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("Errors", ["$translate", function(e) {
      return {
        ACCOUNTS: {
          NO_LOOPBACK_AUTH: {
            type: "NO_LOOPBACK_AUTH",
            message: "Unable to authenticate with the cloud.  Check your internet connection, or there could be a temporary service outage with Leviton Cloud Services. Please try again later."
          },
          EMAIL_NOT_VERIFIED: {
            type: "EMAIL_NOT_VERIFIED",
            message: "Email is not verified."
          },
          LOGIN_FAIL: {
            type: "LOGIN_FAIL",
            title: e.instant("LOGIN_ERROR_TITLE"),
            message: e.instant("UNABLE_TO_LOGIN")
          },
          TOO_MANY_ATTEMPTS: {
            type: "TOO_MANY_ATTEMPTS",
            title: e.instant("PASSWORD_RESET_REQUIRED"),
            message: e.instant("TOO_MANY_LOGIN_ATTEMPTS")
          },
          DEVICE_OFFLINE: {
            type: "DEVICE_OFFLINE",
            title: e.instant("CANNOT_CONNECT"),
            message: e.instant("MOBILE_DEVICE_SEEMS_OFFLINE")
          },
          NO_PERMISSION: {
            type: "NO_PERMISSION",
            title: e.instant("NO_PERMISSION"),
            message: e.instant("NO_LOGIN_PERMISSION")
          },
          SERVER_ERROR: {
            type: "LOGIN_FAIL",
            title: e.instant("LOGIN_ERROR_TITLE"),
            message: e.instant("UNABLE_TO_LOGIN")
          }
        }
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("FormValidationError", ["PopupFactory", "$translate", function(e, t) {
      var n = {};
      return n.showDuplicateNameError = function() {
        e.alert({
          title: t.instant("NAMING_CONFLICT_TITLE"),
          message: t.instant("NAMING_CONFLICT_MESSAGE")
        })
      }, n.showMinLengthError = function() {
        e.alert({
          message: t.instant("MIN_LEN_ERROR_MESSAGE"),
          title: t.instant("INVALID_NAME")
        })
      }, n
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("HighChartHelper", function() {
      var e = this;
      return e.COLORS = {
        levGreen: "#98CB40",
        levOrange: "rgb(242,143,43)",
        levLightGray: "#9c9c9c"
      }, e
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.factory("HTTPInterceptor", ["$rootScope", "$injector", "$timeout", "$localStorage", "$q", function(e, t, i, o, a) {
        function s() {
          return t.get("$ionicLoading") || {}
        }

        function r(e) {
          for (var t = ["identify", "registerDevice"], n = 0; n < t.length; n++) {
            var i = t[n];
            if (e.indexOf(i) >= 0) return !0
          }
          return !1
        }

        function c(e) {
          for (var t = ["identify", "registerDevice", "Person/login"], n = 0; n < t.length; n++) {
            var i = t[n];
            if (e.indexOf(i) >= 0) return !0
          }
          return !1
        }

        function l(e) {
          return d(["Person"], e)
        }

        function d(e, t) {
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            if (t.indexOf(i) >= 0) return !0
          }
          return !1
        }
        var u = o.cloud_api || "",
          v = {},
          m = n(1);
        return v.responseError = function(t) {
          if (m.enable_interceptor_log, e.online = -1 !== t.status, t.status >= 400 && !c(t.config.url)) {
            var n = _.get(t, "data.error.message") || "Cannot process request. Please try again.";
            return a.reject({
              error: {
                type: "SERVER_ERROR",
                message: n
              }
            })
          }
          return t.status < 0 && l(t.config.url) ? a.reject({
            error: {
              type: "DEVICE_OFFLINE",
              message: "Device Offline"
            }
          }) : t
        }, v.request = function(e) {
          m.enable_interceptor_log;
          var t = e.url.indexOf(u) >= 0;
          return "GET" === e.method && t && !r(e.url) && s().show({
            delay: 1e3,
            duration: 3e3
          }), t && (e.timeout = 3e4), e
        }, v.response = function(t) {
          m.enable_interceptor_log;
          var n = _.get(t, "config.url").indexOf(u) >= 0;
          return n && !e.online && (e.online = !0), "GET" === _.get(t, "config.method") && n && i(function() {
            s().hide()
          }, 300), t
        }, v
      }]).config(["$httpProvider", function(e) {
        e.interceptors.push("HTTPInterceptor")
      }])
    }
  }).call(t, "src/abstracts/factories/http-interceptor.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("$ImageCacheFactory", ["$q", function(e) {
      return {
        Cache: function(t) {
          if (!(t instanceof Array)) return e.reject("Input is not an array");
          t = t.map(function(e) {
            return "/img" + e
          });
          for (var n = [], i = 0; i < t.length; i++) {
            var o = e.defer(),
              a = new Image;
            a.onload = function(e) {
              return function() {
                e.resolve()
              }
            }(o), a.onerror = function(e, t) {
              return function() {
                e.reject(t)
              }
            }(o, t[i]), n.push(o.promise), a.src = t[i]
          }
          return e.all(n)
        }
      }
    }]).run(["$ImageCacheFactory", function(e) {
      var t = ["/background/account-bg.jpg", "/background/header-background.png", "/background/bg_01.png", "/background/header-background.png", "/blurry-bg-dark.png", "/device-join-cloud.gif", "/join-wifi.gif", "/modal-bg.png", "/wifi-screenshot-android.png", "/wifi-screenshot-ios.png"];
      e.Cache(t)
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("Insomnia", ["$window", function(e) {
      var t = {};
      return t.keepAwake = function() {
        if (e.cordova) try {
          e.plugins.insomnia.keepAwake()
        } catch (e) {}
      }, t.allowSleepAgain = function() {
        if (!e.cordova) try {
          e.plugins.insomnia.allowSleepAgain()
        } catch (e) {}
      }, t
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("InvitationManager", ["Residence", "PopupFactory", "$translate", function(e, t, n) {
      var i = this;
      return i.inviteUser = function(t, n) {
        return e.addPerson({
          id: n.id,
          email: t
        }).$promise.then(function(e) {
          return e.error || (e = {
            email: t
          }), e
        })
      }, i.showPermissionError = function(e) {
        var i = n.instant("INVITATION_NO_PERMISSION");
        _.includes(e.message, "already a member") && (i = n.instant("INVITATION_ALREADY_INVITED")), t.alert({
          title: n.instant("INVITATION_UNABLE_TO_INVITE"),
          message: i
        })
      }, i.showSuccessMessage = function(e) {
        return t.alert({
          title: n.instant("INVITATION_SENT_TITLE"),
          message: n.instant("INVITATION_SENT_MESSAGE", {
            email: e
          })
        })
      }, i
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.factory("LeapfrogDataService", ["$http", "$q", "Residence", "$timeout", "PopupFactory", "ResidentialBreakerPanel", "$localStorage", function(e, t, i, o, a, s, r) {
        function c(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            var i = {
              ssid: e[n].ssid.split("\\x")[0],
              signalStrength: d(parseInt(e[n].signalStrength))
            };
            "" !== i.ssid && t.push(i)
          }
          return t
        }

        function l(e) {
          for (var t = [], n = 0; n < e.length; n++) {
            var i = {
              ssid: e[n].ssid.split("\\x")[0]
            };
            "" !== i.ssid && t.push(i)
          }
          return t
        }

        function d(e) {
          return e > -40 ? {
            desc: "Excellent",
            level: 5
          } : e > -55 ? {
            desc: "Very Good",
            level: 4
          } : e > -70 ? {
            desc: "Good",
            level: 3
          } : e > -80 ? {
            desc: "Poor",
            level: 2
          } : e > -87 ? {
            desc: "Very Poor",
            level: 1
          } : {
            desc: "No Signal",
            level: 0
          }
        }
        var u = n(4).breaker_panel_local_ip,
          v = this;
        return v.FLOW_TYPE = "", v.DISCOVERED_BREAKERS = [], v.isEthernetConnection = !1, v.sessionKey = "$LEAPFROG_DATA_SERVICE_", v.session = {}, v.resetData = function() {
          v.isEthernetConnection = !1, v.FLOW_TYPE = ""
        }, v.set = function(e, t) {
          v.session[e] = t, r[v.sessionKey + e] = t
        }, v.get = function(e) {
          var t = r[v.sessionKey + e] || null;
          if (t) try {
            t = JSON.parse(t)
          } catch (e) {}
          return t
        }, v.discoverBreakers = function(n) {
          var i = t.defer(),
            o = u + "residentialBreakerPanels/" + v.SELECTED_ENROLLMENT_LOAD_CENTER.id + "/discoverBreakersStart",
            a = {
              timeout: n
            };
          return e.post(o, a).then(function(e) {
            var t = e.data;
            e && e.data ? "NAK" === e.data.messageType ? i.reject(t) : i.resolve(t) : i.reject({
              error: "NO_RESPONSE"
            })
          }), i.promise
        }, v.factoryResetBreaker = function() {
          var t = u + "residentialBreakerPanels/" + v.SELECTED_ENROLLMENT_LOAD_CENTER.id,
            n = {
              factoryResetBreaker: !0
            };
          return e.post(t, n).then(function(e) {
            return e.data
          })
        }, v.factoryResetPanel = function() {
          var t = u + "residentialBreakerPanels/" + v.SELECTED_ENROLLMENT_LOAD_CENTER.id,
            n = {
              factoryReset: !0
            };
          return e.post(t, n).then(function(e) {
            return e.data
          })
        }, v.isDumbNonCommissionedBreaker = function(e) {
          return !e || !1 === e.commissioned && (!0 === e.dumb || e.model && e.model.toLowerCase().indexOf("none") >= 0)
        }, v.isDumbBreaker = function(e) {
          return !0 === e.dumb || e.model && e.model.toLowerCase().indexOf("none") >= 0
        }, v.updateBreaker = function(n) {
          var i = t.defer();
          if (v.isDumbNonCommissionedBreaker(n)) i.resolve(n);
          else {
            var o = {
              name: n.name,
              position: n.position
            };
            angular.isDefined(n.blinkLED) && (o.blinkLED = n.blinkLED);
            var a = u + "residentialBreakers/" + n.id;
            e.post(a, o).then(function(e) {
              i.resolve(e)
            }).catch(function(e) {
              i.reject(e)
            })
          }
          return i.promise
        }, v.identifyBreaker = function(n) {
          var i = {
              blinkLED: n.blinkLED
            },
            o = t.defer(),
            a = u + "residentialBreakers/" + n.id;
          return e.post(a, i).then(function(e) {
            o.resolve(e.data)
          }).catch(function(e) {
            o.reject(e)
          }), o.promise
        }, v.ignoreBreaker = function(n) {
          var i = u + "residentialBreakers/" + n.id + "/delete",
            o = t.defer();
          return e.delete(i).then(function(e) {
            o.resolve(e.data)
          }).catch(function(e) {
            o.reject(e)
          }), o.promise
        }, v.getBreakerPanelInfo = function() {
          var t = u + "residentialBreakerPanels/00000-00000-00000-00000";
          return e.get(t).then(function(e) {
            var t = e.data;
            return v.SELECTED_ENROLLMENT_LOAD_CENTER = t, t
          })
        }, v.updateBreakerPanelInfo = function(t) {
          var n = u + "residentialBreakerPanels/" + v.SELECTED_ENROLLMENT_LOAD_CENTER.id,
            i = {
              name: t.name
            };
          return e.post(n, i).then(function(e) {
            return e.data
          })
        }, v.addBreaker = function(t) {
          var n = u + "residentialBreakerPanels/" + v.SELECTED_ENROLLMENT_LOAD_CENTER.id + "/addBreaker";
          return e.post(n, t).then(function(e) {
            return e && e.data
          })
        }, v.createBreakers = function(e) {
          var n = t.defer(),
            i = [],
            o = ["dumb", "empty", "commissioned"];
          return _.cloneDeep(e).forEach(function(e) {
            if (e && e.dumb) {
              for (var t in e) e.hasOwnProperty(t) && o.indexOf(t) >= 0 && (e[t] = null, delete e[t]);
              i.push(v.addBreaker(e))
            }
          }), i && i.length ? t.all(i).then(function() {
            n.resolve()
          }, function(e) {
            n.resolve()
          }) : n.resolve(), n.promise
        }, v.updateCurrentPanelProperties = function(t) {
          var n = u + "residentialBreakerPanels/" + v.SELECTED_ENROLLMENT_LOAD_CENTER.id;
          return e.post(n, t).then(function(e) {
            return e.data
          })
        }, v.setCommissionedState = function(e) {
          return v.updateCurrentPanelProperties({
            commissioned: e
          })
        }, v.applyDiscoverCompletion = function() {
          var t = u + "residentialBreakerPanels/" + v.SELECTED_ENROLLMENT_LOAD_CENTER.id,
            n = {
              pollBreakers: !0
            };
          return e.post(t, n).then(function(e) {
            return e.data
          })
        }, v.connectLoadCenterToNetwork = function(n, i) {
          var o = t.defer(),
            a = u + "residentialBreakerPanels/" + v.SELECTED_ENROLLMENT_LOAD_CENTER.id + "/wifiConnect";
          return e.post(a, {
            ssid: i.ssid,
            passphrase: i.passphrase
          }).then(function(e) {
            o.resolve(e.data)
          }).catch(function(e) {
            o.reject(e)
          }), o.promise
        }, v.addLoadCenterToResidence = function(e, n) {
          var o = t.defer();
          return i.registerResidentialBreakerPanel({
            id: n.id,
            residentialBreakerPanelId: (e || {}).id || "LEAP0-FROG0-00000-00005"
          }).$promise.then(function(e) {
            if (e.error) return o.reject(e);
            o.resolve(e)
          }).catch(function(e) {
            o.reject(e)
          }), o.promise
        }, v.getDiscoveredNetworks = function() {
          var n = t.defer(),
            i = u + "residentialBreakerPanels/" + v.SELECTED_ENROLLMENT_LOAD_CENTER.id;
          return e.get(i + "/wifiSSIDsWithRSSI").then(function(e) {
            if ("SSID_LIST_WITH_RSSI" === e.data.messageType) {
              var t = c(e.data.ssids);
              t = _.sortBy(t, ["signalStrength.level"]).reverse(), n.resolve(t)
            } else n.resolve([])
          }).catch(function(t) {
            e.get(i + "/wifiSSIDs").then(function(e) {
              if ("SSID_LIST" === e.data.messageType) {
                var t = l(e.data.ssids.map(function(e) {
                  return {
                    ssid: e
                  }
                }));
                n.resolve(t)
              } else n.resolve([])
            }).catch(function(e) {
              n.reject(e)
            })
          }), n.promise
        }, v.loadBreakerList = function() {
          var n = u + "residentialBreakerPanels/" + v.SELECTED_ENROLLMENT_LOAD_CENTER.id + "/residentialBreakers";
          return e.get(n).then(function(e) {
            return "NAK" === e.data.messageType ? t.reject(e.data) : v.DISCOVERED_BREAKERS = e.data
          })
        }, v.getDiscoveredBreakers = function(n) {
          return o(angular.noop, 1e3 * n + 1e4).then(function() {
            var n = u + "residentialBreakerPanels/" + v.SELECTED_ENROLLMENT_LOAD_CENTER.id + "/discoverBreakersStop";
            return e.get(n).then(function(e) {
              return "NAK" === e.data.messageType ? t.reject(e.data) : e.data
            })
          })
        }, v.showDisconnectError = function() {
          return a.alert({
            title: "Cannot connect to the Data Hub",
            message: "Cannot get info from the Data Hub that you are connected to."
          })
        }, v
      }])
    }
  }).call(t, "src/abstracts/factories/leapfrog-data-service.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.constant("LeapfrogEventDisplayMap", {
      NOT_READY: "Offline",
      READY: "Online",
      SYNCHRONIZING: "Synchronizing",
      AFCIParallelFault: "AF-PAR",
      AFCISerialArc5AFault: "AF-05A",
      AFCISerialArc10AFault: "AF-10A",
      AFCISerialArc15AFault: "AF-15A",
      AFCISerialArc20AFault: "AF-20A",
      AFCISerialArc30AFault: "AF-30A",
      COMMUNICATING: "Communicating",
      GFCIFault: "GFCI",
      UpstreamFault: "Upstream",
      SoftwareTrip: "REM-TR",
      AFCIMiswire: "MisWire",
      ManualOFF: "OFF",
      ManualON: "ON",
      NotCommunicating: "Not Communicating",
      OverloadTrip: "Overload",
      OverCurrentTripPhase1: "Over-current Trip Phase 1",
      OverCurrentTripPhase2: "Over-current Trip Phase 2",
      UNKNOWN: "Unknown",
      AFCISelfTestFailure: "AFCI Self-Test Failure",
      GFCISelfTestFailure: "GFCI Self-Test Failure",
      AFCIGFCISelfTestFailure: "AF-GF Self-Test Failure",
      GFCISelfTestFailureWithLVST: "GFCI Self-Test Failure with LVST",
      GFCIErrorSTFailed: "GFCI Error ST Failed",
      GFCISCRBFailed: "GFCI SCR B Failed",
      GFCIErrorPhase1Failed: "GFCI Error Phase 1 Failed",
      GFCIErrorManualPhase1Failed: "GFCI Error Phase 2 Failed",
      GFCIErrorManualPhase2Failed: "GFCI Error Manual Phase 2 Failed",
      Normal: ""
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.factory("LeapfrogOnlineDataService", ["$http", "$q", "Residence", "ResidentialBreakerPanel", "ResidentialBreaker", "$timeout", "Util", function(e, t, i, o, a, s, r) {
        var c = (n(4).breaker_panel_local_ip, this);
        c.CURRENT_LOAD_CENTER = null, c.TOTAL_BREAKER_COUNT = null, c.resetData = function() {
          c.CURRENT_LOAD_CENTER = null
        }, c.discoverBreakers = function(e) {
          var n = t.defer();
          return o.discoverBreakersStart({
            id: c.CURRENT_LOAD_CENTER.id
          }, {
            timeout: e
          }).$promise.then(function(e) {
            "NAK" === e.messageType ? n.reject(e) : n.resolve(e.breakers || e)
          }).catch(function(e) {
            n.reject(e)
          }), n.promise
        }, c.factoryResetBreaker = function() {
          var e = {
            factoryResetBreaker: !0
          };
          return o.prototype$updateAttributes({
            id: c.CURRENT_LOAD_CENTER.id
          }, e).$promise
        }, c.createBreaker = function(e) {
          return o.residentialBreakers.create({
            id: c.CURRENT_LOAD_CENTER.id
          }, e).$promise
        }, c.updateBreaker = function(e) {
          var t = {
            name: e.name,
            position: e.position
          };
          return a.prototype$updateAttributes({
            id: e.id
          }, t).$promise
        }, c.updateBreakerWith = function(e) {
          return a.prototype$updateAttributes({
            id: e.id
          }, e).$promise
        }, c.identifyBreaker = function(e) {
          var t = {
            blinkLED: e.blinkLED
          };
          return a.prototype$updateAttributes({
            id: e.id
          }, t).$promise
        }, c.ignoreBreaker = function(e) {
          return o.residentialBreakers.destroyById({
            id: c.CURRENT_LOAD_CENTER.id,
            fk: e.id
          }).$promise
        }, c.getBreakerPanelInfo = function(e) {
          return o.findById({
            id: e || c.CURRENT_LOAD_CENTER.id,
            filter: {
              include: "residentialBreakers"
            }
          }).$promise.then(function(e) {
            return c.CURRENT_LOAD_CENTER = e, e
          })
        }, c.updateBreakerPanelInfo = function(e) {
          var t = (c.SELECTED_ENROLLMENT_LOAD_CENTER.id, {
            name: e.name
          });
          return o.prototype$updateAttributes({
            id: c.CURRENT_LOAD_CENTER.id
          }, t).$promise
        }, c.applyDiscoverCompletion = function() {
          var e = {
            pollBreakers: !0
          };
          return o.prototype$updateAttributes({
            id: c.CURRENT_LOAD_CENTER.id
          }, e).$promise
        }, c.getDiscoveredBreakers = function(e) {
          var n = t.defer();
          return s(function() {
            o.discoverBreakersStop({
              id: c.CURRENT_LOAD_CENTER.id
            }).$promise.then(function(e) {
              "NAK" === e.messageType ? n.reject(e) : (c.applyDiscoverCompletion(), n.resolve(e))
            }).catch(function(e) {
              n.reject(e)
            })
          }, 1e3 * e + 2e4), n.promise
        };
        var l = function(e) {
            var t = e.filter(function(e) {
                return !(e && e.position)
              }),
              n = _.findLastIndex(t, function(e) {
                return e && 2 === e.poles
              }),
              i = _.findLastIndex(t, function(e) {
                return e && e.manufacturer && e.manufacturer.toLowerCase().indexOf("leviton") >= 0
              }),
              o = _.findLastIndex(t, function(e) {
                return e && !0 === e.empty
              }),
              a = _.findLastIndex(t, function(e) {
                return e && !0 === e.dumb
              }),
              s = null;
            return s = -1 !== n ? t[n] : -1 !== i ? t[i] : -1 !== a ? t[a] : -1 !== o ? t[o] : t[t.length - 1], s = _.find(e, s)
          },
          d = function(e, t) {
            var n = _.cloneDeep(t);
            _.forEach(n, function(e) {})
          };
        return c.processBreakerList = function(e, t) {
          var n = _.filter(e, {
              poles: 2
            }).length || 0,
            i = e.length + n,
            o = _.cloneDeep(e),
            a = t.panelSize,
            s = {
              name: null,
              model: null,
              hwVersion: null,
              position: null,
              poles: 1,
              empty: !0
            };
          if (c.TOTAL_BREAKER_COUNT = i || t.panelSize, a > o.length)
            for (var r = o.length; r < a; r++) {
              var u = _.cloneDeep(s);
              o.push(u)
            }
          var v = (_.maxBy(o, function(e) {
            return e.position
          }) || {
            position: 0
          }).position;
          _.range(1, v + 1).forEach(function(e) {
            var t = o.filter(function(t) {
              return t.position === e
            });
            if (t && t.length > 0) t.forEach(function(e, t) {
              t > 0 && (e.position = null)
            });
            else {
              var n = l(o);
              n && (n.position = e)
            }
          }), o = _.sortBy(o, ["position"]), o.forEach(function(e) {
            if (2 === e.poles) {
              var t = e.position || 1,
                n = {
                  position: t + 2,
                  dipole: !0
                },
                i = _.find(o, function(e) {
                  return e && parseInt(e.position) === n.position && !0 === e.dipole
                });
              if (i && i.id === e.id + " dipole") return;
              var a = _.clone(e);
              a.dipole = !0, a.id = null, a.position += 2, a.poles = 1;
              var s = _.filter(o, function(e) {
                return e.position === a.position
              });
              _.forEach(s, function(e) {
                e.position = null
              }), o.push(a)
            }
          }), o.forEach(function(e) {
            var t = e.hwVersion;
            t && t.toLowerCase().indexOf("empty") >= 0 ? e.empty = !0 : t || e.model ? e.model && e.model.toLowerCase().indexOf("none") >= 0 && (e.dumb = !0) : e.empty = !0
          });
          var m = 0;
          if (function e() {
              m += 1;
              var n = function(e) {
                for (var t = [], n = 0; n < o.length; n++) n !== e && t.push(_.cloneDeep(o[n]));
                return t
              };
              if (!(m >= o.length)) {
                if (o.length > t.panelSize) {
                  var i = _.findLastIndex(o, function(e) {
                      return !e.id && !e.dipole
                    }),
                    a = _.findLastIndex(o, function(e) {
                      return e.empty && !e.dipole
                    }),
                    s = _.findLastIndex(o, function(e) {
                      return e.dumb && !e.dipole
                    });
                  i >= 0 ? o = n(i) : a >= 0 ? o = n(a) : s >= 0 && (o = n(s))
                }
                o.length > t.panelSize && e()
              }
            }(), v = (_.maxBy(o, function(e) {
              return e.position
            }) || {
              position: 0
            }).position, _.range(1, v + 1).forEach(function(e) {
              var t = o.filter(function(t) {
                return t.position === e
              });
              if (t && t.length > 0) t.forEach(function(t, n) {
                e > 0 ? n > 0 && (t.position = null) : 0 === e && (t.position = null)
              });
              else {
                var n = l(o);
                n && (n.position = e)
              }
            }), o = _.sortBy(o, ["position"]), (v = (_.maxBy(o, function(e) {
              return e && e.position
            }) || {
              position: 0
            }).position) % 2 != 0) {
            var p = l(o);
            p && (p.position = v + 1)
          }
          var E = o.filter(function(e) {
              return !!e.position
            }),
            f = o.filter(function(e) {
              return !e.position
            });
          E = _.sortBy(E, ["position"]);
          var g = {
            positionedBreakers: E,
            unpositionedBreakers: f,
            breakers: o
          };
          return c.DISCOVERED_BREAKERS = g.breakers, c.CURRENT_LOAD_CENTER && (c.CURRENT_LOAD_CENTER.residentialBreakers = g.breakers), d(0, g.positionedBreakers), g
        }, c
      }])
    }
  }).call(t, "src/abstracts/factories/leapfrog-online-data-service.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("LimitErrorMessage", ["PopupFactory", "$translate", function(e, t) {
      var n = this;
      return n.showScheduleLimitError = function() {
        return e.alert({
          title: t.instant("CANT_COMPLETE_ACTION"),
          message: t.instant("ADD_LIMIT_ERROR_MESSAGE", {
            type: "schedules"
          })
        })
      }, n.showResidenceLimitError = function() {
        return e.alert({
          title: t.instant("CANT_COMPLETE_ACTION"),
          message: t.instant("ADD_LIMIT_ERROR_MESSAGE", {
            type: "residences"
          })
        })
      }, n.showDeviceLimitError = function() {
        return e.alert({
          title: t.instant("CANT_COMPLETE_ACTION"),
          message: t.instant("ADD_LIMIT_ERROR_MESSAGE", {
            type: "devices"
          })
        })
      }, n.showActivityLimitError = function() {
        return e.alert({
          title: t.instant("CANT_COMPLETE_ACTION"),
          message: t.instant("ADD_LIMIT_ERROR_MESSAGE", {
            type: "activities"
          })
        })
      }, n.showRoomLimitError = function() {
        return e.alert({
          title: t.instant("CANT_COMPLETE_ACTION"),
          message: t.instant("ADD_LIMIT_ERROR_MESSAGE", {
            type: "rooms"
          })
        })
      }, n
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("LiveSubscription", ["$state", function(e) {
      var t = this;
      return t.stateRequiresInternet = function() {
        for (var t = ["switch-setup-wizard", "leapfrog-setup-wizard"], n = 0; n < t.length; n++)
          if (e.includes(t[n])) return !1;
        return !0
      }, t
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("LocationService", ["AppSession", "$translate", "$state", "$cordovaGeolocation", "ResidentialAccount", "ResidenceManager", "Residence", "Geocoder", "$q", function(e, t, n, i, o, a, s, r, c) {
      var l = {};
      return l.updateCurrentResidenceWithLocation = function(t) {
        t = t || e.getSelectedResidence().id;
        var n = c.defer();
        return l.getCurrentGeopoints().then(l.normalizeGeopoint).then(function(e) {
          var n = {
            geopoint: e.geopoint,
            postcode: e.postcode
          };
          return s.prototype$updateAttributes({
            id: t
          }, n).$promise
        }).then(function(e) {
          n.resolve(e)
        }).catch(function(e) {
          n.reject(e)
        }), n.promise
      }, l.createCurrentResidenceWithLocation = function(t) {
        var n = c.defer();
        t = t || {};
        var i = e.currentUser.selectedResidentialAccount.id;
        return l.getCurrentGeopoints().then(function(e) {
          t.geopoint = e
        }).then(function() {
          o.residences.create({
            id: i
          }, t).$promise.then(function(e) {
            n.resolve(e)
          })
        }).catch(function(e) {
          n.reject(e)
        }), n.promise
      }, l.hasGeopoint = function(t) {
        var n = t || e.getSelectedResidence();
        return n.geopoint && n.geopoint.lat && n.geopoint.lng
      }, l.normalizeGeopoint = function(e) {
        var t = c.defer();
        return r.reverse(e).$promise.then(function(e) {
          var n = e.normalized;
          t.resolve(n)
        }).catch(function(e) {
          t.reject(e)
        }), t.promise
      }, l.getCurrentGeopoints = function() {
        var e = c.defer();
        return i.getCurrentPosition().then(function(t) {
          var n = t.coords || {},
            i = {
              lat: n.latitude,
              lng: n.longitude
            };
          e.resolve(i)
        }).catch(function(n) {
          var i = {
            title: "Geolocation Error"
          };
          n.message && n.message.contains("disabled") ? i.message = t.instant("LOCATION_SERVICE_DISABLED_ERROR") : i.message = t.instant("LOCATION_UNABLE_TO_DETECT"), e.reject(i)
        }), e.promise
      }, l
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$provide", function(e) {
      e.decorator("LoopBackAuth", ["$delegate", "$window", "$ionicPlatform", "$rootScope", "$q", function(e, t, n, i, o) {
        function a(e) {
          var i = c + e,
            a = o.defer();
          return t.cordova ? n.ready(function() {
            t.NativeStorage.getItem(i, function(n) {
              var o = t.localStorage.getItem(i);
              "" === n && o && (n = o, s(e, n)), r[e] = n, a.resolve(n)
            }, function(e) {
              a.resolve(e)
            })
          }) : (r[e] = t.localStorage.getItem(i), a.resolve(r[e])), a.promise
        }

        function s(e, n) {
          var i = o.defer(),
            a = c + e;
          return t.cordova ? t.NativeStorage.setItem(a, n, function(e) {
            i.resolve(!0)
          }, function(e) {
            i.reject(!1)
          }) : (t.localStorage.setItem(a, n), i.resolve(!0)), i.promise
        }
        var r = {},
          c = "$LoopBack$",
          l = ["accessTokenId", "currentUserId", "rememberMe"];
        return function() {
          o.all(l.map(a)).then(function() {
            i.$broadcast("NATIVESTORAGE:LOADED", !0)
          }).catch(function() {
            i.$broadcast("NATIVESTORAGE:LOADED", !0)
          })
        }(), r.save = function() {
          l.forEach(function(e) {
            s(e, r[e])
          })
        }, r.setUser = function(e, t, n) {
          r.accessTokenId = e, r.currentUserId = t, r.currentUserData = n
        }, r.clearUser = function() {
          r.accessTokenId = null, r.currentUserId = null, r.currentUserData = null
        }, r.clearStorage = function() {
          o.all(l.map(function(e) {
            return s(e, "")
          })).then(function(e) {}).catch(function(e) {})
        }, r
      }])
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("ModalManager", function() {
      var e = this;
      return e.CURRENT_MODAL = null, e.reset = function() {
        e.CURRENT_MODAL = null
      }, e
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("NativePlatformSettings", ["$ionicPlatform", function(e) {
      var t = this;
      return t.showWifiSetting = function() {
        window.cordova && window.cordova.plugins.settings && (e.is("ios") ? window.cordova.plugins.settings.open("settings", function() {}, function() {}) : window.cordova.plugins.settings.open(["wifi", !0], function() {}, function() {}))
      }, t
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("NativeStorage", ["$window", "$q", "$localStorage", function(e, t, n) {
      var i = e.NativeStorage,
        o = e.cordova,
        a = "AVATAR_",
        s = {};
      return s.setItem = function(e, s) {
        var r = t.defer();
        if (o) i.setItem(a + e, s, function(e) {
          r.resolve(e)
        }, function(e) {
          r.reject(e)
        });
        else try {
          n[a + e] = s, r.resolve(s)
        } catch (e) {
          r.reject(e)
        }
        return r.promise
      }, s.getItem = function(e) {
        var s = t.defer();
        if (o) i.getItem(a + e, function(e) {
          s.resolve(e)
        }, function(e) {
          s.reject({
            error: "UNDEFINED_KEY"
          })
        });
        else try {
          var r = n[a + e];
          null === r || angular.isUndefined(r) ? s.reject({
            error: "UNDEFINED_KEY"
          }) : s.resolve(r)
        } catch (e) {
          s.reject(e)
        }
        return s.promise
      }, s.removeItem = function(e) {
        var s = t.defer();
        if (o) i.remove(a + e, function(e) {
          s.resolve(e)
        }, function(e) {
          s.reject(e)
        });
        else try {
          delete n[a + e], s.resolve("OK")
        } catch (e) {
          s.reject(e)
        }
        return s.promise
      }, s.clear = function() {
        var e = t.defer();
        if (o) i.clear(function(t) {
          e.resolve(t)
        }, function(t) {
          e.reject(t)
        });
        else try {
          n.$reset(), e.resolve("OK")
        } catch (t) {
          e.reject(t)
        }
        return e.promise
      }, s
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("NestConn", ["$localStorage", "AppSession", "$q", "NestIntegration", "Residence", "$http", function(e, t, n, i, o, a) {
      var s = this;
      return s.reset = function() {
        s.apiUrl = "https://developer-api.nest.com/", s.LEVITON_RESIDENCE = null, s.NEST_DATA_BASE = null
      }, s.reset(), s.initialize = function() {
        return s.loadLevitonResidence().then(s.getNestData).then(s.loadNestResidence).then(s.loadNestDevices).then(s.assignLevitonDevicesToNestDevices).then(s.loadCloudNestData)
      }, s.getNewAccessToken = function(e) {
        var t = {
          client_id: "9bf03825-2fa9-4c2f-8de6-93cd3da9f18c",
          client_secret: "z9kBYmG3Wo5IG4eEx4SlPPdik",
          grant_type: "authorization_code",
          code: e
        };
        return a({
          method: "POST",
          url: "https://api.home.nest.com/oauth2/access_token",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
          },
          transformRequest: function(e) {
            var t = [];
            for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
            var i = t.join("&");
            return i
          },
          data: t
        }).then(function(e) {
          var t = e.data;
          return s.setPersistedNestIntegration({
            accessToken: t.access_token
          }), t
        })
      }, s.setNestAccessToken = function(e) {
        s.setPersistedNestIntegration({
          accessToken: e.access_token
        })
      }, s.getCompletionData = function() {
        var e = (s.SELECTED_NEST_RESIDENCE.nestSmokes || []).filter(function(e) {
            return e.selected && e.devices.some(function(e) {
              return e.selected
            })
          }),
          t = (s.SELECTED_NEST_RESIDENCE.nestCams || []).filter(function(e) {
            return e.selected && e.devices.some(function(e) {
              return e.selected
            })
          }),
          n = _.cloneDeep(e),
          i = _.cloneDeep(t),
          o = n.map(function(e) {
            return e.devices = e.devices.filter(function(e) {
              return e.selected
            }), {
              deviceType: "SmokeDetector",
              deviceId: e.device_id,
              actions: e.devices.filter(function(e) {
                return e.action
              }).map(function(e) {
                return {
                  duration: e.duration,
                  action: e.action,
                  iotSwitchId: e.id
                }
              })
            }
          }),
          a = i.map(function(e) {
            return e.devices = e.devices.filter(function(e) {
              return e.selected
            }), {
              deviceType: "Camera",
              deviceId: e.device_id,
              actions: e.devices.filter(function(e) {
                return e.action
              }).map(function(e) {
                return {
                  duration: e.duration,
                  action: e.action,
                  iotSwitchId: e.id
                }
              })
            }
          });
        return {
          protects: o,
          cameras: a
        }
      }, s.getNestHomeAwayState = function() {
        return s.SELECTED_NEST_RESIDENCE.homeAwayEnabled
      }, s.setNestHomeAwayState = function(t) {
        s.SELECTED_NEST_RESIDENCE.homeAwayEnabled = t;
        var n = s.SELECTED_NEST_RESIDENCE.structure_id;
        t || (n += ":disabled"), e.NEST_INTEGRATION.isHomeAwayEnabled = n
      }, s.persistNestIntegration = function(t) {
        e.NEST_INTEGRATION = t
      }, s.getPersistedNestIntegration = function() {
        return e.NEST_INTEGRATION
      }, s.setPersistedNestIntegration = function(t) {
        e.NEST_INTEGRATION = _.extend(e.NEST_INTEGRATION, t)
      }, s.loadLevitonResidence = function() {
        var e = t.getSelectedResidence().id;
        return o.findById({
          id: e,
          filter: {
            include: [{
              relation: "iotSwitches"
            }, {
              relation: "nestIntegrations",
              scope: {
                include: {
                  relation: "nestActivities",
                  scope: {
                    include: {
                      relation: "nestActions"
                    }
                  }
                }
              }
            }]
          }
        }).$promise.then(function(e) {
          if (s.LEVITON_RESIDENCE = e, e.nestIntegrations) {
            var t = _.cloneDeep(e.nestIntegrations);
            delete t.nestActivities, s.persistNestIntegration(t)
          }
          return e
        })
      }, s.loadNestData = function() {}, s.loadNestResidence = function() {
        var e = s.getPersistedNestIntegration().isHomeAwayEnabled,
          t = s.NEST_DATA_BASE.structures;
        s.NEST_RESIDENCES = Object.keys(t).map(function(e) {
          return t[e]
        });
        var n = s.NEST_RESIDENCES[0].structure_id;
        if (e) {
          var i = e.split(":disabled"),
            o = i[0];
          s.SELECTED_NEST_RESIDENCE = t[o] || t[n], s.SELECTED_NEST_RESIDENCE.homeAwayEnabled = e.indexOf(":disabled") < 0
        } else s.SELECTED_NEST_RESIDENCE = t[n], s.SELECTED_NEST_RESIDENCE.homeAwayEnabled = !0;
        s.setPersistedNestIntegration({
          isHomeAwayEnabled: s.SELECTED_NEST_RESIDENCE.structure_id
        })
      }, s.loadNestDevices = function() {
        var e = s.NEST_DATA_BASE.devices,
          t = (s.SELECTED_NEST_RESIDENCE.smoke_co_alarms || []).map(function(t) {
            return e.smoke_co_alarms[t]
          }),
          n = (s.SELECTED_NEST_RESIDENCE.cameras || []).map(function(t) {
            return e.cameras[t]
          });
        s.SELECTED_NEST_RESIDENCE.nestSmokes = t, s.SELECTED_NEST_RESIDENCE.nestCams = n
      }, s.assignLevitonDevicesToNestDevices = function() {
        s.SELECTED_NEST_RESIDENCE.nestSmokes.forEach(function(e) {
          e.devices = _.cloneDeep(s.LEVITON_RESIDENCE.iotSwitches)
        }), s.SELECTED_NEST_RESIDENCE.nestCams.forEach(function(e) {
          e.devices = _.cloneDeep(s.LEVITON_RESIDENCE.iotSwitches)
        })
      }, s.getNestData = function() {
        var e = n.defer();
        return i.getNestData({
          url: s.apiUrl,
          nest_access_token: s.getPersistedNestIntegration().accessToken
        }).$promise.then(function(t) {
          s.NEST_DATA_BASE = t, e.resolve(t)
        }).catch(function(t) {
          e.reject(t)
        }), e.promise
      }, s.loadCloudNestData = function() {
        _.get(s, "LEVITON_RESIDENCE.nestIntegrations.nestActivities") && s.LEVITON_RESIDENCE.nestIntegrations.nestActivities.forEach(function(e) {
          if ("Camera" === e.deviceType) {
            var t = s.SELECTED_NEST_RESIDENCE.nestCams.find(function(t) {
              return t.device_id === e.deviceId
            });
            t && (t.selected = !0, t.devices.forEach(function(t) {
              var n = e.nestActions.find(function(e) {
                return e.iotSwitchId === t.id
              });
              n && (t.selected = !0, t.duration = n.duration, t.action = n.action)
            }))
          } else if ("SmokeDetector" === e.deviceType) {
            var n = s.SELECTED_NEST_RESIDENCE.nestSmokes.find(function(t) {
              return t.device_id === e.deviceId
            });
            n && (n.selected = !0, n.devices.forEach(function(t) {
              var n = e.nestActions.find(function(e) {
                return e.iotSwitchId === t.id
              });
              n && (t.selected = !0, t.duration = n.duration, t.action = n.action)
            }))
          }
        })
      }, s.setSelectedNestResidence = function(e) {
        var t = e.structure_id;
        s.SELECTED_NEST_RESIDENCE = s.NEST_DATA_BASE.structures[t], s.setPersistedNestIntegration({
          isHomeAwayEnabled: t
        })
      }, s.getSelectedNestResidence = function() {}, s.deleteNestAccessToken = function(e) {
        return a.delete("https://api.home.nest.com/oauth2/access_tokens/" + e).then(function(e) {})
      }, s
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("NestOnlineData", ["NestIntegration", function(e) {
      var t = this;
      return t.reset = function() {
        t.SELECTED_NEST_INTEGRATION_ID = null, t.SAVED_ONLINE_DATA = null
      }, t.reset(), t.loadProtectData = function() {}, t.loadCamData = function() {}, t.loadOnlineData = function() {
        return e.findById({
          id: t.SELECTED_NEST_INTEGRATION_ID,
          filter: {
            include: {
              relation: "nestActivities",
              scope: {
                include: {
                  relation: "nestActions"
                }
              }
            }
          }
        }).$promise.then(function(e) {
          return t.SAVED_ONLINE_DATA = e, e
        })
      }, t.isSelectedNestProtect = function(e) {
        return t.SAVED_ONLINE_DATA.nestActivities.some(function(t) {
          return "SmokeDetector" === t.deviceType && t.deviceId === e
        })
      }, t.isSelectedNestCamera = function(e) {
        return t.SAVED_ONLINE_DATA.nestActivities.some(function(t) {
          return "Camera" === t.deviceType && t.deviceId === e
        })
      }, t
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.factory("NetworkPasswordManager", ["$localStorage", function(e) {
        var t = {};
        return e.wifiNetworks = e.wifiNetworks || [], t.savePassword = function(t, n) {
          var i = {
              ssid: t,
              password: n
            },
            o = _.findIndex(e.wifiNetworks, {
              ssid: t
            });
          o >= 0 ? function() {
            e.wifiNetworks[o] = i
          }() : function() {
            e.wifiNetworks = e.wifiNetworks || [], e.wifiNetworks.push(i)
          }()
        }, t.removeNetwork = function(t) {
          var n = t.ssid;
          if (!n) return !1;
          var i = _.findIndex(e.wifiNetworks, {
            ssid: n
          });
          return i > -1 && (e.wifiNetworks.splice(i, 1), !0)
        }, t.getPasswordForSSID = function(t) {
          return _.find(e.wifiNetworks, {
            ssid: t
          })
        }, t.clearAll = function() {
          e.wifiNetworks = []
        }, t
      }])
    }
  }).call(t, "src/abstracts/factories/network-password-manager.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("OnBoardingSession", ["AccountManager", "$state", "$stateParams", "AppSession", "PopupFactory", "$translate", function(e, t, n, i, o, a) {
      var s = {};
      return s.cancelAddResidence = function() {
        if (n.param) {
          var r = JSON.parse(n.param);
          return void t.go(r.state, {
            id: r.id
          })
        }
        var c = i.getSelectedResidence();
        c && c.name ? (s.reset(), t.go("rooms.list", {}, {
          reload: !0
        })) : o.alert({
          title: a.instant("SETUP_A_RESIDENCE_TITLE"),
          message: a.instant("SETUP_A_RESIDENCE_MESSAGE"),
          buttons: [{
            text: a.instant("LOGOUT"),
            type: "button-cancel",
            onTap: function() {
              e.logout().then(function() {
                s.reset(), t.go("accounts.login")
              })
            }
          }, {
            text: a.instant("CONTINUE"),
            type: "button-ok",
            onTap: function() {}
          }]
        })
      }, s.reset = function() {
        s.residence = null
      }, s
    }])
  }
}, function(e, t, n) {
  "use strict";
  var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  };
  e.exports = function(e) {
    e.factory("OTAUpdate", ["$http", "$q", "$filter", "AlertFactory", "$rootScope", "$localStorage", "AppSession", "PopupFactory", "$translate", "Update", function(e, t, o, a, s, r, c, l, d, u) {
      function v(e, t) {
        for (var n = [], i = 0; i < e.size; i += t) n.push(e.slice(i, t + i));
        return n
      }

      function m(e, t, n, i) {
        return h.ota_test_device_url && (e = h.ota_test_device_url), "http://" + e + "/wiced_ota_server/upgrade_chunk.html?offset=" + t + "&filesize=" + n + "&appindex=" + i
      }

      function p(n, i) {
        var a = Math.random().toString(36).slice(2),
          r = {
            headers: {
              "Content-type": 'multipart/form-data; boundary="' + a + '"'
            }
          },
          c = 0,
          u = n.data.size,
          p = t.defer(),
          E = v(n.data, 1024),
          f = i.localIP;
        return function t(i, a) {
          if (s.cancelUpdate) return s.cancelUpdate = !1, p.resolve({
            cancelled: !0
          });
          var v = E[a];
          if (!(i < u)) return l.alert({
            title: "Update Success",
            message: "Successfully updated switch firmware."
          }), p.resolve({
            message: "Device firmware updated.",
            info: n.info
          });
          var g = m(f, i, n.info.file_size, n.info.app_index),
            h = i / u * 100,
            _ = o("number")(h, 0),
            S = -1;
          _ > S && (s.updatePercentage = _, S = _ + 1), e.post(g, v, r).then(function(e) {
            return c = 0, i += v.size, t(i, a + 1)
          }).catch(function(e) {
            return c++, c >= 20 ? (c = 0, l.alert({
              title: d.instant("UPDATE_FAILED"),
              message: d.instant("FIRMWARE_UPDATE_FAIL_MESSAGE")
            }), p.reject({
              message: "Cannot post all the bytes to the WiFi device",
              error: e
            })) : t(i, a)
          })
        }(0, 0), p.promise
      }

      function E(n) {
        var i = n.fileUrl,
          o = t.defer();
        return e.get(i, {
          responseType: "arraybuffer"
        }).then(function(e) {
          if (e.data) {
            var t = new Blob([e.data], {
              type: "arraybuffer"
            });
            return o.resolve({
              data: t,
              info: {
                version: n.version,
                file_size: t.size
              }
            })
          }
          return o.reject({
            message: "Cannot download firmware file",
            error: {
              type: "NO_FILE"
            }
          })
        }).catch(function(e) {
          return {
            message: "Cannot download firmware file.",
            error: e
          }
        }), o.promise
      }

      function f(e) {
        return E(_.latestFirmwareVersionInfo).then(function(t) {
          return p(t, e)
        }).then(function(e) {
          return e
        }).catch(function() {
          l.alert({
            title: "Update Success",
            message: "Successfully updated switch firmware."
          })
        })
      }

      function g(e) {
        if (e) {
          var n = t.defer();
          return u.getIotFirmware({
            serial: e
          }).$promise.then(function(e) {
            return e && "object" === (void 0 === e ? "undefined" : i(e)) && Object.keys(e).length > 0 ? (_.latestFirmwareVersionInfo = e, n.resolve(_.latestFirmwareVersionInfo)) : (_.latestFirmwareVersionInfo = {}, n.reject(_.latestFirmwareVersionInfo))
          }).catch(function() {
            return _.latestFirmwareVersionInfo = {}, n.reject(_.latestFirmwareVersionInfo)
          }), n.promise
        }
      }
      var h = n(1),
        _ = {
          updateDeviceFirmware: p,
          chunkify: v,
          testotaRequestURL: m,
          downloadFirmwareFile: E,
          performUpdate: f,
          getFirmwareVersionInfo: g
        };
      return g(), _
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("PDFManager", ["ServerUpdater", "LoopBackAuth", "$http", "FileSaver", function(e, t, n, i) {
      function o(e) {
        var t = new Blob([new Uint8Array(e.data)], {
          type: "application/pdf"
        });
        i.saveAs(t, "file.pdf")
      }
      var a = {},
        s = e.getAPIBaseURL();
      return a.getProcessedFileURL = function(e) {
        return s + "Residences/generatePdf?panelName=" + (e.panelName || " ") + "&breakerNames=" + JSON.stringify(e.breakerNames) + "&reverse=" + e.reverse + "&companyName=" + (e.companyName || " ") + "&phoneNumber=" + (e.phoneNumber || " ") + "&email=" + (e.emailAddress || " ") + "&access_token=" + t.accessTokenId
      }, a.handleBrowser = function(e) {
        n.get(e, {
          responseType: "arraybuffer"
        }).then(function(e) {
          o(e)
        }).catch(function(e) {}).finally(function() {
          $ionicLoading.hide()
        })
      }, a
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("ProgressInterval", ["$interval", function(e) {
      var t = function(e) {
        this._intervalId = null, this._advanceTarget = 0, this.percentage = 0, this.value = 0, this.config = _.merge({
          interval: 30,
          step: 30,
          min: 0,
          max: 3e4
        }, e)
      };
      return t.prototype.isActive = function() {
        return null !== this._intervalId
      }, t.prototype.setPercentage = function(e) {
        this._advanceTarget = e
      }, t.prototype.stop = function() {
        e.cancel(this._intervalId), this._intervalId = null
      }, t.prototype.resume = function() {
        var t = this;
        this.stop(), this._intervalId = e(function() {
          return t.tick()
        }, this.config.interval), this.tick()
      }, t.prototype.complete = function() {
        this.stop(), this.percentage = 100, this.value = this.config.max
      }, t.prototype.start = function(e) {
        _.merge(this.config, e), this.value = this.config.min, this.resume()
      }, t.prototype.tick = function() {
        this.value += this.calculateStep(), this.percentage = Math.round(this.value / this.config.max * 100), this.value >= this.config.max && this.complete()
      }, t.prototype.calculateStep = function() {
        if (this._advanceTarget <= this.percentage) return this.config.step;
        var e = this._advanceTarget - this.percentage;
        if (this.config.smoothProgress) {
          var t = Math.round(250 * e);
          return Math.max(t, this.config.step)
        }
        var n = .01 * this.config.max;
        return Math.round(n * e)
      }, t
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("ResidenceManager", ["AppSession", "ResidentialAccount", "Residence", "$q", "LoopBackAuth", "ResidentialPermission", "Person", function(e, t, n, i, o, a, s) {
      function r() {
        return s.residentialPermissions({
          id: o.currentUserId,
          filter: {
            where: {
              status: "active"
            }
          }
        }).$promise
      }

      function c(e) {
        var n = i.defer(),
          o = [];
        return e.forEach(function(e) {
          "admin" === e.access ? o.push(l(e.id)) : "owner" === e.access && o.push(t.residences({
            id: e.residentialAccountId
          }).$promise)
        }), i.all(o).then(function(e) {
          var t = [];
          e.forEach(function(e) {
            angular.isArray(e) ? t = _.union(t, e) : t.push(e)
          });
          var i = _.filter(t, function(e) {
            return e && e.name
          });
          n.resolve(i)
        }).catch(function(e) {
          n.reject(e)
        }), n.promise
      }

      function l(e) {
        var t = i.defer();
        return a.residence({
          id: e
        }).$promise.then(function(e) {
          e.permission = "admin", t.resolve(e)
        }).catch(function(e) {
          t.reject(e)
        }), t.promise
      }

      function d(t) {
        var n = i.defer();
        if (t) {
          e.currentUser.residences = t;
          var o = _.find(t, {
              id: e.getLastUsedResidenceId()
            }),
            a = o || e.currentUser.residences[0] || {};
          e.setLastUsedResidenceId(a.id), e.setSelectedResidence(a), n.resolve(t)
        } else n.reject({
          error: {
            type: "NO_PERMISSION"
          }
        });
        return n.promise
      }
      var u = this;
      return u.initialized = i.defer(), u.getResidences = function() {
        var e = i.defer();
        return r().then(function(e) {
          if (e.length) return c(e)
        }).then(function(e) {
          return u.initialized.resolve(e), d(e)
        }).then(function(t) {
          e.resolve(t)
        }).catch(function(t) {
          e.reject(t)
        }), e.promise
      }, u.refreshResidenceList = function() {
        var e = i.defer();
        return r().then(function(e) {
          if (e.length) return c(e)
        }).then(function(e) {
          return d(e)
        }).then(function(t) {
          e.resolve(t)
        }).catch(function(t) {
          e.reject(t)
        }), e.promise
      }, u.getCurrentResidence = function() {
        return e.getSelectedResidence()
      }, u.updateResidenceById = function(e, t) {
        return n.prototype$updateAttributes({
          id: e
        }, t).$promise.then(function(e) {
          return e
        })
      }, u.updateCurrentResidence = function(t) {
        var n = e.currentUser.selectedResidence.id;
        return u.updateResidenceById(n, t)
      }, u.findInvalidFields = function(e) {
        var t = ["street", "locality", "region", "country", "postcode"],
          n = [];
        if (e) return t.forEach(function(t) {
          if (e.contains(t) && e.contains("blank")) {
            var i = "";
            i = "locality" === t ? "City" : "region" === t ? "State" : "postcode" === t ? "ZIP" : _.capitalize(t), n.push(i)
          }
        }), n
      }, u.getUserOwnedResidences = function() {
        var n = e.currentUser.selectedResidentialAccount;
        return t.residences({
          id: n.id
        }).$promise
      }, u.getSchedules = function() {
        var t = e.currentUser.selectedResidence,
          i = {
            id: t.id,
            filter: {
              include: "residentialSchedules"
            }
          };
        return n.findById(i).$promise.then(function(e) {
          return e.residentialSchedules
        }).catch(function(e) {})
      }, u.getActivities = function() {
        var t = e.currentUser.selectedResidence,
          i = {
            id: t.id,
            filter: {
              include: "residentialActivities"
            }
          };
        return n.findById(i).$promise.then(function(e) {
          return e.residentialActivities
        }).catch(function(e) {})
      }, u.getRooms = function() {
        var t = e.currentUser.selectedResidence,
          i = {
            id: t.id,
            filter: {
              include: "residentialRooms"
            }
          };
        return n.findById(i).$promise.then(function(e) {
          return e.residentialRooms
        }).catch(function(e) {})
      }, u.getDevices = function() {
        var t = e.currentUser.selectedResidence,
          i = {
            id: t.id,
            filter: {
              include: "iotSwitches"
            }
          };
        return n.findById(i).$promise.then(function(e) {
          return e.iotSwitches
        }).catch(function(e) {})
      }, u
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("RoomManager", function() {
      return this
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("RouteTracker", ["$state", "$q", function(e, t) {
      function n(e) {
        delete i.routes[e]
      }
      var i = {};
      return i.routes = {}, i.addRoute = function(e, t) {
        i.routes[e] = t
      }, i.addRouteCurrent = function(t) {
        i.addRoute(t, {
          path: e.current.name,
          params: e.params
        })
      }, i.navigateRoute = function(o) {
        var a = t.defer(),
          s = i.routes[o];
        return s ? e.go(s.path, s.params || {}).then(function() {
          n(o), a.resolve({
            success: !0,
            route: s
          })
        }) : a.reject({
          error: "Route Not Found"
        }), a.promise
      }, i
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.factory("ScheduleEditDataService", ["ResidentialSchedule", "$q", "Residence", "ResidentialAction", "AppSession", function(e, t, n, i, o) {
        function a() {
          var e = t.defer(),
            i = o.getSelectedResidence().id,
            a = E.SCHEDULE;
          return n.residentialSchedules.create({
            id: i
          }, a).$promise.then(function(t) {
            E.SCHEDULE.id = t.id, e.resolve(t)
          }), e.promise
        }

        function s(i) {
          var o = t.defer();
          return e.findById({
            id: i,
            filter: {
              include: "residentialActions"
            }
          }).$promise.then(function(e) {
            return E.SCHEDULE = e, n.iotSwitches({
              id: e.residenceId
            }).$promise
          }).then(function(e) {
            E.SCHEDULE.residentialActions.forEach(function(t) {
              if (t.targetProperty && "properties" !== t.targetProperty) {
                var n = {};
                n[t.targetProperty] = t.targetValue, n.brightness = n.brightness || 100, t.targetValue = JSON.stringify(n)
              }
              var i = _.find(e, {
                id: t.targetModelId
              });
              t.targetProperty = "properties", t.targetValueAsObj = JSON.parse(t.targetValue), t.power = t.targetValueAsObj.power, t.brightness = t.targetValueAsObj.brightness, t.connected = !0, t.name = i.name, t.canSetLevel = i.canSetLevel
            }), o.resolve(E.SCHEDULE)
          }).catch(function(e) {
            o.reject(e)
          }), o.promise
        }

        function r() {
          E.SCHEDULE = {}, E.ACTIONS_QUEUED = [], E.CACHED_TIME_SELECTION = {}
        }

        function c() {
          if (!E.SCHEDULE_DIRTY) return d();
          var e = a;
          return E.SCHEDULE.id && (e = l), e().then(d)
        }

        function l() {
          return e.prototype$updateAttributes({
            id: E.SCHEDULE.id
          }, E.SCHEDULE).$promise
        }

        function d() {
          var n = t.defer(),
            o = E.SCHEDULE.residentialActions.filter(function(e) {
              return !0 === e.dirty
            }).map(function(e) {
              return i.prototype$updateAttributes({
                id: e.id
              }, u(e)).$promise
            });
          return t.all(o).then(function(n) {
            var i = E.ACTIONS_QUEUED.map(function(t) {
              return e.residentialActions.create({
                id: E.SCHEDULE.id
              }, v(t)).$promise
            });
            return t.all(i)
          }).then(function(e) {
            E.ACTIONS_QUEUED = []
          }).then(function() {
            return s(E.SCHEDULE.id)
          }).then(function() {
            n.resolve(E.SCHEDULE)
          }).catch(function(e) {
            n.reject(e)
          }), n.promise
        }

        function u(e) {
          return {
            targetValue: JSON.stringify(e.targetValueAsObj),
            targetProperty: "properties"
          }
        }

        function v(e) {
          return _.extend(e, {
            targetProperty: "properties",
            targetValue: JSON.stringify(e.targetValueAsObj)
          })
        }

        function m(e) {
          var t = e.id;
          return i.deleteById({
            id: e.id
          }).$promise.then(function(e) {
            return _.remove(E.SCHEDULE.residentialActions, {
              id: t
            }), e
          })
        }

        function p() {
          if (!E.SCHEDULE.name) {
            E.SCHEDULE.name || (E.SCHEDULE.name = "My Schedule");
            var e = o.getSelectedResidence().id;
            n.residentialSchedules({
              id: e
            }).$promise.then(function(e) {
              var t = _.filter(e, function(e) {
                  return e.name.toLowerCase().indexOf("my schedule") >= 0
                }),
                n = t.map(function(e) {
                  return e.name
                }),
                i = n.map(function(e) {
                  return parseInt(e.replace(/[^0-9]/g, "")) || 0
                }),
                o = _.max(i);
              angular.isNumber(o) ? E.SCHEDULE.name += " " + (o + 1) : E.SCHEDULE.name = "My Schedule"
            })
          }
        }
        var E = {
          SCHEDULE: {},
          SCHEDULE_DIRTY: !1,
          ACTIONS_QUEUED: [],
          CACHED_TIME_SELECTION: {},
          deleteAction: m,
          getScheduleById: s,
          reset: r,
          updateOrCreate: c,
          getDefaultScheduleName: p
        };
        return E
      }])
    }
  }).call(t, "src/abstracts/factories/schedule-edit-data-service.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("ScheduleManager", ["AndroidPermissionsManager", "DeviceEnrollmentDataService", "LocationService", "AppSession", "ResidenceManager", "PopupFactory", "$translate", "$state", "ScheduleSetupDataService", "LimitErrorMessage", function(e, t, n, i, o, a, s, r, c, l) {
      var d = {};
      return d.attemptAddSchedule = function() {
        function i() {
          function t() {
            e.requireLocationPermission().then(function() {
              return n.updateCurrentResidenceWithLocation()
            }).then(function(e) {
              p ? d() : m ? u() : r.go("schedule-setup-wizard.create-info")
            }).catch(function(e) {
              a.alert({
                title: e.title || s.instant("ERROR"),
                message: e.message || s.instant("LOCATION_UNABLE_TO_DETECT")
              })
            })
          }
          var i = [{
            text: s.instant("CANCEL"),
            type: "button-cancel"
          }, {
            text: s.instant("I_AGREE"),
            type: "button-confirm",
            onTap: function() {
              t()
            }
          }];
          a.alert({
            title: s.instant("ENABLE_LOCATION_PROMPT"),
            message: s.instant("ENABLE_LOCATION_PROMPT_MESSAGE"),
            buttons: i
          })
        }

        function d() {
          a.alert({
            title: s.instant("SCHEDULE_VALIDATION.NO_DEVICES_ENROLLED.TITLE"),
            message: s.instant("SCHEDULE_VALIDATION.NO_DEVICES_ENROLLED.MESSAGE"),
            buttons: [{
              text: s.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: s.instant("SCHEDULE_VALIDATION.NO_DEVICES_ENROLLED.BUTTON1"),
              type: "button-confirm",
              onTap: function() {
                v()
              }
            }]
          })
        }

        function u() {
          l.showScheduleLimitError()
        }

        function v() {
          t.askWifiPermission().then(function(e) {
            r.go("switch-setup-wizard.get-ready-info")
          }).catch(function(e) {
            "DENIED" === e.error && a.alert({
              title: "Cannot add a Device",
              message: "In order to add a device, we require location permission. Please try again."
            })
          })
        }
        var m = !1,
          p = !1;
        o.getSchedules().then(function(e) {
          return e.length >= 50 && (m = !0), o.getDevices()
        }).then(function(e) {
          e.length < 1 && (p = !0)
        }).then(function() {
          return e.loadLocationPermission()
        }).then(function() {
          e.hasPermission ? p ? d() : m ? u() : (c.reset(), r.go("schedule-setup-wizard.create-info")) : i()
        })
      }, d
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.factory("ScheduleSetupDataService", ["Residence", "AppSession", "$q", "ResidentialSchedule", function(e, t, n, i) {
        function o() {
          l.SCHEDULE = {}, l.SELECTED_DEVICES = [], l.ACTIONS = [], l.HAS_END_TIME = !1
        }

        function a() {
          var i = r(),
            o = t.getSelectedResidence().id,
            a = n.defer();
          return e.residentialSchedules.create({
            id: o
          }, i).$promise.then(function(e) {
            return l.SCHEDULE.id = e.id, e
          }).then(function(e) {
            return s(e.id)
          }).then(function(e) {
            a.resolve(l.SCHEDULE)
          }).catch(function(e) {
            a.reject(e)
          }), a.promise
        }

        function s(e) {
          var t = n.defer(),
            o = l.ACTIONS.map(function(t) {
              return i.residentialActions.create({
                id: e
              }, t).$promise
            });
          return n.all(o).then(function(e) {
            t.resolve(e)
          }).catch(function(e) {
            t.reject(e)
          }), t.promise
        }

        function r() {
          var e = l.SCHEDULE,
            t = {
              name: e.name,
              dayOfWeek: e.dayOfWeek,
              minute: e.scheduleOnTime.minute,
              timeType: e.scheduleOnTime.timeType
            },
            n = e.scheduleOffTime,
            i = n && angular.isDefined(e.scheduleOffTime.hour);
          return n && (t.endTime = {
            minute: e.scheduleOffTime.minute,
            timeType: e.scheduleOffTime.timeType
          }), i && (t.endTime.hour = e.scheduleOffTime.hour), n || delete t.endTime, e.scheduleOnTime.hour && (t.hour = e.scheduleOnTime.hour), t
        }

        function c() {
          if (!l.SCHEDULE.name) {
            l.SCHEDULE.name || (l.SCHEDULE.name = "My Schedule");
            var n = t.getSelectedResidence().id;
            e.residentialSchedules({
              id: n
            }).$promise.then(function(e) {
              var t = _.filter(e, function(e) {
                  return e.name.toLowerCase().indexOf("my schedule") >= 0
                }),
                n = t.map(function(e) {
                  return e.name
                }),
                i = n.map(function(e) {
                  return parseInt(e.replace(/[^0-9]/g, "")) || 0
                }),
                o = _.max(i);
              angular.isNumber(o) ? l.SCHEDULE.name += " " + (o + 1) : l.SCHEDULE.name = "My Schedule"
            })
          }
        }
        var l = {
          SCHEDULE: {},
          SELECTED_DEVICES: [],
          HAS_END_TIME: !1,
          ACTIONS: [],
          reset: o,
          saveCachedSchedule: a,
          saveCachedActions: s,
          getDefaultScheduleName: c
        };
        return l
      }])
    }
  }).call(t, "src/abstracts/factories/schedule-setup-data-service.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("ScrollDelegate", ["$ionicScrollDelegate", "$timeout", function(e, t) {
      var n = this;
      return n.resize = function() {
        t(function() {
          e.resize({
            shouldAnimate: !0
          })
        }, 300)
      }, n
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("ServerUpdater", ["$localStorage", "$window", "$interval", "$rootScope", function(e, t, n, i) {
      function o(t) {
        e.cloud_api = "https://" + t.apiUrl + "/api", e.cloud_socket = "https://" + t.apiUrl + "/socket", i.isDev = "prod" !== (t.type || "prod").toLowerCase(), i.cloud = t.type
      }
      var a = {};
      return a.getAPIBaseURL = function() {
        var e, t = a.getServerInfo().type;
        return "dev" === t ? e = "https://mydev.leviton.com:443/api/" : "qa" === t ? e = "https://myqa.leviton.com:443/api/" : "prod" === t && (e = "https://my.leviton.com:443/api/"), e
      }, a.getServerInfo = function() {
        var t = {},
          n = e.cloud_api || "https://my.leviton.com/";
        return n.contains("mydev") || n.contains("lcsdev") ? (t.type = "dev", t.base_url = "https://mydev.leviton.com/") : n.contains("myqa") || n.contains("lcsqa") ? (t.type = "qa", t.base_url = "https://myqa.leviton.com/") : n.contains("my.") || n.contains("lcs.") ? (t.type = "prod", t.base_url = "https://my.leviton.com/") : (t.type = "custom", t.base_url = n), i.isDev = "prod" !== (t.type || "prod").toLowerCase(), i.cloud = t.type, t
      }, a.setActiveServer = function(e) {
        o(e), n(function() {
          t.location.reload()
        }, 250, 1)
      }, a
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.constant("SessionEvents", {
      selectedResidenceChanged: "session:selectedResidenceChanged",
      selectedResidentialAccountChanged: "session:selectedResidentialAccountChanged"
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("SSIDListener", ["AlertFactory", "$interval", function(e, t) {
      var n = {};
      return n.startListening = function(e, i) {
        function o() {
          try {
            cordova.plugins.LevitonApp.getCurrentSSID(function(t) {
              var n = t.replace(/^"(.*)"$/, "$1"),
                i = String(n).toLowerCase().indexOf("leviton") >= 0,
                o = String(n).toLowerCase().indexOf("ldata") >= 0 || String(n).toLowerCase().indexOf("leviton") >= 0,
                a = {
                  ssid: n,
                  is_leviton_device: i,
                  is_load_center: o
                };
              e && e(a)
            }, function() {
              i && i({
                type: "INVALID_NETWORK_TYPE"
              })
            })
          } catch (e) {
            i && i({
              type: "PLUGIN_FAIL_ERROR"
            }), n.stopListening()
          }
        }
        n.timer = t(o, 1e3, 0, !0)
      }, n.stopListening = function() {
        t.cancel(n.timer)
      }, n
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("SupportFactory", ["LoopBackAuth", "$window", "Person", "$cordovaDevice", function(e, t, i, o) {
      var a = this,
        s = n(9);
      return a.sendUserFeedback = function(n) {
        var a = e.currentUserId,
          r = t.cordova ? o.getDevice() : {},
          c = "<br><br> feedback : " + n.message + ".<br><br> device info : " + JSON.stringify(r) + ".<br><br> app version : " + s.version;
        return i.userFeedbacks.create({
          id: a
        }, {
          message: c,
          allowResponse: n.allowResponse,
          category: n.category
        }).$promise
      }, a
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("UIValidation", function() {
      var e = this,
        t = n(484);
      return e.getErrorByType = function(e) {
        return t[e]
      }, e
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.factory("UserManagementDataService", ["$q", "Residence", "AppSession", function(e, t, n) {
        var i = this;
        return i.selectedUserPermission = null, i.reset = function() {
          i.selectedUserPermission = null
        }, i.buildUsersObject = function(e) {}, i.getUniquePermissionsForAllResidences = function(e) {
          var t = _.flattenDepth(e, 1),
            i = t.map(function(e) {
              return e.invitation && (e.person = e.invitation), !e.invitation && e.person, e
            }),
            o = _.uniqBy(i, "person.email");
          return _.remove(o, function(e) {
            if ("owner" === e.access) return !0;
            var t = _.get(e, "person.email"),
              i = _.get(n, "currentUser.email");
            return !(!t || t !== i) || (!e.person || void 0)
          }), o
        }, i.getUserPermissionsForResidence = function(n) {
          var i = n.id,
            o = e.defer();
          return t.listPermissions({
            id: i
          }).$promise.then(function(e) {
            o.resolve({
              permissions: e.result,
              residence: n
            })
          }).catch(function(e) {
            o.reject(e)
          }), o.promise
        }, i.getResidenceForUser = function(e, t) {
          var n = [];
          t.forEach(function(t) {
            t.permissions.forEach(function(i) {
              if (i.person && i.person.email === e.person.email) {
                var o = t.residence;
                o.permission = i, n.push(o)
              }
            })
          });
          var i = _.uniqBy(n, "id");
          return i
        }, i.setEditUserData = function(e) {
          i.EDIT_USER_DATA = e
        }, i.getEditUserData = function() {
          return i.EDIT_USER_DATA
        }, i
      }])
    }
  }).call(t, "src/abstracts/factories/users-manager.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("Version", ["$filter", function(e) {
      function t(e) {
        var t = e.split("."),
          n = t.splice(0, 2);
        return n.push(t.join(".")), n
      }

      function n(e) {
        return isNaN(Number(e)) ? e : Number(e)
      }

      function i(e) {
        if ("string" != typeof e) throw new TypeError("Invalid argument expected string");
        if (!a.test(e)) throw new Error("Invalid argument not valid semver")
      }
      var o = this,
        a = /^v?(?:0|[1-9]\d*)(\.(?:[x*]|0|[1-9]\d*)(\.(?:[x*]|0|[1-9]\d*)(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
        s = /-([0-9A-Za-z-.]+)/;
      return o.compareVersions = function(e, o) {
        [e, o].forEach(i);
        for (var a = t(e), r = t(o), c = 0; c < 3; c++) {
          var l = parseInt(a[c] || 0, 10),
            d = parseInt(r[c] || 0, 10);
          if (l > d) return 1;
          if (d > l) return -1
        }
        if ([a[2], r[2]].every(s.test.bind(s))) {
          var u = s.exec(a[2])[1].split(".").map(n),
            v = s.exec(r[2])[1].split(".").map(n);
          for (c = 0; c < Math.max(u.length, v.length); c++) {
            if (void 0 === u[c] || "string" == typeof v[c] && "number" == typeof u[c]) return -1;
            if (void 0 === v[c] || "string" == typeof u[c] && "number" == typeof v[c]) return 1;
            if (u[c] > v[c]) return 1;
            if (v[c] > u[c]) return -1
          }
        } else if ([a[2], r[2]].some(s.test.bind(s))) return s.test(a[2]) ? -1 : 1;
        return 0
      }, o.supportsDuration = function(t) {
        var n = e("getVersionNumber")(t || "0");
        return o.compareVersions(n, "1.4.0") >= 0
      }, o
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    function t(e, t, i, o, a, s) {
      function r() {
        var n = {
            cache: !1,
            timeout: 15e3
          },
          i = t.defer();
        return e.get(C.ota_device_home + "scan_results.txt", n).then(function(e) {
          if (e.data) {
            var t = l(e.data),
              n = c(t);
            i.resolve(n)
          } else i.reject({
            error: "Unable to connect to the switch."
          })
        }), i.promise
      }

      function c(e) {
        var t = _.orderBy(e, "signal_strength.level", "desc");
        return _.filter(t, function(e) {
          return e.ssid.toLowerCase().indexOf("leviton") < 0
        })
      }

      function l(e) {
        for (var t = [], n = e.split("\n"), i = 1; i < 8 * parseInt(n.length / 8) + 1; i += 8) {
          var o = {
              id: parseInt(n[i]),
              ssid: hextoutf8(n[i + 1]),
              security_value: n[i + 2],
              security_type: n[i + 3],
              is_secured: "WPA" === n[i + 3].substr(0, 3) || "WEP" === n[i + 3].substr(0, 3) ? 1 : 0,
              signal_strength: d(parseInt(n[i + 4])),
              channel: parseInt(n[i + 5]),
              bssid: n[i + 6],
              remembered: parseInt(n[i + 7])
            },
            a = !!n[i + 3] && String(n[i + 3]).indexOf("WEP") >= 0;
          o.ssid && !a && t.push(o)
        }
        return t
      }

      function d(e) {
        return e > -40 ? {
          desc: "Excellent",
          level: 5
        } : e > -55 ? {
          desc: "Very Good",
          level: 4
        } : e > -70 ? {
          desc: "Good",
          level: 3
        } : e > -80 ? {
          desc: "Poor",
          level: 2
        } : e > -87 ? {
          desc: "Very Poor",
          level: 1
        } : {
          desc: "No Signal",
          level: 0
        }
      }

      function u(t) {
        return e.get(g(t)).then(function(e) {
          return e
        })
      }

      function v(e) {
        var n = t.defer(),
          i = s.generateRandomStringOfLength(12),
          o = "as0=" + encodeURIComponent(e.ssid) + "&at0=" + (e.security_value || 0) + "&ak0=" + i || "REGISTER";
        N.regKey = i, e.password && (o += "&ap0=" + encodeURIComponent(e.password));
        var a = null;
        return m().then(function(e) {
          return a = KEYUTIL.getKey(e), p(o, a)
        }).then(function(e) {
          return E(e)
        }).then(function(e) {
          return f(e)
        }).then(function(e) {
          n.resolve(e)
        }), n.promise
      }

      function m() {
        var n = t.defer(),
          i = C.ota_device_home;
        return e.get(i + "certificate.txt", {
          timeout: 7e3
        }).then(function(e) {
          n.resolve(e.data)
        }), n.promise
      }

      function p(e, t) {
        return KJUR.crypto.Cipher.encrypt(e, t, "RSA")
      }

      function E(e) {
        return hextob64u(e)
      }

      function f(t) {
        var n = C.ota_device_home + "secure_connect?c=" + t;
        return e.get(n).then(function(e) {
          return e
        })
      }

      function g(e) {
        if (e) {
          var t = C.ota_device_home + "connect?as0=" + encodeURIComponent(e.ssid) + "&at0=" + (e.security_value || 0);
          return e.password && (t += "&ap0=" + encodeURIComponent(e.password)), t
        }
      }

      function h() {
        return e.get(C.ota_device_home + "serial_number.txt", {
          timeout: 15e3
        }).then(function(e) {
          return e.data
        }).catch(function() {
          return {
            message: "Failed to get serial number of the device.",
            type: "error"
          }
        })
      }

      function S() {
        var t = C.ota_device_home + "set_connection?c=" + A();
        return e.get(t, {
          timeout: 15e3
        }).then(function(e) {
          return e.data
        }).catch(function() {
          return {
            message: "Cannot send server connection type to the server",
            type: "error"
          }
        })
      }

      function b(e) {
        var t = a("getVersionNumber")(e || "0");
        return o.compareVersions(t, "1.0.3") > -1
      }

      function I(e) {
        var t = a("getVersionNumber")(e || "0");
        return o.compareVersions(t, "1.1.0") > -1
      }

      function A() {
        var e = i.cloud_api || "",
          t = "disabled";
        return t = e.indexOf("my.") >= 0 || e.indexOf("lcs.") >= 0 ? "prod" : e.indexOf("mydev") >= 0 || e.indexOf("lcsdev") >= 0 ? "dev" : e.indexOf("myqa") >= 0 || e.indexOf("lcsqa") >= 0 ? "qa" : "dev", {
          disabled: 0,
          dev: 1,
          qa: 2,
          prod: 3
        } [t]
      }

      function T() {
        return e.get(C.ota_device_home + "fw_version.txt", {
          timeout: 7e3
        }).then(function(e) {
          return (!e.data || !e.data.contains("xml version")) && e.data
        }).catch(function() {
          return {
            message: "Cannot get firmware version",
            type: "error"
          }
        })
      }
      var N = {},
        C = n(1);
      return N.getScannedResults = r, N.connectToANetwork = u, N.getSerialNumber = h, N.setupDeviceConnection = S, N.getServerType = A, N.getWifiSetupUrl = g, N.getDeviceFWVersion = T, N.handlesSpecialCharacter = b, N.supportsEncryption = I, N.connectToANetworkSecure = v, N
    }
    t.$inject = ["$http", "$q", "$localStorage", "Version", "$filter", "Util"], e.factory("WiFiDevice", t)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.filter("camelToSpace", function() {
      return function(e) {
        return _.lowerCase(e)
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.filter("getVersionNumber", function() {
      return function(e) {
        if (e) {
          return e.replace(/^"(.*)"$/, "$1").split(";")[0]
        }
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  var i = n(2);
  e.exports = function(e) {
    e.filter("leapfrogEventDisplay", ["LeapfrogEventDisplayMap", function(e) {
      return function(e) {
        var t = (angular.isString(e) && e.length, i.breakerCurrentStateText(e));
        return angular.isDefined(t) ? t : e
      }
    }]).filter("breakerPanelStatusText", function() {
      return function(e) {
        var t = i.breakerPanelStatusText(e);
        return angular.isDefined(t) ? t : e
      }
    }).filter("loadCenterEvents", function() {
      return function(e) {
        return e = {
          SoftwareTrip: "Trip",
          AFCIParallelFault: "AFCI Trip – Parallel Fault",
          AFCISerialArc5AFault: "AFCI Trip – Series Fault",
          AFCISerialArc10AFault: "AFCI Trip – Series Fault",
          AFCISerialArc15AFault: "AFCI Trip – Series Fault",
          AFCISerialArc20AFault: "AFCI Trip – Series Fault",
          AFCISerialArc30AFault: "AFCI Trip – Series Fault",
          OverloadTrip: "Overload Trip",
          AFCIMiswire: "AFCI Miswired",
          GFCIFault: "GFCI Trip",
          ManualOFF: "OFF",
          ManualON: "ON",
          NOT_READY: "Not Connected",
          READY: "Connected"
        } [e] || e
      }
    }).filter("loadCenterEventsColor", function() {
      return function(e) {
        return e = {
          SoftwareTrip: "event-red",
          AFCIParallelFault: "event-red",
          AFCISerialArc5AFault: "event-red",
          AFCISerialArc10AFault: "event-red",
          AFCISerialArc15AFault: "event-red",
          AFCISerialArc20AFault: "event-red",
          AFCISerialArc30AFault: "event-red",
          OverloadTrip: "event-red",
          AFCIMiswire: "event-red",
          GFCIFault: "event-red",
          ManualOFF: "event-red",
          ManualON: "event-green",
          NOT_READY: "event-red",
          READY: "event-green"
        } [e] || e
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.filter("notifiableEvents", function() {
      return function(e) {
        var t = ["TRIPPED", "NOT_COMMUNICATING", "RESTORE"];
        return _.filter(e, function(e) {
          return e.action && t.indexOf(e.action) >= 0
        })
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.filter("readableAction", function() {
      return function(e) {
        var t = e.split(".")[1];
        return _.capitalize(t)
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.filter("statusInfo", function() {
      return function(e) {
        var t = e.data.error.message || "";
        return t.indexOf("Email already exists") >= 0 ? {
          message: "There is already an account registered using this email.",
          type: "error"
        } : t.indexOf("Insufficiently complex password") >= 0 ? {
          message: "Please enter a stronger password.",
          type: "error"
        } : void 0
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.filter("versionFilter", function() {
      return function(e) {
        var t = e.split(".");
        return t[2].length < 2 && (t[2] = "0" + t[2]), t.join(".")
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.factory("$avatarWifiWizard", ["$window", function(e) {
        return {
          getCurrentSSID: function(t, n) {
            try {
              e.cordova.plugins.LevitonApp.getCurrentSSID(t, n)
            } catch (e) {
              n(e)
            }
          },
          enforceWiFiUsage: function(t, n) {
            try {
              e.cordova.plugins.LevitonApp.enforceWiFiUsage(t, n)
            } catch (e) {}
          }
        }
      }]).factory("$avatarDateTimePicker", ["$window", function(e) {
        return {
          show: function(t, n, i) {
            if (i = i || {
                date: new Date,
                mode: "time"
              }, !e.datePicker) return n({
              error: "not a real device"
            });
            e.datePicker.show(i, function(e) {
              t(e)
            }, function(e) {
              n(e)
            })
          }
        }
      }])
    }
  }).call(t, "src/abstracts/plugins/plugins.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("TestDevices", function() {
      var e = {};
      return e.dimmers = [{
        name: "My Dimmer",
        brightness: 66,
        power: "on"
      }, {
        name: "Kitchen Dimmer",
        brightness: 66,
        power: "on"
      }, {
        name: "Guest Dimmer",
        brightness: 66,
        power: "on"
      }, {
        name: "Living Room Dimmer",
        brightness: 66,
        power: "off"
      }], e
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("Util", function() {
      var e = {};
      return e.hasOneOrMoreItems = function(e) {
        return !!(e && e.length && e.length > 0)
      }, e.generateRandomStringOfLength = function(e) {
        for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < e; i++) t += n.charAt(Math.floor(Math.random() * n.length));
        return t
      }, e
    })
  }
}, function(e, t, n) {
  "use strict";
  ! function() {
    String.prototype.contains = function(e) {
      return !angular.isUndefined(e) && null !== e && this.indexOf(e) > -1
    }, String.prototype.containsIgnoreCase = function(e) {
      return this.toLowerCase().contains(e.toLowerCase())
    }, String.prototype.containsAnyOf = function(e) {
      for (var t = 0; t < e.length; t++)
        if (this.contains(e[t])) return !0;
      return !1
    }, String.prototype.containsAllOf = function(e) {
      for (var t = 0; t < e.length; t++)
        if (!this.contains(e[t])) return !1;
      return !0
    }
  }()
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("ActionSheets", ["$rootScope", "AppSession", "$ionicActionSheet", "$state", "$translate", "$ionicModal", "$ionicPopup", "PopupFactory", "ScheduleManager", "ResidenceManager", "LimitErrorMessage", function(e, t, n, i, o, a, s, r, c, l, d) {
      var u = {};
      return u.residenceList = function() {
        var e = t.currentUser.residences,
          n = e.map(function(e) {
            return e.text = e.name, e.action = function() {
              t.setSelectedResidence(e)
            }, e
          }),
          a = [{
            text: o.instant("EDIT_RESIDENCE"),
            action: function() {
              i.go("residences.list")
            }
          }],
          s = {
            buttons: n.concat(a),
            cancelText: o.instant("CANCEL"),
            cancel: function() {},
            buttonClicked: function(e, t) {
              return !!t.action && (t.action(), !0)
            }
          };
        return ionic.Platform.isAndroid() && (s.titleText = o.instant("CHOOSE_A_RESIDENCE")), s
      }, u.addButtonList = function() {
        return {
          buttons: [{
            text: o.instant("ADD_DEVICE"),
            action: function() {
              return l.getDevices().then(function(e) {
                e.length >= 99 ? d.showDeviceLimitError() : i.go("onboarding.device-type-selector")
              }).catch(function() {
                r.alert({
                  message: o.instant("GENERIC_ERROR"),
                  title: o.instant("ERROR")
                })
              })
            }
          }, {
            text: o.instant("ADD_ROOM"),
            action: function() {
              l.getRooms().then(function(e) {
                e.length >= 99 ? d.showRoomLimitError() : i.go("rooms.add")
              })
            }
          }, {
            text: o.instant("ADD_ACTIVITY"),
            action: function() {
              l.getActivities().then(function(e) {
                e.length >= 50 ? d.showActivityLimitError() : i.go("activity-setup-wizard.add-activity-name")
              })
            }
          }, {
            text: o.instant("ADD_SCHEDULE"),
            action: function() {
              c.attemptAddSchedule()
            }
          }, {
            text: o.instant("ADD_RESIDENCE"),
            action: function() {
              l.getUserOwnedResidences().then(function(e) {
                e.length >= 20 ? d.showResidenceLimitError() : i.go("onboarding.add-residence")
              })
            }
          }],
          cancelText: o.instant("CANCEL"),
          buttonClicked: function(e, t) {
            return t.goto ? i.go(t.goto) : angular.isFunction(t.action) && t.action(), !0
          }
        }
      }, u.show = function(t) {
        return e.online ? n.show(t()) : (r.alert({
          title: o.instant("NO_INTERNET_CONNECTION_TITLE"),
          message: o.instant("NO_INTERNET_CONNECTION_MESSAGE")
        }), !1)
      }, u
    }]).run(["$rootScope", "ActionSheets", function(e, t) {
      e.showAddButtonActionSheet = function() {
        t.show(t.addButtonList)
      }, e.showResidenceListActionSheet = function() {
        t.show(t.residenceList)
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("activitySetupCancel", {
      template: n(300),
      controllerAs: "vm",
      controller: ["$state", function(e) {
        this.cancelSetup = function() {
          e.go("activities.list", {}, {
            reload: !0
          })
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("augustConnectionCard", {
      bindings: {},
      template: n(301),
      controllerAs: "vm",
      controller: ["ServerUpdater", "$scope", "$localStorage", "$translate", "Residence", "AugustConn", "AppSession", "$ionicLoading", "Browser", "Util", "$rootScope", "PopupFactory", "$cordovaInAppBrowser", "$http", "AugustIntegration", "$state", "$location", "AugustIntegrationFactory", "LoopBackAuth", function(e, t, n, i, o, a, s, r, c, l, d, u, v, m, p, E, f, g, h) {
        function _() {
          p.destroyById({
            id: A.currentLevitonResidence.augustIntegrations.id
          }).$promise.then(function(e) {
            A.hasAugustIntegration = !1, A.augustIntegrationResolved = !0, delete n.AUGUST_INTEGRATION
          }).catch(function(e) {})
        }

        function S() {
          var e = T.callbackURL,
            t = encodeURIComponent(h.currentUserId + ":" + s.currentUser.id + ":" + s.currentUser.selectedResidence.id),
            n = T.oauthUrl + "?" + encodeURIComponent(T.clientId.key) + "=" + encodeURIComponent(T.clientId.value) + "&state=" + t + "&redirect_uri=" + encodeURIComponent(e);
          c.openOAuth(n), b()
        }

        function b() {
          t.$on("AUGUST_DATA", function(e, t) {
            try {
              t = JSON.parse(t)
            } catch (e) {}
            return a.initialize().then(function() {
              E.go("august.locks")
            })
          })
        }

        function I(t) {
          return e.getServerInfo().base_url + t
        }
        var A = this;
        A.development_data = null, A.hasAugustIntegration = !1, A.augustIntegrationResolved = !1, A.currentLevitonResidence = null, A.host = n.cloud_api;
        n.AUGUST_SETUP_MODE = n.AUGUST_SETUP_MODE || "CONFIGURE";
        var T = {
          integrate: "https://home.august.com/login/oauth2?client_id=9bf03825-2fa9-4c2f-8de6-93cd3da9f18c&state=STATE",
          url: I("support/#/decora-smart-wifi/ifttt"),
          oauthUrl: "https://auth.august.com/authorization",
          tokenUrl: "https://auth.august.com/access_token",
          callbackURL: A.host + "/AugustIntegrations/redirect",
          clientId: {
            key: "client_id",
            value: "dc88e2f5-3c19-487c-81f5-e6ce89a88a6d"
          }
        };
        A.$onInit = function() {
          var e = s.getSelectedResidence().id;
          o.findById({
            id: e,
            filter: {
              include: ["augustIntegrations"]
            }
          }).$promise.then(function(e) {
            A.currentLevitonResidence = e, A.augustIntegrationResolved = !0, e.augustIntegrations && e.augustIntegrations.id ? A.hasAugustIntegration = !0 : delete n.AUGUST_INTEGRATION
          }).catch(function(e) {
            A.augustIntegrationResolved = !0
          })
        }, A.reconfigureAugust = function() {
          r.show({
            duration: 5e3
          }), g.reset(), n.AUGUST_SETUP_MODE = "RECONFIGURE", a.initialize().then(function() {
            E.go("august.locks")
          }).finally(function() {
            r.hide()
          })
        }, A.openSupportPage = function() {
          var e = I("support/#/decora-smart-wifi/august");
          c.openURLExternal(e)
        }, A.integrateAugust = function() {
          g.reset(), n.AUGUST_SETUP_MODE = "CONFIGURE", S()
        }, A.deauthorizeAugust = function() {
          u.confirm({
            template: i.instant("AUGUST_DEAUTH_MESSAGE"),
            title: i.instant("AUGUST_DEAUTH_TITLE"),
            buttons: [{
              text: i.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: i.instant("OK"),
              type: "button-confirm",
              onTap: _
            }]
          })
        }, A.cheat = function() {
          b(), d.$broadcast("AUGUST_DATA", A.development_data)
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.directive("authorize", ["$rootScope", "Person", "$timeout", "$state", function(e, t, n, i) {
      return {
        link: function() {
          var n = function(e, n) {
            if (n.data && n.data.authorize && !t.isAuthenticated()) return e.preventDefault(), i.go("accounts.login")
          };
          e.$on("$stateChangeStart", n)
        }
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("breakerCardEnrollment", {
      template: n(302),
      controllerAs: "vm",
      bindings: {
        breaker: "<",
        type: "@"
      },
      controller: ["$scope", "LevDBChanges", "BreakerManager", "$state", function(e, t, n, i) {
        var o = this;
        o.isDumb = !0, o.$onInit = function() {
          o.breaker.manufacturer && o.breaker.manufacturer.toLowerCase().indexOf("leviton") >= 0 && (o.isDumb = !1)
        }, o.onItemClick = function(e) {
          i.go("leapfrog-setup-wizard.edit-enrollment-breaker", {
            id: e.id
          })
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("breakerCard", {
        template: n(303),
        controllerAs: "vm",
        bindings: {
          breaker: "<",
          type: "@"
        },
        controller: ["$scope", "LevDBChanges", "BreakerManager", "$state", function(e, t, n, i) {
          function o() {
            t.bindModel("ResidentialBreaker", a.breaker.id, e, "breaker").then(function(e) {
              a.subscribedBreaker = e
            }).catch(function() {}), e.$watch("breaker", function(t) {
              t && (t.currentState = "CommunicationFailure" === t.currentState ? "NotCommunicating" : t.currentState, e.breaker.readableState = n.CL.breakerCurrentStateText(t.currentState) || "Not Communicating")
            }, !0)
          }
          var a = this;
          a.$onInit = function() {
            angular.isDefined(a.breaker.id) && a.breaker.id && !a.breaker.empty ? o() : e.breaker = a.breaker
          }, a.onItemClick = function(e) {
            if (angular.isDefined(e.id)) {
              var t = !(e && e.id) || e.empty,
                n = e.model && e.model.toLowerCase().indexOf("none") >= 0;
              t ? i.go("breakers.nonLfDetails", {
                breaker: e
              }) : n ? i.go("breakers.nonLfDetails", {
                breaker: e
              }) : i.go("breakers.details", {
                id: e.id,
                controllerId: e.residentialBreakerPanelId
              })
            } else i.go("breakers.nonLfDetails", {
              breaker: e
            })
          }
        }]
      })
    }
  }).call(t, "src/components/breaker-card/breaker-card.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("breakerListItem", {
        bindings: {
          breaker: "<",
          onDelete: "&"
        },
        template: n(304),
        controllerAs: "vm",
        controller: ["$scope", "$state", "LevDBChanges", "BreakerManager", function(e, t, n, i) {
          var o = this;
          n.bindModel("ResidentialBreaker", o.breaker.id, e, "breaker").then(function(e) {}), e.$watch("breaker", function(t) {
            t && (e.breaker.readableState = i.CURRENT_STATE_MAP[t.currentState])
          }, !0), o.onItemClick = function(e) {
            t.go("breakers.details", {
              id: e.id
            })
          }
        }]
      })
    }
  }).call(t, "src/components/breaker-list-item/breaker-list-item.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("breakerPanel", {
      template: n(305),
      controllerAs: "vm",
      bindings: {
        currentLoadCenter: "<"
      },
      controller: ["$state", "LeapfrogOnlineDataService", "ResidentialBreakerPanel", function(e, t, n) {
        var i = this;
        i.$onChanges = function() {
          var e = i.currentLoadCenter.residentialBreakers;
          t.CURRENT_LOAD_CENTER = _.cloneDeep(i.currentLoadCenter);
          var n = t.processBreakerList(e, i.currentLoadCenter);
          i.positionedBreakers = null, i.unpositionedBreakers = null, i.positionedBreakers = _.cloneDeep(n.positionedBreakers), i.unpositionedBreakers = _.cloneDeep(n.unpositionedBreakers)
        }, i.flipPanel = function() {
          var e = 180 === i.currentLoadCenter.orientation ? {
            orientation: 0
          } : {
            orientation: 180
          };
          n.prototype$updateAttributes({
            id: i.currentLoadCenter.id
          }, e).$promise.then(function(e) {
            i.positionedBreakers.reverse()
          })
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("breakerUsageDataCard", {
      template: n(306),
      controllerAs: "vm",
      bindings: {
        breaker: "<"
      },
      controller: ["$scope", "LevDBChanges", "BreakerManager", "HighChartHelper", "AppData", "BreakerDataCalculator", "$q", function(e, t, n, i, o, a, s) {
        function r() {
          return a.getSnapshots("ResidentialBreaker", l.breaker.id, l.segment, l.breaker.residentialBreakerPanelId)
        }

        function c(t) {
          if (t.chartData) {
            var n = _.cloneDeep(l.chartConfig);
            l.chartConfig = null;
            var i = t.chartData,
              a = t.yAxis;
            a && (n.options.yAxis.max = a.max, n.options.yAxis.tickInterval = a.tickInterval), "YTD" === l.segment ? (n.series = [{
              data: _.range(d.length).map(function() {
                return 0
              })
            }], n.options.xAxis.categories = d, n.options.xAxis.labels.step = 1) : "MTD" === l.segment ? (n.series = [{
              data: _.range(u.length).map(function() {
                return 0
              })
            }], n.options.xAxis.categories = u, n.options.xAxis.labels.step = 2) : "WTD" === l.segment ? (n.series = [{
              data: _.range(o.weekDays.length).map(function() {
                return 0
              })
            }], n.options.xAxis.categories = o.weekDays_short, n.options.xAxis.labels.step = 1) : "DTD" === l.segment && (n.series = [{
              data: _.range(o.hours.length).map(function() {
                return 0
              })
            }], n.options.xAxis.categories = o.hours, n.options.xAxis.labels.step = 2), n.series[0].name = e.breaker.name, n.series[0].data = i, l.chartConfig = n
          }
        }
        var l = this,
          d = o.months,
          u = o.days(),
          v = (_.range(d.length).map(function() {
            return 0
          }), t.bindModel("ResidentialBreaker", l.breaker.id, e, "breaker"));
        l.segment = "YTD", v.then(function(e) {
          r().then(function(e) {
            l.dataLoaded = !0, c(e)
          })
        }), l.chartConfig = {
          options: {
            chart: {
              type: "column",
              marginTop: 20,
              height: 325
            },
            title: null,
            xAxis: {
              categories: d,
              labels: {
                autoRotation: 0,
                style: {
                  "font-size": "xx-small",
                  color: i.COLORS.levLightGray
                }
              }
            },
            legend: {
              enabled: !1,
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
              x: 15,
              itemDistance: 5,
              itemStyle: {
                fontWeight: "400",
                fontSize: "14px",
                fontSpacing: "1px",
                color: i.COLORS.levLightGray
              }
            },
            credits: {
              enabled: !1
            },
            yAxis: {
              tickInterval: 200,
              max: 2e3,
              title: {
                text: "Energy Consumption in KWh",
                margin: 15,
                style: {
                  color: i.COLORS.levLightGray,
                  fontSize: "11.5px"
                }
              }
            }
          },
          series: [{
            data: _.range(d.length).map(function() {
              return 0
            })
          }]
        }, e.$watch("breaker", function(t) {
          t && (e.breaker.readableState = n.CURRENT_STATE_MAP[t.currentState])
        }, !0), l.setSegment = function(e) {
          l.segment = e, r().then(c)
        }, l.getClass = function(e) {
          return l.segment === e ? "active" : ""
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("brightnessStepper", {
        template: n(307),
        controllerAs: "vm",
        bindings: {
          active: "<",
          device: "=",
          size: "@"
        },
        controller: ["$scope", "IotSwitch", "AppData", function(e, t, n) {
          function i(e) {
            o.processing || (o.processing = !0, t.prototype$updateAttributes({
              id: o.device.id
            }, {
              brightness: e.brightness
            }).$promise.then(function(e) {
              o.device.brightness = e.brightness
            }).finally(function() {
              o.processing = !1
            }))
          }
          var o = this;
          o.active = o.active || !0, o.rangeStepValue = n.rangeStepValue, o.updateSwitch = function() {
            var e = parseInt(o.device.brightness) || 0;
            if (e += "s" === o.size ? -o.rangeStepValue : o.rangeStepValue, e = e > o.device.maxLevel ? o.device.maxLevel : e, e = e < o.device.minLevel ? o.device.minLevel : e, !1 === o.active) return void(o.device.brightness = e);
            i({
              brightness: e
            })
          }
        }]
      })
    }
  }).call(t, "src/components/brightness-stepper/brightness-stepper.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("CoachMarks", ["$localStorage", "$ionicModal", "NativeStorage", function(e, t, i) {
      function o() {
        a.basicCoachMark.show(), i.setItem("FIRST_TIME_USE", {
          visited: !0
        }).then(function(e) {})
      }
      var a = this,
        s = n(308);
      return a.basicCoachMark = t.fromTemplate(s, {
        animation: "fade-in"
      }), a.showBasicCoachMarks = function(e) {
        if (e && !0 === e.tour) return void o();
        i.getItem("FIRST_TIME_USE").catch(function(e) {
          o()
        })
      }, a
    }]).controller("CoachMarkController", ["$injector", "$timeout", function(e, t) {
      var n = this;
      n.isIPad = ionic.Platform.isIPad(), n.options = {
        activeSlide: 2,
        preloadImages: !0,
        lazyLoading: !1
      }, n.slider = {}, n.coachMarkImages = [{
        url: "./img/coach-marks/coach-mark-new-welcome.png"
      }, {
        url: "./img/coach-marks/coach-mark-new-p1.png"
      }, {
        url: "./img/coach-marks/coach-mark-new-p2.png"
      }, {
        url: "./img/coach-marks/coach-mark-new-p3.png"
      }, {
        url: "./img/coach-marks/coach-mark-new-p4.png"
      }], n.hideCoachMark = function() {
        e.get("CoachMarks").basicCoachMark.hide(), t(function() {
          n.slider.slideTo(0)
        }, 1e3)
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("combinedConsumptionGraph", {
      bindings: {},
      template: n(309),
      controllerAs: "vm",
      controller: ["HighChartHelper", "AppData", "BreakerDataCalculator", "AppSession", "$q", "BreakerManager", function(e, t, n, i, o, a) {
        function s(e) {
          e && e.snapshots && e.snapshots.length && (r.chartConfig.options.yAxis.tickInterval = e.yAxis.tickInterval, r.chartConfig.options.yAxis.max = e.yAxis.max, r.chartConfig.series = [{
            name: "Energy Consumption",
            data: e.chartData,
            colors: function() {
              for (var e = [], t = 0; t < c.length; t++) {
                var n = Highcharts.Color("#FF8C00").brighten((t - 3) / 40).get();
                e.push(n)
              }
              return e || ["#ffa600", "#ffaf1a", "#ffb833"]
            }(),
            colorByPoint: !0,
            pointWidth: 15,
            tooltip: {
              valueDecimals: 2,
              valueSuffix: " kWh"
            }
          }])
        }
        var r = this;
        r.session = i, r.PANELS = null;
        var c = t.months;
        r.currentDate = new Date, r.chartConfig = {
          options: {
            chart: {
              type: "column",
              marginTop: 80,
              height: 325
            },
            title: null,
            xAxis: {
              categories: c,
              labels: {
                autoRotation: 0,
                style: {
                  "font-size": "xx-small",
                  color: e.COLORS.levLightGray
                }
              }
            },
            legend: {
              enabled: !1,
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
              x: 15,
              itemDistance: 5,
              itemStyle: {
                fontWeight: "400",
                fontSize: "14px",
                fontSpacing: "1px",
                color: e.COLORS.levLightGray
              }
            },
            credits: {
              enabled: !1
            },
            yAxis: {
              tickInterval: 200,
              max: 2e3,
              title: {
                text: "Energy Consumption in KWh",
                margin: 20,
                style: {
                  color: e.COLORS.levLightGray,
                  fontSize: "14px"
                }
              }
            }
          },
          series: [{
            data: _.range(c.length).map(function() {
              return 0
            })
          }]
        }, n.getSnapshots("Residence", i.currentUser.selectedResidence.id, "YTD").then(s)
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    e.exports = function(e) {
      e.component("combinedCostGraph", {
        bindings: {},
        template: n(310),
        controllerAs: "vm",
        controller: ["BreakerDataCalculator", "AppSession", "PopupFactory", "$scope", "ResidenceManager", "SessionEvents", "BreakerManager", "$q", "$timeout", function(e, t, o, a, s, r, c, l, d) {
          function u(e) {
            var t = e.toFixed(2).toString().split("."),
              n = t[0],
              i = t[1];
            return {
              dollar: Number(n),
              cents: Number(i)
            }
          }

          function v() {
            var e = E.kwhRate;
            s.updateCurrentResidence({
              energyCost: e
            }).then(function(n) {
              t.currentUser.selectedResidence.energyCost = e, E.getSnapshot()
            }).catch(function(e) {})
          }

          function m(e) {
            if (e && e.range && "object" === i(e.range)) {
              var t = Number(e.consumption * E.kwhRate),
                n = u(t),
                o = n.dollar,
                a = n.cents;
              E.chartConfig.series[0].data = [{
                color: {
                  linearGradient: [0, 0, 300, 0],
                  stops: [
                    [.1, "#55BF3B"],
                    [.9, "#DF5353"]
                  ]
                },
                y: t,
                price: {
                  dollar: o,
                  cents: a < 10 ? "0" + a : a,
                  dateRange: Highcharts.dateFormat("%b %e, %Y", e.range.start) + " - " + Highcharts.dateFormat("%b %e, %Y", e.range.end)
                },
                innerRadius: "80%"
              }], E.$resolved = !0
            }
          }

          function p(e, t) {
            E.labelYTD = e * t
          }
          var E = this;
          a.$on(r.selectedResidenceChanged, function() {
            E.getSnapshot()
          }), E.PANELS = null, E.kwhRate = null, E.session = t, E.labelYTD = null;
          var f = [];
          E.chartConfig = {
            options: {
              chart: {
                type: "solidgauge",
                marginTop: 20
              },
              title: null,
              pane: {
                center: ["50%", "55%"],
                startAngle: -120,
                endAngle: 120,
                background: {
                  backgroundColor: "#eee",
                  borderColor: "#ddd",
                  borderWidth: 2,
                  innerRadius: "105%",
                  outerRadius: "105%"
                }
              },
              credits: {
                enabled: !1
              },
              tooltip: {
                enabled: !1
              },
              yAxis: {
                min: 0,
                max: 200,
                borderRadius: 20,
                showFirstLabel: !1,
                showLastLabel: !1,
                stops: [
                  [.1, "#55BF3B"],
                  [.5, "#DDDF0D"],
                  [.9, "#DF5353"]
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickAmount: 0,
                tickWidth: 0,
                title: {
                  text: "This Month",
                  style: {
                    color: "#161f5e",
                    fontSize: "16px"
                  },
                  y: 30
                },
                plotBands: [{
                  color: {
                    linearGradient: {
                      x1: 0,
                      x2: 0,
                      y1: 0,
                      y2: 1
                    },
                    stops: [
                      [0, "#eee"],
                      [1, "#eee"]
                    ]
                  },
                  borderWidth: 20,
                  innerRadius: "80%",
                  tickWidth: 0,
                  tickAmount: 0,
                  tickLength: 0,
                  startOnTick: !1,
                  from: 0,
                  to: 101
                }, {
                  color: {
                    linearGradient: {
                      x1: 0,
                      x2: 0,
                      y1: 0,
                      y2: 1
                    },
                    stops: [
                      [0, "#eee"],
                      [1, "#ddd"]
                    ]
                  },
                  borderWidth: 20,
                  innerRadius: "80%",
                  tickWidth: 0,
                  tickAmount: 0,
                  tickLength: 0,
                  startOnTick: !1,
                  from: 100,
                  to: 200
                }]
              },
              plotOptions: {
                solidgauge: {
                  dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: !0
                  }
                }
              }
            },
            series: [{
              data: f,
              dataLabels: {
                y: -35,
                formatter: function() {
                  return '<div class="cost-content"><span class="cost-currency">$</span><span class="cost-dollar">' + Highcharts.numberFormat(this.point.price.dollar, 0, ".", ",") + '</span><span class="cost-cents">' + this.point.price.cents + '</span></div><div class="cost-shadow"></div><span class="cost-date-range">' + this.point.price.dateRange + "</span>"
                }
              }
            }]
          }, E.getSnapshot = function() {
            E.$resolved = !1;
            t.getSelectedBreakerPanel().id;
            E.kwhRate = t.currentUser.selectedResidence.energyCost || .09;
            try {
              var n = function(e) {};
              e.getSnapshots("Residence", t.currentUser.selectedResidence.id, "MTD").then(m, n), e.getSnapshots("Residence", t.currentUser.selectedResidence.id, "YTD").then(function(e) {
                p(e.consumption, E.kwhRate)
              }, n)
            } catch (e) {}
            d(function() {}, 5e3)
          }, E.showKWHRateModal = function() {
            o.confirm({
              title: "Change Energy Rate",
              message: n(5),
              scope: a,
              buttons: [{
                type: "button-cancel",
                text: "Cancel"
              }, {
                type: "button-ok",
                text: "Save",
                onTap: function() {
                  v()
                }
              }]
            })
          }
        }]
      })
    }
  }).call(t, "src/components/combined-energy-usage/combined-cost-graph.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("configurationActionListItem", {
        template: n(311),
        controllerAs: "vm",
        bindings: {
          action: "<",
          onUpdate: "<",
          onDelete: "<",
          updatable: "<",
          deletable: "<",
          expandable: "<"
        },
        controller: ["LevDBChanges", "$injector", "AlertFactory", "IotSwitch", "ResidentialAction", "AppData", function(e, t, n, i, o, a) {
          function s() {
            if (!v && m) return void(d.item[d.action.targetProperty] = d.action.targetValue);
            var e = v ? d.action.actions : JSON.parse(d.action.targetValue);
            if (v) return void _.forEach(e, function(e) {
              d.item[e.targetProperty] = e.targetValue
            });
            for (var t in e) d.item.hasOwnProperty(t) && (d.item[t] = e[t])
          }

          function r() {
            var e = function(e) {
                d.item = e, s()
              },
              t = function() {
                d.exists = !1
              };
            d.model.findById({
              id: u
            }).$promise.then(e, t)
          }

          function c(e) {
            if ("OFF" === e.power && delete e.brightness, d.processing = !1, d.action) {
              var t = {};
              if (v || m)
                for (var n in e) e.hasOwnProperty(n) && (t.targetProperty = "properties", t.targetValue = JSON.stringify(e));
              else if (!v && "properties" === d.action.targetProperty) {
                var i = JSON.parse(d.action.targetValue);
                for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
                t.targetValue = JSON.stringify(i)
              }
              for (var s in t) t.hasOwnProperty(s) && (d.action[s] = t[s]);
              var r = v ? _.find(d.action.actions, {
                  targetProperty: "power"
                }).id : d.action.id,
                c = {
                  id: r
                };
              if (0 != d.updatable) {
                "ResidentialRoom" === d.type && (t.targetProperty = "power", t.targetValue = e.power);
                return void o.prototype$updateAttributes(c, t).$promise.then(function(e) {
                  l()
                })
              }
              l()
            }
          }

          function l() {
            d.onUpdate && d.onUpdate()
          }
          var d = this;
          d.exists = !0, d.accordion = {
            expanded: !1
          }, d.incDecValue = a.incDecValue, d.type = d.action.targetModelName || "IotSwitch", d.model = t.get(d.type);
          var u = d.action.item || d.action.targetModelId,
            v = !!d.action.actions,
            m = !(v ? d.action.actions && d.action.actions.length && d.action.actions.length > 0 : "properties" === d.action.targetProperty);
          d.$onInit = function() {
            r()
          }, d.toggleAccordion = function() {
            d.item.canSetLevel && (d.accordion.expanded = !d.accordion.expanded)
          }, d.toggleStatus = function(e) {
            e.power = "ON" === e.power ? "OFF" : "ON", e.brightness = "OFF" === e.power ? 0 : d.item.previousBrightnessLevel || 100, c({
              power: e.power,
              brightness: e.brightness
            })
          }, d.stepper = function() {
            d.item.previousBrightnessLevel = d.item.brightness, c({
              brightness: d.item.brightness
            })
          }, d.trackRange = function() {
            var e = d.item;
            e.previousBrightnessLevel = e.brightness, e.brightness > 0 && "OFF" === e.power && (e.power = "ON"), c({
              brightness: d.item.brightness,
              power: d.item.power
            })
          }, d._onDelete = function() {
            0 != d.deletable ? o.destroyById({
              id: d.action.id
            }).$promise.then(function() {
              d.onDelete && d.onDelete(d.action)
            }) : d.onDelete(d.action)
          }, d.handleBrightnessLevel = function() {
            "OFF" === d.item.power && (d.item.brightness = 0)
          }
        }]
      })
    }
  }).call(t, "src/components/configuration-action-list-item/configuration-action-list-item.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("configurationIotSwitchListItem", {
      template: n(312),
      controllerAs: "vm",
      bindings: {
        device: "<",
        expandable: "<"
      },
      controller: function() {
        var e = this;
        e.accordion = {
          expanded: !1
        }, e.device.previousBrightnessLevel = e.device.brightness, e.toggleAccordion = function() {
          e.device.canSetLevel && !1 !== e.expandable && (e.accordion.expanded = !e.accordion.expanded)
        }, e.toggleStatus = function() {
          e.device.power = "ON" === e.device.power ? "OFF" : "ON", e.device.brightness = "OFF" === e.device.power ? 0 : e.device.previousBrightnessLevel
        }, e.trackRange = function() {
          e.device.previousBrightnessLevel = e.device.brightness
        }
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("configurationRoomListItem", {
      template: n(313),
      controllerAs: "vm",
      bindings: {
        room: "<",
        action: "<"
      },
      controller: ["ResidentialActivity", function(e) {
        var t = this;
        t.action && t.action.actions && t.action.actions.length && (t.room.power = t.action.actions[0].targetValue), t.toggleStatus = function(n) {
          if (n.power = "ON" === n.power ? "OFF" : "ON", t.action) {
            var i = {
                id: t.action.residentialActivity.id,
                fk: t.action.actions[0].id
              },
              o = {
                targetValue: n.power
              };
            e.residentialActions.updateById(i, o).$promise.then(function(e) {})
          }
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("configurationSceneListItem", {
      template: n(314),
      controllerAs: "vm",
      bindings: {
        scene: "<",
        action: "<"
      },
      controller: function() {}
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("contactUsCard", {
      template: n(315),
      bindings: {},
      controllerAs: "vm",
      controller: function() {}
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("controlSwitchItem", {
      bindings: {
        device: "<"
      },
      template: n(316),
      controllerAs: "vm",
      controller: ["$scope", "LevDBChanges", "$translate", "PopupFactory", "AlertFactory", "$state", "IotSwitch", function(e, t, n, i, o, a, s) {
        function r(t) {
          return l.processing = !0, s.prototype$updateAttributes({
            id: e.switch.id
          }, t).$promise.finally(function() {
            l.processing = !1
          })
        }
        var c = "OFF",
          l = this;
        l.accordion = {
          expanded: !1
        };
        var d = l.device.id;
        l.onSocketConnected = function() {
          t.bindModel("IotSwitch", d, e, "switch").then(function(t) {
            e.switch.previousBrightnessLevel = t.brightness, t.power === c && (e.switch.brightness = 0), t.canSetLevel && (l.rangeMin = t.minLevel || 0, l.rangeMax = t.maxLevel || 100)
          }).catch(function() {
            o.pop({
              message: "Error while subscribing"
            })
          })
        }, l.gotoDetails = function(e) {
          a.go("rooms.switch-details", {
            id: e.id
          })
        }, l.toggleAccordion = function() {
          l.accordion.expanded = !l.accordion.expanded
        }, l.toggleStatus = function(t) {
          t.power = "ON" === t.power ? c : "ON", t.brightness = t.power === c ? 0 : e.switch.previousBrightnessLevel, r({
            power: t.power
          })
        }, l.syncSwitchState = function(t) {
          var n = _.isNumber(t),
            i = n && t > 0,
            o = e.switch.minLevel || 0,
            a = e.switch.maxLevel || 100,
            s = parseInt(e.switch.brightness, 10);
          n && (s += t);
          var l = _.clamp(s, o, a);
          l > o && !n && (e.switch.previousBrightnessLevel = l), r(l <= o && !i ? {
            power: c
          } : {
            power: "ON",
            brightness: l,
            previousBrightnessLevel: l
          })
        }, l.onRoomDeviceListItemRemoval = function(e) {
          function t() {
            s.prototype$updateAttributes({
              id: e.id
            }, {
              residentialRoomId: null
            }).$promise.finally(function() {
              l.hiddenFromList = !0
            })
          }
          i.confirm({
            template: n.instant("ROOM_DEVICE_REMOVE_PROMPT"),
            title: n.instant("REMOVE_DEVICE"),
            buttons: [{
              text: n.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: n.instant("OK"),
              type: "button-confirm",
              onTap: t
            }]
          })
        }, e.$watch("switch.power", function(t, n) {
          t === c ? e.switch.brightness = 0 : "ON" === t && n === c && (e.switch.brightness = e.switch.previousBrightnessLevel)
        }, !0)
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("deviceTypeCard", {
      template: n(317),
      controllerAs: "vm",
      bindings: {
        onSelect: "&",
        imageUrl: "=",
        title: "@"
      },
      controller: function() {}
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("editNameSimple", {
      bindings: {
        name: "=",
        label: "@?",
        labelType: "@?",
        onBlur: "&?",
        onChange: "&?",
        placeholder: "@"
      },
      template: n(318),
      controllerAs: "vm",
      controller: function() {}
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("editName", {
      template: n(319),
      controllerAs: "vm",
      bindings: {
        name: "=",
        placeholder: "<",
        onUpdate: "<",
        autoUpdate: "<",
        label: "@",
        labelType: "@"
      },
      controller: ["$scope", "PopupFactory", "$translate", function(e, t, n) {
        var i = this;
        i.init = function() {
          i.oldName = i.name
        }, i.update = function() {
          if (0 == i.autoUpdate);
          else if (!(i.name && i.name.length && i.name.length > 3)) return t.alert({
            template: n.instant("NAME_MUST_BE_X_CHAR_LONG", {
              x: 4
            }),
            title: n.instant("INVALID_NAME")
          }), i.name = i.oldName, !0;
          i.onUpdate && (i.oldName = i.name, i.onUpdate({
            name: i.name
          }))
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("energyUsageCard", {
        template: n(320),
        bindings: {
          singlePanel: "<"
        },
        controllerAs: "vm",
        controller: ["ActionSheets", "$translate", "Toast", "BreakerManager", "AppSession", "$scope", "SessionEvents", "ResidentialBreakerPanel", "$state", "PopupFactory", "$ionicHistory", "LevDBChanges", function(e, t, n, i, o, a, s, r, c, l, d, u) {
          function v() {
            i.getBreakerPanels().then(function(e) {
              return o.getSelectedBreakerPanel()
            }).then(function(e) {
              if (e) return u.bindModel("ResidentialBreakerPanel", e.id, a, "vm.currentLoadCenter")
            }).finally(function() {
              m.$resolved = !0
            })
          }
          var m = this;
          m.session = o, m.activeGraph = {
            type: "COST"
          }, m.$onInit = function() {
            v()
          }, m.activateGraph = function(e) {
            m.activeGraph.type = e
          }, a.$on(s.selectedResidenceChanged, function(e, t) {
            v()
          }), m.shouldDisable = function() {
            return !(m.$resolved && m.currentLoadCenter && "NOT_READY" !== m.currentLoadCenter.status)
          }
        }]
      })
    }
  }).call(t, "src/components/energy-usage-card/energy-usage-card.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("loadcenterConsumptionGraph", {
      bindings: {},
      template: n(321),
      controllerAs: "vm",
      controller: ["HighChartHelper", "AppData", "BreakerDataCalculator", "AppSession", function(e, t, n, i) {
        function o(e) {
          a.chartConfig.options.yAxis.tickInterval = e.yAxis.tickInterval, a.chartConfig.options.yAxis.max = e.yAxis.max, a.chartConfig.series = [{
            name: "Energy Consumption",
            data: e.chartData,
            colors: function() {
              for (var e = [], t = 0; t < s.length; t++) {
                var n = Highcharts.Color("#FF8C00").brighten((t - 3) / 40).get();
                e.push(n)
              }
              return e || ["#ffa600", "#ffaf1a", "#ffb833"]
            }(),
            colorByPoint: !0,
            pointWidth: 15,
            tooltip: {
              valueDecimals: 2,
              valueSuffix: " kWh"
            }
          }]
        }
        var a = this;
        a.session = i;
        var s = t.months;
        a.currentDate = new Date, a.chartConfig = {
          options: {
            chart: {
              type: "column",
              marginTop: 80,
              height: 325
            },
            title: null,
            xAxis: {
              categories: s,
              labels: {
                autoRotation: 0,
                style: {
                  "font-size": "xx-small",
                  color: e.COLORS.levLightGray
                }
              }
            },
            legend: {
              enabled: !1,
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
              x: 15,
              itemDistance: 5,
              itemStyle: {
                fontWeight: "400",
                fontSize: "14px",
                fontSpacing: "1px",
                color: e.COLORS.levLightGray
              }
            },
            credits: {
              enabled: !1
            },
            yAxis: {
              tickInterval: 200,
              max: 2e3,
              title: {
                text: "Energy Consumption in KWh",
                margin: 20,
                style: {
                  color: e.COLORS.levLightGray,
                  fontSize: "14px"
                }
              }
            }
          },
          series: [{
            data: _.range(s.length).map(function() {
              return 0
            })
          }]
        };
        var r = a.session.currentUser.selectedBreakerPanel;
        n.getSnapshots("ResidentialBreakerPanel", r.id, "YTD").then(o)
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("loadcenterCostGraph", {
        bindings: {
          panel: "="
        },
        template: n(322),
        controllerAs: "vm",
        controller: ["BreakerDataCalculator", "AppSession", "PopupFactory", "$scope", "ResidenceManager", "SessionEvents", "$timeout", function(e, t, i, o, a, s, r) {
          function c(e) {
            var t = e.toFixed(2).toString().split("."),
              n = t[0],
              i = t[1];
            return {
              dollar: Number(n),
              cents: Number(i)
            }
          }

          function l() {
            var e = u.kwhRate;
            a.updateCurrentResidence({
              energyCost: e
            }).then(function(n) {
              t.currentUser.selectedResidence.energyCost = e, u.getSnapshot()
            }).catch(function(e) {})
          }

          function d(e, t) {
            u.labelYTD = e * t
          }
          var u = this;
          o.$on(s.selectedResidenceChanged, function() {
            u.getSnapshot()
          }), u.kwhRate = t.currentUser.selectedResidence.energyCost || .09, u.session = t, u.labelYTD = "", u.$resolved = !0;
          var v = [];
          u.chartConfig = {
            options: {
              chart: {
                type: "solidgauge",
                marginTop: 20
              },
              title: null,
              pane: {
                center: ["50%", "55%"],
                startAngle: -120,
                endAngle: 120,
                background: {
                  backgroundColor: "#eee",
                  borderColor: "#ddd",
                  borderWidth: 2,
                  innerRadius: "105%",
                  outerRadius: "105%"
                }
              },
              credits: {
                enabled: !1
              },
              tooltip: {
                enabled: !1
              },
              yAxis: {
                min: 0,
                max: 200,
                borderRadius: 20,
                showFirstLabel: !1,
                showLastLabel: !1,
                stops: [
                  [.1, "#55BF3B"],
                  [.5, "#DDDF0D"],
                  [.9, "#DF5353"]
                ],
                lineWidth: 0,
                minorTickInterval: null,
                tickAmount: 0,
                tickWidth: 0,
                title: {
                  text: "This Month",
                  style: {
                    color: "#161f5e",
                    fontSize: "16px"
                  },
                  y: 30
                },
                plotBands: [{
                  color: {
                    linearGradient: {
                      x1: 0,
                      x2: 0,
                      y1: 0,
                      y2: 1
                    },
                    stops: [
                      [0, "#eee"],
                      [1, "#eee"]
                    ]
                  },
                  borderWidth: 20,
                  innerRadius: "80%",
                  tickWidth: 0,
                  tickAmount: 0,
                  tickLength: 0,
                  startOnTick: !1,
                  from: 0,
                  to: 101
                }, {
                  color: {
                    linearGradient: {
                      x1: 0,
                      x2: 0,
                      y1: 0,
                      y2: 1
                    },
                    stops: [
                      [0, "#eee"],
                      [1, "#ddd"]
                    ]
                  },
                  borderWidth: 20,
                  innerRadius: "80%",
                  tickWidth: 0,
                  tickAmount: 0,
                  tickLength: 0,
                  startOnTick: !1,
                  from: 100,
                  to: 200
                }]
              },
              plotOptions: {
                solidgauge: {
                  dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: !0
                  }
                }
              }
            },
            series: [{
              data: v,
              dataLabels: {
                y: -35,
                formatter: function() {
                  return '<div class="cost-content"><span class="cost-currency">$</span><span class="cost-dollar">' + Highcharts.numberFormat(this.point.price.dollar, 0, ".", ",") + '</span><span class="cost-cents">' + this.point.price.cents + '</span></div><div class="cost-shadow"></div><span class="cost-date-range">' + this.point.price.dateRange + "</span>"
                }
              }
            }]
          }, u.getSnapshot = function() {
            u.$resolved = !1;
            var n = t.getSelectedBreakerPanel().id,
              i = function(e) {
                var t = Number(e.consumption * u.kwhRate),
                  n = c(t),
                  i = n.dollar,
                  o = n.cents;
                u.chartConfig.series[0].data = [{
                  color: {
                    linearGradient: [0, 0, 300, 0],
                    stops: [
                      [.1, "#55BF3B"],
                      [.9, "#DF5353"]
                    ]
                  },
                  y: t,
                  price: {
                    dollar: i,
                    cents: o < 10 ? "0" + o : o,
                    dateRange: Highcharts.dateFormat("%b %e, %Y", e.range.start) + " - " + Highcharts.dateFormat("%b %e, %Y", e.range.end)
                  },
                  innerRadius: "80%"
                }], u.$resolved = !0
              };
            e.getSnapshots("ResidentialBreakerPanel", n, "MTD").then(i), e.getSnapshots("ResidentialBreakerPanel", n, "YTD").then(function(e) {
              d(e.consumption, u.kwhRate)
            })
          }, u.showKWHRateModal = function() {
            u.shouldShowLoading() || i.confirm({
              title: "Change Energy Rate",
              message: n(5),
              scope: o,
              buttons: [{
                type: "button-cancel",
                text: "Cancel"
              }, {
                type: "button-ok",
                text: "Save",
                onTap: function() {
                  l()
                }
              }]
            })
          }, u.shouldShowLoading = function() {
            return !(u.panel && "NOT_READY" !== u.panel.status)
          }
        }]
      })
    }
  }).call(t, "src/components/energy-usage-card/loadcenter-cost-graph.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("loadcenterVoltageGraph", {
      bindings: {},
      template: n(323),
      controllerAs: "vm",
      controller: ["AppData", "HighChartHelper", function(e, t) {
        var n = this,
          i = e.months,
          o = [{
            y: 190,
            marker: {
              symbol: "circle",
              radius: 6
            }
          }, 150, 170, 200, 200, 210, 250, 290, 345, 365, 385, {
            y: 430,
            marker: {
              symbol: "circle",
              radius: 6
            }
          }],
          a = [{
            y: 100,
            marker: {
              symbol: "circle",
              radius: 6
            }
          }, 250, 120, 245, 211, 322, 378, 350, 400, 400, 450, {
            y: 400,
            marker: {
              symbol: "circle",
              radius: 6
            }
          }],
          s = {
            firstName: "Fred"
          };
        n.chartConfig = {
          chart: {
            type: "spline"
          },
          credits: {
            enabled: !1
          },
          title: {
            text: ""
          },
          yAxis: {
            title: {
              text: "Usages in KWh",
              margin: 20,
              style: {
                color: t.COLORS.levLightGray,
                fontSize: "14px"
              }
            }
          },
          plotOptions: {
            spline: {
              marker: {
                enabled: !0,
                radius: 1
              }
            }
          },
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
            x: 15,
            itemDistance: 5,
            itemStyle: {
              fontWeight: "400",
              fontSize: "14px",
              fontSpacing: "1px",
              color: t.COLORS.levLightGray
            }
          },
          xAxis: {
            categories: i,
            labels: {
              autoRotation: 0,
              style: {
                fontSize: "xx-small",
                color: t.COLORS.levLightGray
              }
            }
          },
          series: [{
            name: s.firstName + "'s Load Center",
            data: a,
            color: t.COLORS.levGreen,
            lineWidth: 5
          }, {
            name: "Average for 70129",
            data: o,
            color: t.COLORS.levOrange,
            lineWidth: 5
          }]
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.directive("gridTab", function() {
      return {
        restrict: "E",
        transclude: !0,
        require: "^^ngModel",
        template: n(324),
        scope: {
          value: "=",
          onSelect: "&?"
        },
        link: function(e, t, n, i) {
          var o = t;
          o.addClass("col");
          var a = function() {
              return i.$modelValue
            },
            s = function() {
              i.$setViewValue(e.value), e.onSelect && e.onSelect()
            },
            r = function() {
              e.value === a() ? o.attr("selected", "true") : o.removeAttr("selected")
            };
          e.$watch(a, r), o.on("click", s)
        }
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.directive("gridTabs", function() {
      return {
        restrict: "E",
        transclude: !0,
        require: "ngModel",
        template: n(325)
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("homeAwayControlBar", {
      bindings: {},
      template: n(326),
      controllerAs: "vm",
      controller: ["AppSession", "Residence", "$scope", "$rootScope", "SessionEvents", "LevDBChanges", function(e, t, n, i, o, a) {
        function s() {
          l.isHome = "HOME" === l.residence.status, l.shouldShowHomeAway = l.residence.isOnHomeActivityEnabled || l.residence.isOnAwayActivityEnabled || l.residence.isRandomEnabled
        }

        function r() {
          n.$watch("vm.residence.status", function() {
            s()
          }, !0)
        }

        function c() {
          var t = e.getSelectedResidence();
          a.bindModel("Residence", t.id, n, "vm.residence").then(function(e) {
            r()
          })
        }
        var l = this;
        l.onInit = function() {
          c()
        }, l.onOccupancyChange = function() {
          var e = l.isHome ? {
            status: "HOME"
          } : {
            status: "AWAY"
          };
          l.residence.status = e.status, t.prototype$updateAttributes({
            id: l.residence.id
          }, e).$promise.then(function(e) {}).catch(function(e) {})
        }, n.$on(o.selectedResidenceChanged, function() {
          c()
        })
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.directive("range", function() {
      return {
        restrict: "C",
        link: function(e, t) {
          t.bind("touchstart mousedown", function(e) {
            e.stopPropagation(), e.stopImmediatePropagation()
          })
        }
      }
    }).directive("select", function() {
      return {
        restrict: "E",
        scope: !1,
        link: function(e, t) {
          t.on("touchmove touchstart", function(e) {
            e.stopPropagation()
          })
        }
      }
    }).directive("expandable", function() {
      return {
        restrict: "A",
        link: function(e, t, n) {
          var i = t;
          n.$observe("expandable", function(e) {
            i[0].style.height = "true" === e ? i[0].scrollHeight + "px" : "0px"
          })
        }
      }
    }).directive("targetable", ["$ionicGesture", function(e) {
      return {
        restrict: "A",
        link: function(t, n) {
          var i = function() {
              n.addClass("active-element")
            },
            o = function() {
              n.removeClass("active-element")
            };
          e.on("touch", i, n), e.on("drag", i, n), e.on("release", o, n)
        }
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    "function" == typeof Symbol && Symbol.iterator;
    e.exports = function(e) {
      e.component("iconDevice", {
        bindings: {
          device: "=",
          onToggle: "&",
          disabled: "<"
        },
        template: n(327),
        controllerAs: "vm",
        controller: function() {
          var e = this;
          e.toggleStatus = function() {
            e.disabled || (e.device.power = "ON" === e.device.power ? "OFF" : "ON", e.onToggle())
          }
        }
      })
    }
  }).call(t, "src/components/icon-device/icon-device.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.directive("infoCard", function() {
      return {
        scope: {
          message: "@",
          type: "@"
        },
        transclude: !0,
        template: n(328),
        controller: function() {}
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("iotSwitchListItem", {
        template: n(329),
        controllerAs: "vm",
        bindings: {
          device: "<"
        },
        controller: ["LevDBChanges", "$scope", "$state", "AlertFactory", "IotSwitch", "ScrollDelegate", function(e, t, n, i, o, a) {
          function s(e) {
            r.processing = !0, e.brightness > 0 && (e.power = "ON"), o.prototype$updateAttributes({
              id: t.switch.id
            }, e).$promise.finally(function() {
              r.processing = !1
            })
          }
          var r = this;
          r.accordion = {
            expanded: !1
          };
          var c = r.device.id;
          r.onSocketConnected = function() {
            e.bindModel("IotSwitch", c, t, "switch").then(function(e) {
              t.switch.previousBrightnessLevel = e.brightness, "OFF" === e.power && (t.switch.brightness = 0), e.canSetLevel && (r.rangeMin = e.minLevel || 0, r.rangeMax = e.maxLevel || 100)
            }).catch(function() {
              i.pop({
                message: "Error while subscribing"
              })
            }).finally(function() {
              r.$resolved = !0
            })
          }, r.gotoDetails = function(e) {
            n.go("rooms.switch-details", {
              id: e.id
            })
          }, r.toggleAccordion = function() {
            r.accordion.expanded = !r.accordion.expanded, a.resize()
          }, r.toggleStatus = function(e) {
            e.power = "ON" === e.power ? "OFF" : "ON", e.brightness = "OFF" === e.power ? 0 : t.switch.presetLevel || t.switch.previousBrightnessLevel, s({
              power: e.power
            })
          }, r.trackRange = function() {
            var e = Number(t.switch.brightness) === t.switch.minLevel;
            e || (t.switch.previousBrightnessLevel = t.switch.brightness);
            var n = {
              brightness: t.switch.brightness
            };
            "OFF" === t.switch.power && (t.switch.power = "ON", n.power = "ON"), e && (n = {
              power: "OFF"
            }, t.switch.brightness = 0), s(n)
          }, r.updateBrightness = function() {
            s({
              brightness: t.switch.brightness
            })
          }
        }]
      })
    }
  }).call(t, "src/components/iot-switch-list-item/iot-switch-list-item.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("itemAccordionDetails", {
      template: n(330),
      controllerAs: "vm",
      bindings: {
        label: "@"
      },
      controller: function() {}
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("itemCheckbox", {
      bindings: {
        device: "<"
      },
      template: n(331),
      controllerAs: "vm",
      controller: function() {
        var e = this;
        e.toggleSelection = function() {
          e.device.selected = !e.device.selected
        }
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("itemRangeSchedule", {
      bindings: {
        rangeValue: "=",
        onChange: "&"
      },
      template: n(332),
      controllerAs: "vm",
      controller: function() {
        var e = this;
        e.onTrackChange = function() {
          e.rangeValue = parseInt(e.rangeValue) || 0, e.onChange()
        }
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("itemRange", {
        bindings: {
          item: "=",
          onTrackChange: "&",
          onIncrement: "&",
          onDecrement: "&"
        },
        template: n(333),
        controllerAs: "vm",
        controller: function() {
          var e = this;
          e.doTrackChange = function(t) {
            t.brightness >= t.minLevel && (t.power = "ON"), e.item.brightness = parseInt(t.brightness) || 0, e.onTrackChange(e.item)
          }
        }
      })
    }
  }).call(t, "src/components/item-range/item-range.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("itemScheduleAction", {
        bindings: {
          config: "<",
          action: "=",
          onDelete: "&",
          onChange: "&"
        },
        template: n(334),
        controllerAs: "vm",
        controller: function() {
          function e() {
            t.accordion.expanded = !t.accordion.expanded
          }
          var t = this;
          t.accordion = {
            expanded: t.config.accordionExpanded
          }, t.disableCollapsible = !1 === t.config.collapsible, t.onClickBody = function() {
            t.disableCollapsible || t.action.canSetLevel && e()
          }, t.onClickChevron = function() {
            t.disableCollapsible || t.action.canSetLevel && e()
          }, t.onActionToggle = function() {
            t.action.targetValueAsObj.power = t.action.power, t.onChange()
          }, t.trackRange = function() {
            t.action.targetValueAsObj.brightness = t.action.brightness, t.onChange()
          }, t.doOnDelete = function() {
            t.onDelete()
          }
        }
      })
    }
  }).call(t, "src/components/item-schedule-action/item-schedule-action.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("itemScheduleWizard", {
      bindings: {
        device: "<"
      },
      template: n(335),
      controllerAs: "vm",
      controller: function() {
        var e = this;
        e.toggleSelection = function() {
          e.device.selected = !e.device.selected
        }
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("itemSchedule", {
        bindings: {
          schedule: "<"
        },
        template: n(336),
        controllerAs: "vm",
        controller: ["PopupFactory", "$translate", "ResidentialSchedule", "$scope", "$state", "ScheduleEditDataService", "$ionicListDelegate", function(e, t, n, i, o, a, s) {
          function r(e) {
            c.schedule.enabled = !e.enabled, n.prototype$updateAttributes({
              id: e.id
            }, {
              disabled: !e.enabled
            }).$promise.then(function() {})
          }
          var c = this;
          c.onToggleSchedule = function(n) {
            if (!c.schedule.enabled) return void r(n);
            e.confirm({
              title: t.instant("DISABLE_SCHEDULE_TITLE"),
              message: t.instant("DISABLE_SCHEDULE_MESSAGE"),
              buttons: [{
                text: t.instant("CANCEL"),
                type: "button-cancel",
                onTap: function() {}
              }, {
                text: t.instant("CONTINUE"),
                type: "button-ok",
                onTap: function() {
                  r(n)
                }
              }]
            })
          }, c.onDelete = function(o) {
            function a() {
              s.closeOptionButtons(), n.destroyById({
                id: o.id
              }).$promise.then(function(e) {
                i.$emit("schedules.refresh")
              }).catch(function(e) {})
            }
            e.confirm({
              template: t.instant("DELETE_SCHEDULE_WARNING"),
              title: t.instant("DELETE_SCHEDULE"),
              buttons: [{
                text: t.instant("CANCEL"),
                type: "button-cancel"
              }, {
                text: t.instant("DELETE"),
                type: "button-confirm",
                onTap: a
              }]
            })
          }, c.editSchedule = function() {
            a.reset(), o.go("schedules.edit", {
              id: c.schedule.id
            })
          }
        }]
      })
    }
  }).call(t, "src/components/item-schedule/item-schedule.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("leapfrogOnlineSetupCancel", {
      template: n(337),
      controllerAs: "vm",
      controller: ["$state", function(e) {
        this.cancelSetup = function() {
          e.go("rooms.list", {}, {
            reload: !0
          })
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.directive("leapfrogOnlineSetupNavbar", function() {
      return {
        restrict: "E",
        template: n(338),
        scope: {
          title: "@",
          showBack: "<",
          noBackText: "<",
          showContinue: "<",
          onBack: "&",
          onContinue: "&",
          continueText: "@",
          closeOnBack: "@"
        },
        compile: function(e, t) {
          t.onBack || (t.closeOnBack = !0), t.showBack = angular.isDefined(t.showBack) ? t.showBack : "true", t.showContinue = angular.isDefined(t.showContinue) ? t.showContinue : "true"
        },
        controller: ["$scope", "$state", function(e, t) {
          e.closeOnBack && (e.onBack = function() {
            t.go("rooms.list")
          })
        }]
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("leapfrogSetupCancel", {
        template: n(339),
        controllerAs: "vm",
        controller: ["$state", "Insomnia", function(e, t) {
          this.cancelSetup = function() {
            t.allowSleepAgain(), e.go("rooms.list", {}, {
              reload: !0
            })
          }
        }]
      })
    }
  }).call(t, "src/components/leapfrog-setup-cancel/leapfrog-setup-cancel.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.directive("leapfrogSetupNavbar", function() {
      return {
        restrict: "E",
        template: n(340),
        scope: {
          title: "@",
          showBack: "<",
          noBackText: "<",
          showContinue: "<",
          onBack: "&",
          onContinue: "&",
          continueText: "@",
          closeOnBack: "@",
          continueIconHide: "@"
        },
        compile: function(e, t) {
          t.onBack || (t.closeOnBack = !0), t.continueIconHide && "false" !== t.continueIconHide && (t.continueIconHide = !0), t.showBack = angular.isDefined(t.showBack) ? t.showBack : "true", t.showContinue = angular.isDefined(t.showContinue) ? t.showContinue : "true"
        },
        controller: ["$scope", "$state", function(e, t) {
          e.closeOnBack && (e.onBack = function() {
            t.go("rooms.list")
          })
        }]
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.directive("listDivider", function() {
      return {
        scope: {
          label: "@",
          type: "@"
        },
        transclude: !0,
        template: n(341)
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("listWeekdays", {
      bindings: {
        daysSelection: "=",
        onChange: "&"
      },
      template: n(342),
      controllerAs: "vm",
      controller: ["AppData", function(e) {
        var t = this;
        t.weekDays = e.weekDays.map(function(e, n) {
          return {
            name: e,
            selected: t.daysSelection[n],
            index: n
          }
        }), t.onToggleDay = function(e) {
          e.selected = !e.selected, t.daysSelection[e.index] = !t.daysSelection[e.index], t.onChange()
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("addActionSheet", {
      bindings: {},
      template: n(343),
      controllerAs: "vm",
      controller: ["ActionSheets", function(e) {
        this.showAddButtonActionSheet = function() {
          e.show(e.addButtonList)
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("backButton", {
        bindings: {
          onBackClick: "&?",
          preventDefault: "<?",
          useIonicBack: "<?",
          type: "@"
        },
        template: n(344),
        controllerAs: "vm",
        controller: ["$rootScope", "CustomBackHandler", function(e, t) {
          var n = this;
          n.isIOS = ionic.Platform.isIOS(), n.triggerBackEvent = function() {
            "local" !== n.type && (n.preventDefault, n.onBackClick ? n.onBackClick() : n.useIonicBack ? e.$ionicGoBack() : t.handleBack())
          }
        }]
      })
    }
  }).call(t, "src/components/nav-buttons/back-button.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("navRightButton", {
      bindings: {
        icon: "@?",
        text: "@",
        type: "@?",
        hasIcon: "@?"
      },
      template: n(345),
      controllerAs: "vm",
      controller: function() {
        var e = this;
        e.hasIcon && angular.isUndefined(e.icon) && (e.icon = "ion-chevron-right")
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("navbarSecret", {
      bindings: {},
      template: n(346),
      controllerAs: "vm",
      controller: ["PopupFactory", "$scope", "ServerUpdater", function(e, t, i) {
        function o() {
          e.alert({
            template: n(347),
            title: "Switch Cloud",
            subTitle: "To switch to the cloud, please enter the password.",
            scope: t,
            buttons: [{
              text: "Cancel",
              type: "button-cancel"
            }, {
              text: "Switch Cloud",
              type: "button-confirm ",
              onTap: s
            }]
          })
        }

        function a() {
          i.setActiveServer(r.selectedServer)
        }

        function s(e) {
          if ("SERVER_SELECT" === r.CURRENT_PHASE) {
            if (!r.selectedServer.apiUrl.trim()) return;
            a()
          }
          "leviton1" === r.devPassword && (e.preventDefault(), r.devAuthorized = !0, r.CURRENT_PHASE = "SERVER_SELECT")
        }
        var r = this;
        r.serverUpdater = i, r.TAP_COUNT = 0, r.SELECTED_MODE = "PROD", r.devPassword = "", r.devAuthorized = !1, r.servers = [{
          type: "DEV",
          apiUrl: "mydev.leviton.com"
        }, {
          type: "QA",
          apiUrl: "myqa.leviton.com"
        }, {
          type: "PROD",
          apiUrl: "my.leviton.com"
        }, {
          type: "CUSTOM",
          apiUrl: ""
        }], r.CURRENT_PHASE = "PASSWORD_PROMPT", r.startServerChange = function() {
          r.TAP_COUNT += 1, 3 === r.TAP_COUNT && (r.TAP_COUNT = 0, o())
        }, r.selectServer = function(e) {
          r.selectedServer = e
        }, r.onKeyPress = function(e) {
          e.preventDefault(), 13 === e.keyCode && "leviton1" === r.devPassword && (r.devAuthorized = !0, r.CURRENT_PHASE = "SERVER_SELECT")
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("nestConnectionCard", {
      bindings: {},
      template: n(348),
      controllerAs: "vm",
      controller: ["ServerUpdater", "$scope", "$localStorage", "$translate", "Residence", "NestConn", "AppSession", "$ionicLoading", "Browser", "Util", "$rootScope", "PopupFactory", "$cordovaInAppBrowser", "$http", "NestIntegration", "$state", "$location", "NestIntegrationFactory", function(e, t, n, i, o, a, s, r, c, l, d, u, v, m, p, E, f, g) {
        function h() {
          p.destroyById({
            id: A.currentLevitonResidence.nestIntegrations.id
          }).$promise.then(function(e) {
            A.hasNestIntegration = !1, A.nestIntegrationResolved = !0, delete n.NEST_INTEGRATION
          }).catch(function(e) {})
        }

        function _() {
          var e = N.callbackURL,
            t = encodeURIComponent(l.generateRandomStringOfLength(12)),
            n = N.oauthUrl + "?" + encodeURIComponent(N.clientId.key) + "=" + encodeURIComponent(N.clientId.value) + "&state=" + t + "&redirect_uri=" + encodeURIComponent(e);
          c.openOAuth(n), S()
        }

        function S() {
          t.$on("NEST_OAUTH_CODE", function(e, t) {
            var n = t.nestCode;
            T || (b(n), T = !0)
          })
        }

        function b(e) {
          r.show({
            duration: 5e3
          }), a.getNewAccessToken(e).then(function(e) {
            return g.reset(), a.initialize()
          }).then(function() {
            E.go("nest.home-away")
          }).catch(function(e) {}).finally(function() {
            r.hide()
          })
        }

        function I(t) {
          return e.getServerInfo().base_url + t
        }
        var A = this;
        A.hasNestIntegration = !1, A.nestIntegrationResolved = !1, A.currentLevitonResidence = null;
        var T = !1;
        n.NEST_SETUP_MODE = n.NEST_SETUP_MODE || "CONFIGURE";
        var N = {
          integrate: "https://home.nest.com/login/oauth2?client_id=9bf03825-2fa9-4c2f-8de6-93cd3da9f18c&state=STATE",
          url: I("support/#/decora-smart-wifi/ifttt"),
          oauthUrl: "https://home.nest.com/login/oauth2",
          tokenUrl: "https://api.home.nest.com/oauth2/access_token",
          callbackURL: "comlevitonhome://nest_integration/o_auth/",
          clientId: {
            key: "client_id",
            value: "9bf03825-2fa9-4c2f-8de6-93cd3da9f18c"
          },
          clientSecret: {
            key: "client_secret",
            value: "z9kBYmG3Wo5IG4eEx4SlPPdik"
          }
        };
        A.$onInit = function() {
          var e = s.getSelectedResidence().id;
          o.findById({
            id: e,
            filter: {
              include: ["nestIntegrations"]
            }
          }).$promise.then(function(e) {
            A.currentLevitonResidence = e, A.nestIntegrationResolved = !0, e.nestIntegrations && e.nestIntegrations.isHomeAwayEnabled ? A.hasNestIntegration = !0 : delete n.NEST_INTEGRATION
          })
        }, A.reconfigureNest = function() {
          r.show({
            duration: 5e3
          }), g.reset(), n.NEST_SETUP_MODE = "RECONFIGURE", a.initialize().then(function() {
            E.go("nest.home-away")
          }).finally(function() {
            r.hide()
          })
        }, A.openSupportPage = function() {
          var e = I("support/#/decora-smart-wifi/nest");
          c.openURLExternal(e)
        }, A.integrateNest = function() {
          g.reset(), n.NEST_SETUP_MODE = "CONFIGURE", _()
        }, A.deauthorizeNest = function() {
          u.confirm({
            template: i.instant("NEST_DEAUTH_MESSAGE"),
            title: i.instant("NEST_DEAUTH_TITLE"),
            buttons: [{
              text: i.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: i.instant("OK"),
              type: "button-confirm",
              onTap: h
            }]
          })
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("offlineCard", {
        template: n(349),
        controllerAs: "vm",
        controller: ["$state", "AccountManager", "LevDBChanges", "$timeout", "$scope", "$rootScope", function(e, t, n, i, o, a) {
          var s = this;
          s.attemptReconnect = function() {
            e.reload()
          }, s.retryLogin = function() {
            t.logout().finally(function() {
              e.go("accounts.login", {}, {
                reload: !0
              })
            })
          }, s.attemptReconnectSocket = function() {
            n.connectSocket()
          }, a.$watch("online", function(e) {
            !0 === e && n.connectSocket()
          })
        }]
      })
    }
  }).call(t, "src/components/offline-card/offline-card.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("panelListItem", {
      bindings: {
        panel: "<",
        onDelete: "&"
      },
      template: n(350),
      controllerAs: "vm",
      controller: ["$scope", "$state", "AppSession", function(e, t, n) {
        this.onItemClick = function(e) {
          n.setSelectedBreakerPanel(e), t.go("breakers.breaker-panel-dashboard", {
            id: e.id
          })
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("roomDeviceListItem", {
      template: n(352),
      controllerAs: "vm",
      bindings: {
        device: "<"
      },
      controller: ["IotSwitch", "$translate", "$ionicPopup", "$state", "LevDBChanges", "AlertFactory", "$scope", "PopupFactory", function(e, t, n, i, o, a, s, r) {
        function c(t) {
          l.processing = !0, e.prototype$updateAttributes({
            id: s.switch.id
          }, t).$promise.finally(function() {
            l.processing = !1
          })
        }
        var l = this;
        l.accordion = {
          expanded: !1
        };
        var d = l.device.id;
        l.onSocketConnected = function() {
          o.bindModel("IotSwitch", d, s, "switch").then(function(e) {
            s.switch.previousBrightnessLevel = e.brightness, "OFF" === e.power && (s.switch.brightness = 0), e.canSetLevel && (l.rangeMin = e.minLevel || 0, l.rangeMax = e.maxLevel || 100)
          }).catch(function() {
            a.pop({
              message: "Error while subscribing"
            })
          }).finally(function() {
            l.$resolved = !0
          })
        }, l.gotoDetails = function(e) {
          i.go("rooms.switch-details", {
            id: e.id
          })
        }, l.toggleAccordion = function() {
          l.accordion.expanded = !l.accordion.expanded
        }, l.toggleStatus = function(e) {
          e.power = "ON" === e.power ? "OFF" : "ON", e.brightness = "OFF" === e.power ? 0 : s.switch.previousBrightnessLevel, c({
            power: e.power
          })
        }, l.trackRange = function() {
          s.switch.previousBrightnessLevel = s.switch.brightness;
          var e = {
            brightness: s.switch.brightness
          };
          "OFF" === s.switch.power && (s.switch.power = "ON", e.power = "ON"), c(e)
        }, l.onRangeButtonChange = function() {
          var e = s.switch;
          c({
            brightness: e.brightness,
            power: e.power
          })
        }, l.onRoomDeviceListItemRemoval = function(n) {
          function i() {
            e.prototype$updateAttributes({
              id: n.id
            }, {
              residentialRoomId: null
            }).$promise.finally(function() {
              l.hiddenFromList = !0
            })
          }
          r.confirm({
            message: t.instant("ROOM_DEVICE_REMOVE_PROMPT"),
            title: t.instant("REMOVE_DEVICE"),
            buttons: [{
              type: "button-cancel",
              text: t.instant("CANCEL")
            }, {
              type: "button-confirm",
              text: t.instant("OK"),
              onTap: i
            }]
          })
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("roomListItem", {
      template: n(353),
      controllerAs: "vm",
      bindings: {
        room: "=",
        expandedRoom: "=",
        onExpand: "&"
      },
      controller: ["$scope", "$translate", "LevDBChanges", "ResidentialRoom", "AlertFactory", "$state", "ScrollDelegate", function(e, t, n, i, o, a, s) {
        var r = this;
        r.accordion = {
          expanded: !1
        }, r.onSocketConnected = function() {
          n.bindModel("ResidentialRoom", r.room.id, e, "room").then(function(e) {}).catch(function() {
            o.pop({
              message: t.instant("ERROR_ON_SUBSCRIPTION")
            })
          }).finally(function() {
            r.setAccordionExpanded(!1), r.$resolved = !0
          })
        }, r.gotoRoomDetails = function(e) {
          var t = {
            roomId: e.id
          };
          a.go("rooms.details", t)
        }, r.deleteRoom = function(t) {
          e.$parent.vm.deleteRoom(t)
        }, r.changeRoomState = function(e) {
          var t = e.power || "OFF";
          t && "ON" === t ? i.turnOff({
            id: e.id
          }) : i.turnOn({
            id: e.id
          })
        }, r.toggleAccordion = function() {
          r.setAccordionExpanded(!r.accordion.expanded), r.accordion.expanded || (r.expandedRoom = null)
        }, r.setAccordionExpanded = function(e) {
          r.accordion.expanded = !!e, s.resize(), r.accordion.expanded && r.onExpand()
        }, e.$watch(function() {
          return r.expandedRoom
        }, function(e) {
          e && e.id !== r.room.id && r.setAccordionExpanded(!1)
        })
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("sceneSetupCancel", {
      template: n(354),
      controllerAs: "vm",
      controller: ["$state", "$stateParams", "SceneWizard", function(e, t, n) {
        this.cancelSetup = function() {
          n.clearData();
          var i = t.roomId || t.id;
          i ? e.go("rooms.details", {
            roomId: i
          }) : e.go("rooms.list")
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("scenesListItem", {
      template: n(355),
      controllerAs: "vm",
      bindings: {
        scene: "<"
      },
      controller: ["LevDBChanges", "$translate", "$scope", "$state", "AlertFactory", "$ionicPopup", "ResidentialScene", "SceneWizard", "PopupFactory", function(e, t, n, i, o, a, s, r, c) {
        var l = this;
        l.executeScene = function(e) {
          function n() {
            s.execute({
              id: e.id
            }).$promise.then(function(e) {}).catch(function(e) {})
          }
          c.confirm({
            message: t.instant("SCENE_RUN_PROMPT"),
            title: e.name,
            buttons: [{
              text: t.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: t.instant("RUN"),
              type: "button-confirm",
              onTap: n
            }]
          })
        }, l.editScene = function(e) {
          r.activaTab = "scenes", i.go("rooms.edit-scene", {
            roomId: e.residentialRoomId,
            sceneId: e.id
          })
        }, l.onSceneRemoval = function(e) {
          function n() {
            s.deleteById({
              id: e.id
            }).$promise.then(function(e) {}).finally(function() {
              l.hiddenFromList = !0
            })
          }
          c.confirm({
            message: t.instant("DELETE_SCENE_WARNING"),
            title: t.instant("DELETE_SCENE"),
            buttons: [{
              text: t.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: t.instant("OK"),
              type: "button-confirm",
              onTap: n
            }]
          })
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("scheduleSetupCancel", {
      template: n(356),
      controllerAs: "vm",
      controller: ["$state", function(e) {
        this.cancelSetup = function() {
          e.go("schedules.list", {})
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.directive("scheduleSetupNavbar", function() {
      return {
        restrict: "E",
        template: n(357),
        scope: {
          title: "@",
          showBack: "<",
          noBackText: "<",
          showContinue: "<",
          onBack: "&",
          onContinue: "&",
          continueText: "@",
          closeOnBack: "@"
        },
        compile: function(e, t) {
          t.onBack || (t.closeOnBack = !0), t.showBack = angular.isDefined(t.showBack) ? t.showBack : "true", t.showContinue = angular.isDefined(t.showContinue) ? t.showContinue : "true"
        },
        controller: ["$scope", "$state", function(e, t) {
          e.closeOnBack && (e.onBack = function() {
            t.go("schedules.list")
          })
        }]
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("scheduleTimeCard", {
        bindings: {
          time: "=",
          initialTime: "<",
          onTimeChange: "&"
        },
        template: n(358),
        controllerAs: "vm",
        controller: ["$avatarDateTimePicker", "moment", "$window", "$q", "ionicTimePicker", function(e, t, n, i, o) {
          function a(e) {
            _.forEach(c.time, function(e) {
              e.selected = !1
            }), c.time[e].selected = !0
          }

          function s() {
            var e = i.defer();
            c.SELECTED_TIME = c.SELECTED_TIME || new Date, c.time.ABSOLUTE.timeLabel = c.SELECTED_TIME;
            try {
              o.openTimePicker({
                inputTime: 60 * c.SELECTED_TIME.getHours() * 60 + 60 * c.SELECTED_TIME.getMinutes(),
                step: 1,
                callback: function(t) {
                  t || (t = c.SELECTED_TIME || new Date), r(t), e.resolve(t)
                }
              })
            } catch (n) {
              var t = c.SELECTED_TIME || new Date;
              r(t), e.reject(n)
            }
            return e.promise
          }

          function r(e) {
            c.SELECTED_TIME = e, c.time.ABSOLUTE.timeLabel = c.SELECTED_TIME, c.time.ABSOLUTE.schedule = {
              hour: e.getHours(),
              minute: e.getMinutes(),
              timeType: "ABSOLUTE"
            }
          }
          var c = this;
          c.timeLabel = new Date, c.time = {
            ABSOLUTE: {},
            SUNRISE: {
              schedule: {
                timeType: "SUNRISE",
                minute: 0
              }
            },
            SUNSET: {
              schedule: {
                timeType: "SUNSET",
                minute: 0
              }
            }
          }, c.updateTimeType = function(e) {
            c.applyOnDataChange(), a(e), "ABSOLUTE" === e && s()
          }, c.applyOnDataChange = function() {
            c.onTimeChange()
          }, c.initializeSchedule = function(e) {
            var t = e.timeType;
            if (c.time[t].selected = !0, "ABSOLUTE" === t) {
              var n = new Date;
              n.setHours(e.hour), n.setMinutes(e.minute), r(n)
            } else "SUNRISE" === t ? c.time.SUNRISE.schedule.minute = e.minute : "SUNSET" === t && (c.time.SUNSET.schedule.minute = e.minute)
          }, c.onTimeLabelClick = function() {
            c.time.ABSOLUTE.selected && s().then(function(e) {}).catch(function() {}).finally(function() {
              c.applyOnDataChange()
            })
          }, c.$onInit = function() {
            c.initialTime ? c.initializeSchedule(c.initialTime) : a("SUNSET")
          }
        }]
      }).filter("scheduleTimeLabel", function() {
        return function(e, t) {
          var n = Math.abs(e);
          return e < 0 ? n + " minutes before " + t : e > 0 ? n + " minutes after " + t : t
        }
      })
    }
  }).call(t, "src/components/schedule-time-card/schedule-time-card.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("switchSetupCancel", {
      template: n(359),
      controllerAs: "vm",
      controller: ["$state", "DeviceEnrollmentDataService", function(e, t) {
        this.cancelSetup = function() {
          t.resetData(), t.resetReconfigure(), e.go("rooms.list", {}, {
            reload: !0
          })
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.directive("switchSetupNavbar", function() {
      return {
        restrict: "E",
        template: n(360),
        scope: {
          title: "@",
          showBack: "<",
          noBackText: "<",
          showContinue: "<",
          onBack: "&",
          onContinue: "&",
          continueText: "@",
          closeOnBack: "@"
        },
        compile: function(e, t) {
          t.onBack || (t.closeOnBack = !0), t.showBack = angular.isDefined(t.showBack) ? t.showBack : "true", t.showContinue = angular.isDefined(t.showContinue) ? t.showContinue : "true"
        },
        controller: ["$scope", "$state", "DeviceEnrollmentDataService", function(e, t, n) {
          e.closeOnBack && (e.onBack = function() {
            n.resetData(), n.resetReconfigure(), t.go("rooms.list")
          })
        }]
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.provider("ionicTimePicker", function() {
      var e = {
        setLabel: "Set",
        closeLabel: "Cancel",
        inputTime: 60 * (new Date).getHours() * 60 + 60 * (new Date).getMinutes(),
        format: 12,
        step: 15
      };
      this.configTimePicker = function(t) {
        angular.extend(e, t)
      }, this.$get = ["$rootScope", "$ionicPopup", "$interval", "PopupFactory", function(t, i, o, a) {
        function s(e, t) {
          l.time.hours = Math.floor(e / 3600);
          var n = e % 3600;
          12 == t && (l.time.hours >= 12 ? (l.time.meridian = "PM", l.time.hours > 12 && (l.time.hours -= 12)) : l.time.meridian = "AM", 0 === l.time.hours && (l.time.hours = 12)), l.time.minutes = n / 60, l.time.hours = Math.floor(l.time.hours), l.time.minutes = Math.floor(l.time.minutes), 1 == l.time.hours.toString().length && (l.time.hours = "0" + l.time.hours), 1 == l.time.minutes.toString().length && (l.time.minutes = "0" + l.time.minutes), l.time.format = l.mainObj.format
        }

        function r(e) {
          if (0 !== e && !e) return new Date;
          var t = new Date(1e3 * e),
            n = new Date;
          return n.setHours(t.getUTCHours()), n.setMinutes(t.getUTCMinutes()), n.setSeconds(0), n
        }
        var c = {},
          l = t.$new();
        return l.today = function(e) {
          return e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0), e
        }(new Date).getTime(), l.time = {}, l.increaseHours = function() {
          l.time.hours = Number(l.time.hours), 12 == l.mainObj.format && (12 != l.time.hours ? l.time.hours += 1 : l.time.hours = 1), 24 == l.mainObj.format && (l.time.hours = (l.time.hours + 1) % 24), l.time.hours = l.time.hours < 10 ? "0" + l.time.hours : l.time.hours
        }, l.increaseHoursHold = function() {
          l.increaseHoursInterval = o(function() {
            l.increaseHours()
          }, 100)
        }, l.increaseHoursRelease = function() {
          o.cancel(l.increaseHoursInterval)
        }, l.decreaseHours = function() {
          l.time.hours = Number(l.time.hours), 12 == l.mainObj.format && (l.time.hours > 1 ? l.time.hours -= 1 : l.time.hours = 12), 24 == l.mainObj.format && (l.time.hours = (l.time.hours + 23) % 24), l.time.hours = l.time.hours < 10 ? "0" + l.time.hours : l.time.hours
        }, l.decreaseHoursHold = function() {
          l.decreaseHoursInterval = o(function() {
            l.decreaseHours()
          }, 100)
        }, l.decreaseHoursRelease = function() {
          o.cancel(l.decreaseHoursInterval)
        }, l.increaseMinutes = function() {
          l.time.minutes = Number(l.time.minutes), l.time.minutes = (l.time.minutes + l.mainObj.step) % 60, l.time.minutes = l.time.minutes < 10 ? "0" + l.time.minutes : l.time.minutes
        }, l.increaseMinutesHold = function() {
          l.increaseMinutesInterval = o(function() {
            l.increaseMinutes()
          }, 100)
        }, l.increaseMinutesRelease = function() {
          o.cancel(l.increaseMinutesInterval)
        }, l.decreaseMinutes = function() {
          l.time.minutes = Number(l.time.minutes), l.time.minutes = (l.time.minutes + (60 - l.mainObj.step)) % 60, l.time.minutes = l.time.minutes < 10 ? "0" + l.time.minutes : l.time.minutes
        }, l.decreaseMinutesHold = function() {
          l.decreaseMinutesInterval = o(function() {
            l.decreaseMinutes()
          }, 100)
        }, l.decreaseMinutesRelease = function() {
          o.cancel(l.decreaseMinutesInterval)
        }, l.changeMeridian = function() {
          l.time.meridian = "AM" === l.time.meridian ? "PM" : "AM"
        }, c.openTimePicker = function(t) {
          var i = [];
          l.mainObj = angular.extend({}, e, t), s(l.mainObj.inputTime, l.mainObj.format), i.push({
            text: l.mainObj.closeLabel,
            type: "button_close"
          }), i.push({
            text: l.mainObj.setLabel,
            type: "button_set",
            onTap: function(e) {
              var t = 0;
              12 == l.time.format ? (l.time.hours = Number(l.time.hours), "PM" == l.time.meridian && 12 != l.time.hours ? l.time.hours += 12 : "AM" == l.time.meridian && 12 == l.time.hours && (l.time.hours -= 12), t = 60 * l.time.hours * 60 + 60 * l.time.minutes) : t = 60 * l.time.hours * 60 + 60 * l.time.minutes;
              var n = r(t);
              l.mainObj.callback(n)
            }
          }), l.popup = a.alert({
            template: n(361),
            scope: l,
            cssClass: "ionic_timepicker_popup",
            buttons: i
          })
        }, c
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("wizardSwitchItem", {
      template: n(362),
      controllerAs: "vm",
      bindings: {
        switch: "<"
      },
      controller: function() {
        var e = this;
        e.accordion = {
          expanded: !1
        }, e.$onInit = function() {
          e.switch.previousBrightnessLevel = e.switch.brightness, "OFF" === e.switch.power && (e.switch.brightness = 0), e.switch.canSetLevel && (e.rangeMin = e.switch.minLevel || 0, e.rangeMax = e.switch.maxLevel || 100)
        }, e.toggleAccordion = function() {
          e.accordion.expanded = !e.accordion.expanded
        }, e.toggleStatus = function(t) {
          t.power = "ON" === t.power ? "OFF" : "ON", t.brightness = "OFF" === t.power ? 0 : e.switch.previousBrightnessLevel
        }, e.trackRange = function() {
          e.switch.previousBrightnessLevel = e.switch.brightness
        }
      }
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(163)(e), n(165)(e), n(164)(e), n(162)(e)
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("accounts.email-verification-pending", {
          url: "/email-verification-pending",
          template: n(363),
          controller: "EmailVerificationPendingCtrl as vm"
        })
      }]).controller("EmailVerificationPendingCtrl", ["$scope", "AccountManager", "ResidenceManager", "$ionicHistory", "$state", "$localStorage", "$window", "LoopBackAuth", function(e, t, n, i, o, a, s, r) {
        function c() {
          var e = r.currentUserId;
          t.resendEmailVerification(e).then(function(e) {}).catch(function(e) {}).finally(function() {})
        }
        var l = this,
          d = _.clone(a.cachedUser);
        e.$on("URL_SCHEME_CLICK", function(e, t) {
          t.url;
          l.continueByLoggingIn()
        }), e.$on("$ionicView.enter", function() {
          d || (t.clearUserTokens(), o.go("accounts.login"))
        }), l.continueByLoggingIn = function() {
          t.login(d).then(function(e) {
            return n.getResidences()
          }).then(function(e) {
            delete a.cachedUser, t.handlePostLoginRoute(e)
          }).catch(function(e) {
            "EMAIL_NOT_VERIFIED" === e.type && (l.emailStillInvalid = !0)
          })
        }, l.resendConfirmation = function() {
          c()
        }, l.cancelLoginFlow = function() {
          delete a.cachedUser, t.clearUserTokens(), o.go("accounts.login")
        }
      }])
    }
  }).call(t, "src/pages/accounts/email-verification-pending.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("accounts.login", {
          url: "/login",
          template: n(364),
          controller: "LoginCtrl as vm"
        })
      }]).controller("LoginCtrl", ["$translate", "$scope", "$state", "$ionicLoading", "LoopBackAuth", "AccountManager", "Errors", "ResidenceManager", "$localStorage", "PopupFactory", "ServerUpdater", "Toast", function(e, t, n, i, o, a, s, r, c, l, d, u) {
        var v = this;
        v.showPassword = "password", v.user = {}, v.serverUpdater = d, c.credentials ? v.user = {
          email: c.credentials.email,
          rememberMe: c.credentials.rememberMe
        } : c.credentials = {}, v.doLogin = function(e, t) {
          if (e.rememberMe ? c.credentials = {
              email: e.email,
              rememberMe: !0
            } : c.credentials = {}, t) {
            var d = _.clone(e);
            d.hasOwnProperty("devServer") && delete d.devServer, i.show({
              duration: 7e3
            }), a.login(d).then(function(t) {
              return e.rememberMe || o.clearStorage(), r.getResidences(t)
            }).then(function(e) {
              a.handlePostLoginRoute(e)
            }, function(e) {
              throw e
            }).catch(function(e) {
              var t = e.error.type;
              if ("EMAIL_NOT_VERIFIED" === t) return c.cachedUser = {
                email: v.user.email,
                password: v.user.password
              }, void n.go("accounts.email-verification-pending");
              "SERVER_ERROR" === t && a.clearUserTokens();
              var i = s.ACCOUNTS[t];
              l.alert(i)
            }).finally(function() {
              i.hide()
            })
          }
        }, v.onLoginEmailChange = function(e) {
          e || delete v.user.password
        }
      }])
    }
  }).call(t, "src/pages/accounts/login.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("accounts.reset-password", {
        url: "/reset-password",
        template: n(365),
        controller: "ResetPasswordCtrl as vm"
      })
    }]).controller("ResetPasswordCtrl", ["$scope", "$translate", "$state", "$ionicHistory", "Person", "PopupFactory", "$localStorage", function(e, t, n, i, o, a, s) {
      var r = this;
      r.user = {
        viaApp: "myLeviton"
      }, r.doResetPassword = function(e, i) {
        i && o.resetPassword(r.user).$promise.then(function(e) {
          e.email && a.alert({
            title: t.instant("RESET_PASSWORD"),
            template: t.instant("RESET_PASSWORD_CHECK_EMAIL")
          }).then(function() {
            s.credentials = {
              devServer: s.credentials.devServer
            }, n.go("accounts.login")
          }), e.error && a.confirm({
            template: "We don't have an account associated with this email.",
            title: "Email not found",
            buttons: [{
              text: "Try another email",
              type: "button-cancel"
            }, {
              text: "Create an Account",
              type: "button-confirm",
              onTap: function() {
                n.go("accounts.signup")
              }
            }]
          })
        }).catch(function() {
          a.alert({
            title: "Cannot Reset Password",
            message: t.instant("PASSWORD_RESET_ERROR")
          })
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("accounts.signup", {
        url: "/signup",
        template: n(366),
        controller: "SignupCtrl as vm"
      })
    }]).controller("SignupCtrl", ["$state", "Errors", "$timeout", "$localStorage", "$scope", "$translate", "$ionicPopover", "$ionicHistory", "$ionicLoading", "Person", "ResidenceManager", "PopupFactory", "AccountManager", "$filter", "Browser", function(e, t, i, o, a, s, r, c, l, d, u, v, m, p, E) {
      var f = this,
        g = n(1),
        h = n(10);
      f.isComplete = !1, f.showPassword = "password", f.showPasswordCheck = "password", f.user = {}, f.popover = r.fromTemplate(n(351), {
        scope: a
      }), f.showPopover = function(e) {
        f.popoverShown || i(function() {
          f.popover.show(e), f.popoverShown = !0
        }, 300)
      }, f.hidePopover = function(e) {
        f.popover.hide(e)
      }, f.doSignup = function(n, i) {
        if (f.licenseAgreed && i && f.validatePasswordStrength(n.password)) {
          var a = {
            firstName: n.firstName,
            lastName: n.lastName,
            email: n.email,
            password: n.password,
            clientId: g.client_id,
            registeredVia: g.registered_via
          };
          l.show(), d.create(a).$promise.then(function(t) {
            o.cachedUser = {
              email: f.user.email,
              password: f.user.password
            }, e.go("accounts.email-verification-pending", {}, {
              reload: !0
            })
          }).catch(function(n) {
            var i = n.error.message,
              o = n.error.type,
              a = i && i.containsIgnoreCase("email already exists"),
              r = i && i.containsIgnoreCase("complex password");
            a ? v.alert({
              message: s.instant("EMAIL_ALREADY_EXISTS_INFO"),
              title: s.instant("EMAIL_ALREADY_EXISTS_TITLE")
            }).then(function() {
              e.go("accounts.login", {}, {
                reload: !0
              })
            }) : r ? v.alert({
              message: s.instant("WEAK_PASSWORD_INFO"),
              title: s.instant("WEAK_PASSWORD_TITLE")
            }) : v.alert(t.ACCOUNTS[o])
          }).finally(l.hide)
        }
      }, f.validatePasswordStrength = function(e) {
        return !!e && (f.passwordValidationResult = m.validatePasswordStrength(e), !(f.passwordValidationResult.errors && f.passwordValidationResult.errors.length))
      }, f.validatePasswordsMatch = function() {
        if (f.user.passwordCheck) {
          if (f.user.password === f.user.passwordCheck) return f.isComplete = !0, void(f.passwordMisMatchError = "");
          f.isComplete = !1, f.passwordMisMatchError = "Password did not match."
        }
      }, f.openEula = function(e) {
        var t = h.web_app_url + "home/#/eula/" + e;
        E.openURLExternal(t)
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(167)(e), n(168)(e)
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("activities.details", {
          url: "/activity/details/:activityId",
          views: {
            "tab-activities": {
              template: n(367),
              controller: "ActivityDetailsCtrl as vm"
            }
          },
          params: {
            activityId: null
          }
        })
      }]).controller("ActivityDetailsCtrl", ["ResidentialActivity", "$translate", "PopupFactory", "FormValidationError", "ResidentialAction", "$state", "$stateParams", "$q", "ResidentialRoom", "ResidentialScene", "Activity", "$scope", "AppSession", "Residence", function(e, t, n, i, o, a, s, r, c, l, d, u, v, m) {
        function p() {
          var e = v.getSelectedResidence().id;
          m.residentialActivities.destroyById({
            id: e,
            fk: I
          }).$promise.then(function() {}).finally(function() {
            a.go("activities.list")
          })
        }

        function E() {
          a.go("activities.list")
        }

        function f() {
          n.confirm({
            template: t.instant("UNSAVED_CHANGES_MESSAGE"),
            title: t.instant("UNSAVED_CHANGES"),
            buttons: [{
              text: t.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: t.instant("DISCARD"),
              type: "button-confirm",
              onTap: E
            }]
          })
        }

        function g() {
          var e = [];
          b.actionItems = [], _.forEach(b.actions, function(t) {
            if (!_.find(b.actionItems, {
                item: t.targetModelId
              })) {
              var n = {
                id: t.id,
                residentialActivity: b.activity,
                type: t.targetModelName,
                actions: _.filter(b.actions, {
                  targetModelId: t.targetModelId
                })
              };
              if ("IotSwitch" == t.targetModelName) n.item = t.targetModelId, b.actionItems.push(n);
              else if ("ResidentialRoom" == t.targetModelName) {
                var i = c.findById({
                  id: t.targetModelId
                }).$promise;
                e.push(i), i.then(function(e) {
                  n.room = e, b.actionItems.push(n)
                })
              } else if ("ResidentialScene" == t.targetModelName) {
                var i = l.findById({
                  id: t.targetModelId
                }).$promise;
                e.push(i), i.then(function(e) {
                  n.scene = e, b.actionItems.push(n)
                })
              }
            }
          })
        }

        function h() {
          var e = b.activity.name;
          return {
            valid: e && e.length >= 2
          }
        }

        function S(t, n) {
          b.processing = !0;
          var i = r.defer();
          return e.prototype$updateAttributes({
            id: t
          }, n).$promise.then(function(e) {
            b.safe.activityName = e.name, i.resolve(e)
          }).catch(function(e) {
            i.reject(e)
          }).finally(function() {
            b.dirty = !1, b.processing = !1
          }), i.promise
        }
        var b = this;
        b.dirty = !1, b.safe = {};
        var I = s.activityId;
        u.$on("$ionicView.beforeEnter", function(e, t) {
          t.enableBack = !0, b.loadResiActivity()
        }), b.onEdit = function() {
          d.new(b.activity.id), a.go("activity-setup-wizard.add-activity-type")
        }, b.loadResiActivity = function() {
          var t = {
            include: ["residentialActions"]
          };
          e.findById({
            id: I,
            filter: t
          }).$promise.then(function(e) {
            b.activity = e, b.safe.activityName = e.name, b.actions = b.activity.residentialActions, g()
          })
        }, b.removedDeletedActionFromList = function(e) {
          _.remove(b.actions, {
            id: e.id
          })
        }, b.onUpdateActivity = function(e) {
          if (!h().valid) return void i.showMinLengthError();
          var t = {
            name: e.name
          };
          S(b.activity.id, t).then(function() {
            a.go("activities.list")
          }).catch(function(e) {
            var t = e.error;
            b.activity.name = b.safe.activityName, t.message && t.message.containsIgnoreCase("duplicate") && i.showDuplicateNameError()
          })
        }, b.onActionChange = function() {
          b.dirty = !0
        }, b.makeDirty = function() {
          b.dirty = !0
        }, b.onBackClick = function() {
          var e = h().valid;
          b.dirty && e ? f() : (b.dirty, E())
        }, b.deleteActivity = function() {
          n.confirm({
            template: t.instant("DELETE_ACTIVITY_WARNING"),
            title: t.instant("DELETE_ACTIVITY"),
            buttons: [{
              text: t.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: t.instant("DELETE"),
              type: "button-confirm",
              onTap: p
            }]
          })
        }
      }])
    }
  }).call(t, "src/pages/activities/activity-details.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("activities.list", {
        url: "/list",
        views: {
          "tab-activities": {
            template: n(369),
            controller: "ActivityListCtrl as vm"
          }
        }
      })
    }]).controller("ActivityListCtrl", ["$rootScope", "$ionicHistory", "$scope", "$translate", "AppSession", "SessionEvents", "Residence", "PopupFactory", "ResidentialActivity", "$localStorage", "Toast", "$timeout", function(e, t, i, o, a, s, r, c, l, d, u, v) {
      function m() {
        p(), E()
      }

      function p() {
        r.get({
          id: f.selectedResidence.id
        }).$promise.then(function(e) {
          f.residence = e
        })
      }

      function E() {
        r.residentialActivities({
          id: f.selectedResidence.id
        }).$promise.then(function(e) {
          f.activities = e.filter(function(e) {
            return !e.nestActivityId
          }), f.$resolved = !0, f.showAddButton = 0 === e.length
        })
      }
      var f = this;
      f.session = a, f.selectedResidence = a.getSelectedResidence(), i.$on(s.selectedResidenceChanged, function(e, t) {
        f.selectedResidence = t, m()
      }), i.$on("$ionicView.beforeEnter", function() {
        t.clearHistory(), m()
      }), f.onExecute = function(e) {
        function t() {
          f.promptChecked && (d.ACTIVITY_RAN = Boolean(f.promptChecked)), l.execute({
            id: e.id
          }).$promise.then(function() {
            v(function() {
              u.show({
                message: "Your activity has run successfully.",
                duration: 2e3
              })
            }, 300)
          })
        }
        d.ACTIVITY_RAN ? t() : c.confirm({
          template: n(368),
          title: "Run activity '" + e.name + "'",
          scope: i,
          buttons: [{
            text: o.instant("CANCEL"),
            type: "button-cancel"
          }, {
            text: o.instant("RUN"),
            type: "button-confirm",
            onTap: t
          }]
        })
      }, f.onDelete = function(e) {
        function t() {
          r.residentialActivities.destroyById({
            id: f.selectedResidence.id,
            fk: e.id
          }).$promise.then(function() {
            E()
          })
        }
        c.confirm({
          template: o.instant("ACTIVITY_DELETE_PROMPT"),
          title: o.instant("ACTIVITY_DELETE_PROMPT_TITLE"),
          buttons: [{
            text: o.instant("CANCEL"),
            type: "button-cancel"
          }, {
            text: o.instant("DELETE"),
            type: "button-confirm",
            onTap: t
          }]
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(171)(e), n(172)(e), n(170)(e), n(173)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("activity-setup-wizard.add-activity-details", {
        url: "/add-activity-details",
        template: n(370),
        controller: "NewActivityDetailsCtrl as vm"
      })
    }]).controller("NewActivityDetailsCtrl", ["$scope", "$translate", "$rootScope", "$stateParams", "$injector", "AppSession", "SessionEvents", "Residence", "$q", "$state", "PopupFactory", "Activity", "IotSwitch", "ResidentialRoom", function(e, t, n, i, o, a, s, r, c, l, d, u, v, m) {
      var p = this;
      p.type = u.type || "device", p.selectedItems = [];
      var E = a.getSelectedResidence();
      p.selectItem = function(e) {
        e.selected = !e.selected, p.selectedItems = [];
        for (var t = 0; t < p.items.length; t++) p.items[t].selected && p.selectedItems.push(p.items[t])
      };
      var f = function(e, t) {
          var n = {
              device: "IotSwitch",
              room: "ResidentialRoom",
              scene: "ResidentialScene"
            },
            i = _.filter(e, function(e) {
              return !_.find(p.activity.newActivity.residentialActions, {
                targetModelName: n[p.type],
                targetModelId: e.id
              })
            });
          return i
        },
        g = function() {
          if (E && E.id) {
            p.selectedItem = null;
            var e = [],
              t = c.defer(),
              n = [],
              i = {
                id: E.id
              },
              o = {
                id: E.id,
                filter: {
                  include: ["residentialScenes"]
                }
              };
            if ("device" == p.type) {
              var a = r.iotSwitches(i).$promise;
              e.push(a), a.then(function(e) {
                p.devices = e, n = p.devices
              })
            } else if ("room" == p.type) {
              var s = r.residentialRooms(o).$promise;
              e.push(s), s.then(function(e) {
                p.rooms = [], p.scenes = [], _.forEach(e, function(e) {
                  p.rooms.push(e)
                }), n = p.rooms
              })
            }
            return c.all(e).then(function() {
              p.items = f(n, u.newActivity);
              var e = p.type + "s",
                i = u.newActivity[e];
              i && i.length && _.forEach(i, function(e) {
                var t = _.findIndex(p.items, {
                  id: e.id
                });
                p.selectItem(p.items[t])
              }), t.resolve()
            }), t.promise
          }
        };
      n.$on(s.selectedResidenceChanged, function(e, t) {
        g()
      }), e.$on("$ionicView.beforeEnter", function() {
        p.activity = u, p.type = u.type || "device", g()
      }), p.tryIt = function(e) {
        if ("device" == p.type) {
          var t = v.prototype$updateAttributes({
            id: e.id
          }, e).$promise;
          t.then(function(e) {})
        } else if ("room" == p.type) {
          var t = null;
          e.power && "ON" == e.power ? (t = m.turnOn({
            id: e.id
          }).$promise, t.then(function(e) {})) : (t = m.turnOff({
            id: e.id
          }).$promise, t.then(function(e) {}))
        }
      }, p.onNext = function() {
        if ("device" == p.type || "room" == p.type) {
          if (!p.selectedItems || !p.selectedItems.length || 0 == p.selectedItems.length) {
            var e = "device" === p.type ? t.instant("MUST_SELECT_DEVICE") : t.instant("MUST_SELECT_ROOM"),
              n = "device" === p.type ? t.instant("NO_DEVICE") : t.instant("NO_ROOM");
            return d.alert({
              template: e,
              title: n
            }), !0
          }
          var i = p.type + "s";
          u.newActivity[i] = [], _.forEach(p.selectedItems, function(e) {
            u.newActivity[i].push(e)
          })
        } else if ("roomScene??" == p.type) {
          if (!p.selectedScene) {
            var e = t.instant("MUST_HAVE_SCENE"),
              o = t.instant("NO_SCENE");
            return d.alert({
              template: e,
              title: o
            }), !0
          }
          u.newActivity.scenes.push(p.selectedScene)
        }
        l.go("activity-setup-wizard.add-activity-type")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("activity-setup-wizard.add-activity-name", {
        url: "/add-activity-name",
        template: n(371),
        controller: "NewActivityNameCtrl as vm"
      })
    }]).controller("NewActivityNameCtrl", ["$scope", "$translate", "$state", "PopupFactory", "Activity", "FormValidationError", function(e, t, n, i, o, a) {
      function s() {
        return {
          valid: r.name && r.name.length >= 2
        }
      }
      var r = this;
      e.$on("$ionicView.beforeEnter", function() {
        r.name = "", o.new(), r.activity = o
      }), r.onContinue = function() {
        return r.name ? s().valid ? (r.activity.newActivity.name = r.name, void n.go("activity-setup-wizard.add-activity-type")) : void a.showMinLengthError() : (i.alert({
          template: t.instant("NAME_YOUR_ACTIVITY_DESC"),
          title: t.instant("NAME_YOUR_ACTIVITY")
        }), !0)
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("activity-setup-wizard.add-activity-type", {
        url: "/add-activity-type",
        template: n(372),
        controller: "NewActivityTypeCtrl as vm"
      })
    }]).controller("NewActivityTypeCtrl", ["$scope", "$translate", "$state", "PopupFactory", "Activity", "Residence", "AppSession", "FormValidationError", "RouteTracker", function(e, t, n, i, o, a, s, r, c) {
      function l() {
        var e = {
          include: ["iotSwitches", "residentialRooms"]
        };
        u.isActivityPending(), a.findById({
          id: u.selectedResidence.id,
          filter: e
        }).$promise.then(function(e) {
          u.rooms = e.residentialRooms, u.devices = e.iotSwitches
        })
      }

      function d() {
        c.navigateRoute("ADD_ACTIVITY_TYPE_FINISH").then(function(e) {}).catch(function() {
          n.go("activities.list")
        })
      }
      var u = this;
      u.activity = o, u._ = _, e.$on("$ionicView.beforeEnter", function() {
        u.activity = o, u.selectedResidence = s.getSelectedResidence(), l()
      }), u.onNext = function(e) {
        var o = e + "s";
        if (!(u[o] && u[o].length && u[o].length > 0)) {
          var a = t.instant("ACTIVITY_NO_ITEM_SELECTED", {
              type: e
            }),
            s = t.instant("ACTIVITY_NO_PROP", {
              prop: o
            });
          return i.alert({
            template: a,
            title: s
          }), !0
        }
        u.activity.type = e, n.go("activity-setup-wizard.add-activity-details")
      }, u.onSave = function() {
        u.activity.save().then(function() {
          d()
        }).catch(function(e) {
          var t = e.error;
          t.message && t.message.containsIgnoreCase("duplicate") && (r.showDuplicateNameError(), n.go("activity-setup-wizard.add-activity-name"))
        })
      }, u.isActivityPending = function() {
        var e = (o.type, ["devices", "rooms", "scenes"]),
          t = !1;
        return _.forEach(e, function(e) {
          var n = o.newActivity[e];
          if (n && n.length > 0) return t = !0
        }), u.isActivityPending = t, u.isActivityPending
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("Activity", ["$q", "AppSession", "ResidentialActivity", "Residence", function(e, t, n, i) {
      function o(t, i) {
        var o = e.defer(),
          a = [];
        return _.forEach(i, function(e) {
          var i = n.residentialActions.create({
            id: t.id
          }, e).$promise;
          a.push(i)
        }), e.all(a).then(function() {
          o.resolve()
        }), o.promise
      }

      function a(t) {
        var n = e.defer(),
          i = [],
          a = {
            residentialActivityId: t.id
          };
        return c.newActivity.devices && c.newActivity.devices.length && c.newActivity.devices.length > 0 && _.forEach(c.newActivity.devices, function(e) {
          var t = _.clone(a);
          if (t.targetModelName = "IotSwitch", t.targetModelId = e.id, t.targetProperty = "power", t.targetValue = e.power || "OFF", e.canSetLevel) {
            t.targetProperty = "properties";
            var n = {
              power: t.targetValue,
              brightness: e.brightness
            };
            "OFF" === n.power && delete n.brightness, t.targetValue = JSON.stringify(n)
          }
          i.push(t)
        }), c.newActivity.rooms && c.newActivity.rooms.length && c.newActivity.rooms.length > 0 && _.forEach(c.newActivity.rooms, function(e) {
          var t = _.clone(a);
          t.targetModelName = "ResidentialRoom", t.targetModelId = e.id, t.targetProperty = "power", t.targetValue = e.power || "OFF", i.push(t)
        }), c.newActivity.scenes && c.newActivity.scenes.length && c.newActivity.scenes.length > 0 && _.forEach(c.newActivity.scenes, function(e) {
          var t = _.clone(a);
          t.targetModelName = "ResidentialScene", t.targetModelId = e.id, i.push(t)
        }), o(t, i).then(function() {
          n.resolve()
        }), n.promise
      }

      function s(e) {
        var n = t.getSelectedResidence();
        return i.residentialActivities({
          id: n.id
        }).$promise.then(function(t) {
          var n = 99;
          return function i(o) {
            var a = o || e,
              s = _.find(t, function(e) {
                if (e.name.toLowerCase() === a.toLowerCase()) return !0
              });
            return s ? n <= 0 ? a : (n -= 1, i(r(s.name, a))) : a
          }()
        })
      }

      function r(e, t) {
        var n = parseInt(e.replace(/^\D+/g, "")) || 1;
        return n ? t.replace(/[^a-zA-Z]+/g, "") + " " + (n + 1) : t
      }
      var c = {};
      return c.type = null, c.newActivity = {}, c.new = function(e) {
        if (c.type = null, e) {
          var t = {
            include: "residentialActions"
          };
          n.findById({
            id: e,
            filter: t
          }).$promise.then(function(e) {
            c.newActivity = e, c.newActivity.devices = [], c.newActivity.scenes = [], c.newActivity.rooms = []
          })
        } else c.newActivity = {
          name: null,
          devices: [],
          scenes: [],
          rooms: []
        }
      }, c.save = function() {
        var n = e.defer(),
          o = [],
          r = {
            name: c.newActivity.name
          };
        return s(r.name).then(function(s) {
          r.name = s, c.newActivity.nestActivityId && (r.nestActivityId = c.newActivity.nestActivityId);
          var l = t.getSelectedResidence();
          if (c.newActivity.id) {
            var d = a(c.newActivity);
            o.push(d)
          } else {
            var u = i.prototype$__create__residentialActivities({
              id: l.id
            }, r).$promise;
            u.then(function(e) {
              c.newActivity.id = e.id;
              var t = a(e);
              o.push(t)
            }).catch(function(e) {
              n.reject(e)
            }), o.push(u)
          }
          e.all(o).then(function() {
            n.resolve(c.newActivity.id)
          }).catch(function(e) {
            n.reject(e)
          })
        }), n.promise
      }, c
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("app-loading", {
          url: "/app-loading",
          template: n(373),
          controller: "AppLoadingCtrl as vm"
        })
      }]).controller("AppLoadingCtrl", ["$ionicPlatform", "$scope", "LoopBackAuth", "AppSession", "ResidenceManager", "AccountManager", "$state", "$ionicLoading", "$window", "$q", function(e, t, n, i, o, a, s, r, c, l) {
        function d() {
          n.accessTokenId ? u() : s.go("accounts.login")
        }

        function u() {
          r.show({
            duration: 3e3
          }), i.setupCurrentUser().then(o.getResidences).then(function(e) {
            var t = a.connectSocket();
            return t ? t.then(function() {
              return e
            }) : e
          }).then(function(e) {
            a.handlePostLoginRoute(e)
          }).catch(function(e) {
            "DEVICE_OFFLINE" === e.error.type ? v.isOffline = !0 : a.logout().finally(function() {
              s.go("accounts.login", {}, {
                reload: !0
              })
            })
          }).finally(r.hide)
        }
        var v = this;
        (function() {
          var e = l.defer();
          return c.cordova && n.accessTokenId ? e.resolve({
            platform: "cordova"
          }) : c.cordova ? t.$on("NATIVESTORAGE:LOADED", function(t, n) {
            e.resolve({
              platform: "cordova"
            })
          }) : e.resolve({
            platform: "browser"
          }), e.promise
        })().then(function() {
          d()
        }), v.attemptReconnect = function() {
          s.reload()
        }, v.retryLogin = function() {
          a.logout().finally(function() {
            s.go("accounts.login", {}, {
              reload: !0
            })
          })
        }
      }])
    }
  }).call(t, "src/pages/app-loading-screen/app-loading-screen.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(179)(e), n(176)(e), n(177)(e), n(178)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("AugustIntegrationFactory", ["$q", "AugustIntegration", "Residence", "AppSession", "AugustConn", function(e, t, n, i, o) {
      function a(n) {
        var i = c.augustActions,
          o = Object.keys(i).map(function(e) {
            return i[e]
          }),
          a = o.map(function(e) {
            var i = _.cloneDeep(e);
            return delete i.actions, t.augustActions.create({
              id: n.id
            }, i).$promise.then(function(e) {})
          });
        return e.all(a)
      }

      function s() {
        var a = e.defer(),
          s = _.get(o.session, "LEVITON_RESIDENCE.augustIntegrations.id"),
          c = o.getPersistedAugustIntegration(),
          l = i.getSelectedResidence(),
          d = c.accessToken,
          u = c.refreshToken,
          v = c.expiresIn;
        return s ? t.findById({
          id: s
        }).$promise.then(function(e) {
          return t.augustActions.destroyAll({
            id: s
          }).$promise.then(function() {
            return e
          })
        }).then(function(e) {
          r(e), a.resolve(e)
        }).catch(function(e) {
          a.reject(e)
        }) : n.augustIntegrations.create({
          id: l.id
        }, {
          accessToken: d,
          refreshToken: u,
          expiresIn: v
        }).$promise.then(function(e) {
          r(e), a.resolve(e)
        }).catch(function(e) {
          a.reject(e)
        }), a.promise
      }

      function r(e) {
        o.setPersistedAugustIntegration({
          id: e.id,
          accessToken: e.accessToken,
          refreshToken: e.refreshToken,
          expiresIn: e.expiresIn,
          created: e.created,
          residenceId: e.residenceId
        })
      }
      var c = {};
      return c.reset = function() {
        c.augustActions = {}
      }, c.addAugustAction = function(e) {
        c.augustActions[e.lockId] = e
      }, c.save = function() {
        var t = e.defer();
        return s().then(a).then(function(e) {
          t.resolve(e)
        }), t.promise
      }, c.reset(), c
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("august.locks", {
        url: "/locks",
        template: n(374),
        controller: "AugustLocksCtrl as vm"
      })
    }]).controller("AugustLocksCtrl", ["AugustConn", "$scope", "$state", "AppSession", "RouteTracker", "$localStorage", "AugustAction", "AugustIntegrationFactory", "Residence", "Toast", "$ionicLoading", function(e, t, n, i, o, a, s, r, c, l, d) {
      function u() {
        a.AUGUST_INTEGRATION.accessToken;
        a.AUGUST_SETUP_MODE
      }
      var v = this;
      v.AugustConn = e, v.selectedRunOption = null, v.runOptions = [{
        name: "Turn on a switch",
        code: "switch"
      }, {
        name: "Run an activity",
        code: "activity"
      }], d.show({
        duration: 3e3
      }), t.$on("$ionicView.enter", function() {
        setTimeout(function() {
          v.AugustConn.loadLevitonResidence().then(function(e) {
            v.AugustConn.session.LEVITON_RESIDENCE && v.AugustConn.session.LEVITON_RESIDENCE.augustIntegrations && v.AugustConn.session.LEVITON_RESIDENCE.augustIntegrations.augustLocks && v.AugustConn.session.LEVITON_RESIDENCE.augustIntegrations.augustLocks.length > 0 && v.AugustConn.set("SELECTED_AUGUST_LOCK", v.AugustConn.session.LEVITON_RESIDENCE.augustIntegrations.augustLocks[0]), v.processActivities()
          })
        }, 10)
      }), v.processActivities = function() {
        var e = v.AugustConn.session.LEVITON_RESIDENCE;
        e && e.augustIntegrations && e.augustIntegrations.augustActions && e.augustIntegrations.augustActions.length > 0 && e.augustIntegrations.augustActions.forEach(function(t) {
          e.residentialActivities.forEach(function(e) {
            t.residentialActivityId === e.id && (e.selected = !0, v.selectedActivity = e)
          })
        })
      }, v.loadActivities = function() {
        var e = {
          include: "residentialActivities"
        };
        c.findById({
          id: i.currentUser.selectedResidence.id,
          filter: e
        }).$promise.then(function(e) {
          v.AugustConn.session.LEVITON_RESIDENCE.residentialActivities = e.residentialActivities
        }, function(e) {})
      }, v.cancelSetup = function() {
        n.go("connections.list"), u()
      }, v.goBack = function() {
        n.go("connections.list"), u()
      }, v.continue = function() {
        if (!v.selectedActivity) return l.show({
          message: "Please select an activity before continuing.",
          duration: 2500
        });
        var e = {
          lockId: v.AugustConn.session.SELECTED_AUGUST_LOCK.augustId,
          event: "unlocked",
          residentialActivityId: v.selectedActivity.id
        };
        v.AugustConn.session.LEVITON_RESIDENCE && v.AugustConn.session.LEVITON_RESIDENCE.augustIntegrations && v.AugustConn.session.LEVITON_RESIDENCE.augustIntegrations.id && (e.augustIntegrationId = v.AugustConn.session.LEVITON_RESIDENCE.augustIntegrations.id), e.lockId && (r.addAugustAction(e), n.go("august.setup-completion"))
      }, v.setSessionItem = function(e, t) {
        t && v.AugustConn.set(e, t)
      }, v.setSessionItem("SELECTED_RUN_OPTION", v.runOptions[0].code), v.toggleSelection = function(e) {
        v.AugustConn.session.LEVITON_RESIDENCE.residentialActivities.forEach(function(t) {
          e.id === t.id ? (t.selected = !t.selected || !t.selected, t.selected ? v.selectedActivity = t : v.selectedActivity = null) : t.selected = !1
        })
      }, v.toNewActivity = function() {
        o.addRouteCurrent("ADD_ACTIVITY_TYPE_FINISH"), n.go("activity-setup-wizard.add-activity-name")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("august.setup-completion", {
        url: "/setup-completion",
        template: n(375),
        controller: "AugustSetupCompletion as vm",
        cache: !1
      })
    }]).controller("AugustSetupCompletion", ["$scope", "$state", "AugustConn", "AugustIntegrationFactory", "$ionicLoading", function(e, t, n, i, o) {
      function a() {
        o.show({
          duration: 5e3
        }), i.save().then(function(e) {
          s.enableComplete = !0
        }).catch(function(e) {}).finally(function() {
          o.hide()
        })
      }
      var s = this;
      e.$on("$ionicView.enter", function() {
        a()
      }), s.onFinish = function() {
        t.go("connections.list", {}, {
          reload: !0
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("august", {
        abstract: !0,
        url: "/august",
        template: n(376),
        controller: "AugustCtrl as vm"
      })
    }]).controller("AugustCtrl", ["$ionicHistory", "$state", function(e, t) {
      this.handleBack = function() {
        t.go("connections.list")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(181)(e), n(182)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("connections.list", {
        url: "/list",
        template: n(377),
        controller: "ConnectionsListCtrl as vm"
      })
    }]).controller("ConnectionsListCtrl", ["$scope", "$rootScope", "$cordovaInAppBrowser", "$window", "Residence", "AppSession", "Util", "Browser", "ServerUpdater", "$state", function(e, t, n, i, o, a, s, r, c, l) {
      function d(e) {
        return c.getServerInfo().base_url + e
      }
      var u = this;
      u.appSession = a, u.connections = [{
        name: "Alexa",
        title: "Amazon Alexa",
        img: "icon-connections-alexa",
        page: "",
        description: "With Amazon Alexa and the My Leviton smart home skill, you can control your Decora Smart Wi-Fi devices with your voice. To get started, your Alexa device (e.g. Echo, Echo Dot, Tap, etc.) will need to be installed and configured before proceeding. You will also need your Decora Smart Wi-Fi devices installed and ready to go.",
        url: d("support/#/decora-smart-wifi/amazon-alexa"),
        removable: !1
      }, {
        name: "Google Assistant",
        title: "Google Assistant",
        img: "icon-connections-google-assistant",
        page: "",
        description: "With the Google Assistant and the My Leviton linked service, you can control your Decora Smart Wi-Fi devices with your voice. To get started, your Google Assistant device (e.g. Google Home, mobile device, etc.) will need to be installed and/or configured before proceeding. You will also need your Decora Smart Wi-Fi devices installed and ready to go.",
        url: d("support/#/decora-smart-wifi/google-assistant"),
        removable: !1
      }, {
        name: "IFTTT",
        title: "IFTTT",
        img: "icon-connections-ifttt",
        page: "",
        description: "IFTTT is a free cloud service that allows Decora Smart Wi-Fi devices to interact with other cloud services. To get started you will need to create an IFTTT account and pair your My Leviton account. Once paired you will be able to create Applets that can respond to My Leviton actions or control My Leviton devices.",
        url: d("support/#/decora-smart-wifi/ifttt"),
        removable: !1
      }], u.goBack = function() {
        l.go("rooms.list")
      }, u.openSupportPage = function(e) {
        r.openURLExternal(e)
      }, u.isApp = !document.URL.startsWith("http") || document.URL.startsWith("http://localhost:8080")
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("connections", {
        abstract: !0,
        url: "/connections",
        template: n(378),
        controller: "ConnectionsCtrl as vm",
        resolve: {
          Residences: ["ResidenceManager", function(e) {
            return e.initialized.promise
          }]
        }
      })
    }]).controller("ConnectionsCtrl", ["$ionicHistory", "$state", function(e, t) {
      this.handleBack = function() {
        t.go("rooms.list")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("HomeAwayWizard", ["Residence", "$q", "ResidentialActivity", "Version", "$filter", function(e, t, n, i, o) {
      var a = this;
      return a.whenHomeActivities = [], a.whenAwayActivities = [], a.randomSwitches = [], a.outdatedSwitches = [], a.currentResidence = null, a.BACK_VIEW = null, a.resetWizard = function() {
        a.whenHomeActivities = [], a.whenAwayActivities = [], a.randomSwitches = [], a.outdatedSwitches = [], a.currentResidence = null
      }, a.setCurrentResidence = function(e) {
        a.currentResidence = _.cloneDeep(e)
      }, a.setWhenHomeActivities = function(e) {
        a.whenHomeActivities = _.cloneDeep(e)
      }, a.getWhenHomeActivities = function() {
        return a.whenHomeActivities
      }, a.setWhenAwayActivities = function(e) {
        a.whenAwayActivities = _.cloneDeep(e)
      }, a.getWhenAwayActivities = function() {
        return a.whenAwayActivities
      }, a.setRandomSwitches = function(e) {
        a.randomSwitches = _.cloneDeep(e).map(function(e) {
          var t = o("getVersionNumber")(e.version || "0");
          return i.compareVersions(t, "1.3.3") >= 0 || (e.random = !1, e.disabled = !0), e
        })
      }, a.setOutdatedSwitches = function(e) {
        a.outdatedSwitches = _.cloneDeep(e).filter(function(e) {
          var t = o("getVersionNumber")(e.version || "0");
          return i.compareVersions(t, "1.3.0") < 0
        })
      }, a.getRandomSwitches = function() {
        return a.randomSwitches
      }, a.loadResidence = function(n) {
        var i = t.defer();
        return e.findById({
          id: n,
          filter: {
            include: ["residentialActivities", "iotSwitches"]
          }
        }).$promise.then(function(e) {
          var t = e.residentialActivities.map(function(e) {
              var t = a.whenHomeActivities.find(function(t) {
                  return t.id === e.id
                }),
                n = t || _.cloneDeep(e);
              return n.selected = angular.isDefined(n.selected) ? n.selected : !!n.onHomeId, n
            }),
            n = e.residentialActivities.map(function(e) {
              var t = a.whenAwayActivities.find(function(t) {
                  return t.id === e.id
                }),
                n = t || _.cloneDeep(e);
              return n.selected = angular.isDefined(n.selected) ? n.selected : !!n.onAwayId, n
            });
          a.setCurrentResidence(e), a.setWhenHomeActivities(t), a.setWhenAwayActivities(n), a.setRandomSwitches(e.iotSwitches), a.setOutdatedSwitches(e.iotSwitches), i.resolve(e)
        }), i.promise
      }, a.updateRandomizeEnabled = function(t) {
        return e.prototype$updateAttributes({
          id: a.currentResidence.id
        }, {
          isRandomEnabled: t
        }).$promise.then(function(e) {
          return a.currentResidence.isRandomEnabled = t, e
        })
      }, a.updateWhenHomeActivities = function() {
        var e = a.whenHomeActivities.map(function(e) {
          var t = null;
          return e.selected && (t = a.currentResidence.id), n.prototype$updateAttributes({
            id: e.id
          }, {
            onHomeId: t
          }).$promise
        });
        return t.all(e)
      }, a.updateWhenAwayActivities = function() {
        var e = a.whenAwayActivities.map(function(e) {
          var t = null;
          return e.selected && (t = a.currentResidence.id), n.prototype$updateAttributes({
            id: e.id
          }, {
            onAwayId: t
          }).$promise
        });
        return t.all(e)
      }, a.updateResidence = function(t) {
        return e.prototype$updateAttributes({
          id: a.currentResidence.id
        }, t).$promise
      }, a
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("home-away-wizard.when-away", {
        url: "/when-away/:id",
        template: n(380),
        controller: "WhenAwayCtrl as vm",
        params: {
          id: null
        }
      })
    }]).controller("WhenAwayCtrl", ["$state", "$stateParams", "$scope", "ResidenceManager", "Residence", "HomeAwayWizard", "IotSwitch", "PopupFactory", "RouteTracker", "$translate", function(e, t, n, i, o, a, s, r, c, l) {
      function d(t) {
        r.alert({
          title: l.instant("FW_UPDATE_REQD_TITLE"),
          message: l.instant("FW_UPDATE_REQD_MESSAGE"),
          buttons: [{
            type: "button-cancel",
            text: l.instant("CANCEL"),
            onTap: function() {}
          }, {
            type: "button-ok",
            text: l.instant("UPDATE_NOW"),
            onTap: function() {
              e.go("rooms.switch-details", {
                id: t.id
              }), e.BACK_VIEW = "RESIDENCE_EDIT"
            }
          }]
        })
      }

      function u() {
        var e = p.switches.some(function(e) {
          return !0 === e.isRandomEnabled
        });
        a.updateRandomizeEnabled(e)
      }

      function v() {
        var e = a.getWhenHomeActivities().some(function(e) {
            return e.selected
          }),
          t = a.getWhenAwayActivities().some(function(e) {
            return e.selected
          });
        a.updateResidence({
          isOnHomeActivityEnabled: e,
          isOnAwayActivityEnabled: t
        })
      }

      function m(e) {
        return s.prototype$updateAttributes({
          id: e.id
        }, {
          isRandomEnabled: e.isRandomEnabled
        }).$promise.then(function(e) {
          return e
        })
      }
      var p = this,
        E = t.id;
      p.homeAwayWizard = a, p.randomizeEnabled = !1, n.$on("$ionicView.enter", function() {
        var e = [];
        i.getDevices().then(function(t) {
          return e = t, a.loadResidence(E)
        }).then(function() {
          p.activities = a.getWhenAwayActivities(), p.switches = a.randomSwitches, p.randomizeEnabled = p.switches.some(function(e) {
            return e.isRandomEnabled
          }), p.dataResolved = !0
        })
      }), p.completeHomeAwaySetup = function() {
        p.switches.forEach(m), u(), a.updateWhenHomeActivities(), a.updateWhenAwayActivities(), v(), c.navigateRoute("WHEN_AWAY_FINISH").catch(function() {
          e.go("residences.edit", {
            id: E
          })
        })
      }, p.onActivityClick = function(e) {
        e.selected = !e.selected, e.selected && !p.runActivityWhenAway && (p.runActivityWhenAway = !0)
      }, p.onSwitchClick = function(e) {
        e.disabled || (e.isRandomEnabled = !e.isRandomEnabled, p.randomizeEnabled = p.switches.some(function(e) {
          return e.isRandomEnabled
        }))
      }, p.onAlertClick = function(e) {
        d(e)
      }, p.createActivity = function() {
        c.addRouteCurrent("ADD_ACTIVITY_TYPE_FINISH"), e.go("activity-setup-wizard.add-activity-name")
      }, p.toggleRandomization = function() {
        p.randomizeEnabled = !p.randomizeEnabled, p.switches.forEach(function(e) {
          e.isRandomEnabled = p.randomizeEnabled
        })
      }, p.cancelSetup = function() {
        a.BACK_VIEW ? (e.go(a.BACK_VIEW), a.BACK_VIEW = null) : e.go("residences.edit", {
          id: E
        })
      }, p.onBack = function() {
        e.go("home-away-wizard.when-home", {
          id: E
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("home-away-wizard.when-home", {
        url: "/when-home/:id",
        template: n(381),
        controller: "WhenHomeCtrl as vm",
        params: {
          id: null
        },
        resolve: {
          ResiManager: ["ResidenceManager", function(e) {
            return e.initialized.promise
          }]
        }
      })
    }]).controller("WhenHomeCtrl", ["$stateParams", "$scope", "$state", "Residence", "HomeAwayWizard", "ResidenceManager", "$ionicHistory", "RouteTracker", function(e, t, n, i, o, a, s, r) {
      var c = this,
        l = e.id;
      c.homeAwayWizard = o, t.$on("$ionicView.enter", function() {
        var e = [];
        a.getDevices().then(function(t) {
          return e = t, o.loadResidence(l)
        }).then(function() {
          c.activities = o.getWhenHomeActivities(), c.dataResolved = !0, c.hasDevices = e.length, c.hasActivities = c.activities.length
        })
      }), c.continue = function() {
        n.go("home-away-wizard.when-away", {
          id: l
        })
      }, c.createActivity = function() {
        r.addRouteCurrent("ADD_ACTIVITY_TYPE_FINISH"), n.go("activity-setup-wizard.add-activity-name")
      }, c.onActivityClick = function(e) {
        e.selected = !e.selected, e.selected && !c.runActivityWhenHome && (c.runActivityWhenHome = !0)
      }, c.cancelSetup = function() {
        s.goBack()
      }, c.onBack = function() {
        r.navigateRoute("WHEN_HOME_BACK").catch(function() {
          n.go("residences.edit", {
            id: l
          })
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(192)(e), n(191)(e), n(187)(e), n(188)(e), n(189)(e), n(190)(e), n(193)(e), n(194)(e), n(195)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("breakers.nonLfDetails", {
        url: "/nonLfDetails/:id",
        views: {
          "tab-breakers": {
            template: n(382),
            controller: "NonLfBreakerDetailsCtrl as vm"
          }
        },
        params: {
          breaker: null
        }
      })
    }]).controller("NonLfBreakerDetailsCtrl", ["$timeout", "LeapfrogOnlineDataService", "$scope", "$state", "$stateParams", "PopupFactory", "$ionicLoading", "$q", "Util", "Toast", "$ionicHistory", "$translate", function(e, t, n, i, o, a, s, r, c, l, d, u) {
      function v(e) {
        var n = r.defer();
        return s.show({
          duration: 1e3
        }), m.processing = !0, delete e.dumb, delete e.empty, delete e.commissioned, e.id ? t.updateBreakerWith(e).then(function(e) {
          s.hide(), m.processing = !1, n.resolve()
        }, function(e) {
          s.hide(), m.processing = !1, n.reject(e)
        }) : (e.id = c.generateRandomStringOfLength(24), t.createBreaker(e).then(function() {
          s.hide(), m.processing = !1, n.resolve()
        }, function(e) {
          s.hide(), m.processing = !1, n.reject(e)
        }))
      }
      var m = this;
      n.$on("$ionicView.beforeEnter", function() {
        m.disabledBtn = !0
      }), m.isSmart = !1, m.types = [{
        dumb: !0,
        commissioned: !1,
        empty: !1,
        hwVersion: u.instant("STANDARD_ONE_POLE"),
        model: "NONE-1",
        poles: 1
      }, {
        dumb: !0,
        commissioned: !1,
        empty: !1,
        hwVersion: u.instant("STANDARD_TWO_POLE"),
        model: "NONE-2",
        poles: 2
      }, {
        dumb: !1,
        empty: !0,
        hwVersion: "Empty Space",
        model: "",
        poles: 1
      }], n.$on("$ionicView.enter", function() {
        m.disabledBtn = !1, m.breaker = o.breaker, m.connectedLoadCenter = t.CURRENT_LOAD_CENTER, m.positions = m.connectedLoadCenter.panelSize ? _.range(1, (parseInt(m.connectedLoadCenter.panelSize) || 0) + 1) : _.range(1, 41)
      }), m.setBreakerType = function() {
        m.dirty = !0, m.types.forEach(function(e) {
          e.model === m.breaker.model && _.extend(m.breaker, e)
        })
      }, m.onBreakerNameUpdate = function() {
        m.dirty = !0
      }, m.onBreakerUpdate = function() {
        m.dirty = !0;
        var e = _.cloneDeep(m.breaker),
          n = e.position,
          i = t.DISCOVERED_BREAKERS.find(function(t) {
            return t.position === n && !!t.position && t.id !== e.id
          });
        delete e.blinkLED, i ? !0 === i.dipole ? a.confirm({
          title: "Dipole Position",
          message: "This position is already taken by the dipole of " + i.name + " and cannot be taken.",
          buttons: [{
            text: "Continue",
            type: "button-ok",
            onTap: function() {
              m.breaker.position = null
            }
          }]
        }) : a.confirm({
          title: "Position Taken",
          message: "This position is already taken by " + (i.name || "an empty space") + ". Do you want to continue anyway?",
          buttons: [{
            text: "Cancel",
            type: "button-cancel"
          }, {
            text: "Continue",
            type: "button-ok",
            onTap: function() {
              t.updateBreaker(e), t.updateBreaker({
                id: i.id,
                position: 0
              }).then(function() {
                i.position = 0
              })
            }
          }]
        }) : v(e)
      }, m.onBack = function() {
        d.goBack()
      }, m.continue = function() {
        if (!m.breaker.hwVersion) return l.show({
          message: "Please select a breaker type to continue.",
          duration: 2e3
        });
        v(_.cloneDeep(m.breaker)).then(function() {
          d.goBack()
        }, function(e) {
          d.goBack()
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("breakers.details", {
          url: "/details/:id",
          views: {
            "tab-breakers": {
              template: n(383),
              controller: "BreakerDetailsCtrl as vm"
            }
          },
          params: {
            id: null,
            controllerId: null
          }
        })
      }]).controller("BreakerDetailsCtrl", ["$translate", "PopupFactory", "LevDBChanges", "$stateParams", "$scope", "BreakerManager", "FormValidationError", "LeapfrogOnlineDataService", "LeapfrogDataService", "ResidentialBreaker", "ResidentialBreakerPanel", "$state", "$ionicHistory", "$q", function(e, t, i, o, a, s, r, c, l, d, u, v, m, p) {
        function E(e) {
          d.prototype$updateAttributes({
            id: e.id
          }, {
            updateStatus: "STARTED"
          }).$promise.then(function(e) {
            v.go("breakers.breaker-dashboard")
          })
        }

        function f(e) {
          d.removeBreaker({
            id: e.id
          }).$promise.then(function(e) {}).catch(function(e) {}).finally(function() {
            m.goBack()
          })
        }

        function g() {
          var e = a.breaker.name,
            t = e && e.length >= 2;
          return {
            valid: t
          }
        }

        function h(e, t) {
          R.processing = !0, d.prototype$updateAttributes({
            id: e
          }, t).$promise.then(function(e) {
            if (e.error && e.error.message && e.error.message.containsIgnoreCase("Duplicate")) return r.showDuplicateNameError(), void(a.breaker.name = R.safe.breakerName);
            R.safe.breakerName = e.name
          }).finally(function() {
            R.processing = !1, R.dirty = !1
          })
        }

        function S(e) {
          return {
            positionTakingBreaker: c.CURRENT_LOAD_CENTER.residentialBreakers.find(function(t) {
              return t.id !== a.breaker.id && t.position === e
            })
          }
        }

        function b() {
          var e = p.defer();
          return t.alert({
            title: "Position Taken",
            message: "Position is already taken, do you want to continue? ",
            buttons: [{
              text: "Cancel",
              type: "button-cancel",
              onTap: function() {
                e.resolve({
                  cancel: !0
                })
              }
            }, {
              text: "Continue",
              type: "button-ok",
              onTap: function() {
                e.resolve({
                  cancel: !1
                })
              }
            }]
          }), e.promise
        }

        function I() {
          return d.prototype$updateAttributes({
            id: O
          }, {
            remoteTrip: !0
          }).$promise.then(function(e) {
            return e
          })
        }

        function A(e) {
          return !(["ManualON", "NotCommunicating", "UNDEFINED", "UNKNOWN"].indexOf(e.currentState) > -1)
        }

        function T() {
          t.confirm({
            title: e.instant("UNSAVED_CHANGES"),
            template: e.instant("UNSAVED_MESSAGE"),
            buttons: [{
              text: e.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: e.instant("DISCARD"),
              type: "button-discard",
              onTap: N
            }, {
              text: e.instant("SAVE"),
              type: "button-confirm",
              onTap: D
            }]
          })
        }

        function N() {
          m.goBack(), C()
        }

        function C() {
          d.prototype$updateAttributes({
            id: O
          }, {
            blinkLED: !1
          }).$promise.then(function(e) {})
        }

        function D() {
          C(), R.onUpdateBreaker(a.breaker, !0), R.isPositonTaken || N()
        }
        var R = this,
          O = o.id;
        R.safe = {}, R.processing = !1, R.suggestedNames = s.BREAKER_NAME_SUGGESTIONS, a.$on("$ionicView.beforeEnter", function() {
          R.disabledBtn = !0
        }), a.$on("$ionicView.enter", function() {
          R.disabledBtn = !1
        });
        var O = o.id,
          y = o.controllerId;
        i.bindModel("ResidentialBreaker", O, a, "breaker").then(function(e) {
          R.safe.breakerName = e.name, R.safe.breakerPosition = e.position, R.setBreakerPositionRange(e)
        }), R.setBreakerPositionRange = function(e) {
          u.findById({
            id: e.residentialBreakerPanelId
          }).$promise.then(function(e) {
            var t = (c.TOTAL_BREAKER_COUNT || e.panelSize || 8) + 1;
            R.totalBreakers = _.range(1, t)
          })
        }, i.bindModel("ResidentialBreakerPanel", y, a, "controller").then(function(e) {}), a.$watch("breaker", function(e) {
          if (e) {
            var t = e.currentState;
            a.breaker.readableState = s.CL.breakerCurrentStateText(t) || "Not Communicating", R.canTripBreaker = "ManualON" === t
          }
        }, !0), a.$watch("controller", function(e) {
          "NOT_READY" === e.status && v.go("breakers.breaker-panel-dashboard", {
            id: y
          })
        }, !0), R.onBack = function() {
          C();
          var e = g().valid;
          R.dirty && e ? T() : (R.dirty, N())
        }, R.makeDirty = function() {
          R.dirty = !0
        }, R.onUpdateBreaker = function(e, t) {
          if (!g()) return void r.showMinLengthError();
          var n = {
              name: e.name,
              position: e.position
            },
            i = S(n.position);
          i.positionTakingBreaker ? (R.isPositonTaken = !0, b().then(function(o) {
            o.cancel || (h(e.id, n), h(i.positionTakingBreaker.id, {
              position: null
            }), t && N())
          })) : (R.isPositonTaken = !1, h(e.id, n))
        }, R.onTripBreakerRequest = function() {
          t.confirm({
            template: e.instant("TRIP_BREAKER_MESSAGE"),
            title: e.instant("WARNING"),
            buttons: [{
              text: e.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: e.instant("TRIP_BREAKER"),
              type: "button-ok",
              onTap: function() {
                I()
              }
            }]
          })
        }, R.removeBreaker = function(n) {
          t.confirm({
            template: e.instant("DELETE_BREAKER_WARNING"),
            title: e.instant("DELETE_BREAKER"),
            buttons: [{
              text: e.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: e.instant("DELETE"),
              type: "button-confirm",
              onTap: function() {
                f(n)
              }
            }]
          })
        }, R.identifyBreaker = function(e) {
          R.processing || (e.blinkLED = !e.blinkLED, R.processing = !0, d.prototype$updateAttributes({
            id: e.id
          }, {
            blinkLED: e.blinkLED
          }).$promise.then(function(t) {
            e.blinkLED = t.blinkLED
          }).catch(function(e) {}).finally(function() {
            R.processing = !1
          }))
        }, R.updateFirmware = function(e) {
          var n = A(e),
            i = [{
              text: "Close",
              type: "button-cancel"
            }],
            o = "This will require the breakers to be manually turned off. Please try again.";
          n && (o = "This process could take several minutes. You will not be able to access your load center during this process. Are you sure you would like to update now? ", i.push({
            text: "Update",
            type: "button-ok",
            onTap: function() {
              E(e)
            }
          })), t.alert({
            title: "Firmware Update (" + e.updateVersion + ")",
            message: o,
            buttons: i
          })
        }, R.onTapName = function() {
          t.alert({
            title: "Rename your Breaker",
            scope: a,
            template: n(384),
            buttons: [{
              text: "Ok",
              type: "button-ok",
              onTap: function() {
                R.makeDirty()
              }
            }]
          })
        }, R.selectName = function(e) {
          a.breaker.name = e.value
        }
      }])
    }
  }).call(t, "src/pages/leapfrog-dashboard/breaker-details.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("breakers.breaker-panel-dashboard", {
        url: "/breaker-panel-dashboard/:id",
        views: {
          "tab-breakers": {
            template: n(385),
            controller: "LeapfrogPanelDashboard as vm"
          }
        },
        params: {
          id: null
        }
      })
    }]).controller("LeapfrogPanelDashboard", ["AppSession", function(e) {
      this.session = e
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("breakers.panel-list", {
        url: "/panel-list/",
        views: {
          "tab-breakers": {
            template: n(386),
            controller: "LeapfrogPanelListCtrl as vm"
          }
        }
      })
    }]).controller("LeapfrogPanelListCtrl", ["AppSession", "Residence", "$scope", function(e, t, n) {
      var i = this;
      i.session = e, n.$on("$ionicView.enter", function() {
        i.session.getBreakerPanels().then(function(e) {
          i.breakerPanels = e
        })
      })
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("breakers.breakers", {
          url: "/breakers/:id",
          views: {
            "tab-breakers": {
              template: n(387),
              controller: "LoadcenterBreakersCtrl as vm"
            }
          },
          params: {
            id: null,
            controller: null
          }
        })
      }]).controller("LoadcenterBreakersCtrl", ["AppSession", "$ionicScrollDelegate", "$scope", "$stateParams", "BreakerManager", "$http", "LevDBChanges", "$window", "$state", function(e, t, n, i, o, a, s, r, c) {
        var l = this;
        l.session = e;
        n.$on("$ionicView.enter", function() {
          var t = (e.getSelectedBreakerPanel() || {}).id || i.id;
          o.getBreakerPanelInfo(t).then(function(e) {
            l.currentLoadCenter = e, s.bindModel("ResidentialBreakerPanel", l.currentLoadCenter.id, n, "controller")
          })
        }), n.$watch("controller", function(e) {
          e && "NOT_READY" === e.status && c.go("breakers.breaker-panel-dashboard", {
            id: l.currentLoadCenter.id
          })
        }, !0)
      }])
    }
  }).call(t, "src/pages/leapfrog-dashboard/load-center-breakers.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("breakers.breaker-dashboard", {
        url: "/breaker-dashboard/:id",
        views: {
          "tab-breakers": {
            template: n(388),
            controller: "BreakerDashboardCtrl as vm"
          }
        },
        params: {
          id: null
        }
      })
    }]).controller("BreakerDashboardCtrl", ["AppSession", "BreakerManager", function(e, t) {
      var n = this;
      n.session = e, t.getBreakerPanels().then(function(e) {
        n.resolved = !0, 1 === e.length ? n.singlePanel = !0 : n.singlePanel = !1
      })
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("breakers.loadcenter-events", {
        url: "/loadcenter-events",
        views: {
          "tab-breakers": {
            template: n(389),
            controller: "LoadCenterEventsCtrl as vm"
          }
        },
        params: {
          id: null
        }
      })
    }]).controller("LoadCenterEventsCtrl", ["$ionicHistory", "$stateParams", "$filter", "$scope", "Residence", "AppSession", function(e, t, n, i, o, a) {
      var s = this;
      s.session = a, s.panelId = null, s.goBack = function() {
        e.goBack()
      }, i.$on("$ionicView.enter", function() {
        s.panelId = t.id || null, s.loadFeed()
      }), s.showInfo = function(e) {}, s.loadFeed = function() {
        s.feedItems = [];
        var e = {
          limit: 25,
          order: "created DESC",
          where: {
            or: [{
              model: "ResidentialBreakerPanel",
              action: "TRIPPED"
            }, {
              model: "ResidentialBreakerPanel",
              action: "NOT_COMMUNICATING"
            }, {
              model: "ResidentialBreakerPanel",
              action: "RESTORE"
            }, {
              model: "ResidentialBreakerPanel",
              action: "SAVED.status",
              value: "NOT_READY"
            }, {
              model: "ResidentialBreakerPanel",
              action: "SAVED.status",
              value: "READY"
            }, {
              model: "ResidentialBreaker",
              action: "TRIPPED"
            }, {
              model: "ResidentialBreaker",
              action: "NOT_COMMUNICATING"
            }, {
              model: "ResidentialBreaker",
              action: "RESTORE"
            }]
          }
        };
        s.panelId && e.where.or.forEach(function(e) {
          e.residentialBreakerPanelId = s.panelId
        }), o.residentialFeedItems({
          id: s.session.getSelectedResidence().id,
          filter: e
        }).$promise.then(function(e) {
          return _.forEach(e, function(e) {
            e.dateHeader = n("date")(e.created, "MMMM d, yyyy"), s.feedItems.push(e)
          }), s.feedItems
        })
      }, s.checkDate = function(e, t) {
        return !(!e || !t) && e.dateHeader === t.dateHeader
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("breakers.loadcenter-notifications", {
        url: "/loadcenter-notifications",
        views: {
          "tab-breakers": {
            template: n(390),
            controller: "LoadCenterNotificationsCtrl as vm"
          }
        }
      })
    }]).controller("LoadCenterNotificationsCtrl", ["$ionicHistory", "Person", "$scope", "$ionicLoading", "LoopBackAuth", "AppSession", function(e, t, n, i, o, a) {
      function s(e) {
        var n = {
          personId: f,
          protocol: e.key,
          appId: E
        };
        t.prototype$__create__notificationSubscriptions({
          id: f
        }, n).$promise.then(function(e) {
          v()
        }).catch(function(e) {})
      }

      function r(e) {
        t.prototype$__destroyById__notificationSubscriptions({
          id: f,
          fk: e.notificationId
        }).$promise.then(function() {
          e.enabled = !1, m()
        })
      }

      function c(e) {
        var n = {
          personId: f,
          residenceId: g,
          event: e.key,
          appId: E
        };
        t.prototype$__create__notificationTriggers({
          id: f
        }, n).$promise.then(function(e) {
          v()
        }).catch(function(e) {})
      }

      function l(e) {
        t.prototype$__destroyById__notificationTriggers({
          id: f,
          fk: e.triggerId
        }).$promise.then(function() {
          e.enabled = !1, m()
        })
      }

      function d() {
        return t.findById({
          id: f,
          filter: {
            appId: E,
            include: ["notificationSubscriptions", "notificationTriggers"]
          }
        }).$promise.then(function(e) {
          return p.notificationSubscriptions = e.notificationSubscriptions, p.notificationTriggers = e.notificationTriggers, e
        })
      }

      function u() {
        p.notificationTypes.forEach(function(e) {
          var t = _.find(p.notificationSubscriptions, {
            protocol: e.key
          });
          e.enabled = !!t, e.notificationId = t && t.id
        }), p.triggers.forEach(function(e) {
          var t = _.find(p.notificationTriggers, {
            event: e.key,
            residenceId: g
          });
          e.enabled = !!t, e.triggerId = t && t.id
        })
      }

      function v() {
        d().then(function() {
          u(), m()
        })
      }

      function m() {
        p.hasSomeNotificationsEnabled = p.notificationTypes.some(function(e) {
          return e.enabled
        })
      }
      var p = this,
        E = "DECORA_WIFI_BETA",
        f = o.currentUserId,
        g = a.getSelectedResidence().id;
      p.notificationSubscriptions = [], p.notificationTriggers = [], p.hasSomeNotificationsEnabled = !1, p.notificationTypes = [{
        name: "Email",
        key: "email"
      }], p.triggers = [{
        name: "Over Voltage",
        key: "breakerOverVoltage"
      }, {
        name: "Under Voltage",
        key: "breakerUnderVoltage"
      }, {
        name: "Over Current",
        key: "breakerOverCurrent"
      }, {
        name: "Breaker Trip",
        key: "breakerTrip"
      }, {
        name: "Breaker Fail",
        key: "breakerFail"
      }, {
        name: "Breaker Not Communicating",
        key: "breakerNotCommunicating"
      }], n.$on("$ionicView.enter", function() {
        v()
      }), p.updateNotificationType = function(e) {
        e.enabled ? s(e) : r(e)
      }, p.updateTriggerType = function(e) {
        e.enabled ? c(e) : l(e)
      }, p.goBack = function() {
        e.goBack()
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  var i = n(2);
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("breakers.loadcenter-settings", {
        url: "/loadcenter-settings/:id",
        views: {
          "tab-breakers": {
            template: n(391),
            controller: "LoadCenterSettingsCtrl as vm"
          }
        },
        params: {
          id: null
        }
      })
    }]).controller("LoadCenterSettingsCtrl", ["$ionicHistory", "LeapfrogDataService", "$stateParams", "$state", "Person", "$scope", "$ionicLoading", "LoopBackAuth", "AppSession", "PopupFactory", "LevDBChanges", "ResidentialBreakerPanel", "Toast", "$translate", "LeapfrogOnlineDataService", function(e, t, n, o, a, s, r, c, l, d, u, v, m, p, E) {
      function f() {
        u.bindModel("ResidentialBreakerPanel", P, s, "vm.currentLoadCenter").then(function(e) {
          y.loadCenterName = e.name, y.orientation = 180 === e.orientation, y.getSignalStrength(e.wifiRSSI)
        })
      }

      function g() {
        v.prototype$updateAttributes({
          id: y.currentLoadCenter.id
        }, {
          wifiMode: i.wifiMode.AccessPoint
        }).$promise.then(function(e) {
          o.go("leapfrog-setup-wizard.load-center-setup-connecting", {
            flowType: "CHANGE_WIFI_AP"
          })
        })
      }

      function h(e) {
        v.prototype$updateAttributes({
          id: e.id
        }, {
          updateStatus: "STARTED"
        }).$promise.then(function(e) {
          o.go("breakers.breaker-dashboard")
        })
      }

      function S(e) {
        var t = {
          personId: L,
          protocol: e.key,
          appId: w
        };
        a.prototype$__create__notificationSubscriptions({
          id: L
        }, t).$promise.then(function(e) {
          C()
        }).catch(function(e) {})
      }

      function b(e) {
        a.prototype$__destroyById__notificationSubscriptions({
          id: L,
          fk: e.notificationId
        }).$promise.then(function() {
          e.enabled = !1, D()
        })
      }

      function I(e) {
        var t = {
          personId: L,
          residenceId: k,
          event: e.key,
          appId: w
        };
        a.prototype$__create__notificationTriggers({
          id: L
        }, t).$promise.then(function(e) {
          C()
        }).catch(function(e) {})
      }

      function A(e) {
        a.prototype$__destroyById__notificationTriggers({
          id: L,
          fk: e.triggerId
        }).$promise.then(function() {
          e.enabled = !1, D()
        })
      }

      function T() {
        return a.findById({
          id: L,
          filter: {
            appId: w,
            include: ["notificationSubscriptions", "notificationTriggers"]
          }
        }).$promise.then(function(e) {
          return y.notificationSubscriptions = e.notificationSubscriptions, y.notificationTriggers = e.notificationTriggers, e
        })
      }

      function N() {
        y.notificationTypes.forEach(function(e) {
          var t = _.find(y.notificationSubscriptions, {
            protocol: e.key
          });
          e.enabled = !!t, e.notificationId = t && t.id
        }), y.triggers.forEach(function(e) {
          var t = _.find(y.notificationTriggers, {
            event: e.key,
            residenceId: k
          });
          e.enabled = !!t, e.triggerId = t && t.id
        })
      }

      function C() {
        T().then(function() {
          N(), D()
        })
      }

      function D() {
        y.hasSomeNotificationsEnabled = y.notificationTypes.some(function(e) {
          return e.enabled
        })
      }

      function R(t) {
        v.removePanel({
          id: t.id
        }).$promise.then(function(t) {
          e.goBack()
        }).catch(function(e) {})
      }

      function O(e) {
        var t = {
          factoryResetBreaker: !0
        };
        v.prototype$updateAttributes({
          id: e.id
        }, t).$promise.then(function(e) {}).catch(function(e) {})
      }
      var y = this,
        w = "DECORA_WIFI_BETA",
        L = c.currentUserId,
        k = l.getSelectedResidence().id,
        P = n.id;
      y.currentLoadCenter = {}, y.settingsTab = "GENERAL", y.loadCenterName = "", y.orientation = !1, y.notificationSubscriptions = [], y.notificationTriggers = [], y.hasSomeNotificationsEnabled = !1, y.notificationTypes = [{
        name: "Email",
        key: "email"
      }], y.triggers = [{
        name: "Over Voltage",
        key: "breakerOverVoltage"
      }, {
        name: "Under Voltage",
        key: "breakerUnderVoltage"
      }, {
        name: "Over Current",
        key: "breakerOverCurrent"
      }, {
        name: "Breaker Trip",
        key: "breakerTrip"
      }, {
        name: "Breaker Fail",
        key: "breakerFail"
      }, {
        name: "Breaker Not Communicating",
        key: "breakerNotCommunicating"
      }], s.$on("$ionicView.enter", function() {
        C(), f()
      }), y.getSignalStrength = function(e) {
        var t = {};
        t = e > -40 ? {
          desc: "Excellent",
          level: 5
        } : e > -55 ? {
          desc: "Very Good",
          level: 4
        } : e > -70 ? {
          desc: "Good",
          level: 3
        } : e > -80 ? {
          desc: "Poor",
          level: 2
        } : e > -87 ? {
          desc: "Very Poor",
          level: 1
        } : {
          desc: "No Signal",
          level: 0
        }, y.signalStrength = t
      }, y.shouldDisable = function() {
        return !(y.currentLoadCenter && "NOT_READY" !== y.currentLoadCenter.status)
      }, y.startAdditionalBreakersConfig = function() {
        E.CURRENT_LOAD_CENTER = y.currentLoadCenter, o.go("leapfrog-online-wizard.discover-additional-breakers")
      }, y.updatePanelName = function(e) {
        v.prototype$updateAttributes({
          id: y.currentLoadCenter.id
        }, {
          name: e
        }).$promise.then(function(e) {})
      }, y.updateNotificationType = function(e) {
        e.enabled ? S(e) : b(e)
      }, y.updateTriggerType = function(e) {
        e.enabled ? I(e) : A(e)
      }, y.updateFirmware = function(e) {
        d.alert({
          title: "Firmware Update",
          message: "This process could take several minutes. You will not be able to access your load center during this process. Are you sure you would like to update now? ",
          buttons: [{
            text: "Cancel",
            type: "button-cancel"
          }, {
            text: "Yes",
            type: "button-ok",
            onTap: function() {
              h(e)
            }
          }]
        })
      }, y.goBack = function() {
        e.goBack()
      }, y.deleteBreakerPanel = function(e) {
        d.confirm({
          template: p.instant("DELETE_BREAKER_PANEL_WARNING"),
          title: p.instant("DELETE_BREAKER_PANEL"),
          buttons: [{
            text: p.instant("CANCEL"),
            type: "button-cancel"
          }, {
            text: p.instant("DELETE"),
            type: "button-ok",
            onTap: function() {
              R(e)
            }
          }]
        })
      }, y.resetBreakers = function(e) {
        d.alert({
          title: p.instant("RESET_BREAKERS"),
          message: p.instant("FACTORY_RESET_BREAKERS_WARNING"),
          buttons: [{
            text: p.instant("CANCEL"),
            type: "button-cancel",
            onTap: function() {}
          }, {
            text: p.instant("CONTINUE"),
            type: "button-ok",
            onTap: function() {
              O(e), m.show({
                duration: 3e4,
                message: p.instant("FACTORY_RESET_BREAKERS_PROCESSING")
              }).then(function() {
                d.alert({
                  title: p.instant("RESET_BREAKERS_COMPLETED"),
                  message: "Breakers in " + y.currentLoadCenter.name + " are now reset!"
                })
              })
            }
          }]
        })
      }, y.changeWiFi = function() {
        "NOT_READY" === y.currentLoadCenter.status ? o.go("leapfrog-setup-wizard.load-center-setup-connecting", {
          flowType: "CHANGE_WIFI"
        }) : d.confirm({
          template: p.instant("CHANGE_WIFI_NETWORK_WARNING"),
          title: p.instant("CHANGE_WIFI_NETWORK"),
          buttons: [{
            text: p.instant("CANCEL"),
            type: "button-cancel"
          }, {
            text: p.instant("CONTINUE"),
            type: "button-ok",
            onTap: function() {
              g()
            }
          }]
        })
      }, y.replaceLoadCenter = function() {
        o.go("leapfrog-setup-wizard.dau-replacement-instructions")
      }, y.flipPanel = function() {
        var e = y.orientation ? {
          orientation: 180
        } : {
          orientation: 0
        };
        v.prototype$updateAttributes({
          id: y.currentLoadCenter.id
        }, e).$promise.then(function(e) {})
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(198)(e), n(197)(e)
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.controller("BreakerOnlineModalCtrl", ["$scope", "LeapfrogOnlineDataService", "ModalManager", "LeapfrogDataService", function(e, t, n, i) {
        var o = this;
        o.modalManager = n, o.MONITOR = !1, o.CONFIGURE = !0, o.loadCenter = i.get("LOAD_CENTER_INFO"), o.positions = _.range(1, o.loadCenter.panelSize + 1), o.closeBreakerModal = function() {
          n.CURRENT_MODAL.hide()
        }, o.enableMonitor = function() {
          o.MONITOR = !0, o.CONFIGURE = !1
        }, o.enableConfigure = function() {
          o.CONFIGURE = !0, o.MONITOR = !1
        }, o.systemActivities = ["System Activity", "System Activity", "System Activity", "System Activity", "System Activity", "System Activity", "System Activity"], o.identifyBreaker = function(e) {
          e.blinkLED = !e.blinkLED, t.identifyBreaker(e).then(function(e) {})
        }, o.saveBreaker = function(e) {
          n.CURRENT_MODAL.hide(), t.updateBreaker(e)
        }
      }])
    }
  }).call(t, "src/pages/leapfrog-online-wizard/breaker-config-modal.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("leapfrog-online-wizard.discover-additional-breakers", {
          url: "/discover-additional-breakers",
          template: n(393),
          controller: "DiscoverAdditionalBreakersCtrl as vm"
        })
      }]).controller("DiscoverAdditionalBreakersCtrl", ["$scope", "$window", "$state", "LeapfrogOnlineDataService", "$ionicModal", "PopupFactory", "ModalManager", "Toast", "ProgressInterval", function(e, t, i, o, a, s, r, c, l) {
        function d() {
          m.scanCompleted = !1, u().then(function() {
            return m.discoverBreakers(v)
          }).then(function(e) {
            var t = void 0;
            m.breakers = e;
            var n = _.differenceBy(m.breakers.breakers, m.breakerPanel.residentialBreakers, "id");
            t = 0 === n.length ? "No Breakers Found" : n.length <= 1 ? n.length + " Breaker Found " : n.length + " Breakers Found ", m.scanCompleted = !0, s.alert({
              title: "Discovery Complete",
              message: t,
              buttons: [{
                text: "Ok",
                type: "button-ok",
                onTap: function() {
                  m.onContinue()
                }
              }]
            })
          }).catch(function(e) {
            m.discoveryFailure = !0, s.alert({
              title: "Cannot Discover",
              message: "Your Load Center cannot discover any breakers. Please try again."
            })
          })
        }

        function u() {
          return o.getBreakerPanelInfo().then(function(e) {
            return m.breakerPanel = e, m.breakerPanel
          })
        }
        var v = function() {
            return 60
          }(),
          m = this;
        m.timerTimeout = v, m.breakers = [], m.showContinue = !1, e.$on("$ionicView.enter", function() {
          d()
        }), m.onBack = function() {}, m.onContinue = function() {
          i.go("breakers.breakers", {
            id: o.CURRENT_LOAD_CENTER.id
          }), o.resetData()
        }, m.discoverBreakers = function(e) {
          return e = e || v, o.discoverBreakers(e).then(function() {
            return m.startProgressBar(e), o.getDiscoveredBreakers(e)
          })
        }, m.openModal = function(t) {
          var i = n(392);
          e.selectedBreaker = t, r.CURRENT_MODAL = a.fromTemplate(i, {
            scope: e,
            animation: "fade-in-scale"
          }), r.CURRENT_MODAL.show()
        }, m.updateBreakerPanelInfo = function() {
          o.updateBreakerPanelInfo(m.breakerPanel)
        }, m.identifyBreaker = function(e) {
          e.blinkLED = !e.blinkLED, o.identifyBreaker(e).then(function(e) {})
        }, m.rescanBreakers = function() {
          m.rescanProgress || (m.breakers = [], m.rescanProgress = !0, m.discoveryFailure = !1, m.showContinue = !1, m.discoverBreakers(v).then(function(e) {
            m.breakers = e, m.showContinue = !0, m.breakersDiscovered = !0
          }).catch(function(e) {
            m.discoveryFailure = !0, s.alert({
              title: "Cannot Discover",
              message: "Your Load Center cannot discover any breakers. Please try again."
            })
          }).finally(function() {
            m.rescanProgress = !1
          }))
        }, m.factoryResetBreaker = function() {
          o.factoryResetBreaker().then(function() {
            c.show({
              message: "Please wait while resetting ...",
              duration: 3e4
            })
          })
        }, m.onDeleteBreaker = function(e) {
          o.ignoreBreaker(e).then(function(e) {}).catch(function(e) {}).finally(function() {
            _.remove(m.breakers, {
              id: e.id
            })
          })
        }, m.startProgressBar = function(e) {
          m.progressBar = new l, m.progressBar.start({
            max: 1e3 * (5 + e)
          })
        }
      }])
    }
  }).call(t, "src/pages/leapfrog-online-wizard/discover-additional-breakers.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(204)(e), n(205)(e), n(216)(e), n(206)(e), n(207)(e), n(202)(e), n(203)(e), n(209)(e), n(208)(e), n(217)(e), n(200)(e), n(211)(e), n(212)(e), n(213)(e), n(214)(e), n(210)(e), n(215)(e), n(201)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.change-wifi-ssid", {
        url: "/change-wifi-ssid",
        template: n(394),
        controller: "ChangeWifiSSIDCtrl as vm"
      })
    }]).controller("ChangeWifiSSIDCtrl", ["$state", "LeapfrogDataService", function(e, t) {
      this.completeSetup = function() {
        e.go("breakers.breaker-dashboard"), t.resetData()
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.dau-replacement-instructions", {
        url: "/dau-replacement-instructions",
        template: n(395),
        controller: "DAUReplacementInstructionsCtrl as vm"
      })
    }]).controller("DAUReplacementInstructionsCtrl", ["$state", "LeapfrogDataService", function(e, t) {
      var n = this;
      n.onBack = function() {
        t.resetData(), e.go("rooms.list")
      }, n.onContinue = function() {
        e.go("leapfrog-setup-wizard.load-center-setup-connecting", {
          flowType: "DAU_REPLACEMENT"
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("leapfrog-setup-wizard.enter-network-password", {
          url: "/enter-network-password",
          template: n(396),
          controller: "LoadCenterEnterNetworkPassword as vm"
        })
      }]).controller("LoadCenterEnterNetworkPassword", ["$state", "LeapfrogDataService", "PopupFactory", function(e, t, n) {
        function i(n) {
          var i = {
              ssid: n.ssid,
              passphrase: o.networkPassword
            },
            a = t.SELECTED_ENROLLMENT_LOAD_CENTER;
          t.connectLoadCenterToNetwork(a, i).then(function(t) {
            e.go("leapfrog-setup-wizard.joining-wifi-network")
          }).catch(function() {
            e.go("rooms.list")
          })
        }
        var o = this;
        o.onBack = function() {
          e.go("leapfrog-setup-wizard.add-network")
        }, o.onContinue = function() {
          if (!o.networkPassword || o.networkPassword.length < 8) return void n.alert({
            message: "Wi-Fi password must be at least 8 characters long. Please enter the correct Wi-Fi password.",
            title: "Incorrect Wi-Fi Password"
          });
          i(t.SELECTED_WIFI_NETWORK)
        }, o.togglePasswordVisibility = function() {
          o.passwordVisible = !o.passwordVisible
        }
      }])
    }
  }).call(t, "src/pages/leapfrog-setup-wizard/enter-network-password.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.joining-wifi-network", {
        url: "/joining-wifi-network",
        template: n(397),
        controller: "LeapfrogJoiningWiFiNetwork as vm",
        cache: !1
      })
    }]).controller("LeapfrogJoiningWiFiNetwork", ["$timeout", "$interval", "$scope", "$q", "$state", "CheckConnection", "DeviceEnrollmentDataService", "AppSession", "$window", "Insomnia", "AccountManager", "LeapfrogDataService", "ResidentialBreakerPanel", function(e, t, n, i, o, a, s, r, c, l, d, u, v) {
      function m() {
        a.isOnline().then(function() {
          return t.cancel(g.networkListener), g.isPhoneOnline = !0, g.showWarning = !1, p(), E()
        }).then(function() {
          "DAU_REPLACEMENT" === u.FLOW_TYPE ? o.go("leapfrog-setup-wizard.replace-dau") : "CHANGE_WIFI" === u.FLOW_TYPE || "CHANGE_WIFI_AP" === u.FLOW_TYPE ? o.go("leapfrog-setup-wizard.change-wifi-ssid") : o.go("leapfrog-setup-wizard.load-center-add-to-cloud")
        }).catch(function() {
          g.isPhoneOnline = !1, h++, h >= 30 && (g.showWarning = !0, t.cancel(g.networkListener))
        })
      }

      function p() {
        e(function() {
          d.connectSocket().then(function(e) {})
        }, 5e3)
      }

      function E() {
        var e = i.defer();
        return g.communicationListener = t(function() {
          S++, f().then(function(n) {
            t.cancel(g.communicationListener), g.showWarning = !1, e.resolve(n)
          }).catch(function(n) {
            S >= 30 && (t.cancel(g.communicationListener), g.showWarning = !0, e.reject({
              error: "CANNOT_GET_PANEL_STATUS"
            }))
          })
        }, 2e3, 30), e.promise
      }

      function f() {
        var e = i.defer(),
          t = u.SELECTED_ENROLLMENT_LOAD_CENTER.id;
        return v.discover({
          id: t
        }).$promise.then(function(t) {
          var n = r.getSelectedResidence().id,
            i = t.residentialBreakerPanel,
            o = _.get(t, "residentialBreakerPanel.residenceId");
          i ? i.residenceId ? "CHANGE_WIFI" === u.FLOW_TYPE && o === n && "NOT_READY" !== i.status ? e.resolve(i) : "CHANGE_WIFI_AP" === u.FLOW_TYPE && o === n && "NOT_READY" !== i.status ? e.resolve(i) : e.reject({
            error: "UNKNOWN_ERROR"
          }) : e.resolve(i) : e.reject({
            error: "PANEL_NOT_FOUND"
          })
        }).catch(function(t) {
          e.reject(t)
        }), e.promise
      }
      var g = this;
      g.deviceEnrollmentDataService = s;
      var h = 0,
        S = 0;
      g.tryAgain = function() {
        "DAU_REPLACEMENT" === u.FLOW_TYPE ? o.go("leapfrog-setup-wizard.load-center-setup-connecting", {
          flowType: "DAU_REPLACEMENT"
        }) : o.go("leapfrog-setup-wizard.load-center-setup-connecting"), u.resetData()
      }, n.$on("$ionicView.afterEnter", function() {
        g.networkListener = t(m, 1e3, 30)
      }), n.$on("$ionicView.beforeLeave", function() {
        t.cancel(g.networkListener), t.cancel(g.communicationListener)
      })
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.leapfrog-commission-completion", {
        url: "/leapfrog-commission-completion",
        template: n(398),
        controller: "LeapfrogCommissionCompletion as vm",
        cache: !1
      })
    }]).controller("LeapfrogCommissionCompletion", ["$state", "LeapfrogDataService", function(e, t) {
      var n = this;
      n.onAddToResidence = function() {
        t.isEthernetConnection = !1, e.go("leapfrog-setup-wizard.add-network")
      }, n.onUseEthernet = function() {
        t.isEthernetConnection = !0, e.go("leapfrog-setup-wizard.add-ethernet")
      }, n.onFinish = function() {
        e.go("rooms.list")
      }, n.onBack = function() {
        e.go("leapfrog-setup-wizard.discover-breakers")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.leapfrog-setup-completion", {
        url: "/leapfrog-setup-completion",
        template: n(399),
        controller: "LeapfrogSetupCompletionCtrl as vm",
        cache: !1
      })
    }]).controller("LeapfrogSetupCompletionCtrl", ["$state", "LeapfrogDataService", function(e, t) {
      this.onFinish = function() {
        t.set("LOAD_CENTER_INFO", null), e.go("breakers.breaker-dashboard")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.add-ethernet", {
        url: "/add-ethernet",
        template: n(400),
        controller: "LeapfrogAddEthernetCtrl as vm"
      })
    }]).controller("LeapfrogAddEthernetCtrl", ["$state", "LeapfrogDataService", function(e, t) {
      var n = this;
      n.currentLoadCenter = t.SELECTED_ENROLLMENT_LOAD_CENTER, n.onBack = function() {
        e.go("leapfrog-setup-wizard.leapfrog-commission-completion")
      }, n.onContinue = function() {
        e.go("leapfrog-setup-wizard.load-center-disconnect")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.add-network", {
        url: "/add-network",
        template: n(401),
        controller: "LeapfrogAddNetworkCtrl as vm"
      })
    }]).controller("LeapfrogAddNetworkCtrl", ["$state", "$scope", "LeapfrogDataService", function(e, t, n) {
      function i() {
        o.discoveredNetworks = [], o.discoveryComplete = !1, n.getDiscoveredNetworks().then(function(e) {
          o.discoveredNetworks = e, o.discoveryComplete = !1
        })
      }
      var o = this;
      o.showContinue = !1, o.selectedNetwork = {}, o.currentLoadCenter = n.SELECTED_ENROLLMENT_LOAD_CENTER, o.discoveryComplete = !1, o.rescanNetworkList = i, t.$on("$ionicView.enter", function() {
        i()
      }), o.onBack = function() {
        e.go("leapfrog-setup-wizard.leapfrog-commission-completion")
      }, o.onContinue = function() {
        n.SELECTED_WIFI_NETWORK = o.selectedNetwork, e.go("leapfrog-setup-wizard.enter-network-password")
      }, o.selectNetwork = function(e) {
        o.selectedNetwork = e, o.showContinue = !0
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("leapfrog-setup-wizard.load-center-add-to-cloud", {
          url: "/load-center-add-to-cloud",
          template: n(402),
          controller: "LoadCenterAddToCloudCtrl as vm"
        })
      }]).controller("LoadCenterAddToCloudCtrl", ["$state", "LeapfrogDataService", "ResidenceManager", "$scope", "PopupFactory", "Insomnia", "$rootScope", "ResidentialBreakerPanel", function(e, t, n, i, o, a, s, r) {
        var c = this;
        c.onBack = function() {}, i.$on("$ionicView.enter", function() {
          n.getUserOwnedResidences().then(function(e) {
            c.userOwnedResidences = e, c.selectedResidence = e[0]
          }), c.currentLoadCenter = t.SELECTED_ENROLLMENT_LOAD_CENTER, c.currentLoadCenter.name = c.currentLoadCenter.name + "-" + c.currentLoadCenter.id.substr(c.currentLoadCenter.id.length - 4)
        }), c.onContinue = function() {
          t.addLoadCenterToResidence(c.currentLoadCenter, c.selectedResidence).then(function(t) {
            return function() {
              a.allowSleepAgain(), s.hasBreakerPanels = !0, r.prototype$updateAttributes({
                id: c.currentLoadCenter.id
              }, {
                name: c.currentLoadCenter.name
              }).$promise.then(function(t) {
                e.go("leapfrog-setup-wizard.leapfrog-setup-completion")
              })
            }()
          }).catch(function(e) {
            o.alert({
              title: "Load Center Not Available",
              message: "Load Center is not available yet. Please try again in a moment."
            })
          })
        }, c.onResidenceSelection = function(e) {
          c.selectedResidence = e
        }, c.rescanNetworkList = function() {}
      }])
    }
  }).call(t, "src/pages/leapfrog-setup-wizard/load-center-add-to-cloud.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.load-center-disconnect", {
        url: "/load-center-disconnect",
        template: n(403),
        controller: "LeapfrogLoadCenterDisconnectCtrl as vm"
      })
    }]).controller("LeapfrogLoadCenterDisconnectCtrl", ["$state", "LeapfrogDataService", function(e, t) {
      var n = this;
      n.currentLoadCenter = t.SELECTED_ENROLLMENT_LOAD_CENTER, n.onBack = function() {
        e.go("leapfrog-setup-wizard.add-ethernet")
      }, n.onContinue = function() {
        e.go("leapfrog-setup-wizard.load-center-add-to-cloud")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.edit-enrollment-breaker", {
        url: "/edit-enrollment-breaker/:id",
        template: n(404),
        controller: "LoadCenterEditEnrollmentBreakerCtrl as vm",
        params: {
          id: null
        }
      })
    }]).controller("LoadCenterEditEnrollmentBreakerCtrl", ["$timeout", "LeapfrogDataService", "$scope", "$state", "$stateParams", "PopupFactory", "$ionicLoading", "$q", "$translate", function(e, t, n, i, o, a, s, r, c) {
      function l(e) {
        var n = r.defer();
        return s.show({
          duration: 1e3
        }), t.updateBreaker(e).then(function() {
          s.hide(), n.resolve()
        }, function(e) {
          s.hide(), n.reject(e)
        })
      }
      var d = this,
        u = o.id;
      d.isSmart = !1, d.types = [{
        dumb: !0,
        commissioned: !1,
        empty: !1,
        hwVersion: c.instant("STANDARD_ONE_POLE"),
        model: "NONE-1",
        poles: 1
      }, {
        dumb: !0,
        commissioned: !1,
        empty: !1,
        hwVersion: c.instant("STANDARD_TWO_POLE"),
        model: "NONE-2",
        poles: 2
      }, {
        dumb: !1,
        empty: !0,
        hwVersion: "Empty Space",
        model: "",
        poles: 1
      }], n.$on("$ionicView.beforeEnter", function() {
        d.disabledBtn = !0
      }), n.$on("$ionicView.enter", function() {
        d.disabledBtn = !1, d.connectedLoadCenter = t.SELECTED_ENROLLMENT_LOAD_CENTER, d.positions = d.connectedLoadCenter.panelSize ? _.range(1, (parseInt(d.connectedLoadCenter.panelSize) || 0) + 1) : _.range(1, 41), d.breaker = t.DISCOVERED_BREAKERS.find(function(e) {
          return e.id === u
        }), d.setIsSmart(), d.isSmart && (d.toggleIdentify(!0), e(function() {
          d.toggleIdentify(!1)
        }, 1e4))
      }), d.setBreakerType = function() {
        d.types.forEach(function(e) {
          e.model === d.breaker.model && _.extend(d.breaker, e)
        })
      }, d.setIsSmart = function() {
        var e = !0 === d.breaker.dumb || d.breaker.model && d.breaker.model.toLowerCase().indexOf("none") >= 0,
          t = !0 === d.breaker.empty || 0 === Object.keys(d.breaker).length;
        d.isSmart = !(e || t)
      }, d.toggleIdentify = function(e) {
        if (d.isSmart) {
          var n = _.cloneDeep(d.breaker);
          n.blinkLED = !0 === e || !1 === e ? e : !n.blinkLED, t.identifyBreaker(n).then(function(e) {
            d.breaker.blinkLED = e.blinkLED
          })
        }
      }, d.onBreakerUpdate = function() {
        var e = _.cloneDeep(d.breaker);
        delete e.blinkLED;
        var n = e.position,
          i = t.DISCOVERED_BREAKERS.find(function(t) {
            return t.position === n && !!t.position && t.id !== e.id
          });
        i ? !0 === i.dipole ? a.confirm({
          title: "Dipole Position",
          message: "This position is already taken by the dipole of " + i.name + " and cannot be taken.",
          buttons: [{
            text: "Continue",
            type: "button-ok",
            onTap: function() {
              d.breaker.position = null
            }
          }]
        }) : a.confirm({
          title: "Position Taken",
          message: "This position is already taken by " + (i.name || "an empty space") + ". Do you want to continue anyway?",
          buttons: [{
            text: "Cancel",
            type: "button-cancel"
          }, {
            text: "Continue",
            type: "button-ok",
            onTap: function() {
              t.updateBreaker(e), t.updateBreaker({
                id: i.id,
                position: null
              }).then(function() {
                i.position = null
              })
            }
          }]
        }) : l(e)
      }, d.onBack = function() {
        l(_.cloneDeep(d.breaker)).then(function() {
          i.go("leapfrog-setup-wizard.load-center-panel-view")
        }, function(e) {
          i.go("leapfrog-setup-wizard.load-center-panel-view")
        })
      }, d.continue = function() {}
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.load-center-has-breakers", {
        url: "/load-center-has-breakers",
        template: n(405),
        controller: "LoadCenterHasBreakersCtrl as vm"
      })
    }]).controller("LoadCenterHasBreakersCtrl", ["LeapfrogDataService", "$scope", "$state", function(e, t, n) {
      var i = this;
      t.$on("$ionicView.enter", function() {
        i.connectedLoadCenter = e.SELECTED_ENROLLMENT_LOAD_CENTER
      }), i.onBack = function() {
        n.go("leapfrog-setup-wizard.load-center-setup-connecting")
      }, i.continue = function() {
        var t = function() {
          return n.go("leapfrog-setup-wizard.load-center-panel-view")
        };
        if (e.DISCOVERED_BREAKERS && e.DISCOVERED_BREAKERS.length > 0) return void t();
        e.loadBreakerList().then(function() {
          t()
        }).catch(function(e) {
          t()
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("leapfrog-setup-wizard.load-center-has-no-breakers", {
          url: "/load-center-has-no-breakers/:flowType",
          template: n(406),
          controller: "LoadCenterHasNoBreakersCtrl as vm",
          params: {
            flowType: null
          }
        })
      }]).controller("LoadCenterHasNoBreakersCtrl", ["LeapfrogDataService", "$scope", "$state", "PopupFactory", "$window", "$q", "$stateParams", "ProgressInterval", function(e, t, n, i, o, a, s, r) {
        function c() {
          d.showBack = !0, d.showContinue = !0
        }

        function l() {
          d.showBack = !1, d.showContinue = !1
        }
        var d = this;
        d.discoveryComplete = !1, d.discoveryProgress = !1, d.breakers = [];
        var u = o.cordova ? 120 : 1,
          v = o.cordova ? 60 : 1,
          m = s.flowType;
        t.$on("$ionicView.beforeEnter", function() {
          d.connectedLoadCenter = e.SELECTED_ENROLLMENT_LOAD_CENTER, "AFTER_BREAKERS_RESET" === m ? d.discoverBreakers() : c()
        }), d.continueSettingUp = function() {
          e.DISCOVERED_BREAKERS = _.cloneDeep(d.breakers), n.go(d.breakers.length > 0 ? "leapfrog-setup-wizard.load-center-iterative-breakers" : "leapfrog-setup-wizard.load-center-panel-view")
        }, d.discoverBreakers = function(t) {
          t = t || u, d.scanTime = t + 10, d.breakers = [], d.discoveryProgress = !0, d.discoveryComplete = !1, d.startProgressBar(), l();
          var n = a.defer();
          return e.discoverBreakers(t).then(function() {
            return e.getDiscoveredBreakers(t)
          }).then(function(t) {
            d.breakers = t, d.discoveryComplete = !0, e.SELECTED_ENROLLMENT_LOAD_CENTER.breakerCount = t.length, d.connectedLoadCenter = e.SELECTED_ENROLLMENT_LOAD_CENTER, n.resolve(t)
          }).catch(function(e) {
            i.alert({
              title: "Cannot Discover",
              message: "You Load Center cannot discover the breakers. Please try again."
            }), n.reject(e)
          }).finally(function() {
            d.discoveryProgress = !1, c()
          }), n.promise
        }, d.startProgressBar = function() {
          d.progressBar = new r, d.progressBar.start({
            max: 1e3 * d.scanTime
          })
        }, d.rescanBreakers = function() {
          d.discoverBreakers(v)
        }, d.identifyBreaker = function(t) {
          t.blinkLED = !t.blinkLED, e.identifyBreaker(t).then(function(e) {})
        }, d.gotoBreakersReset = function() {
          n.go("leapfrog-setup-wizard.load-center-reset-breakers")
        }, d.onBack = function() {
          n.go("leapfrog-setup-wizard.load-center-setup-connecting")
        }
      }])
    }
  }).call(t, "src/pages/leapfrog-setup-wizard/load-center-has-no-breakers.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.load-center-iterative-breakers", {
        url: "/load-center-iterative-breakers",
        template: n(407),
        controller: "LoadCenterIterativeBreakersCtrl as vm"
      })
    }]).controller("LoadCenterIterativeBreakersCtrl", ["LeapfrogDataService", "$scope", "$state", "PopupFactory", "$ionicLoading", function(e, t, n, i, o) {
      function a() {
        var t = _.cloneDeep(l.selectedBreaker);
        return e.identifyBreaker({
          id: t.id,
          blinkLED: !0
        }).then(function(e) {
          return l.selectedBreaker.blinkLED = !0, e
        })
      }

      function s() {
        o.show({
          duration: 2e3
        });
        var t = _.cloneDeep(l.selectedBreaker);
        return e.updateBreaker({
          id: t.id,
          blinkLED: !1,
          name: t.name,
          position: t.position
        }).then(function(e) {
          return l.selectedBreaker.blinkLED = !1, o.hide(), e
        })
      }

      function r() {
        n.go("leapfrog-setup-wizard.load-center-panel-view")
      }

      function c() {
        l.identifyBreaker()
      }
      var l = this;
      l.index = 0, l.discoveryComplete = !0, l.loadCenter = e.get("LOAD_CENTER_INFO"), l.positions = _.range(1, l.loadCenter.panelSize + 1), t.$on("$ionicView.beforeEnter", function() {
        l.disabledBtn = !0
      }), t.$on("$ionicView.enter", function() {
        l.disabledBtn = !1
      }), l.breakers = e.DISCOVERED_BREAKERS, t.$on("$ionicView.enter", function() {
        l.connectedLoadCenter = e.SELECTED_ENROLLMENT_LOAD_CENTER, l.selectedBreaker = l.breakers[l.index], c()
      }), l.goNext = function() {
        l.index < l.breakers.length - 1 ? s().finally(function() {
          l.index += 1, l.selectedBreaker = l.breakers[l.index], c()
        }) : (s(), r())
      }, l.goPrev = function() {
        l.index > 0 && s().finally(function() {
          l.index -= 1, l.selectedBreaker = l.breakers[l.index], c()
        })
      }, l.identifyBreaker = function() {
        a()
      }, l.toggleIdentify = function() {
        var t = _.cloneDeep(l.selectedBreaker);
        t.blinkLED = !t.blinkLED, e.identifyBreaker(t).then(function(e) {
          l.selectedBreaker.blinkLED = e.blinkLED
        })
      }, l.onBreakerUpdate = function() {
        var t = _.cloneDeep(l.selectedBreaker);
        delete t.blinkLED;
        var n = t.position,
          o = l.breakers.find(function(e) {
            return e.position === n && !!e.position && e.id !== t.id
          });
        o ? i.confirm({
          title: "Position Taken",
          message: "This position is already taken by " + (o.name || "an empty space") + ". Do you want to continue anyway?",
          buttons: [{
            text: "Cancel",
            type: "button-cancel"
          }, {
            text: "Continue",
            type: "button-ok",
            onTap: function() {
              e.updateBreaker(t), e.updateBreaker({
                id: o.id,
                position: 0
              }).then(function() {
                o.position = 0
              })
            }
          }]
        }) : e.updateBreaker(t)
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.load-center-panel-view", {
        url: "/load-center-panel-view",
        template: n(408),
        controller: "LoadCenterPanelViewCtrl as vm"
      })
    }]).controller("LoadCenterPanelViewCtrl", ["LeapfrogDataService", "LeapfrogOnlineDataService", "$scope", "$state", "$http", "PopupFactory", "Util", function(e, t, n, i, o, a, s) {
      function r() {
        var n = t.processBreakerList(c.breakers, c.currentLoadCenter);
        c.positionedBreakers = n.positionedBreakers, c.unpositionedBreakers = n.unpositionedBreakers, e.DISCOVERED_BREAKERS = n.breakers
      }
      var c = this;
      c.loadCenterModels = [{
        numOfBreakerPositions: 8
      }, {
        numOfBreakerPositions: 12
      }, {
        numOfBreakerPositions: 20
      }, {
        numOfBreakerPositions: 30
      }, {
        numOfBreakerPositions: 42
      }];
      var l = {
        name: null,
        model: null,
        hwVersion: null,
        position: null,
        poles: 1,
        dipole: !1,
        empty: !0
      };
      c.currentLoadCenter = e.SELECTED_ENROLLMENT_LOAD_CENTER, c.positions = _.range(1, 41), c.breakers = e.DISCOVERED_BREAKERS;
      var d = function() {
          var t = e.get("LOAD_CENTER_INFO");
          t && Object.keys(t).length > 0 && (_.extend(e.SELECTED_ENROLLMENT_LOAD_CENTER, t), c.currentLoadCenter = e.SELECTED_ENROLLMENT_LOAD_CENTER), c.panelSize = c.currentLoadCenter && c.currentLoadCenter.panelSize || c.breakers.length, u()
        },
        u = function() {
          if (c.breakers.length !== c.panelSize) {
            c.smartBreakerCount = c.breakers.length || 0, c.dumbBreakerCount = c.panelSize - c.smartBreakerCount;
            for (var t = 0; t < c.dumbBreakerCount; t++) {
              var n = _.clone(l);
              n.id = s.generateRandomStringOfLength(24), c.breakers.push(n)
            }
            e.DISCOVERED_BREAKERS = c.breakers
          }
          r()
        };
      n.$on("$ionicView.enter", function() {
        c.selectedBreaker = c.breakers[c.index], d()
      }), c.finish = function() {
        var t = function() {
          e.createBreakers(c.breakers).then(function() {
            e.setCommissionedState(!0).then(function() {
              i.go("leapfrog-setup-wizard.leapfrog-commission-completion")
            })
          })
        };
        c.unpositionedBreakers && c.unpositionedBreakers.length > 0 ? a.alert({
          title: "Unset Breakers",
          message: "You still have " + c.unpositionedBreakers.length + " unpositioned breakers, are you sure you would like to complete the commissioning process?",
          buttons: [{
            text: "Yes",
            type: "button-ok",
            onTap: function() {
              t()
            }
          }, {
            text: "Cancel",
            type: "button-cancel",
            onTap: function() {}
          }]
        }) : t()
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("leapfrog-setup-wizard.load-center-reset-breakers", {
        url: "/load-center-reset-breakers",
        template: n(409),
        controller: "LoadCenterResetBreakersCtrl as vm"
      })
    }]).controller("LoadCenterResetBreakersCtrl", ["LeapfrogDataService", "$scope", "$state", "$timeout", "PopupFactory", "$ionicLoading", function(e, t, n, i, o, a) {
      var s = this;
      s.onBack = function() {
        n.go("leapfrog-setup-wizard.load-center-has-no-breakers")
      }, s.resetBreakers = function() {
        e.factoryResetBreaker().then(function() {
          a.show({
            duration: 2e3
          }), i(function() {
            n.go("leapfrog-setup-wizard.load-center-has-no-breakers", {
              flowType: "AFTER_BREAKERS_RESET"
            })
          }, 2e3)
        }).catch(function() {
          o.alert({
            title: "Cannot reset breakers",
            message: "Cannot reset breakers in your panel."
          })
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("leapfrog-setup-wizard.load-center-setup-connecting", {
          url: "/load-center-setup-connecting/:flowType",
          template: n(410),
          controller: "LoadCenterSetupConnectingCtrl as vm",
          params: {
            flowType: null
          }
        })
      }]).controller("LoadCenterSetupConnectingCtrl", ["$rootScope", "$state", "$scope", "$stateParams", "LeapfrogDataService", "SSIDListener", "$translate", "Insomnia", "PopupFactory", "Toast", "$window", "$timeout", "$interval", "$q", "$ionicPlatform", "$ionicLoading", "NativePlatformSettings", function(e, t, i, o, a, s, r, c, l, d, u, v, m, p, E, f, g) {
        function h() {
          var e = ionic.Platform.platform();
          D.platform = e || "ios"
        }

        function _() {
          a.factoryResetPanel().then(function(e) {
            return d.show({
              message: "Please wait while the panel is being reset.",
              duration: 3e4
            })
          }).then(function() {
            S()
          })
        }

        function S() {
          D.isConnectedToDAU = !1, D.connectedDAU = {}, a.resetData(), I()
        }

        function b() {
          return a.factoryResetBreaker().then(function(e) {})
        }

        function I() {
          if (!u.cordova) {
            return void A({
              ssid: "LDATA-XXXX",
              is_leviton_device: !0,
              is_load_center: !0
            })
          }
          s.startListening(A, T)
        }

        function A(e) {
          e.is_load_center && (a.connectedAccessory = e, s.stopListening(), N())
        }

        function T(e) {
          r.instant("GENERIC_ERROR");
          "INVALID_NETWORK_TYPE" === e.type ? r.instant("CANNOT_DETECT_WIFI") : "PLUGIN_FAIL_ERROR" === e.type && r.instant("CANNOT_DETERMINE_SSID", {
            error: e.type
          })
        }

        function N() {
          c.keepAwake(), C().then(function(e) {
            D.isConnectedToDAU = !0, D.connectedDAU = e;
            var n = e.breakerCount;
            "DAU_REPLACEMENT" === R ? (a.FLOW_TYPE = "DAU_REPLACEMENT", t.go("leapfrog-setup-wizard.add-network")) : "CHANGE_WIFI" === R || "CHANGE_WIFI_AP" === R ? (a.FLOW_TYPE = "CHANGE_WIFI", t.go("leapfrog-setup-wizard.add-network")) : e.commissioned ? t.go("leapfrog-setup-wizard.leapfrog-commission-completion") : Number(n) > 0 ? t.go("leapfrog-setup-wizard.load-center-has-breakers") : t.go("leapfrog-setup-wizard.load-center-has-no-breakers")
          }).catch(function(e) {
            a.showDisconnectError().then(function() {
              D.onBack()
            })
          })
        }

        function C() {
          var e = 0,
            t = p.defer();
          return D.getInfoInterval = m(function() {
            (e += 1) >= 10 && m.cancel(D.getInfoInterval);
            var n = function(e) {
              var n = a.get("LOAD_CENTER_INFO");
              if (!(n && Object.keys(n).length > 0)) return t.resolve(e);
              a.updateCurrentPanelProperties(n).then(function(e) {
                a.getBreakerPanelInfo().then(function(e) {
                  e && e.id ? t.resolve(e) : t.reject({
                    type: "timeout",
                    error: "no response"
                  })
                })
              }, function(e) {
                return t.resolve(e)
              })
            };
            a.getBreakerPanelInfo().then(function(i) {
              if (i && i.id) return m.cancel(D.getInfoInterval), n(i);
              e >= 10 && t.reject({
                type: "timeout",
                error: "no response"
              })
            }).catch(function(n) {
              e >= 10 && t.reject({
                type: "timeout",
                error: n
              })
            })
          }, 2e3, 10), t.promise
        }
        var D = this;
        D.image = "./img/logo/leviton-logo.svg", D.imageSources = {
          android: "./img/wifi-screenshot-android.png",
          ios: "./img/wifi-screenshot-ios.png"
        }, D.isConnectedToDAU = !1, D.connectedDAU = {};
        var R = o.flowType;
        D.flowType = R, i.$on("$ionicView.enter", function() {
          h(), a.resetData(), I()
        }), i.$on("$stateChangeStart", function() {
          s.stopListening(), m.cancel(D.getInfoInterval)
        }), E.on("resume", function() {
          D.connectedDAU.id || f.show({
            duration: 2e3
          })
        }), D.onBack = function() {
          c.allowSleepAgain(), e.$ionicGoBack()
        }, D.discoverBreakers = function() {
          l.alert({
            title: "Discover Breakers",
            message: "Discovering breakers will find the breakers installed in your Load Center. This will take about 2 minutes. Do you want to continue?",
            buttons: [{
              text: "Cancel",
              type: "button-cancel"
            }, {
              text: "Ok",
              type: "button-ok",
              onTap: function() {
                t.go("leapfrog-setup-wizard.discover-breakers")
              }
            }]
          })
        }, D.resetBreakerPanel = function() {
          l.alert({
            title: "Reset Panel",
            message: "Your phone will disconnect from the Data Hub Wi-Fi. This process can take few minutes. Are you sure you want to reset this breaker panel?",
            buttons: [{
              text: "Yes",
              type: "button-ok",
              onTap: function() {
                _()
              }
            }, {
              text: "Cancel",
              type: "button-cancel",
              onTap: function() {}
            }]
          })
        }, D.resetBreakers = function() {
          l.alert({
            title: "Reset Breakers",
            message: n(412),
            buttons: [{
              text: "Cancel",
              type: "button-cancel",
              onTap: function() {}
            }, {
              text: "Continue",
              type: "button-ok",
              onTap: function() {
                b().then(function() {
                  return d.show({
                    duration: 3e4,
                    message: "Please wait while the breakers are being reset..."
                  })
                }).then(function() {
                  l.alert({
                    title: "Reset Breakers Completed",
                    message: "Breakers in " + D.connectedDAU.name + " are now reset!"
                  })
                }).catch(function() {
                  d.hide()
                })
              }
            }]
          })
        }, D.replaceDAU = function() {
          D.connectedDAU.residenceId ? l.alert({
            title: "Cannot Replace",
            message: "This Load Center is assigned to another residence. Please use another Load center for replacement."
          }) : D.connectedDAU.breakerCount ? l.alert({
            title: "Cannot Replace",
            message: "This Load Center already has breakers associated with it. Please use another Load center for replacement."
          }) : (t.go("leapfrog-setup-wizard.add-network"), a.FLOW_TYPE = "DAU_REPLACEMENT")
        }, D.changeWiFi = function() {
          t.go("leapfrog-setup-wizard.add-network"), a.FLOW_TYPE = "CHANGE_WIFI"
        }, D.addToAResidence = function() {
          t.go("leapfrog-setup-wizard.leapfrog-commission-completion")
        }, D.wifiSetting = function() {
          g.showWifiSetting()
        }
      }])
    }
  }).call(t, "src/pages/leapfrog-setup-wizard/load-center-setup-connecting.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("leapfrog-setup-wizard.replace-dau", {
          url: "/replace-dau",
          template: n(411),
          controller: "ReplaceDAUCtrl as vm"
        })
      }]).controller("ReplaceDAUCtrl", ["$state", "LeapfrogDataService", "$scope", "Residence", "AppSession", "ResidentialBreakerPanel", "PopupFactory", function(e, t, n, i, o, a, s) {
        function r() {
          i.residentialBreakerPanels({
            id: u
          }).$promise.then(function(e) {
            l.dausInResidence = e
          })
        }

        function c() {
          i.registerResidentialBreakerPanel({
            id: u,
            residentialBreakerPanelId: d
          }).$promise.then(function(e) {}).catch(function() {
            s.alert({
              title: "Data Hub Registration Fail",
              message: "Failed to register the new Data Hub to your residence."
            })
          })
        }
        var l = this;
        l.LDS = t;
        var d = t.SELECTED_ENROLLMENT_LOAD_CENTER.id,
          u = 23;
        n.$on("$ionicView.enter", function() {
          u = (o.getSelectedResidence() || {}).id || u, r(), c()
        }), l.onDAUSelection = function(e) {}, l.onBack = function() {}, l.onContinue = function() {
          var t = l.selectedOldDAU.id;
          a.replaceDAU({
            id: d,
            oldId: t
          }).$promise.then(function(t) {
            e.go("rooms.list")
          }).catch(function(e) {
            s.alert({
              title: "Cannot replace",
              message: e.message || "Unable to replace the Data Hub."
            })
          })
        }
      }])
    }
  }).call(t, "src/pages/leapfrog-setup-wizard/replace-dau.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(220)(e), n(222)(e), n(221)(e), n(219)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("breaker-panel-detail", {
        url: "/breaker-panel-detail",
        template: n(413),
        controller: "BreakerPanelDetailCtrl as vm",
        resolve: {
          CurrentUser: ["AppSession", function(e) {
            return e.initialized.promise
          }]
        }
      })
    }]).controller("BreakerPanelDetailCtrl", ["$localStorage", "$state", "Toast", "$scope", "AppSession", "LeapfrogDataService", function(e, t, n, i, o, a) {
      function s(e) {
        n.show({
          duration: 3e3,
          message: e
        })
      }

      function r(e) {
        var t = void 0;
        return t = e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0], t = t.split(":")[0], t = t.split("?")[0]
      }
      var c = this;
      c.isInstaller = !1, c.loadCenter = e.LOAD_CENTER_PRINT_CACHE || {}, c.loadCenter.orientation = c.loadCenter.orientation || "straight", c.loadCenter.panelSize = c.loadCenter.panelSize || 8, c.loadCenterModels = [{
        numOfBreakerPositions: 8
      }, {
        numOfBreakerPositions: 12
      }, {
        numOfBreakerPositions: 20
      }, {
        numOfBreakerPositions: 30
      }, {
        numOfBreakerPositions: 42
      }], i.$on("$ionicView.beforeEnter", function() {
        var e = o.currentUser.lastName || o.currentUser.firstName || o.currentUser.selectedResidence.name || "Leviton";
        !c.loadCenter.name && o.currentUser && (c.loadCenter.name = e + "'s Load Center")
      }), c.continue = function() {
        if (!c.loadCenter.name) return s("Panel name is required");
        if (!c.loadCenter.panelSize) return s("Panel size is required");
        var n = ["lcsdev.leviton.com", "lcsqa.leviton.com", "lcs.leviton.com"],
          i = r(e.cloud_api) || "lcs.leviton.com";
        i = i.replace("my", "lcs"), c.loadCenter.lcsHostName = n.indexOf(i) >= 0 ? i : "lcs.leviton.com", a.set("LOAD_CENTER_INFO", c.loadCenter), t.go("leapfrog-setup-wizard.load-center-setup-connecting")
      }, c.cancel = function() {
        t.go("onboarding.device-type-selector")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("enter-breakers-print-info", {
          url: "/enter-breakers-print-info/",
          template: n(415),
          controller: "EnterBreakersPrintInfo as vm"
        })
      }]).controller("EnterBreakersPrintInfo", ["$stateParams", "$scope", "$interpolate", "$translate", "FileSaver", "$state", "$window", "$cordovaFileTransfer", "$ionicPlatform", "$cordovaFileOpener2", "$ionicLoading", "PopupFactory", "PDFManager", "$localStorage", function(e, t, i, o, a, s, r, c, l, d, u, v, m, p) {
        function E() {
          var e = _.cloneDeep(S.breakers.map(function(e) {
            return e.name
          }));
          return I && e.reverse(), e
        }

        function f(e) {
          return e ? (e += "", "(" + e.substring(0, 3) + ") " + e.substring(3, 6) + "-" + e.substr(6)) : ""
        }

        function g(e) {
          return new Array(e).fill(0).map(function(e, t) {
            return {
              name: "Breaker " + (t + 1),
              position: 1 + t
            }
          })
        }

        function h() {
          p.PRINT_BREAKERS = _.cloneDeep(S.breakers)
        }
        var S = this,
          b = parseInt(p.LOAD_CENTER_PRINT_CACHE.slots);
        S.suggestedNames = n(488) || [], S.breakers = function() {
          var e = _.cloneDeep(p.PRINT_BREAKERS) || [];
          if (e.length >= b) {
            var t = e.slice(0, b),
              n = t[b - 1],
              i = t[b - 2];
            return delete n.hasDipole, delete i.hasDipole, t
          }
          var o = g(b);
          return e.forEach(function(e, t) {
            o[t] = e
          }), o
        }();
        var I = "inverted" === p.LOAD_CENTER_PRINT_CACHE.orientation;
        I && S.breakers.reverse(), S.selectBreaker = function(e) {
          if (S.suggestedNames.filter(function(t) {
              return t.value !== e.value || !1 === e.selected
            }).forEach(function(e) {
              e.selected = !1
            }), !1 === e.selected) return void(S.editingBreaker.name = "Breaker " + S.editingBreaker.position);
          S.editingBreaker.name = e.value
        }, S.onBackClick = function() {
          s.go("rooms.list")
        }, S.connectDipoles = function(e) {
          var t = S.breakers[e - 2],
            n = S.breakers[e + 2];
          if (t && t.hasDipole && (t.hasDipole = !1), !n || !n.hasDipole) {
            e < S.breakers.length - 2 && (S.breakers[e].hasDipole = !S.breakers[e].hasDipole, S.breakers[e].hasDipole ? S.breakers[e + 2].name = "dipole" : S.breakers[e + 2].name = "Breaker " + (e + 3)), h()
          }
        }, S.generatePdf = function() {
          var e = E();
          u.show({
            duration: 2e3
          });
          var t, n = p.LOAD_CENTER_PRINT_CACHE,
            i = m.getProcessedFileURL({
              panelName: n.panelName,
              breakerNames: e,
              reverse: I,
              companyName: n.companyName,
              phoneNumber: f(n.phoneNumber),
              emailAddress: n.email
            }),
            a = "Leviton-Breaker-Panel.pdf";
          h(), r.cordova ? (l.ready(function() {
            t = ionic.Platform.isIOS() ? r.cordova.file.documentsDirectory + a : r.cordova.file.externalDataDirectory + a
          }), c.download(i, t, {}, !0).then(function(e) {
            return d.open(t, "application/pdf")
          }).then(function(e) {}).catch(function(e) {
            u.hide(), (e.message || "").indexOf("Activity") > -1 && v.alert({
              title: o.instant("NO_PDF_READER_TITLE"),
              message: o.instant("NO_PDF_READER_MESSAGE")
            })
          }).finally(function() {
            u.hide()
          })) : m.handleBrowser(i)
        }, S.clickBreakerCard = function(e) {
          S.previousName = S.breakers[e].name, S.editingBreaker = Object.assign(S.breakers[e], {
            edited: !0,
            index: e
          }), v.alert({
            title: o.instant("ENTER_BREAKER_NAME"),
            scope: t,
            template: n(414),
            buttons: []
          })
        }, S.onNameConfirmed = function() {
          if (_.get(S, "editingBreaker.name.length") >= 3) {
            var e = S.editingBreaker.index;
            delete S.editingBreaker.index, S.breakers[e] = S.editingBreaker, v.dismissPopup(), S.clearSuggestionSelection(), h()
          }
        }, S.nameChanged = function() {
          S.clearSuggestionSelection()
        }, S.clearSuggestionSelection = function() {
          S.suggestedNames.forEach(function(e) {
            e.selected = !1
          })
        }, S.resetBreakersData = function() {
          v.confirm({
            title: "Reset Data",
            message: "This will reset the breakers name to default. Do you want to continue?",
            buttons: [{
              text: "Cancel",
              type: "button-cancel"
            }, {
              text: "Continue",
              type: "button-ok",
              onTap: function() {
                delete p.LOAD_CENTER_PRINT_CACHE, delete p.PRINT_BREAKERS, s.go("enter-panel-print-info")
              }
            }]
          })
        }, S.clearName = function(e) {
          e.name = "", S.clearSuggestionSelection()
        }, S.closeModal = function() {
          var e = S.editingBreaker.index;
          delete S.editingBreaker.index, S.breakers[e].name = S.previousName, delete S.previousName, S.clearSuggestionSelection(), v.dismissPopup()
        }
      }])
    }
  }).call(t, "src/pages/leapfrog-utilities/enter-breakers-print-info.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("enter-panel-detail", {
        url: "/enter-panel-detail",
        template: n(416),
        controller: "EnterPanelDetailCtrl as vm",
        resolve: {
          CurrentUser: ["AppSession", function(e) {
            return e.initialized.promise
          }]
        }
      })
    }]).controller("EnterPanelDetailCtrl", ["$localStorage", "$state", function(e, t) {
      var n = this;
      n.loadCenter = e.LOAD_CENTER_PRINT_CACHE, n.loadCenter.orientation = n.loadCenter.orientation || "straight", n.loadCenter.slots = n.loadCenter.slots || 8, n.loadCenterModels = [{
        numOfBreakerPositions: 8
      }, {
        numOfBreakerPositions: 20
      }, {
        numOfBreakerPositions: 30
      }, {
        numOfBreakerPositions: 42
      }], n.onBackClick = function() {
        t.go("enter-panel-print-info")
      }, n.continue = function() {
        t.go("enter-breakers-print-info")
      }, n.cancel = function() {
        t.go("rooms.list")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("enter-panel-print-info", {
        url: "/enter-panel-print-info",
        template: n(417),
        controller: "EnterPanelPrintInfoCtrl as vm",
        resolve: {
          CurrentUser: ["AppSession", function(e) {
            return e.initialized.promise
          }]
        }
      })
    }]).controller("EnterPanelPrintInfoCtrl", ["$state", "$localStorage", "$ionicModal", "$scope", "PopupFactory", "AppSession", "$timeout", "$translate", function(e, t, n, i, o, a, s, r) {
      function c() {
        return d.loadCenter.panelName
      }

      function l() {
        var e = _.get(a, "currentUser.email") || "";
        d.loadCenter = _.cloneDeep(t.LOAD_CENTER_PRINT_CACHE || {
          email: e
        })
      }
      var d = this;
      i.$on("$ionicView.afterEnter", function() {
        l()
      }), d.configureLoadCenter = function(n) {
        c() ? (t.LOAD_CENTER_PRINT_CACHE = d.loadCenter, e.go("enter-panel-detail")) : o.alert({
          title: r.instant("LOADCENTER_PRINT_VALIDATION_TITLE"),
          message: r.instant("LOADCENTER_PRINT_VALIDATION_MESSAGE")
        })
      }, d.onBackClick = function() {
        e.go("rooms.list")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(230)(e), n(226)(e), n(227)(e), n(229)(e), n(228)(e), n(225)(e), n(224)(e), n(231)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("nest.camera-configuration", {
        url: "/camera-configuration/:id",
        template: n(418),
        controller: "NestCameraConfigurationCtrl as vm",
        cache: !1,
        params: {
          id: null
        }
      })
    }]).controller("NestCameraConfigurationCtrl", ["NestConn", "PopupFactory", "Version", "$state", "$stateParams", "$window", "ScrollDelegate", function(e, t, n, i, o, a, s) {
      function r(e) {
        t.alert({
          title: "Firmware Update Required",
          message: "Your Decora Smart Wi-Fi device will need to be updated to firmware version 1.4.3 before you can configure your Nest device to work with My Leviton. Would you like to perform the update now ?",
          buttons: [{
            type: "button-cancel",
            text: "Cancel",
            onTap: function() {}
          }, {
            type: "button-ok",
            text: "Update now",
            onTap: function() {
              i.go("rooms.switch-details", {
                id: e.id
              }), i.BACK_VIEW = "CAMERA_CONFIG"
            }
          }]
        })
      }
      var c = this,
        l = o.id;
      c.nestConnection = e, c.timeOptions = [{
        seconds: 60,
        text: "1 minute"
      }, {
        seconds: 120,
        text: "2 minutes"
      }, {
        seconds: 300,
        text: "5 minutes"
      }, {
        seconds: 600,
        text: "10 minutes"
      }, {
        seconds: 1800,
        text: "30 minutes"
      }, {
        seconds: 3600,
        text: "1 hour"
      }, {
        seconds: 7200,
        text: "2 hours"
      }, {
        seconds: 18e3,
        text: "5 hours"
      }, {
        seconds: 36e3,
        text: "10 hours"
      }, {
        seconds: 43200,
        text: "12 hours"
      }], a.cordova || (c.timeOptions = [{
        seconds: 5,
        text: "5 secs"
      }, {
        seconds: 10,
        text: "10 secs"
      }, {
        seconds: 60,
        text: "1 minute"
      }, {
        seconds: 600,
        text: "10 minutes"
      }]), c.selectedNestCamera = e.SELECTED_NEST_RESIDENCE.nestCams.find(function(e) {
        return e.device_id === l
      }), c.selectedNestCamera.devices.forEach(function(e) {
        e.supportsDuration = n.supportsDuration(e.version), e.expanded = !1, e.duration = e.duration || 600
      }), c.onClickCheckbox = function(e) {
        e.supportsDuration && (e.selected = !e.selected, e.selected || delete e.action, e.selected && !e.action && (e.action = "power"), e.selected && !e.expanded && (e.expanded = !0, s.resize()))
      }, c.onAlertClick = function(e) {
        r(e)
      }, c.toggleItem = function(e) {
        e.expanded = !e.expanded, s.resize()
      }, c.togglePower = function(e) {
        e.action = "power", e.selected = !0
      }, c.toggleBlink = function(e) {
        e.action = "blink", e.selected = !0
      }, c.cancel = function() {
        i.go("nest.cam")
      }, c.save = function() {
        i.go("nest.cam")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("nest.cam", {
        url: "/cam",
        template: n(419),
        controller: "NestCamCtrl as vm"
      })
    }]).controller("NestCamCtrl", ["NestIntegrationFactory", "NestConn", "$scope", "$ionicModal", "$state", function(e, t, n, i, o) {
      function a(e) {
        o.go("nest.camera-configuration", {
          id: e.device_id
        })
      }
      var s = this;
      n.$on("$ionicView.enter", function() {
        s.nestCams = t.SELECTED_NEST_RESIDENCE.nestCams
      }), s.toggleProtectSelection = function(e) {
        e.selected = !e.selected, e.selected && a(e)
      }, s.openModal = function(e) {
        e.selected = !0, a(e)
      }, s.continue = function() {
        o.go("nest.setup-completion")
      }, s.cancelSetup = function() {
        o.go("connections.list")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("nest.home-away", {
        url: "/home-away",
        template: n(420),
        controller: "NestHomeAwayCtrl as vm"
      })
    }]).controller("NestHomeAwayCtrl", ["NestConn", "$scope", "$state", "AppSession", "HomeAwayWizard", "RouteTracker", "$localStorage", function(e, t, n, i, o, a, s) {
      function r() {
        var t = s.NEST_INTEGRATION.accessToken;
        "CONFIGURE" === s.NEST_SETUP_MODE && e.deleteNestAccessToken(t).catch(function(e) {
          delete s.NEST_INTEGRATION
        })
      }
      var c = this;
      c.NestConn = e, t.$on("$ionicView.enter", function() {}), c.toggleHomeAwayEnabled = function() {
        e.setNestHomeAwayState(!e.getNestHomeAwayState())
      }, c.onChangeResidence = function() {
        var t = c.NestConn.SELECTED_NEST_RESIDENCE.structure_id;
        e.getNestHomeAwayState() || (t += ":disabled"), e.setPersistedNestIntegration({
          isHomeAwayEnabled: t
        }), e.loadNestDevices(), e.assignLevitonDevicesToNestDevices()
      }, c.continue = function() {
        var t = e.SELECTED_NEST_RESIDENCE.nestSmokes && e.SELECTED_NEST_RESIDENCE.nestSmokes.length > 0,
          i = e.SELECTED_NEST_RESIDENCE.nestCams && e.SELECTED_NEST_RESIDENCE.nestCams.length > 0;
        t ? n.go("nest.protect") : i ? n.go("nest.cam") : n.go("nest.setup-completion")
      }, c.takeToHomeAwayWizard = function() {
        o.resetWizard(), a.addRouteCurrent("WHEN_AWAY_FINISH"), a.addRouteCurrent("WHEN_HOME_BACK");
        var e = i.getSelectedResidence().id;
        n.go("home-away-wizard.when-home", {
          id: e
        })
      }, c.cancelSetup = function() {
        n.go("connections.list"), r()
      }, c.goBack = function() {
        n.go("connections.list"), r()
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("NestIntegrationFactory", ["$q", "Activity", "NestActivity", "NestIntegration", "Residence", "AppSession", "NestConn", function(e, t, n, i, o, a, s) {
      function r(t) {
        var o = d.nestActivities,
          a = Object.keys(o).map(function(e) {
            return o[e]
          }),
          s = a.map(function(o) {
            var a = _.cloneDeep(o);
            return delete a.actions, i.nestActivities.create({
              id: t.id
            }, a).$promise.then(function(t) {
              var i = o.actions.map(function(e) {
                return n.nestActions.create({
                  id: t.id
                }, e).$promise
              });
              return e.all(i)
            })
          });
        return e.all(s)
      }

      function c() {
        var t = e.defer(),
          n = _.get(s, "LEVITON_RESIDENCE.nestIntegrations.id"),
          r = a.getSelectedResidence(),
          c = s.getPersistedNestIntegration().accessToken,
          d = s.getPersistedNestIntegration().isHomeAwayEnabled;
        return n ? i.prototype$updateAttributes({
          id: n
        }, {
          isHomeAwayEnabled: d
        }).$promise.then(function(e) {
          return i.nestActivities.destroyAll({
            id: n
          }).$promise.then(function() {
            return e
          })
        }).then(function(e) {
          l(e), t.resolve(e)
        }).catch(function(e) {
          t.reject(e)
        }) : o.nestIntegrations.create({
          id: r.id
        }, {
          accessToken: c,
          isHomeAwayEnabled: d
        }).$promise.then(function(e) {
          l(e), t.resolve(e)
        }).catch(function(e) {
          t.reject(e)
        }), t.promise
      }

      function l(e) {
        s.setPersistedNestIntegration({
          accessToken: e.accessToken,
          created: e.created,
          id: e.id,
          residenceId: e.residenceId
        })
      }
      var d = {};
      return d.reset = function() {
        d.nestActivities = {}
      }, d.addNestActivity = function(e) {
        d.nestActivities[e.deviceId] = e
      }, d.save = function() {
        var t = e.defer();
        return c().then(r).then(function(e) {
          t.resolve(e)
        }), t.promise
      }, d.setHomeAwayEnabledId = function(e) {
        _.set(d, "nestIntegration.isHomeAwayEnabled", e)
      }, d.reset(), d
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("nest.protect", {
        url: "/protect",
        template: n(421),
        controller: "NestProtectCtrl as vm"
      })
    }]).controller("NestProtectCtrl", ["$state", "NestConn", "$scope", function(e, t, n) {
      function i(t) {
        e.go("nest.protect-configuration", {
          id: t.device_id
        })
      }
      var o = this;
      o.currentResidence = null, o.NestConn = t, n.$on("$ionicView.enter", function() {
        o.nestProtects = t.SELECTED_NEST_RESIDENCE.nestSmokes
      }), o.toggleProtectSelection = function(e) {
        e.selected = !e.selected, e.selected && i(e)
      }, o.openModal = function(e) {
        e.selected = !0, i(e)
      }, o.continue = function() {
        t.SELECTED_NEST_RESIDENCE.cameras && t.SELECTED_NEST_RESIDENCE.cameras.length > 0 ? e.go("nest.cam") : e.go("nest.setup-completion")
      }, o.cancelSetup = function() {
        e.go("connections.list")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("nest.setup-completion", {
        url: "/setup-completion",
        template: n(422),
        controller: "NestSetupCompletion as vm",
        cache: !1
      })
    }]).controller("NestSetupCompletion", ["$scope", "$state", "NestConn", "NestIntegrationFactory", "$ionicLoading", function(e, t, n, i, o) {
      function a() {
        o.show({
          duration: 5e3
        });
        var e = n.getCompletionData();
        e.cameras.forEach(function(e) {
          i.addNestActivity(e)
        }), e.protects.forEach(function(e) {
          i.addNestActivity(e)
        }), i.save().then(function(e) {
          s.enableComplete = !0
        }).catch(function(e) {}).finally(function() {
          o.hide()
        })
      }
      var s = this;
      e.$on("$ionicView.enter", function() {
        a()
      }), s.onFinish = function() {
        t.go("connections.list", {}, {
          reload: !0
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("nest", {
        abstract: !0,
        url: "/nest",
        template: n(423),
        controller: "NestCtrl as vm"
      })
    }]).controller("NestCtrl", ["$ionicHistory", "$state", function(e, t) {
      this.handleBack = function() {
        t.go("connections.list")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("nest.protect-configuration", {
        url: "/protect-configuration/:id",
        template: n(424),
        controller: "NestProtectConfigurationCtrl as vm",
        cache: !1,
        params: {
          id: null
        }
      })
    }]).controller("NestProtectConfigurationCtrl", ["NestConn", "Version", "$filter", "$state", "$scope", "$stateParams", "$window", "PopupFactory", "ScrollDelegate", "$translate", function(e, t, n, i, o, a, s, r, c, l) {
      function d(e) {
        r.alert({
          title: l.instant("FW_UPDATE_REQD_TITLE"),
          message: l.instant("FW_UPDATE_REQD_MESSAGE"),
          buttons: [{
            type: "button-cancel",
            text: l.instant("CANCEL"),
            onTap: function() {}
          }, {
            type: "button-ok",
            text: l.instant("UPDATE_NOW"),
            onTap: function() {
              i.go("rooms.switch-details", {
                id: e.id
              }), i.BACK_VIEW = "PROTECT_CONFIG"
            }
          }]
        })
      }
      var u = this,
        v = a.id;
      u.nestConnection = e, u.timeOptions = [{
        seconds: 60,
        text: "1 minute"
      }, {
        seconds: 120,
        text: "2 minutes"
      }, {
        seconds: 300,
        text: "5 minutes"
      }, {
        seconds: 600,
        text: "10 minutes"
      }, {
        seconds: 1800,
        text: "30 minutes"
      }, {
        seconds: 3600,
        text: "1 hour"
      }, {
        seconds: 7200,
        text: "2 hours"
      }, {
        seconds: 18e3,
        text: "5 hours"
      }, {
        seconds: 36e3,
        text: "10 hours"
      }, {
        seconds: 43200,
        text: "12 hours"
      }], s.cordova || (u.timeOptions = [{
        seconds: 5,
        text: "5 secs"
      }, {
        seconds: 10,
        text: "10 secs"
      }, {
        seconds: 60,
        text: "1 minute"
      }, {
        seconds: 600,
        text: "10 minutes"
      }]), u.selectedNestProtect = e.SELECTED_NEST_RESIDENCE.nestSmokes.find(function(e) {
        return e.device_id === v
      }), u.selectedNestProtect.devices.forEach(function(e) {
        e.supportsDuration = t.supportsDuration(e.version), e.expanded = !1, e.duration = e.duration || 600
      }), u.onClickCheckbox = function(e) {
        e.supportsDuration && (e.selected = !e.selected, e.selected || delete e.action, e.selected && !e.action && (e.action = "power"), e.selected && !e.expanded && (e.expanded = !0, c.resize()))
      }, u.onAlertClick = function(e) {
        d(e)
      }, u.toggleItem = function(e) {
        e.expanded = !e.expanded, c.resize()
      }, u.cancel = function() {
        i.go("nest.protect")
      }, u.save = function() {
        i.go("nest.protect")
      }, u.togglePower = function(e) {
        e.action = "power", e.selected = !0
      }, u.toggleBlink = function(e) {
        e.action = "blink", e.selected = !0
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(235)(e), n(234)(e), n(233)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("onboarding.device-type-selector", {
        url: "/device-type-selector",
        template: n(425),
        controller: "OnboardingDeviceTypeSelector as vm"
      })
    }]).controller("OnboardingDeviceTypeSelector", ["$state", "AppSession", function(e, t) {
      var n = this;
      n.appSession = t, n.imageUrlPrefix = "img/device-type-selections/", n.startDefaultDeviceSetupWizard = function() {
        e.go("switch-setup-wizard.get-ready-info")
      }, n.startLeapfrogSetupWizard = function() {
        e.go("breaker-panel-detail")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("onboarding.complete", {
        url: "/complete",
        template: n(426),
        controller: "OnboardingComplete as vm"
      })
    }]).controller("OnboardingComplete", ["$state", "OnBoardingSession", "AppSession", "ResidenceManager", "PopupFactory", "$translate", function(e, t, n, i, o, a) {
      function s() {
        t.residence && n.setSelectedResidence(t.residence), t.reset()
      }
      var r = this;
      r.startDeviceSetupWizard = function() {
        i.refreshResidenceList().then(function() {
          s(), e.go("onboarding.device-type-selector")
        }).catch(function() {
          o.alert({
            message: a.instant("GENERIC_ERROR"),
            title: a.instant("ERROR")
          })
        })
      }, r.onBoardingComplete = function() {
        i.refreshResidenceList().then(function(t) {
          s(), t.length > 1 ? e.go("residences.list") : e.go("rooms.list")
        }).catch(function() {
          o.alert({
            message: a.instant("GENERIC_ERROR"),
            title: a.instant("ERROR")
          })
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.controller("OnboardingCtrl", function() {})
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(239)(e), n(238)(e), n(237)(e), n(240)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("onboarding.add-residence-address-description", {
        url: "/add-residence-address-description",
        template: n(428),
        controller: "AddResidenceAddressDescription as vm"
      })
    }]).controller("AddResidenceAddressDescription", ["$state", "$translate", "OnBoardingSession", "$cordovaGeolocation", "ResidentialAccount", "AppSession", "ResidenceManager", "LocationService", "PopupFactory", "$ionicLoading", function(e, t, n, i, o, a, s, r, c, l) {
      function d(e) {
        _.extend(n.residence, e), n.residence.street = "", u.createResidence()
      }
      var u = this;
      u.logout = n.logout, u.grabLocation = function() {
        u.processing = !0, l.show({
          duration: 15e3
        }), r.getCurrentGeopoints().then(r.normalizeGeopoint).then(function(e) {
          c.confirm({
            title: t.instant("LOCATION_DETECTED"),
            message: "<span>" + e.locality + ", " + e.region + "<br>" + e.postcode + " " + e.country + "</span>",
            buttons: [{
              text: t.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: t.instant("CONTINUE"),
              type: "button-confirm",
              onTap: function() {
                d(e)
              }
            }]
          })
        }).catch(function(e) {
          c.alert({
            title: t.instant("CANNOT_GET_LOCATION_TITLE"),
            message: t.instant("CANNOT_GET_LOCATION_MESSAGE")
          })
        }).finally(function() {
          u.processing = !1, l.hide()
        })
      }, u.createResidence = function() {
        var i = a.currentUser.selectedResidentialAccount.id;
        u.processing = !0, o.residences.create({
          id: i
        }, n.residence).$promise.then(function(i) {
          i.error ? c.alert({
            title: t.instant("INVALID_RESIDENCE_TITLE"),
            message: t.instant("INVALID_RESIDENCE_MESSAGE")
          }) : i.name && (n.residence = i, e.go("onboarding.complete"))
        }).catch(function(e) {
          c.alert({
            message: t.instant("CANNOT_CREATE_RESIDENCE")
          })
        }).finally(function() {
          u.processing = !1, l.hide()
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("onboarding.add-residence-address", {
        url: "/add-residence-address",
        template: n(429),
        controller: "AddResidenceAddressCtrl as vm"
      })
    }]).controller("AddResidenceAddressCtrl", ["AppData", "ValidationService", "AppSession", "ResidentialAccount", "ResidenceManager", "OnBoardingSession", "$scope", "$rootScope", "$state", "$ionicLoading", function(e, t, n, i, o, a, s, r, c, l) {
      var d = this;
      d.onboardingSession = a, d.countries = e.countries, d.states = e.states, d.residence = {
        residentialAccountId: n.currentUser.selectedResidentialAccount.id
      }, d.createResidence = function(e) {
        if (s.residenceAddressForm.$invalid) return void(new t).checkFormValidity(s.residenceAddressForm);
        l.show({
          duration: 1e4
        }), e.name = a.residence.name, e.normalize = !0, i.residences.create({
          id: d.residence.residentialAccountId
        }, e).$promise.then(function(e) {
          if (e.error) {
            var t = e.error;
            return {
              errorMessage: t.message
            }
          }
          return a.residence = e, o.getResidences()
        }).then(function(e) {
          if (e.errorMessage) {
            var t = o.findInvalidFields(e.errorMessage);
            return void(d.invalidFields = t)
          }
          d.invalidFields = null, a.firstTimeExperience = !1, c.go("onboarding.complete")
        }).catch(function(e) {
          l.show({
            template: e.statusText,
            duration: 2e3
          })
        }).finally(l.hide)
      }, d.logout = a.logout
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("onboarding.add-residence", {
        url: "/add-residence/:param",
        template: n(430),
        controller: "AddResidenceCtrl as vm",
        params: {
          param: null
        }
      })
    }]).controller("AddResidenceCtrl", ["$scope", "$state", "$stateParams", "OnBoardingSession", "AppSession", "ResidentialAccount", "PopupFactory", "LimitErrorMessage", function(e, t, n, i, o, a, s, r) {
      var c = this;
      c.loading = !0;
      var l = o.getSelectedResidentialAccount();
      e.$on("$ionicView.beforeEnter", function() {
        c.onboardingSession = i, c.onboardingSession.residence = {
          name: o.currentUser.lastName + "'s Residence"
        }, a.residences({
          id: l.id
        }).$promise.then(function(e) {
          c.firstTime = !(e && e.length && e.length > 0), i.firstTimeExperience = c.firstTime, c.loading = !1
        }).catch(function(e) {})
      }), c.gotoAddResidenceAddress = function() {
        t.go("onboarding.add-residence-address-description")
      }, c.continue = function() {
        t.go("onboarding.add-residence-address-description")
      }, c.cancelAddResidence = i.cancelAddResidence
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("cancelResidenceSetup", {
      bindings: {},
      template: n(431),
      controllerAs: "vm",
      controller: ["OnBoardingSession", function(e) {
        this.cancelAddResidence = function() {
          e.cancelAddResidence()
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(242)(e), n(243)(e)
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("residences.edit", {
          url: "/edit/:id",
          template: n(432),
          controller: "ResidenceEditCtrl as vm",
          params: {
            id: null
          },
          resolve: {
            CurrentUser: ["AppSession", function(e) {
              return e.initialized.promise
            }]
          }
        })
      }]).controller("ResidenceEditCtrl", ["$scope", "$q", "$translate", "$state", "$ionicHistory", "RouteTracker", "$stateParams", "AppData", "Person", "FormValidationError", "Residence", "AppSession", "ResidenceManager", "PopupFactory", "LocationService", "$ionicLoading", "HomeAwayWizard", function(e, t, n, i, o, a, s, r, c, l, d, u, v, m, p, E, f) {
        function g(e, n) {
          D.processing = !0;
          var i = t.defer();
          return d.prototype$updateAttributes({
            id: e
          }, n).$promise.then(function(e) {
            e.error ? (b(), i.reject(e.error)) : (D.residence = e, i.resolve(e))
          }).catch(function(e) {
            i.reject(e)
          }).finally(function() {
            D.dirty = !1, D.processing = !1
          }), i.promise
        }

        function h() {
          var e = o.backView();
          if (e && e.stateName && e.stateName.indexOf("when-away") > -1) return void i.go("rooms.list");
          o.goBack()
        }

        function S(e) {
          D.selectedCountry = _.find(r.countries, {
            name: e.country
          }) || _.find(r.countries, {
            code: e.country
          }), D.selectedState = _.find(r.states, {
            name: e.region
          }) || _.find(r.states, {
            code: e.region
          })
        }

        function b() {
          m.alert({
            message: n.instant("RESIDENCE_DELETE_PERMISSION_ERROR"),
            title: n.instant("PERMISSION_ERROR")
          })
        }

        function I() {
          m.confirm({
            template: n.instant("UNSAVED_CHANGES_MESSAGE"),
            title: n.instant("UNSAVED_CHANGES"),
            buttons: [{
              text: n.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: n.instant("DISCARD"),
              type: "button-confirm",
              onTap: h
            }]
          })
        }

        function A() {
          var e = D.residence.name;
          return e && e.length >= 2
        }

        function T() {
          return d.findById({
            id: R
          }).$promise.then(function(e) {
            D.residence = e, S(e)
          })
        }

        function N() {
          return c.residentialPermissions({
            id: O,
            filter: {
              where: {
                residenceId: R
              }
            }
          }).$promise.then(function(e) {
            return e.length ? D.permission = e[0] : D.permission.access = "owner", e
          })
        }

        function C() {
          p.updateCurrentResidenceWithLocation(R).then(function(e) {
            D.residence = e, S(e)
          }).catch(function(e) {})
        }
        var D = this,
          R = Number(s.id),
          O = u.currentUser.id;
        D.countries = r.countries, D.states = r.states, D.permission = {}, D.session = u, D.dirty = !1, D.addressToggled = !0, D.homeAwayToggled = !0, e.$on("$ionicView.enter", function() {
          N().then(T)
        }), D.updateResidenceWithCurrentLocation = function() {
          D.dirty ? g(R, D.residence).then(C) : C()
        }, D.onSelectedCountryChange = function(e) {
          D.residence.country = e.name
        }, D.onSelectedStateChange = function(e) {
          D.residence.region = e.name
        }, D.onResidenceUpdate = function() {
          if (!A()) return void l.showMinLengthError();
          null === D.residence.status && (D.residence.status = "HOME"), E.show({
            duration: 2e3
          }), g(R, D.residence).finally(function() {
            E.hide()
          })
        }, D.deleteResidence = function(e) {
          function t() {
            d.deleteById({
              id: e.id
            }).$promise.then(function(e) {
              e.error ? b() : (v.refreshResidenceList(), i.go("residences.list"))
            })
          }
          if (1 === u.currentUser.residences.length) return void m.alert({
            title: n.instant("CANNOT_DELETE_RESIDENCE_TITLE"),
            message: n.instant("CANNOT_DELETE_RESIDENCE_MESSAGE"),
            buttons: [{
              text: n.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: n.instant("CREATE_A_RESIDENCE"),
              type: "button-ok",
              onTap: function() {
                var e = {
                  state: "residences.edit",
                  id: R
                };
                i.go("onboarding.add-residence", {
                  param: JSON.stringify(e)
                })
              }
            }]
          });
          m.confirm({
            message: n.instant("DELETE_RESIDENCE_WARNING"),
            title: n.instant("DELETE_ITEM", {
              name: e.name
            }),
            buttons: [{
              text: n.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: n.instant("DELETE"),
              type: "button-confirm",
              onTap: t
            }]
          })
        }, D.makeDirty = function() {
          D.dirty = !0
        }, D.onBackClick = function() {
          if ("admin" === D.permission.access) return void h();
          var e = A();
          D.dirty && e ? I() : D.dirty && !e ? l.showMinLengthError() : h()
        }, D.isUS = function(e) {
          return "United States" === e || "US" === e
        }, D.removeResidencePermission = function(e) {
          var t = u.currentUser.residences.length;
          c.residentialPermissions.destroyById({
            id: O,
            fk: D.permission.id
          }).$promise.then(function(e) {}).catch(function() {
            m.alert({
              title: n.instant("ERROR"),
              message: "Cannot revoke permission."
            })
          }).finally(function() {
            v.getUserOwnedResidences().then(function(e) {
              1 === t ? (u.removeCurrentlySelectedResidence(), i.go("onboarding.add-residence")) : i.go("residences.list")
            })
          })
        }, D.toggle = function(e) {
          "address" === e ? D.addressToggled = !D.addressToggled : D.homeAwayToggled = !D.homeAwayToggled
        }, D.startHomeAwayWizard = function() {
          f.resetWizard(), a.addRouteCurrent("WHEN_AWAY_FINISH"), a.addRouteCurrent("WHEN_HOME_BACK"), i.go("home-away-wizard.when-home", {
            id: R
          })
        }
      }])
    }
  }).call(t, "src/pages/residences/residence-edit.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("residences.list", {
          url: "/list",
          template: n(433),
          controller: "ResidenceListCtrl as vm"
        })
      }]).controller("ResidenceListCtrl", ["AppSession", "ResidenceManager", "Residence", "$ionicPopup", "$ionicModal", "$scope", function(e, t, n, i, o, a) {
        function s(e) {
          n.iotSwitches({
            id: e.id
          }).$promise.then(function(t) {
            e.iotSwitches = t
          })
        }
        var r = this;
        a.$on("$ionicView.beforeEnter", function() {
          t.getResidences().then(function(e) {
            r.residences = e, _.forEach(r.residences, s)
          })
        })
      }])
    }
  }).call(t, "src/pages/residences/residence-list.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(246)(e), n(245)(e), n(247)(e), n(248)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("rooms.add-device", {
        url: "/add-device/:id",
        views: {
          "tab-rooms": {
            template: n(434),
            controller: "RoomAddDeviceCtrl as vm"
          }
        },
        params: {
          id: null
        }
      })
    }]).controller("RoomAddDeviceCtrl", ["$scope", "$translate", "ResidentialRoom", "$stateParams", "Residence", "PopupFactory", "IotSwitch", "$q", "$state", function(e, t, n, i, o, a, s, r, c) {
      function l(e) {
        var t = [];
        return e.forEach(function(e) {
          var n = s.prototype$updateAttributes({
            id: e.id
          }, {
            residentialRoomId: u.room.id
          }).$promise;
          t.push(n)
        }), r.all(t)
      }

      function d() {
        return _.filter(u.devices, {
          selected: !0
        })
      }
      var u = this,
        v = i.id;
      u.loading = !0, u.room = {}, e.$on("$ionicView.beforeEnter", function() {
        u.loading = !0
      });
      var m = function() {
        u.loading = !1
      };
      n.findById({
        id: v
      }).$promise.then(function(e) {
        return u.room = e, o.iotSwitches({
          id: e.residenceId
        }).$promise
      }).then(function(e) {
        u.devices = _.filter(e, function(e) {
          return null === e.residentialRoomId || 0 === e.residentialRoomId
        })
      }).finally(m), u.addDevices = function() {
        var e = d();
        if (!e.length) return void a.alert({
          title: t.instant("SELECT_A_DEVICE"),
          message: t.instant("SELECT_A_DEVICE_MESSAGE")
        });
        l(e).then(function(e) {
          c.go("rooms.details", {
            roomId: u.room.id
          })
        }).catch(function(e) {
          a.alert({
            title: t.instant("ERROR"),
            message: t.instant("GENERIC_ERROR") + "(" + angular.toJson(e) + ")"
          })
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("rooms.add", {
          url: "/add/",
          views: {
            "tab-rooms": {
              template: n(435),
              controller: "RoomAddCtrl as vm"
            }
          }
        })
      }]).controller("RoomAddCtrl", ["$stateParams", "UIValidation", "$translate", "Residence", "PopupFactory", "AppSession", "Toast", "$state", "FormValidationError", function(e, t, n, i, o, a, s, r, c) {
        function l(e) {
          u.processing = !0, i.residentialRooms.create({
            id: e.residenceId
          }, e).$promise.then(function(e) {
            u.dirty = !1, r.go("rooms.list")
          }).catch(function(e) {
            u.dirty = !0, (_.get(e, "error.message") || "").containsIgnoreCase("duplicate") ? c.showDuplicateNameError() : o.alert({
              title: n.instant("CANNOT_CREATE_ROOM_TITLE"),
              message: n.instant("CANNOT_CREATE_ROOM_MESSAGE")
            })
          }).finally(function() {
            u.processing = !1
          })
        }

        function d() {
          return {
            valid: u.room.name && u.room.name.length >= 2
          }
        }
        var u = this;
        u.session = a, u.processing = !1, u.dirty = !0;
        var v = a.getSelectedResidence().id;
        u.room = {
          name: "",
          power: "ON",
          residenceId: v
        }, u.onSaveRoom = function(e) {
          var t = d().valid;
          if (!t) return void c.showMinLengthError();
          l(e)
        }
      }])
    }
  }).call(t, "src/pages/rooms/room-add.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("rooms.details", {
        url: "/details/:roomId",
        views: {
          "tab-rooms": {
            template: n(436),
            controller: "RoomDetailsCtrl as vm"
          }
        },
        params: {
          roomId: null
        }
      })
    }]).controller("RoomDetailsCtrl", ["$scope", "PopupFactory", "$state", "$translate", "FormValidationError", "$ionicActionSheet", "$ionicHistory", "$timeout", "$stateParams", "ResidentialRoom", "$ionicPopup", "SceneWizard", "$q", function(e, t, n, i, o, a, s, r, c, l, d, u, v) {
      function m() {
        l.deleteById({
          id: _
        }).$promise.finally(function() {
          n.go("rooms.list")
        })
      }

      function p() {
        var e = h.room.name;
        return {
          valid: e && e.length >= 2
        }
      }

      function E() {
        n.go("rooms.list")
      }

      function f() {
        t.confirm({
          template: i.instant("UNSAVED_CHANGES_MESSAGE"),
          title: i.instant("UNSAVED_CHANGES"),
          buttons: [{
            text: i.instant("CANCEL"),
            type: "button-cancel"
          }, {
            text: i.instant("DISCARD"),
            type: "button-confirm",
            onTap: E
          }]
        })
      }

      function g(e, t) {
        h.processing = !0;
        var n = v.defer();
        return l.prototype$updateAttributes({
          id: e
        }, t).$promise.then(function(e) {
          if (e.error && e.error.message && e.error.message.containsIgnoreCase("Duplicate")) return o.showDuplicateNameError(), void(h.room.name = h.safe.roomName);
          h.safe.roomName = e.name, n.resolve(e)
        }).catch(function() {
          n.reject(err)
        }).finally(function() {
          h.processing = !1, h.dirty = !1
        }), n.promise
      }
      var h = this,
        _ = c.roomId;
      h.visibleList = u.activeTab || "scenes", h.processing = !1, h.dirty = !1, h.room = {}, h.safe = {}, e.$on("$ionicView.beforeEnter", function(e, t) {
        t.enableBack = !0, h.loadRoom().finally(h.finish)
      }), h.finish = function() {
        h.newName = h.room.name
      }, h.makeDirty = function() {
        h.dirty = !0
      }, h.loadRoom = function() {
        var e = {
          include: ["iotSwitches", "residentialScenes"]
        };
        return l.findById({
          id: _,
          filter: e
        }).$promise.then(function(e) {
          return h.safe.roomName = e.name, h.room = e
        }).catch(function(e) {})
      }, h.onUpdateRoom = function(e) {
        if (!p().valid) return void o.showMinLengthError();
        var t = {
          name: e.name
        };
        g(h.room.id, t).then(function() {
          n.go("rooms.list")
        })
      }, h.showDevices = function() {
        h.visibleList = "devices", u.activeTab = "devices", h.loadRoom()
      }, h.showScenes = function() {
        h.visibleList = "scenes", u.activeTab = "scenes", h.loadRoom()
      }, h.openSceneWizard = function() {
        if (h.room.iotSwitches.length < 1) return void t.alert({
          title: i.instant("NO_ASSIGNED_DEVICES_TITLE"),
          message: i.instant("NO_ASSIGNED_DEVICES_FOR_SCENE"),
          buttons: [{
            text: i.instant("CANCEL"),
            type: "button-cancel"
          }, {
            text: i.instant("ASSIGN_DEVICES"),
            type: "button-confirm",
            onTap: function() {
              n.go("rooms.add-device", {
                id: h.room.id
              })
            }
          }]
        });
        u.selectedRoomId = _, n.go("scene-wizard.scene-assign-devices", {
          id: _
        })
      }, h.onBackClick = function() {
        var e = p().valid;
        h.dirty && e ? f() : (h.dirty, E())
      }, h.deleteRoom = function() {
        t.confirm({
          template: i.instant("DELETE_ROOM_WARNING"),
          title: i.instant("DELETE_ROOM"),
          buttons: [{
            text: i.instant("CANCEL"),
            type: "button-cancel"
          }, {
            text: i.instant("DELETE"),
            type: "button-confirm",
            onTap: m
          }]
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("rooms.list", {
          url: "/list",
          views: {
            "tab-rooms": {
              template: n(437),
              controller: "RoomListCtrl as vm"
            }
          }
        })
      }]).controller("RoomListCtrl", ["$scope", "$window", "$rootScope", "$ionicHistory", "PopupFactory", "$translate", "$state", "Residence", "AppSession", "SessionEvents", "$ionicPopup", "ResidentialRoom", "CoachMarks", function(e, t, n, i, o, a, s, r, c, l, d, u, v) {
        function m(e) {
          p.showAddSwitch = !1, p.showAddRoom = !1, p.rooms = [], p.switches = [];
          var t = e || p.session.getSelectedResidence().id;
          r.get({
            id: t
          }).$promise.then(function(e) {
            p.residence = e
          }), r.iotSwitches({
            id: t
          }).$promise.then(function(e) {
            p.switchesResolved = !0, e.forEach(function(e) {
              null !== e.residentialRoomId && 0 !== e.residentialRoomId || p.switches.push(e)
            }), p.showAddSwitch = e.length < 1
          }), r.residentialRooms({
            id: t,
            filter: {
              include: ["iotSwitches", "residentialScenes"]
            }
          }).$promise.then(function(e) {
            p.rooms = e, p.roomsResolved = !0, p.showAddRoom = e.length < 1
          })
        }
        var p = this;
        p.session = c, e.$on("URL_SCHEME_CLICK", function(e, t) {
          t.url_type
        }), e.$on("$ionicView.beforeEnter", function() {
          i.clearHistory(), m(), v.showBasicCoachMarks()
        }), e.$on(l.selectedResidenceChanged, function(e, t) {
          m(t.id)
        }), p.deleteRoom = function(e) {
          function t() {
            u.deleteById({
              id: e.id
            }).$promise.finally(function() {
              m()
            })
          }
          o.confirm({
            template: a.instant("DELETE_ROOM_WARNING"),
            title: a.instant("DELETE_ROOM"),
            buttons: [{
              text: a.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: a.instant("DELETE"),
              type: "button-confirm",
              onTap: t
            }]
          })
        }, p.onAddDevice = function() {
          s.go("switch-setup-wizard.get-ready-info")
        }
      }])
    }
  }).call(t, "src/pages/rooms/room-list.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(250)(e), n(251)(e), n(252)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("scene-wizard.scene-assign-devices", {
        url: "/scene-assign-devices/:id",
        template: n(438),
        controller: "SceneAssignDevicesCtrl as vm",
        params: {
          id: null
        },
        cache: !1
      })
    }]).controller("SceneAssignDevicesCtrl", ["$state", "$translate", "$scope", "$stateParams", "SceneWizard", "ResidentialRoom", "PopupFactory", "FormValidationError", function(e, t, n, i, o, a, s, r) {
      function c() {
        var e = l.sceneWizard.sceneName;
        return {
          valid: e && e.length >= 2
        }
      }
      var l = this;
      l.sceneWizard = o;
      var d = i.id;
      n.$on("$ionicView.beforeEnter", function() {
        l.sceneWizard.sceneName = "", a.iotSwitches({
          id: d
        }).$promise.then(function(e) {
          l.$resolved = !0, l.devices = e
        })
      }), l.continueNext = function() {
        var n = !l.sceneWizard.sceneName,
          i = _.filter(l.devices, {
            selected: !0
          }).length < 1;
        return n ? void s.alert({
          title: t.instant("NAME_YOUR_SCENE_TITLE"),
          message: t.instant("NAME_YOUR_SCENE_MESSAGE")
        }) : i ? void s.alert({
          title: t.instant("NO_DEVICE"),
          message: t.instant("NO_DEVICE_FOR_SCENE_MESSAGE")
        }) : c().valid ? (o.selectedDevices = _.filter(l.devices, {
          selected: !0
        }), void e.go("scene-wizard.scene-configure-devices", {
          id: d
        })) : void r.showMinLengthError()
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("scene-wizard.scene-configure-devices", {
        url: "/scene-configure-devices/:id",
        template: n(439),
        controller: "SceneConfigureDevicesCtrl as vm",
        cache: !1,
        params: {
          id: null
        }
      })
    }]).controller("SceneConfigureDevicesCtrl", ["$state", "$translate", "$stateParams", "SceneWizard", "$scope", "ResidentialRoom", "ResidentialScene", "$q", "$window", "PopupFactory", "IotSwitch", function(e, t, n, i, o, a, s, r, c, l, d) {
      function u() {
        return a.residentialScenes.create({
          id: E
        }, {
          name: p.sceneWizard.sceneName
        }).$promise
      }

      function v(e) {
        var t = [];
        return p.selectedDevices.map(m).forEach(function(n) {
          var i = s.residentialActions.create({
            id: e.id
          }, n);
          t.push(i)
        }), r.all(t)
      }

      function m(e) {
        return {
          targetModelName: "IotSwitch",
          targetModelId: e.id,
          targetProperty: "properties",
          targetValue: c.JSON.stringify({
            power: e.power,
            brightness: Number(e.brightness)
          })
        }
      }
      var p = this;
      p.sceneWizard = i;
      var E = n.id;
      o.$on("$ionicView.enter", function() {
        p.selectedDevices = i.selectedDevices
      }), p.takeSnapShot = function() {
        var e = [];
        p.selectedDevices.forEach(function(t) {
          d.findById({
            id: t.id
          }).$promise.then(function(t) {
            e.push(t)
          })
        }), p.selectedDevices = e
      }, p.continueNext = function() {
        u().then(v).then(function(e) {}).catch(function() {
          l.alert({
            title: t.instant("ERROR"),
            message: t.instant("GENERIC_ERROR")
          })
        }).finally(function() {
          i.clearData(), e.go("rooms.details", {
            roomId: E
          })
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.controller("SceneWizardCtrl", ["$scope", "$ionicHistory", "$state", function(e, t, n) {
      this.handleBack = function() {
        t.backView() ? t.goBack() : n.go("rooms.list")
      }
    }]).factory("SceneWizard", function() {
      var e = {};
      return e.clearData = function() {
        e.selectedRoomId = null, e.sceneName = "", e.selectedDevices = [], e.deviceStateData = [], e.activeTab = null
      }, e.clearData(), e
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(254)(e), n(255)(e), n(257)(e), n(256)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("rooms.add-scene-device", {
        url: "/add-scene-device/:roomId",
        views: {
          "tab-rooms": {
            template: n(441),
            controller: "AddSceneDeviceCtrl as vm"
          }
        },
        params: {
          roomId: null
        }
      })
    }]).controller("AddSceneDeviceCtrl", ["$state", "$scope", "$stateParams", "ResidentialRoom", "SceneData", function(e, t, n, i, o) {
      var a = this;
      a.sceneData = o;
      var s = n.roomId;
      o.getDevicesNotInCurrentScene(s).then(function(e) {
        a.devices = e, a.$resolved = !0
      }), a.onDeviceSelection = function(e) {
        var t = {
          device: e,
          action: null
        };
        e.newlySelected ? o.addToNewDevices(t) : o.removeFromNewDevices(t)
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("rooms.edit-scene", {
        url: "/edit-scene/:roomId/:sceneId",
        views: {
          "tab-rooms": {
            template: n(442),
            controller: "RoomEditSceneCtrl as vm"
          }
        },
        params: {
          roomId: null,
          sceneId: null
        },
        cache: !1
      })
    }]).controller("RoomEditSceneCtrl", ["$scope", "$state", "$stateParams", "$translate", "PopupFactory", "FormValidationError", "CustomBackHandler", "ResidentialScene", "IotSwitch", "SceneData", function(e, t, n, i, o, a, s, r, c, l) {
      function d() {
        r.deleteById({
          id: h
        }).$promise.then(function(e) {}).finally(function() {
          t.go("rooms.details", {
            roomId: g.roomId
          })
        })
      }

      function u(e) {
        g.processing = !0, r.prototype$updateAttributes({
          id: e.id
        }, {
          name: e.name
        }).$promise.then(function(e) {
          return l.saveSceneEdit()
        }).then(function(e) {}).catch(function(e) {}).finally(function() {
          g.dirty = !1, g.processing = !1, E()
        })
      }

      function v() {
        var e = g.scene.name;
        return {
          valid: e && e.length >= 2
        }
      }

      function m() {
        o.confirm({
          template: i.instant("UNSAVED_CHANGES_MESSAGE"),
          title: i.instant("UNSAVED_CHANGES"),
          buttons: [{
            text: i.instant("CANCEL"),
            type: "button-cancel"
          }, {
            text: i.instant("DISCARD"),
            type: "button-confirm",
            onTap: p
          }]
        })
      }

      function p() {
        s.handleBack()
      }

      function E() {
        g.sceneData.actionBlocks = [], r.findById({
          id: h,
          filter: {
            include: "residentialActions"
          }
        }).$promise.then(function(e) {
          g.scene = e, g.scene.residentialActions.forEach(f)
        })
      }

      function f(e) {
        var t = e.targetModelId;
        c.findById({
          id: t
        }).$promise.then(function(t) {
          if ("properties" === e.targetProperty) {
            var n = JSON.parse(e.targetValue);
            t.power = n.power, t.brightness = n.brightness
          } else t[e.targetProperty] = e.targetValue;
          var i = {
            device: t,
            action: e
          };
          g.sceneData.actionBlocks.push(i)
        })
      }
      var g = this,
        h = n.sceneId;
      g.roomId = n.roomId, g.sceneData = l, e.$on("$ionicView.enter", function() {
        E(), g.sceneData.newDevices.length && g.makeDirty()
      }), g.takeSnapShot = function() {
        function e(e) {
          var t = e.device;
          c.findById({
            id: t.id
          }).$promise.then(function(n) {
            t.power = n.power, t.brightness = n.brightness, e.action || (e.action = {}), e.action.targetProperty = "properties", e.action.targetValue = JSON.stringify({
              power: t.power,
              brightness: t.brightness
            })
          }).catch(function(e) {})
        }
        g.dirty = !0, g.sceneData.actionBlocks.forEach(e), g.sceneData.newDevices.forEach(e)
      }, g.showData = function() {}, g.onSceneUpdate = function(e) {
        if (!v().valid) return void a.showMinLengthError();
        u(e)
      }, g.makeDirty = function() {
        g.dirty = !0
      }, g.onBackClick = function() {
        var e = v().valid;
        g.dirty && e ? m() : (g.dirty, p())
      }, g.deleteScene = function() {
        o.confirm({
          template: i.instant("DELETE_SCENE_WARNING"),
          title: i.instant("DELETE_SCENE"),
          buttons: [{
            text: i.instant("CANCEL"),
            type: "button-cancel"
          }, {
            text: i.instant("DELETE"),
            type: "button-confirm",
            onTap: d
          }]
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.factory("SceneData", ["ResidentialRoom", "$q", "ResidentialScene", "$stateParams", "$ionicListDelegate", function(e, t, n, i, o) {
      function a() {
        var e = [];
        return v.actionBlocks.forEach(function(t) {
          var n = t.action;
          e.push(d(n))
        }), t.all(e)
      }

      function s(e) {
        if (o.closeOptionButtons(), !_.get(e, "action.targetModelId")) return void v.removeFromNewDevices(e);
        v.removeFromActionBlocks(e), n.residentialActions.destroyById({
          id: e.action.residentialSceneId,
          fk: e.action.id
        }).$promise.then(function(e) {}).catch(function(e) {})
      }

      function r() {
        var e = [];
        return v.newDevices.forEach(function(t) {
          var n = c(t.device);
          e.push(l(n))
        }), t.all(e)
      }

      function c(e) {
        return {
          targetProperty: "properties",
          targetValue: JSON.stringify({
            power: e.power,
            brightness: e.brightness
          }),
          targetModelId: e.id,
          targetModelName: "IotSwitch"
        }
      }

      function l(e) {
        return n.residentialActions.create({
          id: i.sceneId
        }, e).$promise.then(function(e) {
          return v.newDevices.forEach(function(t) {
            t.device.id === e.targetModelId && (t.action = e)
          }), e
        })
      }

      function d(e) {
        return n.residentialActions.updateById({
          id: e.residentialSceneId,
          fk: e.id
        }, e).$promise.then(function(e) {
          return e
        })
      }

      function u(e) {
        return _.filter(e, function(e) {
          for (var t = 0; t < v.actionBlocks.length; t++)
            if (v.actionBlocks[t].device.id == e.id) return !1;
          for (var t = 0; t < v.newDevices.length; t++)
            if (v.newDevices[t].device.id == e.id) return !1;
          return !0
        })
      }
      var v = {};
      return v.clear = function() {
        v.actionBlocks = v.actionBlocks || [], v.newDevices = [], v.deleteList = []
      }, v.clear(), v.getDevicesNotInCurrentScene = function(n) {
        var i = t.defer();
        return e.findById({
          id: n,
          filter: {
            include: "iotSwitches"
          }
        }).$promise.then(function(e) {
          var t = e.iotSwitches,
            n = u(t);
          i.resolve(n)
        }), i.promise
      }, v.pushToActionBlock = function(e) {
        v.actionBlocks = v.actionBlocks || [], v.actionBlocks.push(e)
      }, v.addToNewDevices = function(e) {
        v.newDevices = v.newDevices || [], v.newDevices.push(e)
      }, v.removeFromNewDevices = function(e) {
        _.remove(v.newDevices, function(t) {
          return t.device.id === e.device.id
        })
      }, v.removeFromActionBlocks = function(e) {
        _.remove(v.actionBlocks, function(t) {
          return t.device.id === e.device.id
        })
      }, v.addToDeleteList = function(e) {
        v.removeFromNewDevices(e), v.deleteList = v.deleteList || [], v.deleteList.push(e)
      }, v.saveSceneEdit = function() {
        var e = t.defer();
        return a().then(function(e) {
          return r()
        }).then(function(t) {
          e.resolve(t)
        }).catch(function(t) {
          e.reject(t)
        }).finally(function() {
          v.actionBlocks = _.union(v.actionBlocks, v.newDevices), v.clear()
        }), e.promise
      }, v.removeAction = function(e) {
        s(e)
      }, v
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.component("sceneWizardDevice", {
      template: n(443),
      controllerAs: "vm",
      bindings: {
        switch: "=",
        action: "=",
        onChange: "&"
      },
      controller: ["SceneData", function(e) {
        function t() {
          n.action || (n.action = {});
          var e = JSON.stringify({
            power: n.switch.power,
            brightness: n.switch.brightness
          });
          n.action.targetProperty = "properties", n.action.targetValue = e, n.onChange()
        }
        var n = this;
        n.sceneData = e, n.accordion = {
          expanded: !1
        }, n.toggleAccordion = function() {
          n.switch.canSetLevel && (n.accordion.expanded = !n.accordion.expanded)
        }, n.toggleStatus = function(e) {
          e.power = "ON" === e.power ? "OFF" : "ON", e.brightness = "OFF" === e.power ? 0 : n.switch.previousBrightnessLevel || n.switch.brightness, t()
        }, n.trackRange = function() {
          n.switch.previousBrightnessLevel = n.switch.brightness, t()
        }
      }]
    })
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(259)(e), n(260)(e), n(261)(e), n(263)(e), n(264)(e), n(265)(e), n(262)(e)
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("schedule-setup-wizard.add-devices", {
          url: "/add-devices",
          template: n(444),
          controller: "ScheduleSetupWizardAddDevicesCtrl as vm"
        })
      }]).controller("ScheduleSetupWizardAddDevicesCtrl", ["$state", "Residences", "AppSession", "$scope", "Residence", "ScheduleSetupDataService", function(e, t, n, i, o, a) {
        function s() {
          a.SELECTED_DEVICES.forEach(function(e) {
            _.find(a.ACTIONS, {
              targetModelId: e.id
            }) && (e.selected = !0)
          })
        }

        function r() {
          a.ACTIONS = _.filter(a.SELECTED_DEVICES, {
            selected: !0
          }).map(c)
        }

        function c(e) {
          return {
            targetModelName: "IotSwitch",
            targetModelId: e.id,
            targetModelProperty: "properties",
            targetValueAsObj: {
              power: "ON",
              brightness: 100
            },
            targetValue: JSON.stringify({
              power: "ON",
              brightness: 100
            }),
            name: e.name,
            connected: !0,
            power: "ON",
            brightness: 100,
            canSetLevel: e.canSetLevel,
            maxLevel: e.maxLevel,
            minLevel: e.minLevel
          }
        }
        var l = this;
        l.scheduleSetupDataService = a, i.$on("$ionicView.enter", function() {
          o.iotSwitches({
            id: n.getSelectedResidence().id
          }).$promise.then(function(e) {
            a.SELECTED_DEVICES = e, s()
          })
        }), l.onBack = function() {
          e.go("schedule-setup-wizard.name-custom")
        }, l.onContinue = function() {
          r(), a.ACTIONS.length > 0 && e.go("schedule-setup-wizard.set-devices-state")
        }
      }])
    }
  }).call(t, "src/pages/schedule-setup-wizard/add-devices.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("schedule-setup-wizard.create-info", {
          url: "/create-info",
          template: n(445),
          controller: "ScheduleSetupWizardCreateInfoCtrl as vm"
        })
      }]).controller("ScheduleSetupWizardCreateInfoCtrl", ["$state", "ScheduleEditDataService", "ScheduleSetupDataService", function(e, t, n) {
        var i = this;
        i.onBack = function() {
          n.reset(), e.go("schedules.list")
        }, i.onContinue = function() {
          e.go("schedule-setup-wizard.name-custom")
        }, i.skipContinue = function() {
          t.reset(), e.go("schedules.edit")
        }
      }])
    }
  }).call(t, "src/pages/schedule-setup-wizard/create-info.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("schedule-setup-wizard.name-custom", {
          url: "/name-custom",
          template: n(446),
          controller: "ScheduleSetupWizardNameCustomCtrl as vm"
        })
      }]).controller("ScheduleSetupWizardNameCustomCtrl", ["$scope", "$state", "ScheduleSetupDataService", "PopupFactory", "$translate", "FormValidationError", function(e, t, n, i, o, a) {
        function s() {
          var e = r.scheduleSetupDataService.SCHEDULE.name;
          return {
            valid: e && e.length >= 2
          }
        }
        var r = this;
        r.scheduleSetupDataService = n, r.onBack = function() {
          t.go("schedule-setup-wizard.create-info")
        }, r.onContinue = function() {
          if (!s().valid) return void a.showMinLengthError();
          t.go("schedule-setup-wizard.add-devices")
        }
      }])
    }
  }).call(t, "src/pages/schedule-setup-wizard/name-custom.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("schedule-setup-wizard.set-devices-state", {
          url: "/set-devices-state",
          template: n(447),
          controller: "ScheduleSetupWizardSetDevicesStateCtrl as vm"
        })
      }]).controller("ScheduleSetupWizardSetDevicesStateCtrl", ["$scope", "$state", "ScheduleSetupDataService", function(e, t, n) {
        function i() {
          n.ACTIONS.forEach(function(e) {
            e.targetValue = JSON.stringify(e.targetValueAsObj)
          })
        }
        var o = this;
        o.scheduleSetupDataService = n, o.itemConfig = {
          borderBottomClass: "line-b",
          accordionExpanded: !0,
          itemClass: "item-schedule-b",
          accordionClass: "item-schedule-b",
          collapsible: !1
        }, o.onBack = function() {
          t.go("schedule-setup-wizard.add-devices")
        }, o.onContinue = function() {
          i(), t.go("schedule-setup-wizard.set-times")
        }
      }])
    }
  }).call(t, "src/pages/schedule-setup-wizard/set-devices-state.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("schedule-setup-wizard.set-frequency", {
          url: "/set-frequency",
          template: n(448),
          controller: "ScheduleSetupWizardSetFrequencyCtrl as vm"
        })
      }]).controller("ScheduleSetupWizardSetFrequencyCtrl", ["$state", "ScheduleSetupDataService", "PopupFactory", "LimitErrorMessage", "$translate", function(e, t, n, i, o) {
        function a() {
          t.SCHEDULE.dayOfWeek = c.days
        }

        function s() {
          c.processing = !0, t.saveCachedSchedule().then(function(t) {
            e.go("schedules.list")
          }).catch(function(t) {
            r(t).then(function() {
              e.go("schedules.list")
            })
          }).finally(function() {
            c.processing = !1, t.reset()
          })
        }

        function r(e) {
          var t = _.get(e, "error.message") || "";
          return t.containsIgnoreCase("authorization") ? n.alert({
            title: o.instant("CANNOT_CREATE_SCHEDULE_TITLE"),
            message: o.instant("CANNOT_CREATE_SCHEDULE_MESSAGE")
          }) : t.containsIgnoreCase("limit") ? i.showScheduleLimitError() : n.alert({
            title: o.instant("CANNOT_CREATE_SCHEDULE_TITLE"),
            message: o.instant("CANNOT_CREATE_SCHEDULE_MESSAGE")
          })
        }
        var c = this;
        c.days = _.range(0, 7).map(function() {
          return !0
        }), c.onBack = function() {
          e.go("schedule-setup-wizard.set-times")
        }, c.onContinue = function() {
          c.processing || (a(), s())
        }
      }])
    }
  }).call(t, "src/pages/schedule-setup-wizard/set-frequency.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("schedule-setup-wizard.set-times", {
          url: "/set-times",
          template: n(449),
          controller: "ScheduleSetupWizardSetTimesCtrl as vm"
        })
      }]).controller("ScheduleSetupWizardSetTimesCtrl", ["$state", "ScheduleSetupDataService", "ScrollDelegate", function(e, t, n) {
        function i() {
          var e = o.scheduleOnTime ? _.find(o.scheduleOnTime, {
              selected: !0
            }).schedule : void 0,
            n = o.scheduleOffTime ? _.find(o.scheduleOffTime, {
              selected: !0
            }).schedule : void 0;
          o.setOffTime || (n = void 0), t.SCHEDULE.scheduleOnTime = e, t.SCHEDULE.scheduleOffTime = n
        }
        var o = this;
        o.setOnTime = !0, o.setOffTime = t.HAS_END_TIME, o.scheduleSetupDataService = t, o.onBack = function() {
          e.go("schedule-setup-wizard.set-devices-state")
        }, o.onContinue = function() {
          i(), e.go("schedule-setup-wizard.set-frequency")
        }, o.adjustScrolling = function() {
          n.resize()
        }, o.onSelectStartTime = function() {}, o.onSelectEndTime = function() {
          o.setOffTime = !o.setOffTime, o.scheduleSetupDataService.HAS_END_TIME = o.setOffTime, o.adjustScrolling()
        }
      }])
    }
  }).call(t, "src/pages/schedule-setup-wizard/set-times.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("schedule-setup-wizard", {
        url: "/schedule-setup-wizard",
        template: n(450),
        controller: "ScheduleSetupWizardCtrl as vm",
        abstract: !0,
        resolve: {
          Residences: ["ResidenceManager", function(e) {
            return e.initialized.promise
          }]
        }
      })
    }]).controller("ScheduleSetupWizardCtrl", function() {})
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(267)(e), n(269)(e), n(268)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("schedules.list", {
        url: "/list",
        views: {
          "tab-schedules": {
            template: n(451),
            controller: "ScheduleListCtrl as vm"
          }
        }
      })
    }]).controller("ScheduleListCtrl", ["$scope", "$ionicHistory", "AppSession", "$translate", "PopupFactory", "SessionEvents", "$state", "Residence", "ResidentialSchedule", "ScheduleManager", function(e, t, n, i, o, a, s, r, c, l) {
      function d(e) {
        u(), v(e)
      }

      function u() {
        r.get({
          id: n.getSelectedResidence().id
        }).$promise.then(function(e) {
          m.residence = e
        })
      }

      function v(e) {
        m.selectedResidence = e || n.getSelectedResidence(), r.residentialSchedules({
          id: m.selectedResidence.id
        }).$promise.then(function(e) {
          m.schedules = e, _.forEach(m.schedules, function(e) {
            m.set_enabledStatus(e)
          }), m.$resolved = !0
        })
      }
      var m = this;
      m.session = n, m.showAddButton = !0, e.$on("$ionicView.beforeEnter", function() {
        t.clearHistory(), d()
      }), e.$on(a.selectedResidenceChanged, function(e, t) {
        d(t)
      }), e.$on("schedules.refresh", function() {
        d()
      }), m.set_enabledStatus = function(e) {
        e.enabled = !e.disabled
      }, m.checkResidenceLocation = function() {
        l.attemptAddSchedule()
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("schedules.add-devices", {
          url: "/add-devices/:id",
          template: n(6),
          views: {
            "tab-schedules": {
              template: n(6),
              controller: "SchedulesAddDevicesCtrl as vm"
            }
          },
          params: {
            id: null
          }
        })
      }]).controller("SchedulesAddDevicesCtrl", ["ScheduleEditDataService", "Residence", "$state", "$stateParams", "$scope", "AppSession", "$q", function(e, t, n, i, o, a, s) {
        function r(e) {
          var t = e.map(c);
          return t.forEach(function(e) {
            var t = _.find(l.scheduleEditDataService.SCHEDULE.residentialActions, {
                targetModelId: e.targetModelId
              }),
              n = _.find(l.scheduleEditDataService.ACTIONS_QUEUED, {
                targetModelId: e.targetModelId
              });
            n ? (e.selected = !0, e.queued = !0) : t ? (e.id = t.id, e.selected = !0, e.saved = !0) : e.fresh = !0
          }), l.availableActions = t, l.$resolved = !0, t
        }

        function c(e) {
          var t = {
            power: "ON",
            brightness: 100
          };
          return {
            targetModelName: "IotSwitch",
            targetModelId: e.id,
            targetProperty: "properties",
            targetValueAsObj: t,
            targetValue: JSON.stringify(t),
            residentialScheduleId: d,
            name: e.name,
            connected: !0,
            power: "ON",
            brightness: e.brightness,
            canSetLevel: e.canSetLevel
          }
        }
        var l = this,
          d = i.id,
          u = a.getSelectedResidence().id;
        l.dirty = !1, l.scheduleEditDataService = e, l.availableActions = [], l.unavailableActions = [], o.$on("$ionicView.enter", function() {
          t.iotSwitches({
            id: u
          }).$promise.then(function(e) {
            r(e)
          })
        }), l.onSaveSchedule = function() {
          var t = _.filter(l.availableActions, {
            selected: !0,
            fresh: !0
          });
          l.scheduleEditDataService.ACTIONS_QUEUED = _.union(l.scheduleEditDataService.ACTIONS_QUEUED, t);
          var i = [];
          l.availableActions.forEach(function(t) {
            if (!1 === t.selected && (t.queued && _.remove(l.scheduleEditDataService.ACTIONS_QUEUED, {
                targetModelId: t.targetModelId
              }), t.saved)) {
              var n = e.deleteAction(t);
              i.push(n)
            }
          }), s.all(i).then(function(e) {
            n.go("schedules.edit", {
              id: d
            })
          })
        }, l.onBackClick = function() {
          n.go("schedules.edit", {
            id: d
          })
        }, l.makeDirty = function() {
          l.dirty = !0
        }
      }])
    }
  }).call(t, "src/pages/schedules/schedules-add-devices.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("schedules.edit", {
          url: "/edit/:id",
          template: n(7),
          views: {
            "tab-schedules": {
              template: n(7),
              controller: "SchedulesEditCtrl as vm"
            }
          },
          params: {
            id: null
          }
        })
      }]).controller("SchedulesEditCtrl", ["ScheduleEditDataService", "$state", "$stateParams", "$scope", "ScrollDelegate", "AppData", "PopupFactory", "$translate", "$ionicLoading", "ResidentialSchedule", "FormValidationError", function(e, t, n, i, o, a, s, r, c, l, d) {
        function u() {
          l.destroyById({
            id: e.SCHEDULE.id
          }).$promise.then(function(e) {}).catch(function(e) {}).finally(function() {
            t.go("schedules.list")
          })
        }

        function v() {
          b.initialOnTime = {
            timeType: "SUNSET",
            minute: 0
          }, b.initialOffTime = {
            timeType: "SUNSET",
            minute: 0
          }, b.setOnTime = !0, b.setOffTime = !1, b.$resolved = !0, b.dirty = !0, e.SCHEDULE.dayOfWeek = a.weekDays.map(function() {
            return !0
          }), e.SCHEDULE.residentialActions = [], b.adjustScrolling(), E()
        }

        function m(e) {
          b.setOnTime = !0, b.setOffTime = e.endTime && !e.endTime.disabled, b.$resolved = !0, b.adjustScrolling(), b.initialOnTime = {
            timeType: e.timeType,
            minute: e.minute,
            hour: e.hour
          }, e.endTime && (b.initialOffTime = {
            timeType: e.endTime.timeType,
            minute: e.endTime.minute,
            hour: e.endTime.hour
          }), b.safe.scheduleName = e.name, E()
        }

        function p() {
          var t = _.find(b.scheduleOnTime, {
              selected: !0
            }).schedule,
            n = _.find(b.scheduleOffTime, {
              selected: !0
            }).schedule;
          e.SCHEDULE.timeType = t.timeType, e.SCHEDULE.hour = t.hour, e.SCHEDULE.minute = t.minute, e.SCHEDULE.endTime = n, e.SCHEDULE.endTime.disabled = !b.setOffTime
        }

        function E() {
          e.CACHED_TIME_SELECTION.scheduleOnTime && (b.initialOnTime = e.CACHED_TIME_SELECTION.scheduleOnTime), e.CACHED_TIME_SELECTION.scheduleOffTime && (b.initialOffTime = e.CACHED_TIME_SELECTION.scheduleOffTime), e.CACHED_TIME_SELECTION = {}
        }

        function f() {
          e.SCHEDULE.id ? e.getScheduleById(e.SCHEDULE.id).then(function(e) {
            m(e)
          }) : v(), e.ACTIONS_QUEUED.length && (b.dirty = !0)
        }

        function g() {
          var e = b.scheduleEditDataService.SCHEDULE.name;
          return {
            valid: e && e.length >= 2
          }
        }

        function h() {
          s.confirm({
            template: r.instant("UNSAVED_CHANGES_MESSAGE"),
            title: r.instant("UNSAVED_CHANGES"),
            buttons: [{
              text: r.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: r.instant("DISCARD"),
              type: "button-confirm",
              onTap: function() {
                S()
              }
            }]
          })
        }

        function S() {
          t.go("schedules.list"), e.reset()
        }
        var b = this;
        e.SCHEDULE.id = n.id, b.scheduleEditDataService = e, b.itemConfig = {
          borderBottomClass: "line-a"
        }, b.safe = {}, i.$on("$ionicView.enter", function() {
          f()
        }), b.onAddDevices = function() {
          e.CACHED_TIME_SELECTION = {
            scheduleOnTime: _.find(b.scheduleOnTime, {
              selected: !0
            }).schedule,
            scheduleOffTime: _.find(b.scheduleOffTime, {
              selected: !0
            }).schedule
          }, t.go("schedules.add-devices", {
            id: b.scheduleEditDataService.SCHEDULE.id
          })
        }, b.onBackClick = function() {
          var t = g().valid;
          b.dirty && t ? h() : e.ACTIONS_QUEUED.length ? h() : S()
        }, b.onSaveSchedule = function() {
          if (!g().valid) return void d.showMinLengthError();
          b.processing = !0, p(), c.show(), e.updateOrCreate().then(function(e) {
            b.processing = !1, b.dirty = !1, t.go("schedules.list")
          }).finally(function() {
            c.hide()
          })
        }, b.adjustScrolling = function() {
          o.resize()
        }, b.onDeleteAction = function(t) {
          e.deleteAction(t)
        }, b.onDeleteQueuedAction = function(t) {
          _.remove(e.ACTIONS_QUEUED, {
            targetModelId: t.targetModelId
          })
        }, b.makeDirty = function() {
          b.dirty = !0, b.scheduleEditDataService.SCHEDULE_DIRTY = !0
        }, b.makeActionDirty = function(e) {
          b.dirty = !0, e.dirty = !0
        }, b.onSelectStartTime = function() {}, b.onSelectEndTime = function() {
          b.setOffTime = !b.setOffTime, b.adjustScrolling(), b.makeDirty()
        }, b.deleteSchedule = function() {
          s.confirm({
            template: r.instant("DELETE_SCHEDULE_WARNING"),
            title: r.instant("DELETE_SCHEDULE"),
            buttons: [{
              text: r.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: r.instant("DELETE"),
              type: "button-confirm",
              onTap: u
            }]
          })
        }
      }])
    }
  }).call(t, "src/pages/schedules/schedules-edit.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(272)(e), n(271)(e), n(273)(e), n(274)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("accounts", {
        url: "/accounts",
        template: n(452),
        abstract: !0
      })
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("residences", {
        url: "/residences",
        controller: "ResidencesCtrl as vm",
        template: n(455),
        abstract: !0
      })
    }]).controller("ResidencesCtrl", ["$state", function(e) {
      this.handleBack = function() {
        e.go("rooms.list")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.controller("SetupsCtrl", ["$scope", "$ionicHistory", "$state", function(e, t, n) {
      this.handleBack = function() {
        var e = t.backView(),
          i = n.current.name;
        e && "setups.add-activity-name" !== i ? t.goBack() : n.go("activities.list", {}, {
          reload: !0
        })
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.controller("TabsCtrl", ["$scope", "$state", "$ionicActionSheet", "$ionicModal", "$localStorage", "$ionicLoading", "Person", "LoopBackAuth", "AccountManager", "LevDBChanges", "AppSession", "CoachMarks", "Browser", function(e, t, i, o, a, s, r, c, l, d, u, v, m) {
      var p = this;
      p.session = u, p.isBetaUser = !!p.session.currentUser.isWifiBetaUser, p.appInfo = n(9), p.doLogout = function() {
        s.show({
          duration: 2e3
        }), l.logout().finally(function() {
          u.destroy(), d.disconnectSocket(), s.hide(), t.go("accounts.login", {}, {
            reload: !0
          })
        })
      }, p.openSupportPage = function() {
        t.go("support.landing")
      }, p.openUsersList = function() {
        t.go("users.list")
      }, p.openConnectionsList = function() {
        t.go("connections.list")
      }, p.openResidenceList = function() {
        t.go("residences.list")
      }, p.showBasicCoachMarks = function() {
        v.showBasicCoachMarks({
          tour: !0
        })
      }, p.openHomeAwayPage = function() {
        t.go("residences.edit", {
          id: p.session.currentUser.selectedResidence.id
        })
      }, p.openPrintUtil = function() {
        a.LOAD_CENTER_PRINT_CACHE && a.PRINT_BREAKERS ? t.go("enter-breakers-print-info") : t.go("enter-panel-print-info")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("support.feedback", {
          url: "/feedback",
          template: n(457),
          controller: "SupportFeedback as vm"
        })
      }]).controller("SupportFeedback", ["$state", "PopupFactory", "SupportFactory", "$translate", function(e, t, n, i) {
        function o() {
          t.alert({
            title: i.instant("THANKS"),
            message: i.instant("FEEDBACK_SENT_MESSAGE")
          }), a.feedback.message = ""
        }
        var a = this;
        a.sendFeedback = function() {
          a.feedback.category = "Feedback", n.sendUserFeedback(a.feedback).then(function(e) {}).catch(function(e) {}).finally(o)
        }
      }])
    }
  }).call(t, "src/pages/support-pages/support-feedback.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("support.landing", {
        url: "/landing",
        template: n(458),
        controller: "SupportLanding as vm"
      })
    }]).controller("SupportLanding", ["$state", "Browser", function(e, t) {
      var i = this,
        o = n(10);
      i.sendFeedback = function() {
        e.go("support.feedback")
      }, i.articlesAndHelp = function() {
        var e = o.support_page_url;
        t.openURLExternal(e)
      }, i.reportAProblem = function() {
        e.go("support.report-problem")
      }, i.openEula = function(e) {
        var n = o.web_app_url + "home/#/eula/" + e;
        t.openURLExternal(n)
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("support.report-problem", {
        url: "/report-problem",
        template: n(459),
        controller: "SupportReportProblem as vm"
      })
    }]).controller("SupportReportProblem", ["$state", "SupportFactory", "PopupFactory", "$translate", function(e, t, n, i) {
      function o() {
        n.alert({
          title: i.instant("THANKS"),
          message: i.instant("REPORT_SENT_MESSAGE")
        }), a.report.message = ""
      }
      var a = this;
      a.reportProblem = function() {
        var e = a.report;
        e.category = "ProblemReport", e.allowResponse = !0, t.sendUserFeedback(e).then().catch().finally(o)
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(282)(e), n(280)(e), n(288)(e), n(289)(e), n(279)(e), n(283)(e), n(284)(e), n(286)(e), n(287)(e), n(285)(e), n(281)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("switch-setup-wizard.connect-wifi-instruction", {
        url: "/connect-wifi-instruction",
        template: n(460),
        controller: "ConnectWifiInstruction as vm",
        cache: !1
      })
    }]).controller("ConnectWifiInstruction", ["NativePlatformSettings", "$timeout", "$translate", "$ionicHistory", "$avatarWifiWizard", "SSIDListener", "$state", "$scope", "AlertFactory", "PopupFactory", "WiFiDevice", "$q", "DeviceEnrollmentDataService", function(e, t, i, o, a, s, r, c, l, d, u, v, m) {
      function p() {
        var e = ionic.Platform.platform(),
          t = "android" === e;
        h.platform = e || "ios", h.shouldShowContinue = t, t && a.enforceWiFiUsage()
      }

      function E() {
        s.startListening(function(e) {
          e.is_leviton_device && (m.connectedAccessory = e, s.stopListening(), l.pop({
            message: i.instant("CONNECTING_TO_DEVICE") + "...",
            duration: 7e3
          }), t(function() {
            f()
          }, 5e3))
        }, function(e) {
          i.instant("GENERIC_ERROR");
          "INVALID_NETWORK_TYPE" === e.type ? i.instant("CANNOT_DETECT_WIFI") : "PLUGIN_FAIL_ERROR" === e.type && i.instant("CANNOT_DETERMINE_SSID", {
            error: e.type
          })
        })
      }

      function f() {
        var e = [u.getSerialNumber(), u.setupDeviceConnection(), u.getDeviceFWVersion()];
        v.all(e).then(function(e) {
          var t = "error" === e[0].type,
            n = "error" === e[1].type,
            i = "error" === e[2].type;
          if (t && n && i) return void g("ALL_FAIL");
          if (t ? g("ERROR_SERIAL_NUMBER") : n ? g("ERROR_DEVICE_CONNECTION") : i && g("ERROR_FW_VERSION"), !(t || n || i)) {
            m.connectedAccessory.serialNumber = e[0];
            var o = e[2];
            m.supportsSpecialChars = u.handlesSpecialCharacter(o), m.supportsEncryption = u.supportsEncryption(o), r.go("switch-setup-wizard.select-discovered-network")
          }
        }).catch(function(e) {
          g(e)
        })
      }

      function g(e) {
        e = e || "ALL_FAIL";
        var t = {},
          i = n(461);
        "ALL_FAIL" === e ? t = {
          title: "Can’t Communicate with Device",
          message: "Something is preventing communication with your Leviton device. Check your mobile device’s Wi-Fi connection and try again. "
        } : "ERROR_SERIAL_NUMBER" === e ? t = {
          title: "Can’t Get the Serial Number of your Device",
          message: "Something is preventing communication with your Leviton device. Check your mobile device’s Wi-Fi connection and try again."
        } : "ERROR_DEVICE_CONNECTION" === e ? t = {
          title: "Can’t Set the Server Info",
          message: "We are having difficulty enrolling your Leviton device. Check your mobile device’s Wi-Fi connection and try again. "
        } : "ERROR_FW_VERSION" === e && (t = {
          title: "Can’t Get your Device’s Firmware Version",
          message: "This is preventing us from enrolling your device. Check your mobile device’s Wi-Fi connection and try again. "
        }), t.message = t.message + i, d.alert(t).then(function() {
          r.go("switch-setup-wizard.get-ready-info"), m.resetData()
        })
      }
      var h = this;
      h.imageSources = {
        android: "./img/wifi-screenshot-android.png",
        ios: "./img/wifi-screenshot-ios.png"
      }, h.goBack = function() {
        r.go("switch-setup-wizard.device-setup-info")
      }, c.$on("$ionicView.beforeEnter", function() {
        p(), m.resetData(), E()
      }), c.$on("$stateChangeStart", function() {
        s.stopListening()
      }), h.cancelSetup = function() {
        m.resetData(), r.go("rooms.list", {}, {
          reload: !0
        })
      }, h.wifiSetting = function() {
        e.showWifiSetting()
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("switch-setup-wizard.device-rename", {
          url: "/device-rename",
          template: n(462),
          controller: "DeviceConnectedInfo as vm",
          cache: !1
        })
      }]).controller("DeviceConnectedInfo", ["$translate", "$avatarWifiWizard", "AlertFactory", "DeviceEnrollmentDataService", "IotSwitch", "$state", "PopupFactory", "FormValidationError", function(e, t, n, i, o, a, s, r) {
        function c() {
          return {
            valid: d.switchName && d.switchName.length >= 2
          }
        }

        function l(e) {
          d.processing || (d.processing = !0, o.prototype$updateAttributes({
            id: i.savedDevice.id
          }, {
            name: d.switchName
          }).$promise.then(function(t) {
            t.name && e && e()
          }).catch(function(e) {
            var t = e.error;
            d.switchName = d.safe.switchName, t.message && t.message.containsIgnoreCase("duplicate") && r.showDuplicateNameError()
          }).finally(function() {
            d.processing = !1
          }))
        }
        var d = this;
        d.deviceEnrollmentDataService = i, d.processing = !1, d.switchName = (i.savedDevice || {}).name, d.safe = {
          switchName: d.switchName + ""
        }, d.identifyDevice = function() {
          o.prototype$updateAttributes({
            id: i.savedDevice.id
          }, {
            identify: 3
          }).$promise.then(function(e) {})
        }, d.continueNext = function() {
          return _.get(i, "savedDevice.id") ? c().valid ? void l(function() {
            a.go("switch-setup-wizard.device-setup-completion")
          }) : void r.showMinLengthError() : void s.alert({
            title: e.instant("ERROR"),
            message: e.instant("DEVICE_CANNOT_BE_SAVED")
          }).then(function() {
            a.go("switch-setup-wizard.get-ready-info")
          })
        }, d.renameDevice = l
      }])
    }
  }).call(t, "src/pages/switch-setup-wizard/device-rename.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("switch-setup-wizard.device-setup-completion", {
        url: "/device-setup-completion",
        template: n(463),
        controller: "DeviceSetupCompletion as vm",
        cache: !1
      })
    }]).controller("DeviceSetupCompletion", ["DeviceEnrollmentDataService", "OTAUpdate", "$timeout", "Version", "$filter", "$ionicModal", "$scope", "$state", function(e, t, n, i, o, a, s, r) {
      var c = this;
      c.deviceEnrollmentDataService = e, t.updatePrompted = !1, c.switch = e.savedDevice, s.$on("$ionicView.enter", function() {
        c.checkIfShouldUpdateFirmware() && !t.updatePrompted && c.showFirmwareUpdateModal()
      }), c.showFirmwareUpdateModal = function() {
        t.updateModal = a.fromTemplate('<firmware-update-modal switch="vm.switch" show-message="true"></firmware-update-modal>', {
          scope: s,
          backdropClickToClose: !1,
          hardwareBackButtonClose: !1
        }), t.updatePrompted = !0, t.updateModal.show()
      }, c.checkIfShouldUpdateFirmware = function() {
        var e = o("getVersionNumber")(c.switch.version || "0");
        return 1 === i.compareVersions("1.0.2", e)
      }, c.onFinish = function() {
        r.go("rooms.list", {}, {
          reload: !0
        }), t.updatePrompted = !1
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("switch-setup-wizard.device-setup-info", {
        url: "/device-setup-info",
        template: n(464),
        controller: "DeviceSetupInfo as vm",
        cache: !1
      })
    }]).controller("DeviceSetupInfo", ["PopupFactory", "DeviceEnrollmentDataService", "$state", "$scope", "$ionicHistory", "$ionicModal", "$ionicPlatform", "$rootScope", function(e, t, i, o, a, s, r, c) {
      var l = this;
      l.continueNext = function() {
        t.askWifiPermission().then(function(e) {
          i.go("switch-setup-wizard.connect-wifi-instruction")
        }).catch(function(t) {
          "DENIED" === t.error && e.alert({
            title: "Cannot add a Device",
            message: "In order to add a device, we require location permission. Please try again."
          })
        })
      }, l.showFactoryProcedure = function() {
        var e = n(8),
          t = s.fromTemplate(e, {
            scope: o,
            animation: "fade-in-scale"
          });
        l.modal = t, t.show()
      }, l.goBack = function() {
        if (!a.backView()) return void i.go("rooms.list");
        a.goBack()
      }, l.checkPlatform = function() {
        l.isPlatformAndroid = r.is("android")
      }, l.checkPlatform()
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("switch-setup-wizard.enter-network-password", {
        url: "/enter-network-password",
        template: n(465),
        controller: "EnterNetworkPasswordCtrl as vm",
        cache: !1
      })
    }]).controller("EnterNetworkPasswordCtrl", ["DeviceEnrollmentDataService", "$ionicLoading", "$translate", "$scope", "PopupFactory", "$ionicHistory", "WiFiDevice", "$state", "NetworkPasswordManager", function(e, t, n, i, o, a, s, r, c) {
      function l(e) {
        c.savePassword(e.ssid, e.password)
      }

      function d() {
        var t = c.getPasswordForSSID((e.selectedNetwork || {}).ssid);
        if (t) return v.networkPassword = t.password, v.networkPassword
      }

      function u(e) {
        e.shouldRemember ? l(e.network) : c.removeNetwork(e.network)
      }
      var v = this;
      i.$on("$ionicView.enter", function() {
        v.rememberNetworkPassword = !0, d()
      }), v.togglePasswordVisibility = function() {
        v.passwordVisible = !v.passwordVisible
      }, v.continueNext = function() {
        return v.networkPassword ? v.networkPassword.length < 8 ? void o.alert({
          message: "Wi-Fi password must be at least 8 characters long. Please enter the correct Wi-Fi password.",
          title: "Incorrect Wi-Fi Password"
        }) : !e.supportsSpecialChars && v.networkPassword.containsIgnoreCase("&") ? void o.alert({
          message: n.instant("WIFI_INVALID_CHAR"),
          title: n.instant("WIFI_INVALID_CHAR_TITLE")
        }) : void
        function() {
          if (!(e.selectedNetwork && e.connectedAccessory && v.networkPassword)) return void o.alert({
            message: n.instant("GENERIC_ERROR"),
            callback: function() {
              r.go("switch-setup-wizard.device-setup-info")
            }
          });
          t.show({
            duration: 3e3
          });
          var i = {
            ssid: e.selectedNetwork.ssid,
            security_value: e.selectedNetwork.security_value,
            password: v.networkPassword
          };
          u({
            shouldRemember: v.rememberNetworkPassword,
            network: i
          });
          var a = s.connectToANetwork;
          e.supportsEncryption && (a = s.connectToANetworkSecure), a(i).then(function(t) {
            e.regKey = s.regKey, r.go("switch-setup-wizard.joining-wifi-network")
          }).catch(function(e) {
            o.alert({
              message: n.instant("CANNOT_CONNECT_WIFI_DEVICE", {
                deviceName: i.ssid || "Selected Wifi Device"
              }),
              callback: function() {
                r.go("switch-setup-wizard.device-setup-info")
              }
            })
          })
        }(): void o.alert({
          message: n.instant("ENTER_NETWORK_PASSWORD_REQUEST"),
          title: n.instant("ENTER_NETWORK_PASSWORD")
        })
      }, v.goBack = function() {
        if (!a.backView()) return void r.go("rooms.list");
        a.goBack()
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("switch-setup-wizard.factory-procedure", {
        url: "/factory-procedure",
        template: n(8),
        controller: "FactoryProcedureCtrl as vm",
        cache: !1
      })
    }]).controller("FactoryProcedureCtrl", ["$ionicHistory", "$state", function(e, t) {
      this.handleBack = function() {
        e.backView() ? e.goBack() : t.go("rooms.list")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("switch-setup-wizard.get-ready-info", {
        url: "/get-ready-info",
        template: n(466),
        controller: "GetReadyInfoCtrl as vm",
        cache: !1
      })
    }]).controller("GetReadyInfoCtrl", ["$state", function(e) {
      this.continue = function() {
        e.go("switch-setup-wizard.device-setup-info")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("switch-setup-wizard.joining-wifi-network", {
        url: "/joining-wifi-network",
        template: n(467),
        controller: "JoiningWiFiNetwork as vm",
        cache: !1
      })
    }]).controller("JoiningWiFiNetwork", ["$timeout", "$interval", "$scope", "$state", "CheckConnection", "DeviceEnrollmentDataService", "$window", "Insomnia", "AccountManager", function(e, t, n, i, o, a, s, r, c) {
      function l() {
        var e = 0;
        o.isOnline().then(function() {
          u.isPhoneOnline = !0, u.showWarning = !1, d(), i.go("switch-setup-wizard.save-device")
        }).catch(function() {
          u.isPhoneOnline = !1, e++, e >= 60 && (u.showWarning = !0)
        })
      }

      function d() {
        e(function() {
          c.connectSocket().then(function(e) {})
        }, 5e3)
      }
      var u = this;
      u.deviceEnrollmentDataService = a, n.$on("$ionicView.afterEnter", function() {
        r.keepAwake(), u.networkListener = t(l, 1e3)
      }), n.$on("$stateChangeStart", function() {
        r.allowSleepAgain(), t.cancel(u.networkListener)
      })
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("switch-setup-wizard.save-device", {
          url: "/save-device",
          template: n(468),
          controller: "SaveDeviceCtrl as vm",
          cache: !1
        })
      }]).controller("SaveDeviceCtrl", ["$scope", "IotSwitch", "$translate", "PopupFactory", "Residence", "DeviceEnrollmentDataService", "AppSession", "$interval", "$state", "$q", "$window", "Insomnia", "NetworkPasswordManager", function(e, t, n, i, o, a, s, r, c, l, d, u, v) {
        function m() {
          var e = l.defer(),
            n = 0,
            i = 0;
          return S.identifyPing = r(function() {
            n += 1, t.identify({
              id: S.deviceInfo.serial
            }, {
              seconds: 1
            }).$promise.then(function(o) {
              var a = o.device,
                s = (o.error || {}).message,
                c = s && s.containsIgnoreCase("already belongs");
              a && a.name ? (r.cancel(S.identifyPing), S.deviceInfo.id = o.device.id, S.findDevicePing = r(function() {
                i += 1, t.discover({
                  id: S.deviceInfo.serial
                }).$promise.then(function(t) {
                  var n = t.device || {};
                  0 === n.identify ? (r.cancel(S.findDevicePing), e.resolve(o.device)) : i > 10 && (r.cancel(S.findDevicePing), e.reject({
                    type: "DEVICE_NOT_DISCOVERED"
                  }))
                }).catch(function(t) {
                  i > 10 && (r.cancel(S.findDevicePing), e.reject({
                    error: "cannot find device name, catch",
                    data: t
                  }))
                })
              }, 3e3)) : n > 10 ? (r.cancel(S.identifyPing), e.reject({
                type: "DEVICE_NOT_DISCOVERED"
              })) : c && e.reject({
                type: "ALREADY_BELONGS"
              })
            }).catch(function(t) {
              n > 10 && (r.cancel(S.identifyPing), e.reject({
                type: "DEVICE_NOT_DISCOVERED"
              }))
            })
          }, 3e3), e.promise
        }

        function p() {
          var e = 0,
            t = l.defer(),
            n = {
              id: S.deviceInfo.residenceId,
              deviceId: S.deviceInfo.id,
              regKey: S.deviceEnrollmentDataService.regKey || null
            };
          return n.hasOwnProperty("regKey") && !n.regKey && delete n.regKey, S.addDevicePing = r(function() {
            o.registerDevice(n).$promise.then(function(n) {
              var i = _.get(n, "messages.id"),
                o = _.get(n, "error.message");
              e++, i ? (r.cancel(S.addDevicePing), a.savedDevice = n.messages, t.resolve(n.messages)) : e > 10 ? (r.cancel(S.addDevicePing), t.reject({
                type: "DEVICE_NOT_DISCOVERED"
              })) : o && o.containsIgnoreCase("already registered") && (r.cancel(S.addDevicePing), t.reject({
                type: "ALREADY_BELONGS"
              }))
            }).catch(function(e) {
              r.cancel(S.addDevicePing), t.reject({
                type: "DEVICE_NOT_DISCOVERED"
              })
            })
          }, 3e3), t.promise
        }

        function E() {
          var e = a.connectedAccessory;
          if (e) return {
            name: e.ssid || "DEVICE_NAME_NOT_SET",
            serial: e.serialNumber || "SERIAL_NUMBER_NOT_SET",
            residenceId: s.getSelectedResidence().id,
            power: "ON"
          }
        }

        function f() {
          if (u.keepAwake(), S.deviceInfo = E(), !S.deviceInfo) return i.alert({
            title: n.instant("ERROR"),
            message: n.instant("ERROR_DURING_ENROLLMENT")
          }).then(function() {
            c.go("rooms.list")
          }), void(S.saveError = !0);
          a.switchToReconfigure ? (S.reconfigurationMode = !0, m().then(function(e) {
            c.go("rooms.list", {}, {
              reload: !0
            })
          }).catch(function(e) {
            S.saveError = e
          }).finally(function() {
            a.resetReconfigure(), a.resetData()
          })) : m().then(function(e) {
            return p()
          }).then(function(e) {
            c.go("switch-setup-wizard.device-rename")
          }).catch(function(e) {
            S.saveError = e
          })
        }

        function g() {
          r.cancel(S.identifyDevicePing), r.cancel(S.addDevicePing)
        }

        function h() {
          r.cancel(S.identifyDevicePing), r.cancel(S.addDevicePing), u.allowSleepAgain()
        }
        var S = this;
        S.deviceEnrollmentDataService = a, e.$on("$ionicView.enter", f), e.$on("$ionicView.leave", g), e.$on("$stateChangeStart", h)
      }])
    }
  }).call(t, "src/pages/switch-setup-wizard/save-device.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("switch-setup-wizard.select-discovered-network", {
        url: "/select-discovered-network",
        template: n(469),
        controller: "SelectDiscoveredNetwork as vm",
        cache: !1
      })
    }]).controller("SelectDiscoveredNetwork", ["$state", "$translate", "$scope", "DeviceEnrollmentDataService", "WiFiDevice", "$timeout", "PopupFactory", "$ionicModal", "$ionicLoading", function(e, t, i, o, a, s, r, c, l) {
      function d(n) {
        a.connectToANetwork(n).then(function() {
          e.go("switch-setup-wizard.joining-wifi-network")
        }).catch(function() {
          r.alert({
            message: t.instant("CANNOT_CONNECT_TO") + " " + (n.ssid || t.instant("SELECTED_WIFI_DEVICE")) + ".",
            callback: function() {
              e.go("switch-setup-wizard.device-setup-info")
            }
          })
        })
      }

      function u() {
        l.show({
          duration: 1e4
        }), a.getScannedResults().then(function(e) {
          v.discoveredNetworks = _.uniqBy(e, "ssid"), l.hide()
        }).catch(function(e) {
          r.alert({
            title: t.instant("ERROR"),
            message: e.error
          })
        })
      }
      var v = this;
      v.deviceEnrollmentDataService = o, i.$on("$ionicView.enter", function() {
        o.selectedNetwork = null, v.discoveredNetworks = [], u()
      }), v.cancelSetup = function() {
        o.resetData(), e.go("rooms.list", {}, {
          reload: !0
        })
      }, v.rescanNetworkList = u, v.selectNetwork = function(e) {
        o.selectedNetwork = e
      }, v.continueNext = function() {
        var n = o.selectedNetwork;
        return n ? n && o.connectedAccessory ? "OPEN" === n.security_type ? void d(n) : void e.go("switch-setup-wizard.enter-network-password") : void r.alert({
          title: t.instant("ERROR"),
          message: t.instant("GENERIC_ERROR"),
          callback: function() {
            e.go("switch-setup-wizard.device-setup-info")
          }
        }) : void r.alert({
          title: t.instant("SELECT_WIFI_NETWORK"),
          message: t.instant("SELECT_NETWORK_REQUEST")
        })
      }, v.showFAQ = function() {
        var e = n(470),
          t = c.fromTemplate(e, {
            scope: i,
            animation: "fade-in-scale"
          });
        v.modal = t, t.show()
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.controller("SwitchSetupWizard", ["$state", function(e) {
      this.handleBack = function() {
        e.go("rooms.list")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(292)(e), n(293)(e), n(291)(e)
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.component("firmwareUpdateModal", {
        template: n(471),
        bindings: {
          switch: "<",
          showMessage: "<"
        },
        controllerAs: "vm",
        controller: ["OTAUpdate", "$scope", "$translate", "$rootScope", "$state", "IotSwitch", "$timeout", "$http", "$q", "$filter", "$interval", "$window", "Insomnia", function(e, t, n, i, o, a, s, r, c, l, d, u, v) {
          function m(t, i) {
            var o = Math.random().toString(36).slice(2),
              a = {
                headers: {
                  "Content-type": 'multipart/form-data; boundary="' + o + '"'
                },
                timeout: 5e3
              },
              s = 0,
              d = t.data.size,
              u = c.defer(),
              v = e.chunkify(t.data, 1024),
              m = i.localIP;
            return function i(o, c) {
              if (h.CANCEL_UPDATE) return h.CANCEL_UPDATE = !1, u.reject({
                type: "USER_CANCEL",
                message: n.instant("FIRMWARE_UPDATE_CANCEL_INFO")
              });
              var p = v[c];
              if (!(o < d)) return u.resolve({
                message: "Device firmware updated.",
                type: "FIRMWARE_UPLOAD_SUCCESS",
                info: t.info
              });
              var E = e.testotaRequestURL(m, o, t.info.file_size, t.info.app_index),
                f = o / d * 100,
                g = l("number")(f, 0),
                _ = -1,
                S = o <= 1024;
              g > _ && (h.UPDATE_PERCENTAGE = g, _ = g + 1), r.post(E, p, a).then(function(e) {
                if (!e.data) return s += 1, 0 === c ? u.reject({
                  message: "Cannot communicate with the switch.",
                  type: S ? "COMM_FAIL" : "COMM_INTERRUPT"
                }) : s >= 20 ? (s = 0, u.reject({
                  message: "Cannot communicate with the switch.",
                  type: S ? "COMM_FAIL" : "COMM_INTERRUPT"
                })) : i(o, c);
                h.status = {
                  type: "INFO",
                  message: {
                    body: n.instant("FIRMWARE_UPDATING"),
                    title: n.instant("FIRMWARE_UPDATING")
                  },
                  phase: "during",
                  canClose: !1
                }, s = 0;
                return o += p.size, i(o, c + 1)
              }).catch(function(e) {
                return s += 1, 0 === c ? u.reject({
                  message: "Cannot communicate with the switch.",
                  type: S ? "COMM_FAIL" : "COMM_INTERRUPT"
                }) : s >= 20 ? (s = 0, u.reject({
                  message: "Cannot communicate with the switch.",
                  type: S ? "COMM_FAIL" : "COMM_INTERRUPT"
                })) : i(o, c)
              })
            }(0, 0), u.promise
          }

          function p() {
            f(h.switch).then(E).finally(function() {
              e.updateModal.backdropClickToClose = !0
            })
          }

          function E() {
            function e() {
              var e = {
                id: o,
                identify: 1
              };
              a.prototype$updateAttributes(e).$promise.then(function(e) {
                return s(function() {
                  return a.findById({
                    id: e.id
                  }).$promise
                }, 1e3)
              }).then(function(e) {
                var o = 0 === e.identify;
                return i++, i >= 10 ? (d.cancel(h.identifySwitchInterval), h.status = {
                  type: "INFO",
                  message: {
                    body: n.instant("FIRMWARE_UPDATE_CANNOT_COMMUNICATE_AFTER_UPDATE"),
                    title: n.instant("MESSAGE")
                  },
                  phase: "after",
                  canClose: !0
                }, t.resolve({
                  state: "failed_to_reboot"
                })) : o ? (d.cancel(h.identifySwitchInterval), h.UPDATE_SUCCESS = !0, h.status = {
                  type: "SUCCESS",
                  message: {
                    body: n.instant("FIRMWARE_UPDATE_SUCCESS_INFO"),
                    title: n.instant("SUCCESS")
                  },
                  phase: "after",
                  canClose: !0
                }, t.resolve({
                  state: "rebooted"
                })) : void 0
              }).catch(function(e) {
                return d.cancel(h.identifySwitchInterval), t.reject({
                  state: e
                })
              })
            }
            var t = c.defer(),
              i = 0,
              o = h.switch.id;
            return h.identifySwitchInterval = d(e, 8e3, 10, !1), t.promise
          }

          function f(t) {
            var i = c.defer();
            return e.getFirmwareVersionInfo(t.serial).then(e.downloadFirmwareFile).then(function(e) {
              return m(e, t)
            }).then(function(e) {
              return h.status = {
                type: "INFO",
                message: {
                  body: n.instant("WAIT_WHILE_SWITCH_REBOOTS"),
                  title: n.instant("PLEASE_WAIT")
                },
                phase: "after",
                canClose: !1
              }, i.resolve(e)
            }).catch(function(e) {
              return h.status = {
                type: "INFO",
                phase: "before",
                canClose: !0
              }, "NO_FILE" === e.type ? h.status.message = {
                title: n.instant("UPDATE_FAILED"),
                body: n.instant("UNABLE_TO_DOWNLOAD_FIRMWARE")
              } : "COMM_FAIL" === e.type ? h.status.message = {
                title: n.instant("CANNOT_UPDATE_FIRMWARE"),
                body: n.instant("FIRMWARE_UPDATE_DEVICE_UNREACHABLE")
              } : "COMM_INTERRUPT" === e.type ? h.status.message = {
                title: n.instant("CANNOT_UPDATE_FIRMWARE"),
                body: n.instant("FIRMWARE_COMMUNICATION_INTERRUPT")
              } : h.status.message = {
                title: n.instant("CANNOT_UPDATE_FIRMWARE"),
                body: n.instant("CANNOT_UPDATE_ATM")
              }, i.reject(e)
            }), i.promise
          }

          function g(e) {
            return a.prototype$updateAttributes({
              id: e.id
            }, {
              ota: !0
            }).$promise
          }
          var h = this;
          h.$onInit = function() {
            if (h.showMessage) return void(h.status = {
              type: "INFO",
              message: {
                title: n.instant("FIRMWARE_UPDATE"),
                body: n.instant("FIRMWARE_UPDATE_AVAILABLE_MESSAGE", {
                  deviceName: h.switch.name
                })
              },
              phase: "before",
              canClose: !1
            });
            h.kickOff()
          }, h.kickOff = function() {
            h.UPDATE_PERCENTAGE = 0, h.UPDATE_SUCCESS = !1, h.CANCEL_UPDATE = !1, h.showMessage = !1, h.status = {}, h.updateFirmwareOnSwitch(h.switch), v.keepAwake()
          }, h.updateFirmwareOnSwitch = function() {
            h.status = {
              type: "INFO",
              message: {
                body: n.instant("CONNECTING_TO", {
                  deviceName: h.switch.name
                }),
                title: n.instant("CONNECTING")
              },
              phase: "before",
              canClose: !1
            }, g(h.switch).then(function() {
              s(p, 3e3)
            })
          }, h.closeUpdateModal = function() {
            d.cancel(h.identifySwitchInterval), e.updateModal.hide(), h.UPDATE_SUCCESS && i.$broadcast("firmwareUpdateSuccess", h.switch), v.allowSleepAgain()
          }
        }]
      })
    }
  }).call(t, "src/pages/switches/firmware-update-modal.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("rooms.switch-details", {
          url: "/switch-details/:id",
          views: {
            "tab-rooms": {
              template: n(472),
              controller: "SwitchDetailsCtrl as vm"
            }
          },
          params: {
            id: null
          }
        })
      }]).controller("SwitchDetailsCtrl", ["$scope", "$ionicHistory", "$translate", "$state", "DeviceEnrollmentDataService", "$filter", "FormValidationError", "LevDBChanges", "$stateParams", "IotSwitch", "$ionicPopup", "Version", "$ionicModal", "OTAUpdate", "PopupFactory", "$q", function(e, t, n, i, o, a, s, r, c, l, d, u, v, m, p, E) {
        function f() {
          var t = e.switch.name;
          return {
            valid: t && t.length >= 2
          }
        }

        function g(e, t) {
          A.processing = !0;
          var n = E.defer();
          return l.prototype$updateAttributes({
            id: e
          }, t).$promise.then(function(e) {
            A.safe.switchName = e.name, n.resolve(e)
          }).catch(function(e) {
            n.reject(e)
          }).finally(function() {
            A.processing = !1, A.dirty = !1
          }), n.promise
        }

        function h() {
          p.confirm({
            template: n.instant("UNSAVED_CHANGES_MESSAGE"),
            title: n.instant("UNSAVED_CHANGES"),
            buttons: [{
              text: n.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: n.instant("DISCARD"),
              type: "button-confirm",
              onTap: _
            }]
          })
        }

        function _() {
          return "RESIDENCE_EDIT" === i.BACK_VIEW ? (t.goBack(), void delete i.BACK_VIEW) : "PROTECT_CONFIG" === i.BACK_VIEW ? (t.goBack(), void delete i.BACK_VIEW) : "CAMERA_CONFIG" === i.BACK_VIEW ? (t.goBack(), void delete i.BACK_VIEW) : void i.go("rooms.list")
        }

        function S() {
          l.findById({
            id: T,
            filter: {
              include: "residentialRoom"
            }
          }).$promise.then(function(e) {
            if (A.switch = e, A.safe.switchName = e.name, "dw15p" === A.switch.model.toLowerCase()) {
              var t = A.switch.version;
              t = t.split(";")[0], A.switch.version = t
            }
            m.getFirmwareVersionInfo(A.switch.serial).then(function(e) {
              A.latestFirmwareInfo = e, A.shouldUpdateFirmware = b()
            })
          })
        }

        function b() {
          var e = (A.latestFirmwareInfo || {
              version: "0"
            }).version,
            t = a("getVersionNumber")(A.switch.version || "0");
          return 1 === u.compareVersions(e, t)
        }

        function I() {
          m.updateModal = v.fromTemplate('<firmware-update-modal switch="vm.switch"></firmware-update-modal>', {
            scope: e,
            backdropClickToClose: !1,
            hardwareBackButtonClose: !1
          }), m.updateModal.show()
        }
        var A = this,
          T = c.id;
        A.safe = {}, e.$on("$ionicView.enter", function() {
          S()
        }), e.$on("firmwareUpdateSuccess", function() {
          S()
        }), A.removeSwitch = function(e) {
          function t() {
            l.removeIotSwitch({
              id: e.id
            }).$promise.then(o)
          }

          function o() {
            i.go("rooms.list")
          }
          p.confirm({
            message: n.instant("DELETE_DEVICE_PROMPT", {
              deviceName: e.name
            }),
            title: n.instant("DELETE_DEVICE"),
            buttons: [{
              text: n.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: n.instant("OK"),
              type: "button-confirm",
              onTap: t
            }]
          })
        }, A.onUpdateSwitch = function(n) {
          if (!f().valid) return void s.showMinLengthError();
          var i = {
            name: n.name
          };
          g(n.id, i).then(function(e) {
            t.goBack()
          }).catch(function(t) {
            var n = t.error;
            e.switch.name = A.safe.switchName, n.message && n.message.containsIgnoreCase("duplicate") && s.showDuplicateNameError()
          })
        }, A.openAdvancedSettings = function() {
          i.go("switch-settings", {
            id: c.id
          })
        }, A.confirmUpdate = function() {
          return A.switch.localIP ? A.switch.connected ? void p.confirm({
            message: n.instant("FIRMWARE_UPDATE_TIME_WARNING"),
            title: n.instant("FIRMWARE_UPDATE"),
            buttons: [{
              text: n.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: n.instant("OK"),
              type: "button-confirm",
              onTap: I
            }]
          }) : void p.alert({
            title: n.instant("DEVICE_DISCONNECTED"),
            message: n.instant("FIRMWARE_UPDATE_DEVICE_UNREACHABLE")
          }) : void p.alert({
            title: "Cannot Update Firmware",
            message: n.instant("DEVICE_NO_LOCAL_IP")
          })
        }, A.identifyDevice = function(e) {
          l.prototype$updateAttributes({
            id: e.id
          }, {
            identify: 3
          }).$promise.then(function(e) {})
        }, A.reconfigureWireless = function() {
          o.switchToReconfigure = {
            id: T
          }, i.go("switch-setup-wizard.device-setup-info")
        }, A.onSocketConnected = function() {
          r.bindModel("IotSwitch", T, e, "switch").then(function(e) {}).catch(function(e) {})
        }, A.makeDirty = function() {
          A.dirty = !0
        }, A.onBackClick = function() {
          var e = f().valid;
          A.dirty && e ? h() : (A.dirty, _())
        }
      }])
    }
  }).call(t, "src/pages/switches/switch-details.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("switch-settings", {
          url: "/switch-settings/:id",
          template: n(473),
          controller: "SwitchSettingsCtrl as vm",
          params: {
            id: null
          }
        })
      }]).controller("SwitchSettingsCtrl", ["IotSwitch", "LevDBChanges", "$stateParams", "$scope", "$translate", "Version", "$filter", function(e, t, n, i, o, a, s) {
        function r(e) {
          return 60 * e
        }

        function c(e) {
          return 3600 * e
        }

        function l() {
          var e = s("getVersionNumber")(d.switch.version || "0");
          return a.compareVersions(e, "1.2.1") >= 0
        }
        var d = this;
        d._ = _, d.switchId = n.id, i.$on("$ionicView.enter", function() {
          t.bindModel("IotSwitch", d.switchId, i, "vm.switch").then(function(e) {
            d.switch = e, d.autoOffTime = _.find(d.autoOffTimes, {
              seconds: e.autoOffTime
            }) || d.autoOffTimes[0], d.supportsAutoOffFeature = l()
          })
        }), d.fadeChangeRate = [{
          time: 0,
          label: "0 " + o.instant("SECONDS")
        }, {
          time: 10,
          label: "1 " + o.instant("SECOND")
        }, {
          time: 20,
          label: "2 " + o.instant("SECONDS")
        }, {
          time: 30,
          label: "3 " + o.instant("SECONDS")
        }, {
          time: 50,
          label: "5 " + o.instant("SECONDS")
        }, {
          time: 100,
          label: "10 " + o.instant("SECONDS")
        }, {
          time: 150,
          label: "15 " + o.instant("SECONDS")
        }, {
          time: 250,
          label: "25 " + o.instant("SECONDS")
        }], d.dimLevelLEDOptions = [{
          time: 0,
          label: o.instant("ALWAYS_OFF"),
          description: o.instant("LED_BAR_ALWAYS_OFF")
        }, {
          time: 1,
          label: "1 " + o.instant("SECOND"),
          description: o.instant("LED_STAYS_ON_FOR_SECOND", {
            second: 1
          })
        }, {
          time: 2,
          label: "2 " + o.instant("SECONDS"),
          description: o.instant("LED_STAYS_ON_FOR_SECONDS", {
            seconds: 2
          })
        }, {
          time: 3,
          label: "3 " + o.instant("SECONDS"),
          description: o.instant("LED_STAYS_ON_FOR_SECONDS", {
            seconds: 3
          })
        }, {
          time: 5,
          label: "5 " + o.instant("SECONDS"),
          description: o.instant("LED_STAYS_ON_FOR_SECONDS", {
            seconds: 5
          })
        }, {
          time: 10,
          label: "10 " + o.instant("SECONDS"),
          description: o.instant("LED_STAYS_ON_FOR_SECONDS", {
            seconds: 10
          })
        }, {
          time: 15,
          label: "15 " + o.instant("SECONDS"),
          description: o.instant("LED_STAYS_ON_FOR_SECONDS", {
            seconds: 15
          })
        }, {
          time: 25,
          label: "25 " + o.instant("SECONDS"),
          description: o.instant("LED_STAYS_ON_FOR_SECONDS", {
            seconds: 25
          })
        }, {
          time: 255,
          label: o.instant("ALWAYS_ON"),
          description: o.instant("LED_BAR_ALWAYS_ON")
        }], d.statusLEDOptions = [{
          value: 0,
          label: o.instant("LED_OFF"),
          description: o.instant("STATUS_LED_ALWAYS_OFF")
        }, {
          value: 254,
          label: o.instant("STATUS_MODE"),
          description: o.instant("STATUS_LED_ON_WHEN_LOAD_ON")
        }, {
          value: 255,
          label: o.instant("LOCATOR_MODE"),
          description: o.instant("STATUS_LED_OFF_WHEN_LOAD_OFF")
        }], d.loadTypes = [{
          value: 0,
          label: o.instant("INCANDESCENT")
        }, {
          value: 1,
          label: o.instant("LED")
        }, {
          value: 2,
          label: o.instant("CFL")
        }, {
          value: 3,
          label: o.instant("MARK_10")
        }], d.autoOffTimes = [{
          label: "Disabled",
          seconds: r(0)
        }, {
          label: "1 minute",
          seconds: r(1)
        }, {
          label: "5 minutes",
          seconds: r(5)
        }, {
          label: "10 minutes",
          seconds: r(10)
        }, {
          label: "15 minutes",
          seconds: r(15)
        }, {
          label: "30 minutes",
          seconds: r(30)
        }, {
          label: "1 hour",
          seconds: c(1)
        }, {
          label: "2 hours",
          seconds: c(2)
        }, {
          label: "3 hours",
          seconds: c(3)
        }, {
          label: "4 hours",
          seconds: c(4)
        }, {
          label: "5 hours",
          seconds: c(5)
        }, {
          label: "6 hours",
          seconds: c(6)
        }, {
          label: "7 hours",
          seconds: c(7)
        }, {
          label: "8 hours",
          seconds: c(8)
        }, {
          label: "9 hours",
          seconds: c(9)
        }, {
          label: "10 hours",
          seconds: c(10)
        }, {
          label: "11 hours",
          seconds: c(11)
        }, {
          label: "12 hours",
          seconds: c(12)
        }], d.updateDevice = function(t) {
          d.processing = !0;
          var n = ["minLevel", "maxLevel", "presetLevel", "fadeOnTime", "fadeOffTime"];
          for (var i in t) n.indexOf(i) >= 0 && (t[i] = Number(t[i]));
          e.prototype$updateAttributes({
            id: d.switch.id
          }, t).$promise.then(function() {}).finally(function() {
            d.processing = !1
          })
        }
      }])
    }
  }).call(t, "src/pages/switches/switch-settings.js")
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.run(function() {}).config(["$stateProvider", function(e) {
      e.state("test", {
        url: "/test",
        template: n(474),
        controller: "TestCtrl as vm"
      })
    }]).controller("TestCtrl", function() {})
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    n(297)(e), n(296)(e), n(298)(e), n(299)(e)
  }
}, function(e, t, n) {
  "use strict";
  e.exports = function(e) {
    e.config(["$stateProvider", function(e) {
      e.state("users", {
        abstract: !0,
        url: "/users",
        template: n(475),
        controller: "UsersCtrl as vm",
        resolve: {
          Residences: ["ResidenceManager", function(e) {
            return e.initialized.promise
          }]
        }
      })
    }]).controller("UsersCtrl", ["$ionicHistory", "$state", function(e, t) {
      this.handleBack = function() {
        t.go("rooms.list")
      }
    }])
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("users.edit", {
          url: "/edit",
          template: n(476),
          controller: "UsersEditCtrl as vm"
        })
      }]).controller("UsersEditCtrl", ["UserManagementDataService", "InvitationManager", "Residence", "$state", "AppSession", "Person", "PopupFactory", "Toast", "$translate", "ResidentialAccount", function(e, t, n, i, o, a, s, r, c, l) {
        var d = this;
        d.editUserData = {}, d.appSession = o, d.processing = !1, d.dirty = !1, d.isMe = !1, e.selectedUserPermission ? (d.editUserData = e.getEditUserData(), d.residences = d.editUserData.residences, d.permission = d.editUserData.permission, d.user = d.permission.person) : (d.user = o.currentUser, d.isMe = !0), d.update = function() {
          d.dirty = !0
        }, d.confirmDelete = function() {
          var e, t = d.appSession.currentUser.residentialAccounts[0].id;
          l.residences.count({
            id: t
          }).$promise.then(function(t) {
            e = c.instant(t.count < 1 ? "DELETE_GUEST_ACCOUNT_WARNING" : "DELETE_OWNER_ACCOUNT_WARNING"), s.alert({
              title: c.instant("WARNING"),
              message: e,
              buttons: [{
                text: c.instant("CANCEL"),
                type: "button-cancel",
                onTap: function() {}
              }, {
                text: c.instant("DELETE"),
                type: "button-ok",
                onTap: function() {
                  a.deleteAccountInfo({}, {
                    id: o.currentUser.id,
                    deleteResidentialAccount: !0,
                    deleteCommercialAccount: !1
                  }).$promise.then(function(e) {
                    o.destroy(), i.go("accounts.login"), r.show({
                      duration: 3e3,
                      message: c.instant("DELETE_ACCOUNT_CONFIRMATION")
                    })
                  }, function(e) {
                    r.show({
                      duration: 3e3,
                      message: c.instant("DELETE_ACCOUNT_ERROR")
                    })
                  })
                }
              }]
            })
          })
        }, d.updateUser = function() {
          for (var e in d.editUserData) "" === d.editUserData[e] && delete d.editUserData[e];
          _.isEmpty(d.editUserData);
          d.processing = !0, a.prototype$patchAttributes({
            id: d.user.id
          }, d.editUserData).$promise.then(function(e) {
            d.user = e, _.extend(o.currentUser, d.user), d.editUserData = {}, d.processing = !1, d.dirty = !1, r.show({
              duration: 2e3,
              message: "Update successful!"
            })
          }, function(e) {
            d.processing = !1, r.show({
              duration: 3e3,
              message: e.error.message || e.message || JSON.stringify(e)
            })
          })
        }, d.resendInvitation = function(e, n) {
          t.inviteUser(e, n).then(function(e) {
            if (e.error) return void t.showPermissionError(e.error);
            t.showSuccessMessage(e.email)
          })
        }, d.revokeAccess = function(e, t) {
          function o() {
            n.removePerson({
              id: e.id,
              email: t
            }).$promise.then(function(e) {
              i.go("users.list")
            }).catch(function(e) {})
          }
          s.confirm({
            message: c.instant("DELETE_USER_WARNING"),
            title: c.instant("WARNING"),
            buttons: [{
              text: c.instant("CANCEL"),
              type: "button-cancel"
            }, {
              text: c.instant("REMOVE_USER"),
              type: "button-confirm",
              onTap: o
            }]
          })
        }
      }])
    }
  }).call(t, "src/pages/users/users-edit.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("users.invite", {
          url: "/invite",
          template: n(477),
          controller: "UserInviteCtrl as vm"
        })
      }]).controller("UserInviteCtrl", ["$scope", "$state", "Residence", "AppSession", "InvitationManager", "ResidenceManager", function(e, t, n, i, o, a) {
        var s = this;
        e.$on("$ionicView.enter", function() {
          a.getUserOwnedResidences().then(function(e) {
            var t = i.getSelectedResidence();
            s.selectedResidence = _.find(e, {
              id: t.id
            }), s.userOwnedResidences = e
          })
        }), s.invitationEmail = "", s.inviteUser = function(e) {
          var n = s.selectedResidence;
          e && n && o.inviteUser(s.invitationEmail, n).then(function(e) {
            if (e.error) return void o.showPermissionError(e.error);
            o.showSuccessMessage(e.email).then(function() {
              t.go("users.list")
            })
          })
        }, s.onResidenceSelection = function(e) {
          s.selectedResidence = e
        }, s.addResidence = function() {
          t.go("onboarding.add-residence")
        }
      }])
    }
  }).call(t, "src/pages/users/users-invite.js")
}, function(e, t, n) {
  "use strict";
  (function(t) {
    e.exports = function(e) {
      e.config(["$stateProvider", function(e) {
        e.state("users.list", {
          url: "/list",
          template: n(478),
          controller: "UsersListCtrl as vm",
          resolve: {
            Residences: ["ResidenceManager", function(e) {
              return e.initialized.promise
            }]
          }
        })
      }]).controller("UsersListCtrl", ["AppSession", "UserManagementDataService", "$state", "$q", "$scope", function(e, t, n, i, o) {
        function a(e) {
          var i = t.getResidenceForUser(e, r.residentialPermissions);
          t.setEditUserData({
            permission: e,
            residences: i
          }), t.selectedUserPermission = e, n.go("users.edit")
        }

        function s() {
          var n = i.defer();
          r.person = e.currentUser, r.users = [], r.permissions = [], r.$resolved = !1;
          var o = [];
          return e.currentUser.residences.forEach(function(e) {
            o.push(t.getUserPermissionsForResidence(e))
          }), i.all(o).then(function(e) {
            r.residentialPermissions = e, r.users = t.getUniquePermissionsForAllResidences(e.map(function(e) {
              return e.permissions
            })), n.resolve(r.users)
          }).catch(function(e) {
            n.reject(e)
          }).finally(function() {
            r.$resolved = !0
          }), n.promise
        }
        var r = this;
        o.$on("$ionicView.enter", function() {
          t.reset(), s()
        }), r.goBack = function() {}, r.editUser = function(e) {
          s().then(function() {
            a(e)
          })
        }, r.navigateMeToUserDetails = function() {
          n.go("users.edit")
        }
      }])
    }
  }).call(t, "src/pages/users/users-list.js")
}, function(e, t) {
  e.exports = "<ion-footer-bar class=bar-setup-footer> <h1 class=title> <a class=button ng-click=vm.cancelSetup()> {{'CANCEL' | translate}} </a> </h1> </ion-footer-bar>"
}, function(e, t) {
  e.exports = '<div class="card card-connection"> <div class=title-connection>August</div> <div class=icon-connection> <div class=icon-connections-august></div> </div> <div class=details-connection> {{\'AUGUST_CONN_CARD_INFO\' | translate }} </div> <div class=button-group-connection> <div class="row animated fadeIn" ng-if=vm.augustIntegrationResolved> <div class=col> <button class="button button-clear" ng-click=vm.openSupportPage()>Support</button> </div> <div class=col ng-if=!vm.hasAugustIntegration> <button class="button button-clear" ng-click=vm.integrateAugust()> {{\'INTEGRATE\' | translate }} </button> </div> <div class=col ng-if=vm.hasAugustIntegration> <button class="button button-clear" ng-click=vm.reconfigureAugust()> {{\'RECONFIGURE\' | translate }} </button> </div> <div class=col ng-if=vm.hasAugustIntegration> <button class="button button-clear" ng-click=vm.deauthorizeAugust()> {{\'DEAUTHORIZE\' | translate }} </button> </div> </div> </div> </div> '
}, function(e, t) {
  e.exports = "<div ng-class=\"'breaker-card-cont ' + (vm.breaker && vm.breaker.poles === 2 ? ' breaker-card-cont-dipole ' : (!vm.breaker || vm.breaker.dipole === true ? ' breaker-card-cont-hidden ' : ''))\"> <div ng-if=vm.breaker.empty ng-class=\"'breaker-card animated fadeIn breaker-card-empty'\" ng-click=vm.onItemClick(vm.breaker)> <div class=\"breaker-card-content breaker-card-content-empty\"> <div class=\"breaker-card-row breaker-position-card\"> <span class=breaker-position-title>POSITION</span> <span class=breaker-position>{{vm.type === 'unpositioned' ?'–': (vm.breaker.position > 9 ? vm.breaker.position : ('0' + vm.breaker.position))}}</span> </div> <div class=breaker-card-row ng-if=vm.breaker.name> <span class=breaker-title>{{vm.breaker.name}}</span> </div> <div class=breaker-card-row ng-if=!vm.breaker.name> <span class=breaker-title>EMPTY SPACE</span> </div> <div class=breaker-card-row ng-if=vm.breaker.name> <span class=breaker-text-sm> Type: <span> Empty Space </span> </span> </div> </div> </div> <div ng-if=\"!vm.breaker.empty && (vm.breaker.model && vm.breaker.model.toLowerCase().indexOf('none') >= 0)\" ng-class=\"'breaker-card animated fadeIn breaker-card-dumb'\" ng-click=vm.onItemClick(vm.breaker)> <div class=\"breaker-card-content breaker-card-content-dumb\"> <div class=\"breaker-card-row breaker-position-card\"> <span class=breaker-position-title>POSITION</span> <span class=\"breaker-position breaker-position-dumb\">{{vm.type === 'unpositioned' ?'–': (vm.breaker.position > 9 ? vm.breaker.position : ('0' + vm.breaker.position))}}</span> <span class=\"breaker-position breaker-position-dumb\" ng-if=\"vm.breaker.poles === 2\">{{vm.type === 'unpositioned' ?'–': ((vm.breaker.position + 2) > 9 ? vm.breaker.position + 2 : ('0' + (vm.breaker.position + 2)))}}</span> </div> <div class=breaker-card-row> <div class=breaker-card-row-content> <span class=breaker-title>{{vm.breaker.name}}</span> </div> </div> <div class=breaker-card-row> <span class=breaker-text-sm> Type: <span ng-bind=vm.breaker.model> </span> </span> </div> </div> </div> <div ng-if=\"vm.breaker.id && !vm.breaker.empty && !(vm.breaker.model && vm.breaker.model.toLowerCase().indexOf('none') >= 0)\" ng-class=\"'breaker-card animated fadeIn ' + ((vm.breaker.currentState && vm.breaker.currentState.toLowerCase().indexOf('trip') >= 0) ? ' breaker-card-tripped ' : ' ')\" ng-click=vm.onItemClick(vm.breaker)> <div class=\"breaker-card-content breaker-card-content-smart\"> <div class=\"breaker-card-row breaker-position-card\"> <span class=breaker-position-title>POSITION</span> <span ng-class=\"(vm.breaker.currentState && vm.breaker.currentState.toLowerCase().indexOf('trip') >= 0) ? 'breaker-position breaker-position-tripped ' : 'breaker-position'\"> {{vm.type === 'unpositioned' ?'–': (vm.breaker.position > 9 ? vm.breaker.position : ('0' + vm.breaker.position))}} </span> <span ng-class=\"(vm.breaker.currentState && vm.breaker.currentState.toLowerCase().indexOf('trip') >= 0) ? 'breaker-position breaker-position-tripped ' : 'breaker-position'\" ng-if=\"vm.breaker.poles === 2\"> {{vm.type === 'unpositioned' ?'–': ((vm.breaker.position + 2) > 9 ? vm.breaker.position + 2 : ('0' + (vm.breaker.position + 2)))}} </span> </div> <div class=breaker-card-row> <div class=breaker-card-row-content> <span class=breaker-title>{{vm.breaker.name}}</span> </div> </div> <div class=breaker-card-row> <span class=breaker-text-sm> Status: <span ng-class=vm.breaker.readableState ng-bind=vm.breaker.readableState> </span> </span> </div> </div> </div> </div> "
}, function(e, t) {
  e.exports = "<div ng-class=\"'breaker-card-cont ' + (breaker && breaker.poles === 2 ? ' breaker-card-cont-dipole ' : (!breaker || breaker.dipole === true ? ' breaker-card-cont-hidden ' : ''))\"> <div ng-if=breaker.empty ng-class=\"'breaker-card animated fadeIn breaker-card-empty'\" ng-click=vm.onItemClick(breaker)> <div class=\"breaker-card-content breaker-card-content-empty\"> <div class=\"breaker-card-row breaker-position-card\"> <span class=breaker-position-title>POSITION</span> <span class=breaker-position>{{vm.type === 'unpositioned' ?'–': (vm.breaker.position > 9 ? vm.breaker.position : ('0' + vm.breaker.position))}}</span> </div> <div class=breaker-card-row ng-if=breaker.name> <span class=breaker-title>{{breaker.name}}</span> </div> <div class=breaker-card-row ng-if=!breaker.name> <span class=breaker-title>EMPTY SPACE</span> </div> <div class=breaker-card-row ng-if=breaker.name> <span class=breaker-text-sm> Type: <span> Empty Space </span> </span> </div> </div> </div> <div ng-if=\"!breaker.empty && (breaker.model && breaker.model.toLowerCase().indexOf('none') >= 0)\" ng-class=\"'breaker-card animated fadeIn breaker-card-dumb'\" ng-click=vm.onItemClick(breaker)> <div class=\"breaker-card-content breaker-card-content-dumb\"> <div class=\"breaker-card-row breaker-position-card\"> <span class=breaker-position-title>POSITION</span> <span class=\"breaker-position breaker-position-dumb\">{{vm.type === 'unpositioned' ?'–': (vm.breaker.position > 9 ? vm.breaker.position : ('0' + vm.breaker.position))}}</span> <span class=\"breaker-position breaker-position-dumb\" ng-if=\"breaker.poles === 2\">{{vm.type === 'unpositioned' ?'–': ((vm.breaker.position + 2) > 9 ? vm.breaker.position + 2 : ('0' + (vm.breaker.position + 2)))}}</span> </div> <div class=breaker-card-row> <div class=breaker-card-row-content> <span class=breaker-title>{{breaker.name}}</span> </div> </div> <div class=breaker-card-row> <span class=breaker-text-sm> Type: <span ng-bind=breaker.model> </span> </span> </div> </div> </div> <div ng-if=\"breaker.id && !breaker.empty && !(breaker.model && breaker.model.toLowerCase().indexOf('none') >= 0)\" ng-class=\"'breaker-card animated fadeIn ' + ((breaker.currentState && breaker.currentState.toLowerCase().indexOf('trip') >= 0) ? ' breaker-card-tripped ' : ' ')\" ng-click=vm.onItemClick(breaker)> <div class=\"breaker-card-content breaker-card-content-smart\"> <div class=\"breaker-card-row breaker-position-card\"> <span class=breaker-position-title>POSITION</span> <span ng-class=\"(breaker.currentState && breaker.currentState.toLowerCase().indexOf('trip') >= 0) ? 'breaker-position breaker-position-tripped ' : 'breaker-position'\"> {{vm.type === 'unpositioned' ?'–': (vm.breaker.position > 9 ? vm.breaker.position : ('0' + vm.breaker.position))}} </span> <span ng-class=\"(breaker.currentState && breaker.currentState.toLowerCase().indexOf('trip') >= 0) ? 'breaker-position breaker-position-tripped ' : 'breaker-position'\" ng-if=\"breaker.poles === 2\"> {{vm.type === 'unpositioned' ?'–': ((vm.breaker.position + 2) > 9 ? vm.breaker.position + 2 : ('0' + (vm.breaker.position + 2)))}} </span> </div> <div class=breaker-card-row> <div class=breaker-card-row-content> <span class=breaker-title>{{breaker.name}}</span> </div> </div> <div class=breaker-card-row> <span class=\"breaker-text-sm breaker-text-status\"> Status: <span ng-class=breaker.readableState ng-bind=breaker.readableState> </span> </span> </div> </div> </div> </div> "
}, function(e, t) {
  e.exports = '<ion-item class="item-breaker animated fadeIn" ng-click=vm.onItemClick(breaker)> <div class="row row-center"> <div class=col-20> <div class=icon-breaker-position> <i>{{breaker.position}}</i> </div> </div> <div class=col> <span class=breaker-title>{{breaker.name}}</span> <br> <span class=breaker-status-label>Status:</span> <span class=breaker-status-value ng-class=breaker.readableState ng-bind=breaker.readableState> </span> </div> <div class=col-10> <i class="icon ion-chevron-right"></i> </div> </div> <ion-option-button class=button-assertive ng-click=vm.onDelete()> {{\'DELETE\' | translate}} </ion-option-button> </ion-item>'
}, function(e, t) {
  e.exports = '<div class="row rotate-wrap"> <div class=col-50> </div> </div> <div class=lc-breakers-grid> <div class=row ng-repeat="breaker in vm.positionedBreakers" ng-if="$index % 2 == 0"> <div class=col ng-repeat="i in [$index, $index+1]" ng-if="vm.positionedBreakers[i] != null"> <breaker-card breaker=vm.positionedBreakers[i]> </breaker-card> </div> </div> <div class=row ng-repeat="breaker in vm.unpositionedBreakers" ng-if="$index % 2 == 0"> <div class=col ng-repeat="i in [$index, $index+1]" ng-if="vm.unpositionedBreakers[i] != null"> <breaker-card type=unpositioned breaker=vm.unpositionedBreakers[i]> </breaker-card> </div> </div> </div> '
}, function(e, t) {
  e.exports = '<div class=breaker-usage-data-card> <div class=segment> <button class="button segment-btn" ng-click="vm.setSegment(\'YTD\')" ng-class="vm.getClass(\'YTD\')"> Year </button> <button class="button segment-btn" ng-click="vm.setSegment(\'MTD\')" ng-class="vm.getClass(\'MTD\')"> Month </button> <button class="button segment-btn" ng-click="vm.setSegment(\'WTD\')" ng-class="vm.getClass(\'WTD\')"> Week </button> <button class="button segment-btn" ng-click="vm.setSegment(\'DTD\')" ng-class="vm.getClass(\'DTD\')"> Day </button> </div> <highchart config=vm.chartConfig></highchart> </div> '
}, function(e, t) {
  e.exports = "<div on-touch=vm.updateSwitch()> <i class=\"icon ion-ios-sunny-outline\" ng-class=\"vm.size == 's' ? 'icon-stepper-small' : 'icon-stepper-large'\"> </i> </div>"
}, function(e, t) {
  e.exports = '<ion-modal-view class=modal-coachmark ng-controller="CoachMarkController as vm"> <ion-header-bar class=bar-d> <button class="button button-clear" ng-click=vm.hideCoachMark();> <i class="icon icon-md ion-close-round"></i> </button> </ion-header-bar> <ion-content scroll=false> <ion-slides options=vm.options slider=vm.slider class=coachmark-slides> <ion-slide-page class=slide-intro> <ion-scroll class=scroll-coachmark> <img ng-src={{vm.coachMarkImages[0].url}}> </ion-scroll> </ion-slide-page> <ion-slide-page class=slide-normal> <ion-scroll class=scroll-coachmark> <img ng-src={{vm.coachMarkImages[1].url}}> </ion-scroll> </ion-slide-page> <ion-slide-page class=slide-normal> <ion-scroll class=scroll-coachmark> <img ng-src={{vm.coachMarkImages[2].url}}> </ion-scroll> </ion-slide-page> <ion-slide-page class=slide-normal> <ion-scroll class=scroll-coachmark> <img ng-src={{vm.coachMarkImages[3].url}}> </ion-scroll> </ion-slide-page> <ion-slide-page class=slide-normal ng-click=vm.hideCoachMark()> <ion-scroll class=scroll-coachmark> <img ng-src={{vm.coachMarkImages[4].url}}> </ion-scroll> </ion-slide-page> </ion-slides> </ion-content> </ion-modal-view>'
}, function(e, t) {
  e.exports = "<div class=cost-info-bar ng-if=vm.session.currentUser.selectedBreakerPanel ng-init=vm.getSnapshotData()> <div class=info-cost-rate> <span class=info-cost-label-a>Consumption</span> <span class=info-cost-label-b>{{vm.chartData.year}}</span> </div> </div> <highchart config=vm.chartConfig></highchart>"
}, function(e, t) {
  e.exports = '<div class=cost-info-bar> <div class=info-cost-rate ng-click=vm.showKWHRateModal()> <span class=info-cost-label-a ng-if=vm.$resolved>kW/h Rate</span> <span class=info-cost-label-b ng-if=vm.$resolved>${{vm.kwhRate | number : 2}}</span> <span class=info-cost-label-a ng-if=vm.$resolved>Per Hour</span> <span class="info-cost-label-a loading-cover" ng-if=!vm.$resolved></span> <span class="info-cost-label-b loading-cover" ng-if=!vm.$resolved></span> <span class="info-cost-label-a loading-cover" ng-if=!vm.$resolved></span> </div> <div class=info-total-cost> <span class=info-cost-label-a ng-if=vm.$resolved>Total Cost</span> <span class=info-cost-label-b ng-if=vm.$resolved>${{vm.labelYTD | number:2}}</span> <span class=info-cost-label-a ng-if=vm.$resolved>Year to Date</span> <span class="info-cost-label-a loading-cover" ng-if=!vm.$resolved></span> <span class="info-cost-label-b loading-cover" ng-if=!vm.$resolved></span> <span class="info-cost-label-a loading-cover" ng-if=!vm.$resolved></span> </div> </div> <div class=app-chart-cont> <div class="app-chart loading-cover" ng-if=!vm.$resolved> </div> <span ng-if=vm.session.currentUser.selectedBreakerPanel ng-init=vm.getSnapshot()> <highchart config=vm.chartConfig class=app-chart ng-if=vm.$resolved> </highchart> </span> </div> '
}, function(e, t) {
  e.exports = "<span ng-if=vm.exists> <ion-item class=\"item-control-a animated fadeIn\"> <div class=item-content-control-a> <div class=col-20 ng-click=vm.toggleStatus(vm.item)> <div ng-if=\"vm.action.targetModelName === 'IotSwitch'\"> <div ng-if=vm.item.serial> <div ng-if=vm.item.connected ng-class=\"{'ON':'icon-switch-on', 'OFF': 'icon-switch-off', 'null': 'icon-switch-off'}[vm.item.power]\"></div> <div ng-if=!vm.item.connected class=icon-switch-disconnected></div> </div> <div ng-if=!vm.item.serial> <div ng-class=\"{'ON':'icon-switch-on', 'OFF': 'icon-switch-off', 'null': 'icon-switch-off'}[vm.item.power]\"> </div> </div> </div> <div ng-if=\"vm.action.targetModelName === 'ResidentialRoom'\"> <div ng-class=\"{'ON':'icon-room-on', 'OFF': 'icon-room-off', 'null': 'icon-room-off'}[vm.item.power]\"> </div> </div> </div> <div class=col ng-click=vm.toggleAccordion()> <span class=title>{{vm.item.name}}</span> </div> <div class=col-10 ng-click=vm.toggleAccordion()> <i class=icon ng-if=vm.item.canSetLevel ng-hide=\"vm.expandable==false\" ng-class=\"vm.accordion.expanded ? 'ion-chevron-up': 'ion-chevron-down'\"></i> </div> <ion-option-button class=button-assertive ng-click=vm._onDelete()> {{'DELETE' | translate }} </ion-option-button> </div> </ion-item> <div ng-if=vm.item.canSetLevel ng-init=vm.handleBrightnessLevel() expandable={{vm.accordion.expanded}} class=ml-accordion> <item-range item=vm.item on-increment=vm.stepper() on-decrement=vm.stepper() on-track-change=vm.trackRange()> </item-range> </div> </span> "
}, function(e, t) {
  e.exports = "<ion-item class=item-control-e> <div class=\"item-content-control-e animated fadeIn\"> <div class=col-20 ng-click=vm.toggleStatus()> <div ng-if=vm.device.serial> <div ng-if=vm.device.connected ng-class=\"{'ON':'icon-switch-on', 'OFF': 'icon-switch-off', 'null': 'icon-switch-off'}[vm.device.power]\"></div> <div ng-if=!vm.device.connected class=icon-switch-disconnected></div> </div> <div ng-if=!vm.device.serial> <div ng-class=\"{'ON':'icon-switch-on', 'OFF': 'icon-switch-off', 'null': 'icon-switch-off'}[vm.device.power]\"></div> </div> </div> <div class=col ng-click=vm.toggleAccordion()> <span class=title>{{vm.device.name}}</span> </div> <div class=col-10 ng-if=vm.device.canSetLevel ng-hide=\"vm.expandable==false\" ng-click=vm.toggleAccordion()> <i class=icon ng-class=\"vm.accordion.expanded ? 'ion-chevron-up': 'ion-chevron-down'\"></i> </div> </div> </ion-item> <div ng-if=vm.device.canSetLevel> <item-range item=vm.device ng-show=\"vm.accordion.expanded || vm.expandable == false\" on-track-change=vm.trackChange()> </item-range> </div> "
}, function(e, t) {
  e.exports = "<ion-item class=item-control-e> <div class=\"item-content-control-e animated fadeIn\"> <div class=col-20 ng-click=vm.toggleStatus(vm.room)> <div class=device-state ng-class=\"{'ON':'icon-room-on', 'OFF': 'icon-room-off', 'null': 'icon-room-off'}[vm.room.power]\"> </div> </div> <div class=col> <span class=title>{{vm.room.name}}</span> </div> </div> </ion-item>"
}, function(e, t) {
  e.exports = "<div ng-class=\"!vm.action?'configuration-scene-list-item':'configuration-scene-list-item-transparent'\"> <a class=scene-item ng-class=\"!vm.action?'item':''\"> <div class=\"row row-center\"> <div class=col-25> <div class=\"device-state scene-icon\"></div> </div> <div class=col-75> <span class=title>{{vm.scene.name}}</span> </div> </div> </a> </div> "
}, function(e, t) {
  e.exports = "<div class=contact-us> <span>{{'CONTACT_US_FOR_HELP' | translate }}</span> <span>M-F &nbsp;&nbsp;&nbsp; 8AM &mdash; 10PM ET</span> <span>Sat &nbsp;&nbsp;&nbsp; 9AM &mdash; 7PM ET</span> <a href=tel:18008243005>1-800-824-3005</a> <br> <span>{{'EMAIL_SUPPORT_AT' | translate }}</span> <a href=mailto:dssupport@leviton.com>dssupport@leviton.com</a> </div>"
}, function(e, t) {
  e.exports = "<ion-item class=item-control-b ng-init=vm.onSocketConnected() ng-if=$root.socketConnected> <div class=item-content-control-b> <div class=col-20 ng-click=vm.toggleStatus(switch)> <div ng-if=switch.connected class=control-state ng-class=\"{'ON':'icon-switch-on', 'OFF': 'icon-switch-off', 'null': 'icon-device-off'}[switch.power]\"> </div> <div ng-if=!switch.connected class=icon-switch-disconnected> </div> </div> <div class=col ng-click=vm.toggleAccordion()> <span class=title>{{switch.name}}</span> </div> </div> </ion-item> <div ng-if=switch.canSetLevel> <item-range item=switch on-decrement=vm.syncSwitchState(-5) on-increment=vm.syncSwitchState(5) on-track-change=vm.syncSwitchState()> </item-range> </div> "
}, function(e, t) {
  e.exports = '<button class=device-type-selection-button ng-click=vm.onSelect()> <img class=device-type-image src={{vm.imageUrl}} /> <label class="device-type-label lev-light-blue underline">{{vm.title}}</label> </button>'
}, function(e, t) {
  e.exports = '<list-divider label="{{vm.label || \'Edit Name\'}}" type="{{vm.labelType || \'a\'}}"> </list-divider> <div class="item item-input item-input-a mb-10" ng-init=vm.init()> <input type=text ng-model=vm.name ng-blur="vm.onBlur({$name: vm.name})" ng-change="vm.onChange({$name: vm.name})" placeholder={{vm.placeholder}}> </div>'
}, function(e, t) {
  e.exports = '<list-divider label={{vm.label}} type="{{vm.labelType || \'a\'}}"></list-divider> <div class="item item-input item-input-a mb-10" ng-init=vm.init()> <input type=text ng-model=vm.name placeholder={{vm.placeholder}} ng-model-options="{debounce: 500}" ng-change=vm.update()> </div> '
}, function(e, t) {
  e.exports = '<div class="lc-usage-card animated fadeIn" ng-if="vm.currentLoadCenter && vm.currentLoadCenter.updateStatus === \'\'"> <div class=lc-no-timezone ui-sref="residences.edit({id : vm.session.currentUser.selectedResidence.id})" ng-if="!vm.singlePanel && vm.session.noTimeZone && vm.session.noTimeZone === vm.session.currentUser.selectedResidence.id"> <i class="icon ion-alert-circled"></i> Set your location to view your consumption data. </div> <div class=lc-usage-card-title ng-if=vm.singlePanel> <span>{{vm.currentLoadCenter.name}} ({{vm.currentLoadCenter.status | breakerPanelStatusText}})</span> </div> <div class=lc-usage-card-title ng-if=!vm.singlePanel> <span>LOAD CENTERS</span> </div> <grid-tabs ng-model=vm.activeGraph.type ng-change=vm.activateGraph(vm.activeGraph.type)> <grid-tab value="\'COST\'">COST</grid-tab> <grid-tab value="\'CONSUMPTION\'">CONSUMPTION</grid-tab> </grid-tabs> <div class=lc-usage-data-content> <div class=lc-usage-data-graph ng-if=vm.singlePanel> <loadcenter-cost-graph ng-if="vm.activeGraph.type === \'COST\'" panel=vm.currentLoadCenter> </loadcenter-cost-graph> <loadcenter-consumption-graph ng-if="vm.activeGraph.type === \'CONSUMPTION\'"> </loadcenter-consumption-graph> </div> <div class=lc-usage-data-graph ng-if=!vm.singlePanel> <combined-cost-graph ng-if="vm.activeGraph.type === \'COST\'"> </combined-cost-graph> <combined-consumption-graph ng-if="vm.activeGraph.type === \'CONSUMPTION\'"> </combined-consumption-graph> </div> <div class=lc-usage-data-footer> <div class=row ng-if=vm.singlePanel> <button class="col button icon" ng-disabled=vm.shouldDisable() ui-sref="breakers.breakers({id: vm.session.currentUser.selectedBreakerPanel.id })"> <div class=icon-breakers-rounded></div> <span>BREAKERS</span> </button> <button class="col button icon" ng-disabled=vm.shouldDisable() ui-sref="breakers.loadcenter-events({id:vm.singlePanel && vm.currentLoadCenter.id})"> <div class=icon-loadcenter-alert></div> <span>EVENTS</span> </button> <button class="col button icon" ui-sref="breakers.loadcenter-settings({id: vm.currentLoadCenter.id})"> <div class="lc-settings-gear ion-ios-gear"></div> <span>SETTINGS</span> </button> </div> <div class=row ng-if=!vm.singlePanel> <div class=col ui-sref=breakers.panel-list> <div class=icon-breakers-rounded></div> <span>PANELS</span> </div> <div class=col ui-sref=breakers.loadcenter-events> <div class=icon-loadcenter-alert></div> <span>EVENTS</span> </div> <div class=col ui-sref=breakers.loadcenter-notifications> <div class="lc-settings-gear ion-ios-gear"></div> <span>SETTINGS</span> </div> </div> </div> </div> </div> <div class=info-card-update-dau ng-if="vm.currentLoadCenter && vm.currentLoadCenter.updateStatus !== \'\' && vm.$resolved"> <div class=lc-usage-card-title ng-if=vm.singlePanel> <span>{{vm.currentLoadCenter.name}} ({{vm.currentLoadCenter.status || \'NOT_READY\'}})</span> </div> <info-card type=d class="animated fadeIn"> <h3 class=info-card-title>UPDATING</h3> Your Leviton Load Center is currently updating and is unavailable during this process. When it is complete, you will be able to access the load center and breakers. </info-card> </div> <info-card ng-if="!vm.currentLoadCenter && vm.$resolved" type=b class="animated fadeIn"> There are no load centers in this residence. </info-card> '
}, function(e, t) {
  e.exports = "<div class=cost-info-bar ng-if=vm.session.currentUser.selectedBreakerPanel ng-init=vm.getSnapshotData()> <div class=info-cost-rate> <span class=info-cost-label-a>Consumption</span> <span class=info-cost-label-b>{{vm.chartData.year}}</span> </div> </div> <highchart config=vm.chartConfig></highchart>"
}, function(e, t) {
  e.exports = '<div class=cost-info-bar> <div class=info-cost-rate ng-click=vm.showKWHRateModal()> <span class=info-cost-label-a ng-if=!vm.shouldShowLoading()>kW/h Rate</span> <span class=info-cost-label-b ng-if=!vm.shouldShowLoading()>${{vm.kwhRate | number : 2}}</span> <span class=info-cost-label-a ng-if=!vm.shouldShowLoading()>Per Hour</span> <span class="info-cost-label-a loading-cover" ng-if=vm.shouldShowLoading()></span> <span class="info-cost-label-b loading-cover" ng-if=vm.shouldShowLoading()></span> <span class="info-cost-label-a loading-cover" ng-if=vm.shouldShowLoading()></span> </div> <div class=info-total-cost> <span class=info-cost-label-a ng-if=!vm.shouldShowLoading()>Total Cost</span> <span class=info-cost-label-b ng-if=!vm.shouldShowLoading()>${{vm.labelYTD | number:2}}</span> <span class=info-cost-label-a ng-if=!vm.shouldShowLoading()>Year to Date</span> <span class="info-cost-label-a loading-cover" ng-if=vm.shouldShowLoading()></span> <span class="info-cost-label-b loading-cover" ng-if=vm.shouldShowLoading()></span> <span class="info-cost-label-a loading-cover" ng-if=vm.shouldShowLoading()></span> </div> </div> <div class=app-chart-cont> <div class="app-chart loading-cover" ng-if=vm.shouldShowLoading()> <p ng-if="vm.panel.status === \'NOT_READY\'">Load Center is Offline</p> </div> <highchart config=vm.chartConfig class=app-chart ng-if=!vm.shouldShowLoading() ng-init=vm.getSnapshot()> </highchart> </div> '
}, function(e, t) {
  e.exports = "<highchart config=vm.chartConfig></highchart>"
}, function(e, t) {
  e.exports = "<ng-transclude> </ng-transclude>"
}, function(e, t) {
  e.exports = "<ng-transclude class=row> </ng-transclude>"
}, function(e, t) {
  e.exports = "<div ng-if=\"$root.online && $root.socketConnected\" ng-init=vm.onInit()> <div ng-if=vm.shouldShowHomeAway> <div ng-class=\"vm.isHome ? 'knob-green': 'knob-red'\" class=\"row row-center home-away-control-bar animated fadeIn\"> <div class=occupancy-mode> <div class=col> {{'OCCUPANCY_MODE' | translate}} </div> <div class=ml-10> <toggle-switch ng-model=vm.isHome ng-change=vm.onOccupancyChange() on-label=\"{{'HOME' | translate}}\" off-label=\"{{'AWAY' | translate}}\" class=control-bar-toggle> </toggle-switch> </div> </div> </div> </div> </div>"
}, function(e, t) {
  e.exports = "<div ng-if=vm.device.name> <div ng-if=vm.device.connected ng-click=vm.toggleStatus() ng-class=\"{'ON':'icon-switch-on', 'OFF': 'icon-switch-off', 'null': 'icon-switch-off'}[vm.device.power]\"> </div> <div ng-if=!vm.device.connected ng-click=vm.toggleStatus() class=icon-switch-disconnected> </div> </div> "
}, function(e, t) {
  e.exports = "<div class=\"{{'info-card-' + (type || 'a')}}\" ng-transclude> </div>"
}, function(e, t) {
  e.exports = "<ion-item class=\"item-control-a animated fadeIn\" ng-if=$root.socketConnected ng-init=vm.onSocketConnected()> <div class=item-content-control-a ng-if=vm.$resolved> <div class=col-20 ng-click=vm.toggleStatus(switch)> <div ng-if=switch.connected ng-class=\"{'ON':'icon-switch-on', 'OFF': 'icon-switch-off', 'null': 'icon-switch-off'}[switch.power]\"> </div> <div ng-if=!switch.connected class=icon-switch-disconnected> </div> </div> <div class=col ng-if=switch.canSetLevel ng-click=vm.toggleAccordion()> <span class=title>{{switch.name}}</span> </div> <div class=col ng-if=!switch.canSetLevel ng-click=vm.gotoDetails(switch);> <span class=title>{{switch.name}}</span> </div> <div class=col-10 ng-if=switch.canSetLevel ng-click=vm.toggleAccordion()> <i class=icon ng-class=\"vm.accordion.expanded ? 'ion-chevron-up': 'ion-chevron-down'\"></i> </div> <div class=col-10 ng-if=!switch.canSetLevel ng-click=vm.gotoDetails(switch);> <i class=\"icon ion-chevron-right\"></i> </div> </div> </ion-item> <div ng-if=switch.canSetLevel class=ml-accordion expandable={{vm.accordion.expanded}}> <item-range on-track-change=vm.trackRange() on-increment=vm.updateBrightness() on-decrement=vm.updateBrightness() item=switch> </item-range> <item-accordion-details label=\"{{'DEVICE_SETUP_AND_CONFIG' | translate }}\" ng-click=vm.gotoDetails(switch)> </item-accordion-details> </div> <div class=mt-5 ng-if=!vm.accordion.expanded></div>"
}, function(e, t) {
  e.exports = '<div class="item-accordion item-control-c"> <div class=item-content-control-c> <div class="row row-center"> <div class=col> <span>{{vm.label}}</span> </div> <div class=col-10> <i class="icon icon-type-a ion-ios-settings-strong ion-control-setting"></i> </div> </div> </div> </div>'
}, function(e, t) {
  e.exports = '<ion-item class=item-checkbox ng-click=vm.toggleSelection()> <div class="row row-center"> <div class=col> <span>{{vm.device.name}}</span> </div> <div class=col-10> <i class="icon lev-light-blue" ng-class="{\'ion-ios-checkmark \':vm.device.selected, \'ion-ios-circle-outline\': !vm.device.selected}"></i> </div> </div> </ion-item>'
}, function(e, t) {
  e.exports = "<div class=\"row row-center\"> <div class=col> <span class=time-range-label> -120 {{'MINUTE_SHORT' | translate}} </span> </div> <div class=col-66> <div class=range> <input type=range min=-120 max=120 step=10 ng-model=vm.rangeValue on-release=vm.onTrackChange()> </div> </div> <div class=\"col text-right\"> <span class=time-range-label> +120 {{'MINUTE_SHORT' | translate}} </span> </div> </div>"
}, function(e, t) {
  e.exports = '<div class="item-accordion item-slide-container"> <span>{{\'BRIGHTNESS\' | translate }}: </span> <span ng-bind=vm.item.brightness></span> <span>%</span> <div class=range> <div on-touch=vm.onDecrement()> <i class="icon ion-ios-sunny-outline icon-stepper-small"></i> </div> <input type=range min={{vm.item.minLevel}} max={{vm.item.maxLevel}} ng-disabled=vm.processing ng-model=vm.item.brightness on-release=vm.doTrackChange(vm.item) highlight-when-active targetable> <div on-touch=vm.onIncrement()> <i class="icon ion-ios-sunny-outline icon-stepper-large"></i> </div> </div> </div>'
}, function(e, t) {
  e.exports = '<ion-item class="item-control-a animated fadeIn" ng-class=vm.config.itemClass> <div class=item-content-control-a> <div class=col-20> <icon-device device=vm.action on-toggle=vm.onActionToggle()></icon-device> </div> <div class=col ng-click=vm.onClickBody()> <span class=title>{{vm.action.name}}</span> </div> <div class=col-10 ng-click=vm.onClickChevron()> <i ng-if="vm.action.canSetLevel && !vm.disableCollapsible" class=icon ng-class="vm.accordion.expanded ? \'ion-chevron-up\': \'ion-chevron-down\'"> </i> <i ng-if="!vm.action.canSetLevel && !vm.disableCollapsible" class="icon ion-chevron-right"> </i> </div> </div> <ion-option-button class=button-assertive ng-click=vm.doOnDelete()>Delete</ion-option-button> </ion-item> <div ng-if=vm.action.canSetLevel class=ml-accordion expandable={{vm.accordion.expanded}}> <item-range on-track-change=vm.trackRange() on-increment=vm.updateBrightness() on-decrement=vm.updateBrightness() item=vm.action> </item-range> </div> <div ng-class=vm.config.borderBottomClass class="animated fadeIn"></div> <div class=mt-5 ng-if=!vm.accordion.expanded></div>'
}, function(e, t) {
  e.exports = '<ion-item class=item-schedule-wizard> <div class="row row-center" ng-click=vm.toggleSelection()> <div class=col> <span>{{vm.device.name}}</span> </div> <div class=col-10> <i class="icon lev-light-blue" ng-class="{\'ion-ios-checkmark \':vm.device.selected, \'ion-ios-circle-outline\': !vm.device.selected}"></i> </div> </div> </ion-item>'
}, function(e, t) {
  e.exports = "<ion-item class=\"item-control-a animated fadeIn\"> <div class=item-content-control-a> <div class=col-20 ng-click=vm.onToggleSchedule(vm.schedule)> <div ng-class=\"{'true':'icon-schedule-on', 'false': 'icon-schedule-off', 'null': 'icon-schedule-off'}[vm.schedule.enabled]\"> </div> </div> <div class=col ng-click=vm.editSchedule()> <span class=title>{{vm.schedule.name}}</span> </div> <div class=col-10 ng-click=vm.editSchedule()> <i class=\"detail-icon ion-chevron-right\"></i> </div> </div> <ion-option-button class=button-assertive ng-click=vm.onDelete(vm.schedule)> {{'DELETE' | translate }} </ion-option-button> </ion-item>"
}, function(e, t) {
  e.exports = "<ion-footer-bar class=bar-setup-footer> <h1 class=title> <a class=button ng-click=vm.cancelSetup()> {{'CANCEL' | translate}} </a> </h1> </ion-footer-bar>"
}, function(e, t) {
  e.exports = '<ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <button class="button button-clear" ng-if=showBack ng-click=onBack()> <i class="icon ion-chevron-left"></i> {{noBackText ? \'\': \'\'}} </button> </ion-nav-buttons> <ion-nav-buttons side=right> <button class="button button-clear" ng-if=showContinue ng-click=onContinue($event)> {{continueText || \'CONTINUE\'| translate}} <i class="icon ion-chevron-right"></i> </button> </ion-nav-buttons> <ion-nav-title>{{title}}</ion-nav-title> </ion-nav-bar>'
}, function(e, t) {
  e.exports = "<ion-footer-bar class=bar-setup-footer> <h1 class=title> <a class=button ng-click=vm.cancelSetup()> {{'CANCEL' | translate}} </a> </h1> </ion-footer-bar>"
}, function(e, t) {
  e.exports = '<ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <button class="button button-clear" ng-if=showBack ng-click=onBack()> <i class="icon ion-chevron-left"></i> {{noBackText ? \'\': \'\'}} </button> </ion-nav-buttons> <ion-nav-buttons side=right> <button class="button button-clear" ng-if=showContinue ng-click=onContinue($event)> {{continueText || \'CONTINUE\'| translate}} <i class="icon ion-chevron-right" ng-if=!continueIconHide></i> </button> </ion-nav-buttons> <ion-nav-title>{{title}}</ion-nav-title> </ion-nav-bar>'
}, function(e, t) {
  e.exports = "<div class=\"{{'item-list-divider-'+(type || 'a')}}\"> <span>{{label}}</span> <span ng-transclude></span> </div>"
}, function(e, t) {
  e.exports = '<ion-list> <ion-item ng-repeat="day in vm.weekDays" ng-click=vm.onToggleDay(day) class=item-schedule-day> <div class="row row-center"> <div class=col-10> <i class="icon ion-ios-calendar-outline"></i> </div> <div class=col> <span>{{day.name}}</span> </div> <div class=col-10> <i class=icon ng-class="{\'ion-ios-checkmark lev-light-blue\':day.selected , \'ion-ios-circle-outline lev-gray\' : !day.selected}"> </i> </div> </div> </ion-item> </ion-list>'
}, function(e, t) {
  e.exports = '<button class="button button-clear" ng-click=vm.showAddButtonActionSheet()> <i class="icon ion-plus"></i> </button>'
}, function(e, t) {
  e.exports = "<button type=button class=\"button button-clear\" ng-click=vm.triggerBackEvent()> <i class=icon ng-class=\"vm.isIOS ? 'ion-chevron-left':'ion-android-arrow-back'\"></i> </button>"
}, function(e, t) {
  e.exports = '<button class="button button-clear" type={{vm.type}}> {{vm.text}} <i ng-if=vm.hasIcon class=icon ng-class=vm.icon></i> </button>'
}, function(e, t) {
  e.exports = '<div class="bar bar-clear navbar-secret"> <button class="button button-clear" ng-click=vm.startServerChange()></button> </div>'
}, function(e, t) {
  e.exports = '<div class=prompt-server-select> <div ng-if=!vm.devAuthorized> <input type=text class=input-server-type ng-model=vm.devPassword ng-keyup=vm.onKeyPress($event) placeholder="Enter Auth" autocorrect=off autocapitalize=none /> </div> <div ng-if=vm.devAuthorized> <ion-radio icon=ion-ios-checkmark class=item-radio-a ng-repeat="server in vm.servers" ng-click=vm.selectServer(server);> {{server.type}} </ion-radio> <input type=text autocorrect=off autocapitalize=none ng-if="vm.selectedServer.type === \'CUSTOM\'" ng-model=vm.selectedServer.apiUrl placeholder="Enter Custom API"/> </div> </div>'
}, function(e, t) {
  e.exports = '<div class="card card-connection"> <div class=title-connection>Nest</div> <div class=icon-connection> <div class=icon-connections-nest-new></div> </div> <div class=details-connection> {{\'NEST_CONN_CARD_INFO\' | translate }} </div> <div class=button-group-connection> <div class="row animated fadeIn" ng-if=vm.nestIntegrationResolved> <div class=col> <button class="button button-clear" ng-click=vm.openSupportPage()>Support</button> </div> <div class=col ng-if=!vm.hasNestIntegration> <button class="button button-clear" ng-click=vm.integrateNest()> {{\'INTEGRATE\' | translate }} </button> </div> <div class=col ng-if=vm.hasNestIntegration> <button class="button button-clear" ng-click=vm.reconfigureNest()> {{\'RECONFIGURE\' | translate }} </button> </div> <div class=col ng-if=vm.hasNestIntegration> <button class="button button-clear" ng-click=vm.deauthorizeNest()> {{\'DEAUTHORIZE\' | translate }} </button> </div> </div> </div> </div>'
}, function(e, t) {
  e.exports = '<info-card type=b ng-if=!$root.online class=info-card-offline> <div class=info-card-offline-container translate=MOBILE_DEVICE_SEEMS_OFFLINE> </div> <a ng-click=vm.attemptReconnect() class="button-block-a button-balanced button-reconnect"> {{\'RECONNECT\' | translate }} </a> <a ng-click=vm.retryLogin() class="button-block-a button-balanced"> {{\'SIGN_OUT\' | translate }} </a> </info-card> <div ng-if="$root.online && !$root.socketConnected && $root.socketReconnectAttemptCount > 1" ng-init=vm.attemptReconnectSocket()> <info-card type=b class=info-card-offline> <div class=info-card-offline-container translate=CLOUD_IS_DOWN> </div> </info-card> </div> '
}, function(e, t) {
  e.exports = '<ion-item class="item-control-a animated fadeIn"> <div class=item-content-control-a ng-click=vm.onItemClick(vm.panel)> <div class=col-20> <div class=icon-breakers-rounded-white> </div> </div> <div class=col> <span class=title>{{vm.panel.name}}</span> </div> <div class=col-10> <i class="icon ion-chevron-right"></i> </div> </div> </ion-item> <div class=mt-5></div>'
}, function(e, t) {
  e.exports = "<ion-popover-view class=popover-password-criteria> <ion-content> <p translate=PASSWORD_CRITERIA_INFO></p> </ion-content> </ion-popover-view>"
}, function(e, t) {
  e.exports = "<div ng-hide=vm.hiddenFromList> <div ng-if=$root.socketConnected ng-init=vm.onSocketConnected()> <ion-item class=\"item-control-a animated fadeIn\"> <div class=item-content-control-a ng-if=vm.$resolved> <div class=col-20 ng-click=vm.toggleStatus(switch)> <div ng-if=switch.connected ng-class=\"{'ON':'icon-switch-on', 'OFF': 'icon-switch-off', 'null': 'icon-switch-off'}[switch.power]\"></div> <div ng-if=!switch.connected class=icon-switch-disconnected></div> </div> <div class=col ng-if=switch.canSetLevel ng-click=vm.toggleAccordion()> <span class=title>{{switch.name}}</span> </div> <div class=col-10 ng-if=switch.canSetLevel ng-click=vm.toggleAccordion();> <i class=icon ng-class=\"vm.accordion.expanded ? 'ion-chevron-up': 'ion-chevron-down'\"></i> </div> <div class=col ng-if=!switch.canSetLevel ng-click=vm.gotoDetails(switch);> <span class=title>{{switch.name}}</span> </div> <div class=col-10 ng-if=!switch.canSetLevel ng-click=vm.gotoDetails(switch);> <i class=\"icon ion-chevron-right\"></i> </div> </div> <ion-option-button class=button-assertive ng-click=vm.onRoomDeviceListItemRemoval(switch)> {{'UNASSIGN' | translate }} </ion-option-button> </ion-item> </div> <div ng-if=switch.canSetLevel class=ml-accordion expandable={{vm.accordion.expanded}}> <item-range item=switch on-increment=vm.onRangeButtonChange() on-decrement=vm.onRangeButtonChange() on-track-change=vm.trackRange()> </item-range> <item-accordion-details label=\"{{'DEVICE_SETUP_AND_CONFIG' | translate }}\" ng-click=vm.gotoDetails(switch)> </item-accordion-details> </div> <div class=mb-5></div> </div>"
}, function(e, t) {
  e.exports = "<ion-item class=\"item-control-a animated fadeIn\" ng-if=$root.socketConnected ng-init=vm.onSocketConnected()> <div class=item-content-control-a ng-if=vm.$resolved> <div class=col-20 ng-click=vm.changeRoomState(room)> <div ng-class=\"{'ON':'icon-room-on', 'OFF': 'icon-room-off', 'undefined': 'icon-room-off'}[room.power]\"></div> </div> <div class=col ng-click=vm.toggleAccordion()> <span class=title>{{room.name}}</span> <i class=icon-room-disconnect ng-if=\"vm.room.iotSwitches.length > 0 && !room.allConnected\"></i> </div> <div class=col-10 ng-click=vm.toggleAccordion()> <i class=icon ng-class=\"vm.accordion.expanded ? 'ion-chevron-up': 'ion-chevron-down'\"></i> </div> </div> <ion-option-button class=button-assertive ng-click=vm.deleteRoom(room) ng-if=vm.$resolved> {{'REMOVE' | translate }} </ion-option-button> </ion-item> <div expandable={{vm.accordion.expanded}} class=ml-accordion> <div class=control-accordion ng-if=vm.$resolved> <div class=item-accordion ng-repeat=\"iotSwitch in vm.room.iotSwitches\"> <control-switch-item device=iotSwitch></control-switch-item> </div> <item-accordion-details label=\"{{'ROOM_SETUP_AND_CONFIG' | translate }}\" ng-click=vm.gotoRoomDetails(room)> </item-accordion-details> </div> </div> <div class=mt-5 ng-if=!vm.accordion.expanded></div>"
}, function(e, t) {
  e.exports = "<ion-footer-bar class=bar-setup-footer> <h1 class=title> <a class=button ng-click=vm.cancelSetup()> {{'CANCEL' | translate}} </a> </h1> </ion-footer-bar>"
}, function(e, t) {
  e.exports = '<ion-item class="item-control-a animated fadeIn" ng-hide=vm.hiddenFromList> <div class=item-content-control-a> <div class=col-20 ng-click=vm.executeScene(vm.scene)> <div class=icon-scene-on> </div> </div> <div class=col ng-click=vm.editScene(vm.scene)> <span class=title>{{vm.scene.name}}</span> </div> <div class=col-10 ng-click=vm.editScene(vm.scene)> <i class="icon ion-chevron-right"></i> </div> </div> <ion-option-button class=button-assertive ng-click=vm.onSceneRemoval(vm.scene)> {{\'DELETE\' | translate }} </ion-option-button> </ion-item> <div class=mb-5></div>'
}, function(e, t) {
  e.exports = "<ion-footer-bar class=bar-setup-footer> <h1 class=title> <a class=button ng-click=vm.cancelSetup()> {{'CANCEL' | translate}} </a> </h1> </ion-footer-bar>"
}, function(e, t) {
  e.exports = '<ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <button class="button button-clear" ng-if=showBack ng-click=onBack()> <i class="icon ion-chevron-left"></i> {{noBackText ? \'\': \'\'}} </button> </ion-nav-buttons> <ion-nav-buttons side=right> <button class="button button-clear" ng-if=showContinue ng-click=onContinue($event)> {{continueText || \'CONTINUE\'| translate}} <i class="icon ion-chevron-right"></i> </button> </ion-nav-buttons> <ion-nav-title>{{title}}</ion-nav-title> </ion-nav-bar>'
}, function(e, t) {
  e.exports = "<div class=schedule-time-card> <div class=time-card-display-label ng-click=vm.onTimeLabelClick()> <span ng-if=vm.time.ABSOLUTE.selected>{{vm.time.ABSOLUTE.timeLabel | date:'hh:mm a'}}</span> <span ng-if=vm.time.SUNRISE.selected>{{vm.time.SUNRISE.schedule.minute | scheduleTimeLabel: 'Sunrise'}}</span> <span ng-if=vm.time.SUNSET.selected> {{vm.time.SUNSET.schedule.minute | scheduleTimeLabel : 'Sunset'}}</span> </div> <ion-item class=schedule-time-type ng-click=\"vm.updateTimeType('ABSOLUTE');\"> <div class=\"row row-center\"> <div class=col>{{'SELECT_A_TIME' | translate }}</div> <div class=col-10> <i class=icon ng-class=\"{'ion-ios-checkmark':vm.time.ABSOLUTE.selected, 'ion-ios-circle-outline': !vm.time.ABSOLUTE.selected}\"></i> </div> </div> </ion-item> <ion-item class=schedule-time-type ng-click=\"vm.updateTimeType('SUNRISE');\"> <div class=\"row row-center\"> <div class=col>{{'RUN_AT_SUNRISE' | translate }}</div> <div class=col-10> <i class=icon ng-class=\"{'ion-ios-checkmark':vm.time.SUNRISE.selected, 'ion-ios-circle-outline': !vm.time.SUNRISE.selected}\"></i> </div> </div> </ion-item> <ion-item ng-if=vm.time.SUNRISE.selected class=schedule-time-range> <item-range-schedule on-change=vm.applyOnDataChange() range-value=vm.time.SUNRISE.schedule.minute></item-range-schedule> </ion-item> <ion-item class=schedule-time-type ng-click=\"vm.updateTimeType('SUNSET');\"> <div class=\"row row-center\"> <div class=col>{{'RUN_AT_SUNSET' | translate }}</div> <div class=col-10> <i class=icon ng-class=\"{'ion-ios-checkmark':vm.time.SUNSET.selected, 'ion-ios-circle-outline': !vm.time.SUNSET.selected}\"></i> </div> </div> </ion-item> <ion-item ng-if=vm.time.SUNSET.selected class=schedule-time-range> <item-range-schedule on-change=vm.applyOnDataChange() range-value=vm.time.SUNSET.schedule.minute></item-range-schedule> </ion-item> </div>"
}, function(e, t) {
  e.exports = "<ion-footer-bar class=bar-setup-footer> <h1 class=title> <a class=button ng-click=vm.cancelSetup()> {{'CANCEL' | translate}} </a> </h1> </ion-footer-bar>"
}, function(e, t) {
  e.exports = '<ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <button class="button button-clear" ng-if=showBack ng-click=onBack()> <i class="icon ion-chevron-left"></i> {{noBackText ? \'\': \'\'}} </button> </ion-nav-buttons> <ion-nav-buttons side=right> <button class="button button-clear" ng-if=showContinue ng-click=onContinue($event)> {{continueText || \'CONTINUE\'| translate}} <i class="icon ion-chevron-right"></i> </button> </ion-nav-buttons> <ion-nav-title>{{title}}</ion-nav-title> </ion-nav-bar>'
}, function(e, t) {
  e.exports = '<div class=""> <div class=heading> {{\'SET_TIME\' | translate }} </div> <div class="row content-datepicker" ng-class="{\'padding_left_15px\':time.format == 12}"> <div class="col col-25" ng-class="{\'col-offset-20 col-25\':time.format == 24}"> <button type=button class="button button-clear button-small button-dark time_picker_arrows" on-hold=increaseHoursHold() on-release=increaseHoursRelease() ng-click=increaseHours()> <i class="icon ion-chevron-up"></i></button> <div ng-bind=time.hours class=time_picker_box_text></div> <button type=button class="button button-clear button-small button-dark time_picker_arrows" on-hold=decreaseHoursHold() on-release=decreaseHoursRelease() ng-click=decreaseHours()> <i class="icon ion-chevron-down"></i></button> </div> <label class="col col-10 time_picker_colon"> : </label> <div class="col col-25" ng-class="{\'col-25\':time.format == 24}"> <button type=button class="button button-clear button-small button-dark time_picker_arrows" on-hold=increaseMinutesHold() on-release=increaseMinutesRelease() ng-click=increaseMinutes()> <i class="icon ion-chevron-up"></i> </button> <div ng-bind=time.minutes class=time_picker_box_text></div> <button type=button class="button button-clear button-small button-dark time_picker_arrows" on-hold=decreaseMinutesHold() on-release=decreaseMinutesRelease() ng-click=decreaseMinutes()> <i class="icon ion-chevron-down"></i> </button> </div> <label class="col col-10 time_picker_colon" ng-if="time.format == 12"> : </label> <div class="col col-25" ng-if="time.format == 12"> <button type=button class="button button-clear button-small button-dark time_picker_arrows" ng-click=changeMeridian()> <i class="icon ion-chevron-up"></i> </button> <div ng-bind=time.meridian class=time_picker_box_text></div> <button type=button class="button button-clear button-small button-dark time_picker_arrows" ng-click=changeMeridian()> <i class="icon ion-chevron-down"></i> </button> </div> </div> </div>'
}, function(e, t) {
  e.exports = "<ion-item class=\"item-control-d animated fadeIn\"> <div class=\"row row-center\"> <div class=col-20 ng-click=vm.toggleStatus(vm.switch)> <div class=control-state ng-show=vm.switch ng-class=\"vm.switch.connected?({'ON':'icon-switch-on', 'OFF': 'icon-switch-off', 'null': 'icon-switch-off'}[vm.switch.power]):'icon-switch-disconnected'\"> </div> </div> <div class=col ng-if=vm.switch.canSetLevel ng-click=vm.toggleAccordion()> <span class=title>{{vm.switch.name}}</span> </div> <div class=col ng-if=!vm.switch.canSetLevel> <span class=title>{{vm.switch.name}}</span> </div> <div class=col-10 ng-if=vm.switch.canSetLevel ng-click=vm.toggleAccordion()> <i class=icon ng-class=\"vm.accordion.expanded ? 'ion-chevron-up': 'ion-chevron-down'\"></i> </div> </div> </ion-item> <div ng-if=vm.switch.canSetLevel class=ml-accordion expandable={{vm.accordion.expanded}}> <item-range item=vm.switch on-track-change=vm.trackRange()> </item-range></div> <div class=line-a></div>"
}, function(e, t) {
  e.exports = "<ion-view> <ion-nav-bar class=bar-clear></ion-nav-bar> <ion-content class=has-padding> <div class=lev-logo-main> <img ng-src=./img/logo/leviton-logo.svg alt=\"Leviton Logo\"> </div> <info-card type=c> <h3 class=info-card-title ng-if=!vm.emailStillInvalid>{{'THANKS_FOR_REGISTERING' | translate }}</h3> <h3 class=info-card-title ng-if=vm.emailStillInvalid>{{'CHECK_YOUR_EMAIL' | translate }}</h3> <p> {{'VERIFICATION_EMAIL_SEND' | translate }} </p> <p> {{'IF_EMAIL_NOT_RECEIVED' | translate }} </p> <div class=row> <div class=col> <a class=button-clear-gray ng-click=vm.cancelLoginFlow()>{{'CANCEL' | translate }}</a> </div> <div class=col> <a class=button-clear-gray ng-click=vm.resendConfirmation()>{{'RESEND' | translate }}</a> </div> <div class=col> <a class=button-clear-confirm ng-click=vm.continueByLoggingIn()>{{'CONTINUE' | translate }}</a> </div> </div> </info-card> </ion-content> </ion-view>"
}, function(e, t) {
  e.exports = '<ion-view> <navbar-secret></navbar-secret> <ion-content class="has-padding has-header"> <div class=lev-logo-main> <img ng-src=./img/logo/leviton-logo.svg alt="Leviton Logo"> </div> <span ng-init="vm.server = vm.serverUpdater.getServerInfo()"> <div ng-if="$root.isDev && ($root.cloud === \'dev\' || $root.cloud === \'qa\')" class="text-info assertive mh-15 mt-15"> <span>Warning, the <span class=text-highlight>{{vm.server.type}}</span> cloud is for developers & testers.</span> </div> </span> <form name=loginForm ng-submit="vm.doLogin(vm.user, loginForm.$valid)" novalidate> <div class=login-form> <div class=list> <label for=email class="item item-input"> <input id=email name=email ng-model=vm.user.email autocomplete=false type=email placeholder="{{\'EMAIL\' | translate }}" required ng-change=vm.onLoginEmailChange(vm.user.email) ng-maxlength=254> </label> <div class=text-validation ng-if="(loginForm.email.$touched || loginForm.$submitted)"> <div ng-messages=loginForm.email.$error> <p ng-message=minlength>Username has to be of minimum 6 characters.</p> <p ng-message=maxlength>Username can be up to 254 characters.</p> <p ng-message=required>Username is required.</p> <p ng-message=email>Username should be an email address.</p> </div> </div> <label for=password class="item item-input"> <i ng-class="vm.showPassword == \'password\' ? \'ion-eye\' : \'ion-eye-disabled\'" class="icon placeholder-icon placeholder-icon-right" on-tap="vm.showPassword == \'password\' ? (vm.showPassword = \'text\') : (vm.showPassword = \'password\')"></i> <input autocorrect=off autocapitalize=none id=password name=password ng-model=vm.user.password autocomplete=false type={{vm.showPassword}} placeholder="{{\'PASSWORD\' | translate }}" required ng-maxlength=30> </label> <div class=text-validation ng-if="(loginForm.password.$touched || loginForm.$submitted)"> <div ng-messages=loginForm.password.$error> <p ng-message=minlength>Password has to be of minimum 8 characters.</p> <p ng-message=maxlength>Password can be up to 30 characters.</p> <p ng-message=required>Password is required.</p> </div> </div> </div> <div class="button-hyperlink-b mv-10" ui-sref=accounts.reset-password> {{\'FORGOT_PASSWORD\' | translate }}? </div> <div class="row row-center"> <div class=col-20> <input type=checkbox class=lev-checkbox ng-model=vm.user.rememberMe> </div> <div class="col-80 lev-gray checkbox-text-a"> {{\'REMEMBER_ME\' | translate }} </div> </div> </div> <button type=submit class="button-block-a button-balanced mt-30"> {{\'SIGN_IN\' | translate }} </button> <button class="button-block-a button-balanced" ui-sref=accounts.signup> {{\'SIGN_UP_FOR_ACCOUNT\' | translate }} </button> </form> </ion-content> </ion-view> '
}, function(e, t) {
  e.exports = "<ion-view> <ion-nav-bar class=bar-clear> <ion-nav-back-button></ion-nav-back-button> <ion-nav-title> {{'RESET_PASSWORD' | translate }} </ion-nav-title> </ion-nav-bar> <ion-content class=has-padding> <div class=lev-logo-main> <img ng-src=./img/logo/leviton-logo.svg alt=\"Leviton Logo\"> </div> <form name=resetPasswordForm novalidate ng-submit=\"vm.doResetPassword(vm.user, resetPasswordForm.$valid)\"> <div class=reset-password-form> <div class=list> <label class=\"item item-input\"> <input name=email type=email ng-model=vm.user.email required placeholder=yourname@example.com> </label> <div class=text-validation ng-messages=resetPasswordForm.email.$error ng-if=resetPasswordForm.email.$touched> <p ng-message=required>{{'EMAIL_REQUIRED_FOR_RESETTING' | translate }}</p> <p ng-message=email>{{'ENTER_VALID_EMAIL' | translate }}</p> </div> </div> <button class=\"button-block-a button-balanced\" type=submit ng-disabled=resetPasswordForm.$invalid> {{'RESET_PASSWORD' | translate }} </button> </div> </form> </ion-content> </ion-view>"
}, function(e, t) {
  e.exports = '<ion-view title="{{\'SIGN_UP\' | translate }}"> <ion-nav-bar class=bar-clear> <ion-nav-back-button></ion-nav-back-button> </ion-nav-bar> <ion-content class=has-padding> <div class=lev-logo-main> <img ng-src=./img/logo/leviton-logo.svg alt="Leviton Logo"> </div> <form name=signupForm novalidate ng-submit="vm.doSignup(vm.user, signupForm.$valid)"> <div class=signup-form> <div class=list> <label class="item item-input"> <input name=firstName ng-model=vm.user.firstName type=text placeholder="{{\'FIRST_NAME\' | translate }}" required> </label> <label class="item item-input"> <input name=lastName ng-model=vm.user.lastName type=text placeholder="{{\'LAST_NAME\' | translate }}" required> </label> <label class="item item-input"> <input name=email ng-model=vm.user.email type=email placeholder="{{\'EMAIL\' | translate }}" required ng-minlength=6 ng-maxlength=254> </label> <label class="item item-input"> <i ng-class="vm.showPassword == \'password\' ? \'ion-eye\' : \'ion-eye-disabled\'" class=placeholder-icon-right on-tap="vm.showPassword == \'password\' ? (vm.showPassword = \'text\') : (vm.showPassword = \'password\')"></i> <input autocorrect=off autocapitalize=none name=password ng-model-options="{debounce: 300}" ng-model=vm.user.password ng-trim=false ng-change="vm.validatePasswordStrength(vm.user.password); vm.validatePasswordsMatch(); vm.hidePopover($event);" ng-focus=vm.showPopover($event) ng-blur=vm.hidePopover($event) type={{vm.showPassword}} placeholder="{{\'PASSWORD\' | translate }}" required> </label> <div class=text-validation ng-if=vm.passwordValidationResult.errors.length> <p>{{vm.passwordValidationResult.errors[0].message}}</p> </div> <label class="item item-input"> <i ng-class="vm.showPasswordCheck == \'password\' ? \'ion-eye\' : \'ion-eye-disabled\'" class=placeholder-icon-right on-tap="vm.showPasswordCheck == \'password\' ? (vm.showPasswordCheck = \'text\') : (vm.showPasswordCheck = \'password\')"></i> <input autocorrect=off autocapitalize=none name=password ng-trim=false ng-disabled=vm.passwordValidationResult.errors.length ng-model-options="{debounce: 300}" ng-model=vm.user.passwordCheck ng-change=vm.validatePasswordsMatch() type={{vm.showPasswordCheck}} placeholder="{{\'PASSWORD_RETYPE\' | translate }}" required> </label> <div class=text-validation ng-if=vm.passwordMisMatchError> <p>{{vm.passwordMisMatchError}}</p> </div> </div> <div class=terms-agreement> <div class="row row-top"> <div class=col-20> <input type=checkbox class=lev-checkbox ng-model=vm.licenseAgreed> </div> <div class="col-80 checkbox-text-a"> {{\'TERMS_AND_CONDITION\' | translate }} <br> <a ng-click="vm.openEula(\'terms\');" translate=TERMS_OF_USE class=button-hyperlink-b></a> / <a ng-click="vm.openEula(\'privacy\');" translate=PRIVACY_POLICY class=button-hyperlink-b></a> </div> </div> </div> </div> <button ng-disabled="!vm.isComplete || !signupForm.$valid || !vm.licenseAgreed" type=submit class="button-block-a button-balanced"> {{\'SIGN_UP\' | translate }} </button> </form> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view title={{vm.activity.name}}> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button on-back-click=vm.onBackClick()></back-button> </ion-nav-buttons> <ion-nav-buttons side=right> <nav-right-button ng-click=vm.onUpdateActivity(vm.activity) ng-show="vm.dirty && !vm.processing" text="{{\'SAVE\' | translate }}"> </nav-right-button> </ion-nav-buttons> <ion-nav-title> {{switch.name}} <span class=nav-title-warning ng-if="switch && switch.connected == false"> ({{\'NOT_CONNECTED\' | translate }}) </span> </ion-nav-title> </ion-nav-bar> <ion-content class="has-header has-padding"> <edit-name-simple name=vm.activity.name label="{{\'EDIT_ACTIVITY_NAME\' | translate }}" on-change=vm.makeDirty()> </edit-name-simple> <list-divider label="{{\'CONFIGURATION\' | translate }}" type=a></list-divider> <a ng-click=vm.onEdit() class="button-clear-a ml-15 mb-10 mt-10"> <i class="icon ion-plus"></i> {{\'ADD_THINGS_TO_ACTIVITY\' | translate }} </a> <ion-list> <div ng-repeat="actionItem in vm.actions track by actionItem.id"> <configuration-action-list-item action=actionItem on-update=vm.onActionChange on-delete=vm.removedDeletedActionFromList> </configuration-action-list-item> <div class=mb-5></div> </div> </ion-list> <button on-tap=vm.deleteActivity() class=button-block-c> <span class=lev-red>{{\'REMOVE_ACTIVITY\' | translate}}</span> </button> </ion-content> </ion-view> '
}, function(e, t) {
  e.exports = "<div class=activity-list-modal> <p>{{ 'ACTIVITY_RUN_PROMPT' | translate}}</p> <div class=mt-20> <input type=checkbox ng-model=vm.promptChecked> <div>{{'DONT_ASK_AGAIN' | translate }}</div> </div> </div>"
}, function(e, t) {
  e.exports = '<ion-view> <ion-nav-buttons side=right> <add-action-sheet></add-action-sheet> </ion-nav-buttons> <ion-nav-title ng-click=$root.showResidenceListActionSheet()> <span ng-bind=vm.session.currentUser.selectedResidence.name></span> <span class="icon ion-chevron-down"></span> </ion-nav-title> <ion-content class=has-padding> <home-away-control-bar></home-away-control-bar> <offline-card></offline-card> <div ng-if="$root.online && $root.socketConnected"> <ion-list ng-if="vm.$resolved && !vm.showAddButton"> <div ng-repeat="activity in vm.activities track by $index"> <ion-item class="item-control-a animated fadeIn"> <div class=item-content-control-a> <div class=col-20> <div ng-click=vm.onExecute(activity) class=icon-activity-on></div> </div> <div class=col ui-sref=activities.details({activityId:activity.id})> <span class=title>{{activity.name}}</span> </div> <div class=col-10 ui-sref=activities.details({activityId:activity.id})> <i class="icon ion-chevron-right"></i> </div> </div> <ion-option-button class=button-assertive ng-click=vm.onDelete(activity)> {{\'DELETE\' | translate}} </ion-option-button> </ion-item> <div class=mb-5></div> </div> </ion-list> <info-card type=b ng-if="vm.$resolved && vm.showAddButton"> <p translate=NO_ACTIVITY_CARD></p> <a ui-sref=activity-setup-wizard.add-activity-name class="button-block-a button-balanced"> {{\'ADD_ACTIVITY_NOW\' | translate}} </a> </info-card> </div> </ion-content> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view title="{{\'STEP_3_3\' | translate}}"> <ion-nav-buttons side=right> <nav-right-button ng-if="vm.selectedItems && vm.selectedItems.length" ng-click=vm.onNext() text="{{\'CONTINUE\' | translate}}" has-icon=true></nav-right-button> </ion-nav-buttons> <ion-content class=has-header> <div class=setup-container> <div class="setup-text text-center"> <p ng-if="vm.type === \'device\'" translate=ACTIVITY_SELECT_DEVICES></p> <p ng-if="vm.type === \'room\'" translate=ACTIVITY_SELECT_ROOM></p> </div> <div ng-if="vm.items && vm.items.length === 0" class="setup-text text-center"> <h4 class="lev-gray capitalize"> <span ng-if="vm.type == \'room\'">{{\'NO_AVAILABLE_ROOMS\' | translate }}</span> <span ng-if="vm.type == \'device\'">{{\'NO_AVAILABLE_DEVICES\' | translate }}</span> </h4> </div> </div> <div ng-if=vm.items.length> <ion-list class=space-bottom> <div class="item item-divider">{{(vm.type === \'device\' ? \'AVAILABLE_DEVICES\' : \'AVAILABLE_ROOMS\') | translate}}</div> <span ng-repeat="item in vm.items"> <ion-checkbox class=item-checkbox-a style=height:50px ng-checked=item.selected ng-click=vm.selectItem(item)>{{item.name}} </ion-checkbox> <configuration-iot-switch-list-item ng-if="vm.type === \'device\' && item.selected" device=item> </configuration-iot-switch-list-item> <configuration-room-list-item ng-if="vm.type === \'room\' && item.selected" room=item> </configuration-room-list-item> </span> </ion-list> <br><br><br><br> <br><br><br><br> <br><br><br><br> </div> <div ng-if=vm.selectedItem> <div class="setup-text text-center mt-15"> {{\'SELECT_STATE_FOR\' | translate }} {{vm.selectedItem.name}}. </div> <configuration-iot-switch-list-item ng-if="vm.type ==\'device\'" device=vm.selectedItem expandable=false> </configuration-iot-switch-list-item> <configuration-room-list-item ng-if="vm.type ==\'room\'" room=vm.selectedItem expandable=false> </configuration-room-list-item> </div> <div class=button-wrap-a ng-if=vm.selectedItem> <button class="button button-block button-clear" ng-click=vm.tryIt(vm.selectedItem)> <span class=l-light-blue> {{\'TRY_IT\' | translate }} </span> </button> <button class="button button-block button-balanced" ng-click=vm.onNext()> <span class="">{{\'FINISH\' | translate }}</span> </button> </div> </ion-content> <activity-setup-cancel></activity-setup-cancel> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view title="{{\'STEP_1_3\' | translate }}"> <ion-nav-buttons side=right> <nav-right-button ng-click=vm.onContinue() text="{{\'CONTINUE\' | translate}}" has-icon=true></nav-right-button> </ion-nav-buttons> <ion-content class=has-header> <div class=setup-container> <h3 class=setup-header translate=SETUP_AN_ACTIVITY></h3> <p class="setup-text text-center"> {{\'NAME_ACTIVITY_DESCRIPTION\' | translate }} </p> <div class="item item-input item-input-a"> <input type=search ng-model=vm.name placeholder="{{\'MY_ACTIVITY\' | translate }}"> </div> </div> </ion-content> <activity-setup-cancel></activity-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = "<ion-view title=\"{{(!vm.isActivityPending ? 'STEP_2_3' : 'COMPLETE_ACTIVITY') | translate }}\"> <ion-content class=\"has-header setup-content\"> <div class=setup-container> <h3 ng-if=!vm.isActivityPending class=setup-header translate=CHOOSE_COMMAND_TYPE></h3> <div class=\"setup-text text-center\"> <span ng-if=!vm.isActivityPending translate=ADD_COMMAND_TEXT></span> <span ng-if=vm.isActivityPending translate=ACTIVITY_ANOTHER_ITEM_PROMPT></span> <span ng-if=!vm.isActivityPending translate=ACTIVITY_ON_SAVE_INSTRUCT></span> <p class=padding-vertical translate=SELECT_OPTION_BELOW></p> <div class=mv-15> <div ng-repeat=\"type in ['device','room']\" ng-click=vm.onNext(type)> <a class=\"button-block-a button-balanced\"> {{'ADD_A' | translate }} <span style=text-transform:capitalize translate={{vm._.upperCase(type)}}></span> {{'COMMAND' | translate }} </a> </div> </div> <span ng-if=vm.isActivityPending translate=ACTIVITY_OR_SAVE></span> <div ng-if=vm.isActivityPending class=\"button-block-a button-balanced\" ng-click=vm.onSave()> <span> {{'SAVE_COMPLETE' | translate }} </span> </div> </div> </div> </ion-content> <activity-setup-cancel></activity-setup-cancel> </ion-view> "
}, function(e, t) {
  e.exports = "<ion-view class=view-app-loading> <ion-nav-bar class=bar-a ng-if=vm.isOffline> <ion-nav-title>{{'DEVICE_OFFLINE' | translate }}</ion-nav-title> </ion-nav-bar> <ion-content class=\"has-padding has-header\"> <info-card type=b ng-if=vm.isOffline class=info-card-offline> <div class=info-card-offline-container translate=MOBILE_DEVICE_SEEMS_OFFLINE> </div> <a ng-click=vm.attemptReconnect() class=\"button-block-a button-balanced button-reconnect\"> {{'RECONNECT' | translate }} </a> <a ng-click=vm.retryLogin() class=\"button-block-a button-balanced\"> {{'SIGN_OUT' | translate }} </a> </info-card> </ion-content> </ion-view>"
}, function(e, t) {
  e.exports = '<ion-view view-title="August {{\'CONNECTION\' | translate}}"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button on-back-click=vm.goBack()></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-footer-august> <div class="setup-container animated fadeIn"> <h3 class=setup-header>{{\'AUGUST_AUTO_UNLOCK_TITLE\' | translate }}</h3> <p class="setup-text text-center"> {{\'AUGUST_CONFIGURATION_INSTRUCTIONS\' | translate }} </p> <p class="setup-text text-center"> {{\'AUGUST_CONFIGURATION_INSTRUCTIONS_TWO\' | translate }} </p> <div class=august-activity-container ng-if=vm.AugustConn.session.LEVITON_RESIDENCE> <ion-item class="item-checkbox-c item-nest-config" ng-click=vm.toggleSelection(activity,$index) ng-repeat="activity in vm.AugustConn.session.LEVITON_RESIDENCE.residentialActivities"> <div class="row row-center"> <div class=col-20> <i class=icon ng-class="{\'ion-ios-checkmark\': activity.selected, \'ion-ios-circle-outline\': !activity.selected}"></i> </div> <div class=col-66> {{activity.name}} </div> </div> </ion-item> <ion-item class="item-checkbox-c item-nest-config" ng-click=vm.toNewActivity()> <div class="row row-center"> <div class=col-20> <i class="icon ion-ios-plus-outline"></i> </div> <div class=col-100>Create a New Activity</div> </div> </ion-item> </div> </div> </ion-content> <div class="row fixed-bottom-bar"> <div class=col> <button class="button august-btn-cancel" ng-click=vm.cancelSetup()>{{\'CANCEL\' | translate }}</button> </div> <div class=col> <button class="button button-calm" ng-click=vm.continue()>{{\'SUBMIT\' | translate }}</button> </div> </div> </ion-view> '
}, function(e, t) {
  e.exports = "<ion-view view-title=\"August {{'CONNECTION' | translate}}\"> <ion-nav-bar class=bar-a> </ion-nav-bar> <ion-content scroll=false> <div class=setup-container> <h3 class=setup-header> {{'AUGUST_INTEGRATION_COMPLETE' | translate }} </h3> <div class=\"setup-text text-center\"> {{'AUGUST_INTEGRATION_COMPLETE_INFO' | translate }} </div> <div class=setup-image-wrap-sm> <img ng-src=./img/green-check.png> </div> </div> <button class=\"button-block-a button-bottom button-balanced\" ng-disabled=!vm.enableComplete ng-click=vm.onFinish()> {{'FINISH' | translate }} </button> </ion-content> </ion-view> "
}, function(e, t) {
  e.exports = "<ion-nav-view class=view-setup> </ion-nav-view> "
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'CONNECTIONS\' | translate}}"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button ng-click=vm.goBack()></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=connections> <nest-connection-card></nest-connection-card> <august-connection-card ng-if="vm.appSession.currentUser && vm.appSession.currentUser.isWifiBetaUser"></august-connection-card> <ion-list> <div class="card card-connection" ng-repeat="connection in vm.connections"> <h3 class=title-connection>{{connection.name}}</h3> <div class=icon-connection> <div ng-class=connection.img></div> </div> <div class=details-connection> {{connection.description}} </div> <div class=button-group-connection> <div class=row> <div class=col> <button class="button button-clear" ng-click=vm.openSupportPage(connection.url)> {{\'SUPPORT\' | translate }} </button> </div> </div> </div> </div> </ion-list> </ion-content> </ion-view> '
}, function(e, t) {
  e.exports = "<ion-nav-view class=view-setup> </ion-nav-view>"
}, function(e, t) {
  e.exports = "<ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-nav-view> </ion-nav-view>"
}, function(e, t) {
  e.exports = "<ion-view class=\"view-plain view-when-away\" view-title={{vm.homeAwayWizard.currentResidence.name}}> <ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <back-button on-back-click=vm.onBack()></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=\"has-padding has-footer-ha\"> <div ng-if=vm.dataResolved class=\"animated fadeIn setup-container\"> <h3 class=setup-header>{{'AWAY_SETTINGS_TITLE' | translate }}</h3> <div class=\"setup-text text-center\"> {{'AWAY_SETTINGS_INSTRUCTIONS' | translate }} </div> <ion-list ng-if=vm.activities.length> <ion-item class=item-checkbox-c ng-repeat=\"activity in vm.activities\" ng-click=vm.onActivityClick(activity)> <i class=icon ng-class=\"{'ion-ios-checkmark': activity.selected, 'ion-ios-circle-outline': !activity.selected}\"></i> {{activity.name}} </ion-item> </ion-list> <div class=ha-no-activity> <ion-item ng-if=!vm.activities.length class=info-as-list> {{'DONT_HAVE_ACTIVITIES' | translate }} </ion-item> <ion-item class=item-checkbox-c ng-click=vm.createActivity()> <i class=\"icon ion-plus-circled\"></i> <span ng-if=!vm.activities.length>{{'CREATE_AN_ACTIVITY' | translate }}</span> <span ng-if=vm.activities.length>{{'CREATE_A_NEW_ACTIVITY' | translate }}</span> </ion-item> </div> <div class=\"setup-text text-center mt-15\" ng-if=vm.switches.length> {{'RANDOMIZE_FEATURE_INFO' | translate }} <span> {{'SELECT_LIGHTS_FOR_RANDOMIZE' | translate }} </span> </div> <ion-list class=list-ha-randomization ng-if=vm.switches.length> <ion-item class=\"item-checkbox-c item-text-wrap\" ng-click=vm.toggleRandomization();> <div class=\"row row-center\"> <div class=col-25> <i class=icon ng-class=\"{'ion-ios-checkmark': vm.randomizeEnabled, 'ion-ios-circle-outline': !vm.randomizeEnabled}\"></i> </div> <div class=col> {{'RANDOMIZE_WHEN_DARK' | translate }} </div> </div> </ion-item> <ion-item class=\"item-checkbox-c has-row\" ng-if=vm.randomizeEnabled ng-class=\"{'item-disabled': switch.disabled}\" ng-repeat=\"switch in vm.switches\"> <div class=\"row row-center\"> <div class=col-25 ng-click=vm.onSwitchClick(switch)> <i class=icon ng-class=\"{'ion-ios-checkmark': switch.isRandomEnabled, 'ion-ios-circle-outline': !switch.isRandomEnabled}\"></i> </div> <div class=col ng-click=vm.onSwitchClick(switch)>{{switch.name}}</div> <div class=col-10 ng-click=vm.onAlertClick(switch)> <div class=wrap-icon ng-if=switch.disabled> <div class=icon-warning></div> </div> </div> </div> </ion-item> </ion-list> <button class=\"button-block-a button-balanced mt-30\" ng-click=vm.completeHomeAwaySetup()> {{'FINISH' | translate }} </button> </div> </ion-content> <ion-footer-bar class=bar-setup-footer ng-if=vm.dataResolved> <h1 class=title> <a class=button ng-click=vm.cancelSetup()> {{'CANCEL' | translate}} </a> </h1> </ion-footer-bar> </ion-view>"
}, function(e, t) {
  e.exports = "<ion-view class=view-plain view-title={{vm.homeAwayWizard.currentResidence.name}}> <ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <back-button on-back-click=vm.onBack()></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=\"has-padding has-footer-ha\"> <div ng-if=vm.dataResolved class=\"setup-container animated fadeIn\"> <h3 class=setup-header>{{'HOME_SETTINGS' | translate }}</h3> <div class=\"setup-text text-center\"> {{'HOME_SETTINGS_INSTRUCTIONS' | translate }} </div> <ion-list ng-if=vm.activities.length> <ion-item class=item-checkbox-c ng-repeat=\"activity in vm.activities\" ng-click=vm.onActivityClick(activity)> <i class=icon ng-class=\"{'ion-ios-checkmark': activity.selected, 'ion-ios-circle-outline': !activity.selected}\"></i> {{activity.name}} </ion-item> </ion-list> <div class=ha-no-activity> <ion-item ng-if=!vm.activities.length class=info-as-list> {{'DONT_HAVE_ACTIVITIES' | translate }} </ion-item> <ion-item class=item-checkbox-c ng-click=vm.createActivity()> <i class=\"icon ion-plus-circled\"></i> <span ng-if=!vm.activities.length>Create an Activity</span> <span ng-if=vm.activities.length>Create a New Activity</span> </ion-item> </div> <button ng-click=vm.continue() class=\"button-block-a button-balanced mt-30\"> {{'NEXT' | translate }} </button> </div> </ion-content> <ion-footer-bar class=bar-setup-footer ng-if=vm.dataResolved> <h1 class=title> <a class=button ng-click=vm.cancelSetup()> {{'CANCEL' | translate}} </a> </h1> </ion-footer-bar> </ion-view>"
}, function(e, t) {
  e.exports = '<ion-view view-title="{{vm.breaker.name || \'Breaker Details\'}}" class=view-setup> <ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <button class="button button-clear" ng-click=vm.onBack()> <i class="icon ion-chevron-left"></i> </button> </ion-nav-buttons> <ion-nav-buttons side=right> <nav-right-button ng-click=vm.continue() ng-show="vm.dirty && !vm.processing" text="{{\'SAVE\' | translate }}"> </nav-right-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class="has-header has-footer"> <div class=setup-container> <div class="setup-text text-center"> Please tell us what type of breaker this is and assign it a position by selecting a position number. </div> <div class=breaker-form-container> <div> <p class="mt-30 text-center">What type of breaker is this?</p> <label class="item item-input item-select"> <select ng-model=vm.breaker.model ng-options="option.model as option.hwVersion for option in vm.types" ng-change=vm.setBreakerType() ng-disabled=vm.disabledBtn> </select> </label> </div> <p class="mt-30 text-center">Select the Position</p> <label class="item item-input item-select"> <select ng-model=vm.breaker.position ng-change=vm.onBreakerUpdate() ng-options="option for option in vm.positions" ng-disabled=vm.disabledBtn> </select> </label> <p class="mt-30 text-center">Give the Breaker a Name</p> <div class="item item-input item-input-a"> <input ng-model=vm.breaker.name ng-change=vm.onBreakerNameUpdate() type=text> </div> </div> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view view-title="Breaker Details"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=right> <nav-right-button ng-click=vm.onUpdateBreaker(breaker) ng-show="vm.dirty && !vm.processing" text="{{\'SAVE\' | translate }}"> </nav-right-button> </ion-nav-buttons> <ion-nav-buttons side=left> <back-button on-back-click=vm.onBack()></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <list-divider label="EDIT BREAKER"></list-divider> <div class="item item-input item-input-a has-value-label"> <span class="input-label input-label-a">Name</span> <span class="value-label value-label-a" ng-click=vm.onTapName()>{{breaker.name}}</span> </div> <div class="item item-input item-select-a item-select"> <div class="input-label input-label-a"> Position </div> <select ng-model=breaker.position ng-options="breaker as breaker for breaker in vm.totalBreakers" ng-change=vm.makeDirty() ng-disabled=vm.disabledBtn> </select> </div> <div class="item item-identify"> <div class="row row-center"> <div class=col-50> <span class="input-label input-label-a">Identify</span> </div> <div class=col-50> <button class="button button-round button-identify" ng-class="{true: \'blink-active\', false: \'blink-inactive\'}[breaker.blinkLED]" ng-click=vm.identifyBreaker(breaker)> <i class="icon ion-search"></i> </button> </div> </div> </div> <div class="item item-trip-breaker"> <div class="row row-center"> <div class=col-50> <span class="input-label input-label-a">Trip this Breaker</span> </div> <div class=col-50> <button class="button button-energized button-round" ng-click=vm.onTripBreakerRequest() ng-disabled=!vm.canTripBreaker> <i class="icon ion-flash"></i> </button> </div> </div> </div> <div class=lc-update-fw> <div class=col-50> <span class="input-label input-label-a"> Firmware </span> </div> <div class=col-50 ng-if="breaker.updateAvailability === \'UPDATE_AVAILABLE\'"> <a class="button button-balanced button-small" ng-if="(breaker.updateStatus === \'\' || breaker.updateStatus === \'ERROR\')" ng-click=vm.updateFirmware(breaker)> Update Available ({{ breaker.updateVersion }}) </a> <span ng-if=breaker.updateStatus> <span class="lev-red lc-update-error-text" ng-if="breaker.updateStatus === \'ERROR\'"> Error updating the firmware. </span> <span class=lc-update-message-text ng-if="breaker.updateStatus !== \'ERROR\'"> {{breaker.updateStatus}} </span> </span> </div> <div class=col-50 ng-if="breaker.updateAvailability !== \'UPDATE_AVAILABLE\'"> Version: {{breaker.firmwareVersionSiLabs || \'-\'}} </div> </div> <div class=mt-10></div> <list-divider type=a> DETAILS </list-divider> <div class=breaker-details-box> <div class=row> <div class=col> <span class=breaker-details-label>Status </span> <span class=breaker-details-value ng-class=breaker.readableState>{{breaker.readableState}}</span> </div> </div> <div class=row> <div class=col-50> <span class=breaker-details-label>Current </span> <span class=breaker-details-value>{{breaker.rmsCurrent + (breaker.rmsCurrent2 || 0) | number:2}} A</span> </div> <div class=col-50> <span class=breaker-details-label>Voltage </span> <span class=breaker-details-value>{{breaker.rmsVoltage + (breaker.rmsVoltage2 || 0) | number:0}} V</span> </div> </div> <div class=row> <div class=col-50> <span class=breaker-details-label>Rating </span> <span class=breaker-details-value>{{breaker.currentRating + (breaker.currentRating2 || 0)}} A</span> </div> <div class=col-50> <span class=breaker-details-label>Poles </span> <span class=breaker-details-value>{{breaker.poles || 1}}</span> </div> </div> </div> <list-divider type="a mt-10"> USAGE DATA </list-divider> <breaker-usage-data-card breaker=breaker ng-if=breaker> </breaker-usage-data-card> <button on-tap=vm.removeBreaker(breaker) class=button-block-c> <span class=lev-red>{{\'Delete Breaker\' | translate}}</span> </button> </ion-content> </ion-view> '
}, function(e, t) {
  e.exports = '<input ng-model=breaker.name /> <br><br> <ion-scroll direction=y class=list-breaker-names> <ion-radio icon=ion-ios-checkmark class=item-radio-a ng-repeat="name in vm.suggestedNames " ng-click=vm.selectName(name)> {{name.value}} </ion-radio> </ion-scroll> '
}, function(e, t) {
  e.exports = '<ion-view> <ion-nav-title ng-click=$root.showResidenceListActionSheet()> <span ng-bind=vm.session.currentUser.selectedResidence.name></span> <span class="icon ion-chevron-down"></span> </ion-nav-title> <ion-nav-buttons side=right> <add-action-sheet></add-action-sheet> </ion-nav-buttons> <ion-content class=has-padding> <energy-usage-card single-panel=true> </energy-usage-card> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <ion-nav-title> <span ng-bind=vm.session.getSelectedResidence().name></span> </ion-nav-title> <ion-content class=has-padding> <list-divider type=a> AVAILABLE PANELS </list-divider> <ion-list> <panel-list-item ng-repeat="panel in vm.breakerPanels track by panel.id" panel=panel></panel-list-item> </ion-list> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = "<ion-view> <ion-nav-title> <span ng-bind=vm.currentLoadCenter.name></span> </ion-nav-title> <ion-content class=has-padding> <list-divider type=a> BREAKERS {{vm.currentLoadCenter.status}} </list-divider> <breaker-panel current-load-center=vm.currentLoadCenter></breaker-panel> </ion-content> </ion-view>"
}, function(e, t) {
  e.exports = '<ion-view> <ion-nav-title ng-click=$root.showResidenceListActionSheet()> <span ng-bind=vm.session.currentUser.selectedResidence.name></span> <span class="icon ion-chevron-down"></span> </ion-nav-title> <ion-nav-buttons side=right> <add-action-sheet></add-action-sheet> </ion-nav-buttons> <ion-content class=has-padding> <home-away-control-bar></home-away-control-bar> <div ng-if=vm.resolved> <energy-usage-card single-panel=vm.singlePanel></energy-usage-card> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view class=view-a> <ion-nav-title>{{vm.session.getSelectedResidence().name}}</ion-nav-title> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button ng-click=vm.onBack()></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <list-divider type=a> Load center Events </list-divider> <ion-list class=list-feed> <div class=feed-item ng-repeat="item in vm.feedItems" ng-click=vm.showInfo(item)> <div class=feed-item-header ng-if="!vm.checkDate(item, vm.feedItems[$index - 1])"> <div class=feed-item-date>{{item.dateHeader}}</div> </div> <div class="row row-center"> <div class="col feed-item-title">{{item.instanceName}}</div> </div> <div class="row row-center" ng-if=item.position> <div class="col feed-item-content">Position {{item.position}}</div> </div> <div class="row row-center"> <div class="col feed-item-content" ng-class="item.value | loadCenterEventsColor"> {{item.value | loadCenterEvents}} </div> </div> <div class="row row-center"> <div class="col feed-item-content">{{item.created | date : \'h:mm a EEEE\'}}</div> </div> </div> </ion-list> </ion-content> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view class=view-a view-title="Load Center Notification Settings"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button ng-click=vm.onBack()></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <list-divider type=a> Deliver notifications via </list-divider> <ion-checkbox class=item-checkbox-a ng-repeat="type in vm.notificationTypes" ng-model=type.enabled ng-change=vm.updateNotificationType(type)> {{type.name}} </ion-checkbox> <div class=mt-10></div> <list-divider type=a> Deliver Notifications for </list-divider> <ion-checkbox class=item-checkbox-a ng-class="trigger.enabled ? \'item-is-checked\' :\'\'" ng-repeat="trigger in vm.triggers" ng-model=trigger.enabled ng-disabled=!vm.hasSomeNotificationsEnabled ng-change=vm.updateTriggerType(trigger)> {{trigger.name}} </ion-checkbox> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = "<ion-view class=view-a view-title=\"Load Center Settings\"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button ng-click=vm.onBack()></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <div class=\"lc-settings-card animated fadeIn\"> <edit-name-simple label=\"Edit Panel Name\" name=vm.loadCenterName on-change=vm.updatePanelName($name)> </edit-name-simple> <div lc-settings-header> {{'SETTING' | translate | uppercase }} </div> <grid-tabs ng-model=vm.settingsTab lc-settings-tabs> <grid-tab value=\"'GENERAL'\">{{'GENERAL' | translate }}</grid-tab> <grid-tab value=\"'NOTIFICATIONS'\">{{'NOTIFICATIONS' | translate }}</grid-tab> </grid-tabs> <div lc-settings-content> <div ng-if=\"vm.settingsTab === 'GENERAL'\"> <div lc-update-fw-container> <div class=col-50> <span class=\"input-label input-label-a\"> {{'FIRMWARE' | translate }} </span> </div> <div class=col-50> {{'VERSION' | translate }} {{vm.currentLoadCenter.packageVer || '-'}} </div> </div> <div lc-update-fw-container> <div class=col-50> <span class=input-label-a> {{'SIGNAL_STRENGTH' | translate }} </span> </div> <div class=\"col-50 signal-strength-container\"> <img class=signal-strength-icon ng-src=img/signal-strengths/64_{{vm.signalStrength.level}}bars.png alt={{vm.signalStrength.desc}}> </div> </div> <div notifications-container> <ion-checkbox class=item-checkbox-a ng-model=vm.orientation ng-change=vm.flipPanel()> {{'FLIP_LOAD_CENTER' | translate }} </ion-checkbox> </div> <div no-margin-offset class=\"item item-borderless\"> <div class=row> <div class=col-50> <button class=\"button button-small button-balanced\" ng-disabled=vm.shouldDisable() ng-click=vm.startAdditionalBreakersConfig()> <i class=\"icon ion-plus\"></i> {{'ADD_A_BREAKER' | translate }} </button> </div> <div class=\"col-50 text-right\" ng-if=\"vm.currentLoadCenter.updateAvailability === 'UPDATE_AVAILABLE'\"> <button class=\"button button-small button-balanced\" ng-if=\"(vm.currentLoadCenter.updateStatus === '' || vm.currentLoadCenter.updateStatus === 'ERROR')\" ng-click=vm.updateFirmware(vm.currentLoadCenter)> {{'UPDATE_AVAILABLE' | translate }} ({{ vm.currentLoadCenter.updateVersion }}) </button> <span ng-if=vm.currentLoadCenter.updateStatus> <span class=\"lev-red lc-update-error-text\" ng-if=\"vm.currentLoadCenter.updateStatus === 'ERROR'\"> {{'UPDATE_FIRMWARE_ERROR' | translate }} </span> <span class=lc-update-message-text ng-if=\"vm.currentLoadCenter.updateStatus !== 'ERROR'\"> {{vm.currentLoadCenter.updateStatus}} </span> </span> </div> </div> </div> <div no-margin-offset class=\"item item-borderless\"> <button on-tap=vm.replaceLoadCenter() class=\"button button-outline button-block\"> <span class=lev-green>{{'LOAD_CENTER_REPLACE' | translate}}</span> </button> <button on-tap=vm.changeWiFi() class=\"button button-outline button-block\"> <span class=lev-green>{{'CHANGE_WIFI_NETWORK' | translate}}</span> </button> <button on-tap=vm.resetBreakers(vm.currentLoadCenter) class=\"button button-outline button-block\" ng-disabled=vm.shouldDisable()> <span class=lev-red>{{'FACTORY_RESET_BREAKERS' | translate}}</span> </button> <button on-tap=vm.deleteBreakerPanel(vm.currentLoadCenter) class=\"button button-outline button-block\"> <span class=lev-red>{{'DELETE_BREAKER_PANEL' | translate}}</span> </button> </div> </div> <div ng-if=\"vm.settingsTab === 'NOTIFICATIONS'\" notifications-container> <list-divider type=a> {{'DELIVER_NOTIFICATION_VIA' | translate}} </list-divider> <ion-checkbox class=item-checkbox-a ng-repeat=\"type in vm.notificationTypes\" ng-model=type.enabled ng-change=vm.updateNotificationType(type)> {{type.name}} </ion-checkbox> <list-divider type=a> {{'DELIVER_NOTIFICATION_FOR' | translate}} </list-divider> <ion-checkbox class=item-checkbox-a ng-class=\"trigger.enabled ? 'item-is-checked' :''\" ng-repeat=\"trigger in vm.triggers\" ng-model=trigger.enabled ng-disabled=!vm.hasSomeNotificationsEnabled ng-change=vm.updateTriggerType(trigger)> {{trigger.name}} </ion-checkbox> </div> </div> </div> </ion-content> </ion-view> "
}, function(e, t) {
  e.exports = '<ion-modal-view class="ion-nifty-modal setup-modal breaker-modal" ng-controller="BreakerOnlineModalCtrl as vm"> <ion-header-bar> <h1 class=title ng-if=vm.CONFIGURE>Configure Breaker</h1> <h1 class=title ng-if=vm.MONITOR>{{selectedBreaker.name}}</h1> </ion-header-bar> <ion-content class="has-header has-footer has-padding"> <div ng-if=vm.MONITOR> <label>Activity</label> <div class=breaker-activity ng-repeat="activity in vm.systemActivities track by $index"> {{activity}} </div> </div> <div ng-if=vm.CONFIGURE> <label>Edit Name</label> <div class="item item-input item-input-a"> <input type=text ng-model=selectedBreaker.name> </div> <div class="row row-center mt-20"> <div class=col-20 ng-click=vm.identifyBreaker(selectedBreaker)> <i class="icon ion-search" ng-class="{true: \'blink-active\', false: \'blink-inactive\'}[selectedBreaker.blinkLED]"> </i> </div> <div class=col> <select ng-model=selectedBreaker.position ng-options="position for position in vm.positions"> <option disabled=disabled selected=selected value="">Position</option> </select> </div> </div> <a class="button-block-a mt-20" ng-click=vm.enableMonitor()> MONITOR ACTIVITY </a> </div> </ion-content> <ion-footer-bar> <div class=breaker-grouped-buttons ng-if=vm.CONFIGURE> <a class="button button-clear button-dark" ng-click=vm.closeBreakerModal()> Close </a> <a class=button ng-click=vm.saveBreaker(selectedBreaker)>Save</a> </div> <div ng-if=vm.MONITOR class=ml-15> <a class="button button-clear button-dark" ng-click=vm.enableConfigure()> &lt; Back </a> </div> </ion-footer-bar> </ion-modal-view>'
}, function(e, t) {
  e.exports = '<ion-view class=discover-breakers> <leapfrog-online-setup-navbar title="Add Breakers" show-back=false continue-text=Save show-continue=vm.showContinue on-continue=vm.onContinue()> </leapfrog-online-setup-navbar> <ion-content class="has-header has-footer"> <div ng-if=!vm.discoveryFailure> <div ng-if=!vm.breakersDiscovered class=setup-container> <h3 class=setup-header> Discovering Breakers </h3> <div class="setup-text text-center"> Attempting to discover your Load Center\'s breakers. <br> This should take about a minute. </div> <div ng-if=!vm.scanCompleted> <p class="update-percentage text-center">{{vm.progressBar.percentage || 0}}%</p> <progress max={{vm.progressBar.config.max}} value={{vm.progressBar.value}}></progress> </div> </div> <div ng-if=vm.breakersDiscovered> <div class=setup-container> <div class=row> <div class=col> <a class="button-block-a button-balanced mt-20" on-tap=vm.rescanBreakers()> RESCAN </a> </div> </div> </div> <label style=padding-left:10% ng-if=!vm.rescanProgress>Available Breakers</label> <div ng-if=vm.rescanProgress class=spinner-wrapper> <ion-spinner></ion-spinner> <timer class=timer-label countdown="(vm.timerTimeout + 25)" interval=1000> {{mminutes}}:{{sseconds}} </timer> </div> <ion-list> <ion-item class=item-control-a ng-repeat="breaker in vm.breakers"> <div class=item-content-control-a> <div class=col-20 ng-click=vm.identifyBreaker(breaker)> <i class="icon ion-search" ng-class="{true: \'blink-active\', false: \'blink-inactive\'}[breaker.blinkLED]"></i> </div> <div class=col ng-click=vm.openModal(breaker);> ({{1 + $index}}) {{breaker.name }} </div> <div class=col-20 ng-click=vm.openModal(breaker);> {{ breaker.position || \'—\'}} </div> </div> <ion-option-button class=button-assertive ng-click=vm.onDeleteBreaker(breaker)> {{\'DELETE\' | translate}} </ion-option-button> </ion-item> </ion-list> </div> </div> <div ng-if=vm.discoveryFailure> <div class=setup-container> <h3 class=setup-header>Discovery Failure</h3> <p class="setup-text text-center">Could not discover additional breakers.</p> <a class="button-block-a button-balanced" on-tap=vm.rescanBreakers()> RESCAN </a> </div> </div> </ion-content> <leapfrog-online-setup-cancel></leapfrog-online-setup-cancel> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title="" show-back=false show-continue=false> </leapfrog-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header> Your Network was Successfully Changed! </h3> </div> </ion-content> <button class="button-block-a button-bottom button-balanced" ng-click=vm.completeSetup()> Finish </button> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title="" on-back=vm.onBack() show-continue=true on-continue=vm.onContinue()> </leapfrog-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header> Data Hub Setup </h3> <div class="setup-text text-center"> <ul> <li>The first step is to get the Data Hub connected to your Wi-Fi network.</li> </ul> </div> </div> </ion-content> <leapfrog-setup-cancel></leapfrog-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title="" on-back=vm.onBack() show-continue=true on-continue=vm.onContinue()> </leapfrog-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header> Enter Wi-Fi Password </h3> <div class=setup-text> Enter your Wi-Fi Network password below </div> <label class="item item-input item-input-a"> <input autocorrect=off autocapitalize=none ng-attr-type="{{vm.passwordVisible? \'text\':\'password\'}}" ng-model=vm.networkPassword> <i on-tap=vm.togglePasswordVisibility() ng-class="vm.passwordVisible ? \'ion-eye\': \'ion-eye-disabled\'" class="icon placeholder-icon-right"></i> </label> </div> </ion-content> <leapfrog-setup-cancel></leapfrog-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title="" show-back=false show-continue=false on-continue=vm.onContinue()> </leapfrog-setup-navbar> <ion-content class=has-header> <div class=setup-container> <div ng-if=!vm.showWarning> <h3 class=setup-header translate=JOINING_WIFI_NETWORK></h3> <div class="setup-text text-center"> {{\'WAIT_WHILE_DEVICE_JOINS\' | translate }} </div> <div class=setup-image-wrap> <img ng-src=./img/join-wifi.gif alt="Joining WiFi"> </div> </div> <div ng-if=vm.showWarning> <div class=setup-image-wrap-sm> <img ng-src=./img/icons/icon-warning.png alt=Warning> </div> <div class="setup-text text-center"> {{\'MAKE_SURE_MOBILE_HAS_INTERNET\' | translate }} </div> </div> <div class=text-center ng-if=vm.showWarning> <button class="button-block-a button-balanced" ng-click=vm.tryAgain()> {{\'TRY_AGAIN\' | translate }} </button> <br> <contact-us-card></contact-us-card> </div> </div> </ion-content> <leapfrog-setup-cancel></leapfrog-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title="Connect to Wi-Fi" show-back=true on-back=vm.onBack() show-continue=false> </leapfrog-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header> Next, let\'s connect your Data Hub to the Cloud </h3> <div class="setup-text text-center"> The final step is to connect your Leviton Load Center to the Cloud. To complete this step, you will need to have an available network connection. </div> <div class="setup-text text-center"> When you are ready to continue, tap a connection option below. </div> <button class="button-block-a button-block-restricted button-balanced" ng-click=vm.onAddToResidence()> Connect with Wi-Fi </button> <button class="button-block-a button-block-restricted button-balanced" ng-click=vm.onUseEthernet()> Connect with Ethernet </button> </div> </ion-content> <leapfrog-setup-cancel></leapfrog-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title="" show-back=false on-back=vm.onBack() show-continue=false> </leapfrog-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header> Setup is Complete </h3> <div class="setup-text text-center"> You have successfully configured your Leviton Load Center and Leviton Smart Breakers. <br> <br> You may edit the names and positions of your Breaker at any time via the \'Breakers\' tab. </div> <button class="button-block-a button-balanced" ng-click=vm.onFinish()> {{\'FINISH\' | translate }} </button> <div class=mt-30></div> <contact-us-card></contact-us-card> </div> </ion-content> <leapfrog-setup-cancel></leapfrog-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view class=load-center-networks> <leapfrog-setup-navbar show-back=true show-continue=false on-back=vm.onBack()> </leapfrog-setup-navbar> <ion-content class="has-header has-footer"> <div class="setup-container setup-ethernet-header"> <h3 class=setup-header> Add {{vm.currentLoadCenter.name}} to Network </h3> <div class="setup-text text-center"> For this connection method, your Load Center’s Data Hub must have a hard-wired connection to the Internet. Tap ‘Continue’ when you are ready to proceed. </div> </div> <div class=setup-image-wrap-ethernet-option> <img ng-src=img/leapfrog-ethernet-option.png alt="Ethernet Option"> </div> <div class=button-center-container> <button class="button-block-a button-block-restricted button-balanced" ng-click=vm.onContinue()> {{\'CONTINUE\' | translate}} </button> </div> </ion-content> <leapfrog-setup-cancel></leapfrog-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view class=load-center-networks> <leapfrog-setup-navbar title="Wi-Fi Setup" show-back=false show-continue=vm.showContinue on-continue=vm.onContinue()> </leapfrog-setup-navbar> <div class="fixed-header setup-container select-network-static"> <h3 class=setup-header> Add {{vm.currentLoadCenter.name }} to your Wi-Fi Network. </h3> <div class="setup-text text-center"> Select Home Wi-Fi Network from the list of discovered Wi-Fi networks in the list below. <br> If you don\'t see it, try <a ng-click=vm.rescanNetworkList()>rescan</a>. </div> </div> <ion-content class="has-header has-footer select-network-content"> <div ng-if=vm.discoveredNetworks.length> <ion-list> <div class=list> <ion-radio icon=ion-ios-checkmark ng-repeat="network in vm.discoveredNetworks track by $index" ng-click=vm.selectNetwork(network)> {{network.ssid}} <img class=wifi-icon ng-src=img/signal-strengths/64_{{network.signalStrength.level}}bars.png alt={{network.signalStrength.desc}} ng-if=network.signalStrength> </ion-radio> </div> </ion-list> </div> <div ng-if=!vm.discoveredNetworks.length class=spinner-wrapper> <ion-spinner></ion-spinner> </div> </ion-content> <leapfrog-setup-cancel></leapfrog-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title="" show-back=false on-continue=vm.onContinue()> </leapfrog-setup-navbar> <ion-content class=has-header> <div class=setup-container> <h3 class=setup-header> Add Load Control Panel to your Residence </h3> <div class="setup-text text-center"> Select a residence to which you want to add your panel to. </div> <div class=list> <ion-radio icon=ion-ios-checkmark class=item-radio-a ng-model=vm.selectedResidence ng-value=residence ng-repeat="residence in vm.userOwnedResidences track by residence.id" ng-click=vm.onResidenceSelection(residence)> {{residence.name}} </ion-radio> </div> </div> </ion-content> <leapfrog-setup-cancel></leapfrog-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view class=load-center-networks> <leapfrog-setup-navbar title=Wi-Fi show-back=true on-back=vm.onBack() show-continue=false> </leapfrog-setup-navbar> <div class="fixed-header setup-container setup-ethernet-header select-network-static"> <h3 class=setup-header> Disconnect from Your Data Hub </h3> <div class="setup-text text-center"> <div class="setup-divider setup-divider-tall"></div> 1.) Leave this app and change your Wi-Fi network from this back to your preferred network. <div class=setup-divider></div> 2.) If you don\'t have a Wi-Fi network setup, turn OFF Wi-Fi on this device. <div class=setup-divider></div> Once you have done this, tap continue to complete the setup process. </div> </div> <ion-content class="has-header has-footer select-network-content"> <div class=button-center-container> <button class="button-block-a button-block-restricted button-balanced" ng-click=vm.onContinue()> {{\'CONTINUE\' | translate}} </button> </div> </ion-content> <leapfrog-setup-cancel></leapfrog-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view view-title="{{vm.breaker.name || \'Breaker Details\'}}"> <ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <button class="button button-clear" ng-click=vm.onBack()> <i class="icon ion-chevron-left"></i> </button> </ion-nav-buttons> <ion-nav-buttons side=right ng-if="vm.breaker && vm.isSmart"> <button class="button button-clear button-navbar-continue button-navbar-continue-leapfrog" ng-class="vm.breaker.blinkLED ? \'button-nav-identify-on\':\'button-nav-identify-off\'" ng-click=vm.toggleIdentify()> IDENTIFY </button> </ion-nav-buttons> </ion-nav-bar> <ion-content class="has-header has-footer"> <div class=setup-container ng-if=vm.breaker> <div class="setup-text text-center" ng-if="vm.breaker && !vm.isSmart"> Please tell us what type of breaker this is and assign it a position by selecting a position number. </div> <div class="setup-text text-center" ng-if="vm.breaker && vm.isSmart"> First, tell us which of your breakers is blinking now. Assign it a position by selecting a position number. If you need to see the breaker blink again, tap the identify button. </div> <div class=breaker-form-container> <div ng-if="vm.breaker && !vm.isSmart"> <p class="mt-30 text-center">What type of breaker is this?</p> <label class="item item-input item-select"> <select ng-model=vm.breaker.model ng-options="option.model as option.hwVersion for option in vm.types" ng-change=vm.setBreakerType() ng-disabled=vm.disabledBtn> </select> </label> </div> <p class="mt-30 text-center">Select the Position</p> <label class="item item-input item-select"> <div class=breaker-position> <select ng-model=vm.breaker.position ng-change=vm.onBreakerUpdate() ng-options="option for option in vm.positions" ng-disabled=vm.disabledBtn> </select> </div> </label> <p class="mt-30 text-center">Give the Breaker a Name</p> <div class="item item-input item-input-a"> <input ng-model=vm.breaker.name type=text> </div> </div> </div> </ion-content> <div class="row fixed-bottom-bar"> <div class=col> <button class="button button-balanced" ng-click=vm.onBack()>OK</button> </div> </div> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title="" on-back=vm.onBack() show-continue=false> </leapfrog-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header> Connected to <br> {{vm.connectedLoadCenter.name}} </h3> <div class="setup-text text-center"> Congratulations! We\'ve successfully connected to your Load Center and found {{vm.connectedLoadCenter.breakerCount}} breakers that have been configured. <br> <br> Tap \'Continue\' below to view the current configuration. You can edit the names or reassign the positions on the next screen. <button class="button-block-a button-balanced mt-30" ng-click=vm.continue()> Continue </button> </div> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title="Discover Breakers" on-back=vm.onBack() show-back=vm.showBack show-continue=false> </leapfrog-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container ng-if=!vm.discoveryComplete> <h3 class=setup-header> Connected to <br> {{vm.connectedLoadCenter.name}} </h3> <div ng-if=!vm.discoveryProgress> <div class="setup-text text-center"> {{\'DISCOVER_BREAKERS_MESSAGE\' | translate}} </div> <button class="button-block-a button-balanced mt-30" ng-click=vm.discoverBreakers()> {{\'DISCOVER_BREAKERS\' | translate}} </button> </div> <div ng-if=vm.discoveryProgress> <p class=text-center> {{\'DISCOVERING\' | translate}} <br> </p><p class="update-percentage text-center">{{vm.progressBar.percentage || 0}}%</p> <progress max={{vm.progressBar.config.max}} value={{vm.progressBar.value}}></progress> <p></p> </div> </div> <div class=setup-container ng-if=vm.discoveryComplete> <h3 class=setup-header> Found {{vm.connectedLoadCenter.breakerCount}} Breakers </h3> <div class="setup-text text-center"> The next step is to name and assign each breaker\'s position. If you were expecting a number other than {{vm.connectedLoadCenter.breakerCount}}, tap on the rescan button below. </div> <button class="button-block-a button-balanced mt-30" ng-click=vm.continueSettingUp()> Continue Setting Up Breakers </button> <button class="button-block-a button-balanced mt-30" ng-click=vm.rescanBreakers()> Rescan for Breakers </button> <div class="setup-text text-center breaker-reset-instruction" ng-if=0> <p>If you are unable to find all of your breakers, performing a factory reset may be required.</p> <a class=button-hyperlink-b ng-click=vm.gotoBreakersReset()> Tap here to learn more about resetting the breakers </a> </div> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'Breaker \'+ (vm.index + 1)+ \' of \'+ vm.breakers.length}}"> <ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <button class="button button-clear" ng-if=vm.showBack> <i class="icon ion-chevron-left"></i> </button> </ion-nav-buttons> <ion-nav-buttons side=right> <button class="button button-clear button-navbar-continue button-navbar-continue-leapfrog" ng-class="vm.selectedBreaker.blinkLED ? \'button-nav-identify-on\':\'button-nav-identify-off\'" ng-click=vm.toggleIdentify()> IDENTIFY </button> </ion-nav-buttons> </ion-nav-bar> <ion-content class="has-header has-footer"> <div class=setup-container> <div class="setup-text text-center"> First, tell us which of your breakers is blinking now. Assign it a position by selecting a position number. If you need to see the breaker blink again, tap the identify button. </div> <div class=breaker-form-container> <p class="mt-30 text-center">Select the Position</p> <label class="item item-input item-select"> <div class=breaker-position> <select ng-model=vm.selectedBreaker.position ng-change=vm.onBreakerUpdate() ng-options="option for option in vm.positions" ng-disabled=vm.disabledBtn> </select> </div> </label> <p class="mt-30 text-center">Give the Breaker a Name</p> <div class="item item-input item-input-a"> <input ng-model=vm.selectedBreaker.name type=text> </div> </div> </div> </ion-content> <div class="row fixed-bottom-bar"> <div class=col> <button class="button button-default" ng-if="vm.index !== 0 " ng-click=vm.goPrev()>Prev</button> </div> <div class=col> <button class="button button-balanced" ng-click=vm.goNext()>Next</button> </div> </div> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title=Finish show-back=false show-continue=false> </leapfrog-setup-navbar> <ion-content class="has-header has-footer"> <h3 class=setup-header>{{vm.currentLoadCenter.name}}</h3> <div class=lc-breakers-grid> <div class=row ng-repeat="breaker in vm.positionedBreakers track by $index" ng-if="$index % 2 == 0"> <div class="col col-50" ng-repeat="i in [$index, $index+1]" ng-if="vm.positionedBreakers[i] != null"> <breaker-card-enrollment breaker=vm.positionedBreakers[i]> </breaker-card-enrollment> </div> </div> <div class=row ng-repeat="breaker in vm.unpositionedBreakers" ng-if="$index % 2 == 0"> <div class="col col-50" ng-repeat="i in [$index, $index+1]" ng-if="vm.unpositionedBreakers[i] != null"> <breaker-card-enrollment type=unpositioned breaker=vm.unpositionedBreakers[i]> </breaker-card-enrollment> </div> </div> </div> </ion-content> <div class="row fixed-bottom-bar"> <div class=col> <button class="button button-balanced" ng-click=vm.finish()>Finish</button> </div> </div> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title="Reset Breakers" on-back=vm.onBack() show-back=true show-continue=false> </leapfrog-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header>Reset Breakers</h3> <div class="setup-text text-center"> To eset the breakers, you must do the following: </div> <ol class=breaker-reset-instruction-list> <li>Trip all the breakers</li> <li>Tap \'Reset\' button below.</li> <li>Once the process is complete, tap the breakers back to on.</li> </ol> <button ng-click=vm.resetBreakers() class="button button-block button-balanced"> Reset </button> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title="" on-back=vm.onBack() show-continue=false> </leapfrog-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header>{{\'LOAD_CENTER_SETUP\' | translate }}</h3> <div class="setup-text text-center" ng-if="vm.flowType === \'CHANGE_WIFI\'"> {{\'LOADCENTER_SETUP_STEP1_TEXT_CHANGE_WIFI\' | translate}} </div> <div class="setup-text text-center"> {{\'LOADCENTER_SETUP_STEP1_TEXT_1\' | translate}} </div> <div class=setup-image-wrap> <img ng-src={{vm.imageSources[vm.platform]}} alt="Select Leviton Device from your WiFi connection settings."> </div> <div class="setup-text text-center" ng-if="vm.platform === \'ios\'" translate=FIND_YOUR_DEVICE_AFTER_INSTRUCTION></div> <div class="setup-text text-center" ng-if="vm.platform == \'android\'" translate=FIND_YOUR_DEVICE_ANDROID_INSTRUCTION> </div> </div>  <button class="button-block-a button-balanced" ng-click=vm.wifiSetting()> Jump To Settings App </button> </ion-content> <leapfrog-setup-cancel></leapfrog-setup-cancel> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view> <leapfrog-setup-navbar title="" on-back=vm.onBack() show-continue=true on-continue=vm.onContinue()> </leapfrog-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header> Replace the Data Hub </h3> <div class=setup-text> Select the Data Hub from the list below that you want to replace with <strong>{{vm.LDS.SELECTED_ENROLLMENT_LOAD_CENTER.id}}</strong>. </div> <div class=setup-text> <div class=list> <ion-radio icon=ion-ios-checkmark class=item-radio-a ng-model=vm.selectedOldDAU ng-value=dau ng-repeat="dau in vm.dausInResidence track by dau.id" ng-click=vm.onDAUSelection(dau)> {{dau.name}} </ion-radio> </div> </div> </div> </ion-content> <leapfrog-setup-cancel></leapfrog-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = "<p>In order to reset the breakers in the panel:</p> <ul class=breaker-reset-instruction> <li>Turn off the breakers you want to reset</li> <li>Press 'Continue' below, then turn those breakers back on within 30 seconds</li> </ul>"
}, function(e, t) {
  e.exports = "<ion-view class=view-setup> <leapfrog-setup-navbar title=Setup on-back=vm.cancel() show-continue=true on-continue=vm.continue()> </leapfrog-setup-navbar> <ion-content class=\"has-header has-footer\"> <div class=breaker-setup-container> <ion-list> <h3 class=setup-header>Load Center Info</h3> <br> <h4>{{'PANEL_NAME' | translate }}</h4> <label class=\"item item-input\"> <input type=text ng-model=vm.loadCenter.name> </label> <br> <h5>{{'ASK_NUM_OF_POSITIONS' | translate }}</h5> <label class=\"item item-input item-select\"> <select ng-model=vm.loadCenter.panelSize ng-options=\"loadCenterModel.numOfBreakerPositions as loadCenterModel.numOfBreakerPositions for loadCenterModel in vm.loadCenterModels\"> <option ng-selected=true value=\"\" disabled=disabled>{{'NUM_OF_POSITIONS' | translate }}</option> </select> </label> <br> <h5>{{'ASK_WHERE_ONE_LOCATED' | translate }}</h5> <label class=\"item item-input item-select\"> <select ng-model=vm.loadCenter.orientation> <option value=straight>{{'TOP_LEFT' | translate }}</option> <option value=inverted>{{'BOTTOM_RIGHT' | translate }}</option> </select> </label> </ion-list> </div> </ion-content> <leapfrog-setup-cancel></leapfrog-setup-cancel> </ion-view> "
}, function(e, t) {
  e.exports = '<div class=breaker-rename-input-wrap> <input ng-model=vm.editingBreaker.name maxlength=25 ng-change=vm.nameChanged() /> <i class="icon ion-close-circled" on-tap=vm.clearName(vm.editingBreaker)></i> </div> <p class=breaker-rename-instruct> OR <br> Select from the List </p> <ion-scroll direction=y class=list-breaker-names> <ion-radio icon=item-radio-icon-a class=item-radio-a ng-repeat="breaker in vm.suggestedNames" ng-model=breaker.selected ng-click=vm.selectBreaker(breaker)> {{breaker.value}} </ion-radio> </ion-scroll> <div class=popup-buttons> <button class="button button-cancel button-clear" ng-click=vm.closeModal(vm.editingBreaker)> {{\'CANCEL\' | translate }} </button> <button class="button button-ok button-clear" ng-disabled="vm.editingBreaker.name.length < 3" ng-click=vm.onNameConfirmed()> {{\'SAVE\' | translate }} </button> </div>'
}, function(e, t) {
  e.exports = '<ion-view title="{{vm.loadCenter.panelName || \'Load Center\'}}" class=view-app-loading> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button on-back-click=vm.onBackClick()></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class="print-breaker has-padding"> <div class="item-list-divider-a pdf-list-divider"> <div class="row row-center"> <div class=col>{{\'BREAKERS\' | translate }}</div> <div class=col-20 ng-click=vm.generatePdf()> <div class=icon-breaker-position> <i class=ion-document-text></i> </div> </div> </div> </div> <div class="lc-breakers-grid lc-print-breaker-grid"> <div class=row ng-repeat="breaker in vm.breakers" ng-if="$index % 2 == 0"> <div class=col ng-repeat="i in [$index, $index+1]" ng-if="vm.breakers[i] != null" ng-class="vm.breakers[i].hasDipole ? \'has-dipole\':\'has-no-dipole\'"> <div class=grid-view-breaker> <div class=grid-breaker-info-wrap> <div ng-click=vm.clickBreakerCard(i) class=breaker-card-clickable> <div class=breaker-position-round-wrap> <div class=breaker-position-round>{{vm.breakers[i].position}}</div> </div> <div class=breaker-title> {{vm.breakers[i].name}} </div> </div> <div class="breaker-connect-button mt-5" ng-click=vm.connectDipoles(i)> <span ng-if=!vm.breakers[i].hasDipole> {{\'EXPAND\' | translate }} <i class="icon ion-chevron-down"></i> </span> <span ng-if=vm.breakers[i].hasDipole> {{\'COLLAPSE\' | translate }} <i class="icon ion-chevron-up"></i> </span> </div> </div> </div> </div> </div> <div class=buttons-breaker-print> <button class="button button-small button-light" ng-click=vm.resetBreakersData()> {{\'RESET\' | translate }} </button> </div> </div> </ion-content> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view title={{vm.loadCenter.panelName}} class=view-app-loading> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button on-back-click=vm.onBackClick()></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class="has-header load-center-content"> <div class=load-center-content-wrap> <div class=load-center-content-form> <h3 class=setup-header>Enter Load Center Info</h3> <h5>{{\'ASK_NUM_OF_POSITIONS\' | translate }}</h5> <label class="item item-input item-select"> <select ng-model=vm.loadCenter.slots ng-options="loadCenterModel.numOfBreakerPositions as loadCenterModel.numOfBreakerPositions for loadCenterModel in vm.loadCenterModels"> <option ng-selected=true value="" disabled=disabled>{{\'NUM_OF_POSITIONS\' | translate }}</option> </select> </label> <h5>{{\'ASK_WHERE_ONE_LOCATED\' | translate }}</h5> <label class="item item-input item-select"> <select ng-model=vm.loadCenter.orientation> <option value=straight>{{\'TOP_LEFT\' | translate }}</option> <option value=inverted>{{\'BOTTOM_RIGHT\' | translate }}</option> </select> </label> </div> <div class="row buttons-content-bottom"> <div class=col> <button class="button button-small button-light" ng-click=vm.cancel()> {{\'CANCEL\' | translate }} </button> </div> <div class=col> <button class="button button-small button-balanced" ng-click=vm.continue()> {{\'CONTINUE\' | translate }} </button> </div> </div> </div> </ion-content> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view class=view-app-loading> <ion-nav-bar class=bar-a> <ion-nav-title>{{\'LOAD_CENTER_UTILITY\' | translate }}</ion-nav-title> <ion-nav-buttons side=left> <back-button on-back-click=vm.onBackClick()></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class="has-header load-center-content"> <div class=load-center-content-wrap> <div class=load-center-content-form> <h3 class=setup-header>Enter Load Center Info</h3> <h5>{{\'PANEL_NAME\' | translate }} (REQUIRED)</h5> <label class="item item-input"> <input type=text ng-model=vm.loadCenter.panelName> </label> <h5>{{\'COMPANY_NAME\' | translate }} (OPTIONAL)</h5> <label class="item item-input"> <input type=text ng-model=vm.loadCenter.companyName> </label> <h5>{{\'EMAIL_ADDRESS\' | translate }} (OPTIONAL)</h5> <label class="item item-input"> <input type=text ng-model=vm.loadCenter.email> </label> <h5>{{\'PHONE_NUMBER\' | translate }} (OPTIONAL)</h5> <label class="item item-input"> <input type=text ng-model=vm.loadCenter.phoneNumber ui-us-phone-number-mask> </label> </div> <div class="row buttons-content-bottom"> <div class=col> <button class="button button-small button-light" ng-click=vm.onBackClick()>Cancel</button> </div> <div class=col> <button class="button button-small button-balanced" ng-click=vm.configureLoadCenter(vm.loadCenter)> Continue </button> </div> </div> </div> </ion-content> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view view-title="Nest Cam Configuration"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-footer-nest> <div class=setup-container> <h3 class=setup-header> {{vm.selectedNestCamera.name}} </h3> <p class="setup-text text-center"> Select which of your My Leviton devices you would like to turn on or blink when your Nest Cam detects motion. </p> <div ng-if=vm.selectedNestCamera.devices.length> <ion-list> <div ng-repeat="device in vm.selectedNestCamera.devices"> <ion-item class="item-checkbox-c item-nest-config" ng-class="device.supportsDuration ? \'\': \'item-checkbox-disabled\'"> <div class="row row-center"> <div class=col-20 ng-click=vm.onClickCheckbox(device)> <i class="icon icon-check" ng-class="{\'ion-ios-checkmark\': device.selected, \'ion-ios-circle-outline\': !device.selected}"></i> </div> <div class=col-66 ng-click=vm.toggleItem(device) ng-if=device.supportsDuration> {{device.name}} </div> <div class=col-66 ng-click=vm.onAlertClick(device) ng-if=!device.supportsDuration> {{device.name}} </div> <div class=col ng-click=vm.toggleItem(device) ng-if=device.supportsDuration> <i ng-class="device.expanded ? \'ion-chevron-up\': \'ion-chevron-down\'"></i> </div> <div class=col ng-click=vm.onAlertClick(device) ng-if=!device.supportsDuration> <div class=wrap-icon> <div class=icon-warning></div> </div> </div> </div> </ion-item> <div class="item-nest-config-accordion icon-checkbox-e" ng-if="device.supportsDuration && device.expanded"> <div class="row row-center"> <div class=col-10 ng-click=vm.togglePower(device)> <i class="icon icon-check" ng-class="(device.action === \'power\') ? \'ion-ios-checkmark\':\'ion-ios-circle-outline\'"></i> </div> <div class=col> <span class=item-info>Turn on</span> </div> </div> <div class="row row-center"> <div class=col-10 ng-click=vm.toggleBlink(device)> <i class="icon icon-check" ng-class="(device.action === \'blink\') ? \'ion-ios-checkmark\':\'ion-ios-circle-outline\'"></i> </div> <div class=col> <span class=item-info>Blink</span> </div> </div> <div class="row row-center" ng-if=device.supportsDuration> <span class=item-info></span> For <select ng-options="option.seconds as option.text for option in vm.timeOptions" ng-disabled=!device.selected ng-model=device.duration> <option disabled=disabled selected=selected value="">Select Time</option> </select> </div> </div> </div> </ion-list> </div> <info-card type=d ng-if=!vm.selectedNestCamera.devices.length> You don\'t have any My Leviton devices to configure. Please add a device and try again. </info-card> </div> </ion-content> <div class="row fixed-bottom-bar"> <div class=col-50> <button class="button button-clear nest-btn-cancel" ng-click=vm.cancel()> Cancel </button> </div> <div class=col-50> <button class="button button-calm nest-btn-save" ng-click=vm.save()> Continue </button> </div> </div> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view view-title="Nest {{\'CONNECTION\' | translate}}"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-footer-nest> <div class=setup-container> <h3 class=setup-header>Nest Cam</h3> <p class="setup-text text-center"> Select which Nest Cam(s) you would like to enable for use with My Leviton. </p> </div> <ion-item class="item-checkbox-c item-nest-config" ng-repeat="camera in vm.nestCams"> <div class="row row-center"> <div class=col-20 ng-click=vm.toggleProtectSelection(camera)> <i class=icon ng-class="{\'ion-ios-checkmark\': camera.selected, \'ion-ios-circle-outline\': !camera.selected}"></i> </div> <div class=col-66 ng-click=vm.openModal(camera)> {{camera.name}} </div> <div class=col ng-click=vm.openModal(camera)> <i class="icon ion-chevron-right"></i> </div> </div> </ion-item> </ion-content> <div class="row fixed-bottom-bar"> <div class=col> <button class="button nest-btn-cancel" ng-click=vm.cancelSetup()>Cancel</button> </div> <div class=col> <button class="button button-calm" ng-click=vm.continue()>Continue</button> </div> </div> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view view-title="Nest {{\'CONNECTION\' | translate}}"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button on-back-click=vm.goBack()></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-footer-nest> <div class="setup-container animated fadeIn"> <h3 class=setup-header>{{\'HOME_AWAY_SETTINGS\' | translate }}</h3> <p class="setup-text text-center"> {{\'NEST_HOME_AWAY_INSTRUCTIONS\' | translate }} </p> <div ng-if="vm.NestConn.NEST_RESIDENCES.length > 1"> <p class=setup-text-basic>Select a <strong>Nest Home</strong></p> <div class="nest-select animated fadeIn"> <select ng-model=vm.NestConn.SELECTED_NEST_RESIDENCE ng-change=vm.onChangeResidence() ng-options="residence as residence.name for residence in vm.NestConn.NEST_RESIDENCES track by residence.structure_id"> </select> </div> </div> <div class=nest-home-away-checkbox> <ion-item class="item-checkbox-c item-text-wrap" ng-click=vm.toggleHomeAwayEnabled()> <i class=icon ng-class="{\'ion-ios-checkmark\': vm.NestConn.SELECTED_NEST_RESIDENCE.homeAwayEnabled, \'ion-ios-circle-outline\': !vm.NestConn.SELECTED_NEST_RESIDENCE.homeAwayEnabled}"></i> {{\'USE_NEST_FOR_HOME_AWAY\' | translate }} </ion-item> <div class=nest-button-wrap> <button class="button button-calm mt-15" ng-click=vm.takeToHomeAwayWizard() ng-disabled=!vm.NestConn.SELECTED_NEST_RESIDENCE.homeAwayEnabled> {{\'CONFIGURE_NOW\' | translate }} </button> </div> </div> </div> </ion-content> <div class="row fixed-bottom-bar"> <div class=col> <button class="button nest-btn-cancel" ng-click=vm.cancelSetup()>{{\'CANCEL\' | translate }}</button> </div> <div class=col> <button class="button button-calm" ng-click=vm.continue()>{{\'CONTINUE\' | translate }}</button> </div> </div> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view view-title="Nest {{\'CONNECTION\' | translate}}"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-footer-nest> <div class=setup-container> <h3 class=setup-header>{{\'NEST_PROTECT\' | translate }}</h3> <p class="setup-text text-center"> {{\'SELECT_NEST_PROTECT\' | translate }} </p> </div> <ion-item class="item-checkbox-c item-nest-config" ng-repeat="protect in vm.nestProtects"> <div class="row row-center"> <div class=col-20 ng-click=vm.toggleProtectSelection(protect)> <i class=icon ng-class="{\'ion-ios-checkmark\': protect.selected, \'ion-ios-circle-outline\': !protect.selected}"></i> </div> <div class=col-66 ng-click=vm.openModal(protect)> {{protect.name}} </div> <div class=col ng-click=vm.openModal(protect)> <i class="icon ion-chevron-right"></i> </div> </div> </ion-item> </ion-content> <div class="row fixed-bottom-bar"> <div class=col> <button class="button nest-btn-cancel" ng-click=vm.cancelSetup()>{{\'CANCEL\' | translate }}</button> </div> <div class=col> <button class="button button-calm" ng-click=vm.continue()>{{\'CONTINUE\' | translate }}</button> </div> </div> </ion-view> '
}, function(e, t) {
  e.exports = "<ion-view view-title=\"Nest {{'CONNECTION' | translate}}\"> <ion-nav-bar class=bar-a> </ion-nav-bar> <ion-content scroll=false> <div class=setup-container> <h3 class=setup-header> {{'NEST_INTEGRATION_COMPLETE' | translate }} </h3> <div class=\"setup-text text-center\"> {{'NEST_INTEGRATION_COMPLETE_INFO' | translate }} </div> <div class=setup-image-wrap-sm> <img ng-src=./img/green-check.png> </div> </div> <button class=\"button-block-a button-bottom button-balanced\" ng-disabled=!vm.enableComplete ng-click=vm.onFinish()> {{'FINISH' | translate }} </button> </ion-content> </ion-view> "
}, function(e, t) {
  e.exports = "<ion-nav-view class=view-setup> </ion-nav-view> "
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'NEST_PROTECT_CONFIGURATION\' | translate }}"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-footer-nest> <div class=setup-container> <h3 class=setup-header> {{vm.selectedNestProtect.name}} </h3> <p class="setup-text text-center"> {{\'PROTECT_CONFIG_INFO\' | translate }} </p> <div ng-if=vm.selectedNestProtect.devices.length> <ion-list> <div ng-repeat="device in vm.selectedNestProtect.devices"> <ion-item class="item-checkbox-c item-nest-config" ng-class="device.supportsDuration ? \'\': \'item-checkbox-disabled\'"> <div class="row row-center"> <div class=col-20 ng-click=vm.onClickCheckbox(device)> <i class="icon icon-check" ng-class="{\'ion-ios-checkmark\': device.selected, \'ion-ios-circle-outline\': !device.selected}"></i> </div> <div class=col-66 ng-if=device.supportsDuration ng-click=vm.toggleItem(device)> {{device.name}} </div> <div class=col-66 ng-if=!device.supportsDuration ng-click=vm.onAlertClick(device)> {{device.name}} </div> <div class=col ng-click=vm.toggleItem(device) ng-if=device.supportsDuration> <i ng-class="device.expanded ? \'ion-chevron-up\': \'ion-chevron-down\'"></i> </div> <div class=col ng-click=vm.onAlertClick(device) ng-if=!device.supportsDuration> <div class=wrap-icon> <div class=icon-warning></div> </div> </div> </div> </ion-item> <div class="item-nest-config-accordion icon-checkbox-e" ng-if="device.supportsDuration && device.expanded"> <div class="row row-center"> <div class=col-10 ng-click=vm.togglePower(device)> <i class="icon icon-check" ng-class="(device.action === \'power\') ? \'ion-ios-checkmark\':\'ion-ios-circle-outline\'"></i> </div> <div class=col> <span class=item-info>{{\'TURN_ON\' | translate }}</span> </div> </div> <div class="row row-center"> <div class=col-10 ng-click=vm.toggleBlink(device)> <i class="icon icon-check" ng-class="(device.action === \'blink\') ? \'ion-ios-checkmark\':\'ion-ios-circle-outline\'"></i> </div> <div class=col> <span class=item-info>{{\'BLINK\' | translate }}</span> </div> </div> <div class="row row-center"> <span class=item-info></span> For <select ng-options="option.seconds as option.text for option in vm.timeOptions" ng-disabled=!device.selected ng-model=device.duration> <option disabled=disabled selected=selected value="">{{\'SELECT_TIME\' | translate }}</option> </select> </div> </div> </div> </ion-list> </div> <info-card type=d ng-if=!vm.selectedNestProtect.devices.length> {{\'DONT_HAVE_ML_DEVICES\' | translate }} </info-card> </div> </ion-content> <div class="row fixed-bottom-bar"> <div class=col-50> <button class="button button-clear nest-btn-cancel" ng-click=vm.cancel()> {{\'CANCEL\' | translate }} </button> </div> <div class=col-50> <button class="button button-calm nest-btn-save" ng-click=vm.save()> {{\'CONTINUE\' | translate }} </button> </div> </div> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view view-title="Device Type Selection" class=device-type-selector-page> <ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <back-button use-ionic-back=true></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <div class=setup-container> <h3 class=setup-header translate=REQUEST_DEVICE_TYPE></h3> <div class=text-center> <device-type-card title="Decora Smart Dimmer or Switch" image-url="vm.imageUrlPrefix + \'decora-smart-dimmer.png\'" on-select=vm.startDefaultDeviceSetupWizard()> </device-type-card> <device-type-card title="Decora Smart Plugin" image-url="vm.imageUrlPrefix + \'decora-smart-plugin.png\'" on-select=vm.startDefaultDeviceSetupWizard()> </device-type-card> <device-type-card title="Leviton Load Center" image-url="vm.imageUrlPrefix + \'leviton-load-center.png\'" on-select=vm.startLeapfrogSetupWizard() ng-if=vm.appSession.currentUser.isWifiBetaUser> </device-type-card> </div> </div> </ion-content> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'COMPLETE\' | translate }}"> <ion-nav-bar class=bar-c></ion-nav-bar> <ion-content class=has-padding> <div class=setup-container> <h3 class=setup-header translate=RESIDENCE_SETUP_COMPLETE></h3> <div class=setup-image-wrap-sm> <img ng-src=./img/green-check.png alt="Completed Setup"> </div> <div class="setup-text text-center"> {{\'ASK_FOR_DEVICE_SETUP\' | translate }} </div> <br> <div class=button-wrap-b> <a class="button-block-b button-balanced" ng-click=vm.startDeviceSetupWizard()> {{\'ADD_A_DEVICE\' | translate }} </a> <a class="button-block-b button-clear lev-light-blue underline" ng-click=vm.onBoardingComplete()> {{\'SKIP_FOR_NOW\' | translate }} </a> </div> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = "<ion-nav-view class=view-setup> </ion-nav-view>"
}, function(e, t) {
  e.exports = "<ion-view view-title=\"{{'STEP_2_3' | translate }}\"> <ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <back-button prevent-default=true ui-sref=onboarding.add-residence></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <div class=setup-container> <h3 class=setup-header>{{'LOCATION_BASED_FEATURES' | translate }}</h3> <div class=\"setup-text text-center\"> {{'SCHEDULING_REQUIRES_LOCATION' | translate }} </div> <div class=\"setup-text text-center\"> {{'LOCATION_MORE_INFO' | translate }} </div> <div class=button-wrap-b> <button class=\"button-balanced upcase\" ng-click=vm.grabLocation() ng-disabled=vm.processing> {{'GET_MY_LOCATION' | translate }} </button> <button class=\"button-balanced upcase\" ui-sref=onboarding.add-residence-address ng-disabled=vm.processing> {{'ENTER_THE_ADDRESS' | translate }} </button> <button class=\"button-clear button-positive lev-light-blue underline\" ng-click=vm.createResidence() ng-disabled=vm.processing> {{'SKIP_FOR_NOW' | translate }} </button> <br> <br> <br> </div> </div> </ion-content> <cancel-residence-setup></cancel-residence-setup> <ion-spinner ng-if=vm.loading></ion-spinner> </ion-view>"
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'STEP_3_3\' | translate }}"> <form name=residenceAddressForm> <ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <back-button prevent-default=true ui-sref=onboarding.add-residence-address-description></back-button> </ion-nav-buttons> <ion-nav-buttons side=right> <nav-right-button text="{{\'FINISH\' | translate }}" has-icon=true ng-click=vm.createResidence(vm.residence)> </nav-right-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <div class=setup-container> <h3 class=setup-header>{{\'SETUP_YOUR_RESIDENCE\' | translate }}</h3> <div class=text-validation> <span ng-repeat="field in vm.invalidFields"> <span ng-if="!$first && !$last"> , </span> <span ng-if=$last translate=AND></span> {{field}} </span> <span ng-if=vm.invalidFields.length> <span ng-if="vm.invalidFields.length > 1" translate=ARE></span> <span ng-if="vm.invalidFields.length === 1" translate=IS></span> {{\'INVALID\' | translate }}. </span> <div class="invalid-field-list pv-15 text-center"></div> </div> <label class="item item-input item-input-b mb-15"> <input validation="required:alt= {{\'VALIDATION.RESIDENCE.ZIP_CODE.EMPTY\' | translate }}" type="{{vm.residence.country === \'United States\'?\'number\':\'text\'}}" validation-error-to=.invalid-field-list ng-model=vm.residence.postcode name=raf_postcode maxlength=20 minlength=5 placeholder="{{\'ZIP_CODE_REQUIRED\' | translate }}"> </label> <label class="item item-input item-input-b mb-15"> <input validation-error-to=.invalid-field-list ng-model=vm.residence.street type=text name=raf_street maxlength=50 placeholder="{{\'ADDRESS\' | translate }}"> </label> <label class="item item-input item-input-b mb-15"> <input validation="alpha:alt= {{\'VALIDATION.RESIDENCE.CITY.FORMAT\' | translate}}" validation-error-to=.invalid-field-list ng-model=vm.residence.locality type=text name=raf_locality maxlength=50 placeholder="{{\'CITY\' | translate }}"> </label> <label class="item item-input item-input-b mb-15"> <select validation-error-to=.invalid-field-list ng-model=vm.residence.country name=raf_country ng-options="country.name as country.name for country in vm.countries track by country.code"> <option value="" disabled=disabled selected=selected>{{\'COUNTRY\' | translate }}</option> </select> </label> <label class="item item-input item-input-b mb-15"> <input ng-show="vm.residence.country !== \'United States\'" validation-error-to=.invalid-field-list ng-model=vm.residence.region name=raf_region type=text placeholder="{{\'STATE\' | translate }}"> <select ng-model=vm.residence.region ng-show="vm.residence.country === \'United States\'" validation-error-to=.invalid-field-list name=raf_region ng-options="state.name as state.name for state in vm.states track by state.code"> <option value="" disabled=disabled selected=selected>{{\'US_STATES\' | translate }}</option> </select> </label> </div> </ion-content> <cancel-residence-setup></cancel-residence-setup> </form> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'STEP_1_3\' | translate }}"> <ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <back-button on-back-click=vm.cancelAddResidence()></back-button> </ion-nav-buttons> <ion-nav-buttons side=right> <nav-right-button text="{{\'CONTINUE\' | translate }}" has-icon=true ng-disabled=obAddResidenceForm.$invalid ng-click=vm.continue()></nav-right-button> </ion-nav-buttons> </ion-nav-bar> <form name=obAddResidenceForm ng-submit=vm.gotoAddResidenceAddress()> <ion-content class=has-padding> <div class=setup-container> <h3 class=setup-header> {{\'SETUP_YOUR_RESIDENCE\' | translate }} </h3> <div class=setup-image-wrap-sm> <img ng-src=./img/grey-house-icon.png alt=Residence> </div> <div class="setup-text text-center"> {{\'ENTER_RESIDENCE_NAME\' | translate }} </div> <br> <label class="item item-input item-input-a" ng-if=!vm.loading> <input required ng-model=vm.onboardingSession.residence.name placeholder="Residence Name" type=text> </label> <br> <br> <br> </div> </ion-content> </form> <cancel-residence-setup></cancel-residence-setup> <ion-spinner ng-if=vm.loading></ion-spinner> </ion-view>'
}, function(e, t) {
  e.exports = "<ion-footer-bar class=bar-setup-footer> <h1 class=title> <a class=button ng-click=vm.cancelAddResidence()> {{'CANCEL' | translate }} </a> </h1> </ion-footer-bar>"
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'EDIT_RESIDENCE\' | translate}}" class="view-plain view-padded"> <ion-nav-bar class="bar bar-a"> <ion-nav-buttons side=left> <back-button ng-click=vm.onBackClick() type=local></back-button> </ion-nav-buttons> <ion-nav-buttons side=right> <nav-right-button ng-show="vm.dirty && !vm.processing" text="{{\'SAVE\' | translate}}" ng-click=vm.onResidenceUpdate()> </nav-right-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <div ng-if="vm.permission.access === \'owner\'"> <edit-name-simple name=vm.residence.name label="{{\'RESIDENCE_NAME\' | translate}}" on-change=vm.makeDirty() label-type=b> </edit-name-simple> <ion-item class=item-stable ng-click="vm.toggle(\'address\')"> {{ \'ADDRESS\' | translate }} <i class="icon ion-chevron-up" ng-class="vm.addressToggled ? \'ion-chevron-up\' : \'ion-chevron-down\'"></i> </ion-item> <div class=pane-a ng-if=vm.addressToggled> <label class="item item-input item-input-b mb-10"> <input ng-model=vm.residence.street type=text ng-change=vm.makeDirty() name=raf_street placeholder="{{\'ADDRESS\' | translate}}"> </label> <label class="item item-input item-input-b mb-10"> <input ng-model=vm.residence.locality type=text ng-change=vm.makeDirty() name=raf_locality placeholder="{{\'CITY\' | translate}}"> </label> <label class="item item-input item-input-b mb-10"> <select ng-model=vm.selectedCountry ng-change="vm.onSelectedCountryChange(vm.selectedCountry); vm.makeDirty()" name=raf_country ng-options="country as country.name for country in vm.countries track by country.code"> <option value="" disabled=disabled selected=selected>{{\'COUNTRY\' | translate}}</option> </select> </label> <label class="item item-input item-input-b mb-10"> <input ng-if=!vm.isUS(vm.residence.country) ng-model=vm.residence.region ng-change=vm.makeDirty() name=raf_region type=text placeholder="{{\'STATE\' | translate}}"> <select ng-model=vm.selectedState ng-change="vm.onSelectedStateChange(vm.selectedState); vm.makeDirty();" ng-if=vm.isUS(vm.residence.country) name=raf_region ng-options="state.name as state.name for state in vm.states track by state.code"> <option value="" disabled=disabled selected=selected>US States</option> </select> </label> <label class="item item-input item-input-b mb-10"> <input type="{{vm.residence.country === \'United States\'?\'number\':\'text\'}}" ng-pattern=/^\\d{5}$|^\\d{5}-\\d{4}$/ ng-model=vm.residence.postcode name=raf_postcode ng-change=vm.makeDirty() placeholder="{{\'ZIP_CODE\' | translate}}"> </label> <div class=padding-horizontal ng-show="vm.residence && !vm.residence.postcode"> <button ng-click=vm.updateResidenceWithCurrentLocation() class="button button-balanced button-block upcase"> {{\'GET_MY_LOCATION\' | translate}} </button> </div> </div> <ion-item class=item-stable ng-click="vm.toggle(\'homeAway\')"> {{ \'HOME_AWAY_SETTINGS\' | translate }} <i class="icon ion-chevron-up" ng-class="vm.homeAwayToggled ? \'ion-chevron-up\' : \'ion-chevron-down\'"></i> </ion-item> <ion-list ng-if=vm.homeAwayToggled> <div class=info-card-home-away> <div class=row> <div class=wrap-icon> <i class="icon ion-help-circled"></i> </div> <p class=wrap-details translate=HOME_AWAY_DESCRIPTION></p> </div> </div> <button class="button-block-a button-balanced" ng-click=vm.startHomeAwayWizard()>Configure</button> </ion-list> <button ng-click=vm.deleteResidence(vm.residence) class=button-block-c> <span class=lev-red>{{\'DELETE_THIS_RESIDENCE\' | translate}}</span> </button> </div> <div ng-if="vm.permission.access === \'admin\'"> <label class="item item-label-a mb-10"> {{vm.residence.name}} </label> <button ng-click=vm.removeResidencePermission(vm.residence) class=button-block-c> <span class=lev-red>{{\'REMOVE_THIS_RESIDENCE\' | translate}}</span> </button> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'EDIT_RESIDENCES\' | translate }}"> <ion-nav-buttons side=right> <button class="button button-clear" ng-click=$root.showAddButtonActionSheet()> <i class="icon ion-plus"></i> </button> </ion-nav-buttons> <ion-content class=has-padding> <ion-list> <div ng-repeat="residence in vm.residences track by $index"> <ion-item class=item-control-a> <div class=item-content-control-a ui-sref="residences.edit({id : residence.id})"> <div class=col-20> <div class=icon-residence-on></div> </div> <div class="col text-left"> <span class=title>{{residence.name}}</span> </div> <div class=col-10> <i class="icon ion-chevron-right"></i> </div> </div> </ion-item> <div class=mb-5></div> </div> </ion-list> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view view-title={{vm.room.name}}> <ion-nav-buttons side=right> <nav-right-button ng-click=vm.addDevices(); ng-if=vm.devices.length text="{{\'DONE\' | translate }}"> </nav-right-button> </ion-nav-buttons> <ion-content class=has-padding> <div ng-if=vm.devices.length> <p class=tab-instruction-a translate=ADD_DEVICE_TO_ROOM></p> <list-divider type=a label="{{\'UNASSIGNED_DEVICES\' | translate }}"></list-divider> <ion-list> <ion-checkbox class=item-checkbox-b ng-checked=device.selected ng-repeat="device in vm.devices track by $index" ng-model=device.selected ng-click=vm.onDeviceSelection(device)> {{device.name}} </ion-checkbox> </ion-list> </div> <info-card type=b ng-if="!vm.loading && !vm.devices.length"> <span translate=ROOM_NO_UNASSIGNED_DEVICE></span> </info-card> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'ADD_ROOM\' | translate }}" class=view-setup> <ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> <ion-nav-buttons side=right> <nav-right-button text="{{\'SAVE\' | translate }}" ng-click=vm.onSaveRoom(vm.room) ng-show="vm.dirty && !vm.processing"> </nav-right-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <div class=setup-container> <h3 class=setup-header translate=GIVE_ROOM_NAME></h3> <div class="item item-input item-input-a"> <input ng-model=vm.room.name placeholder="My Room" type=text> </div> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view view-title={{vm.room.name}}> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button on-back-click=vm.onBackClick()></back-button> </ion-nav-buttons> <ion-nav-buttons side=right> <nav-right-button ng-click=vm.onUpdateRoom(vm.room) ng-show="vm.dirty && !vm.processing" text="{{\'SAVE\' | translate }}"> </nav-right-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <edit-name-simple name=vm.room.name on-change=vm.makeDirty() label="{{\'EDIT_ROOM_NAME\' | translate}}"> </edit-name-simple> <div class="button-bar mb-10"> <a ng-click=vm.showScenes() class="button button-grouped button-grouped-clear-dark" ng-class="{\'selected\':vm.visibleList === \'scenes\'}"> {{\'SCENES\' | translate }} </a> <a ng-click=vm.showDevices() class="button button-grouped button-grouped-clear-dark" ng-class="{\'selected\': vm.visibleList ===\'devices\'}"> {{\'DEVICES\' | translate }} </a> </div> <ion-list ng-if="vm.visibleList === \'devices\'" class=room-device-list can-swipe=true show-delete=false> <a ui-sref="rooms.add-device({id : vm.room.id})" class="button-clear-a ml-15 mb-10"> <i class="icon ion-plus"></i> {{\'ASSIGN_DEVICE\' | translate }} </a> <room-device-list-item ng-repeat="switch in vm.room.iotSwitches track by $index" device=switch> </room-device-list-item> </ion-list> <ion-list ng-if="vm.visibleList === \'scenes\'" class=room-scene-list> <a ng-click=vm.openSceneWizard() class="button-clear-a ml-15 mb-10"> <i class="icon ion-plus"></i> {{\'ADD_SCENE\' | translate }} </a> <scenes-list-item ng-repeat="scene in vm.room.residentialScenes track by $index" scene=scene> </scenes-list-item> </ion-list> <button on-tap=vm.deleteRoom() class=button-block-c> <span class=lev-red>{{\'REMOVE_ROOM\' | translate}}</span> </button> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <ion-nav-title ng-click=$root.showResidenceListActionSheet()> <span ng-bind=vm.session.currentUser.selectedResidence.name></span> <span class="icon ion-chevron-down"></span> </ion-nav-title> <ion-nav-buttons side=right> <add-action-sheet></add-action-sheet> </ion-nav-buttons> <ion-content class=has-padding> <offline-card></offline-card> <home-away-control-bar></home-away-control-bar> <div ng-if="$root.socketConnected && $root.online"> <list-divider ng-if="vm.rooms.length > 0" label="{{\'ROOMS\' | translate}}" type=a> </list-divider> <ion-list> <room-list-item ng-repeat="room in vm.rooms" room=room expanded-room=vm.rooms.expanded on-expand="vm.rooms.expanded = room"> </room-list-item> </ion-list> <list-divider ng-if="vm.switches.length > 0" label="{{\'DEVICES\' | translate}}" type=a> </list-divider> <ion-list> <iot-switch-list-item ng-repeat="switch in vm.switches" device=switch> </iot-switch-list-item> </ion-list> <info-card type=b ng-if="vm.showAddRoom && vm.showAddSwitch"> <p translate=NO_DEVICE_CARD></p> <a ng-click=vm.onAddDevice() class="button-block-a button-balanced"> {{\'ADD_DEVICE_NOW\' | translate }} </a> </info-card> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view class=scene-assign-devices view-title="{{\'NEW_SCENE\' | translate }}"> <ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> <ion-nav-buttons side=right> <button ng-if="vm.$resolved && vm.devices.length > 0" ng-click=vm.continueNext(); class="button button-clear"> {{\'CONTINUE\' | translate }} <i class="icon ion-chevron-right"></i> </button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <info-card type=a ng-if="vm.$resolved && !vm.devices.length > 0"> {{\'NO_ASSIGNED_DEVICES_FOR_SCENE\' | translate }} </info-card> <div ng-if="vm.$resolved && vm.devices.length > 0"> <div class=setup-container> <h3 class=setup-header translate=SETUP_A_SCENE></h3> <p class="setup-text text-center"> {{\'NAME_SCENE_DESCRIPTION\' | translate }} </p> <div class="item item-input item-input-a"> <input type=text ng-model=vm.sceneWizard.sceneName placeholder="My Scene"> </div> </div> <p class="setup-text text-center setup-container-item"> {{\'ASSIGN_DEVICES_TO_SCENES\' | translate }} </p> <list-divider label="{{\'UNASSIGNED_DEVICES\' | translate }}" type=b></list-divider> <ion-list> <ion-checkbox class=item-checkbox-a ng-checked=device.selected ng-repeat="device in vm.devices track by $index" ng-model=device.selected ng-click=vm.onDeviceSelection(device)> {{device.name}} </ion-checkbox> </ion-list> </div> </ion-content> <scene-setup-cancel></scene-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view class=scene-configure-devices title="{{vm.sceneWizard.sceneName || \'Scene name\'}}"> <ion-nav-bar class=bar-c> <ion-nav-back-button> </ion-nav-back-button> <ion-nav-buttons side=right> <button class="button button-clear" ng-click=vm.continueNext();> {{\'SAVE\' | translate }} </button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <ion-item class="item-capture-button-b row row-center" ng-click=vm.takeSnapShot()> <div class=col-25> <i class="icon ion-camera icon-snapshot"></i> </div> <div class=col> {{\'CAPTURE_CURRENT_SETTINGS\' | translate }} </div> </ion-item> <list-divider label="{{\'MANUALLY_CONFIG_DEVICES\' | translate }}" type=b></list-divider> <ion-list> <wizard-switch-item ng-repeat="device in vm.selectedDevices" switch=device></wizard-switch-item> </ion-list> </ion-content> <scene-setup-cancel></scene-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = "<ion-nav-view class=view-setup> </ion-nav-view>"
}, function(e, t) {
  e.exports = '<ion-view> <ion-nav-title> {{\'ADD_DEVICES\' | translate }} </ion-nav-title> <ion-content> <div ng-if="!vm.devices.length && vm.$resolved" class="card info-card"> <p class="item item-text-wrap" translate=ALL_DEVICES_ALREADY_IN_SCENE></p> </div> <ion-list> <ion-checkbox ng-checked=device.newlySelected ng-repeat="device in vm.devices track by $index" ng-model=device.newlySelected ng-click=vm.onDeviceSelection(device)> <i class="icon ion-right-checkbox" ng-class="{\'ion-ios-checkmark\':device.newlySelected, \'ion-ios-circle-outline\': !device.newlySelected}"> </i> {{device.name}} </ion-checkbox> </ion-list> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view view-title={{vm.scene.name}}> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button on-back-click=vm.onBackClick()></back-button> </ion-nav-buttons> <ion-nav-buttons side=right> <nav-right-button ng-click=vm.onSceneUpdate(vm.scene) ng-show="vm.dirty && !vm.processing" text="{{\'SAVE\' | translate }}"> </nav-right-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <edit-name-simple name=vm.scene.name on-change=vm.makeDirty() label="{{\'EDIT_SCENE_NAME\' | translate }}"> </edit-name-simple> <ion-item class="item-capture-button-a row row-center" ng-click=vm.takeSnapShot()> <div class=col-20> <div class=icon-capture></div> </div> <div class=col> {{\'CAPTURE_CURRENT_SETTINGS\' | translate }} </div> </ion-item> <a ui-sref="rooms.add-scene-device({roomId : vm.roomId})" class="button-clear-a ml-15 mb-10 mt-10"> <i class="icon ion-plus"></i> {{\'ADD_DEVICE\' | translate }} </a> <list-divider type=a label="{{\'MANUALLY_CONFIG_DEVICES\' | translate }}"></list-divider> <ion-list class=scene-device-list> <scene-wizard-device on-change=vm.makeDirty() ng-repeat="deviceAndAction in vm.sceneData.actionBlocks" switch=deviceAndAction.device action=deviceAndAction.action> </scene-wizard-device> </ion-list> <list-divider ng-if="vm.sceneData.newDevices.length > 0" type=a label="{{\'UNSAVED_DEVICES\' | translate }}"> </list-divider> <ion-list> <scene-wizard-device on-change=vm.makeDirty() ng-repeat="device in vm.sceneData.newDevices" switch=device.device action=device.action> </scene-wizard-device> </ion-list> <button ng-click=vm.deleteScene() class=button-block-c> <span class=lev-red>{{\'REMOVE_SCENE\' | translate}}</span> </button> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = "<ion-item class=\"item-control-a animated fadeIn\"> <div class=item-content-control-a> <div class=col-20 ng-click=vm.toggleStatus(vm.switch)> <div ng-if=vm.switch.connected ng-class=\"{'ON':'icon-switch-on', 'OFF': 'icon-switch-off', 'null': 'icon-switch-off'}[vm.switch.power]\"> </div> <div ng-if=!vm.switch.connected class=icon-switch-disconnected></div> </div> <div class=col ng-if=vm.switch.canSetLevel ng-click=vm.toggleAccordion()> <span class=title>{{vm.switch.name}}</span> </div> <div class=col ng-if=!vm.switch.canSetLevel> <span class=title>{{vm.switch.name}}</span> </div> <div class=col-10 ng-if=vm.switch.canSetLevel ng-click=vm.toggleAccordion()> <i class=icon ng-class=\"vm.accordion.expanded ? 'ion-chevron-up': 'ion-chevron-down'\"></i> </div> </div> <ion-option-button class=button-assertive ng-click=\"vm.sceneData.removeAction({device: vm.switch, action : vm.action})\"> {{'DELETE' | translate }} </ion-option-button> </ion-item> <div ng-if=vm.switch.canSetLevel class=ml-accordion expandable={{vm.accordion.expanded}}> <item-range item=vm.switch on-track-change=vm.trackRange()> </item-range> </div> <div class=line-a></div>"
}, function(e, t) {
  e.exports = '<ion-view> <schedule-setup-navbar title="{{\'SCHEDULE_SETUP.ADD_DEVICES.TITLE\' | translate }}" on-back=vm.onBack() on-continue=vm.onContinue()> </schedule-setup-navbar> <ion-content class="has-header has-footer"> <div class="setup-container mt-30"> <div class="setup-text text-center"> {{\'SCHEDULE_SETUP.ADD_DEVICES.TEXT1\' | translate }} </div> </div> <list-divider type=c> {{\'AVAILABLE DEVICES\' | translate }} </list-divider> <item-schedule-wizard ng-repeat="device in vm.scheduleSetupDataService.SELECTED_DEVICES" device=device> </item-schedule-wizard> </ion-content> <schedule-setup-cancel></schedule-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <schedule-setup-navbar title="{{\'SCHEDULE_SETUP.CREATE_SCHEDULE.TITLE\' | translate }}" on-back=vm.onBack() show-continue=false> </schedule-setup-navbar> <ion-content class="has-header has-footer"> <div class="setup-container mt-30"> <div class="setup-text text-center"> {{\'SCHEDULE_SETUP.CREATE_SCHEDULE.TEXT1\' | translate }} </div> <div class="setup-text text-center"> {{\'SCHEDULE_SETUP.CREATE_SCHEDULE.TEXT2\' | translate }} </div> <div class="button-group-stacked mt-30"> <button class="button-block-a button-balanced" ui-sref=schedule-setup-wizard.name-custom> {{\'SCHEDULE_SETUP.CREATE_SCHEDULE.BUTTON1\' | translate }} </button> <button class="button button-clear button-calm" ng-click=vm.skipContinue()> {{\'SCHEDULE_SETUP.CREATE_SCHEDULE.BUTTON2\' | translate }} </button> </div> </div> </ion-content> <schedule-setup-cancel></schedule-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <schedule-setup-navbar title="{{\'SCHEDULE_SETUP.NAME_SCHEDULE.TITLE\' | translate }}" on-back=vm.onBack() on-continue=vm.onContinue()> </schedule-setup-navbar> <ion-content class="has-header has-footer"> <div class="setup-container mt-30"> <div class="setup-text text-center"> {{\'SCHEDULE_SETUP.NAME_SCHEDULE.TEXT1\' | translate }} </div> <div class="setup-text text-center"> {{\'SCHEDULE_SETUP.NAME_SCHEDULE.TEXT2\' | translate }} </div> <div class="item item-input item-input-a mt-30"> <input type=text ng-model=vm.scheduleSetupDataService.SCHEDULE.name placeholder="{{\'SCHEDULE_SETUP.NAME_PLACEHOLDER\' | translate }}"> </div> </div> </ion-content> <schedule-setup-cancel></schedule-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <schedule-setup-navbar title="{{\'SCHEDULE_SETUP.SET_DEVICE_STATE.TITLE\' | translate }}" on-back=vm.onBack() on-continue=vm.onContinue()> </schedule-setup-navbar> <ion-content class="has-header has-footer"> <div class="setup-container mt-30"> <div class="setup-text text-center"> {{\'SCHEDULE_SETUP.SET_DEVICE_STATE.TEXT1\' | translate }} </div> </div> <list-divider type=c> {{\'SCHEDULE_SETUP.SET_DEVICE_STATE.TEXT2\' | translate }} </list-divider> <item-schedule-action config=vm.itemConfig ng-repeat="action in vm.scheduleSetupDataService.ACTIONS" action=action> </item-schedule-action> </ion-content> <schedule-setup-cancel></schedule-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <schedule-setup-navbar title="{{\'SCHEDULE_SETUP.SET_FREQ.TITLE\' | translate }}" on-back=vm.onBack() on-continue=vm.onContinue() continue-text="{{\'SAVE\' | translate }}"> </schedule-setup-navbar> <ion-content class="has-header has-footer"> <div class="setup-container mt-30"> <div class="setup-text text-center"> {{\'SCHEDULE_SETUP.SET_FREQ.TEXT1\' | translate }} </div> </div> <list-divider type=c> {{\'SCHEDULE_SETUP.SET_FREQ.TEXT2\' | translate }} </list-divider> <list-weekdays days-selection=vm.days></list-weekdays> </ion-content> <schedule-setup-cancel></schedule-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = "<ion-view> <schedule-setup-navbar title=\"{{'SCHEDULE_SETUP.SET_TIMES.TITLE' | translate }}\" on-back=vm.onBack() on-continue=vm.onContinue() continue-text=\"{{'NEXT' | translate }}\"> </schedule-setup-navbar> <ion-content class=\"has-header has-footer\"> <div class=\"setup-container mt-30\"> <div class=\"setup-text text-center\"> {{'SCHEDULE_SETUP.SET_TIMES.TEXT1' | translate }} </div> </div> <list-divider type=checkbox ng-click=vm.onSelectStartTime()> <i class=icon ng-class=\"{'ion-ios-checkmark': vm.setOnTime, 'ion-ios-circle-outline': !vm.setOnTime}\"></i> <span>{{'SCHEDULE_SETUP.SET_TIMES.TEXT2' | translate }}</span> </list-divider> <schedule-time-card time=vm.scheduleOnTime initial-time=vm.scheduleSetupDataService.SCHEDULE.scheduleOnTime> </schedule-time-card> <div class=mt-15></div> <list-divider type=checkbox ng-show=vm.setOnTime ng-click=vm.onSelectEndTime()> <i class=icon ng-class=\"{'ion-ios-checkmark': vm.setOffTime, 'ion-ios-circle-outline': !vm.setOffTime}\"></i> <span>{{'SCHEDULE_SETUP.SET_TIMES.TEXT3' | translate }}</span> </list-divider> <schedule-time-card ng-show=\"vm.setOffTime && vm.setOnTime\" time=vm.scheduleOffTime initial-time=vm.scheduleSetupDataService.SCHEDULE.scheduleOffTime> </schedule-time-card> </ion-content> <schedule-setup-cancel></schedule-setup-cancel> </ion-view>"
}, function(e, t) {
  e.exports = "<ion-nav-view class=view-setup> </ion-nav-view>"
}, function(e, t) {
  e.exports = '<ion-view> <ion-nav-buttons side=right> <add-action-sheet></add-action-sheet> </ion-nav-buttons> <ion-nav-title ng-click=$root.showResidenceListActionSheet()> <span ng-bind=vm.session.currentUser.selectedResidence.name></span> <span class="icon ion-chevron-down"></span> </ion-nav-title> <ion-content class=has-padding> <offline-card></offline-card> <home-away-control-bar></home-away-control-bar> <div ng-if="$root.socketConnected && $root.online"> <ion-list> <div ng-repeat="schedule in vm.schedules track by $index"> <item-schedule schedule=schedule></item-schedule> <div class=mb-5></div> </div> </ion-list> <info-card type=b ng-if="vm.$resolved && vm.schedules.length < 1"> <p translate=NO_SCHEDULE_CARD></p> <a ng-click=vm.checkResidenceLocation() class="button-block-a button-balanced"> {{\'ADD_SCHEDULE_NOW\' | translate}} </a> </info-card> </div> </ion-content> </ion-view> '
}, function(e, t) {
  e.exports = "<ion-nav-view class=view-accounts> </ion-nav-view>"
}, function(e, t) {
  e.exports = "<ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-nav-view class=view-setup> </ion-nav-view>"
}, function(e, t) {
  e.exports = "<ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-nav-view class=view-residences> </ion-nav-view>"
}, function(e, t) {
  e.exports = "<ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-nav-view class=view-residences> </ion-nav-view>"
}, function(e, t) {
  e.exports = '<ion-nav-bar class="bar bar-wizard"> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-nav-view class=setup-wizard-view> </ion-nav-view>'
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'SUPPORT\' | translate }}"> <ion-nav-bar class=bar-c> <ion-nav-back-button></ion-nav-back-button> </ion-nav-bar> <ion-content> <div class=setup-container> <h4 class="header-4 mb-30">{{\'LEVITON_VALUES_FEEDBACK\' | translate }}</h4> <div class="setup-text text-center"> <p class=mb-20>{{\'SUPPORT_DESCRIBE_ISSUES\' | translate }}</p> <p>{{\'SUPPORT_LEVITON_CULTURE\' | translate }}</p> </div> <textarea class=ta-feedback placeholder="What\'s on your mind?" ng-model=vm.feedback.message>\n            </textarea> <div class="row row-center pv-10"> <div class=col-20> <input type=checkbox class=lev-checkbox ng-model=vm.feedback.allowResponse ng-init="vm.feedback.allowResponse = true;"> </div> <div class="col-80 lev-gray checkbox-text-a text-left"> {{\'SUPPORT_ALLOW_CONTACT_DESCRIPTION\' | translate }} </div> </div> <button class="button-block-a button-balanced" ng-click=vm.sendFeedback() ng-disabled=!vm.feedback.message> {{\'SEND\' | translate }} </button> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = "<ion-view view-title=\"{{'SUPPORT' | translate }}\"> <ion-nav-bar class=bar-c> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content> <div class=setup-container> <button class=\"button-block-a button-balanced\" ng-click=vm.sendFeedback();> {{'SEND_FEEDBACK' | translate }} </button> <h3 class=\"setup-header pv-20\"> My Leviton {{'SUPPORT' | translate }} </h3> <button class=\"button-block-a button-balanced\" ng-click=vm.articlesAndHelp()> {{'ARTICLES_HELP' | translate }} </button> <button class=\"button-block-a button-balanced mt-30\" ng-click=vm.reportAProblem()> {{'REPORT_A_PROBLEM_TITLE' | translate }} </button> </div> <contact-us-card></contact-us-card> <div class=legal-links> <a ng-click=\"vm.openEula('terms')\" class=button-hyperlink-b> {{'TERMS_OF_USE' | translate}}</a> <br> <a ng-click=\"vm.openEula('privacy')\" class=button-hyperlink-b> {{'PRIVACY_POLICY' | translate}}</a> </div> </ion-content> </ion-view>"
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'SUPPORT\' | translate }}"> <ion-nav-bar class=bar-c> <ion-nav-back-button></ion-nav-back-button> </ion-nav-bar> <ion-content> <div class=setup-container> <h4 class="header-4 mb-30">{{\'REPORT_A_PROBLEM_TITLE\' | translate }}</h4> <div class="setup-text text-center"> <p class=mb-20>{{\'REPORT_A_PROBLEM_DESCRIPTION\' | translate }}</p> </div> <textarea class=ta-feedback placeholder="What\'s on your mind?" ng-model=vm.report.message>\n            </textarea> <button class="button-block-a button-balanced" ng-click=vm.reportProblem() ng-disabled=!vm.report.message> {{\'SEND\' | translate }} </button> </div> </ion-content> </ion-view>`'
}, function(e, t) {
  e.exports = '<ion-view> <switch-setup-navbar title="{{\'STEP_2_7\' | translate }}" on-back=vm.goBack() show-continue=false> </switch-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header>{{\'FIND_YOUR_DEVICE\' | translate }}</h3> <div class="setup-text text-center" translate=FIND_YOUR_DEVICE_IOS_INSTRUCTION></div> <div class=setup-image-wrap> <img ng-src={{vm.imageSources[vm.platform]}} alt="Select Leviton Device from your WiFi connection settings."> </div> <div class="setup-text text-center" ng-if="vm.platform === \'ios\'" translate=FIND_YOUR_DEVICE_AFTER_INSTRUCTION></div> <div class="setup-text text-center" ng-if="vm.platform == \'android\'"> After connecting to Wi-Fi, Android may warn you that no internet is found, please ignore the message and reopen the My Leviton app and continue the setup process. </div> <button class="button-block-a button-balanced" ng-click=vm.wifiSetting()> Jump To Settings App </button> </div> </ion-content> <switch-setup-cancel></switch-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = "<div class=contact-info> <span>If this problem persists, contact our support team at :</span> <a href=tel:18008243005>1-800-824-3005</a> <span>or</span> <a href=mailto:dssupport@leviton.com>dssupport@leviton.com</a> </div>"
}, function(e, t) {
  e.exports = '<ion-view> <switch-setup-navbar title="{{\'STEP_7_7\' | translate }}" show-back=false on-continue=vm.continueNext()> </switch-setup-navbar> <ion-content class=has-header> <div class=setup-container> <h3 class=setup-header>{{\'NAME_YOUR_DEVICE\' | translate }}</h3> <div class="setup-text text-center" translate=DEVICE_CONNECTED_INFO translate-values="{deviceName: vm.deviceEnrollmentDataService.savedDevice.name || \'Leviton Device DEBUG\'}"> </div> <div class="setup-text text-center"> {{\'DEVICE_RENAME_INFO\' | translate }} </div> <div class="item item-input item-input-a"> <input type=text ng-blur=vm.renameDevice() ng-model=vm.switchName> </div> <div class="setup-text text-center mt-20" translate=DEVICE_IDENTIFY_INSTRUCT> </div> <button class="button-block-a button-balanced" ng-click=vm.identifyDevice()> {{\'IDENTIFY_DEVICE\' | translate }} </button> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <switch-setup-navbar title="{{\'COMPLETE\' | translate }}" show-back=false show-continue=false> </switch-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header translate=DEVICE_SETUP_COMPLETE_INFO></h3> <div class="setup-text text-center"> {{\'DEVICE_READY_TO_USE\' | translate }} </div> <div class=setup-image-wrap-sm> <img ng-src=./img/green-check.png> </div> </div> </ion-content> <button class="button-block-a button-bottom button-balanced" ng-click=vm.onFinish()> {{\'FINISH\' | translate }} </button> </ion-view>'
}, function(e, t) {
  e.exports = "<ion-view> <switch-setup-navbar title=\"{{'STEP_1_7' | translate }}\" on-back=vm.goBack() on-continue=vm.continueNext()> </switch-setup-navbar> <ion-content class=\"has-header has-footer\"> <div class=setup-container> <h3 class=setup-header>{{'DEVICE_SETUP' | translate }}</h3> <ul class=list-instruction-a> <li>{{'DEVICE_SETUP_INSTRUCTIONS.a' | translate }}</li> <li>{{'DEVICE_SETUP_INSTRUCTIONS.b' | translate }}</li> <li> {{'DEVICE_SETUP_INSTRUCTIONS.c' | translate }} <a ng-click=vm.showFactoryProcedure()>{{'DEVICE_SETUP_INSTRUCTIONS.d' | translate }}</a> {{'DEVICE_SETUP_INSTRUCTIONS.e' | translate }} </li> <li ng-if=vm.isPlatformAndroid>{{'DEVICE_SETUP_INSTRUCTIONS_ANDROID' | translate }}</li> </ul> <contact-us-card></contact-us-card> </div> </ion-content> <switch-setup-cancel></switch-setup-cancel> </ion-view>"
}, function(e, t) {
  e.exports = '<ion-view> <switch-setup-navbar title="{{\'STEP_4_7\' | translate }}" on-back=vm.goBack() on-continue=vm.continueNext()> </switch-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header> {{\'ENTER_NETWORK_PASSWORD\' | translate }} </h3> <div class="setup-text text-center" translate=ENTER_NETWORK_PASSWORD_INSTRUCTION></div> <label class="item item-input item-input-a"> <input autocorrect=off autocapitalize=none ng-attr-type="{{vm.passwordVisible? \'text\':\'password\'}}" ng-model=vm.networkPassword> <i on-tap=vm.togglePasswordVisibility() ng-class="vm.passwordVisible ? \'ion-eye\': \'ion-eye-disabled\'" class="icon placeholder-icon-right"></i> </label> <div class="row row-center mt-15"> <div class=col-20> <input type=checkbox class=lev-checkbox ng-model=vm.rememberNetworkPassword> </div> <div class="col-80 checkbox-text-a"> <span translate=REMEMBER_NETWORK_PASSWORD></span> </div> </div> <br> <br> <br> <p class=heading-a>TIPS</p> <ul class=list-instruction-c> <li>Wi-Fi passwords are case sensitive.</li> <li>Tap the eyeball icon to view the password you entered.</li> </ul> </div> </ion-content> <switch-setup-cancel></switch-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <switch-setup-navbar no-back-text=true on-continue=vm.continue() on-back=$root.$ionicGoBack()> </switch-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <h3 class=setup-header translate=PREP_DEVICE_SETUP></h3> <ul class=list-instruction-a> <li translate=PREP_DEVICE_INSTRUCTIONS.a></li> <li translate=PREP_DEVICE_INSTRUCTIONS.b></li> <li translate=PREP_DEVICE_INSTRUCTIONS.c></li> </ul> <contact-us-card></contact-us-card> </div> </ion-content> <switch-setup-cancel></switch-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <switch-setup-navbar title="{{\'STEP_5_7\' | translate }}" show-back=false show-continue=false> </switch-setup-navbar> <ion-content class=has-header> <div class=setup-container> <div ng-if=!vm.showWarning> <h3 class=setup-header translate=JOINING_WIFI_NETWORK></h3> <div class="setup-text text-center"> {{\'WAIT_WHILE_DEVICE_JOINS\' | translate }} </div> <div class=setup-image-wrap> <img ng-src=./img/join-wifi.gif alt="Joining WiFi"> </div> </div> <div ng-if=vm.showWarning> <div class=setup-image-wrap-sm> <img ng-src=./img/icons/icon-warning.png alt=Warning> </div> <div class="setup-text text-center"> {{\'MAKE_SURE_MOBILE_HAS_INTERNET\' | translate }} </div> </div> <div class=text-center ng-if=vm.showWarning> <button class="button-block-a button-balanced" ui-sref=switch-setup-wizard.device-setup-info> {{\'TRY AGAIN\' | translate }} </button> <br> <contact-us-card></contact-us-card> </div> </div> </ion-content> <switch-setup-cancel ng-if=vm.showWarning></switch-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <switch-setup-navbar title="{{\'STEP_6_7\' | translate }}" show-back=false show-continue=false> </switch-setup-navbar> <ion-content class="has-header has-footer"> <div class=setup-container> <div ng-if=!vm.saveError class=text-center> <h3 class=setup-header> <span ng-if=vm.reconfigurationMode>{{\'SETTING_UP_DEVICE_WIRELESS\' | translate }}</span> <span ng-if=!vm.reconfigurationMode>{{\'ADDING_DEVICE_TO_CLOUD\' | translate }}</span> </h3> <div class="setup-text text-center"> <span translate=WAIT_WHILE_DEVICE_ADD></span> </div> <div class=setup-image-wrap> <img ng-src=./img/device-join-cloud.gif alt="Joining Cloud"> </div> </div> <div ng-if=vm.saveError class="text-center mt-15"> <div class=setup-image-wrap-sm> <img ng-src=./img/icons/icon-warning.png alt=Warning> </div> <div class="setup-text text-center" ng-if="vm.saveError.type === \'DUPLICATE_SERIAL_NUMBER\'"> <span translate=DUPLICATE_SERIAL_NUMBER translate-values="{deviceName:vm.deviceEnrollmentDataService.connectedAccessory.ssid || \'Leviton Device\'}"> </span> </div> <div class="setup-text text-center" ng-if="vm.saveError.type === \'ALREADY_BELONGS\'"> <span translate=DEVICE_ALREADY_BELONGS></span> </div> <div ng-if="vm.saveError.type === \'DEVICE_NOT_DISCOVERED\' || vm.saveError.type === \'DEVICE_NOT_IDENTIFIED\' || vm.saveError.type === \'UNKNOWN\'"> <p class="setup-text text-center" translate=UNABLE_TO_ENROLL.DESCRIPTION></p> <p class="setup-text text-center" translate=CONTACT_SUPPORT></p> </div> </div> <div ng-if=vm.saveError class=setup-buttons-wrapper> <button class="button-block-a button-balanced" ui-sref=switch-setup-wizard.device-setup-info> {{\'TRY_AGAIN\' | translate }} </button> <contact-us-card></contact-us-card> </div> </div> </ion-content> <switch-setup-cancel ng-if=vm.saveError></switch-setup-cancel> </ion-view>'
}, function(e, t) {
  e.exports = "<ion-view> <switch-setup-navbar title=\"{{'STEP_3_7' | translate }}\" show-back=false on-continue=vm.continueNext()> </switch-setup-navbar> <div class=\"fixed-header setup-container select-network-static\"> <h3 class=setup-header translate=ADD_DEVICE_TO_WIFI translate-values=\"{deviceName: (vm.deviceEnrollmentDataService.connectedAccessory.ssid || 'Leviton Device DEBUG')}\"> </h3> <div class=\"setup-text text-center\"> {{'SELECT_WIFI_BELOW' | translate }} <br> {{'IF_NO_WIFI_NETWORK' | translate }} <a ng-click=vm.rescanNetworkList()>{{'RESCAN' | translate }}</a>, or press <a ng-click=vm.showFAQ()>{{'HERE' | translate }}</a> {{'ADDITIONAL_SUPPORT' | translate }}. </div> </div> <ion-content class=\"select-network-content has-footer\"> <div class=list> <ion-radio icon=ion-ios-checkmark ng-repeat=\"network in vm.discoveredNetworks track by $index\" ng-click=vm.selectNetwork(network)> {{network.ssid}} <img class=wifi-icon ng-src=\"img/signal-strengths/64_{{network.signal_strength.level || 0 }}bars.png\" alt={{network.signal_strength.desc}}> </ion-radio> </div> </ion-content> <switch-setup-cancel></switch-setup-cancel> </ion-view>"
}, function(e, t) {
  e.exports = '<ion-modal-view class="ion-nifty-modal setup-modal"> <ion-nav-bar> <ion-nav-buttons side=right> <button class="button button-clear" ng-click=vm.modal.hide()> <i class="icon ion-close-circled lev-gray"></i> </button> </ion-nav-buttons> </ion-nav-bar> <ion-content class="has-header has-footer"> <h3 translate=TROUBLESHOOT_NETWORK class=setup-header></h3> <div class="setup-text text-center" translate=TROUBLESHOOT_INFO></div> <ul class=list-instruction-a> <li>{{\'TROUBLESHOOT_STEPS.A\' | translate }}</li> <li>{{\'TROUBLESHOOT_STEPS.B\' | translate }}</li> <li>{{\'TROUBLESHOOT_STEPS.C\' | translate }}</li> <li>{{\'TROUBLESHOOT_STEPS.D\' | translate }}</li> <li>{{\'TROUBLESHOOT_STEPS.E\' | translate }}</li> </ul> </ion-content> <ion-footer-bar> <h1 class="title lev-light-blue" ng-click=vm.modal.hide() translate=CONTINUE_DEVICE_SETUP> </h1> </ion-footer-bar> </ion-modal-view>'
}, function(e, t) {
  e.exports = "<ion-modal-view class=\"ion-nifty-modal ota-modal\"> <ion-header-bar> <h1 class=title>{{vm.status.message.title}}</h1> </ion-header-bar> <ion-content class=\"has-header has-footer\"> <div ng-if=\"vm.status.phase === 'before' || vm.status.phase === 'after'\"> <p ng-show=vm.status.message.body> <span ng-bind-html=vm.status.message.body></span> </p> </div> <div ng-if=\"vm.status.phase === 'during'\" class=mt-15> <p class=update-percentage>{{vm.UPDATE_PERCENTAGE || 0}}%</p> <progress max=100 value={{vm.UPDATE_PERCENTAGE}}></progress> </div> </ion-content> <ion-footer-bar> <h1 class=title ng-if=\"vm.UPDATE_SUCCESS || vm.status.canClose\" ng-click=vm.closeUpdateModal()> {{'OK'|translate}} </h1> <h1 class=title ng-if=vm.showMessage ng-click=vm.kickOff()> {{'UPDATE_NOW' | translate }} </h1> </ion-footer-bar> </ion-modal-view>"
}, function(e, t) {
  e.exports = "<ion-view> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button on-back-click=vm.onBackClick()></back-button> </ion-nav-buttons> <ion-nav-buttons side=right> <nav-right-button ng-click=vm.onUpdateSwitch(switch) ng-show=\"vm.dirty && !vm.processing\" text=\"{{'SAVE' | translate }}\"> </nav-right-button> </ion-nav-buttons> <ion-nav-title> {{switch.name}} <span class=nav-title-warning ng-if=\"switch && switch.connected == false\"> ({{'NOT_CONNECTED' | translate }}) </span> </ion-nav-title> </ion-nav-bar> <ion-content class=has-padding> <span ng-hide=true ng-if=$root.socketConnected ng-init=vm.onSocketConnected();></span> <edit-name-simple name=switch.name on-change=vm.makeDirty() label=\"{{'EDIT_DEVICE_NAME' | translate }}\"> </edit-name-simple> <div class=\"padding lev-red animated fadeIn\" ng-if=vm.error>{{vm.error.message}}</div> <ion-list class=switch-details-control-container> <ion-item ng-click=vm.openAdvancedSettings(switch) class=item-icon-right> {{'SETTINGS' | translate }} <i class=\"icon ion-ios-settings-strong\"></i> </ion-item> <ion-item class=item-icon-right ng-click=vm.identifyDevice(switch)> {{'IDENTIFY_DEVICE' | translate }} <i class=\"icon icon-circled ion-ios-search-strong\"></i> </ion-item> <ion-item ng-click=vm.reconfigureWireless() class=item-icon-right> {{'RECONFIGURE_WIRELESS' | translate }} <i class=\"icon icon-circled ion-wifi\"></i> </ion-item> <ion-item class=item-icon-right ng-click=vm.confirmUpdate() ng-disabled=vm.processing ng-if=\"vm.latestFirmwareInfo && vm.switch && vm.shouldUpdateFirmware\"> {{'UPDATE_FIRMWARE' | translate }} ({{ vm.latestFirmwareInfo.version }}) <i class=\"icon icon-circled ion-ios-cloud-download-outline\"></i> </ion-item> <ion-item ng-click=vm.removeSwitch(switch) class=item-icon-right> {{'REMOVE_THIS_DEVICE' | translate }} <i class=\"icon icon-circled ion-minus\"></i> </ion-item> </ion-list> <ion-list class=switch-details-info-container> <div class=item> <div class=info-title> {{'MANUFACTURER' | translate }} </div> <div class=info-subtitle> <span> {{switch.manufacturer}} </span> </div> </div> <div class=item> <div class=info-title> {{'MODEL' | translate }} </div> <div class=info-subtitle> <span> {{switch.model}} </span> </div> </div> <div class=item> <div class=info-title> {{'SERIAL' | translate }} </div> <div class=info-subtitle> <span> {{switch.serial}} </span> </div> </div> <div class=item> <div class=info-title> {{'VERSION_NUMBER' | translate }} </div> <div class=info-subtitle> <span> {{vm.switch.version}} </span> </div> </div> </ion-list> </ion-content> </ion-view> "
}, function(e, t) {
  e.exports = '<ion-view> <ion-nav-bar class=bar-b> <ion-nav-title class=title> {{\'DEVICE_SETTINGS\' | translate }} </ion-nav-title> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-header> <list-divider label="{{\'DEVICE_OPTIONS\' | translate }}" type=b></list-divider> <ion-item class="item-device-info-a has-bottom-divider"> <div class="row row-center"> <div class=col-66> {{\'STATUS_LED_BEHAVIOUR\' | translate }} <div class=subtitle ng-if="vm.switch.statusLED != null"> {{vm._.find(vm.statusLEDOptions,{value:vm.switch.statusLED}).description}} </div> </div> <div class=col> <select ng-change="vm.updateDevice({statusLED: vm.switch.statusLED})" ng-model=vm.switch.statusLED ng-options="status.value as status.label for status in vm.statusLEDOptions"> </select> </div> </div> </ion-item> <ion-item class="item-device-info-a has-bottom-divider" ng-if=vm.switch.canSetLevel> <div class="row row-center"> <div class=col-66> {{\'DIM_LED_BEHAVIOUR\' | translate }} <div class=subtitle> {{vm._.find(vm.dimLevelLEDOptions,{time:vm.switch.dimLED}).description}} </div> </div> <div class=col> <select ng-change="vm.updateDevice({dimLED: vm.switch.dimLED})" ng-model=vm.switch.dimLED ng-options="dim.time as dim.label for dim in vm.dimLevelLEDOptions"> </select> </div> </div> </ion-item> <ion-item class=item-device-info-a ng-if=vm.supportsAutoOffFeature> <div class="row row-center"> <div class=col-66> {{\'AUTO_SHUTOFF_TIME\' | translate }} </div> <div class=col> <select ng-model=vm.autoOffTime ng-change="vm.updateDevice({autoOffTime: vm.autoOffTime.seconds})" ng-options="time as time.label for time in vm.autoOffTimes track by time.seconds"> </select> </div> </div> </ion-item> <div ng-if=vm.switch.canSetLevel> <list-divider label="{{\'BULB_OPTIONS\' | translate }}" type=b></list-divider> <ion-item class="item-device-info-a has-bottom-divider"> <div class="row row-center"> <div class=col-66> {{\'BULB_TYPE\' | translate }} </div> <div class=col-33> <select ng-change="vm.updateDevice({loadType: vm.switch.loadType})" ng-model=vm.switch.loadType ng-options="load.value as load.label for load in vm.loadTypes"> </select> </div> </div> </ion-item> <ion-item class="item-device-info-a has-bottom-divider"> <div class="row row-center"> <div class=col-66> {{\'FADE_OFF_RATE\' | translate }} </div> <div class=col-33> <select ng-change="vm.updateDevice({fadeOffTime: vm.switch.fadeOffTime})" ng-model=vm.switch.fadeOffTime ng-options="fade.time as fade.label for fade in vm.fadeChangeRate"> </select> </div> </div> </ion-item> <ion-item class="item-device-info-a has-bottom-divider"> <div class="row row-center"> <div class=col-66> {{\'FADE_ON_RATE\' | translate }} </div> <div class=col-33> <select ng-change="vm.updateDevice({fadeOnTime: vm.switch.fadeOnTime})" ng-model=vm.switch.fadeOnTime ng-options="fade.time as fade.label for fade in vm.fadeChangeRate"> </select> </div> </div> </ion-item> <list-divider label="{{\'PRESET_OPTIONS\' | translate }}" type=b></list-divider> <ion-item class=item-device-info-a> <div class="row row-center"> <div class=col-50>{{\'PRESET_LEVEL\' | translate }}</div> <div class=col ng-show="vm.switch.presetLevel !== 0"> {{vm.switch.presetLevel == 0 ? vm.switch.brightness : (vm.switch.presetLevel | number: 0)}}% </div> </div> </ion-item> <ion-item class=item-device-info-b ng-click=vm.updateDevice({presetLevel:0})> <div class="row row-center"> <div class=col-80> {{\'RETURN_TO_PREV_VAL\' | translate }} </div> <div class=col> <i class=icon ng-class="vm.switch.presetLevel === 0 ? \'ion-ios-checkmark\':\'ion-ios-circle-outline lev-gray\'"></i> </div> </div> </ion-item> <ion-item class="item-device-info-b has-bottom-divider" ng-click="vm.updateDevice({presetLevel:(vm.switch.presetLevel = vm.switch.maxLevel)})"> <div class="row row-center"> <div class=col-80> {{\'USER_SPECIFIC_BRIGHTNESS\' | translate }} </div> <div class=col> <i class=icon ng-class="vm.switch.presetLevel!== 0 ? \'ion-ios-checkmark\':\'ion-ios-circle-outline lev-gray\'"></i> </div> </div> </ion-item> <ion-item class=item-device-info-a ng-class="vm.switch.presetLevel === 0 ? \'range-closed\' : \'\'"> <div ng-hide="vm.switch.presetLevel === 0" class=range> <i class="icon ion-ios-sunny icon-stepper-small"></i> <input type=range min=0 max=100 ng-disabled=vm.processing ng-model=vm.switch.presetLevel on-release="vm.updateDevice({presetLevel: vm.switch.presetLevel})"> <i class="icon ion-ios-sunny icon-stepper-large"></i> </div> </ion-item> <ion-item class="item-device-info-a has-bottom-divider"> <div class="row row-center"> <div class=col-50> {{\'MIN_LEVEL\' | translate }} </div> <div class=col> {{vm.switch.minLevel | number: 0}}% </div> </div> <div class=range> <i class="icon ion-ios-sunny icon-stepper-small"></i> <input type=range min=0 max=99 ng-disabled=vm.processing ng-model=vm.switch.minLevel on-release="vm.updateDevice({minLevel: vm.switch.minLevel})"> <i class="icon ion-ios-sunny icon-stepper-large"></i> </div> </ion-item> <ion-item class="item-device-info-a has-bottom-divider"> <div class="row row-center"> <div class=col-50> {{\'MAX_LEVEL\' | translate }} </div> <div class=col> {{vm.switch.maxLevel | number: 0}} % </div> </div> <div class=range> <i class="icon ion-ios-sunny icon-stepper-small"></i> <input type=range min=1 max=100 ng-disabled=vm.processing ng-model=vm.switch.maxLevel on-release="vm.updateDevice({maxLevel: vm.switch.maxLevel})"> <i class="icon ion-ios-sunny icon-stepper-large"></i> </div> </ion-item> </div> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = '<ion-view> <ion-content> <button class="button button-balanced"> Click me </button> </ion-content> </ion-view>'
}, function(e, t) {
  e.exports = "<ion-nav-view class=view-setup> </ion-nav-view>"
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'EDIT_USER\' | translate }}"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button></back-button> </ion-nav-buttons> <ion-nav-buttons side=right> <nav-right-button ng-show="vm.dirty && !vm.processing" text="{{\'SAVE\' | translate}}" ng-click=vm.updateUser()> </nav-right-button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <div class=text-center ng-if=vm.processing> <ion-spinner></ion-spinner> </div> <ion-item ng-if=vm.permission> <div class=use-title-name ng-if="vm.user.firstName && vm.user.lastName"> {{vm.user.firstName + \' \'+ vm.user.lastName}} </div> <div class=user-title-email> {{vm.user.email}} </div> </ion-item> <ion-item ng-if="vm.residences && vm.residences.length" ng-repeat="residence in vm.residences" class=mb-10> <div class="row box-residence-status"> <div class=col-20> <div class="icon icon-residence-user"></div> </div> <div class=col> <span class=user-title-residence-name>{{residence.name}}</span> <br> <span class=lev-gray-75>Status:</span> <span class=capitalize>{{residence.permission.status}}</span> </div> </div> <div class="row box-residence-actions"> <div class=col> <button ng-click="vm.revokeAccess(residence, vm.user.email)" class="button button-revoke-access"> {{\'REVOKE_ACCESS\' | translate }} </button> </div> <div class=col-10></div> <div class=col> <button ng-if="residence.permission.status === \'pending\'" ng-click="vm.resendInvitation(vm.user.email, residence)" class="button button-resend-invite"> {{\'RESEND_INVITATION\' | translate }} </button> </div> </div> </ion-item> <ion-item ng-if=vm.isMe> <div class=list> <label class="item item-input item-stacked-label"> <span class=input-label>First Name</span> <input type=text placeholder={{vm.user.firstName}} ng-model=vm.editUserData.firstName ng-change=vm.update()> </label> <label class="item item-input item-stacked-label"> <span class=input-label>Last Name</span> <input type=text placeholder={{vm.user.lastName}} ng-model=vm.editUserData.lastName ng-change=vm.update()> </label> <label class="item item-input item-stacked-label"> <span class=input-label>Email</span> <input type=text placeholder={{vm.user.email}} ng-model=vm.editUserData.email ng-change=vm.update()> </label> </div> </ion-item> </ion-content> <div class=me-user-delete ng-if=vm.isMe> <button class=button ng-click=vm.confirmDelete()>{{\'DELETE_ACCOUNT\' | translate}}</button> </div> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'INVITE_A_USER\' | translate }}"> <ion-nav-bar class=bar-a> <ion-nav-back-button></ion-nav-back-button> </ion-nav-bar> <ion-content class="has-padding has-footer"> <div class=setup-container> <div class="setup-text text-center mt-15" ng-if=vm.userOwnedResidences.length translate=INVITE_USER_EXPLANATION></div> <label class="item item-input item-input-c" ng-if=vm.userOwnedResidences.length> <input type=email required ng-model=vm.invitationEmail placeholder=name@example.com> </label> <div class="setup-text text-center mt-15" ng-if=vm.userOwnedResidences.length> {{\'SELECT_INVITING_RESIDENCES\' | translate }} </div> <div class=list> <ion-radio icon=ion-ios-checkmark class=item-radio-a ng-model=vm.selectedResidence ng-value=residence ng-repeat="residence in vm.userOwnedResidences track by residence.id" ng-click=vm.onResidenceSelection(residence)> {{residence.name}} </ion-radio> </div> <div class="setup-text text-center" ng-if=!vm.userOwnedResidences.length> {{\'DONT_OWN_RESIDENCE\' | translate }} </div> </div> </ion-content> <div class=button-block-d> <button ng-if=vm.userOwnedResidences.length ng-click=vm.inviteUser(vm.invitationEmail) type=submit class="button-block-a button-balanced mt-30 upcase"> {{\'INVITE\' | translate }} </button> <button ng-if=!vm.userOwnedResidences.length ng-click=vm.addResidence() class="button-block-a button-balanced mt-30"> {{\'ADD_A_RESIDENCE\' | translate }} </button> </div> </ion-view> '
}, function(e, t) {
  e.exports = '<ion-view view-title="{{\'USERS\' | translate }}"> <ion-nav-bar class=bar-a> <ion-nav-buttons side=left> <back-button ng-click=vm.goBack()></back-button> </ion-nav-buttons> <ion-nav-buttons side=right> <button class="button button-clear" ui-sref=users.invite> <i class="icon ion-person-add"></i> </button> </ion-nav-buttons> </ion-nav-bar> <ion-content class=has-padding> <ion-list> <ion-item class="item-user-a me-user" ng-click=vm.navigateMeToUserDetails()> <div class="row row-center"> <div class=col-20> <div class=icon-user></div> </div> <div class=col> <div class=title-user ng-if="vm.person.firstName && vm.person.lastName"> (ME) {{vm.person.firstName + \' \'+ vm.person.lastName}} </div> <div class=title-user ng-if="!(vm.person.firstName && vm.person.lastName)"> {{vm.person.email}} </div> <div class=subtitle-user> {{vm.status === \'pending\'? \'Pending\':\'Confirmed\'}} </div> </div> <div class=col-10> <i class="icon ion-chevron-right"></i> </div> </div> </ion-item> <br> <div class="item item-divider"> Invited Users </div> <ion-item ng-repeat="user in vm.users" class=item-user-a ng-click=vm.editUser(user)> <div class="row row-center"> <div class=col-20> <div class=icon-user></div> </div> <div class=col> <div class=title-user ng-if="user.person.firstName && user.person.lastName"> {{user.person.firstName + \' \'+ user.person.lastName}} </div> <div class=title-user ng-if="!(user.person.firstName && user.person.lastName)"> {{user.person.email}} </div> <div class=subtitle-user> {{user.status === \'pending\'? \'Pending\':\'Confirmed\'}} </div> </div> <div class=col-10> <i class="icon ion-chevron-right"></i> </div> </div> </ion-item> <info-card type=a ng-if="vm.$resolved && vm.users.length < 1"> {{\'INVITE_USERS_INSTRUCTIONS\' | translate }} <a ui-sref=users.invite class="button-block-a button-balanced"> {{\'INVITE_USER_NOW\' | translate }} </a> </info-card> </ion-list> </ion-content> </ion-view> '
}, function(e, t) {
  e.exports = [{
    value: "AC 1"
  }, {
    value: "AC 2"
  }, {
    value: "Attic 1"
  }, {
    value: "Attic 2"
  }, {
    value: "Bath 1 GFCI"
  }, {
    value: "Bath 1 Lights"
  }, {
    value: "Bath 1 Outlets"
  }, {
    value: "Bath 2 GFCI"
  }, {
    value: "Bath 2 Outlets"
  }, {
    value: "Bath 3 GFCI"
  }, {
    value: "Bath 3 Outlets"
  }, {
    value: "Bedroom 1"
  }, {
    value: "Bedroom 2"
  }, {
    value: "Bedroom 3"
  }, {
    value: "Bedroom 4"
  }, {
    value: "Compactor"
  }, {
    value: "Computer"
  }, {
    value: "Den"
  }, {
    value: "Dining Room"
  }, {
    value: "Dishwasher"
  }, {
    value: "Disposal"
  }, {
    value: "Entry Foyer"
  }, {
    value: "Family Room"
  }, {
    value: "Freezer"
  }, {
    value: "Gaming"
  }, {
    value: "Garage"
  }, {
    value: "GFCI"
  }, {
    value: "Heater"
  }, {
    value: "Heating 1"
  }, {
    value: "Kitchen Lights"
  }, {
    value: "Kitchen Outlets"
  }, {
    value: "Lights"
  }, {
    value: "Living Room"
  }, {
    value: "Main"
  }, {
    value: "Master Bedroom"
  }, {
    value: "Microwave"
  }, {
    value: "Outlets"
  }, {
    value: "Range"
  }, {
    value: "Refrigerator"
  }, {
    value: "Res Room"
  }, {
    value: "Security"
  }, {
    value: "Smoke Detector"
  }]
}, function(e, t) {
  e.exports = {
    NEXT: "Next",
    DONE: "Done",
    SCHEDULE_VALIDATION: {
      NAME: {
        TITLE: "Please Name Your Schedule",
        MESSAGE: "You must give your schedule a name to continue."
      },
      NO_DEVICES_ENROLLED: {
        TITLE: "No Devices Enrolled",
        MESSAGE: "You don't have any devices yet. Please add a device before adding a schedule.",
        BUTTON1: "Add a Device"
      }
    },
    SCHEDULE_SETUP: {
      NAME_PLACEHOLDER: "My Schedule",
      CREATE_SCHEDULE: {
        TITLE: "Create New Schedule",
        TEXT1: "Creating a Schedule may seem tricky, but it's a powerful way to automate your life.",
        TEXT2: "We've created a wizard to guide you through the process. Follow this to get started, or if you prefer, skip this step and create one from the Schedule screen.",
        BUTTON1: "Create a New Schedule",
        BUTTON2: "Skip this Wizard"
      },
      NAME_SCHEDULE: {
        TITLE: "Name the Schedule",
        TEXT1: 'Give your Schedule a name that describes its primary function, e.g. "Goodnight" or "All Lights Off"',
        TEXT2: "You can change this later at any time."
      },
      ADD_DEVICES: {
        TITLE: "Add Devices",
        TEXT1: "Add devices to your Schedule from the list below."
      },
      SET_DEVICE_STATE: {
        TITLE: "Add Devices",
        TEXT1: "Choose whether the selected device(s) will be on or off when the schedule runs.",
        TEXT2: "ON / OFF"
      },
      SET_TIMES: {
        TITLE: "Set the Times",
        TEXT1: "Next, set the time that you would like the schedule to run. You may set both a start and an end time or just a start time.",
        TEXT2: "SET START TIME",
        TEXT3: "SET END TIME"
      },
      SET_FREQ: {
        TITLE: "Set the Frequency",
        TEXT1: "Select which days you would like the schedule to run.",
        TEXT2: "REPEAT"
      }
    },
    SCHEDULE_EDIT: {
      TITLE: "Edit Schedule",
      NAME_PLACEHOLDER: "My Schedule",
      TEXT1: "SET START TIME",
      TEXT2: "SET END TIME"
    },
    SCHEDULE_ADD_DEVICES: {
      TITLE: "Add Devices",
      TEXT1: "Add devices to your schedules<br>from the list below."
    }
  }
}, function(e, t) {
  e.exports = {
    ACTIVITIES: "Activities",
    ACTIVITY_ANOTHER_ITEM_PROMPT: "Would you like to add another Device or Room to this Activity?",
    ACTIVITY_DELETE_PROMPT: "You are about to delete this activity. Are you sure you want to continue?",
    ACTIVITY_DELETE_PROMPT_TITLE: "Delete Activity",
    ACTIVITY_NO_ITEM_SELECTED: "You must add at least 1 {{type}} to select this option.",
    ACTIVITY_NO_PROP: "There are no {{prop}}.",
    ACTIVITY_ON_SAVE_INSTRUCT: "Once completed, it will be added to your list.",
    ACTIVITY_OR_SAVE: "You can also add/remove another device or room to this activity later.",
    ACTIVITY_PREVALUES: {
      a: "Finally, lets configure the settings for this activity.",
      b: "The changes you make to the Devices, Rooms, and Scenes will only affect this Activity."
    },
    ACTIVITY_ROOM_INFO: "Only rooms with available scenes can be selected.",
    ACTIVITY_RUN_PROMPT: "Are you sure you would like to run this activity?",
    ACTIVITY_SELECT_DEVICE: "Please select the device you would like to add to your activity.",
    ACTIVITY_SELECT_DEVICES: "Please select the devices you would like to add to your activity.",
    ACTIVITY_SELECT_ROOM: "Please select the room you would like to add to your activity.",
    ADD: "Add",
    ADD_A: "Add a",
    ADD_A_BREAKER: "Add a Breaker",
    ADD_A_DEVICE: "Add a Device",
    ADD_A_RESIDENCE: "Add a Residence",
    ADD_ACTIVITY: "Add Activity",
    ADD_ACTIVITY_NOW: "Add an Activity Now",
    ADD_COMMAND_TEXT: "Add commands to your new Activity - for specific devices or for entire rooms.",
    ADD_DEVICE: "Add Device",
    ADD_DEVICE_NOW: "Add a Device Now",
    ADD_DEVICE_TO_ROOM: "Assign devices to your room <br> from the list below.",
    ADD_DEVICE_TO_WIFI: "Add {{deviceName}} <br> to your Wi-Fi.",
    ADD_DEVICES: "Add Devices",
    ADD_LIMIT_ERROR_MESSAGE: "You have reached the maximum number of {{type}} allowed. Please delete one or more to continue.",
    ADD_MORE_ITEMS: "Add More Items",
    ADD_RESIDENCE: "Add Residence",
    ADD_ROOM: "Add Room",
    ADD_SCENE: "Add Scene",
    ADD_SCHEDULE: "Add Schedule",
    ADD_SCHEDULE_NOW: "Add a Schedule Now",
    ADD_THINGS_TO_ACTIVITY: "Add Commands to Activity",
    ADDED_DEVICE_SUCCESS: "Successfully assigned the selected device(s) to the room.",
    ADDING_DEVICE_TO_CLOUD: "Connecting to Wi-Fi",
    ADDITIONAL_SUPPORT: "for additional support",
    ADDRESS: "Address",
    AFTER: "after",
    ALERT: "Alert",
    ALL_DEVICES_ALREADY_IN_SCENE: "All the devices in your room are already added to your scene.<br> Assign more devices to your room so that you can add it to a scene.",
    ALWAYS_OFF: "Always Off",
    ALWAYS_ON: "Always On",
    AMAZON_ALEXA: "Amazon Alexa",
    AND: "and",
    ANDROID_WIFI_CONNECT_WARNING: "After connecting to Wi-Fi, Android may warn you that no internet is found, please ignore the message and reopen the My Leviton app and continue the setup process.",
    ANNUAL_USAGE: "Annual Usage",
    APP_NAME: "My Leviton",
    APP_VERSION: "App Version",
    ARE: "are",
    ARTICLES_HELP: "Articles & Help",
    ASK_FOR_DEVICE_SETUP: "You currently have no devices set up. Would you like to add a device to this residence now?",
    ASK_NUM_OF_POSITIONS: "How many positions does your load center have?",
    ASK_WHERE_ONE_LOCATED: 'Where is the position "1" located on your panel?',
    ASSIGN_DEVICE: "Assign Device",
    ASSIGN_DEVICE_TO_ROOM: "Assign devices to your room from the list below.",
    ASSIGN_DEVICES: "Assign Devices",
    ASSIGN_DEVICES_TO_SCENES: "Assign devices to your Scene from the list below.",
    ASSIGN_TO_A_ROOM: "Assign To a Room",
    ASSIGNED_DEVICES: "Assigned Devices",
    ASSIGNED_ROOMS: "Assigned Rooms",
    AUGUST_AUTO_UNLOCK_TITLE: "Use Auto-Unlock to run an Activity.",
    AUGUST_CONFIGURATION_INSTRUCTIONS: "My Leviton can use August's Auto-Unlock feature to run activities when you return home.",
    AUGUST_CONFIGURATION_INSTRUCTIONS_TWO: "Select an activity that you would like to run when your lock has been auto-unlocked.",
    AUGUST_CONN_CARD_INFO: "With August and My Leviton you can use August's auto-unlock feature to run activities when you return home.",
    AUGUST_DEAUTH_MESSAGE: "Are you sure you would like to de-authorize august?",
    AUGUST_DEAUTH_TITLE: "De-authorization",
    AUGUST_INTEGRATION_COMPLETE: "Your August Connection Setup is Complete.",
    AUGUST_INTEGRATION_COMPLETE_INFO: "Changing your configuration settings in the future is easy. Simply return to the Connections page, which can be found on the side menu, and tap 'Reconfigure' under August.",
    AUTO_SHUTOFF_TIME: "Auto Shutoff Time",
    AVAILABLE_DEVICES: "Available Devices",
    AVAILABLE_ROOMS: "Available Rooms",
    AWAY: "Away",
    AWAY_SETTINGS_INSTRUCTIONS: "If you would like to run an activity when you go Away, select it below or leave it blank to do nothing.",
    AWAY_SETTINGS_TITLE: "Away Settings",
    BEFORE: "before",
    BLINK: "Blink",
    BOTTOM_RIGHT: "Bottom right",
    BREAKERS: "Breakers",
    BRIGHTNESS: "Brightness",
    BULB_OPTIONS: "bulb options",
    BULB_TYPE: "Bulb Type",
    CAMERA_CONFIG_INFO: "Select which of your My Leviton devices you would like to turn on or blink when your Nest Cam detects motion.",
    CANCEL: "Cancel",
    CANNOT_CONNECT: "Cannot Connect",
    CANNOT_CONNECT_WIFI_DEVICE: "Cannot connect to {{deviceName}}.",
    CANNOT_CREATE_RESIDENCE: "Could not create a residence. Please start over the process.",
    CANNOT_CREATE_ROOM_MESSAGE: "We ran into problem while creating a room. Please try again with a different name.",
    CANNOT_CREATE_ROOM_TITLE: "Cannot create Room",
    CANNOT_CREATE_SCHEDULE_MESSAGE: "Unable to create a schedule at this point. Please try again.",
    CANNOT_CREATE_SCHEDULE_TITLE: "Cannot create schedule",
    CANNOT_DELETE_RESIDENCE: "Cannot delete this residence.",
    CANNOT_DELETE_RESIDENCE_MESSAGE: "You must have at least one residence associated with your account. If you wish to delete this residence, please create another one first.",
    CANNOT_DELETE_RESIDENCE_TITLE: "Can't delete this residence",
    CANNOT_DETECT_WIFI: "Cannot detect Wi-Fi Network. Please make sure that your Wi-Fi is enabled.",
    CANNOT_DETERMINE_SSID: "Cannot determine SSID of your network. {{error}}",
    CANNOT_GET_LOCATION_MESSAGE: "We were unable to get the address of your residence. Try geolocation again or enter the address for your residence.",
    CANNOT_GET_LOCATION_TITLE: "Cannot get Location",
    CANNOT_RESET_PASSWORD: "Cannot Reset Password",
    CANNOT_REVOKE_PERMISSION: "Cannot revoke permission.",
    CANNOT_UPDATE_ATM: "Cannot update firmware at this moment.",
    CANNOT_UPDATE_FIRMWARE: "Cannot Update Firmware",
    CANT_COMPLETE_ACTION: "Can't Complete Action",
    CAPTURE_CURRENT_SETTINGS: "Capture Current Settings",
    CFL: "CFL",
    CHANGE_WIFI_NETWORK: "Change Wi-Fi Network",
    CHANGE_WIFI_NETWORK_WARNING: "To change networks we need to disconnect the LDATA Hub from it’s current network.<br>Are you sure you want to continue?",
    LOADCENTER_SETUP_STEP1_TEXT_CHANGE_WIFI_AP: "The hub is no longer connected to a network.",
    CHECK_YOUR_EMAIL: "Please Check Your Email",
    CHOOSE_A_RESIDENCE: "Choose a Residence",
    CHOOSE_COMMAND_TYPE: "Choose a <br> Command Type",
    CITY: "City",
    CLOUD_IS_DOWN: "<p>The cloud doesn't seem to be responding, please try again later.  If the problem persists, please contact Leviton support.</p>",
    COLLAPSE: "Collapse",
    COME_HOME: "When I Come Home",
    COMMAND: "Command",
    COMMENT_NEW_CHANGE_STARTS: "---------------",
    COMPANY_NAME: "Company Name",
    COMPLETE: "Complete",
    COMPLETE_ACTIVITY: "Complete Activity",
    CONFIGURATION: "Configuration",
    CONFIGURE: "Configure",
    CONFIGURE_ACTIVITY: "Configure Activity",
    CONFIGURE_NOW: " Configure Now",
    CONFIRM: "Confirm",
    CONNECTED_TO: "Connected to",
    CONNECTING: "Connecting",
    CONNECTING_TO: "Connecting to {{deviceName}}",
    CONNECTING_TO_DEVICE: "Connecting to your Leviton Device",
    CONNECTION: "Connection",
    CONNECTION_LOST_INFO: "Connecting lost with your Switch.",
    CONNECTION_LOST_TITLE: "Connection Lost",
    CONNECTIONS: "Connections",
    CONTACT_HOURS: "Contact us M-F 8-7 ET",
    CONTACT_MAIL_LABEL: "sasupport@leviton.com",
    CONTACT_MAIL_VALUE: "sasupport@leviton.com",
    CONTACT_PHONE_LABEL: "1-800-824-3005",
    CONTACT_PHONE_VALUE: "18002297256",
    CONTACT_SUPPORT: "If this message continues to appear, please contact Leviton support.",
    CONTACT_US_FOR_HELP: "Need more help? Contact us",
    CONTINUE: "Continue",
    CONTINUE_DEVICE_SETUP: "Continue Setting Up Device",
    CONTINUE_SETTING_DEVICE: "Continue Setting Up Device",
    CONTROLS: "Controls",
    COUNTRY: "Country",
    CREATE_A_NEW_ACTIVITY: "Create a New Activity",
    CREATE_A_RESIDENCE: "Create a Residence",
    CREATE_AN_ACTIVITY: "Create an Activity",
    CREATED_ITEM: "Created {{item}}.",
    DEAUTHORIZE: "Deauthorize",
    DELETE: "Delete",
    DELETE_ACCOUNT: "Delete Account",
    DELETE_ACCOUNT_ERROR: "Error deleting account please try again later",
    DELETE_ACCOUNT_SUCCESS: "Account Successfully Deleted",
    DELETE_ACTIVITY: "Delete Activity",
    DELETE_ACTIVITY_WARNING: "You are about to delete this activity. Are you sure you want to continue?",
    DELETE_BREAKER: "Delete Breaker",
    DELETE_BREAKER_PANEL: "Delete Breaker Panel",
    DELETE_BREAKER_PANEL_WARNING: "You are about to delete this breaker panel. Are you sure you want to continue?",
    DELETE_BREAKER_WARNING: "You are about to delete this breaker. Are you sure you want to continue?",
    DELETE_DEVICE: "Delete Device",
    DELETE_DEVICE_PROMPT: "Are you sure you want to delete <strong>{{deviceName}}</strong> ?",
    DELETE_DEVICE_WARNING: "Are you sure you want to delete this device?",
    DELETE_GUEST_ACCOUNT_WARNING: "Are you sure you want to delete your My Leviton account?",
    DELETE_ITEM: "Delete {{name}} ?",
    DELETE_OWNER_ACCOUNT_WARNING: "Deleting your account will permanently delete all of your My Leviton data. This includes:<br><br><li>Residences</li><li>Schedules</li><li>Activities</li><li>Devices</li><li>Integrations</li><li>Load Center</li>",
    DELETE_RESIDENCE_WARNING: "Deleting this residence will remove the name, address, and all associations including devices. This cannot be undone.",
    DELETE_ROOM: "Delete Room",
    DELETE_ROOM_WARNING: "You are about to delete this room. This will not delete the associated devices. Are you sure you want to continue?",
    DELETE_SCENE: "Delete Scene",
    DELETE_SCENE_WARNING: "You are about to delete this scene. Are you sure you want to continue?",
    DELETE_SCHEDULE: "Delete Schedule",
    DELETE_SCHEDULE_WARNING: "You are about to delete this schedule. Are you sure you want to continue?",
    DELETE_THIS_RESIDENCE: "Delete this Residence",
    DELETE_USER: "Delete User ?",
    DELETE_USER_WARNING: "Deleting this user from your Residence will revoke their ability to access its Devices, Rooms, Schedules, and Activities. Are you sure you want to continue?",
    DELIVER_NOTIFICATION_FOR: "Deliver Notifications for",
    DELIVER_NOTIFICATION_VIA: "Deliver Notifications via",
    DEVICE: "Device",
    DEVICE_ALREADY_BELONGS: "This device is already enrolled to another residence.",
    DEVICE_CANNOT_BE_SAVED: "Device cannot be saved",
    DEVICE_CONNECTED_INFO: "Your <strong> {{deviceName}}</strong> is now connected to the My Leviton Cloud. <br>",
    DEVICE_DISCONNECTED: "Device Disconnected",
    DEVICE_IDENTIFY_INSTRUCT: "Tap the <strong>Identify Device</strong> button below to have the device flash its green LED for several seconds.",
    DEVICE_NO_LOCAL_IP: "The device did not get local IP address",
    DEVICE_OFFLINE: "Device Offline",
    DEVICE_OFFLINE_INFO: "You device seems to be offline. Please make sure you have internet access.",
    DEVICE_OPTIONS: "device options",
    DEVICE_READY_TO_USE: "Your Device is now ready to be used.",
    DEVICE_RENAME_INFO: "You can name your device by entering your desired name in the box below ( E.g. Porch light, Den light, etc ).",
    DEVICE_SEEMS_OFFLINE: "Your Leviton device seems to be offline.",
    DEVICE_SETTINGS: "Device Settings",
    DEVICE_SETUP: "Device Setup",
    DEVICE_SETUP_AND_CONFIG: "Device Setup and Configuration",
    DEVICE_SETUP_COMPLETE_INFO: "Your Device Setup <br> is Now Complete!",
    DEVICE_SETUP_INSTRUCTIONS: {
      a: "First, we need to get your Leviton device connected to your Wi-Fi network.",
      b: "If the LED on your device is quickly flashing green, your device is already in enrollment mode. Just press continue to proceed.",
      c: "If your device's LED is not flashing green, please ",
      d: "follow the factory reset procedure",
      e: "and then press continue."
    },
    DEVICE_SETUP_INSTRUCTIONS_ANDROID: 'Android users: after pressing "Continue", you will need to allow the location permission in order to progress forward.',
    DEVICES: "Devices",
    DIM_LED_BEHAVIOUR: "Dim Bar LED Behavior",
    DISABLE_SCHEDULE_MESSAGE: "The selected Schedule will not run. If you choose to run this Schedule later simply tap ‘Enable’. <br> If you wish to completely delete the Schedule, go into the schedule details and tap ‘Remove Schedule",
    DISABLE_SCHEDULE_TITLE: "You are Disabling this Schedule",
    DISCARD: "Discard",
    DISCOVER_BREAKERS: "Discover Breakers",
    DISCOVER_BREAKERS_MESSAGE: "At this point, your breakers should be seated and the Load Center should be powered on. In the next step, we will add, name, and assign your breakers.",
    DISCOVERING: "Discovering",
    DONE: "DONE",
    DONT_ASK_AGAIN: "Do not ask me again",
    DONT_HAVE_ACTIVITIES: "You don't have any Activities yet.",
    DONT_HAVE_ML_DEVICES: "You don't have any My Leviton devices to configure. Please add a device and try again.",
    DONT_OWN_RESIDENCE: "Looks like you don't have a residence yet. Please create a residence and try inviting a user now.",
    DONT_SEE_DEVICE: "Don't see your device? Make sure you update your devices to the latest firmware.",
    DUPLICATE_SERIAL_NUMBER: "The serial number of your device <strong>{{deviceName}} </strong> has already been registered. <br> If this is your device and you are attempting to install it again, please remove it from you account. <br> If this message still appears, please contact support.",
    EDIT_ACTIVITY_NAME: "Edit Activity Name",
    EDIT_DEVICE_NAME: "Edit Device Name",
    EDIT_NAME: "Edit Name",
    EDIT_RESIDENCE: "Edit Residence",
    EDIT_RESIDENCES: "Edit Residences",
    EDIT_ROOM_NAME: "Edit Room Name",
    EDIT_SCENE_NAME: "Edit Scene Name",
    EDIT_SCHEDULE_NAME: "Edit Schedule Name",
    EDIT_USER: "Edit User",
    EMAIL: "Email",
    EMAIL_ADDRESS: "Email Address",
    EMAIL_ALREADY_EXISTS_INFO: "This email you provided is already registered!",
    EMAIL_ALREADY_EXISTS_TITLE: "Email Already Exists",
    EMAIL_NOT_VERIFIED: {
      MESSAGE: "Please check your email and verify your account.",
      TITLE: "Email Not Verified"
    },
    EMAIL_REQUIRED: "Please enter a valid email address.",
    EMAIL_REQUIRED_FOR_RESETTING: "Email is required for resetting your password.",
    EMAIL_SUPPORT_AT: "or Email Support at",
    ENABLE_LOCATION_PROMPT: "Enable My Leviton's location services? ",
    ENABLE_LOCATION_PROMPT_MESSAGE: "The Scheduling feature of My Leviton app requires your residence's location.<br><br>With your permission, My Leviton can determine your location automatically. You may also choose to enter the full address for the residence.",
    ENTER_BREAKER_NAME: "Enter Breaker Name",
    ENTER_LOAD_CENTER_INFO: "Enter Load Center Info",
    ENTER_NETWORK_PASSWORD: "Enter Network Password",
    ENTER_NETWORK_PASSWORD_INSTRUCTION: "Verify that you have the correct Wi-Fi network password, then enter it below.",
    ENTER_NETWORK_PASSWORD_REQUEST: "Please enter a password for your network.",
    ENTER_RESIDENCE_NAME: "To begin, enter a name for your home or use the default name and click continue.",
    ENTER_THE_ADDRESS: "ENTER THE ADDRESS",
    ENTER_VALID_EMAIL: "Please enter a valid email address.",
    ERROR: "Error",
    ERROR_CANNOT_CONNECT_TO_SWITCH: "Cannot connect to the Switch. Please make sure your phone is the only one device connected to it.",
    ERROR_DURING_ENROLLMENT: "Error occurred during enrollment process. Please start over.",
    ERROR_ON_SUBSCRIPTION: "Error while subscribing",
    EXPAND: "Expand",
    FACTORY_RESET_BREAKERS: "Factory Reset Breakers",
    FACTORY_RESET_BREAKERS_PROCESSING: "Please wait while the breakers are being reset...",
    FACTORY_RESET_BREAKERS_WARNING: "To factory reset a breaker or multiple breakers you must set the switch on the breakers to the OFF position. <br><br>Next, select 'Continue' below and turn the breakers ON. The reset procedure will begin.",
    FACTORY_RESET_PROCEDURE: {
      a: "If the device you are resetting is a Decora In-Wall device, press and hold the top of the paddle for approximately 14 seconds until the LED flashes orange and red.",
      b: "If your device is a plugin module, press and hold the button for approximately 14 seconds until the LED flashes orange and red."
    },
    FACTORY_RESET_PROCEDURE_TITLE: "Factory Reset Procedure",
    FADE_OFF_RATE: "Fade Off Rate",
    FADE_ON_RATE: "Fade On Rate",
    FAILED_TO_COMMUNICATE: "Failed to Communicate",
    FEEDBACK: "Feedback",
    FEEDBACK_SENT_MESSAGE: "Your feedback has been sent successfully.",
    FIND_YOUR_DEVICE: "Find Your Device",
    FIND_YOUR_DEVICE_AFTER_INSTRUCTION: "Once you have connected to your device, return to this app and continue the setup process.",
    FIND_YOUR_DEVICE_ANDROID_INSTRUCTION: "After connecting to Wi-Fi, Android may warn you that no internet is found, please ignore the message and reopen the My Leviton app and continue the setup process.",
    FIND_YOUR_DEVICE_IOS_INSTRUCTION: "Next you will connect to your new Leviton Device over Wi-Fi to continue the setup process. When you are ready, navigate to your phone's Wi-Fi settings. With Wi-Fi enabled, select <strong>Leviton-XXXX</strong> from the list of available Wi-Fi networks.",
    FINISH: "Finish",
    FIRMWARE: "Firmware",
    FIRMWARE_COMMUNICATION_INTERRUPT: "We could not successfully finish updating your Leviton device. <br> Please try again, and if this problem continues, contact technical support at <a class='text-hyper' href='mailto:sasupport@leviton.com'>sasupport@leviton.com</a>",
    FIRMWARE_UPDATE: "Firmware Update",
    FIRMWARE_UPDATE_AVAILABLE_MESSAGE: "A firmware update is available. <br> Make sure that this device is on the same Wi-Fi network as <strong>{{deviceName}}</strong> and continue.",
    FIRMWARE_UPDATE_CANCEL_INFO: "Firmware update was cancelled.",
    FIRMWARE_UPDATE_CANNOT_COMMUNICATE_AFTER_UPDATE: "Your device firmware was updated. However, we could not communicate to your switch.",
    FIRMWARE_UPDATE_DEVICE_UNREACHABLE: "We could not establish a connection to your device. Please ensure that the Leviton device is on the same network as your mobile device and try again.",
    FIRMWARE_UPDATE_FAIL_MESSAGE: "Failed to update the switch firmware.",
    FIRMWARE_UPDATE_SUCCESS_INFO: "Successfully updated your device's firmware.",
    FIRMWARE_UPDATE_TIME_WARNING: "This process could take several minutes, are you sure you would like to update now?",
    FIRMWARE_UPDATING: "Updating",
    FIRSTNAME: "First Name",
    FLIP_LOAD_CENTER: "Flip Load Center",
    FORGOT_PASSWORD: "Forgot Password",
    FRIDAY: "Friday",
    FW_UPDATE_REQD_MESSAGE: "This device will require firmware update in order to enable randomization mode. Would you like to update it now ?",
    FW_UPDATE_REQD_TITLE: "Firmware Update Required",
    GENERAL: "General",
    GENERIC_ERROR: "Something went wrong.",
    GET_MY_LOCATION: "Get My Location",
    GIVE_ROOM_NAME: "Give the Room a Name",
    GO_AWAY: "When I Go Away",
    HERE: "here",
    HOME: "Home",
    HOME_AWAY_DESCRIPTION: "The <strong>Home/Away</strong> Settings allow you to run different activities based on your status. Use this feature to turn on your lights when you get home. <br> <br> Additionally, the <strong>Away</strong> status gives you the option to <strong>Randomize</strong> the state of your lights to give appearance of being home when you are away.",
    HOME_AWAY_SETTINGS: "Home/Away Settings",
    HOME_SETTINGS: "Home Settings",
    HOME_SETTINGS_INSTRUCTIONS: "If you would like to run an activity when you come Home, select it below or leave it blank to do nothing.",
    I_AGREE: "I Agree",
    IDENTIFY_DEVICE: "Identify Device",
    IF_EMAIL_NOT_RECEIVED: "If you don't receive the email, check all spam and junk folders in your mailbox. If you don't see it there, tap 'Resend' below and check your email again.",
    IF_NO_WIFI_NETWORK: "If you do not see your Wi-Fi network in the list, try to",
    INCANDESCENT: "Incandescent",
    INTEGRATE: "Integrate",
    INVALID: "invalid",
    INVALID_NAME: "Invalid Name",
    INVALID_RESIDENCE_MESSAGE: "The residence information you provided is invalid. Please try again.",
    INVALID_RESIDENCE_TITLE: "Invalid Residence",
    INVALID_ROOM: "Invalid Room",
    INVITATION_ALREADY_INVITED: "You have already invited this email address.",
    INVITATION_NO_PERMISSION: "You don't have permission to invite another user for this residence.",
    INVITATION_SENT_MESSAGE: "You have invited {{email}}.",
    INVITATION_SENT_TITLE: "Invitation Sent",
    INVITATION_UNABLE_TO_INVITE: "Unable to Invite",
    INVITE: "Invite",
    INVITE_A_USER: "Invite a User",
    INVITE_USER_EXPLANATION: "Invite people to control accessories in your home. All people in a shared home can see accessory updates and control accessories. <br><br> Enter the email below. If the invitation is accepted, you will see the name listed along with other users.",
    INVITE_USER_NOW: "Invite Users Now",
    INVITE_USERS_INSTRUCTIONS: "Invite users to give access to your residence.",
    IS: "is",
    ITEM_ALREADY_EXISTS: "A device, scene, or activity with same name already exists.",
    JOINING_WIFI_NETWORK: "Configuring your <br> Leviton device",
    LASTNAME: "Last Name",
    LED: "LED",
    LED_BAR_ALWAYS_OFF: "LED bar always off",
    LED_BAR_ALWAYS_ON: "LED bar always on",
    LED_OFF: "LED off",
    LED_STAYS_ON_FOR_SECOND: "LED bar stays on for {{second}} second after change",
    LED_STAYS_ON_FOR_SECONDS: "LED bar stays on for {{seconds}} seconds after change",
    LEVITON_VALUES_FEEDBACK: "Leviton Values Your Feedback",
    LOAD_CENTER_REPLACE: "Replace LDATA Hub",
    LOAD_CENTER_SETUP: "Load Center Setup",
    LOAD_CENTER_UTILITY: "Load Center Utility",
    LOADCENTER_PRINT_VALIDATION_MESSAGE: "Please enter name and number of slots for the Load Center.",
    LOADCENTER_PRINT_VALIDATION_TITLE: "Missing fields",
    LOADCENTER_SETUP_STEP1_TEXT_1: "You will need to use your device's Wi-Fi setup to connect to your Load Center. With Wi-Fi enabled, navigate to your phone's Wi-Fi settings and select LDATA-XXXX from the list of available networks.",
    LOADCENTER_SETUP_STEP1_TEXT_2: "Once you have connected to your device, open this app again to continue the setup process.",
    LOADCENTER_SETUP_STEP1_TEXT_CHANGE_WIFI: "To change the Wi-Fi network you must first restart the LDATA Hub.  Locate the breaker that powers it, turn it OFF and then ON.  The hub will be in enrollment mode for ten minutes.",
    LOCATION_BASED_FEATURES: "Location-Based Features",
    LOCATION_DETECTED: "Location Detected",
    LOCATION_MORE_INFO: "With your permission, this app can determine your location automatically. You may also choose to enter the full address for the residence, or skip this step altogether. If you skip this step, Schedules will not work until you enter an address for this residence.",
    LOCATION_SERVICE_DISABLED_ERROR: "Location service is disabled on your mobile device. Please enable it and try again later.",
    LOCATION_UNABLE_TO_DETECT: "Unable to get the geolocation information using your device. Please make sure Location Service is enabled.",
    LOCATOR_MODE: "Locator Mode",
    LOGIN_ERROR_TITLE: "Login Error",
    LOGOUT: "Logout",
    MAKE_SURE_MOBILE_HAS_INTERNET: "Please make sure your mobile device is connected to the internet to complete setup.",
    MANUALLY_CONFIG_DEVICES: "manually configured devices",
    MANUFACTURER: "Manufacturer",
    MARK_10: "Mark  10",
    MAX_LEVEL: "maximum level",
    MESSAGE: "Message",
    MIN_LEN_ERROR_MESSAGE: "The name must be at least 2 characters long.",
    MIN_LEVEL: "minimum level",
    MINUTE_SHORT: "min",
    MOBILE_DEVICE_SEEMS_OFFLINE: "<p>Sorry, we are having problems connecting to the cloud. Please check your internet connection and try again.</p>",
    MODEL: "Model",
    MONDAY: "Monday",
    MONTHLY_USAGE: "Monthly Usage",
    MUST_HAVE_SCENE: "You must add a scene to continue.",
    MUST_SELECT_DEVICE: "You must select a device to continue.",
    MUST_SELECT_ROOM: "You must select a room to continue.",
    MY_ACTIVITY: "My Activity",
    NAME_ACTIVITY_DESCRIPTION: 'Give your Activity a name that describes it\'s primary function, i.e. "Goodnight" or "All Lights Off". You can change this later.',
    NAME_MUST_BE_X_CHAR_LONG: "Name must be at least {{x}} character long.",
    NAME_SCENE_DESCRIPTION: "Give your Scene a name that you can remember. You can change this later.",
    NAME_YOUR_ACTIVITY: "Please Name Your Activity",
    NAME_YOUR_ACTIVITY_DESC: "You must give your activity a name to continue.",
    NAME_YOUR_DEVICE: "Name Your Device",
    NAME_YOUR_SCENE_MESSAGE: "You must give your scene a name to continue.",
    NAME_YOUR_SCENE_TITLE: "Please Name Your Scene",
    NAMING_CONFLICT_MESSAGE: "This name is already being used by a device, activity, room or scene. Please choose a unique name. Remember, names can only contain letters, numbers and the '@' and '#' symbols.",
    NAMING_CONFLICT_TITLE: "Naming Conflict",
    NEED_MORE_HELP: "Need help?",
    NEST_CAM: "Nest Cam",
    NEST_CAM_CONFIGURATION: "Nest Cam Configuration",
    NEST_CONN_CARD_INFO: "With Nest and My Leviton you can automate your residence's Home and Away settings, turn On/Off lights in the event of a fire, and automate lights when your Nest Cams detect motion.",
    NEST_DEAUTH_MESSAGE: "Are you sure you would like to de-authorize nest?",
    NEST_DEAUTH_TITLE: "De-authorization",
    NEST_HOME_AWAY_INSTRUCTIONS: "My Leviton can use Nest to automatically update your Home/Away status. This will allow you to turn lights On/Off when Nest detects you are Home/Away.",
    NEST_INTEGRATION_COMPLETE: "Your Nest Connection Setup is Complete.",
    NEST_INTEGRATION_COMPLETE_INFO: "Changing your configuration settings in the future is easy. Simply return to the Connections page, which can be found on the side menu, and tap 'Reconfigure' under Nest.",
    NEST_PROTECT: "Nest Protect",
    NEST_PROTECT_CONFIGURATION: "Nest Protect Configuration",
    NEW_SCENE: "New Scene",
    NEW_SCHEDULE: "New Schedule",
    NEXT: "Next",
    NO_ACTIVITIES: "No Activities",
    NO_ACTIVITY_CARD: "<p> You don’t have any Activities yet. </p> <p> An activity makes it easy to group commonly used commands together to be run at the same time. <p> For instance, making an activity to turn all lights On or Off. </p> <p> Press ‘Add an Activity’ below to get started creating a new activity. </p>",
    NO_ASSIGNED_DEVICES_FOR_ASSIGN: "You don't have any unassigned devices. To assign a device to this room, you must first unassign it from its current room.",
    NO_ASSIGNED_DEVICES_FOR_SCENE: "You don't have any assigned devices. To create a scene, you must have atleast one device assigned to this room. <br> Would you like to assign a device?",
    NO_ASSIGNED_DEVICES_TITLE: "No Assigned Devices",
    NO_AVAILABLE_DEVICES: "No Available Devices",
    NO_AVAILABLE_ROOMS: "No Available Rooms",
    NO_DEVICE: "No Device",
    NO_DEVICE_CARD: "<p>You haven't added any Leviton devices to this account.</p> <p>Add a Leviton device including load control modules, light switches, and dimmers.</p> <p> Once you have added devices, you can group and control them with Scheduling, Activities, and Rooms.</p> <p> Press ‘Add a Device’ below to get started now. </p>",
    NO_DEVICE_FOR_SCENE_MESSAGE: "Please select at least one device <br> for creating a scene.",
    NO_INTERNET_CONNECTION_MESSAGE: "Please connect to the internet to add an item.",
    NO_INTERNET_CONNECTION_TITLE: "No Internet Connection",
    NO_LOGIN_PERMISSION: "Cannot login. No proper permission.",
    NO_PDF_READER_MESSAGE: "There is no PDF reader in your mobile device. Please install one and try again.",
    NO_PDF_READER_TITLE: "No PDF Reader",
    NO_ROOM: "No Room",
    NO_SCENE: "No Scene",
    NO_SCHEDULE_CARD: "<p> You don’t have any Schedules yet. </p><p> A schedule makes it easy to automate Devices.<p>For instance, you can create a Schedule to Turn Lights On or Off every weekday at 20 minutes before sunrise.</p><p>Press ‘Add a Schedule’ below to get started with this powerful feature.</p>",
    NOT_CONNECTED: "Not Connected",
    NOTIFICATIONS: "Notifications",
    NUM_OF_POSITIONS: "Number of Positions",
    OCCUPANCY_MODE: "This occupancy mode is set to",
    OF_MY_LEVITON: " of My Leviton",
    OK: "Ok",
    PANEL_NAME: "Panel Name",
    PASSWORD: "Password",
    PASSWORD_CRITERIA_INFO: "Password must have 8 or more characters, upper & lowercase letters, at least 1 number & 1 special character, & can't repeat 3 or more characters in a row.",
    PASSWORD_RESET_ERROR: "We were not able to find an account associated with that email address. Please check that your email address is correct and try again.",
    PASSWORD_RESET_REQUIRED: "Password Reset Required",
    PASSWORD_RETYPE: "Retype Password",
    PERMISSION_ERROR: "Permission Error",
    PHONE_NUMBER: "Phone Number",
    PLEASE_WAIT: "Please Wait",
    PREP_DEVICE_INSTRUCTIONS: {
      a: "Follow the included installation instructions to install your new Leviton product.",
      b: "If your Wi-Fi network has encryption enabled, verify that it is using WPA/WPA2.",
      c: "Internet access is required to complete setup and to allow for remote access."
    },
    PREP_DEVICE_SETUP: "Preparing for <br> Device Setup",
    PRESET_LEVEL: "preset level",
    PRESET_OPTIONS: "preset options",
    PRIVACY_POLICY: "Privacy Policy",
    PROTECT_CONFIG_INFO: "Select which of your My Leviton devices you would like to turn on or blink when Nest Protect detects a smoke alarm warning or emergency.",
    RANDOMIZE_FEATURE_INFO: "The randomize feature can automatically turn lights on and off between sunset and 11PM when you are away.",
    RANDOMIZE_LIGHTS: "Randomize my lights when it becomes dark outside",
    RANDOMIZE_WHEN_DARK: "Randomize my lights when it becomes dark outside.",
    RECONFIGURE: "Reconfigure",
    RECONFIGURE_WIRELESS: "Reconfigure Wireless",
    RECONNECT: "Reconnect",
    REGISTRATION_SUCCESS_INFO: "Please check your email. We have sent you a message to verify your account.",
    REGISTRATION_SUCCESS_TITLE: "Thanks for Registering!",
    REMEMBER_ME: "Remember Email",
    REMEMBER_NETWORK_PASSWORD: "Remember my Wi-Fi password while I'm enrolling devices.",
    REMOVE: "Remove",
    REMOVE_ACTIVITY: "Remove Activity",
    REMOVE_DEVICE: "Remove Device",
    REMOVE_ROOM: "Remove Room",
    REMOVE_SCENE: "Remove Scene",
    REMOVE_SCHEDULE: "Remove Schedule",
    REMOVE_THIS_DEVICE: "Remove this Device",
    REMOVE_THIS_RESIDENCE: "Remove this Residence",
    REMOVE_USER: "Remove User",
    REPEAT: "Repeat",
    REPORT_A_PROBLEM_DESCRIPTION: "Please describe the problem that you are experiencing.",
    REPORT_A_PROBLEM_TITLE: "Report a Problem",
    REPORT_SENT_MESSAGE: "Your problem has been reported successfully.",
    REQUEST_DEVICE_TYPE: "Which device type are you adding?",
    RESCAN: "rescan",
    RESEND: "Resend",
    RESEND_CONFIRMATION: "Resend Confirmation",
    RESEND_INVITATION: "Resend Invitation",
    RESET: "Reset",
    RESET_BREAKERS: "Reset Breakers",
    RESET_BREAKERS_COMPLETED: "Reset Breakers Completed",
    RESET_PASSWORD: "Reset Password",
    RESET_PASSWORD_CHECK_EMAIL: "Please check your email and follow the instructions.",
    RESIDENCE_DELETE_PERMISSION_ERROR: "You don't have owner permission to make changes to this residence.",
    RESIDENCE_NAME: "Residence Name",
    RESIDENCE_SETTINGS: "Residence Settings",
    RESIDENCE_SETUP_COMPLETE: "Your Residence Setup <br> is Now Complete!",
    RESIDENCE_UPDATED_INFO: "Your residence has been updated.",
    RESIDENCES: "Residences",
    RETURN_TO_PREV_VAL: "Return to Previous Value",
    REVOKE_ACCESS: "Revoke Access",
    ROOM: "Room",
    ROOM_DEVICE_REMOVE_PROMPT: "Are you sure you want to remove this device from current room?",
    ROOM_NO_UNASSIGNED_DEVICE: "You don't have any unassigned devices. <br> To assign a device to this room, you must first unassign it from its current room.",
    ROOM_SCENE_REMOVE_PROMPT: "Are you sure you want to remove this scene from current room?",
    ROOM_SETUP_AND_CONFIG: "Room Setup and Configuration",
    ROOM_UPDATED_INFO: "Room info has been updated.",
    RUN: "Run",
    RUN_ACTIVITY: "Run the Activity Named",
    RUN_AT_SUNRISE: "Run at Sunrise",
    RUN_AT_SUNSET: "Run at Sunset",
    SATURDAY: "Saturday",
    SAVE: "Save",
    SAVE_COMPLETE: "Save and Complete",
    SAVED: "Saved",
    SCENE_CREATE_SUCCESS: "Successfully create a Scene.",
    SCENE_NAME: "Scene Name",
    SCENE_RUN_PROMPT: "Are you sure you would like to run this activity?",
    SCENES: "Scenes",
    SCHEDULE_NAME: "Schedule Name",
    SCHEDULE_TIME: "Schedule Time",
    SCHEDULES: "Schedules",
    SCHEDULING_REQUIRES_LOCATION: "The Scheduling feature of this app requires your residence’s location.",
    SECOND: "second",
    SECONDS: "seconds",
    SELECT_A_DEVICE: "Select a device",
    SELECT_A_DEVICE_MESSAGE: "Please select at least one device to continue.",
    SELECT_A_ROOM: "Select a room",
    SELECT_A_TIME: "Select a Time",
    SELECT_INVITING_RESIDENCES: "Select residences for user to be invited to.",
    SELECT_LIGHTS_FOR_RANDOMIZE: "Select the lights below you would like to include.",
    SELECT_NEST_CAM: "Select which Nest Cam(s) you would like to enable for use with My Leviton.",
    SELECT_NEST_PROTECT: "Select which Nest Protect(s) you would like to enable for use with My Leviton.",
    SELECT_NETWORK_REQUEST: "Please select a Wi-Fi network you want your Switch to enroll to before continuing.",
    SELECT_OPTION_BELOW: "Select an option below to continue.",
    SELECT_ROOM_FOR_DEVICE: "Select a room from the list. <br> If you don't have any rooms setup, you can add a new room to assign the device to.",
    SELECT_STATE_FOR: "Great, now let's select the state for",
    SELECT_TIME: "Select Time",
    SELECT_WIFI_BELOW: "Select your home Wi-Fi network from the list below.",
    SELECT_WIFI_NETWORK: "Select a Network",
    SELECTED_WIFI_DEVICE: "Selected Wi-Fi Device",
    SEND: "Send",
    SEND_FEEDBACK: "Send Feedback",
    SERIAL: "Serial",
    SET_TIME: "Set Time",
    SETTING: "Setting",
    SETTING_UP_DEVICE_WIRELESS: "Setting your Device Wireless",
    SETTINGS: "Settings",
    SETUP_A_RESIDENCE_MESSAGE: "You must have at least one residence associated with your account. To begin, enter a name for your home or use the default name and click continue. If you wish to log in with a different account tap ‘Logout’ below.",
    SETUP_A_RESIDENCE_TITLE: "Setup a Residence",
    SETUP_A_SCENE: "Setup a Scene",
    SETUP_AN_ACTIVITY: "Setup an Activity",
    SETUP_YOUR_RESIDENCE: "Setup Your Residence",
    SIGN_IN: "Sign In",
    SIGN_OUT: "Sign Out",
    SIGN_UP: "Sign Up",
    SIGN_UP_FOR_ACCOUNT: "Sign Up for an Account",
    SIGNAL_STRENGTH: "Signal Strength",
    SKIP_FOR_NOW: "Skip this step for now",
    STANDARD_ONE_POLE: "Standard 1-Pole",
    STANDARD_TWO_POLE: "Standard 2-Pole",
    STATE: "State",
    STATUS: "Status",
    STATUS_LED_ALWAYS_OFF: "Status LED is always off",
    STATUS_LED_BEHAVIOUR: "Status LED Behavior",
    STATUS_LED_OFF_WHEN_LOAD_OFF: "Status LED is On when the load is Off (default)",
    STATUS_LED_ON_WHEN_LOAD_ON: "Status LED is On when the load is On",
    STATUS_MODE: "Status Mode",
    STEP_1_3: "Step 1 of 3",
    STEP_1_7: "Step 1 of 7",
    STEP_2_3: "Step 2 of 3",
    STEP_2_7: "Step 2 of 7",
    STEP_3_3: "Step 3 of 3",
    STEP_3_7: "Step 3 of 7",
    STEP_4_7: "Step 4 of 7",
    STEP_5_7: "Step 5 of 7",
    STEP_6_7: "Step 6 of 7",
    STEP_7_7: "Step 7 of 7",
    SUCCESS: "Success",
    SUNDAY: "Sunday",
    SUNRISE: "Sunrise",
    SUNSET: "Sunset",
    SUPPORT: "Support",
    SUPPORT_ALLOW_CONTACT_DESCRIPTION: "Allow Leviton to contact me for additional details if required.",
    SUPPORT_DESCRIBE_ISSUES: "Please describe any issues or suggestions you have.",
    SUPPORT_LEVITON_CULTURE: "At Leviton, we take our customers' opinions seriously and have since 1906.",
    SWITCH_SAME_NETWORK_INFO: "Please make sure it is powered on and connected to the same Wi-Fi network as your mobile device.",
    TAKE_A_TOUR: "Take a Tour",
    TERMS_AND_CONDITION: "By signing up, I agree to the Terms of Use and Privacy Policy of My Leviton.",
    TERMS_OF_USE: "Terms of Use",
    THANKS: "Thanks!",
    THANKS_FOR_REGISTERING: "Thanks for Registering",
    THURSDAY: "Thursday",
    TOO_MANY_LOGIN_ATTEMPTS: "Too many attempts to login have been made for this account. Please check your email and follow the password reset instructions.",
    TOP_LEFT: "Top left",
    TRIP_BREAKER: "Trip Breaker",
    TRIP_BREAKER_MESSAGE: "To resume normal operation after a breaker trips, you must reset it at the Load Center. Do you want to trip this breaker?",
    TROUBLESHOOT_INFO: "If you feel comfortable doing so, try steps 1-5. Otherwise, contact your ISP.",
    TROUBLESHOOT_NETWORK: "Troubleshooting <br> Your Network",
    TROUBLESHOOT_STEPS: {
      A: "Power Cycle Everything",
      B: "Check Other Devices",
      C: "Check Physical Connections",
      D: "Check for a Valid IP Address",
      E: "Try a Ping and Trace Its Route"
    },
    TRY_AGAIN: "Try Again",
    TRY_IT: "Try It",
    TUESDAY: "Tuesday",
    TURN_ON: "Turn on",
    UNABLE_TO_DOWNLOAD_FIRMWARE: "Unable to download the latest firmware from the server at this moment.",
    UNABLE_TO_ENROLL: {
      DESCRIPTION: "Your Leviton device was unable to enroll. <br> Please ensure that the correct Wi-Fi network and password are entered."
    },
    UNABLE_TO_LOGIN: "Unable to login. Please check your email and password and try again.",
    UNASSIGN: "Unassign",
    UNASSIGNED_DEVICES: "Unassigned Devices",
    UNSAVED: "Unsaved",
    UNSAVED_CHANGES: "Unsaved Changes",
    UNSAVED_CHANGES_MESSAGE: "Would you like to discard your unsaved changes?",
    UNSAVED_DEVICES: "Unsaved Devices",
    UNSAVED_MESSAGE: "Your changes will be lost if you don’t save them. Do you want to save?",
    UPDATE_AVAILABLE: "Update Available",
    UPDATE_FAILED: "Update Failed",
    UPDATE_FIRMWARE: "Update Firmware",
    UPDATE_FIRMWARE_ERROR: " Error updating the firmware.",
    UPDATE_NOW: "Update Now",
    UPDATE_SUCCESS_MESSAGE: "Successfully updated switch firmware.",
    UPDATE_SUCCESS_TITLE: "Update Success",
    US_STATES: "US States",
    USE_NEST_FOR_HOME_AWAY: "Use Nest to update my Home/Away status.",
    USER_SPECIFIC_BRIGHTNESS: "User Specified Brightness",
    USERS: "Users",
    VALIDATION: {
      RESIDENCE: {
        ADDRESS: {
          EMPTY: "Please enter address for your residence",
          LENGTH: "Your address should be minimum 5 characters",
          MAX_LENGTH: "Your address can not contain more than 50 characters."
        },
        CITY: {
          EMPTY: "Please enter city for your residence.",
          FORMAT: "City must be only letters.",
          LENGTH: "",
          MAX_LENGTH: "Your city can not contain more than 50 characters."
        },
        COUNTRY: {
          EMPTY: "Please select a country for your residence."
        },
        STATE: {
          EMPTY: "Please enter state for your residence."
        },
        ZIP_CODE: {
          EMPTY: "Please enter a valid ZIP code for your residence.",
          FORMAT: "ZIP must be an alpha numeric value.",
          LENGTH: "ZIP must be minimum 3 characters.",
          MAX_LENGTH: "Your ZIP can not contain more than 20 characters."
        }
      },
      ROOM: {
        NAME: {
          LENGTH: "Room name must be at least 4 characters long."
        }
      },
      SCENE: {
        NAME: {
          EMPTY: "Please give a name to your Scene.",
          NO_DEVICE: "Please select at least one device for creating a Scene."
        }
      }
    },
    VERIFICATION_EMAIL_SEND: "A verification has been sent to you. Please check your email to confirm your email address, then tap 'Continue' below.",
    VERIFY_DEVICE_HAS_INTERNET: "Please make sure it has internet access.",
    VERSION: "Version",
    VERSION_NUMBER: "Version Number",
    WAIT_WHILE_DEVICE_ADD: "Please wait while your Leviton device connects to the Wi-Fi network and communicates to the cloud.",
    WAIT_WHILE_DEVICE_CONFIG: "Please wait while we configure your Leviton device's wireless network.",
    WAIT_WHILE_DEVICE_JOINS: "Please wait while we transfer your Wi-Fi settings to your Leviton device.",
    WAIT_WHILE_SWITCH_REBOOTS: "Please wait while your device is rebooting.",
    WARNING: "Warning",
    WEAK_PASSWORD_INFO: "The password you provided is not strong enough.",
    WEAK_PASSWORD_TITLE: "Weak Password",
    WEDNESDAY: "Wednesday",
    WIFI_INVALID_CHAR: "Wi-Fi password cannot have special characters (like &) at this time. Please use a different Wi-Fi password.",
    WIFI_INVALID_CHAR_TITLE: "Invalid Password Characters",
    WIFI_PASS_CASE_SENSITIVE: "Wi-Fi passwords are case sensitive.",
    WIFI_PASS_ERROR_MESSAGE: "Incorrect Wi-Fi Password",
    WIFI_PASS_ERROR_TITLE: "Wi-Fi password must be at least 8 characters long. Please enter the correct Wi-Fi password.",
    WIFI_PASS_TAP_EYEBALL: "Tap the eyeball icon to view the password you entered.",
    YES: "Yes",
    ZIP_CODE: "ZIP Code",
    ZIP_CODE_REQUIRED: "ZIP Code (Required)"
  }
}, function(e, t) {
  e.exports = {
    ACTIVITIES: "Actividades",
    ACTIVITY_ANOTHER_ITEM_PROMPT: "¿Deseas agregar otro dispositivo o pieza a esta actividad?",
    ACTIVITY_DELETE_PROMPT: "Estás a punto de eliminar esta actividad. Confirma si deseas continuar.",
    ACTIVITY_DELETE_PROMPT_TITLE: "Eliminar actividad",
    ACTIVITY_NO_ITEM_SELECTED: "Debes agregar al menos 1 {{type}} para elegir esta opción.",
    ACTIVITY_NO_PROP: "Sin {{prop}}.",
    ACTIVITY_ON_SAVE_INSTRUCT: 'Cuando termines, pulsa "Guardar y Completar" debajo.',
    ACTIVITY_PREVALUES: {
      a: "Finalmente, configuremos los ajustes para esta actividad.",
      b: "Los cambios realizados en dispositivos, piezas y escenas sólo afectarán a esta actividad."
    },
    ACTIVITY_ROOM_INFO: "Sólo puedes seleccionar piezas con escenas disponibles.",
    ACTIVITY_RUN_PROMPT: "Confirma si deseas ejecutar esta actividad.",
    ACTIVITY_SELECT_DEVICE: "Selecciona el dispositivo que deseas agregar a tu actividad.",
    ACTIVITY_SELECT_ROOM: "Selecciona la pieza que deseas agregar a tu actividad.",
    ADD: "Agregar",
    ADDED_DEVICE_SUCCESS: "Dispositivo(s) agregado(s) exitosamente a la pieza.",
    ADDING_DEVICE_TO_CLOUD: "Agregando dispositivo a la nube",
    ADDITIONAL_SUPPORT: "para soporte adicional",
    ADDRESS: "Dirección",
    ADD_A: "Agregar un",
    ADD_ACTIVITY: "Agregar actividad",
    ADD_ACTIVITY_NOW: "Agregar una actividad ahora",
    ADD_A_DEVICE: "Agregar un dispositivo",
    ADD_COMMAND_TEXT: "Agregar instrucciones para determinados dispositivos o para piezas enteras a tu actividad.",
    ADD_DEVICE: "Agregar dispositivo",
    ADD_DEVICE_NOW: "Agregar un dispositivo ahora",
    ADD_DEVICE_TO_ROOM: "Asignar dispositivos a tu pieza <br> de la lista debajo.",
    ADD_DEVICE_TO_WIFI: "Agregar {{deviceName}} <br> a tu Wi-Fi.",
    ADD_MORE_ITEMS: "Agregar más ítemes",
    ADD_RESIDENCE: "Agregar residencia",
    ADD_ROOM: "Agregar pieza",
    ADD_SCENE: "Agregar escena",
    ADD_SCHEDULE: "Agregar programación",
    ADD_SCHEDULE_NOW: "Agregar una programación ahora",
    ADD_THINGS_TO_ACTIVITY: "Agregar cosas a la actividad",
    AFTER: "después",
    ALL_DEVICES_ALREADY_IN_SCENE: "Todos los dispositivos en tu pieza ya están agregados a tu escena.<br> Asigna más dispositivos a tu pieza para que puedas agregarlos a una escena.",
    ALWAYS_OFF: "Siempre apagada",
    ALWAYS_ON: "Siempre encendida",
    AMAZON_ALEXA: "Amazon Alexa",
    AND: "y",
    ANNUAL_USAGE: "Uso anual",
    APP_NAME: "My Leviton",
    APP_VERSION: "Versión de la Aplicación",
    ARE: "están",
    ASK_FOR_DEVICE_SETUP: "En este momento no tienes dispositivos configurados. ¿Deseas agregar un dispositivo a esta residencia ahora?",
    ASSIGNED_DEVICES: "Dispositivos asignados",
    ASSIGNED_ROOMS: "Pieza Asignada",
    ASSIGN_DEVICE: "Asignar dispositivo",
    ASSIGN_DEVICES: "Asignar dispositivos",
    ASSIGN_DEVICE_TO_ROOM: "Asignar dispositivos a tu pieza de la lista debajo.",
    ASSIGN_TO_A_ROOM: "Asignar a una pieza",
    AVAILABLE_DEVICES: "Dispositivos disponibles",
    BEFORE: "antes",
    BRIGHTNESS: "Brillo",
    BULB_OPTIONS: "opciones de focos",
    BULB_TYPE: "Tipo de bombilla",
    TERMS_AND_CONDITION: "Al registrarme, acepto la Política de Privacidad y los Términos de Uso de My Leviton.",
    CANCEL: "Cancelar",
    CANNOT_CONNECT_TO_INTERNET: "No se puede conectar a Internet. Verifica que tu teléfono tenga conexión a Internet.",
    CANNOT_CONNECT_WIFI_DEVICE: "No se puede conectar a {{deviceName}}.",
    CANNOT_CREATE_RESIDENCE: "No se pudo crear una residencia. Debes volver a iniciar el proceso.",
    CANNOT_DELETE_RESIDENCE: "No se puede eliminar esta residencia.",
    CANNOT_DETECT_WIFI: "No se puede detectar una red Wi-Fi. Verifica que tu Wi-Fi esté activado.",
    CANNOT_DETERMINE_SSID: "No se puede determinar el SSID de tu red. {{error}}",
    CANNOT_UPDATE_ATM: "No se puede actualizar el firmware en este momento.",
    CANNOT_UPDATE_FIRMWARE: "No se puede actualizar el firmware",
    CAPTURE_CURRENT_SETTINGS: "Capturar los ajustes actuales",
    CFL: "CFL",
    CHOOSE_COMMAND_TYPE: "Elije un tipo de instrucción <br>",
    CITY: "Ciudad",
    COMMAND: "Instrucción",
    COMPLETE: "Completar",
    CONFIGURATION: "Configuración",
    CONFIGURE: "Configurar",
    CONFIGURE_ACTIVITY: "Configurar actividad",
    CONNECTING: "Conectando",
    CONNECTING_TO: "Conectando a {{deviceName}}",
    CONNECTING_TO_DEVICE: "Conectando a tu dispositivo Leviton",
    CONNECTION_LOST_INFO: "Conexión perdida con tu interruptor.",
    CONNECTION_LOST_TITLE: "Conexión perdida",
    CONTACT_HOURS: "Contáctanos a M-F 8-7 ET",
    CONTACT_MAIL_LABEL: "sasupport@leviton.com",
    CONTACT_MAIL_VALUE: "sasupport@leviton.com",
    CONTACT_PHONE_LABEL: "1-800-824-3005",
    CONTACT_PHONE_VALUE: "18002297256",
    CONTINUE: "Continuar",
    CONTINUE_DEVICE_SETUP: "Continuar configuración del dispositivo",
    CONTINUE_SETTING_DEVICE: "Continuar configuración del dispositivo",
    CONTROLS: "Controles",
    COUNTRY: "País",
    CREATED_ITEM: "Creado {{item}}.",
    DELETE: "Eliminar",
    DELETE_DEVICE: "Eliminar dispositivo",
    DELETE_DEVICE_PROMPT: "Confirma si deseas eliminar <strong>{{deviceName}}</strong>.",
    DELETE_ITEM: "¿Eliminar {{name}}?",
    DELETE_RESIDENCE_WARNING: "Al eliminar esta residencia se eliminarán el nombre, dirección y todas las vinculaciones, incluyendo los dispositivos. Esto no se puede revertir.",
    DELETE_ROOM: "Eliminar pieza",
    DELETE_ROOM_WARNING: "Estás a punto de eliminar esta pieza. Esto no eliminará los dispositivos vinculados. Confirma si deseas continuar.",
    DELETE_SCHEDULE: "Eliminar programación",
    DELETE_SCHEDULE_WARNING: "Estás a punto de eliminar esta programación. Confirma si deseas continuar.",
    DELETE_THIS_RESIDENCE: "Eliminar esta residencia",
    DEVICE: "Dispositivo",
    DEVICES: "Dispositivos",
    DEVICE_ALREADY_BELONGS: "Este dispositivo ya está vinculado con otra residencia.",
    DEVICE_CANNOT_BE_SAVED: "No se puede guardar el dispositivo",
    DEVICE_CONNECTED_INFO: "Tu <strong> {{deviceName}}</strong> está ahora conectado con My Leviton Cloud. <br> Puedes pulsar <strong>Identificar dispositivo</strong> debajo para que la LED del dispositivo parpadee por varios segundos.",
    DEVICE_DISCONNECTED: "Dispositivo desconectado",
    DEVICE_NOT_DISCOVERED: "No se pudo agregar tu dispositivo a My Leviton Cloud. Verifica que el enrutador de Wi-Fi de tu casa tenga acceso a Internet. Pulsa Volver a intentar para repetir el proceso.",
    DEVICE_NO_LOCAL_IP: "El dispositivo no obtuvo la dirección IP local",
    DEVICE_OFFLINE_INFO: "Tu dispositivo parece estar desconectado. Verifica tu conexión a Internet.",
    DEVICE_OPTIONS: "opciones del dispositivo",
    DEVICE_READY_TO_USE: "Tu dispositivo está ahora listo para usar.",
    DEVICE_RENAME_INFO: "Puedes cambiar el nombre de tu dispositivo introduciendo un nombre descriptivo en el cuadro debajo.",
    DEVICE_SEEMS_OFFLINE: "Tu dispositivo parecer estar desconectado.",
    DEVICE_SETTINGS: "Ajustes del dispositivo",
    DEVICE_SETUP: "Configuración del dispositivo",
    DEVICE_SETUP_AND_CONFIG: "Configuración y ajustes del dispositivo",
    DEVICE_SETUP_COMPLETE_INFO: "La configuración de tu dispositivo <br> está completa.",
    DEVICE_SETUP_INSTRUCTIONS: {
      a: "Primero, debes conectar tu dispositivo a tu red Wi-Fi.",
      b: "Si la LED en tu dispositivo presenta un rápido parpadeo verde, pulsa Continuar.",
      c: "Si la LED de tu dispositivo no presenta un parpadeo verde,",
      d: "sigue el procedimiento para restablecer los ajustes de fábrica",
      e: "y pulsa Continuar."
    },
    DIM_LED_BEHAVIOUR: "Comportamiento del atenuador de la barra LED",
    DISCARD: "Descartar",
    DUPLICATE_SERIAL_NUMBER: "El número de serie de tu dispositivo <strong>{{deviceName}} </strong> ya ha sido registrado. <br> Si este es tu dispositivo y estás intentado volver a instalarlo, debes eliminarlo de tu cuenta. <br> Si este mensaje sigue apareciendo, debes contactarte con el soporte técnico.",
    EDIT_ACTIVITY_NAME: "Editar nombre de actividad",
    EDIT_NAME: "Editar nombre",
    EDIT_RESIDENCE: "Editar residencia",
    EDIT_RESIDENCES: "Editar residencias",
    EDIT_ROOM_NAME: "Editar nombre de pieza",
    EMAIL: "Email",
    EMAIL_ALREADY_EXISTS_INFO: "¡Este Email ya ha sido registrado!",
    EMAIL_ALREADY_EXISTS_TITLE: "Este Email ya existe",
    EMAIL_NOT_VERIFIED: {
      MESSAGE: "Por favor revisa tu Email y verifica tu cuenta.",
      TITLE: "Email no verificado."
    },
    EMAIL_REQUIRED: "Debes introducir una dirección válida de Email.",
    ENABLE_LOCATION_PROMPT: "¿Activar los servicios de ubicación de My Leviton? ",
    ENABLE_LOCATION_PROMPT_MESSAGE: "La función de programación de la app My Leviton requiere la ubicación de tu residencia.<br><br>Con tu permiso, My Leviton puede determinar tu ubicación automáticamente. También puedes introducir la dirección completa de tu residencia.",
    ENTER_NETWORK_PASSWORD: "Introduce la contraseña de red",
    ENTER_NETWORK_PASSWORD_INSTRUCTION: "Introduce tu contraseña de red Wi-Fi <br> debajo.",
    ENTER_NETWORK_PASSWORD_REQUEST: "Debes introducir una contraseña para tu red.",
    ENTER_RESIDENCE_NAME: "Para comenzar, introduce un nombre para tu casa o usa el nombre por defecto y pulsa para continuar.",
    ENTER_THE_ADDRESS: "INTRODUCE LA DIRECCIÓN",
    ERROR: "Error",
    ERROR_CANNOT_CONNECT_TO_SWITCH: "No se puede conectar al interruptor. Verifica que tu teléfono sea el único dispositivo conectado.",
    ERROR_DURING_ENROLLMENT: "Ocurrió un error de registro. Debes volver a comenzar.",
    ERROR_ON_SUBSCRIPTION: "Ocurrió un error de suscripción.",
    FACTORY_RESET_PROCEDURE: {
      a: "Si el dispositivo que estás reajustando es un dispositivo Decora In-Wall, pulsa la parte superior de la paleta sin soltarla durante unos 14 segundos hasta que la LED parpadee en naranja y rojo.",
      b: "Si tu dispositivo es un módulo que se enchufa, pulsa el botón sin soltar durante unos 14 segundos, hasta que la LED parpadee en naranja y rojo."
    },
    FACTORY_RESET_PROCEDURE_TITLE: "Procedimiento de ajustes de fábrica",
    FADE_OFF_RATE: "Velocidad de apagado gradual",
    FADE_ON_RATE: "Velocidad de encendido gradual",
    FAILED_TO_COMMUNICATE: "Comunicación fallida",
    FIND_YOUR_DEVICE: "Encuentra tu dispositivo",
    FIND_YOUR_DEVICE_AFTER_INSTRUCTION: "Cuando conectes tu dispositivo, regresa a esta app y continúa con el proceso de configuración.",
    FIND_YOUR_DEVICE_ANDROID_INSTRUCTION: "El Wi-Fi de tu dispositivo móvil se conectará ahora con el dispositivo. Cuando estés listo, pulsa Continuar para ejecutar los ajustes del Wi-Fi de tu teléfono. Selecciona <strong>Leviton-XXXX </strong> en la lista de redes disponibles.",
    FIND_YOUR_DEVICE_IOS_INSTRUCTION: "A continuación te conectarás con tu nuevo dispositivo Leviton por Wi-Fi para continuar con el proceso de configuración. Cuando estés listo, puedes explorar los ajustes Wi-Fi de tu teléfono. Con el Wi-Fi activado, selecciona <strong>Leviton-XXXX</strong> en la lista de redes Wi-Fi disponibles.",
    FINISH: "Finalizar",
    FIRMWARE_COMMUNICATION_FAIL: "Al parecer tu dispositivo móvil y el dispositivo Decora Smart están conectados a diferentes redes. <br>Conecta tu dispositivo móvil a la misma red Wi-Fi que el dispositivo Decora Smart y vuelve a comenzar la actualización.",
    FIRMWARE_UPDATE: "Actualización del firmware",
    FIRMWARE_UPDATE_AVAILABLE_MESSAGE: "Se encuentra disponible una actualización del firmware. <br> Verifica que este dispositivo esté conectado a la misma red Wi-Fi que <strong>{{deviceName}}</strong> y continúa.",
    FIRMWARE_UPDATE_CANCEL_INFO: "Se canceló la actualización del firmware.",
    FIRMWARE_UPDATE_CANNOT_COMMUNICATE_AFTER_UPDATE: "Se ha actualizado el firmware de tu dispositivo. Pero no pudimos conectar con tu interruptor.",
    FIRMWARE_UPDATE_SUCCESS_INFO: "'Actualización exitosa del firmware de tu dispositivo',",
    FIRMWARE_UPDATE_TIME_WARNING: "Este proceso puede tardar unos minutos. Confirma si deseas actualizar ahora.",
    FIRMWARE_UPDATING: "Actualizando",
    FIRSTNAME: "Nombre",
    FORGOT_PASSWORD: "Olvidé mi contraseña",
    FRIDAY: "Viernes",
    GENERIC_ERROR: "Algo falló.",
    GET_MY_LOCATION: "Obtener mi ubicación",
    GIVE_ROOM_NAME: "Asignar un nombre a la pieza",
    HERE: "aquí",
    IDENTIFY_DEVICE: "Identificar dispositivo",
    IF_NO_WIFI_NETWORK: "Si no puedes ver tu red Wi-Fi en la lista, intenta",
    INCANDESCENT: "Incandescente",
    INVALID: "inválido",
    INVALID_NAME: "Nombre inválido",
    INVALID_RESIDENCE_MESSAGE: "Información inválida de la residencia. Debes volver a intentar.",
    INVALID_RESIDENCE_TITLE: "Residencia inválida",
    INVALID_ROOM: "Pieza inválida",
    IS: "está",
    ITEM_ALREADY_EXISTS: "Ya existe un dispositivo, escena o actividad con el mismo nombre.",
    I_AGREE: "Acepto",
    JOINING_WIFI_NETWORK: "Conectando a la red Wi-Fi",
    LASTNAME: "Apellido",
    LED: "LED",
    LED_BAR_ALWAYS_OFF: "Barra LED siempre apagada",
    LED_BAR_ALWAYS_ON: "Barra LED siempre encendida",
    LED_OFF: "LED apagada",
    LED_STAYS_ON_FOR_SECOND: "La barra LED queda encendida por {{second}} segundos después de cambiar",
    LED_STAYS_ON_FOR_SECONDS: "La barra LED queda encendida por {{seconds}} segundos después de cambiar",
    LOCATION_BASED_FEATURES: "Funciones en base a la ubicación",
    LOCATION_DETECTED: "Ubicación detectada",
    LOCATION_MORE_INFO: "Con tu permiso, esta app determinará tu ubicación automáticamente. Puedes introducir la dirección completa de tu residencia u omitir este paso. Si omites este paso, las programaciones no funcionarán hasta que introduzcas una dirección para esta residencia.",
    LOCATION_SERVICE_DISABLED_ERROR: "El servicio de ubicación está desconectado en tu dispositivo móvil. Debes activarlo y volver a intentar más tarde.",
    LOCATION_UNABLE_TO_DETECT: "No se pudo obtener la información de ubicación desde tu dispositivo. Verifica que el Servicio de Ubicación esté activado.",
    LOCATOR_MODE: "Modo Ubicación",
    LOGIN_ERROR_TITLE: "Error de inicio de sesión",
    LOGOUT: "Salir",
    MAKE_SURE_MOBILE_HAS_INTERNET: "Verifica que tu dispositivo móvil esté conectado a Internet para completar la configuración.",
    MANUALLY_CONFIG_DEVICES: "dispositivos configurados manualmente",
    MANUFACTURER: "Fabricante",
    MARK_10: "Mark 10",
    MAX_LEVEL: "nivel máximo",
    MESSAGE: "Mensaje",
    MINUTE_SHORT: "min",
    MIN_LEVEL: "nivel mínimo",
    MODEL: "Modelo",
    MONDAY: "Lunes",
    MONTHLY_USAGE: "Uso mensual",
    MUST_HAVE_SCENE: "Debes agregar una escena para continuar.",
    MUST_SELECT_DEVICE: "Debes seleccionar un dispositivo para continuar.",
    MUST_SELECT_ROOM: "Debes seleccionar una pieza para continuar.",
    MY_ACTIVITY: "Mi actividad",
    NAME_ACTIVITY_DESCRIPTION: 'Asigna a tu actividad un nombre descriptivo de su función principal, p.ej. "Buenas noches" o "Apagar todas las luces". Puedes cambiarlo después.',
    NAME_MUST_BE_X_CHAR_LONG: "El nombre debe contener al menos {{x}} caracteres.",
    NAME_YOUR_ACTIVITY: "Debes asignar un nombre a tu actividad",
    NAME_YOUR_ACTIVITY_DESC: "Debes asignar un nombre a tu actividad para continuar.",
    NAME_YOUR_DEVICE: "Asigna un nombre a tu dispositivo",
    NEED_MORE_HELP: "¿Necesita más ayuda?",
    NEW_SCENE: "Nueva escena",
    NEW_SCHEDULE: "Nueva programación",
    NOT_CONNECTED: "Sin conexión",
    NO_ACTIVITY_CARD: "<p> No tienes ninguna actividad todavía. </p> <p> Una actividad permite la agrupación de las instrucciones más utilizadas para que se ejecuten al mismo tiempo. <p> Por ejemplo, una actividad puede ser Apagar o encender todas las luces. </p> <p> Pulsa ‘Agregar una actividad’ debajo para comenzar a crear una actividad. </p>",
    NO_ASSIGNED_DEVICES_FOR_ASSIGN: "No tienes dispositivos desvinculados. Para asignar un dispositivo a esta pieza, primero debes desvincularlo de la pieza respectiva.",
    NO_ASSIGNED_DEVICES_FOR_SCENE: "No tienes dispositivos asignados. Para crear una escena, debes tener un dispositivo o más asignados a una pieza.",
    NO_AVAILABLE_DEVICES: "Sin dispositivos disponibles",
    NO_AVAILABLE_ROOMS: "Sin piezas disponibles",
    NO_DEVICE: "Sin dispositivo",
    NO_DEVICE_CARD: "<p> Todavía no tienes ningún dispositivo. </p> <p> Agrega un dispositivo Leviton para controlar. Esto puede incluir módulos de control, interruptores de luz y atenuadores. </p> <p> Después de agregar dispositivos, puedes agruparlos y controlarlos por programación, actividades y piezas. </p> <p> Pulsa ‘Agregar un dispositivo’ debajo para configurar un nuevo dispositivo. </p>",
    NO_INTERNET_CONNECTION_MESSAGE: "Debes conectarte a Internet para agregar un ítem.",
    NO_INTERNET_CONNECTION_TITLE: "Sin conexión a Internet",
    NO_LOGIN_PERMISSION: "No se puede iniciar sesión. Sin permiso.",
    NO_ROOM: "Sin pieza",
    NO_SCENE: "Sin escena",
    NO_SCHEDULE_CARD: "<p> Todavía no tienes ninguna programación. </p><p> Una programación permite automatizar un dispositivo, pieza o actividad.<p>Por ejemplo, puedes crear una programación para ‘Encender o apagar luces de lunes a viernes 20 minutos antes del amanecer.’</p><p>Pulsa ‘Agregar una programación’ debajo para comenzar con esta poderosa función.</p>",
    OF_MY_LEVITON: " de My Leviton",
    OK: "Ok",
    PASSWORD: "Contraseña",
    PASSWORD_RESET_ERROR: "No se puede cambiar la contraseña.",
    PASSWORD_RETYPE: "Vuelve a introducir la contraseña",
    PERMISSION_ERROR: "Error de permiso",
    PLEASE_WAIT: "Espera por favor...",
    PREP_DEVICE_INSTRUCTIONS: {
      a: "Sigue las instrucciones de instalación incluidas para instalar tu dispositivo.",
      b: "Verifica que tu red Wi-Fi tenga activada la codificación WPA/WPA2.",
      c: "es necesaria la conexión a Internet para completar la configuración. Verifica tu red Wi-Fi."
    },
    PREP_DEVICE_SETUP: "Preparando para configurar el dispositivo <br>",
    PRESET_LEVEL: "nivel predeterminado",
    PRESET_OPTIONS: "opciones predeterminadas",
    PRIVACY_POLICY: "Política de Privacidad",
    RECONFIGURE_WIRELESS: "Reconfigurar conexión inalámbrica",
    REGISTRATION_SUCCESS_INFO: "Revisa tu Email por favor. Te hemos enviado un mensaje para verificar tu cuenta.",
    REGISTRATION_SUCCESS_TITLE: "¡Gracias por registrarte!",
    REMEMBER_ME: "Recordarme",
    REMEMBER_NETWORK_PASSWORD: "Recordar mi contraseña de Wi-Fi cuando ingreso dispositivos.",
    REMOVE: "Eliminar",
    REMOVE_DEVICE: "Eliminar dispositivo",
    REMOVE_SCENE: "Eliminar dispositivo",
    REMOVE_SCHEDULE: "Eliminar programación",
    REMOVE_THIS_DEVICE: "Eliminar este dispositivo",
    REPEAT: "Repetir",
    RESCAN: "volver a escanear",
    RESEND_CONFIRMATION: "Reenviar confirmación",
    RESET_PASSWORD: "Cambiar contraseña",
    RESET_PASSWORD_CHECK_EMAIL: "'Por favor revisa tu Email y sigue la instrucción.'",
    RESIDENCE_DELETE_PERMISSION_ERROR: "No tienes permiso de propietario para realizar cambios en esta residencia.",
    RESIDENCE_NAME: "Nombre de residencia",
    RESIDENCE_SETUP_COMPLETE: "Se ha completado la configuración de tu residencia <br>.",
    RESIDENCE_UPDATED_INFO: "Se ha actualizado tu residencia.",
    RETURN_TO_PREV_VAL: "Regresar al valor anterior",
    ROOM: "Pieza",
    ROOM_DEVICE_REMOVE_PROMPT: "Confirma si deseas eliminar este dispositivo de la pieza correspondiente.",
    ROOM_NO_UNASSIGNED_DEVICE: "No tienes dispositivos desvinculados. <br> Para asignar un dispositivo a esta pieza, primero debes desvincularlo de la pieza correspondiente.",
    ROOM_SCENE_REMOVE_PROMPT: "Confirma si deseas eliminar esta escena de la pieza correspondiente.",
    ROOM_SETUP_AND_CONFIG: "Configuración y ajustes de pieza",
    ROOM_UPDATED_INFO: "Se ha actualizado la información de la pieza.",
    RUN: "Ejecutar",
    RUN_AT_SUNRISE: "Ejecutar al amanecer",
    RUN_AT_SUNSET: "Ejecutar al anochecer",
    SATURDAY: "Sábado",
    SAVE: "Guardar",
    SAVE_COMPLETE: "Guardar y completar",
    SCENES: "Escenas",
    SCENE_CREATE_SUCCESS: "Escena creada exitosamente.",
    SCENE_NAME: "Nombre de escena",
    SCENE_RUN_PROMPT: "Confirma si deseas ejecutar esta actividad.",
    SCHEDULES: "Programaciones",
    SCHEDULE_NAME: "Nombre de programación",
    SCHEDULE_TIME: "Horario de programación",
    SCHEDULING_REQUIRES_LOCATION: "La función de programación de esta app requiere la ubicación de tu residencia.",
    SECOND: "segundo",
    SECONDS: "segundos",
    SELECTED_WIFI_DEVICE: "Dispositivo Wi-Fi seleccionado",
    SELECT_A_DEVICE: "Selecciona un dispositivo",
    SELECT_A_DEVICE_MESSAGE: "Debes seleccionar al menos un dispositivo para continuar.",
    SELECT_A_ROOM: "Selecciona una pieza.",
    SELECT_A_TIME: "Selecciona un horario",
    SELECT_NETWORK_REQUEST: "Debes seleccionar una red Wi-Fi con la que tu interruptor se conectará antes de continuar.",
    SELECT_OPTION_BELOW: "Selecciona una opción debajo para continuar.",
    SELECT_ROOM_FOR_DEVICE: "Selecciona una pieza de la lista. <br> Si no has configurado ninguna pieza, puedes agregar una nueva para asignarle el dispositivo.",
    SELECT_STATE_FOR: "Muy bien. Ahora debes seleccionar el estado para",
    SELECT_WIFI_BELOW: "Selecciona la red Wi-Fi de tu casa de la lista debajo.",
    SELECT_WIFI_NETWORK: "Selecciona una red",
    SERIAL: "Serie",
    SETTINGS: "Configuración",
    SETTING_UP_DEVICE_WIRELESS: " Ajustando tu dispositivo por aire",
    SETUP_AN_ACTIVITY: "Configurar una actividad",
    SETUP_YOUR_RESIDENCE: "Configurar tu residencia",
    SET_TIME: "Configurar horario",
    SIGN_IN: "Ingresar",
    SIGN_UP: "Registrase",
    SIGN_UP_FOR_ACCOUNT: "Registrar una cuenta",
    SKIP_FOR_NOW: "Omitir este paso por ahora",
    STATE: "Estado",
    STATUS: "Estado",
    STATUS_LED_ALWAYS_OFF: "Estado de LED siempre apagado",
    STATUS_LED_BEHAVIOUR: "Comportamiento del estado de LED",
    STATUS_LED_OFF_WHEN_LOAD_OFF: "Estado de LED encendido cuando la carga se apaga (por defecto)",
    STATUS_LED_ON_WHEN_LOAD_ON: "Estado de LED encendido cuando la carga se enciende",
    STATUS_MODE: "Modo Estado",
    STEP_1_3: "Paso 1 de 3",
    STEP_1_7: "Paso 1 de 7",
    STEP_2_3: "Paso 2 de 3",
    STEP_2_7: "Paso 2 de 7",
    STEP_3_3: "Paso 3 de 3",
    STEP_3_7: "Paso 3 de 7",
    STEP_4_7: "Paso 4 de 7",
    STEP_5_7: "Paso 5 de 7",
    STEP_6_7: "Paso 6 de 7",
    STEP_7_7: "Paso 7 de 7",
    SUCCESS: "Éxito",
    SUNDAY: "Domingo",
    SUNRISE: "Alba",
    SUNSET: "Anochecer",
    SUPPORT: "Soporte",
    SWITCH_SAME_NETWORK_INFO: "Verifica que esté encendido y conectado a la misma red Wi-Fi que tu dispositivo móvil.",
    TERMS_OF_USE: "Términos de uso",
    THURSDAY: "Jueves",
    TOO_MANY_LOGIN_ATTEMPTS: 'Se ha bloqueado la cuenta. <br> Debes <a href="tel:18002297256">llamar al</a> soporte técnico.',
    TROUBLESHOOT_INFO: "Si ves que puedes hacerlo, intenta los pasos 1 - 5. De lo contrario, contacta a tu proveedor de Internet.",
    TROUBLESHOOT_NETWORK: "Solucionando problemas <br> de tu red",
    TROUBLESHOOT_STEPS: {
      A: "Encender y apagar todo",
      B: "Verificar otros dispositivos",
      C: "Verificar conexiones físicas",
      D: "Verificar dirección IP válida",
      E: "Intenta un Ping y rastrea su ruta"
    },
    TRY_AGAIN: "Vuelve a intentarlo",
    TRY_IT: "Inténtalo",
    TUESDAY: "Martes",
    UNABLE_TO_DOWNLOAD_FIRMWARE: "No se puede descargar la última versión del firmware desde el servidor en este momento.",
    UNABLE_TO_ENROLL: {
      DESCRIPTION: "Su dispositivo Leviton no pudo inscribirse. <br>Asegúrese de introducir la red Wi-Fi y la contraseña correctas."
    },
    UNABLE_TO_LOGIN: "No se pudo iniciar la sesión. Revisa tu Email y contraseña y vuelve a intentarlo.",
    UNASSIGN: "Desvincular",
    UNASSIGNED_DEVICES: "Dispositivos desvinculados",
    UNSAVED_CHANGES: "Cambios son guardar",
    UNSAVED_CHANGES_MESSAGE: "Confirma si deseas descartar tus cambios no guardados.",
    UNSAVED_DEVICES: "Dispositivos no guardados",
    UPDATE_FAILED: "Error al actualizar",
    UPDATE_FIRMWARE: "Actualizar Firmware",
    UPDATE_NOW: "Actualizar ahora",
    USER_SPECIFIC_BRIGHTNESS: "Brillo determinado por el usuario",
    US_STATES: "Estados de EE.UU.",
    VALIDATION: {
      RESIDENCE: {
        ADDRESS: {
          EMPTY: "Por favor introduce la dirección de tu residencia",
          LENGTH: "Tu dirección debe contener al menos 5 caracteres.",
          MAX_LENGTH: "Tu dirección no puede contener más de 50 caracteres."
        },
        CITY: {
          EMPTY: "Por favor introduce la ciudad de tu residencia.",
          LENGTH: "",
          MAX_LENGTH: "Tu ciudad no puede contener más de 50 caracteres.",
          FORMAT: "La ciudad debe ser solo letras."
        },
        COUNTRY: {
          EMPTY: "Por favor selecciona un país para tu residencia."
        },
        STATE: {
          EMPTY: "Por favor introduce el estado de tu residencia."
        },
        ZIP_CODE: {
          EMPTY: "Por favor ingrese un código postal válido para su residencia.",
          FORMAT: "El código postal debe contener caracteres alfanuméricos.",
          LENGTH: "El código postal debe tener al menos 3 caracteres.",
          MAX_LENGTH: "Tu código postal no puede contener más de 20 caracteres."
        }
      },
      ROOM: {
        NAME: {
          LENGTH: "El nombre de pieza debe tener al menos 4 caracteres."
        }
      },
      SCENE: {
        NAME: {
          EMPTY: "Por favor asigna un nombre a tu escena.",
          NO_DEVICE: "Por favor selecciona un dispositivo para crear una escena."
        }
      }
    },
    VERIFY_DEVICE_HAS_INTERNET: "Verifica el acceso a Internet.",
    VERSION_NUMBER: "Número de versión",
    WAIT_WHILE_DEVICE_ADD: "por favor espera mientras agregamos tu dispositivo Leviton a My Leviton Cloud.",
    WAIT_WHILE_DEVICE_CONFIG: "Por favor espera mientras configuramos tu dispositivo por aire.",
    WAIT_WHILE_DEVICE_JOINS: "Por favor espera mientras tu dispositivo Leviton se conecta a tu red Wi-Fi.",
    WAIT_WHILE_SWITCH_REBOOTS: "Por favor espera mientras tu dispositivo se reinicia.",
    WEAK_PASSWORD_INFO: "Tu contraseña no es suficientemente sólida.",
    WEAK_PASSWORD_TITLE: "Contraseña débil",
    WEDNESDAY: "Miércoles",
    WIFI_INVALID_CHAR: "La contraseña de Wi-Fi no puede contener símbolos en este (p. ej. &). por favor usa otra contraseña de Wi-Fi.",
    WIFI_INVALID_CHAR_TITLE: "Caracteres inválidos de contraseña",
    ZIP_CODE: "Código postal",
    ZIP_CODE_REQUIRED: "Código postal (Obligado)",
    REMOVE_THIS_RESIDENCE: "Remove this Residence"
  }
}, function(e, t) {
  e.exports = {
    ACTIVITIES: "Activités",
    ACTIVITY_ANOTHER_ITEM_PROMPT: "Voulez-vous ajouter un autre appareil ou une pièce pour cette activité ?",
    ACTIVITY_DELETE_PROMPT: "Vous êtes sur le point de supprimer cette activité. Êtes-vous certain de vouloir poursuivre ?",
    ACTIVITY_DELETE_PROMPT_TITLE: "Supprimer l’activité.",
    ACTIVITY_NO_ITEM_SELECTED: "Vous devez ajouter au moins 1 {{type}} pour sélectionner cette option.",
    ACTIVITY_NO_PROP: "Il n’y a pas de {{prop}}.",
    ACTIVITY_ON_SAVE_INSTRUCT: "Lorsque vous avez terminé, appuyez sur « Sauvegarder et compléter » ci-dessous.",
    ACTIVITY_PREVALUES: {
      a: "Enfin, configurez les réglages pour cette activité.",
      b: "Les changements effectués aux dispositifs, pièces et scènes affecteront uniquement cette activité."
    },
    ACTIVITY_ROOM_INFO: "Seules les pièces ayant des scènes peuvent être sélectionnées.",
    ACTIVITY_RUN_PROMPT: "Êtes-vous certain de vouloir lancer cette activité ?",
    ACTIVITY_SELECT_DEVICE: "Veuillez sélectionner l’appareil sur lequel vous voulez ajouter votre activité.",
    ACTIVITY_SELECT_ROOM: "Veuillez sélectionner une pièce à ajouter à votre activité.",
    ADD: "Ajouter",
    ADDED_DEVICE_SUCCESS: "Ajout d’appareil(s) sélectionné(s) à la pièce réussi.",
    ADDING_DEVICE_TO_CLOUD: "Ajout de l’appareil dans le nuage en cours",
    ADDITIONAL_SUPPORT: "pour une assistance additionnelle",
    ADDRESS: "Adresse",
    ADD_A: "Ajouter",
    ADD_ACTIVITY: "Ajouter une activité",
    ADD_ACTIVITY_NOW: "Ajouter une activité maintenant",
    ADD_A_DEVICE: "Ajouter un appareil",
    ADD_COMMAND_TEXT: "Ajouter des commandes pour des appareils spécifiques ou pour des pièces entières de votre activité.",
    ADD_DEVICE: "Ajouter un appareil",
    ADD_DEVICE_NOW: "Ajouter un appareil maintenant",
    ADD_DEVICE_TO_ROOM: "Affectez des appareils à votre pièce <br> depuis la liste ci-dessous.",
    ADD_DEVICE_TO_WIFI: "Ajouter {{deviceName}} <br> à votre Wi-Fi.",
    ADD_MORE_ITEMS: "Ajouter d’autres éléments",
    ADD_RESIDENCE: "Ajouter une résidence",
    ADD_ROOM: "Ajouter une pièce",
    ADD_SCENE: "Ajouter une scène",
    ADD_SCHEDULE: "Ajouter un horaire",
    ADD_SCHEDULE_NOW: "Ajouter un horaire maintenant",
    ADD_THINGS_TO_ACTIVITY: "Ajouter des éléments à l’activité",
    AFTER: "après",
    ALL_DEVICES_ALREADY_IN_SCENE: "Tous les appareils de votre pièce sont déjà ajoutés à votre scène.<br> Affectez d’autres appareils à votre pièce pour les ajouter à une scène.",
    ALWAYS_OFF: "Toujours désactivé",
    ALWAYS_ON: "Toujours activé",
    AMAZON_ALEXA: "Amazon Alexa",
    AND: "et",
    ANNUAL_USAGE: "Utilisation annuelle",
    APP_NAME: "My Leviton",
    APP_VERSION: "Version de l’application",
    ARE: "sont",
    ASK_FOR_DEVICE_SETUP: "Vous n’avez pas d’appareil configuré. Voulez-vous ajouter un appareil à la résidence maintenant ?",
    ASSIGNED_DEVICES: "Appareils affectés",
    ASSIGNED_ROOMS: "Pièce affectée",
    ASSIGN_DEVICE: "Affecter un appareil",
    ASSIGN_DEVICES: "Affecter des appareils",
    ASSIGN_DEVICE_TO_ROOM: "Affectez des dispositifs à votre pièce depuis la liste ci-dessous.",
    ASSIGN_TO_A_ROOM: "Affecter à une pièce",
    AVAILABLE_DEVICES: "Appareils disponibles",
    BEFORE: "avant",
    BRIGHTNESS: "Luminosité",
    BULB_OPTIONS: "options d’ampoules",
    BULB_TYPE: "Type d’ampoule",
    TERMS_AND_CONDITION: "En m’inscrivant, je consens aux conditions d’utilisation et à la politique de confidentialité de My Leviton.",
    CANCEL: "Annuler",
    CANNOT_CONNECT_TO_INTERNET: "Impossible de se connecter à Internet. Assurez-vous que votre téléphone a une connexion à Internet.",
    CANNOT_CONNECT_WIFI_DEVICE: "Impossible de se connecter à {{deviceName}}.",
    CANNOT_CREATE_RESIDENCE: "Impossible de créer une résidence. Veuillez recommencer le processus.",
    CANNOT_DELETE_RESIDENCE: "Impossible de supprimer la résidence.",
    CANNOT_DETECT_WIFI: "Impossible de détecter un réseau Wi-Fi. Assurez-vous que votre Wi-Fi est activé.",
    CANNOT_DETERMINE_SSID: "Impossible de déterminer le nom de réseau sans fil (SSID) de votre réseau. {{error}}",
    CANNOT_UPDATE_ATM: "Impossible de mettre à jour le microprogramme à ce moment.",
    CANNOT_UPDATE_FIRMWARE: "Impossible de mettre à jour le microprogramme",
    CAPTURE_CURRENT_SETTINGS: "Capturer les réglages courants",
    CFL: "CFL",
    CHOOSE_COMMAND_TYPE: "Choisir un <br> type de commande",
    CITY: "Ville",
    COMMAND: "Commande",
    COMPLETE: "Terminé",
    CONFIGURATION: "Configuration",
    CONFIGURE: "Configurer",
    CONFIGURE_ACTIVITY: "Configurer l’activité",
    CONNECTING: "Connexion",
    CONNECTING_TO: "Connexion à {{deviceName}} en cours",
    CONNECTING_TO_DEVICE: "Connexion à votre appareil Leviton en cours",
    CONNECTION_LOST_INFO: "Connexion perdue avec votre commutateur.",
    CONNECTION_LOST_TITLE: "Connexion perdue",
    CONTACT_HOURS: "Contactez-nous du L au V, 8 h à 7 h HE",
    CONTACT_MAIL_LABEL: "sasupport@leviton.com",
    CONTACT_MAIL_VALUE: "sasupport@leviton.com",
    CONTACT_PHONE_LABEL: "1-800-824-3005",
    CONTACT_PHONE_VALUE: "18002297256",
    CONTINUE: "Continuer",
    CONTINUE_DEVICE_SETUP: "Continuer la configuration de l’appareil",
    CONTINUE_SETTING_DEVICE: "Continuer la configuration de l’appareil",
    CONTROLS: "Commandes",
    COUNTRY: "Pays",
    CREATED_ITEM: "{{item}} créé.",
    DELETE: "Supprimer",
    DELETE_DEVICE: "Supprimer l’appareil",
    DELETE_DEVICE_PROMPT: "Êtes-vous certain de vouloir supprimer <strong>{{deviceName}}</strong> ?",
    DELETE_ITEM: "Supprimer {{name}} ?",
    DELETE_RESIDENCE_WARNING: "La suppression de cette résidence éliminera le nom, l’adresse et tout élément associé incluant les appareils. Ceci ne peut être annulé.",
    DELETE_ROOM: "Supprimer la pièce",
    DELETE_ROOM_WARNING: "Vous êtes sur le point de supprimer cette pièce. Ceci ne supprimera pas les appareils associés. Êtes-vous certain de vouloir poursuivre ?",
    DELETE_SCHEDULE: "Supprimer l’horaire",
    DELETE_SCHEDULE_WARNING: "Vous êtes sur le point de supprimer cet horaire. Êtes-vous certain de vouloir poursuivre ?",
    DELETE_THIS_RESIDENCE: "Supprimer cette résidence",
    DEVICE: "Appareil",
    DEVICES: "Appareils",
    DEVICE_ALREADY_BELONGS: "Cet appareil est déjà attribué à une autre résidence.",
    DEVICE_CANNOT_BE_SAVED: "L’appareil ne peut pas être sauvegardé.",
    DEVICE_CONNECTED_INFO: "Votre <strong> {{deviceName}}</strong> est maintenant connecté à My Leviton dans le nuage. <br> Vous pouvez appuyer sur <strong>Identifier appareil </strong> ci-dessous afin que l’appareil utilise la DEL pendant quelques secondes.",
    DEVICE_DISCONNECTED: "Appareil déconnecté",
    DEVICE_NOT_DISCOVERED: "Impossible d’ajouter votre appareil à My Leviton dans le nuage. Assurez-vous que votre routeur Wi-Fi a accès à Internet. Appuyez sur Essayer à nouveau pour répéter le processus.",
    DEVICE_NO_LOCAL_IP: "L’appareil n’a pas obtenu l’adresse IP locale.",
    DEVICE_OFFLINE_INFO: "Votre appareil semble être hors ligne. Assurez-vous que vous avez accès à Internet.",
    DEVICE_OPTIONS: "options d’appareils",
    DEVICE_READY_TO_USE: "Votre appareil peut maintenant être utilisé.",
    DEVICE_RENAME_INFO: "Vous pouvez renommer votre appareil en saisissant un nom descriptif dans la case ci-dessous.",
    DEVICE_SEEMS_OFFLINE: "Votre appareil semble être hors ligne.",
    DEVICE_SETTINGS: "Réglages de l’appareil",
    DEVICE_SETUP: "Configuration de l’appareil",
    DEVICE_SETUP_AND_CONFIG: "Réglage et configuration de l’appareil",
    DEVICE_SETUP_COMPLETE_INFO: "La configuration de votre appareil <br> est maintenant terminée !",
    DEVICE_SETUP_INSTRUCTIONS: {
      a: "Nous devons d’abord connecter votre dispositif sur votre réseau Wi-Fi.",
      b: "Si la DEL sur votre dispositif clignote vert rapidement, appuyez sur Continuer.",
      c: "Si la DEL de votre dispositif ne clignote pas vert,",
      d: "suivez la procédure de réinitialisation des paramètres d’usine",
      e: "et appuyez sur Continuer."
    },
    DIM_LED_BEHAVIOUR: "Atténuer la barre lumineuse DEL",
    DISCARD: "Jeter",
    DUPLICATE_SERIAL_NUMBER: "Le numéro de série de votre appareil <strong>{{deviceName}} </strong> a déjà été enregistré. <br> Si c’est votre appareil et vous tentez de le réinstaller, supprimez-le de votre compte. <br> Si ce message s’affiche de nouveau, contactez l’assistance.",
    EDIT_ACTIVITY_NAME: "Modifier le nom de l’activité",
    EDIT_NAME: "Modifier le nom",
    EDIT_RESIDENCE: "Modifier la résidence",
    EDIT_RESIDENCES: "Modifier les résidences",
    EDIT_ROOM_NAME: "Modifier le nom de la pièce",
    EMAIL: "Courriel",
    EMAIL_ALREADY_EXISTS_INFO: "Le courriel que vous avez donné est déjà enregistré !",
    EMAIL_ALREADY_EXISTS_TITLE: "Courriel existant",
    EMAIL_NOT_VERIFIED: {
      MESSAGE: "Vérifiez votre courriel et votre compte.",
      TITLE: "Courriel non vérifié"
    },
    EMAIL_REQUIRED: "Veuillez entrer une adresse électronique valide.",
    ENABLE_LOCATION_PROMPT: "Activer les services de localisation de My Leviton ? ",
    ENABLE_LOCATION_PROMPT_MESSAGE: "La fonction Horaire de l’application My Leviton nécessite l’emplacement de votre résidence.<br><br>Avec votre permission, My Leviton peut déterminer votre emplacement automatiquement. Vous pouvez aussi entrer l’adresse complète de votre résidence.",
    ENTER_NETWORK_PASSWORD: "Saisir le mot de passe du réseau",
    ENTER_NETWORK_PASSWORD_INSTRUCTION: "Saisir le mot de passe de votre réseau Wi-Fi <br> ci-dessous.",
    ENTER_NETWORK_PASSWORD_REQUEST: "Saisir un mot de passe pour votre réseau.",
    ENTER_RESIDENCE_NAME: "Pour commencer, saisissez un nom pour votre demeure ou utilisez le nom par défaut et cliquez sur Continuer.",
    ENTER_THE_ADDRESS: "SAISIR L’ADRESSE",
    ERROR: "Erreur",
    ERROR_CANNOT_CONNECT_TO_SWITCH: "Impossible de se connecter au commutateur. Assurez-vous que votre téléphone est le seul appareil connecté.",
    ERROR_DURING_ENROLLMENT: "Erreur survenue lors du processus d’inscription. Veuillez recommencer.",
    ERROR_ON_SUBSCRIPTION: "Erreur lors de l’inscription",
    FACTORY_RESET_PROCEDURE: {
      a: "Si le dispositif que vous réinitialisez est un modèle Decora encastré, appuyez sur le haut de la languette et tenez-la pendant environ 14 secondes jusqu’à ce que la DEL clignote orange et rouge.",
      b: "Si votre dispositif est un module à brancher, appuyez sur le bouton et tenez-le enfoncé pendant environ 14 secondes jusqu’à ce que la DEL clignote orange et rouge."
    },
    FACTORY_RESET_PROCEDURE_TITLE: "Procédure de réinitialisation des paramètres d’usine",
    FADE_OFF_RATE: "Taux de fondu en extinction",
    FADE_ON_RATE: "Taux de fondu en allumage",
    FAILED_TO_COMMUNICATE: "Panne de communication",
    FIND_YOUR_DEVICE: "Trouvez votre appareil",
    FIND_YOUR_DEVICE_AFTER_INSTRUCTION: "Une fois connecté à votre appareil, revenez à cette application et continuez le processus de configuration.",
    FIND_YOUR_DEVICE_ANDROID_INSTRUCTION: "Le Wi-Fi de votre appareil mobile se connecte maintenant sur l’appareil. Lorsque vous êtes prêt, cliquez sur Continuer pour lancer les réglages du Wi-Fi de votre téléphone. Sélectionnez <strong>Leviton-XXXX </strong> dans la liste de réseaux disponibles.",
    FIND_YOUR_DEVICE_IOS_INSTRUCTION: "Ensuite, connectez votre nouveau dispositif Leviton au Wi-Fi pour continuer le processus de configuration. Lorsque vous êtes prêt, naviguez aux réglages Wi-Fi de votre téléphone. Une fois le Wi-Fi activé, sélectionnez <strong>Leviton-XXXX</strong> dans la liste de réseaux Wi-Fi disponibles.",
    FINISH: "Terminé",
    FIRMWARE_COMMUNICATION_FAIL: "Il semble que votre appareil mobile et le dispositif Decora Smart sont sur des réseaux différents. <br>Connectez votre appareil mobile sur le même réseau Wi-Fi que celui du dispositif Decora Smart et mettez à jour de nouveau.",
    FIRMWARE_UPDATE: "Mise à jour du microprogramme",
    FIRMWARE_UPDATE_AVAILABLE_MESSAGE: "Une mise à jour du microprogramme est disponible. <br> Assurez-vous que ce dispositif est sur le même réseau Wi-Fi que <strong>{{deviceName}}</strong> et continuez.",
    FIRMWARE_UPDATE_CANCEL_INFO: "La mise à jour du microprogramme a été annulée.",
    FIRMWARE_UPDATE_CANNOT_COMMUNICATE_AFTER_UPDATE: "Le microprogramme de votre dispositif a été mis à jour. Toutefois, nous n’avons pu communiquer avec votre commutateur.",
    FIRMWARE_UPDATE_SUCCESS_INFO: "« La mise à jour de votre microprogramme est réussie »,",
    FIRMWARE_UPDATE_TIME_WARNING: "Ce processus peut prendre quelques minutes.Voulez-vous poursuivre la mise jour maintenant ?",
    FIRMWARE_UPDATING: "Mise à jour",
    FIRSTNAME: "Prénom",
    FORGOT_PASSWORD: "Mot de passe oublié",
    FRIDAY: "Vendredi",
    GENERIC_ERROR: "Une erreur s’est produite.",
    GET_MY_LOCATION: "Obtenir mon emplacement",
    GIVE_ROOM_NAME: "Donner un nom à une pièce",
    HERE: "ici",
    IDENTIFY_DEVICE: "Identifier le dispositif",
    IF_NO_WIFI_NETWORK: "Si vous ne voyez pas votre réseau Wi-Fi dans la liste, essayez",
    INCANDESCENT: "Incandescent",
    INVALID: "invalide",
    INVALID_NAME: "Nom invalide",
    INVALID_RESIDENCE_MESSAGE: "Les renseignements fournis sur votre résidence sont erronés. Veuillez essayer de nouveau.",
    INVALID_RESIDENCE_TITLE: "Résidence invalide",
    INVALID_ROOM: "Pièce invalide",
    IS: "est",
    ITEM_ALREADY_EXISTS: "Le même nom existe déjà pour un dispositif, une scène ou une activité.",
    I_AGREE: "Je consens",
    JOINING_WIFI_NETWORK: "Connexion au réseau Wi-Fi",
    LASTNAME: "Nom de famille",
    LED: "DEL",
    LED_BAR_ALWAYS_OFF: "Barre à DEL toujours éteinte",
    LED_BAR_ALWAYS_ON: "Barre à DEL toujours allumée",
    LED_OFF: "DEL éteinte",
    LED_STAYS_ON_FOR_SECOND: "La barre à DEL reste allumée pendant {{second}} seconde après le changement",
    LED_STAYS_ON_FOR_SECONDS: "La barre à DEL reste allumée pendant {{seconds}} secondes après le changement",
    LOCATION_BASED_FEATURES: "Fonctionnalités selon l’emplacement",
    LOCATION_DETECTED: "Emplacement détecté",
    LOCATION_MORE_INFO: "Avec votre permission, cette application détermine votre emplacement automatiquement. Vous pouvez aussi saisir votre adresse au complet pour votre résidence ou sauter cette étape. Si vous sautez cette étape, les Horaires ne fonctionneront pas tant que vous n’avez pas saisi une adresse pour cette résidence.",
    LOCATION_SERVICE_DISABLED_ERROR: "Le service de localisation est désactivé sur votre appareil mobile. Activez-le et essayez plus tard.",
    LOCATION_UNABLE_TO_DETECT: "Impossible d’obtenir les renseignements de géolocalisation à l’aide de votre appareil. Assurez-vous que votre service de localisation est activé.",
    LOCATOR_MODE: "Mode de localisation",
    LOGIN_ERROR_TITLE: "Erreur de connexion",
    LOGOUT: "Se déconnecter",
    MAKE_SURE_MOBILE_HAS_INTERNET: "Assurez-vous que votre appareil mobile est connecté à Internet pour terminer la configuration.",
    MANUALLY_CONFIG_DEVICES: "appareils configurés manuellement",
    MANUFACTURER: "Fabricant",
    MARK_10: "Mark 10",
    MAX_LEVEL: "niveau maximum",
    MESSAGE: "Message",
    MINUTE_SHORT: "min",
    MIN_LEVEL: "niveau minimum",
    MODEL: "Modèle",
    MONDAY: "Lundi",
    MONTHLY_USAGE: "Utilisation mensuelle",
    MUST_HAVE_SCENE: "Vous devez ajouter une scène pour poursuivre.",
    MUST_SELECT_DEVICE: "Vous devez sélectionner un appareil pour poursuivre.",
    MUST_SELECT_ROOM: "Vous devez sélectionner une pièce pour poursuivre.",
    MY_ACTIVITY: "Mon activité",
    NAME_ACTIVITY_DESCRIPTION: "Donnez un nom à votre activité décrivant sa fonction principale, par ex., « Bonne nuit » ou « Toutes les lumières éteintes ». Vous pouvez le modifier plus tard.",
    NAME_MUST_BE_X_CHAR_LONG: "Le nom doit comprendre au moins {{x}} caractères.",
    NAME_YOUR_ACTIVITY: "Veuillez nommer votre activité",
    NAME_YOUR_ACTIVITY_DESC: "Vous devez donner un nom à votre activité pour poursuivre.",
    NAME_YOUR_DEVICE: "Nommer votre dispositif",
    NEED_MORE_HELP: "Besoin d’aide ?",
    NEW_SCENE: "Nouvelle scène",
    NEW_SCHEDULE: "Nouvel horaire",
    NOT_CONNECTED: "Non connecté",
    NO_ACTIVITY_CARD: "<p> Vous n’avez pas encore d’activité. </p> <p> Une activité facilite le groupement de commandes souvent utilisées afin qu’elles puissent être exécutées en même temps. <p> Par exemple, une activité qui allume et éteint toutes les lampes. </p> <p> Appuyez sur « Ajouter une activité » ci-dessous pour créer une nouvelle activité. </p>",
    NO_ASSIGNED_DEVICES_FOR_ASSIGN: "Vous n’avez pas de dispositifs non affectés. Pour affecter un dispositif à cette pièce, vous devez d’abord le désaffecter de la pièce courante.",
    NO_ASSIGNED_DEVICES_FOR_SCENE: "Vous n’avez pas de dispositifs affectés. Pour créer une scène, vous devez avoir un ou des dispositifs affectés à une pièce.",
    NO_AVAILABLE_DEVICES: "Aucun dispositif disponible",
    NO_AVAILABLE_ROOMS: "Aucune pièce disponible",
    NO_DEVICE: "Aucun dispositif",
    NO_DEVICE_CARD: "<p> Vous n’avez pas encore de dispositif. </p> <p> Ajoutez un dispositif Leviton à contrôler. Ceci peut inclure des modules de contrôle de charge, des commutateurs et des gradateurs de lumière. </p> <p> Une fois les dispositifs ajoutés, vous pouvez les regrouper et les contrôler avec l’horaire, les activités et les pièces. </p> <p> Appuyez sur « Ajouter un dispositif » ci-dessous pour configurer un nouveau dispositif. </p>",
    NO_INTERNET_CONNECTION_MESSAGE: "Connectez-vous à Internet pour ajouter un élément.",
    NO_INTERNET_CONNECTION_TITLE: "Aucune connexion Internet",
    NO_LOGIN_PERMISSION: "Connexion impossible. Autorisation inadéquate.",
    NO_ROOM: "Aucune pièce",
    NO_SCENE: "Aucune scène",
    NO_SCHEDULE_CARD: "<p> Vous n’avez pas encore d’horaire. </p><p> Un horaire facilite l’automatisation d’un dispositif, d’une pièce ou d’une activité.<p>Par exemple, vous pouvez créer un horaire pour allumer ou éteindre les lampes chaque jour à 20 minutes du coucher ou du lever du soleil.</p><p>Appuyez sur « Ajouter un horaire » ci-dessous pour lancer cette fonctionnalité sans pareille.</p>",
    OF_MY_LEVITON: " de My Leviton",
    OK: "Ok",
    PASSWORD: "Mot de passe",
    PASSWORD_RESET_ERROR: "Réinitialisation du mot de passe refusée.",
    PASSWORD_RETYPE: "Saisir à nouveau le mot de passe",
    PERMISSION_ERROR: "Erreur d’autorisation",
    PLEASE_WAIT: "Veuillez patienter...",
    PREP_DEVICE_INSTRUCTIONS: {
      a: "Suivez les instructions d’installation comprises pour installer votre dispositif.",
      b: "Vérifiez si le chiffrement WPA/WPA2 de votre réseau Wi-Fi est activé.",
      c: "Un accès à Internet est nécessaire pour compléter la configuration, vérifiez si l’Internet est disponible sur votre réseau Wi-Fi."
    },
    PREP_DEVICE_SETUP: "Préparation pour la <br> configuration d’un dispositif",
    PRESET_LEVEL: "niveau préréglé",
    PRESET_OPTIONS: "options préréglées",
    PRIVACY_POLICY: "Politique de confidentialité",
    RECONFIGURE_WIRELESS: "Reconfigurer le sans fil",
    REGISTRATION_SUCCESS_INFO: "Veuillez vérifier votre courriel. Nous vous avons envoyé un message pour vérifier votre compte.",
    REGISTRATION_SUCCESS_TITLE: "Merci pour votre inscription !",
    REMEMBER_ME: "Se souvenir de moi",
    REMEMBER_NETWORK_PASSWORD: "Mémoriser mon mot de passe Wi-Fi alors que j’inscris des dispositifs.",
    REMOVE: "Supprimer",
    REMOVE_DEVICE: "Supprimer un dispositif",
    REMOVE_SCENE: "Supprimer un dispositif",
    REMOVE_SCHEDULE: "Supprimer un horaire",
    REMOVE_THIS_DEVICE: "Supprimer ce dispositif",
    REPEAT: "Répéter",
    RESCAN: "scanner à nouveau",
    RESEND_CONFIRMATION: "Envoyer à nouveau une confirmation",
    RESET_PASSWORD: "Réinitialiser le mot de passe",
    RESET_PASSWORD_CHECK_EMAIL: "« Vérifiez votre courriel et suivez les instructions. »",
    RESIDENCE_DELETE_PERMISSION_ERROR: "Vous n’avez pas l’autorisation du propriétaire pour effectuer des changements à cette résidence.",
    RESIDENCE_NAME: "Nom de la résidence",
    RESIDENCE_SETUP_COMPLETE: "La configuration de votre résidence <br> est maintenant terminée !",
    RESIDENCE_UPDATED_INFO: "Votre résidence a été mise à jour.",
    RETURN_TO_PREV_VAL: "Retourner à la valeur précédente",
    ROOM: "Pièce",
    ROOM_DEVICE_REMOVE_PROMPT: "Êtes-vous certain de vouloir supprimer ce dispositif de la pièce actuelle ?",
    ROOM_NO_UNASSIGNED_DEVICE: "Vous n’avez pas de dispositifs non affectés. <br> Pour assigner un dispositif à cette pièce, vous devez d’abord le désaffecter de la pièce courante.",
    ROOM_SCENE_REMOVE_PROMPT: "Êtes-vous certain de vouloir supprimer cette scène de la pièce actuelle ?",
    ROOM_SETUP_AND_CONFIG: "Réglage et configuration de la pièce",
    ROOM_UPDATED_INFO: "L’information de la pièce a été mise à jour.",
    RUN: "Lancer",
    RUN_AT_SUNRISE: "Lancer au lever du soleil",
    RUN_AT_SUNSET: "Lancer au coucher du soleil",
    SATURDAY: "Samedi",
    SAVE: "Enregistrer",
    SAVE_COMPLETE: "Sauvegarder et terminer",
    SCENES: "Scènes",
    SCENE_CREATE_SUCCESS: "Scène créée avec succès.",
    SCENE_NAME: "Nom de la scène",
    SCENE_RUN_PROMPT: "Êtes-vous certain de vouloir lancer cette activité ?",
    SCHEDULES: "Horaires",
    SCHEDULE_NAME: "Nom de l’horaire",
    SCHEDULE_TIME: "Définir une heure",
    SCHEDULING_REQUIRES_LOCATION: "La fonction Horaire de cette application nécessite l’emplacement de votre résidence.",
    SECOND: "seconde",
    SECONDS: "secondes",
    SELECTED_WIFI_DEVICE: "Dispositif Wi-Fi sélectionné",
    SELECT_A_DEVICE: "Sélectionner un dispositif",
    SELECT_A_DEVICE_MESSAGE: "Sélectionnez au moins un dispositif pour continuer.",
    SELECT_A_ROOM: "Sélectionner une pièce",
    SELECT_A_TIME: "Sélectionner une heure",
    SELECT_NETWORK_REQUEST: "Sélectionnez un réseau Wi-Fi désiré pour le commutateur pour l’enregistrer avant de poursuivre.",
    SELECT_OPTION_BELOW: "Sélectionner une option ci-dessous pour continuer :",
    SELECT_ROOM_FOR_DEVICE: "Sélectionner une pièce de la liste. <br> Si vous n’avez pas de pièces configurées, vous pouvez ajouter une nouvelle pièce pour y assigner un dispositif.",
    SELECT_STATE_FOR: "Très bien, maintenant sélectionnez le statut pour",
    SELECT_WIFI_BELOW: "Sélectionnez votre réseau Wi-Fi résidentiel dans la liste ci-dessous.",
    SELECT_WIFI_NETWORK: "Sélectionner un réseau",
    SERIAL: "Numéro de série",
    SETTINGS: "Réglages",
    SETTING_UP_DEVICE_WIRELESS: " Réglage de votre dispositif sans fil",
    SETUP_AN_ACTIVITY: "Configurer une activité",
    SETUP_YOUR_RESIDENCE: "Configurer votre résidence",
    SET_TIME: "Régler l’heure",
    SIGN_IN: "Se connecter",
    SIGN_UP: "S’inscrire",
    SIGN_UP_FOR_ACCOUNT: "S’inscrire à un compte",
    SKIP_FOR_NOW: "Sauter cette étape pour le moment",
    STATE: "État",
    STATUS: "Statut",
    STATUS_LED_ALWAYS_OFF: "DEL de statut toujours allumée",
    STATUS_LED_BEHAVIOUR: "Comportement de DEL de statut",
    STATUS_LED_OFF_WHEN_LOAD_OFF: "DEL de statut allumée lorsque la charge est coupée (par défaut)",
    STATUS_LED_ON_WHEN_LOAD_ON: "DEL de statut allumée lorsque la charge est activée",
    STATUS_MODE: "Mode de statut",
    STEP_1_3: "Étape 1 de 3",
    STEP_1_7: "Étape 1 de 7",
    STEP_2_3: "Étape 2 de 3",
    STEP_2_7: "Étape 2 de 7",
    STEP_3_3: "Étape 3 de 3",
    STEP_3_7: "Étape 3 de 7",
    STEP_4_7: "Étape 4 de 7",
    STEP_5_7: "Étape 5 de 7",
    STEP_6_7: "Étape 6 de 7",
    STEP_7_7: "Étape 7 de 7",
    SUCCESS: "Réussi",
    SUNDAY: "Dimanche",
    SUNRISE: "Lever du soleil",
    SUNSET: "Coucher du soleil",
    SUPPORT: "Assistance",
    SWITCH_SAME_NETWORK_INFO: "Assurez-vous qu’il est allumé et connecté au même réseau Wi-Fi que votre appareil mobile.",
    TERMS_OF_USE: "Conditions d’utilisation",
    THURSDAY: "Jeudi",
    TOO_MANY_LOGIN_ATTEMPTS: 'Le compte a été verrouillé. <br> Veuillez <a href="tel:18002297256">téléphoner</a> pour de l’aide.',
    TROUBLESHOOT_INFO: "Si vous croyez être en mesure de le faire, essayez les étapes 1 à 5. Autrement, contactez votre fournisseur d’accès à Internet.",
    TROUBLESHOOT_NETWORK: "Dépannage <br> de votre réseau",
    TROUBLESHOOT_STEPS: {
      A: "Redémarrer tous les appareils",
      B: "Vérifier d’autres dispositifs",
      C: "Vérifier les connexions physiques",
      D: "Vérifier si l’adresse IP est valide",
      E: "Essayez un utilitaire Ping et retracez son chemin"
    },
    TRY_AGAIN: "Essayer à nouveau",
    TRY_IT: "Essayez-le",
    TUESDAY: "Mardi",
    UNABLE_TO_DOWNLOAD_FIRMWARE: "Impossible de télécharger le tout dernier microprogramme depuis le serveur à ce moment.",
    UNABLE_TO_ENROLL: {
      DESCRIPTION: "Votre appareil Leviton n'a pas pu s'inscrire. <br>Assurez-vous que le bon réseau Wi-Fi et le mot de passe sont entrés."
    },
    UNABLE_TO_LOGIN: "Impossible de se connecter. Vérifiez votre courriel et mot de passe et essayez à nouveau.",
    UNASSIGN: "Désaffecter",
    UNASSIGNED_DEVICES: "Appareils non affectés",
    UNSAVED_CHANGES: "Changements non sauvegardés",
    UNSAVED_CHANGES_MESSAGE: "Voulez-vous supprimer vos changements non sauvegardés ?",
    UNSAVED_DEVICES: "Appareils non sauvegardés",
    UPDATE_FAILED: "Échec de mise à jour",
    UPDATE_FIRMWARE: "Mettre à jour le microprogramme",
    UPDATE_NOW: "Mettre à jour maintenant",
    USER_SPECIFIC_BRIGHTNESS: "Luminosité spécifiée par l’utilisateur",
    US_STATES: "États des États-Unis",
    VALIDATION: {
      RESIDENCE: {
        ADDRESS: {
          EMPTY: "Veuillez saisir l’adresse de votre résidence",
          LENGTH: "Votre adresse doit avoir un minimum de 5 caractères",
          MAX_LENGTH: "Votre adresse ne peut pas contenir plus de 50 caractères."
        },
        CITY: {
          EMPTY: "Veuillez saisir la ville de votre résidence.",
          LENGTH: "",
          MAX_LENGTH: "Votre ville ne peut pas contenir plus de 50 caractères.",
          FORMAT: "La ville doit être seulement des lettres."
        },
        COUNTRY: {
          EMPTY: "Veuillez sélectionner un pays pour votre résidence."
        },
        STATE: {
          EMPTY: "Veuillez saisir l’État/province de votre résidence."
        },
        ZIP_CODE: {
          EMPTY: "Veuillez entrer un code postal valide pour votre résidence.",
          FORMAT: "Le code postal doit être une valeur alphanumérique.",
          LENGTH: "Le code postal doit comporter au moins 3 caractères.",
          MAX_LENGTH: "Votre code postal ne peut pas contenir plus de 50 caractères."
        }
      },
      ROOM: {
        NAME: {
          LENGTH: "Le nom de la pièce doit comporter au moins 4 caractères."
        }
      },
      SCENE: {
        NAME: {
          EMPTY: "Veuillez donner un nom à votre scène.",
          NO_DEVICE: "Veuillez sélectionner au moins un dispositif pour créer une scène."
        }
      }
    },
    VERIFY_DEVICE_HAS_INTERNET: "Veuillez vous assurer qu’il y a un accès à Internet.",
    VERSION_NUMBER: "Numéro de version",
    WAIT_WHILE_DEVICE_ADD: "Veuillez attendre alors que nous ajoutons votre dispositif Leviton à votre My Leviton dans le nuage.",
    WAIT_WHILE_DEVICE_CONFIG: "Veuillez attendre alors que nous configurons votre dispositif sans fil.",
    WAIT_WHILE_DEVICE_JOINS: "Veuillez attendre alors que votre dispositif Leviton se connecte à votre réseau Wi-Fi.",
    WAIT_WHILE_SWITCH_REBOOTS: "Veuillez attendre que votre dispositif redémarre.",
    WEAK_PASSWORD_INFO: "Le mot de passe fourni n’est pas assez puissant.",
    WEAK_PASSWORD_TITLE: "Mot de passe faible",
    WEDNESDAY: "Mercredi",
    WIFI_INVALID_CHAR: "Le mot de passe Wi-Fi ne peut pas comporter de caractères spéciaux (comme &) pour le moment. Veuillez utiliser un mot de passe Wi-Fi différent.",
    WIFI_INVALID_CHAR_TITLE: "Caractères de mot de passe invalides",
    ZIP_CODE: "Code postal",
    ZIP_CODE_REQUIRED: "Code postal (Obligatoire)",
    REMOVE_THIS_RESIDENCE: "Remove this Residence"
  }
}, function(e, t) {
  e.exports = {
    INVALID_NAME: {
      title: "Invalid Name",
      message: "Name must be at least 4 characters long."
    }
  }
}, function(e, t) {
  e.exports = {
    INVALID_ACCEPTED: "Must be accepted. ",
    INVALID_ALPHA: "May only contain letters. ",
    INVALID_ALPHA_SPACE: "May only contain letters and spaces. ",
    INVALID_ALPHA_NUM: "May only contain letters and numbers. ",
    INVALID_ALPHA_NUM_SPACE: "May only contain letters, numbers and spaces. ",
    INVALID_ALPHA_DASH: "May only contain letters, numbers and dashes. ",
    INVALID_ALPHA_DASH_SPACE: "May only contain letters, numbers, dashes and spaces. ",
    INVALID_BETWEEN_CHAR: "Text must be between {0} and {1} characters in length. ",
    INVALID_BETWEEN_NUM: "Needs to be a numeric value, between {0} and {1}. ",
    INVALID_BOOLEAN: "May only contain a true or false value. ",
    INVALID_CREDIT_CARD: "Must be a valid credit card number. ",
    INVALID_DATE_EURO: "Must be a valid date format (dd-mm-yyyy) OR (dd/mm/yyyy). ",
    INVALID_DATE_EURO_BETWEEN: "Needs to be a valid date format (dd-mm-yyyy) OR (dd/mm/yyyy) between {0} and {1}. ",
    INVALID_DATE_EURO_MAX: "Needs to be a valid date format (dd-mm-yyyy) OR (dd/mm/yyyy), equal to, or lower than {0}. ",
    INVALID_DATE_EURO_MIN: "Needs to be a valid date format (dd-mm-yyyy) OR (dd/mm/yyyy), equal to, or higher than {0}. ",
    INVALID_DATE_EURO_LONG: "Must be a valid date format (dd-mm-yyyy) OR (dd/mm/yyyy). ",
    INVALID_DATE_EURO_LONG_BETWEEN: "Needs to be a valid date format (dd-mm-yyyy) OR (dd/mm/yyyy) between {0} and {1}. ",
    INVALID_DATE_EURO_LONG_MAX: "Needs to be a valid date format (dd-mm-yyyy) OR (dd/mm/yyyy), equal to, or lower than {0}. ",
    INVALID_DATE_EURO_LONG_MIN: "Needs to be a valid date format (dd-mm-yyyy) OR (dd/mm/yyyy), equal to, or higher than {0}. ",
    INVALID_DATE_EURO_SHORT: "Must be a valid date format (dd-mm-yy) OR (dd/mm/yy). ",
    INVALID_DATE_EURO_SHORT_BETWEEN: "Needs to be a valid date format (dd-mm-yy) OR (dd/mm/yy) between {0} and {1}. ",
    INVALID_DATE_EURO_SHORT_MAX: "Needs to be a valid date format (dd-mm-yy) OR (dd/mm/yy), equal to, or lower than {0}. ",
    INVALID_DATE_EURO_SHORT_MIN: "Needs to be a valid date format (dd-mm-yy) OR (dd/mm/yy), equal to, or higher than {0}. ",
    INVALID_DATE_ISO: "Must be a valid date format (yyyy-mm-dd). ",
    INVALID_DATE_ISO_BETWEEN: "Needs to be a valid date format (yyyy-mm-dd) between {0} and {1}. ",
    INVALID_DATE_ISO_MAX: "Needs to be a valid date format (yyyy-mm-dd), equal to, or lower than {0}. ",
    INVALID_DATE_ISO_MIN: "Needs to be a valid date format (yyyy-mm-dd), equal to, or higher than {0}. ",
    INVALID_DATE_US: "Must be a valid date format (mm/dd/yyyy) OR (mm-dd-yyyy). ",
    INVALID_DATE_US_BETWEEN: "Needs to be a valid date format (mm/dd/yyyy) OR (mm-dd-yyyy) between {0} and {1}. ",
    INVALID_DATE_US_MAX: "Needs to be a valid date format (mm/dd/yyyy) OR (mm-dd-yyyy), equal to, or lower than {0}. ",
    INVALID_DATE_US_MIN: "Needs to be a valid date format (mm/dd/yyyy) OR (mm-dd-yyyy), equal to, or higher than {0}. ",
    INVALID_DATE_US_LONG: "Must be a valid date format (mm/dd/yyyy) OR (mm-dd-yyyy). ",
    INVALID_DATE_US_LONG_BETWEEN: "Needs to be a valid date format (mm/dd/yyyy) OR (mm-dd-yyyy) between {0} and {1}. ",
    INVALID_DATE_US_LONG_MAX: "Needs to be a valid date format (mm/dd/yyyy) OR (mm-dd-yyyy), equal to, or lower than {0}. ",
    INVALID_DATE_US_LONG_MIN: "Needs to be a valid date format (mm/dd/yyyy) OR (mm-dd-yyyy), equal to, or higher than {0}. ",
    INVALID_DATE_US_SHORT: "Must be a valid date format (mm/dd/yy) OR (mm-dd-yy). ",
    INVALID_DATE_US_SHORT_BETWEEN: "Needs to be a valid date format (mm/dd/yy) OR (mm-dd-yy) between {0} and {1}. ",
    INVALID_DATE_US_SHORT_MAX: "Needs to be a valid date format (mm/dd/yy) OR (mm-dd-yy), equal to, or lower than {0}. ",
    INVALID_DATE_US_SHORT_MIN: "Needs to be a valid date format (mm/dd/yy) OR (mm-dd-yy), equal to, or higher than {0}. ",
    INVALID_DIGITS: "Must be {0} digits. ",
    INVALID_DIGITS_BETWEEN: "Must be between {0} and {1} digits. ",
    INVALID_EMAIL: "Must be a valid email address. ",
    INVALID_EXACT_LEN: "Must have a length of exactly {0} characters. ",
    INVALID_EXACT_NUM: "Must be exactly {0}. ",
    INVALID_FLOAT: "May only contain a positive float value (integer excluded). ",
    INVALID_FLOAT_SIGNED: "May only contain a positive or negative float value (integer excluded). ",
    INVALID_IBAN: "Must be a valid IBAN. ",
    INVALID_IN_LIST: "Must be a choice inside this list: ({0}). ",
    INVALID_INPUT_DIFFERENT: "Field must be different from specified field [{1}]. ",
    INVALID_INPUT_MATCH: "Confirmation field does not match specified field [{1}]. ",
    INVALID_INTEGER: "Must be a positive integer. ",
    INVALID_INTEGER_SIGNED: "Must be a positive or negative integer. ",
    INVALID_IPV4: "Must be a valid IP (IPV4). ",
    INVALID_IPV6: "Must be a valid IP (IPV6). ",
    INVALID_IPV6_HEX: "Must be a valid IP (IPV6 Hex). ",
    INVALID_KEY_CHAR: "Invalid keyboard entry on a field of type 'number'. ",
    INVALID_MAX_CHAR: "May not be greater than {0} characters. ",
    INVALID_MAX_NUM: "Needs to be a numeric value, equal to, or lower than {0}. ",
    INVALID_MIN_CHAR: "Must be at least {0} characters. ",
    INVALID_MIN_NUM: "Needs to be a numeric value, equal to, or higher than {0}. ",
    INVALID_NOT_IN_LIST: "Must be a choice outside this list: ({0}). ",
    INVALID_NUMERIC: "Must be a positive number. ",
    INVALID_NUMERIC_SIGNED: "Must be a positive or negative number. ",
    INVALID_PATTERN: "Must be following this format: {0}. ",
    INVALID_PATTERN_DATA: "Must be following this format {{data}}. ",
    INVALID_PHONE_US: "Must be a valid phone number and must include area code. ",
    INVALID_PHONE_INTERNATIONAL: "Must be a valid international phone number. ",
    INVALID_REQUIRED: "Field is required. ",
    INVALID_URL: "Must be a valid URL. ",
    INVALID_TIME: "Must be a valid time format (hh:mm) OR (hh:mm:ss). ",
    INVALID_CHECKBOX_SELECTED: "Checkbox must be selected. ",
    AREA1: "TextArea: Alphanumeric + Minimum(15) + Required",
    ERRORS: "Errors",
    CHANGE_LANGUAGE: "Change language",
    FORM_PREVALIDATED: "Form is pre-validated",
    INPUT1: "Remote validation - Type 'abc' for a valid answer ",
    INPUT2: "Number positive or negative -- input type='number' -- Error on non-numeric characters ",
    INPUT3: "Floating number range (integer excluded) -- between_num:x,y OR min_num:x|max_num:y ",
    INPUT4: "Multiple Validations + Custom Regex of Date Code (YYWW)",
    INPUT5: "Email",
    INPUT6: "URL",
    INPUT7: "IP (IPV4)",
    INPUT8: "Credit Card",
    INPUT9: "Between(2,6) Characters",
    INPUT10: "Date ISO (yyyy-mm-dd)",
    INPUT11: "Date US LONG (mm/dd/yyyy)",
    INPUT12: "Time (hh:mm OR hh:mm:ss) -- NOT Required",
    INPUT13: "AlphaDashSpaces + Required + Minimum(5) Characters -- MUST USE: validation-error-to=' '",
    INPUT14: "Alphanumeric + Required -- NG-DISABLED",
    INPUT15: "Password",
    INPUT16: "Password Confirmation",
    INPUT17: "Different Password",
    INPUT18: "Alphanumeric + Exactly(3) + Required  -- debounce(3sec)",
    INPUT19: "Date ISO (yyyy-mm-dd) -- minimum condition >= 2001-01-01 ",
    INPUT20: "Date US SHORT (mm/dd/yy) -- between the dates 12/01/99 and 12/31/15",
    INPUT21: "Choice IN this list (banana,orange,ice cream,sweet & sour)",
    FIRST_NAME: "First Name",
    LAST_NAME: "Last Name",
    RESET_FORM: "Reset Form",
    SAVE: "Save",
    SELECT1: "Required (select) -- validation with (blur) EVENT",
    SHOW_VALIDATION_SUMMARY: "Show Validation Summary",
    ROOM_NAME_REQUIRED: "Please provide a name to your room.",
    ROOM_NAME_MINIMUM: "Room name should be minimum 4 characters."
  }
}, function(e, t) {
  e.exports = {
    INVALID_ACCEPTED: "Debe ser aceptado. ",
    INVALID_ALPHA: "Únicamente puede contener letras. ",
    INVALID_ALPHA_SPACE: "Únicamente puede contener letras y espacios. ",
    INVALID_ALPHA_NUM: "Únicamente puede contener letras y números. ",
    INVALID_ALPHA_NUM_SPACE: "Únicamente puede contener letras, números y espacios. ",
    INVALID_ALPHA_DASH: "Únicamente puede contener letras, números y guiones. ",
    INVALID_ALPHA_DASH_SPACE: "Únicamente puede contener letras, números, guiones y espacios. ",
    INVALID_BETWEEN_CHAR: "El número de caracteres debe estar entre {0} y {1}. ",
    INVALID_BETWEEN_NUM: "El valor debe ser númerico y debe estar entre {0} y {1}. ",
    INVALID_BOOLEAN: "Únicamente debe ser verdadero ó falso. ",
    INVALID_CREDIT_CARD: "Debe contener un número de tarjeta de crédito válido. ",
    INVALID_DATE_EURO: "Debe contener una fecha válida con formato (dd-mm-yyyy) ó (dd/mm/yyyy). ",
    INVALID_DATE_EURO_BETWEEN: "Debe contener una fecha válida entre {0} y {1} con formato (dd-mm-yyyy) ó (dd/mm/yyyy). ",
    INVALID_DATE_EURO_MAX: "Debe contener una fecha válida igual ó menor que {0} con formato (dd-mm-yyyy) ó (dd/mm/yyyy). ",
    INVALID_DATE_EURO_MIN: "Debe contener una fecha válida igual ó mayor que {0} con formato (dd-mm-yyyy) ó (dd/mm/yyyy). ",
    INVALID_DATE_EURO_LONG: "Debe contener una fecha válida con formato (dd-mm-yyyy) ó (dd/mm/yyyy). ",
    INVALID_DATE_EURO_LONG_BETWEEN: "Debe contener una fecha válida entre {0} y {1} con formato (dd-mm-yyyy) ó (dd/mm/yyyy). ",
    INVALID_DATE_EURO_LONG_MAX: "Debe contener una fecha válida igual ó menor que {0} con formato (dd-mm-yyyy) ó (dd/mm/yyyy). ",
    INVALID_DATE_EURO_LONG_MIN: "Debe contener una fecha válida igual ó mayor que {0} con formato (dd-mm-yyyy) ó (dd/mm/yyyy). ",
    INVALID_DATE_EURO_SHORT: "Debe contener una fecha válida con formato (dd-mm-yy) o (dd/mm/yy). ",
    INVALID_DATE_EURO_SHORT_BETWEEN: "Debe contener una fecha válida entre {0} y {1} con formato (dd-mm-yy) o (dd/mm/yy). ",
    INVALID_DATE_EURO_SHORT_MAX: "Debe contener una fecha válida igual ó menor que {0} con formato (dd-mm-yy) ó (dd/mm/yy). ",
    INVALID_DATE_EURO_SHORT_MIN: "Debe contener una fecha válida igual ó mayor que {0} con formato (dd-mm-yy) ó (dd/mm/yy). ",
    INVALID_DATE_ISO: "Debe contener una fecha válida con formato (yyyy-mm-dd). ",
    INVALID_DATE_ISO_BETWEEN: "Debe contener una fecha válida entre {0} y {1} con formato (yyyy-mm-dd). ",
    INVALID_DATE_ISO_MAX: "Debe contener una fecha válida igual ó menor que {0} con formato (yyyy-mm-dd). ",
    INVALID_DATE_ISO_MIN: "Debe contener una fecha válida igual ó mayor que {0} con formato (yyyy-mm-dd). ",
    INVALID_DATE_US: "Debe contener una fecha válida con formato (mm/dd/yyyy) ó (mm-dd-yyyy). ",
    INVALID_DATE_US_BETWEEN: "Debe contener una fecha válida entre {0} y {1} con formato (mm/dd/yyyy) ó (mm/dd/yyyy). ",
    INVALID_DATE_US_MAX: "Debe contener una fecha válida igual ó menor que {0} con formato (mm/dd/yyyy) ó (mm/dd/yyyy). ",
    INVALID_DATE_US_MIN: "Debe contener una fecha válida igual ó mayor que {0} con formato (mm/dd/yyyy) ó (mm/dd/yyyy). ",
    INVALID_DATE_US_LONG: "Debe contener una fecha válida con formato (mm/dd/yyyy) ó (mm-dd-yyyy). ",
    INVALID_DATE_US_LONG_BETWEEN: "Debe contener una fecha válida entre {0} y {1} con formato (mm/dd/yyyy) ó (mm/dd/yyyy). ",
    INVALID_DATE_US_LONG_MAX: "Debe contener una fecha válida igual ó menor que {0} con formato (mm/dd/yyyy) ó (mm/dd/yyyy). ",
    INVALID_DATE_US_LONG_MIN: "Debe contener una fecha válida igual ó mayor que {0} con formato (mm/dd/yyyy) ó (mm/dd/yyyy). ",
    INVALID_DATE_US_SHORT: "Debe contener una fecha válida con formato (mm/dd/yy) ó (mm-dd-yy). ",
    INVALID_DATE_US_SHORT_BETWEEN: "Debe contener una fecha válida entre {0} y {1} con formato (mm/dd/yy) ó (mm/dd/yy). ",
    INVALID_DATE_US_SHORT_MAX: "Debe contener una fecha válida igual ó menor que {0} con formato (mm/dd/yy) ó (mm/dd/yy). ",
    INVALID_DATE_US_SHORT_MIN: "Debe contener una fecha válida igual ó mayor que {0} con formato (mm/dd/yy) ó (mm/dd/yy). ",
    INVALID_DIGITS: "Debe tener {0} dígitos. ",
    INVALID_DIGITS_BETWEEN: "Debe tener entre {0} y {1} dígitos. ",
    INVALID_EMAIL: "Debe contener una dirección de correo electrónico válida. ",
    INVALID_EXACT_LEN: "Debe contener exactamente {0} caracteres. ",
    INVALID_EXACT_NUM: "Debe ser exactamente {0}. ",
    INVALID_FLOAT: "Debe contener un número decimal positivo (Los números enteros no son válidos). ",
    INVALID_FLOAT_SIGNED: "Debe contener un número decimal positivo ó negativo (Los números enteros no son válidos). ",
    INVALID_IBAN: "Debe contener un IBAN válido. ",
    INVALID_IN_LIST: "Debe ser una opción dentro de esta lista: ({0}). ",
    INVALID_INPUT_DIFFERENT: "El campo debe ser diferente del campo [{1}] especificado. ",
    INVALID_INPUT_MATCH: "El campo de confirmación no coincide con el texto especificado en [{1}]. ",
    INVALID_INTEGER: "Debe contener un número entero positivo. ",
    INVALID_INTEGER_SIGNED: "Debe contener un número entero positivo ó negativo. ",
    INVALID_IPV4: "Debe contener una dirección IP válida (IPV4). ",
    INVALID_IPV6: "Debe contener una dirección IP válida (IPV6). ",
    INVALID_IPV6_HEX: "Debe contener una dirección IP válida (IPV6 Hex). ",
    INVALID_KEY_CHAR: "Entrada de teclado no válida en un campo de tipo 'number'. ",
    INVALID_MAX_CHAR: "No puede contener más de {0} caracteres. ",
    INVALID_MAX_NUM: "Debe contener un valor númerico igual o menor que {0}. ",
    INVALID_MIN_CHAR: "Debe contener al menos {0} caracteres. ",
    INVALID_MIN_NUM: "Debe contener un valor númerico igual o mayor que {0}. ",
    INVALID_NOT_IN_LIST: "Debe ser una elección fuera de esta lista: ({0}). ",
    INVALID_NUMERIC: "Debe contener un valor númerico positivo. ",
    INVALID_NUMERIC_SIGNED: "Debe contener un valor númerico positivo ó negativo. ",
    INVALID_PATTERN: "Debe contener un texto con el formato: {0}. ",
    INVALID_PATTERN_DATA: "Debe contener un texto con el formato {{data}}. ",
    INVALID_PHONE_US: "Debe ser un número de teléfono válido y debe incluir el código de área. ",
    INVALID_PHONE_INTERNATIONAL: "Debe ser un número de teléfono internacional válida. ",
    INVALID_REQUIRED: "Campo requerido. ",
    INVALID_URL: "Debe contener una dirección URL válida. ",
    INVALID_TIME: "Debe contener un formato de tiempo válido (hh:mm) ó (hh:mm:ss). ",
    INVALID_CHECKBOX_SELECTED: "La casilla de verificación debe ser seleccionada. ",
    AREA1: "Area de texto: Alfanumérica + Mínimo(15) + Requerido",
    ERRORS: "Errores",
    CHANGE_LANGUAGE: "Cambiar idioma",
    FORM_PREVALIDATED: "El formulario es pre-validado",
    INPUT1: "Validación Remota - Escriba 'abc' para una respuesta válida ",
    INPUT2: "Número positivo o negativo -- input type='number' -- Error o caracteres no númericos ",
    INPUT3: "Rango decimal (Los números enteros no son válidos) -- between_num:x,y ó min_num:x|max_num:y ",
    INPUT4: "Multiples validaciones + Código de fecha personalizado (YYWW)",
    INPUT5: "Email",
    INPUT6: "URL",
    INPUT7: "IP (IPV4)",
    INPUT8: "Tarjeta de cédito",
    INPUT9: "Entre(2,6) caracteres",
    INPUT10: "Fecha formato ISO (yyyy-mm-dd)",
    INPUT11: "Fecha formato US largo (mm/dd/yyyy)",
    INPUT12: "Tiempo (hh:mm ó hh:mm:ss) -- No Requerido",
    INPUT13: "AlphaDashSpaces + Requerido + Mínimo(5) Caracteres -- Deben ser: validation-error-to=' '",
    INPUT14: "Alfanumérico + Requerido -- NG-DISABLED",
    INPUT15: "Contraseña",
    INPUT16: "Confirmación de Contraseña",
    INPUT17: "La contraseña no coincide",
    INPUT18: "Alfanúmerico + Exactamente(3) + Requerido  -- debounce(3sec)",
    INPUT19: "Fecha formato ISO (yyyy-mm-dd) -- Condición mínima >= 2001-01-01 ",
    INPUT20: "Fecha formato US corto (mm/dd/yy) -- entre las fechas 12/01/99 y 12/31/15",
    INPUT21: "Elección en esta lista (banana,orange,ice cream,sweet & sour)",
    FIRST_NAME: "Nombre",
    LAST_NAME: "Apellido",
    RESET_FORM: "Cambiar el formulario",
    SAVE: "Guardar",
    SELECT1: "Requerido (select) -- validación con (blur) EVENT",
    SHOW_VALIDATION_SUMMARY: "Mostrar el resumen de validación"
  }
}, function(e, t) {
  e.exports = {
    INVALID_ACCEPTED: "Doit être accepté. ",
    INVALID_ALPHA: "Ne doit contenir que des lettres. ",
    INVALID_ALPHA_SPACE: "Ne doit contenir que des lettres et espaces. ",
    INVALID_ALPHA_NUM: "Ne doit contenir que des lettres et nombres. ",
    INVALID_ALPHA_NUM_SPACE: "Ne doit contenir que des lettres, nombres et espaces. ",
    INVALID_ALPHA_DASH: "Ne doit contenir que des lettres, nombres et des tirets. ",
    INVALID_ALPHA_DASH_SPACE: "Ne doit contenir que des lettres, nombres, tirets et espaces. ",
    INVALID_BETWEEN_CHAR: "Le texte doit être entre {0} et {1} caractères de longueur. ",
    INVALID_BETWEEN_NUM: "Doit être une valeur numérique, entre {0} et {1}. ",
    INVALID_BOOLEAN: "Doit contenir qu'une valeur vraie ou fausse. ",
    INVALID_CREDIT_CARD: "Doit être un numéro de carte de crédit valide. ",
    INVALID_DATE_EURO: "Doit être un format de date valide (jj-mm-aaaa) OU (jj/mm/aaaa). ",
    INVALID_DATE_EURO_BETWEEN: "Doit être un format de date valide (jj-mm-aaaa) OU (jj/mm/aaaa) entre {0} et {1}. ",
    INVALID_DATE_EURO_MAX: "Doit être une date valide (jj-mm-aaaa) OU (jj/mm/aaaa), égale ou inférieure à {0}. ",
    INVALID_DATE_EURO_MIN: "Doit être une date valide (jj-mm-aaaa) OU (jj/mm/aaaa), égale ou supérieure à {0}. ",
    INVALID_DATE_EURO_LONG: "Doit être un format de date valide (jj-mm-aaaa) OU (jj/mm/aaaa). ",
    INVALID_DATE_EURO_LONG_BETWEEN: "Doit être un format de date valide (jj-mm-aaaa) OU (jj/mm/aaaa) entre {0} et {1}. ",
    INVALID_DATE_EURO_LONG_MAX: "Doit être une date valide (jj-mm-aaaa) OU (jj/mm/aaaa), égale ou inférieure à {0}. ",
    INVALID_DATE_EURO_LONG_MIN: "Doit être une date valide (jj-mm-aaaa) OU (jj/mm/aaaa), égale ou supérieure à {0}. ",
    INVALID_DATE_EURO_SHORT: "Doit être un format de date valide (jj-mm-aa) OU (jj/mm/aa). ",
    INVALID_DATE_EURO_SHORT_BETWEEN: "Doit être un format de date valide (jj-mm-aa) OU (jj/mm/aa) entre {0} et {1}. ",
    INVALID_DATE_EURO_SHORT_MAX: "Doit être une date valide (jj-mm-aa) OU (jj/mm/aa), égale ou inférieure à {0}. ",
    INVALID_DATE_EURO_SHORT_MIN: "Doit être une date valide (jj-mm-aa) OU (jj/mm/aa), égale ou supérieure à {0}. ",
    INVALID_DATE_ISO: "Doit être un format de date valide (aaaa-mm-jj). ",
    INVALID_DATE_ISO_BETWEEN: "Doit être un format de date valide (aaaa-mm-jj) entre {0} et {1}. ",
    INVALID_DATE_ISO_MAX: "Doit être une date valide (aaaa-mm-jj), égale ou inférieure à {0}. ",
    INVALID_DATE_ISO_MIN: "Doit être une date valide (aaaa-mm-jj), égale ou supérieure à {0}. ",
    INVALID_DATE_US: "Doit être un format de date valide (mm/jj/aaaa) OU (mm-jj-aaaa). ",
    INVALID_DATE_US_BETWEEN: "Doit être un format de date valide (mm/jj/aaaa) OU (mm-jj-aaaa) entre {0} et {1}. ",
    INVALID_DATE_US_MAX: "Doit être une date valide (mm/jj/aaaa) OU (mm-jj-aaaa), égale ou inférieure à {0}. ",
    INVALID_DATE_US_MIN: "Doit être une date valide (mm/jj/aaaa) OU (mm-jj-aaaa), égale ou supérieure à {0}. ",
    INVALID_DATE_US_LONG: "Doit être un format de date valide (mm/jj/aaaa) OU (mm-jj-aaaa). ",
    INVALID_DATE_US_LONG_BETWEEN: "Doit être un format de date valide (mm/jj/aaaa) OU (mm-jj-aaaa) entre {0} et {1}. ",
    INVALID_DATE_US_LONG_MAX: "Doit être une date valide (mm/jj/aaaa) OU (mm-jj-aaaa), égale ou inférieure à {0}. ",
    INVALID_DATE_US_LONG_MIN: "Doit être une date valide (mm/jj/aaaa) OU (mm-jj-aaaa), égale ou supérieure à {0}. ",
    INVALID_DATE_US_SHORT: "Doit être un format de date valide (mm/jj/aa) OU (mm-jj-aa). ",
    INVALID_DATE_US_SHORT_BETWEEN: "Doit être un format de date valide (mm/jj/aa) OU (mm-jj-aa) entre {0} et {1}. ",
    INVALID_DATE_US_SHORT_MAX: "Doit être une date valide (mm/jj/aa) OU (mm-jj-aa), égale ou inférieure à {0}. ",
    INVALID_DATE_US_SHORT_MIN: "Doit être une date valide (mm/jj/aa) OU (mm-jj-aa), égale ou supérieure à {0}. ",
    INVALID_DIGITS: "Doit être {0} chiffres. ",
    INVALID_DIGITS_BETWEEN: "Doit être entre {0} et {1} chiffres. ",
    INVALID_EMAIL: "Doit être une adresse courriel valide. ",
    INVALID_EXACT_LEN: "Doit être d'une longueur fixe de {0} caractères. ",
    INVALID_EXACT_NUM: "Doit être exactement {0}. ",
    INVALID_FLOAT: "Doit être obligatoirement un nombre flottant positif (nombre entier exclu). ",
    INVALID_FLOAT_SIGNED: "Doit être obligatoirement un nombre flottant positif ou négatif (nombre entier exclu). ",
    INVALID_IBAN: "Doit être un IBAN valide. ",
    INVALID_IN_LIST: "Doit être un choix dans cette liste: ({0}). ",
    INVALID_INPUT_DIFFERENT: "Le champ doit être différente du champ spécifié [{1}]. ",
    INVALID_INPUT_MATCH: "Le champ de confirmation ne correspond pas au champs spécifié [{1}]. ",
    INVALID_INTEGER: "Doit être un nombre entier positif. ",
    INVALID_INTEGER_SIGNED: "Doit être un nombre entier positif ou négatif. ",
    INVALID_IPV4: "Doit être un IP valide (IPV4). ",
    INVALID_IPV6: "Doit être un IP valide (IPV6). ",
    INVALID_IPV6_HEX: "Doit être un IP valide (IPV6 Hex). ",
    INVALID_KEY_CHAR: "Entrée clavier invalide sur un champs de type 'nombre'. ",
    INVALID_MAX_CHAR: "Doit être plus petit que {0} caractères. ",
    INVALID_MAX_NUM: "Doit être une valeur numérique, égale ou inférieure à {0}. ",
    INVALID_MIN_CHAR: "Doit avoir au moins {0} caractères. ",
    INVALID_MIN_NUM: "Doit être une valeur numérique, égale ou supérieure à {0}. ",
    INVALID_NOT_IN_LIST: "Doit être un choix en dehors de cette liste: ({0}). ",
    INVALID_NUMERIC: "Doit être un nombre positif. ",
    INVALID_NUMERIC_SIGNED: "Doit être un nombre positif ou négatif. ",
    INVALID_PATTERN: "Doit suivre le format: {0}. ",
    INVALID_PATTERN_DATA: "Doit suivre le format {{data}}. ",
    INVALID_PHONE_US: "Doit être un numéro de téléphone valide et doit inclure le code régional. ",
    INVALID_PHONE_INTERNATIONAL: "Doit être un numéro de téléphone international valide. ",
    INVALID_REQUIRED: "Le champ est requis. ",
    INVALID_URL: "Doit être un URL valide. ",
    INVALID_TIME: "Doit être un format de temps valide (hh:mm) OU (hh:mm:ss). ",
    INVALID_CHECKBOX_SELECTED: "La case à cocher doit être sélectionnée. ",
    AREA1: "TextArea: Alphanumérique + Minimum(15) + Required",
    ERRORS: "Erreurs",
    CHANGE_LANGUAGE: "Changer de langue",
    FORM_PREVALIDATED: "Formulaire est pré-validé",
    INPUT1: "Validation à Distance - Taper 'abc' pour une réponse valide ",
    INPUT2: "Nombre positif ou négatif -- input type='number' -- Erreur sur caractères non-numérique",
    INPUT3: "Intervalle de Nombre Flottant (entier exclu) -- between_num:x,y OU min_num:x|max_num:y",
    INPUT4: "Multiple Validations + Regex Personnalisé d'un Code Date (AASS)",
    INPUT5: "Courriel",
    INPUT6: "URL",
    INPUT7: "IP (IPV4)",
    INPUT8: "Carte de Crédit",
    INPUT9: "Entre(2,6) Caractères",
    INPUT10: "Date ISO (aaaa-mm-jj)",
    INPUT11: "Date US LONG (mm/jj/aaaa)",
    INPUT12: "Time (hh:mm OU hh:mm:ss)  -- NON Requis",
    INPUT13: "AlphaDashSpaces + Requis + Minimum(5) Caractères -- DOIT UTILISER: validation-error-to=' '",
    INPUT14: "Alphanumérique + Requis -- NG-DISABLED",
    INPUT15: "Mot de Passe",
    INPUT16: "Mot de Passe (Confirmation)",
    INPUT17: "Different Mot de Passe",
    INPUT18: "Alphanumérique + Exactement(3) + Requis  -- debounce(3sec)",
    INPUT19: "Date ISO (aaaa-mm-jj ) -- condition minimal >= 2001-01-01 ",
    INPUT20: "Date US COURT (mm/jj/aa) -- entre les dates 12/01/99 et 12/31/15",
    INPUT21: "Choix dans cette liste (banana,orange,ice cream,sweet & sour)",
    FIRST_NAME: "Prénom",
    LAST_NAME: "Nom de Famille",
    RESET_FORM: "Réinitialisation le formulaire",
    SAVE: "Sauvegarder",
    SELECT1: "Requis (select) -- validation avec EVENT (blur)",
    SHOW_VALIDATION_SUMMARY: "Afficher le Résumé de Validation"
  }
}, function(e, t) {
  e.exports = [{
    value: "AC 1"
  }, {
    value: "AC 2"
  }, {
    value: "Attic 1"
  }, {
    value: "Attic 2"
  }, {
    value: "Bath 1 GFCI"
  }, {
    value: "Bath 1 Lights"
  }, {
    value: "Bath 2 Lights"
  }, {
    value: "Bath 3 Lights"
  }, {
    value: "Bath 1 Outlets"
  }, {
    value: "Bath 2 GFCI"
  }, {
    value: "Bath 2 Outlets"
  }, {
    value: "Bath 3 GFCI"
  }, {
    value: "Bath 3 Outlets"
  }, {
    value: "Bedroom 1"
  }, {
    value: "Bedroom 2"
  }, {
    value: "Bedroom 3"
  }, {
    value: "Bedroom 4"
  }, {
    value: "Compactor"
  }, {
    value: "Computer"
  }, {
    value: "Den"
  }, {
    value: "Dining Room"
  }, {
    value: "Dishwasher"
  }, {
    value: "Disposal"
  }, {
    value: "Entry Foyer"
  }, {
    value: "Family Room"
  }, {
    value: "Freezer"
  }, {
    value: "Gaming"
  }, {
    value: "Garage"
  }, {
    value: "Garbage Disposal"
  }, {
    value: "GFCI"
  }, {
    value: "Heater"
  }, {
    value: "Heating 1"
  }, {
    value: "Heating 2"
  }, {
    value: "Home Entertainment"
  }, {
    value: "Kitchen Lights"
  }, {
    value: "Kitchen Outlets"
  }, {
    value: "Lights"
  }, {
    value: "Living Room"
  }, {
    value: "Main"
  }, {
    value: "Master Bedroom"
  }, {
    value: "Microwave"
  }, {
    value: "Outlets"
  }, {
    value: "Oven 1"
  }, {
    value: "Oven 2"
  }, {
    value: "Range"
  }, {
    value: "Refrigerator"
  }, {
    value: "Rec Room"
  }, {
    value: "Security"
  }, {
    value: "Smoke Detector"
  }]
}]);
