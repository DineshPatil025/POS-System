import { Directive, ElementRef, HostListener, Renderer2,Input,TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appProdTooTip]'
})
export class ProdTooTipDirective {


  @Input('prodtoolTipTemplate') prodtoolTipTemplate !: TemplateRef<any>
  constructor(private _eleRef: ElementRef, private _renderer: Renderer2, private _viewContRef : ViewContainerRef) { }

  createToolTip() {
      const tooltip = this._renderer.createElement('div');
      this._renderer.addClass(tooltip,'prodToolTip');
      this._renderer.setStyle(tooltip,'position','absolute')
      const viewref = this._viewContRef.createEmbeddedView(this.prodtoolTipTemplate)
      viewref.detectChanges();
      const toolTipContent = viewref.rootNodes[0];
      this._renderer.appendChild(tooltip,toolTipContent);
      this._renderer.appendChild(this._eleRef.nativeElement,tooltip)
  }

  @HostListener('mouseover')
  onMouseOver() {
    
    this.createToolTip()

  }

  @HostListener('mouseout')
  onMouseOut() {

    const toolTip = this._eleRef.nativeElement.querySelector('.prodToolTip')
    this._renderer.removeChild(this._eleRef.nativeElement, toolTip)
    
  }

}
