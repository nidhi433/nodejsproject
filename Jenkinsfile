pipeline {
    agent any
    stages {
        stage('pull-code') {
            steps {
                git credentialsId: 'github_token', url: 'https://github.com/nidhi433/nodejsproject.git', branch: 'main'
            }
        }    
    }

    
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests using Mocha with NYC for code coverage
                    sh 'npm test'
                }
            }
        }

        stage('Code Coverage') {
            steps {
                script {
                    // Generate code coverage report
                    sh 'npm run coverage'
                }
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    // Run SonarQube scanner
                    sh 'npm run sonar'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Run Webpack build
                    sh 'npm run build'
                }
            }
        }

        stage('Deployment') {
            steps {
                // Your deployment steps go here
            }
        }
    }

    post {
        success {
            // Actions to perform after a successful build
            echo 'Build successful!'
        }

        failure {
            // Actions to perform after a failed build
            echo 'Build failed!'
        }

        always {
            // Actions to perform regardless of build result
            // Clean up, notifications, etc.
        }
    }
}
