pipeline {
    agent any

    tools {
        nodejs 'nodejs10' // Use the appropriate version here
    }

    stages {
        stage('pull-code') {
            steps {
                git credentialsId: 'github_token', url: 'https://github.com/nidhi433/nodejsproject.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    withSonarQubeEnv('SonarQubeScanner') {
                        sh 'npm install sonar-scanner --save-dev'
                        sh 'npm run sonar'
                    }
                }
            }
        }
    }
}
