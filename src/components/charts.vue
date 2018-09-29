<template>
    <v-container>
        <center>
            <div class="mt-4">
                <v-btn @click="getLearnerData()" color="success">
                    Get Learner Data
                </v-btn>
                <v-btn @click="getPopulation()" color="success">
                    Get Population
                </v-btn>
                <v-btn v-if="piechart" @click="changeState()" color="success">
                    Bar Graph
                </v-btn>
                <v-btn v-if="barchart" @click="changeState()" color="success">
                    Pie Chart
                </v-btn>
            </div>
        </center>
        <div v-if="labels.length >0" class="mt-4">
            <BarChart v-if="barchart" :labels="labels" :data="data"></BarChart>
            <PieChart v-if="piechart" :labels="labels" :data="data"></PieChart>
        </div>
    </v-container>
</template>
 

<script>
import axios from "axios";
import Chart from 'chart.js';
import BarChart from '@/components/BarChart'
import PieChart from '@/components/PieChart'
export default {
    name:"charts",
    components:{
        BarChart,
        PieChart
    },
    data(){
        return{
            barchart:true,
            piechart:false,
            labels:[],
            data:[],
        }
    },
    methods:{
        changeState:function(){
            if(this.piechart){
                this.piechart=false;
                this.barchart=true;
            }else{
                this.piechart=true;
                this.barchart=false;
            }
        },
        getLearnerData:function(){
            this.labels=[]
            this.data=[]
            axios
                .get('https://2dd72048-769b-4f45-81ea-6d2cc9b3be3f.mock.pstmn.io/learnerType')
                .then(response => {
                    var resData = response.data;
                    //console.log(response.data)
                    for(var i = 0; i < resData.length ; i++ ){
                        this.labels.push(resData[i].Description)
                        this.data.push(resData[i].count)
                    }
                    //console.log(this.data)
                    //console.log(this.labels)
                      
                })
                setTimeout(function(){ 
                    window.dispatchEvent(new Event('resize')); 
                }, 7000);
        },
        getPopulation:function(){
            this.labels=[]
            this.data=[]
            axios
                .get('http://172.24.73.98:8080/api/v1/clc/getPopJson')
                .then(response => {
                    var resData = response.data;
                    //console.log(response.data)
                    for(var i = 0; i < resData.length ; i++ ){
                        this.labels.push(resData[i].Description)
                        this.data.push(resData[i].count)
                    }
                    //console.log(this.data)
                    //console.log(this.labels)
                      
                })
                setTimeout(function(){ 
                    window.dispatchEvent(new Event('resize')); 
                }, 7000);
        }
        
    }
}
</script>
<style scoped>

</style>
