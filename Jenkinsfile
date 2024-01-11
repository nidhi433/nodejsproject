pipeline {
    agent any

    tools {
        NodeJS 'NodeJS' 
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
                    def nodejsHome = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    sh "${nodejsHome}/bin/npm install"
                }
            }
        }

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
