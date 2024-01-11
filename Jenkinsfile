pipeline {
    agent any
    tools{
       nodejs'v20.11.0' 
}
    stages {
        stage('pull-code') {
            steps {
                 url: 'https://github.com/nidhi433/nodejsproject.git'
            }
        }
         stage('Build') {
             steps {
             sh 'npm install'  
            }
        }

        
         
