pipeline {
    agent any
    stages {
        stage('pull-code') {
            steps {
                // Checkout code from GitHub repository
                git credentialsId: 'Github_token', url: 'https://github.com/nidhi433/nodejsproject.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
                sh 'npm install -D webpack-cli'
            }
        }
        stage('Build') {
            steps {
                // Build the project
                sh 'npm run build'
            }
        }
        
    }
}
