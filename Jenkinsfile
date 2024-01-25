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
        // Install dev dependencies (if not already installed)
        sh 'npm install'

        // Run tests with code coverage
        sh 'npm test'

        // Generate code coverage report
        sh 'npm run coverage'

        // Define SonarQube scanner tool
        def SONAR_RUNNER_HOME = tool 'sonar';

        // Run SonarQube analysis
        withSonarQubeEnv('sonar') {
            sh "${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=serverless -Dsonar.sources=. -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info -Dsonar.java.binaries=./* -Dsonar.host.url=http://localhost:9000 -Dsonar.token=sqp_13adff665296a8ea589fe27e68d7c8a89565a4a4"
        }
    }
}

        
    }
}
