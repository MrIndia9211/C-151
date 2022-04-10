AFRAME.registerComponent("log",{
    schema:{
        message:{Type:"string",default:"Hello,World!"}
    },
    init:function(){
        console.log(this.data.message)
    }
})