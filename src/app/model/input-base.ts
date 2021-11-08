export class InputBase<T> {
    field: string;
    label: string;
    type: string;
    hidden: string;
    mandatory: boolean;

    constructor(options: {
        value?: T;
        field?: string;
        label?: string;
        type?: string;
        hidden?: string;
        mandatory?: boolean;
      } = {}) {
      this.field = options.field || '';
      this.label = options.label || '';
      this.type = options.type ||'';
      this.hidden = options.hidden || '';
      this.mandatory = !!options.mandatory;
    }
}