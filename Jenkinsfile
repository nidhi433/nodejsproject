pipeline {
    agent any
    stages {
        stage('pull-code') {
            steps {
                git credentialsId: 'github_token', url: 'https://github.com/nidhi433/nodejsproject.git', branch: 'main'
            }
        }
        
    stage('Build') {
       steps {
            script {
            bat 'npm install'
        }
    }
}
      
    }
}
