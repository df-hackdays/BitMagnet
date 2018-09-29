import Router from 'vue-router'
import Charts from "@/components/charts"
import Survey from "@/components/survey"

export default new Router({
    routes:[
        {
            path: '/',
            name: 'Home',
            components:{
                mainView:Survey
            }
        },
        {
            path:'/admin',
            name:'Admin',
            components:{
                mainView:Charts
            }
        }
    ]
})