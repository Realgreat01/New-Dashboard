<template>
    <div class="container">
        <h3 class="h3">Users</h3>
        <div class="filter_container">
            <input type="search" name="search" id="" placeholder="Search" v-model="search">
            <button class="add_button">Add User</button>
        </div>
            <table>
                <tr>
                    <td>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    </td>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Designation</th>
                    <th>State</th>
                    <th>Status</th>
                </tr>
                <tr v-for="(user, index) in filterUsers" :key="index">
                    <td>
                        <input type="checkbox" id="vehicle2" name="vehicle1" value="Bike" />
                    </td>
                    <td>{{ user.user_id }}</td>
                    <td>{{ user.first_name }} {{ user.last_name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.phone_number }}</td>
                    <td>{{ user.designation }}</td>
                    <td>{{ user.state }}</td>
                    <td>{{ user.is_active }}</td>
                    <td><a href="#">
                        <img src="../assets/Dots.svg" alt="menu dots" srcset="" />
                    </a></td>
                </tr>
                
            </table>
    </div>
</template>

<script>
import axios from "axios"
    export default {
   data(){
    return {
        users: [],
        userprofiles: [],
        search:""
    }
   },
  
//   mounted: function() {
//     this.selectedCategory = 0;
//     this.selectedItem = 0;
//   },

  computed: {
    filterUsers:function(){
        this.userWithProfiles = this.users.map(
            user => Object.assign({},
                user, this.userprofiles.find(userprofile => userprofile.user_id == user.id)
            )
        );
        return this.userWithProfiles.filter((userWithProfile)=>{
            return userWithProfile.email.match(this.search);
        })
    }
	// sortedArray() {
	// 	let sortedRecipes = this.recipes;
		
	// 	sortedRecipes = sortedRecipes.sort((a,b) => {
	// 		let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
	// 		if (fa < fb) {
	// 			return -1
	// 		}
	// 		if (fa > fb) {
	// 			return 1
	// 		}
	// 		return 0
	// 	})
	// }
},
created(){
    axios.get("http://34.192.182.160:8010/admin/users", {
        headers: { 
          Authorization: "Bearer " + localStorage.getItem ("token")
        }
    }).then(response => {
        // console.log(response.data)
      this.users = response.data.data;
    });

    axios.get("http://34.192.182.160:8010/admin/userprofiles", {
        headers: { 
          Authorization: "Bearer " + localStorage.getItem ("token")
        }
    }).then(response => {
      this.userprofiles = response.data.data;
    });
    // var Info = []
    // axios.get('https://jsonplaceholder.typicode.com/users').then(function(response){
    //     console.log(response.data)
    //     this.$set("users", response.data)
    // console.log(this.users)
    //      Info = response.data
    //     console.log(Info)
        
        
    //     // response.data = this.users
    //     // console.log(this.users)
    // })
   
}}
</script>

<style lang="scss" scoped>
.h3 {
    width: 100%;
}
#sort-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}



input[type=search] {
    width: 100%;
    height: 40px;
    border: 1px solid #EAEAEA;
    outline: none;
    padding: 0 10px;
}
.container {
    width: 100%;
    background-color: #f9f9f9;
    gap: 40px;
    display: flex;
    flex-direction: column;
}
.filter_container {
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 20px;
align-items: center;
width: 100%;
background: #FFFFFF;
border: 1px solid #DEDEDE;
padding: 15px 20px;
}
.add_button {
    border: none;
    background-color: #000000;
    color: #ffffff;
    font-weight: 500;
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;

}

th, td {
  text-align: left;
  padding: 16px;
  font-size: 14px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
.avatar {
    background-color: #2aaa0b;
    // padding: 10px;
    width: 100%;
    border-radius: 50%;
}
/*  */

</style>