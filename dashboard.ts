/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as AccUtils from "../accUtils";
import * as ko from "knockout";
import ArrayDataProvider = require('ojs/ojarraydataprovider');
import "oj-c/input-text";
import 'oj-c/input-number';
import "ojs/ojknockout";
import 'oj-c/form-layout';
import 'oj-c/input-password';
import 'oj-c/radioset';
import 'oj-c/button';
import 'ojs/ojlabelvalue';
import 'ojs/ojlabel';
import 'oj-c/checkbox';
import "oj-c/menu-button";
import 'ojs/ojprogress-bar';
import 'oj-c/select-single';
import 'oj-c/input-date-text';



import { MenuItems, MenuSelection, CMenuButtonElement } from 'oj-c/menu-button';



type DataType = {
  value: string;
  label: string;
};

class DashboardViewModel {
  readonly indeterminate = ko.observableArray();
  username : ko.Observable<string>;
  date : ko.Observable<Date> | ko.Observable<any>;
  age : ko.Observable<number> | ko.Observable<any>;
  currentColor: ko.Observable<string>;
  colorOptions: Array<{ value: string; label: string }>;
  browsersDP: ArrayDataProvider<string, DataType>;
  private readonly step = ko.observable(0);
    readonly progressValue = ko.pureComputed(() => {
      return Math.min(this.step(), 100);
    });
  

  //browsersDP: ko.Observable<ArrayDataProvider<Object, Object>>;
   constructor(){
    this.username = ko.observable("");
    this.age = ko.observable(null);
    this.date = ko.observable(null)
    this.currentColor = ko.observable("Male");
      this.colorOptions = [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" },
      ];
      let browsers = [
        { value: 'indian', label: 'Indian' },
        { value: 'nri', label: 'NRI' },
        { value: 'other', label: 'Other' }
      ];
      this.browsersDP = new ArrayDataProvider(browsers, {
        keyAttributes: 'value'
      });
      this.progressValue.subscribe((newValue: number) => {
        if (newValue === 100) {
          let loadingRegion = document.getElementById('loadingRegion');

        }
      });

      window.setInterval(() => {
        this.step((this.step() + 1) % 200);
      }, 30);

   }
  
  
}

export = DashboardViewModel;
