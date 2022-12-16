<template>
    <div class="container">
        <h3 class="h3">Users</h3>
        <div class="filter_container">
            <input type="search" name="search" id="" v-model="searchValue" placeholder="Search">
            <!-- <div id="sort-bar">
                <label for="sortBy">
                    Sort
                </label>
                    <select name="sortBy" id="select" v-model="sortBy">
                    <option  value="">select</option>
                    <option value="alphabetically">Alphabetically</option>
                    <option value="cookingTime">Cooking Time</option>
                    </select>
            </div> -->
            <button class="add_button">Add User</button>
        </div>
    </div>
</template>

<script>
    export default {
   data(){
    return {
        recipes: [
      {title: 'Pizza',
       description: 'Yummy pizza for those lazy days', 
       ingredients: ['Dough', 'Tomato Paste', 'Cheese', 'Bell Pepper', 'Onion'],
       cookingTime: 60,
       img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
    {title: 'Burritos', 
     description: 'Healthy yet very tasty burritos', 
     ingredients: ['Burritos', 'Kidney beans', 'Onion', 'Tomato', 'Bell Pepper'], 
      cookingTime: 30,
      img: 'https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
     {title: 'Tomato Soup', 
      description: 'A tasty tomato soup for the cold winter',
      ingredients: ['Tomatoes', 'Onion', 'Oregano'], 
      cookingTime: 45,
      img: 'https://images.unsplash.com/photo-1553881781-4c55163dc5fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'},
      {title: 'Ice Cream', 
       description: 'Just because... Ice Cream', 
       ingredients: ['Whole milk', 'Cream', 'Eggs', 'Sugar'],
       cookingTime: 120,
       img: 'https://images.unsplash.com/photo-1515037028865-0a2a82603f7c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1321&q=80'},
    ]
    }
   },
  
  mounted: function() {
    this.selectedCategory = 0;
    this.selectedItem = 0;
  },

  computed: {
	sortedArray() {
		let sortedRecipes = this.recipes;
		
		sortedRecipes = sortedRecipes.sort((a,b) => {
			let fa = a.title.toLowerCase(), fb = b.title.toLowerCase();
			if (fa < fb) {
				return -1
			}
			if (fa > fb) {
				return 1
			}
			return 0
		})
	}
}}
</script>

<style scoped>
.h3 {
    width: 100%;
}
#sort-bar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

input {
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
</style>