Craft.Redactor={},Craft.Redactor.PluginBase={app:null,title:null,apiTarget:null,icon:null,elementSiteId:null,init:function(t){this.app=t},start:function(){this.title=this.app.lang.get(this.title)},overrideButton:function(t){var e=this.app.toolbar.getButton(t);if(e){var i=e.$icon.get(0),r=t+"_placeholder",n=this.app.toolbar.addButtonAfter(t,r,{title:this.title});e.remove();var o={title:this.title,api:this.apiTarget},a=this.app.toolbar.addButtonAfter(r,t,o);n.remove(),a.setIcon(i)}else this.addButton(t)},addButton:function(t,e){var i,r,n=this.app.toolbar.getButtonsKeys(),o={title:this.title,api:this.apiTarget};void 0!==e&&(n=this.app.toolbar.getButtons()).length>e&&(i="before",r=n[e]),this.app.toolbar.addButton(t,o,i,r).setIcon($('<i class="re-icon-'+t+'"></i>').get(0))},setElementSiteId:function(t){this.elementSiteId=t},registerCmdS:function(t,e){Garnish.shortcutManager.addLayer(),Garnish.shortcutManager.registerShortcut({keyCode:Garnish.S_KEY,ctrl:!0},(function(){t()})),Garnish.shortcutManager.registerShortcut(Garnish.ESC_KEY,(function(){e()}))},saveSelection:function(t){t.selection.isCollapsed()?(t.selection.save(),t.selectionMarkers=!1):(t.selection.saveMarkers(),t.selectionMarkers=!0)},restoreSelection:function(t){t.selectionMarkers?t.selection.restoreMarkers():t.selection.restore(),t.selectionMarkers=!1}};
//# sourceMappingURL=PluginBase.js.map