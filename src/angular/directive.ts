
//export type restrict = "E" | "A" | "C" | "M";

interface IDirective {
  name: string;
  restrict?: string;
  priority?: number;
  terminal?: boolean;
  template: string;
  replace?: boolean;
  transclude?: boolean | string;
  scope?: boolean | any;
  require?: any;
  controller?: any;
  link?: any;
  compile?: any;
}

class Directive implements IDirective {
  name: string;
  restrict?: string;
  priority?: number;
  terminal?: boolean;
  template: string;
  replace?: boolean;
  transclude?: string | boolean;
  scope?: any;
  require?: any;
  controller?: any;
  link?: any;
  compile?: any;

  constructor() {
    this.restrict = "A";
    this.require = [];

  }
}

class Button extends Directive {

  constructor() {
    super();
    this.name = "widgetsButton";
    this.template = "<div>test</div>"
  }
}

class Angular {
  ngModule: any;

  constructor(ngModule) {
    this.ngModule = ngModule;
  }

  createDirective(directive: IDirective) {
    this.ngModule.directive(directive.name, [...directive.require, function () {
      return directive;
    }])
  }
}