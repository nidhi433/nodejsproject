pipeline {
    agent any
    tools{
       nodejs'v20.11.0' 
}
    stages {
        stage('pull-code') {
            steps {
               git credentialid:'github_token', url:'https://github.com/nidhi433/nodejsproject.git'
            }
        }
         stage('Build') {
             steps {
             sh 'npm install'  
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
        
         
