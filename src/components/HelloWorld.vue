<template>
  <div class="containerss">
      <div class="greeting">
      <div>
        <p>Hi {{user.name}}</p>
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
      <br />
      <br />
      <div class="metrics_container">
        <div class="first_card">
          <div class="inner">
            <div class="section_one">
              <img src="../assets/organization_icon.svg" alt="organization_icon">
              <div>
                <h4>Organization</h4>
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
        <div class="first_set">
          <div class="public_div">
            <img src="../assets/public_icon.svg" alt="">
            <div>
              <h4>Public Networks</h4>
              <br />
              <p>{{dashboard.public_network}}</p>
            </div>
          </div>
          <div class="public_div">
            <img src="../assets/private_network.svg" alt="">
            <div>
              <h4>Private Networks</h4>
              <br />
              <p>{{dashboard.private_network}}</p>
            </div>
          </div>
        </div>
        <div class="first_set">
          <div class="public_div">
            <img src="../assets/user_icon.svg" alt="">
            <div>
              <h4>Users</h4>
              <br />
              <p>{{dashboard.public_network}}</p>
            </div>
          </div>
          <div class="public_div">
            <img src="../assets/driver_icon.svg" alt="">
            <div>
              <h4>Drivers</h4>
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
import VueApexCharts from 'vue-apexcharts'
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
export default {
  name: "HelloWorld",
  data: () => ({
    user: {
      name: "Tomi Arayomi",
      initials: "TA",
      userName: "Yomi"
    },
    dashboard: {
      organization: "29k",
      drivers: "437k",
      users: "56",
      public_network: "122k",
      private_network: "130k",
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
  })}
</script>

<style  scoped>
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
  align-items: stretch;
  border-radius: 10px;
  margin-top: 50px;
  margin-left: 20%;
  background-color: #F9F9F9;
  display: flex;
  gap: 70px;
  padding: 0 20px;
  box-sizing: border-box;
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
  width: 350px;
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


<!-- <template>
  <div class="containerss">
    <div class="greeting">
      <div>
        <p>Hi {{user.name}}</p>
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
    <div class="metrics_cards">
      <div class="first_card">
        <img src="../assets/overview_profileAvatar.svg" alt="" />
        <div class="org_div">
          <p>{{dashboard.organization}}</p>
          <p class="org_div_p">Organzations</p>
        </div>
      </div>
      <div class="first_card">
        <img src="../assets/DR.svg" alt="" />
        <div class="org_div">
          <p>{{dashboard.drivers}}</p>
          <p class="org_div_p">Drivers</p>
        </div>
      </div>
      <div class="first_card">
        <img src="../assets/RD.svg" alt="" />
        <div class="org_div">
          <p>{{dashboard.riders}}</p>
          <p class="org_div_p">Riders</p>
        </div>
      </div>
      <div class="first_card">
        <img src="../assets/PBN.svg" alt="" />
        <div class="org_div">
          <p>{{dashboard.private_network}}</p>
          <p class="org_div_p">Private Networks</p>
        </div>
      </div>
      <div class="first_card">
        <img src="../assets/PRN1.svg" alt="" />
        <div class="org_div">
          <p>{{dashboard.public_network}}</p>
          <p class="org_div_p">Public Networks</p>
        </div>
      </div>
    </div>
    <div class="chart_container">
      <apexchart type="bar" :options="options" :series="series"></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
export default {
  name: "HelloWorld",
  data: () => ({
    user: {
      name: "Tomi Arayomi",
      initials: "TA"
    },
    dashboard: {
      organization: "29k",
      drivers: "437k",
      riders: "56",
      lastupdate: today,
      public_network: "122k",
      private_network: "130k"
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
}
</script>
<style scoped>
.greeting {
  color: #404040;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

.containerss {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 10px;
  margin-top: 50px;
  margin-left: 20%;
  background-color: #F9F9F9;
  display: flex;
  gap: 70px;
  padding: 0 20px;
  box-sizing: border-box;
}

form {
  color: #404040;
  display: flex;
  padding: 5px;
  border: none;
  border-radius: 10px;
  margin: 0;
  background-color: #ffffff;
}

input[type="search"] {
  border: none;
  background: transparent;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border: none;
  border-radius: 10px;
  outline: none;
}

input[type="search"]::placeholder {
  color: #bbb;
}

button[type="submit"]:focus,
input[type="search"]:focus {
  box-shadow: 0 0 3px 0 #dddddd;
  border-color: #2AAA0B;
  outline: none;
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

.first_card {
  background-color: #ffffff;
  width: 100%;
  border-radius: 12px;
  width: 300px;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  /* gap: 30px; */
}

.first_card:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.org_div_p {
  color: #404040;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  font-weight: 600;
}

.bottom_update {
  font-size: small;
  background-color: #2AAA0B;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 0 0 12px 12px;
}

.metrics_cards {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  gap: 50px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 50px;
}


.graph {
  width: 100%;
}

.card_container {
  background-color: #ffffff;
}

/* .org_card {
  width: 300px !important;
  height: 250px;
  background-color: red;
  display: flex;
  flex-direction: column;
} */

.chart_container {
  background-color: #ffffff;
  width: 100%;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 40px;
}
</style> -->

