pipeline {
    agent any
     stages {
        stage('pull-code') {
            steps {
                git credentialsId: 'github_token', url: 'https://github.com/nidhi433/nodejsproject.git', branch: 'main'
            }
        }
  stage('Install Dependencies') {
        steps {
            script {
                    // Install Node.js dependencies
                bat 'npm install'
                bat 'npm install -D webpack-cli'
            }
        }
    }   
        
    stage('Build') {
       steps {
            bat 'npm run build'
    }
} 
    stage('Test') {
            steps {
                script {
                    withSonarQubeEnv('SonarQubeScanner') {
                        bat 'sonar-scanner -Dsonar.projectKey=serverless -Dsonar.sources=.'
                        bat 'npm run build'
                        def sonarScannerHome = tool 'sonar-scanner'
                        bat "${sonarScannerHome}/bin/sonar-scanner -Dsonar.projectKey=serverless -Dsonar.sources=."
                    }
                }
            }
        }
    }
}
