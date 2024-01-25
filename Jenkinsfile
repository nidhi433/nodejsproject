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
        def scannerHome = tool 'sonar';
        withSonarQubeEnv('SonarQubeScanner') {
        sh "${sonarScannerHome}/bin/sonar-scanner -Dsonar.projectKey=serverless -Dsonar.sources=. -Dsonar.login=sqp_13adff665296a8ea589fe27e68d7c8a89565a4a4"
        }``
     }
  }
}
