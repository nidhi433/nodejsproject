pipeline {
    agent any
     stages {
        stage('pull-code') {
            steps {
                 git credentialsId: 'Github_token', url: 'https://github.com/nidhi433/nodejsproject.git', branch: 'main'
            }
        }
  stage('Install Dependencies') {
        steps {
            script {
                    // Install Node.js dependencies
                sh 'npm install'
                sh 'npm install -D webpack-cli'
            }
        }
    }  
       
    stage('Build') {
       steps {
            sh 'npm run build'
    }
}
    stage('Test') {
            steps {
                script {
                    withSonarQubeEnv('SonarQubeScanner') {
                       sh 'sonar-scanner -Dsonar.projectKey=serverless -Dsonar.sources=.'
                        /def sonarScannerHome = tool 'sonar-scanner'
                        sh "${sonarScannerHome}/bin/sonar-scanner -Dsonar.projectKey=serverless -Dsonar.sources=. -Dsonar.login=sqp_28e1b0f59370f4cce75e23121b8dacadc0d81561"
                    }
                }
            }
        }
    }
}
