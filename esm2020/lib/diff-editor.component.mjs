import { Component, Inject, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import { BaseEditor } from './base-editor';
import { NGX_MONACO_EDITOR_CONFIG } from './config';
import * as i0 from "@angular/core";
export class DiffEditorComponent extends BaseEditor {
    constructor(editorConfig) {
        super(editorConfig);
        this.editorConfig = editorConfig;
    }
    set options(options) {
        this._options = Object.assign({}, this.config.defaultOptions, options);
        if (this._editor) {
            this._editor.dispose();
            this.initMonaco(options);
        }
    }
    get options() {
        return this._options;
    }
    set originalModel(model) {
        this._originalModel = model;
        if (this._editor) {
            this._editor.dispose();
            this.initMonaco(this.options);
        }
    }
    set modifiedModel(model) {
        this._modifiedModel = model;
        if (this._editor) {
            this._editor.dispose();
            this.initMonaco(this.options);
        }
    }
    initMonaco(options) {
        if (!this._originalModel || !this._modifiedModel) {
            throw new Error('originalModel or modifiedModel not found for ngx-monaco-diff-editor');
        }
        this._originalModel.language = this._originalModel.language || options.language;
        this._modifiedModel.language = this._modifiedModel.language || options.language;
        let originalModel = monaco.editor.createModel(this._originalModel.code, this._originalModel.language);
        let modifiedModel = monaco.editor.createModel(this._modifiedModel.code, this._modifiedModel.language);
        this._editorContainer.nativeElement.innerHTML = '';
        const theme = options.theme;
        this._editor = monaco.editor.createDiffEditor(this._editorContainer.nativeElement, options);
        options.theme = theme;
        this._editor.setModel({
            original: originalModel,
            modified: modifiedModel
        });
        // refresh layout on resize event.
        if (this._windowResizeSubscription) {
            this._windowResizeSubscription.unsubscribe();
        }
        this._windowResizeSubscription = fromEvent(window, 'resize').subscribe(() => this._editor.layout());
        this.onInit.emit(this._editor);
    }
}
DiffEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: DiffEditorComponent, deps: [{ token: NGX_MONACO_EDITOR_CONFIG }], target: i0.ɵɵFactoryTarget.Component });
DiffEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.9", type: DiffEditorComponent, selector: "ngx-monaco-diff-editor", inputs: { options: "options", originalModel: "originalModel", modifiedModel: "modifiedModel" }, usesInheritance: true, ngImport: i0, template: '<div class="editor-container" #editorContainer></div>', isInline: true, styles: [":host{display:block;height:200px}.editor-container{width:100%;height:98%}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.9", ngImport: i0, type: DiffEditorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-monaco-diff-editor', template: '<div class="editor-container" #editorContainer></div>', styles: [":host{display:block;height:200px}.editor-container{width:100%;height:98%}\n"] }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [NGX_MONACO_EDITOR_CONFIG]
                }] }]; }, propDecorators: { options: [{
                type: Input,
                args: ['options']
            }], originalModel: [{
                type: Input,
                args: ['originalModel']
            }], modifiedModel: [{
                type: Input,
                args: ['modifiedModel']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZWRpdG9yL3NyYy9saWIvZGlmZi1lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWpDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUF5QixNQUFNLFVBQVUsQ0FBQzs7QUFvQjNFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxVQUFVO0lBb0NqRCxZQUFzRCxZQUFtQztRQUN2RixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFEZ0MsaUJBQVksR0FBWixZQUFZLENBQXVCO0lBRXpGLENBQUM7SUFqQ0QsSUFDSSxPQUFPLENBQUMsT0FBWTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUNJLGFBQWEsQ0FBQyxLQUFzQjtRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRCxJQUNJLGFBQWEsQ0FBQyxLQUFzQjtRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFNUyxVQUFVLENBQUMsT0FBWTtRQUUvQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDaEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxxRUFBcUUsQ0FBQyxDQUFDO1NBQ3hGO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUNoRixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRWhGLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEcsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV0RyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkQsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1RixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUNwQixRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsYUFBYTtTQUN4QixDQUFDLENBQUM7UUFFSCxrQ0FBa0M7UUFDbEMsSUFBSSxJQUFJLENBQUMseUJBQXlCLEVBQUU7WUFDbEMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlDO1FBQ0QsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNwRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Z0hBbkVVLG1CQUFtQixrQkFvQ1Ysd0JBQXdCO29HQXBDakMsbUJBQW1CLHFMQWJwQix1REFBdUQ7MkZBYXRELG1CQUFtQjtrQkFmL0IsU0FBUzsrQkFDRSx3QkFBd0IsWUFDeEIsdURBQXVEOzswQkFpRHBELE1BQU07MkJBQUMsd0JBQXdCOzRDQTlCeEMsT0FBTztzQkFEVixLQUFLO3VCQUFDLFNBQVM7Z0JBY1osYUFBYTtzQkFEaEIsS0FBSzt1QkFBQyxlQUFlO2dCQVVsQixhQUFhO3NCQURoQixLQUFLO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBCYXNlRWRpdG9yIH0gZnJvbSAnLi9iYXNlLWVkaXRvcic7XG5pbXBvcnQgeyBOR1hfTU9OQUNPX0VESVRPUl9DT05GSUcsIE5neE1vbmFjb0VkaXRvckNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IERpZmZFZGl0b3JNb2RlbCB9IGZyb20gJy4vdHlwZXMnO1xuXG5kZWNsYXJlIHZhciBtb25hY286IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LW1vbmFjby1kaWZmLWVkaXRvcicsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cImVkaXRvci1jb250YWluZXJcIiAjZWRpdG9yQ29udGFpbmVyPjwvZGl2PicsXG4gIHN0eWxlczogW2BcbiAgICA6aG9zdCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuXG4gICAgLmVkaXRvci1jb250YWluZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDk4JTtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIERpZmZFZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBCYXNlRWRpdG9yIHtcblxuICBfb3JpZ2luYWxNb2RlbDogRGlmZkVkaXRvck1vZGVsO1xuICBfbW9kaWZpZWRNb2RlbDogRGlmZkVkaXRvck1vZGVsO1xuXG4gIEBJbnB1dCgnb3B0aW9ucycpXG4gIHNldCBvcHRpb25zKG9wdGlvbnM6IGFueSkge1xuICAgIHRoaXMuX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbmZpZy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgaWYgKHRoaXMuX2VkaXRvcikge1xuICAgICAgdGhpcy5fZWRpdG9yLmRpc3Bvc2UoKTtcbiAgICAgIHRoaXMuaW5pdE1vbmFjbyhvcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBnZXQgb3B0aW9ucygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xuICB9XG5cbiAgQElucHV0KCdvcmlnaW5hbE1vZGVsJylcbiAgc2V0IG9yaWdpbmFsTW9kZWwobW9kZWw6IERpZmZFZGl0b3JNb2RlbCkge1xuICAgIHRoaXMuX29yaWdpbmFsTW9kZWwgPSBtb2RlbDtcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XG4gICAgICB0aGlzLl9lZGl0b3IuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5pbml0TW9uYWNvKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCdtb2RpZmllZE1vZGVsJylcbiAgc2V0IG1vZGlmaWVkTW9kZWwobW9kZWw6IERpZmZFZGl0b3JNb2RlbCkge1xuICAgIHRoaXMuX21vZGlmaWVkTW9kZWwgPSBtb2RlbDtcbiAgICBpZiAodGhpcy5fZWRpdG9yKSB7XG4gICAgICB0aGlzLl9lZGl0b3IuZGlzcG9zZSgpO1xuICAgICAgdGhpcy5pbml0TW9uYWNvKHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChOR1hfTU9OQUNPX0VESVRPUl9DT05GSUcpIHByaXZhdGUgZWRpdG9yQ29uZmlnOiBOZ3hNb25hY29FZGl0b3JDb25maWcpIHtcbiAgICBzdXBlcihlZGl0b3JDb25maWcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGluaXRNb25hY28ob3B0aW9uczogYW55KTogdm9pZCB7XG5cbiAgICBpZiAoIXRoaXMuX29yaWdpbmFsTW9kZWwgfHwgIXRoaXMuX21vZGlmaWVkTW9kZWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignb3JpZ2luYWxNb2RlbCBvciBtb2RpZmllZE1vZGVsIG5vdCBmb3VuZCBmb3Igbmd4LW1vbmFjby1kaWZmLWVkaXRvcicpO1xuICAgIH1cblxuICAgIHRoaXMuX29yaWdpbmFsTW9kZWwubGFuZ3VhZ2UgPSB0aGlzLl9vcmlnaW5hbE1vZGVsLmxhbmd1YWdlIHx8IG9wdGlvbnMubGFuZ3VhZ2U7XG4gICAgdGhpcy5fbW9kaWZpZWRNb2RlbC5sYW5ndWFnZSA9IHRoaXMuX21vZGlmaWVkTW9kZWwubGFuZ3VhZ2UgfHwgb3B0aW9ucy5sYW5ndWFnZTtcblxuICAgIGxldCBvcmlnaW5hbE1vZGVsID0gbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLl9vcmlnaW5hbE1vZGVsLmNvZGUsIHRoaXMuX29yaWdpbmFsTW9kZWwubGFuZ3VhZ2UpO1xuICAgIGxldCBtb2RpZmllZE1vZGVsID0gbW9uYWNvLmVkaXRvci5jcmVhdGVNb2RlbCh0aGlzLl9tb2RpZmllZE1vZGVsLmNvZGUsIHRoaXMuX21vZGlmaWVkTW9kZWwubGFuZ3VhZ2UpO1xuXG4gICAgdGhpcy5fZWRpdG9yQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgdGhlbWUgPSBvcHRpb25zLnRoZW1lO1xuICAgIHRoaXMuX2VkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlRGlmZkVkaXRvcih0aGlzLl9lZGl0b3JDb250YWluZXIubmF0aXZlRWxlbWVudCwgb3B0aW9ucyk7XG4gICAgb3B0aW9ucy50aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMuX2VkaXRvci5zZXRNb2RlbCh7XG4gICAgICBvcmlnaW5hbDogb3JpZ2luYWxNb2RlbCxcbiAgICAgIG1vZGlmaWVkOiBtb2RpZmllZE1vZGVsXG4gICAgfSk7XG5cbiAgICAvLyByZWZyZXNoIGxheW91dCBvbiByZXNpemUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX3dpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fd2luZG93UmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIHRoaXMuX3dpbmRvd1Jlc2l6ZVN1YnNjcmlwdGlvbiA9IGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fZWRpdG9yLmxheW91dCgpKTtcbiAgICB0aGlzLm9uSW5pdC5lbWl0KHRoaXMuX2VkaXRvcik7XG4gIH1cblxufVxuIl19