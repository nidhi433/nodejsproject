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
        stage('Test') {
            steps {
                // Run tests with code coverage
                sh 'npm test'

                // Generate code coverage report
                sh 'npm run coverage'
            }
        }
        stage('SonarQube Analysis') {
            environment {
                // Define SonarScanner tool
                SONAR_RUNNER_HOME = tool 'SonarQube Scanner 3.0.3'
            }
            steps {
                // Run SonarQube analysis
                sh "${SONAR_RUNNER_HOME}/bin/sonar-scanner \
                    -Dsonar.projectKey=serverless \
                    -Dsonar.sources=. \
                    -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
                    -Dsonar.java.binaries=./* \
                    -Dsonar.host.url=http://localhost:9000 \
                    -Dsonar.login=sqp_e8d0cc6ade1a98d0c7b6f83c5a6621c515a1a77a"
            }
        }
    }
}
