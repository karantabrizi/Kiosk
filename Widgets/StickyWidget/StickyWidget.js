Clazz.StickyWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(data){
            this.data = data;
            this.templateUrl = "./Widgets/StickyWidget/stickyWidget.html";
            this.templateProvider = TemplateProvider.ANGULAR;
        }
});
