<template>
  <div class="container">
    <h1>Hello Bitches, It's your daddy !!</h1>
 <div class="create-Msg">
   <label for="create-Msg">Message: </label>
   <input type="text" id="create-Msg" v-model="text" placeholder="Enter message">
   <button v-on:click="createMsg">Save!</button>
 </div>
  <hr> 
  <p class= "error" v-if="error">{{ error }}</p>
  <div class="Msg-container">
    <div class="Msg"
    v-for="(Msg, index) in Msg" 
    v-bind:item="Msg"
    v-bind:index="index"
    v-bind:key="Msg._id"
    v-on:dblclick="deleteMsg(Msg._id)">

    <div class="created-at">
      {{ `${Msg.createdAt.getDate()}/${Msg.createdAt.getMonth()+1}/${Msg.createdAt.getFullYear()}`}}
    </div>
    
    <p class="text">{{Msg.text}}</p>
    </div>
  </div>
</div>
</template>

<script>
import MsgService from '../MsgService';

export default {
  name: 'MsgComponent',
  data(){
    return {
      Msg: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.Msg = await MsgService.getMsg();
    } catch(err){
      this.error = err.message;

    }
  },
  methods: {
    async createMsg(){
      await MsgService.insertMsg(this.text);
      this.Msg = await MsgService.getMsg();
    },
    async deleteMsg(id){
      await MsgService.deleteMsg(id);
      this.Msg = await MsgService.getMsg();
    }
  },
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin:  0 auto;

}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
div.Msg {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}
div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}
p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
