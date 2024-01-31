pipeline {
    agent any
    stages {
        stage('pull-code') {
            steps {
                // Checkout code from GitHub repository
                git credentialsId: 'githubbtoken', url: 'https://github.com/nidhi433/nodejsproject.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                bat 'npm install'
                bat 'npm install -D webpack-cli'
            }
        }
        stage('Build') {
            steps {
                // Build the project
                bat 'npm run build'
            }
        }
        stage('Test') {
    steps {
        // Install dev dependencies (if not already installed)
        bat 'npm install'

        // Run tests with code coverage
        bat 'npm test'

        // Generate code coverage report
        bat 'npm run coverage'

        // Define SonarQube scanner tool
        //def SONAR_RUNNER_HOME = tool 'sonar-scanner';

        // Run SonarQube analysis
        withSonarQubeEnv('SonarQubeScanner') {
            bat "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=serverless -Dsonar.sources=. -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info -Dsonar.java.binaries=./* -Dsonar.host.url=http://localhost:9000 -Dsonar.token=sqp_1f2bb9faac9c10381e5c27cff5fb9e9a3f890781"
        }
    }
}

        
    }
}
