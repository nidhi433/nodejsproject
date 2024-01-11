pipeline {
    agent any
    stages {
        stage('pull-code') {
            steps {
                git credentialsId: 'github_token', url: 'https://github.com/nidhi433/nodejsproject.git', branch: 'main'
            }
        }

        stage('Build') {
             steps {
             sh 'npm install'  
            }
        }

        
       // stage('Build') {
            //steps {
               // script {
                   // def nodejsHome = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    //sh "${nodejsHome}/bin/npm install"
               // }
            //}
       // }

        stage('Test') {
            steps {
                script {
                    withSonarQubeEnv('SonarQubeScanner') {
                        sh "${tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin/npm install sonar-scanner --save-dev"
                        sh "${tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin/npm run sonar"
                    }
                }
            }
        }
    }
}
