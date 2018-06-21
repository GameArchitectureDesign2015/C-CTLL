cc.Class({
    extends: cc.Component,
    
    properties: {
        tilesController:require("TilesController")
    },
    
    onLoad: function(){
        this.tilesController.init(this);
    },
})
