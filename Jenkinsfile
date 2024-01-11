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
             sh 'npm run build --prod'
            }
        }

         stage('Test') {
             steps('SonarQube Analysis') {
                withSonarQubeEnv('SonarQubeScanner') {
                    sh 'npm install sonar-scanner --save-dev'
                    sh 'npm run sonar'
                }
            }
        }
         stage('Deploy') {
            steps {
                 deploy adapters: [tomcat9(credentialsId:…
