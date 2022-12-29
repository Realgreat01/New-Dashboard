<template>
  <div class="containerss">
      <div class="greeting">
      <div>
        <p v-if="user" >Hi, {{user.email}}</p>
        <h1>Welcome Back</h1>
      </div>
      <div></div>
      <div></div>
      <div></div>
        <div class="input_container">
          <form class="nosubmit">
            <input class="nosubmit" type="search" placeholder="Search...">
          </form>
        </div>
      </div>
      <div class="grid-container">
      <div class="first_card">
          <div class="inner">
            <div class="section_one">
              <img src="../assets/organization_icon.svg" alt="organization_icon">
              <div>
                <h5>Organization</h5>
                <br />
                <p>{{dashboard.organization}}</p>
              </div>
            </div>
            <div class="last_updated">
              <small>Last Updated</small>
              <small>{{dashboard.lastupdate}}</small>
            </div>
          </div>
      </div>
     <div class="grid-container-div">
      <div class="public_div">
            <img class="img_small" src="../assets/user_icon.svg" alt="">
            <div>
              <h5>Public Network</h5>
              <br />
              <p>{{dashboard.public_network}}</p>
            </div>
          </div>
      <div class="public_div">
            <img class="img_small" src="../assets/user_icon.svg" alt="">
            <div>
              <h5>Private Network</h5>
              <br />
              <p>{{dashboard.private_network}}</p>
            </div>
          </div>
     </div>
     <div class="grid-container-div">
      <div class="public_div">
            <img class="img_small" src="../assets/user_icon.svg" alt="">
            <div>
              <h5>Users</h5>
              <br />
              <p>{{dashboard.users}}</p>
            </div>
          </div>
      <div class="public_div">
            <img class="img_small" src="../assets/user_icon.svg" alt="">
            <div>
              <h5>Drivers</h5>
              <br />
              <p>{{dashboard.drivers}}</p>
            </div>
          </div>
     </div>
    </div>
      <div class="chart_container">
      <apexchart type="bar" :options="options" :series="series"></apexchart>
    </div>
    
 
  </div>
</template>

<script>
import apexchart from 'vue-apexcharts'
import { mapState } from 'vuex';
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

const getDAshboard = await axios.get("http://34.192.182.160:8010/admin/dashboard", 
{
  headers:
  { 
     Authorization: "Bearer" + localStorage.getItem ("user")
  }
});
let organization = 0;
let drivers = 0;
let users = 0;
let public_network = 0;
let private_network = 0;
if (getDAshboard.status === 200 && getDAshboard.data.status === "success") {
    getDAshboard = getDAshboard.data.data;
    organization = getDAshboard?.organization;
    drivers = getDAshboard?.drivers;
    users = getDAshboard?.users;
    public_network = getDAshboard?.public_network;
    private_network = getDAshboard?.private_network;
}


export default {
  name: "HelloWorld",
  data: () => ({
    dashboard: {
      organization,
      drivers,
      users,
      public_network,
      private_network,
      lastupdate: yyyy,
    },
    options: {
      chart: {
        id: 'vuechart-example',
        width: '100%'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [{
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }]
  }),
    computed :{
      ...mapState(["user"])
   }
   }
</script>

<style  scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  gap: 40px;
  width: 100%;
}
.img_small {
  width: 50px;
}
.grid-container-div {
  display: grid;
  gap: 30px;
  width: 100%;
}
  h5 {
    color: #404040;
  }
  .greeting {
  color: #404040;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.containerss {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 50px;
  /* margin-left: 20%; */
  background-color: #F9F9F9;
  display: flex;
  gap: 70px;
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
}
.input_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background-color: #ffffff;
  border-radius: 10px;
  /* margin-top: 50px; */
}
form.nosubmit {
  border: none;
  padding: 0;
}

input.nosubmit {
  border: none;
  width: 300px;
  padding: 9px 4px 9px 40px;
  background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
}
.metrics_container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
}
.section_one {
  display: flex;
  flex-direction: row;
  justify-content:start !important;
  align-items:center;
  width: 100%;
}

.last_updated {
  display: flex;
  gap: 100px;
}
.first_card {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 15px;
}
.inner {
  padding: 30px 30px 30px 10px;
  width: 100%;
  display: flex;
  gap: 150px;
  flex-direction: column;
  justify-content: center;
}
.public_div {
  display: flex;
  gap: 30px;
  padding: 20px 50px;
  background-color: #ffffff;
  border-radius: 10px;
  height: 123px;
  width: 300px;
}
.first_set {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}
.secondSet_cards {
  width: 70%;
  display: flex;
}
.chart_container {
  background-color: #ffffff;
  width: 100%;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 40px;
}


</style>


