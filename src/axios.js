import axios from "axios"
axios.defaults.baseURL="http://34.192.182.160:8010/admin/login"
axios.defaults.headers.common ["Authorization"] = "Bearer" + localStorage.getItem("token");