var config
if(process.env.NODE_ENV == "production"){
    config = {
        "GCLOUD_PROJECT": "35.187.241.111",
        "DATA_BACKEND": "cloudsql",
        "MYSQL_USER": "nodejs",
        "MYSQL_PASSWORD": "jjfwo^s9*:qUsYde%",
        "INSTANCE_CONNECTION_NAME": "mysigrid-178604:asia-southeast1:datalake"
    }
}else{
    config= {
        "GCLOUD_PROJECT": "localhost",
        "DATA_BACKEND": "cloudsql",
        "MYSQL_USER": "admin",
        "MYSQL_PASSWORD": "password",
        "INSTANCE_CONNECTION_NAME": "mysigrid"
    }
}

module.exports = config