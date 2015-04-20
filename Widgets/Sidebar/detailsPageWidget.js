Clazz.detailsPageWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(config){
            this.data = config;
            this.templateUrl = "detailsPageContainer.html";
        }
});