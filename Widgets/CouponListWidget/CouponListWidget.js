Clazz.CouponListWidget = Clazz.extend(
    Clazz.WidgetWithTemplate,{
    
        initialize : function(data){
            this.data = data;
            this.templateUrl = "./Widgets/CouponListWidget/couponListWidget.html";
            this.templateProvider = TemplateProvider.ANGULAR;
        }
});
