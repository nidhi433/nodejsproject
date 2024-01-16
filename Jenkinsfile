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
            script {
            bat 'npm install'
        }
    }
} 
    stage('Test') {
            steps {
                script {
                    withSonarQubeEnv('sonar_token') {
                    
                            sh 'npm install sonar-scanner --save-dev'
                            sh 'sonar-scanner -Dsonar.projectKey=serverless -Dsonar.sources=.'
                        
                            def sonarScannerHome = tool 'sonar-scanner'
                            bat "${sonarScannerHome}/bin/sonar-scanner -Dsonar.projectKey=serverless -Dsonar.sources=."
                    }
                }
            }
        }
    }
}
