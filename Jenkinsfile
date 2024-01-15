pipeline {
    agent any
    environment {
        SONAR_SCANNER_HOME = tool 'sonar-scanner'
    }
    stages {
        stage('pull-code') {
            steps {
                git credentialsId: 'github_token', url: 'https://github.com/nidhi433/nodejsproject.git', branch: 'main'
            }
        }
        
    stage('Build') {
       steps {
            script {
            bat 'npm install'
        }
    }
} 
     stage('Test') {
            steps {
                script {
                    withSonarQubeEnv('sonartoken') {
                        if (isUnix()) {
                           sh 'npm install sonar-scanner --save-dev'
                           sh 'npm run sonar'
                        } else {
                           // bat 'npm install sonar-scanner --save-dev'
                           // bat 'sonar-scanner'
                             def sonarScannerHome = tool 'sonar-scanner'
                             bat "${sonarScannerHome}/bin/sonar-scanner"
                        }
                    }
                }
            }
        }
    }
}
